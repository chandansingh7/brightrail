import { ChangeDetectionStrategy, Component, computed, forwardRef, input, output } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import {
  BrightrailButtonIcon,
  BrightrailButtonIconComponent,
} from '../../buttons/brightrail-button-icon.component';

export type BrightrailCheckboxSize = 'sm' | 'md' | 'lg';
export type BrightrailCheckboxTone = 'primary' | 'success' | 'warning' | 'danger' | 'neutral';
export type BrightrailCheckboxVariant = 'default' | 'outlined' | 'filled';
export type BrightrailCheckboxStatus = 'none' | 'success' | 'warning' | 'error' | 'info';
export type BrightrailCheckboxLabelPosition = 'right' | 'left';
export type BrightrailCheckboxState = 'default' | 'hover' | 'focused' | 'disabled' | 'readonly';

@Component({
  selector: 'brightrail-checkbox',
  standalone: true,
  imports: [BrightrailButtonIconComponent],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => BrightrailCheckboxComponent),
      multi: true,
    },
  ],
  template: `
    <label class="br-cb" [class]="hostClass()">
      <input
        type="checkbox"
        class="br-cb__input"
        [checked]="visualChecked()"
        [indeterminate]="indeterminate()"
        [disabled]="effectiveDisabled()"
        [required]="required()"
        [attr.aria-label]="ariaLabel() || null"
        [attr.aria-invalid]="invalid() ? 'true' : null"
        (change)="onInputChange($event)"
        (blur)="onBlur()"
      />
      @if (labelPosition() === 'left') {
        <span class="br-cb__content">
          <span class="br-cb__label">{{ label() }}</span>
          @if (effectiveHelperText().trim().length > 0 && !hasError()) {
            <span class="br-cb__desc">{{ effectiveHelperText() }}</span>
          }
          @if (hasError() && errorText().trim().length > 0) {
            <span class="br-cb__desc br-cb__desc--error">{{ errorText() }}</span>
          }
        </span>
        <span class="br-cb__box" aria-hidden="true">
          @if (indeterminate()) {
            <span class="br-cb__mark br-cb__mark--mixed"></span>
          } @else if (visualChecked()) {
            <span class="br-cb__mark br-cb__mark--checked">
              @if (checkedIcon() === 'check') {
                <span class="br-cb__check-shape"></span>
              } @else if (checkedIcon() !== 'none') {
                <brightrail-button-icon class="br-cb__icon" [name]="checkedIcon()" />
              }
            </span>
          }
        </span>
      } @else {
        <span class="br-cb__box" aria-hidden="true">
          @if (indeterminate()) {
            <span class="br-cb__mark br-cb__mark--mixed"></span>
          } @else if (visualChecked()) {
            <span class="br-cb__mark br-cb__mark--checked">
              @if (checkedIcon() === 'check') {
                <span class="br-cb__check-shape"></span>
              } @else if (checkedIcon() !== 'none') {
                <brightrail-button-icon class="br-cb__icon" [name]="checkedIcon()" />
              }
            </span>
          }
        </span>
        <span class="br-cb__content">
          <span class="br-cb__label">{{ label() }}</span>
          @if (effectiveHelperText().trim().length > 0 && !hasError()) {
            <span class="br-cb__desc">{{ effectiveHelperText() }}</span>
          }
          @if (hasError() && errorText().trim().length > 0) {
            <span class="br-cb__desc br-cb__desc--error">{{ errorText() }}</span>
          }
        </span>
      }
    </label>
  `,
  styleUrl: './brightrail-checkbox.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BrightrailCheckboxComponent implements ControlValueAccessor {
  readonly label = input('Checkbox label');
  readonly description = input('');
  readonly helperText = input('');
  readonly errorText = input('This field is required');
  readonly ariaLabel = input('');
  readonly checked = input(false);
  readonly indeterminate = input(false);
  readonly required = input(false);
  readonly invalid = input(false);
  readonly disabled = input(false);
  readonly tone = input<BrightrailCheckboxTone>('primary');
  readonly variant = input<BrightrailCheckboxVariant>('default');
  readonly status = input<BrightrailCheckboxStatus>('none');
  readonly labelPosition = input<BrightrailCheckboxLabelPosition>('right');
  readonly size = input<BrightrailCheckboxSize>('md');
  readonly state = input<BrightrailCheckboxState>('default');
  readonly checkedIcon = input<BrightrailButtonIcon>('check');
  readonly checkedChange = output<boolean>();

  private cvaValue = false;
  private isDisabled = false;
  private onChange: (value: boolean) => void = () => {};
  private onTouched: () => void = () => {};

  readonly effectiveDisabled = computed(
    () => this.isDisabled || this.disabled() || this.state() === 'disabled',
  );
  readonly visualChecked = computed(() => this.checked() || this.cvaValue);
  readonly effectiveHelperText = computed(() => this.helperText() || this.description());
  readonly hasError = computed(() => this.invalid() || this.status() === 'error');
  readonly hostClass = computed(
    () =>
      `br-cb--${this.size()} br-cb--${this.tone()} br-cb--${this.variant()} br-cb--${this.state()} br-cb--${this.status()} ${
        this.hasError() ? 'br-cb--invalid' : ''
      } ${this.indeterminate() ? 'br-cb--mixed' : ''}`,
  );

  writeValue(value: boolean): void {
    this.cvaValue = !!value;
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
    this.cvaValue = next;
    this.onChange(next);
    this.checkedChange.emit(next);
  }

  onBlur(): void {
    this.onTouched();
  }
}

