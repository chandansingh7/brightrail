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
import { BRIGHTRAIL_FX_SHELL_HOST } from '../../futuristic/brightrail-futuristic-host';

export type BrightrailSwitchSize = 'sm' | 'md' | 'lg';
export type BrightrailSwitchTone = 'primary' | 'success' | 'warning' | 'danger' | 'neutral';

@Component({
  selector: 'brightrail-switch',
  hostDirectives: [BRIGHTRAIL_FX_SHELL_HOST],
  standalone: true,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => BrightrailSwitchComponent),
      multi: true,
    },
  ],
  template: `
    <label class="br-sw" [class]="hostClass()">
      <input
        type="checkbox"
        role="switch"
        class="br-sw__input"
        [checked]="visualChecked()"
        [disabled]="effectiveDisabled()"
        [attr.aria-label]="ariaLabel() || null"
        (change)="onInputChange($event)"
        (blur)="onBlur()"
      />
      <span class="br-sw__track" aria-hidden="true">
        <span class="br-sw__thumb"></span>
      </span>
      @if (label().trim().length > 0) {
        <span class="br-sw__label">{{ label() }}</span>
      }
    </label>
  `,
  styleUrl: './brightrail-switch.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BrightrailSwitchComponent implements ControlValueAccessor {
  readonly label = input('');
  readonly ariaLabel = input('');
  readonly checked = input(false);
  readonly disabled = input(false);
  readonly size = input<BrightrailSwitchSize>('md');
  readonly tone = input<BrightrailSwitchTone>('primary');
  readonly checkedChange = output<boolean>();

  private readonly cvaValue = signal(false);
  private isDisabled = false;
  private onChange: (value: boolean) => void = () => {};
  private onTouched: () => void = () => {};

  readonly effectiveDisabled = computed(() => this.isDisabled || this.disabled());
  readonly visualChecked = computed(() => this.checked() || this.cvaValue());
  readonly hostClass = computed(
    () =>
      `br-sw--${this.size()} br-sw--${this.tone()} ${
        this.visualChecked() ? 'br-sw--checked' : ''
      } ${this.effectiveDisabled() ? 'br-sw--disabled' : ''}`,
  );

  writeValue(value: boolean): void {
    this.cvaValue.set(!!value);
  }

  registerOnChange(fn: (value: boolean) => void): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: () => void): void {
    this.onTouched = fn;
  }

  setDisabledState(isDisabled: boolean): void {
    this.isDisabled = isDisabled;
  }

  onInputChange(event: Event): void {
    const next = (event.target as HTMLInputElement).checked;
    this.cvaValue.set(next);
    this.onChange(next);
    this.checkedChange.emit(next);
  }

  onBlur(): void {
    this.onTouched();
  }
}
