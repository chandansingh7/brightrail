import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink } from '@angular/router';

import { TextFieldVariationCatalogComponent } from './text-field-variation-catalog.component';
import { TEXT_FIELD_HTML_EXAMPLES } from './text-field-variation-snippets';

@Component({
  selector: 'app-text-field-catalog-overview',
  standalone: true,
  imports: [RouterLink, TextFieldVariationCatalogComponent],
  templateUrl: './text-field-catalog-overview.component.html',
  styleUrl: './text-field-catalog-overview.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TextFieldCatalogOverviewComponent {
  readonly htmlExamples = TEXT_FIELD_HTML_EXAMPLES;
}
