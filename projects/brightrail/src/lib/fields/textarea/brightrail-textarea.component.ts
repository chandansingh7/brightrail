import {
  ChangeDetectionStrategy,
  Component,
  computed,
  forwardRef,
  input,
  output,
  signal,
} from '@angular/core';
import { BRIGHTRAIL_FX_SHELL_HOST } from '../../futuristic/brightrail-futuristic-host';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

import {
  BrightrailButtonIcon,
  BrightrailButtonIconComponent,
} from '../../buttons/brightrail-button-icon.component';

export type BrightrailTextareaAppearance =
  | 'filled'
  | 'outlined'
  | 'underline'
  | 'ghost'
  | 'readonly';

export type BrightrailTextareaStatus = 'none' | 'success' | 'warning' | 'error' | 'info';
export type BrightrailTextareaSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl';
export type BrightrailTextareaResize = 'none' | 'vertical' | 'horizontal' | 'both';

const DEFAULT_STATUS_HINTS: Record<Exclude<BrightrailTextareaStatus, 'none'>, string> = {
  success: 'Looks good!',
  warning: 'Please verify this information.',
  error: 'This field is required.',
  info: 'Enter details to continue.',
};

@Component({
  selector: 'brightrail-textarea',
  hostDirectives: [BRIGHTRAIL_FX_SHELL_HOST],
  standalone: true,
  imports: [BrightrailButtonIconComponent],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => BrightrailTextareaComponent),
      multi: true,
    },
  ],
  host: {
    '[class.br-ta-host--full]': 'fullWidth()',
  },
  template: `
    <div class="br-ta">
      @if (showLabel()) {
        <label class="br-ta__label" [attr.for]="controlId()">
          {{ label()
          }}@if (required()) {
            <span class="br-ta__req" aria-hidden="true">*</span>
          }
        </label>
      }
      <div [class]="wrapClass()" [attr.aria-busy]="loading() ? 'true' : null">
        <textarea
          class="br-ta__input"
          [id]="controlId()"
          [name]="name() ?? null"
          [rows]="rows()"
          [placeholder]="placeholder()"
          [required]="required()"
          [disabled]="effectiveDisabled()"
          [readOnly]="appearance() === 'readonly'"
          [value]="value()"
          [style.resize]="resize()"
          [attr.aria-required]="required() ? 'true' : null"
          [attr.aria-invalid]="status() === 'error' ? 'true' : null"
          [attr.aria-describedby]="resolvedHintText() ? hintId() : null"
          (input)="onInputValue($any($event.target).value)"
          (blur)="onTouchedCb()"
        ></textarea>
        @if (statusTrailingIcon() !== 'none' && !loading()) {
          <span
            [class]="'br-ta__icon br-ta__status-icon br-ta__status-icon--' + status()"
            aria-hidden="true"
          >
            <brightrail-button-icon [name]="statusTrailingIcon()" />
          </span>
        }
      </div>
      @if (resolvedHintText()) {
        <div [id]="hintId()" class="br-ta__hint" [class]="'br-ta__hint--' + status()">
          {{ resolvedHintText() }}
        </div>
      }
    </div>
  `,
  styleUrl: './brightrail-textarea.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BrightrailTextareaComponent implements ControlValueAccessor {
  private static nextId = 0;
  private readonly uid = `br-ta-${BrightrailTextareaComponent.nextId++}`;

  readonly appearance = input<BrightrailTextareaAppearance>('outlined');
  readonly status = input<BrightrailTextareaStatus>('none');
  readonly size = input<BrightrailTextareaSize>('md');
  readonly resize = input<BrightrailTextareaResize>('vertical');
  readonly placeholder = input('');
  readonly label = input<string | undefined>(undefined);
  readonly required = input(false);
  readonly helperText = input<string | undefined>(undefined);
  readonly disabled = input(false);
  readonly loading = input(false);
  readonly rows = input(4);
  readonly fullWidth = input(false);
  readonly inputId = input<string | undefined>(undefined);
  readonly name = input<string | undefined>(undefined);

  readonly valueChange = output<string>();

  private readonly disabledFromCva = signal(false);
  protected readonly value = signal('');

  private onChange: (v: string) => void = () => {};
  private onTouched: () => void = () => {};

  readonly controlId = computed(() => this.inputId() ?? this.uid);
  readonly hintId = computed(() => `${this.controlId()}-hint`);

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

  readonly showLabel = computed(() => !!this.label()?.trim());

  readonly effectiveDisabled = computed(() => this.disabled() || this.disabledFromCva());

  readonly wrapClass = computed(() => {
    const parts = [
      'br-ta__wrap',
      `br-ta__wrap--${this.appearance()}`,
      `br-ta__wrap--sz-${this.size()}`,
    ];
    const s = this.status();
    if (s !== 'none') {
      parts.push(`br-ta__wrap--status-${s}`);
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
}
