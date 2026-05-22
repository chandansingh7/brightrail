import { ChangeDetectionStrategy, Component, computed, forwardRef, input, output } from '@angular/core';
import { BRIGHTRAIL_FX_SHELL_HOST } from '../../futuristic/brightrail-futuristic-host';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import {
  BrightrailButtonIcon,
  BrightrailButtonIconComponent,
} from '../../buttons/brightrail-button-icon.component';

export type BrightrailRadioSize = 'sm' | 'md' | 'lg';
export type BrightrailRadioTone = 'primary' | 'success' | 'warning' | 'danger' | 'neutral';
export type BrightrailRadioVariant = 'default' | 'outlined' | 'filled' | 'card';
export type BrightrailRadioStatus = 'none' | 'success' | 'warning' | 'error' | 'info';
export type BrightrailRadioLabelPosition = 'right' | 'left';
export type BrightrailRadioState = 'default' | 'hover' | 'focused' | 'disabled' | 'readonly';

@Component({
  selector: 'brightrail-radio',
  hostDirectives: [BRIGHTRAIL_FX_SHELL_HOST],
  standalone: true,
  imports: [BrightrailButtonIconComponent],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => BrightrailRadioComponent),
      multi: true,
    },
  ],
  template: `
    <label class="br-radio" [class]="hostClass()">
      <input
        type="radio"
        class="br-radio__input"
        [name]="name()"
        [value]="value()"
        [checked]="visualChecked()"
        [disabled]="effectiveDisabled()"
        [required]="required()"
        [attr.aria-label]="ariaLabel() || null"
        [attr.aria-invalid]="invalid() ? 'true' : null"
        (change)="onInputChange($event)"
        (blur)="onBlur()"
      />
      @if (labelPosition() === 'left') {
        <span class="br-radio__content">
          @if (groupLabel().trim().length > 0) {
            <span class="br-radio__group-label">{{ groupLabel() }}</span>
          }
          <span class="br-radio__label-row">
            @if (icon() !== 'none') {
              <span class="br-radio__icon"><brightrail-button-icon [name]="icon()" /></span>
            }
            <span class="br-radio__label">{{ label() }}</span>
          </span>
          @if (effectiveHelperText().trim().length > 0 && !hasError()) {
            <span class="br-radio__desc">{{ effectiveHelperText() }}</span>
          }
          @if (hasError() && errorText().trim().length > 0) {
            <span class="br-radio__desc br-radio__desc--error">{{ errorText() }}</span>
          }
        </span>
        <span class="br-radio__dot-shell" aria-hidden="true"><span class="br-radio__dot"></span></span>
      } @else {
        <span class="br-radio__dot-shell" aria-hidden="true"><span class="br-radio__dot"></span></span>
        <span class="br-radio__content">
          @if (groupLabel().trim().length > 0) {
            <span class="br-radio__group-label">{{ groupLabel() }}</span>
          }
          <span class="br-radio__label-row">
            @if (icon() !== 'none') {
              <span class="br-radio__icon"><brightrail-button-icon [name]="icon()" /></span>
            }
            <span class="br-radio__label">{{ label() }}</span>
          </span>
          @if (effectiveHelperText().trim().length > 0 && !hasError()) {
            <span class="br-radio__desc">{{ effectiveHelperText() }}</span>
          }
          @if (hasError() && errorText().trim().length > 0) {
            <span class="br-radio__desc br-radio__desc--error">{{ errorText() }}</span>
          }
        </span>
      }
    </label>
  `,
  styleUrl: './brightrail-radio.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BrightrailRadioComponent implements ControlValueAccessor {
  readonly label = input('Radio label');
  readonly description = input('');
  readonly helperText = input('');
  readonly errorText = input('Please select an option.');
  readonly groupLabel = input('');
  readonly ariaLabel = input('');
  readonly name = input('br-radio-group');
  readonly value = input('option');
  readonly checked = input(false);
  readonly required = input(false);
  readonly invalid = input(false);
  readonly disabled = input(false);
  readonly tone = input<BrightrailRadioTone>('primary');
  readonly variant = input<BrightrailRadioVariant>('default');
  readonly status = input<BrightrailRadioStatus>('none');
  readonly labelPosition = input<BrightrailRadioLabelPosition>('right');
  readonly size = input<BrightrailRadioSize>('md');
  readonly state = input<BrightrailRadioState>('default');
  readonly icon = input<BrightrailButtonIcon>('none');
  readonly checkedChange = output<boolean>();

  private cvaChecked = false;
  private isDisabled = false;
  private onChange: (value: boolean) => void = () => {};
  private onTouched: () => void = () => {};

  readonly effectiveDisabled = computed(
    () => this.isDisabled || this.disabled() || this.state() === 'disabled',
  );
  readonly visualChecked = computed(() => this.checked() || this.cvaChecked);
  readonly effectiveHelperText = computed(() => this.helperText() || this.description());
  readonly hasError = computed(() => this.invalid() || this.status() === 'error');
  readonly hostClass = computed(
    () =>
      `br-radio--${this.size()} br-radio--${this.tone()} br-radio--${this.variant()} br-radio--${this.status()} br-radio--${this.state()} ${
        this.hasError() ? 'br-radio--invalid' : ''
      }`,
  );

  writeValue(value: boolean): void {
    this.cvaChecked = !!value;
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
    this.cvaChecked = next;
    this.onChange(next);
    this.checkedChange.emit(next);
  }

  onBlur(): void {
    this.onTouched();
  }
}

