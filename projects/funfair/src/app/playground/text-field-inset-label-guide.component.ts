import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { BrightrailTextFieldComponent } from 'brightrail';

@Component({
  selector: 'app-text-field-inset-label-guide',
  standalone: true,
  imports: [BrightrailTextFieldComponent, FormsModule, RouterLink],
  templateUrl: './text-field-inset-label-guide.component.html',
  styleUrl: './text-field-inset-label-guide.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TextFieldInsetLabelGuideComponent {
  /** Live demo value (starts empty, like the reference design). */
  readonly demoValue = signal('');

  readonly exampleHtml = `<brightrail-text-field
  class="my-inset-field"
  appearance="outlined"
  labelPosition="inset"
  label="Username"
  [required]="true"
  iconLeft="user"
  [(ngModel)]="username"
/>`;

  readonly exampleScss = `/* Optional: accent border + label (matches focus ring via --br-tf-focus) */
.my-inset-field {
  --br-tf-border: #e07a5f;
  --br-tf-border-hover: #cf6b52;
  --br-tf-focus: #e07a5f;
  --br-tf-label: #e07a5f;
}`;
}
