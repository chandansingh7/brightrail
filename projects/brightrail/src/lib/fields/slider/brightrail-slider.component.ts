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

export type BrightrailSliderSize = 'sm' | 'md' | 'lg';
export type BrightrailSliderTone = 'primary' | 'success' | 'warning' | 'danger' | 'neutral';

function toNumber(v: number | string, fallback: number): number {
  if (typeof v === 'number') {
    return Number.isFinite(v) ? v : fallback;
  }
  const n = parseFloat(v);
  return Number.isFinite(n) ? n : fallback;
}

@Component({
  selector: 'brightrail-slider',
  hostDirectives: [BRIGHTRAIL_FX_SHELL_HOST],
  standalone: true,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => BrightrailSliderComponent),
      multi: true,
    },
  ],
  host: {
    '[style.--br-slider-fill]': 'fillPercent() + "%"',
  },
  template: `
    <div class="br-slider" [class]="hostClass()">
      <input
        type="range"
        class="br-slider__input"
        [min]="min()"
        [max]="max()"
        [step]="step()"
        [value]="displayValue()"
        [disabled]="effectiveDisabled()"
        [attr.aria-valuemin]="min()"
        [attr.aria-valuemax]="max()"
        [attr.aria-valuenow]="displayValue()"
        [attr.aria-label]="ariaLabel() || null"
        (input)="onInput($event)"
        (blur)="onBlur()"
      />
      @if (showValue()) {
        <span class="br-slider__value" aria-hidden="true">{{ displayValue() }}</span>
      }
    </div>
  `,
  styleUrl: './brightrail-slider.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BrightrailSliderComponent implements ControlValueAccessor {
  readonly min = input(0, { transform: (v: number | string) => toNumber(v, 0) });
  readonly max = input(100, { transform: (v: number | string) => toNumber(v, 100) });
  readonly step = input(1, { transform: (v: number | string) => toNumber(v, 1) });
  readonly showValue = input(false);
  readonly disabled = input(false);
  readonly size = input<BrightrailSliderSize>('md');
  readonly tone = input<BrightrailSliderTone>('primary');
  readonly ariaLabel = input('');
  readonly valueChange = output<number>();

  private readonly cvaValue = signal<number | null>(null);
  private isDisabled = false;
  private onChange: (value: number) => void = () => {};
  private onTouched: () => void = () => {};

  readonly effectiveDisabled = computed(() => this.isDisabled || this.disabled());
  readonly displayValue = computed(() => {
    const v = this.cvaValue();
    if (v !== null) {
      return this.clamp(v);
    }
    return this.min();
  });
  readonly fillPercent = computed(() => {
    const range = this.max() - this.min();
    if (range <= 0) {
      return 0;
    }
    return ((this.displayValue() - this.min()) / range) * 100;
  });
  readonly hostClass = computed(
    () =>
      `br-slider--${this.size()} br-slider--${this.tone()} ${
        this.effectiveDisabled() ? 'br-slider--disabled' : ''
      }`,
  );

  writeValue(value: number | null): void {
    this.cvaValue.set(value === null || value === undefined ? null : this.clamp(value));
  }

  registerOnChange(fn: (value: number) => void): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: () => void): void {
    this.onTouched = fn;
  }

  setDisabledState(isDisabled: boolean): void {
    this.isDisabled = isDisabled;
  }

  onInput(event: Event): void {
    const next = this.clamp(Number((event.target as HTMLInputElement).value));
    this.cvaValue.set(next);
    this.onChange(next);
    this.valueChange.emit(next);
  }

  onBlur(): void {
    this.onTouched();
  }

  private clamp(n: number): number {
    if (!Number.isFinite(n)) {
      return this.min();
    }
    return Math.min(this.max(), Math.max(this.min(), n));
  }
}
