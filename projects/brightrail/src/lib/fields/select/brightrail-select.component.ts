import {
  ChangeDetectionStrategy,
  Component,
  DestroyRef,
  ElementRef,
  afterNextRender,
  afterRenderEffect,
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
import { DOCUMENT } from '@angular/common';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { fromEvent } from 'rxjs';

import {
  BrightrailButtonIcon,
  BrightrailButtonIconComponent,
} from '../../buttons/brightrail-button-icon.component';
import {
  BrightrailTextFieldAppearance,
  BrightrailTextFieldLabelPosition,
  BrightrailTextFieldShape,
  BrightrailTextFieldSize,
  BrightrailTextFieldStatus,
} from '../text-field/brightrail-text-field.component';
import {
  activateListboxOption,
  clampListboxIndex,
  ensureListboxOptionIds,
  queryEnabledListboxOptions,
  resolveListboxKeyAction,
  stepListboxIndex,
} from '../../platform/brightrail-listbox-keyboard.utils';
import { BrightrailAnchoredPanelController } from '../../platform/brightrail-anchored-panel.controller';

const DEFAULT_STATUS_HINTS: Record<Exclude<BrightrailTextFieldStatus, 'none'>, string> = {
  success: 'Looks good!',
  warning: 'Please verify this information.',
  error: 'This field is required.',
  info: 'Enter details to continue.',
};

@Component({
  selector: 'brightrail-select',
  standalone: true,
  hostDirectives: [BRIGHTRAIL_FX_SHELL_HOST],
  imports: [BrightrailButtonIconComponent],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => BrightrailSelectComponent),
      multi: true,
    },
  ],
  host: {
    '[class.br-select-host--full]': 'fullWidth()',
  },
  template: `
    <div class="br-tf br-select">
      @if (labelPosition() === 'top' && showLabel()) {
        <label class="br-tf__label" [id]="externalLabelId()" [attr.for]="fieldControlId()">
          {{ label()
          }}@if (required()) {
            <span class="br-tf__req" aria-hidden="true">*</span>
          }
        </label>
      }
      <div
        class="br-tf__field-row"
        [class.br-tf__field-row--inline]="
          labelPosition() === 'left' || labelPosition() === 'right'
        "
      >
        @if (labelPosition() === 'left' && showLabel()) {
          <label class="br-tf__label br-tf__label--side" [id]="externalLabelId()" [attr.for]="fieldControlId()">
            {{ label()
            }}@if (required()) {
              <span class="br-tf__req" aria-hidden="true">*</span>
            }
          </label>
        }
        <div class="br-select__control">
          <button
            type="button"
            [class]="triggerClass()"
            [class.br-select__trigger--readonly]="appearance() === 'readonly'"
            [id]="fieldControlId()"
            [disabled]="effectiveDisabled()"
            [attr.aria-readonly]="appearance() === 'readonly' ? 'true' : null"
            [attr.aria-busy]="loading() ? 'true' : null"
            [attr.aria-expanded]="isOpen()"
            [attr.aria-haspopup]="'listbox'"
            [attr.aria-controls]="isOpen() ? listboxId() : null"
            [attr.aria-labelledby]="triggerAriaLabelledBy()"
            [attr.aria-label]="ariaLabel() || null"
            [attr.aria-required]="required() ? 'true' : null"
            [attr.aria-invalid]="status() === 'error' ? 'true' : null"
            [attr.aria-describedby]="resolvedHintText() ? hintId() : null"
            [attr.aria-activedescendant]="activeDescendantId()"
            (click)="toggleOpen($event)"
            (keydown)="onTriggerKeydown($event)"
          >
            @if (labelPosition() === 'inset' && showLabel()) {
              <span class="br-tf__label br-tf__label--inset" [attr.id]="insetLabelId()">
                {{ label()
                }}@if (required()) {
                  <span class="br-tf__req" aria-hidden="true">*</span>
                }
              </span>
            }

            <ng-content select=".br-select-prefix" />

            <span class="br-select__value-shell">
              @if (!hasCustomTriggerBody()) {
                <span
                  class="br-select__value"
                  [class.br-select__value--placeholder]="showPlaceholder()"
                  [class.br-select__value--wrap]="wrapsText()"
                >
                  {{ showPlaceholder() ? placeholder() : resolvedTriggerLabel() }}
                </span>
              }
              <ng-content select=".br-select-value-slot" />
            </span>

            <ng-content select=".br-select-suffix" />

            @if (showClear()) {
              <span
                role="presentation"
                class="br-select__clear-host"
                (click)="$event.stopPropagation()"
              >
                <button
                  type="button"
                  class="br-tf__action"
                  aria-label="Clear selection"
                  (click)="clearValue($event)"
                >
                  <brightrail-button-icon name="close" />
                </button>
              </span>
            }

            @if (loading()) {
              <span class="br-tf__icon br-tf__icon--trailing br-tf__icon--loader" aria-hidden="true">
                <brightrail-button-icon name="loader" />
              </span>
            }
            @if (statusTrailingIcon() !== 'none' && !loading()) {
              <span
                [class]="
                  'br-tf__icon br-tf__icon--trailing br-tf__status-icon br-tf__status-icon--' +
                  status()
                "
                aria-hidden="true"
              >
                <brightrail-button-icon [name]="statusTrailingIcon()" />
              </span>
            }

            @if (!loading()) {
              <span class="br-tf__icon br-tf__icon--trailing br-tf__icon--muted" aria-hidden="true">
                <brightrail-button-icon name="chevron-down" />
              </span>
            }
          </button>

          @if (isOpen()) {
            <div
              class="br-select__panel"
              [class.br-select__panel--wrap]="wrapsText()"
              [id]="listboxId()"
              role="listbox"
              (keydown)="onPanelKeydown($event)"
              (click)="onPanelClick($event)"
            >
              <ng-content select=".br-select-panel" />
            </div>
          }
        </div>
        @if (labelPosition() === 'right' && showLabel()) {
          <label
            class="br-tf__label br-tf__label--side br-tf__label--end"
            [id]="externalLabelId()"
            [attr.for]="fieldControlId()"
          >
            {{ label()
            }}@if (required()) {
              <span class="br-tf__req" aria-hidden="true">*</span>
            }
          </label>
        }
      </div>
      @if (resolvedHintText()) {
        <div [id]="hintId()" class="br-tf__hint" [class]="'br-tf__hint--' + status()">
          {{ resolvedHintText() }}
        </div>
      }
    </div>
  `,
  styleUrl: './brightrail-select.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BrightrailSelectComponent implements ControlValueAccessor {
  private static nextId = 0;
  private readonly uid = `br-sel-${BrightrailSelectComponent.nextId++}`;

  private readonly host = inject(ElementRef<HTMLElement>);
  private readonly document = inject(DOCUMENT);
  private readonly destroyRef = inject(DestroyRef);
  private readonly anchoredPanel = new BrightrailAnchoredPanelController(this.document, this.destroyRef);

  readonly appearance = input<BrightrailTextFieldAppearance>('outlined');
  readonly status = input<BrightrailTextFieldStatus>('none');
  readonly size = input<BrightrailTextFieldSize>('md');
  readonly shape = input<BrightrailTextFieldShape>('default');
  readonly placeholder = input('Select…');
  readonly label = input<string | undefined>(undefined);
  readonly labelPosition = input<BrightrailTextFieldLabelPosition>('none');
  readonly required = input(false);
  readonly helperText = input<string | undefined>(undefined);
  readonly disabled = input(false);
  readonly loading = input(false);
  readonly clearable = input(false);
  readonly fullWidth = input(false);
  /** @deprecated Use `textOverflow` (`truncate` | `wrap`) for clearer intent. */
  readonly textWrap = input<'wrap' | 'nowrap'>('nowrap');
  /** Controls long text behavior in the trigger display text. */
  readonly textOverflow = input<'truncate' | 'wrap'>('truncate');
  /**
   * Visible text in the trigger when a value is selected. When omitted, the CVA value string is shown.
   */
  readonly displayText = input<string | undefined>(undefined);
  /** Sets the trigger / listbox id used by labels and ARIA attributes. */
  readonly inputId = input<string | undefined>(undefined);
  /** When the visible label is not associated (labelPosition is none), set this for the trigger. */
  readonly ariaLabel = input<string | undefined>(undefined);

  readonly valueChange = output<string>();

  protected readonly isOpen = signal(false);
  protected readonly valueModel = signal('');
  private readonly disabledFromCva = signal(false);
  protected readonly hasCustomTriggerBody = signal(false);
  private readonly activeOptionIndex = signal(-1);
  private listboxOptionsCache: HTMLElement[] = [];

  private onChange: (v: string) => void = () => {};
  private onTouched: () => void = () => {};

  /** @internal */
  readonly listboxId = computed(() => `${this.fieldControlId()}-listbox`);

  readonly activeDescendantId = computed((): string | null => {
    if (!this.isOpen()) {
      return null;
    }
    const idx = this.activeOptionIndex();
    const option = this.listboxOptionsCache[idx];
    return option?.id ?? null;
  });

  /** @internal */
  readonly triggerAriaLabelledBy = computed((): string | null => {
    if (!this.showLabel()) {
      return null;
    }
    if (this.labelPosition() === 'inset') {
      return this.insetLabelId();
    }
    return this.externalLabelId();
  });

  readonly fieldControlId = computed(() => this.inputId() ?? this.uid);

  readonly externalLabelId = computed(() => `${this.fieldControlId()}-label`);

  readonly insetLabelId = computed(() => `${this.fieldControlId()}-inset-label`);

  readonly hintId = computed(() => `${this.fieldControlId()}-hint`);

  readonly resolvedHintText = computed((): string | undefined => {
    const custom = this.helperText()?.trim();
    if (custom) {
      return custom;
    }
    const s = this.status();
    if (s === 'none') {
      return undefined;
    }
    return DEFAULT_STATUS_HINTS[s];
  });

  readonly showLabel = computed(
    () => this.labelPosition() !== 'none' && !!this.label()?.trim(),
  );

  readonly effectiveDisabled = computed(() => this.disabled() || this.disabledFromCva());

  readonly wrapClass = computed(() => {
    const a = this.appearance();
    const parts = ['br-tf__wrap', `br-tf__wrap--${a}`, `br-tf__wrap--sz-${this.size()}`];
    const sh = this.shape();
    if (sh !== 'default') {
      parts.push(`br-tf__wrap--shape-${sh}`);
    }
    if (this.labelPosition() === 'inset' && this.showLabel()) {
      parts.push('br-tf__wrap--inset-label');
    }
    const s = this.status();
    if (s !== 'none') {
      parts.push(`br-tf__wrap--status-${s}`);
    }
    return parts.join(' ');
  });

  readonly triggerClass = computed(() => `${this.wrapClass()} br-select__trigger`);
  readonly wrapsText = computed(
    () => this.textOverflow() === 'wrap' || this.textWrap() === 'wrap',
  );

  readonly statusTrailingIcon = computed((): BrightrailButtonIcon => {
    switch (this.status()) {
      case 'success':
        return 'check';
      case 'warning':
        return 'warning';
      case 'error':
        return 'error';
      case 'info':
        return 'info';
      default:
        return 'none';
    }
  });

  readonly resolvedTriggerLabel = computed(() => {
    const t = this.displayText();
    if (t !== undefined && t.length > 0) {
      return t;
    }
    const v = this.valueModel();
    return v.length > 0 ? v : '';
  });

  readonly showPlaceholder = computed(() => this.resolvedTriggerLabel().length === 0);

  readonly showClear = computed(
    () =>
      this.clearable() &&
      this.valueModel().length > 0 &&
      !this.effectiveDisabled() &&
      !this.loading() &&
      this.appearance() !== 'readonly',
  );

  constructor() {
    effect(() => {
      const open = this.isOpen();
      if (!open) {
        this.anchoredPanel.detach();
        return;
      }
      untracked(() => {
        queueMicrotask(() => {
          if (!this.isOpen()) {
            return;
          }
          const control = this.host.nativeElement.querySelector('.br-select__control') as HTMLElement | null;
          const panel = this.document.getElementById(this.listboxId()) as HTMLElement | null;
          if (control && panel) {
            this.anchoredPanel.attach(control, panel, {
              gap: 2,
              maxHeight: 256,
              zIndex: 1100,
              viewportPadding: 8,
            });
          }
        });
      });
    });

    effect(() => {
      if (this.isOpen()) {
        untracked(() => queueMicrotask(() => this.syncListboxOptions()));
      } else {
        untracked(() => this.activeOptionIndex.set(-1));
      }
    });

    afterRenderEffect(() => {
      const hostEl = this.host.nativeElement;
      /* Class selector: HTML lowercases arbitrary attributes, so [brSelectValue] is unreliable in the DOM. */
      const next = !!hostEl.querySelector('.br-select-value-slot');
      untracked(() => {
        if (this.hasCustomTriggerBody() !== next) {
          this.hasCustomTriggerBody.set(next);
        }
      });
    });

    afterNextRender(() => {
      fromEvent(this.document, 'click', { capture: true })
        .pipe(takeUntilDestroyed(this.destroyRef))
        .subscribe((ev) => {
          if (!this.isOpen()) {
            return;
          }
          const t = ev.target;
          if (!(t instanceof Node)) {
            return;
          }
          if (!this.anchoredPanel.contains(t, this.host.nativeElement)) {
            this.isOpen.set(false);
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
            this.isOpen.set(false);
          }
        });
    });
  }

  writeValue(val: string | null): void {
    const next = val ?? '';
    const prev = this.valueModel();
    this.valueModel.set(next);
    if (prev !== next && this.isOpen()) {
      this.isOpen.set(false);
    }
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

  toggleOpen(ev: MouseEvent): void {
    ev.preventDefault();
    if (this.effectiveDisabled()) {
      return;
    }
    if (this.loading() || this.appearance() === 'readonly') {
      return;
    }
    this.isOpen.update((v) => !v);
    this.onTouched();
  }

  onTriggerKeydown(ev: KeyboardEvent): void {
    if (this.effectiveDisabled() || this.loading() || this.appearance() === 'readonly') {
      return;
    }
    this.handleListboxKeydown(ev, true);
  }

  onPanelKeydown(ev: KeyboardEvent): void {
    this.handleListboxKeydown(ev, false);
  }

  onPanelClick(ev: MouseEvent): void {
    const option = (ev.target as HTMLElement | null)?.closest('.br-select-option, [role="option"]');
    if (option) {
      this.isOpen.set(false);
      this.onTouched();
    }
  }

  private handleListboxKeydown(ev: KeyboardEvent, fromTrigger: boolean): void {
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
          this.applyListboxAction(action, fromTrigger);
        });
      }
      return;
    }

    ev.preventDefault();
    if (action === 'close') {
      this.closeListbox(fromTrigger);
      return;
    }
    this.applyListboxAction(action, fromTrigger);
  }

  private applyListboxAction(
    action: ReturnType<typeof resolveListboxKeyAction>,
    returnFocusToTrigger: boolean,
  ): void {
    const count = this.listboxOptionsCache.length;
    if (count === 0) {
      if (action === 'close') {
        this.closeListbox(returnFocusToTrigger);
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
        const option = this.listboxOptionsCache[index];
        if (option) {
          activateListboxOption(option);
        }
        this.closeListbox(returnFocusToTrigger);
        return;
      }
      case 'close':
        this.closeListbox(returnFocusToTrigger);
        return;
      default:
        return;
    }

    this.activeOptionIndex.set(clampListboxIndex(index, count));
  }

  private syncListboxOptions(): void {
    const panel = this.document.getElementById(this.listboxId()) as HTMLElement | null;
    if (!panel) {
      this.listboxOptionsCache = [];
      this.activeOptionIndex.set(-1);
      return;
    }

    const options = queryEnabledListboxOptions(panel);
    ensureListboxOptionIds(options, this.fieldControlId());
    this.listboxOptionsCache = options;

    let start = options.findIndex((option) => option.getAttribute('aria-selected') === 'true');
    if (start < 0) {
      const label = this.resolvedTriggerLabel().trim();
      if (label) {
        start = options.findIndex((option) => option.textContent?.trim() === label);
      }
    }
    this.activeOptionIndex.set(start >= 0 ? start : options.length > 0 ? 0 : -1);
  }

  private closeListbox(returnFocusToTrigger: boolean): void {
    this.isOpen.set(false);
    if (returnFocusToTrigger) {
      queueMicrotask(() => {
        (
          this.host.nativeElement.querySelector('.br-select__trigger') as HTMLButtonElement | null
        )?.focus();
      });
    }
  }

  clearValue(ev: MouseEvent): void {
    ev.preventDefault();
    ev.stopPropagation();
    if (this.effectiveDisabled() || this.loading() || this.appearance() === 'readonly') {
      return;
    }
    const prev = this.valueModel();
    if (prev === '') {
      return;
    }
    this.valueModel.set('');
    this.onChange('');
    this.valueChange.emit('');
    if (this.isOpen()) {
      this.isOpen.set(false);
    }
  }
}
