import {
  ChangeDetectionStrategy,
  Component,
  DestroyRef,
  ElementRef,
  afterNextRender,
  computed,
  forwardRef,
  inject,
  input,
  output,
  signal,
  untracked,
} from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { DOCUMENT } from '@angular/common';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { fromEvent } from 'rxjs';

import { BrightrailButtonIconComponent } from '../../buttons/brightrail-button-icon.component';
import { BrightrailComboboxOption } from './brightrail-combobox.types';

@Component({
  selector: 'brightrail-combobox',
  standalone: true,
  imports: [BrightrailButtonIconComponent],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => BrightrailComboboxComponent),
      multi: true,
    },
  ],
  templateUrl: './brightrail-combobox.component.html',
  styleUrl: './brightrail-combobox.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    class: 'br-combobox-host',
    '[class.br-combobox-host--full]': 'fullWidth()',
  },
})
export class BrightrailComboboxComponent implements ControlValueAccessor {
  private static nextId = 0;
  private readonly uid = `br-cbx-${BrightrailComboboxComponent.nextId++}`;

  private readonly host = inject(ElementRef<HTMLElement>);
  private readonly document = inject(DOCUMENT);
  private readonly destroyRef = inject(DestroyRef);

  readonly options = input<BrightrailComboboxOption[]>([]);
  readonly placeholder = input('Search or select…');
  readonly filterable = input(true);
  readonly disabled = input(false);
  readonly fullWidth = input(true);
  readonly ariaLabel = input<string | undefined>(undefined);

  readonly valueChange = output<string>();

  protected readonly isOpen = signal(false);
  protected readonly filterText = signal('');
  private readonly valueModel = signal('');
  private readonly disabledFromCva = signal(false);

  private onChange: (v: string) => void = () => {};
  private onTouched: () => void = () => {};

  readonly controlId = computed(() => this.uid);
  readonly listboxId = computed(() => `${this.uid}-listbox`);

  readonly effectiveDisabled = computed(() => this.disabled() || this.disabledFromCva());

  readonly filteredOptions = computed(() => {
    const query = this.filterText().trim().toLowerCase();
    const opts = this.options();
    if (!this.filterable() || query.length === 0) {
      return opts;
    }
    return opts.filter((opt) => opt.label.toLowerCase().includes(query));
  });

  readonly selectedLabel = computed(() => {
    const value = this.valueModel();
    const match = this.options().find((opt) => opt.value === value);
    return match?.label ?? value;
  });

  readonly displayValue = computed(() => {
    if (this.isOpen() && this.filterable()) {
      return this.filterText();
    }
    return this.selectedLabel();
  });

  readonly showPlaceholder = computed(
    () => this.displayValue().trim().length === 0 && this.filterText().trim().length === 0,
  );

  constructor() {
    afterNextRender(() => {
      fromEvent(this.document, 'click', { capture: true })
        .pipe(takeUntilDestroyed(this.destroyRef))
        .subscribe((ev) => {
          if (!this.isOpen()) {
            return;
          }
          const target = ev.target;
          if (!(target instanceof Node) || !this.host.nativeElement.contains(target)) {
            this.closePanel();
          }
        });

      fromEvent<KeyboardEvent>(this.document, 'keydown', { capture: true })
        .pipe(takeUntilDestroyed(this.destroyRef))
        .subscribe((ev) => {
          if (!this.isOpen()) {
            return;
          }
          if (ev.key === 'Escape') {
            ev.preventDefault();
            this.closePanel();
          }
        });
    });
  }

  writeValue(val: string | null): void {
    const next = val ?? '';
    untracked(() => {
      this.valueModel.set(next);
      this.filterText.set(this.resolveLabel(next));
    });
  }

  registerOnChange(fn: (v: string) => void): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: () => void): void {
    this.onTouched = fn;
  }

  setDisabledState(isDisabled: boolean): void {
    this.disabledFromCva.set(isDisabled);
  }

  onInputFocus(): void {
    if (this.effectiveDisabled()) {
      return;
    }
    this.isOpen.set(true);
    if (this.filterable()) {
      this.filterText.set(this.selectedLabel());
    }
  }

  onInputInput(value: string): void {
    if (!this.filterable()) {
      return;
    }
    this.filterText.set(value);
    this.isOpen.set(true);
  }

  onInputKeydown(ev: KeyboardEvent): void {
    if (ev.key === 'ArrowDown' || ev.key === 'ArrowUp') {
      ev.preventDefault();
      this.isOpen.set(true);
    }
    if (ev.key === 'Enter') {
      const first = this.filteredOptions().find((opt) => !opt.disabled);
      if (first) {
        ev.preventDefault();
        this.selectOption(first);
      }
    }
  }

  onPanelKeydown(ev: KeyboardEvent): void {
    if (ev.key === 'Escape') {
      ev.preventDefault();
      ev.stopPropagation();
      this.closePanel();
    }
  }

  togglePanel(ev: Event): void {
    ev.preventDefault();
    if (this.effectiveDisabled()) {
      return;
    }
    if (this.isOpen()) {
      this.closePanel();
    } else {
      this.isOpen.set(true);
      this.onTouched();
    }
  }

  onBlur(): void {
    this.onTouched();
  }

  selectOption(option: BrightrailComboboxOption): void {
    if (option.disabled) {
      return;
    }
    this.valueModel.set(option.value);
    this.filterText.set(option.label);
    this.onChange(option.value);
    this.valueChange.emit(option.value);
    this.closePanel();
    this.onTouched();
  }

  isSelected(option: BrightrailComboboxOption): boolean {
    return this.valueModel() === option.value;
  }

  private closePanel(): void {
    this.isOpen.set(false);
    this.filterText.set(this.resolveLabel(this.valueModel()));
  }

  private resolveLabel(value: string): string {
    const match = this.options().find((opt) => opt.value === value);
    return match?.label ?? value;
  }
}
