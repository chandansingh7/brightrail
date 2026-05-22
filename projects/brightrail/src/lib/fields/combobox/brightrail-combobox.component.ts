import {
  ChangeDetectionStrategy,
  Component,
  DestroyRef,
  ElementRef,
  afterNextRender,
  computed,
  effect,
  forwardRef,
  inject,
  input,
  output,
  signal,
  untracked,
} from '@angular/core';
import { BRIGHTRAIL_FX_SHELL_HOST } from '../../futuristic/brightrail-futuristic-host';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { DOCUMENT } from '@angular/common';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { fromEvent } from 'rxjs';

import { BrightrailButtonIconComponent } from '../../buttons/brightrail-button-icon.component';
import { BrightrailComboboxOption } from './brightrail-combobox.types';
import {
  activateListboxOption,
  clampListboxIndex,
  ensureListboxOptionIds,
  queryEnabledListboxOptions,
  resolveListboxKeyAction,
  stepListboxIndex,
} from '../../platform/brightrail-listbox-keyboard.utils';

@Component({
  selector: 'brightrail-combobox',
  hostDirectives: [BRIGHTRAIL_FX_SHELL_HOST],
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
  protected readonly activeOptionIndex = signal(-1);
  private listboxOptionsCache: HTMLElement[] = [];

  private onChange: (v: string) => void = () => {};
  private onTouched: () => void = () => {};

  readonly controlId = computed(() => this.uid);
  readonly listboxId = computed(() => `${this.uid}-listbox`);

  readonly activeDescendantId = computed((): string | null => {
    if (!this.isOpen()) {
      return null;
    }
    const idx = this.activeOptionIndex();
    return this.listboxOptionsCache[idx]?.id ?? null;
  });

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
    effect(() => {
      this.filteredOptions();
      if (this.isOpen()) {
        untracked(() => queueMicrotask(() => this.syncListboxOptions()));
      }
    });

    effect(() => {
      if (this.isOpen()) {
        untracked(() => queueMicrotask(() => this.syncListboxOptions()));
      } else {
        untracked(() => this.activeOptionIndex.set(-1));
      }
    });

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
    this.handleListboxKeydown(ev, true);
  }

  onPanelKeydown(ev: KeyboardEvent): void {
    this.handleListboxKeydown(ev, false);
  }

  private handleListboxKeydown(ev: KeyboardEvent, fromInput: boolean): void {
    if (this.effectiveDisabled()) {
      return;
    }

    const action = resolveListboxKeyAction(ev.key);
    if (action === 'none') {
      return;
    }

    if (!this.isOpen()) {
      if (action === 'next' || action === 'prev' || action === 'select') {
        ev.preventDefault();
        this.isOpen.set(true);
        queueMicrotask(() => {
          this.syncListboxOptions();
          this.applyListboxAction(action, fromInput);
        });
      }
      return;
    }

    ev.preventDefault();
    if (action === 'close') {
      this.closePanel(fromInput);
      return;
    }
    this.applyListboxAction(action, fromInput);
  }

  private applyListboxAction(
    action: ReturnType<typeof resolveListboxKeyAction>,
    returnFocusToInput: boolean,
  ): void {
    const count = this.listboxOptionsCache.length;
    if (count === 0) {
      if (action === 'close') {
        this.closePanel(returnFocusToInput);
      }
      return;
    }

    let index = this.activeOptionIndex();
    switch (action) {
      case 'next':
        index = stepListboxIndex(index, 1, count);
        break;
      case 'prev':
        index = stepListboxIndex(index, -1, count);
        break;
      case 'first':
        index = 0;
        break;
      case 'last':
        index = count - 1;
        break;
      case 'select': {
        const optionEl = this.listboxOptionsCache[index];
        if (optionEl) {
          activateListboxOption(optionEl);
        }
        this.closePanel(returnFocusToInput);
        return;
      }
      case 'close':
        this.closePanel(returnFocusToInput);
        return;
      default:
        return;
    }

    this.activeOptionIndex.set(clampListboxIndex(index, count));
  }

  private syncListboxOptions(): void {
    const panel = this.host.nativeElement.querySelector(
      `#${CSS.escape(this.listboxId())}`,
    ) as HTMLElement | null;
    if (!panel) {
      this.listboxOptionsCache = [];
      this.activeOptionIndex.set(-1);
      return;
    }

    const options = queryEnabledListboxOptions(panel);
    ensureListboxOptionIds(options, this.controlId());
    this.listboxOptionsCache = options;

    const selectedValue = this.valueModel();
    let start = options.findIndex((option) => option.getAttribute('aria-selected') === 'true');
    if (start < 0 && selectedValue) {
      start = this.filteredOptions().findIndex((option) => option.value === selectedValue);
    }
    this.activeOptionIndex.set(start >= 0 ? start : options.length > 0 ? 0 : -1);
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

  private closePanel(returnFocusToInput = false): void {
    this.isOpen.set(false);
    this.filterText.set(this.resolveLabel(this.valueModel()));
    if (returnFocusToInput) {
      queueMicrotask(() => {
        (
          this.host.nativeElement.querySelector('.br-combobox__input') as HTMLInputElement | null
        )?.focus();
      });
    }
  }

  private resolveLabel(value: string): string {
    const match = this.options().find((opt) => opt.value === value);
    return match?.label ?? value;
  }
}
