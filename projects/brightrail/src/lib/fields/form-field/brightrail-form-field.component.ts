import {
  ChangeDetectionStrategy,
  Component,
  computed,
  input,
} from '@angular/core';

@Component({
  selector: 'brightrail-form-field',
  standalone: true,
  templateUrl: './brightrail-form-field.component.html',
  styleUrl: './brightrail-form-field.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    '[class.br-form-field--invalid]': 'showError()',
    '[class.br-form-field--required]': 'required()',
  },
})
export class BrightrailFormFieldComponent {
  private static nextId = 0;
  private readonly uid = `br-ff-${BrightrailFormFieldComponent.nextId++}`;

  readonly label = input('');
  readonly hint = input('');
  readonly error = input('');
  readonly required = input(false);
  readonly invalid = input(false);

  readonly controlId = computed(() => this.uid);
  readonly hintId = computed(() => `${this.uid}-hint`);
  readonly errorId = computed(() => `${this.uid}-error`);

  readonly showLabel = computed(() => this.label().trim().length > 0);
  readonly showError = computed(() => this.invalid() && this.error().trim().length > 0);
  readonly showHint = computed(() => !this.showError() && this.hint().trim().length > 0);
  readonly describedBy = computed(() => {
    if (this.showError()) {
      return this.errorId();
    }
    if (this.showHint()) {
      return this.hintId();
    }
    return null;
  });
}
