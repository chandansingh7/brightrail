import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { FormFieldVariationCatalogComponent } from './form-field-variation-catalog.component';
import { FORM_FIELD_HTML_EXAMPLES } from './form-field-variation-snippets';

@Component({
  selector: 'app-form-field-catalog-overview',
  standalone: true,
  imports: [RouterLink, FormFieldVariationCatalogComponent],
  templateUrl: './form-field-catalog-overview.component.html',
  styleUrl: './form-field-catalog-overview.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FormFieldCatalogOverviewComponent {
  readonly htmlExamples = FORM_FIELD_HTML_EXAMPLES;
}
