import {
  ChangeDetectionStrategy,
  Component,
  computed,
  forwardRef,
  input,
  output,
  signal,
} from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

import {
  BrightrailButtonIcon,
  BrightrailButtonIconComponent,
} from '../button/brightrail-button-icon.component';

export type BrightrailTextFieldAppearance =
  | 'filled'
  | 'outlined'
  | 'underline'
  | 'ghost'
  | 'readonly';

export type BrightrailTextFieldStatus = 'none' | 'success' | 'warning' | 'error' | 'info';

const DEFAULT_STATUS_HINTS: Record<Exclude<BrightrailTextFieldStatus, 'none'>, string> = {
  success: 'Looks good!',
  warning: 'Please verify this information.',
  error: 'This field is required.',
  info: 'Enter details to continue.',
};

export type BrightrailTextFieldSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl';

export type BrightrailTextFieldShape = 'default' | 'square' | 'pill';

export type BrightrailTextFieldLabelPosition = 'none' | 'top' | 'inset' | 'left' | 'right';

export type BrightrailTextFieldSuffixPosition = 'none' | 'left' | 'right';

@Component({
  selector: 'brightrail-text-field',
  standalone: true,
  imports: [BrightrailButtonIconComponent],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => BrightrailTextFieldComponent),
      multi: true,
    },
  ],
  host: {
    '[class.br-tf-host--full]': 'fullWidth()',
  },
  template: `
    <div class="br-tf">
      @if (labelPosition() === 'top' && showLabel()) {
        <label class="br-tf__label" [attr.for]="controlId()">
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
          <label class="br-tf__label br-tf__label--side" [attr.for]="controlId()">
            {{ label()
            }}@if (required()) {
              <span class="br-tf__req" aria-hidden="true">*</span>
            }
          </label>
        }
        <div [class]="wrapClass()" [attr.aria-busy]="loading() ? 'true' : null">
          @if (labelPosition() === 'inset' && showLabel()) {
            <label class="br-tf__label br-tf__label--inset" [attr.for]="controlId()">
              {{ label()
              }}@if (required()) {
                <span class="br-tf__req" aria-hidden="true">*</span>
              }
            </label>
          }
          @if (prefix()) {
            <span class="br-tf__affix br-tf__affix--prefix">{{ prefix() }}</span>
          }
          @if (iconLeft() !== 'none') {
            <span class="br-tf__icon br-tf__icon--leading" aria-hidden="true">
              <brightrail-button-icon [name]="iconLeft()" />
            </span>
          }
          @if (suffix() && suffixPosition() === 'left') {
            <span class="br-tf__affix br-tf__affix--suffix br-tf__affix--suffix-before-input">{{
              suffix()
            }}</span>
          }

          @if (isTextarea()) {
            <textarea
              class="br-tf__input"
              [id]="controlId()"
              [name]="name() ?? null"
              [placeholder]="placeholder()"
              [rows]="rows()"
              [required]="required()"
              [disabled]="effectiveDisabled()"
              [readOnly]="appearance() === 'readonly'"
              [value]="value()"
              [attr.autocomplete]="autocomplete() ?? null"
              [attr.aria-required]="required() ? 'true' : null"
              [attr.aria-invalid]="status() === 'error' ? 'true' : null"
              [attr.aria-describedby]="resolvedHintText() ? hintId() : null"
              (input)="onInputValue($any($event.target).value)"
              (blur)="onTouchedCb()"
            ></textarea>
          } @else {
            <input
              class="br-tf__input"
              [id]="controlId()"
              [name]="name() ?? null"
              [type]="effectiveInputType()"
              [placeholder]="placeholder()"
              [required]="required()"
              [disabled]="effectiveDisabled()"
              [readOnly]="appearance() === 'readonly'"
              [value]="value()"
              [attr.autocomplete]="autocomplete() ?? null"
              [attr.aria-required]="required() ? 'true' : null"
              [attr.aria-invalid]="status() === 'error' ? 'true' : null"
              [attr.aria-describedby]="resolvedHintText() ? hintId() : null"
              (input)="onInputValue($any($event.target).value)"
              (blur)="onTouchedCb()"
            />
          }

          @if (loading()) {
            <span class="br-tf__icon br-tf__icon--trailing br-tf__icon--loader" aria-hidden="true">
              <brightrail-button-icon name="loader" />
            </span>
          }
          @if (
            showPasswordToggle() &&
            inputType() === 'password' &&
            !effectiveDisabled() &&
            !loading()
          ) {
            <button
              type="button"
              class="br-tf__action"
              [attr.aria-label]="passwordVisible() ? 'Hide password' : 'Show password'"
              (click)="togglePassword()"
            >
              @if (passwordVisible()) {
                <brightrail-button-icon name="eye-off" />
              } @else {
                <brightrail-button-icon name="eye" />
              }
            </button>
          }
          @if (showClear()) {
            <button
              type="button"
              class="br-tf__action"
              aria-label="Clear"
              (click)="clearValue()"
            >
              <brightrail-button-icon name="close" />
            </button>
          }
          @if (dropdownIndicator() && !loading()) {
            <span class="br-tf__icon br-tf__icon--trailing br-tf__icon--muted" aria-hidden="true">
              <brightrail-button-icon name="chevron-down" />
            </span>
          }
          @if (statusTrailingIcon() !== 'none' && !loading()) {
            <span
              [class]="'br-tf__icon br-tf__icon--trailing br-tf__status-icon br-tf__status-icon--' + status()"
              aria-hidden="true"
            >
              <brightrail-button-icon [name]="statusTrailingIcon()" />
            </span>
          } @else if (iconRight() !== 'none' && !loading()) {
            <span class="br-tf__icon br-tf__icon--trailing" aria-hidden="true">
              <brightrail-button-icon [name]="iconRight()" />
            </span>
          }

          @if (suffix() && suffixPosition() === 'right') {
            <span class="br-tf__affix br-tf__affix--suffix">{{ suffix() }}</span>
          }
        </div>
        @if (labelPosition() === 'right' && showLabel()) {
          <label class="br-tf__label br-tf__label--side br-tf__label--end" [attr.for]="controlId()">
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
  styleUrl: './brightrail-text-field.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BrightrailTextFieldComponent implements ControlValueAccessor {
  private static nextId = 0;
  private readonly uid = `br-tf-${BrightrailTextFieldComponent.nextId++}`;

  readonly appearance = input<BrightrailTextFieldAppearance>('outlined');
  readonly status = input<BrightrailTextFieldStatus>('none');
  readonly size = input<BrightrailTextFieldSize>('md');
  /**
   * Corner style for the field shell. `default` uses `--br-tf-radius`.
   * `underline` appearance always uses square corners regardless of `shape`.
   */
  readonly shape = input<BrightrailTextFieldShape>('default');
  readonly placeholder = input('');
  readonly label = input<string | undefined>(undefined);
  /** Where to show `label`; `none` hides the label (value still used only if you add more attrs later). */
  readonly labelPosition = input<BrightrailTextFieldLabelPosition>('none');
  /** When true, appends a visible asterisk and sets native `required` / `aria-required` on the control. */
  readonly required = input(false);
  readonly helperText = input<string | undefined>(undefined);
  readonly disabled = input(false);
  readonly loading = input(false);
  readonly rows = input(1);
  /** Native input `type` (`text`, `password`, `email`, `search`, `tel`, …). */
  readonly inputType = input('text');
  readonly prefix = input<string | undefined>(undefined);
  readonly suffix = input<string | undefined>(undefined);
  /** Where `suffix` is shown inside the field (start vs end of the control). `none` hides the suffix. */
  readonly suffixPosition = input<BrightrailTextFieldSuffixPosition>('none');
  readonly iconLeft = input<BrightrailButtonIcon>('none');
  readonly iconRight = input<BrightrailButtonIcon>('none');
  readonly clearable = input(false);
  readonly showPasswordToggle = input(false);
  readonly dropdownIndicator = input(false);
  readonly fullWidth = input(false);
  readonly inputId = input<string | undefined>(undefined);
  readonly autocomplete = input<string | undefined>(undefined);
  readonly name = input<string | undefined>(undefined);

  readonly valueChange = output<string>();

  private readonly disabledFromCva = signal(false);
  protected readonly value = signal('');
  protected readonly passwordVisible = signal(false);

  private onChange: (v: string) => void = () => {};
  private onTouched: () => void = () => {};

  readonly controlId = computed(() => this.inputId() ?? this.uid);
  readonly hintId = computed(() => `${this.controlId()}-hint`);

  /** Custom `helperText` wins when non-empty; otherwise status-driven default copy is shown. */
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

  readonly isTextarea = computed(() => this.rows() > 1);

  readonly effectiveDisabled = computed(() => this.disabled() || this.disabledFromCva());

  readonly effectiveInputType = computed(() => {
    if (this.inputType() === 'password' && this.passwordVisible()) {
      return 'text';
    }
    return this.inputType();
  });

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

  readonly showClear = computed(
    () =>
      this.clearable() &&
      this.value().length > 0 &&
      !this.effectiveDisabled() &&
      !this.loading() &&
      this.appearance() !== 'readonly',
  );

  writeValue(val: string | null): void {
    this.value.set(val ?? '');
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

  onInputValue(v: string): void {
    this.value.set(v);
    this.onChange(v);
    this.valueChange.emit(v);
  }

  onTouchedCb(): void {
    this.onTouched();
  }

  togglePassword(): void {
    this.passwordVisible.update((v) => !v);
  }

  clearValue(): void {
    this.value.set('');
    this.onChange('');
    this.valueChange.emit('');
  }
}
