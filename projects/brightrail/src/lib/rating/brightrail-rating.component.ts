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

@Component({
  selector: 'brightrail-rating',
  standalone: true,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => BrightrailRatingComponent),
      multi: true,
    },
  ],
  template: `
    <div
      class="br-rating"
      role="radiogroup"
      [attr.aria-label]="ariaLabel() || label() || 'Rating'"
    >
      @if (label()) {
        <span class="br-rating__label" id="{{ uid }}-label">{{ label() }}</span>
      }
      <span class="br-rating__stars">
        @for (star of stars(); track star) {
          <button
            type="button"
            class="br-rating__star"
            role="radio"
            [attr.aria-checked]="value() === star"
            [attr.aria-label]="star + ' of ' + max()"
            [class.br-rating__star--active]="star <= value()"
            [disabled]="effectiveDisabled()"
            (click)="setValue(star)"
          >
            ★
          </button>
        }
      </span>
    </div>
  `,
  styleUrl: './brightrail-rating.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BrightrailRatingComponent implements ControlValueAccessor {
  private static nextId = 0;
  readonly uid = `br-rating-${BrightrailRatingComponent.nextId++}`;

  readonly label = input('');
  readonly ariaLabel = input('');
  readonly max = input(5);
  readonly disabled = input(false);
  readonly valueChange = output<number>();

  private readonly cvaValue = signal(0);
  private isDisabled = false;
  private onChange: (value: number) => void = () => {};
  private onTouched: () => void = () => {};

  readonly effectiveDisabled = computed(() => this.isDisabled || this.disabled());
  readonly value = computed(() => this.cvaValue());
  readonly stars = computed(() => Array.from({ length: this.max() }, (_, i) => i + 1));

  writeValue(value: number): void {
    this.cvaValue.set(Math.max(0, Math.min(this.max(), Number(value) || 0)));
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

  setValue(star: number): void {
    if (this.effectiveDisabled()) {
      return;
    }
    this.cvaValue.set(star);
    this.onChange(star);
    this.valueChange.emit(star);
    this.onTouched();
  }
}
