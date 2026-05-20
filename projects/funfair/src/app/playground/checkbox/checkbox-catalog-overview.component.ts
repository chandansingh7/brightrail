import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink } from '@angular/router';

import { CheckboxVariationCatalogComponent } from './checkbox-variation-catalog.component';
import { CHECKBOX_HTML_EXAMPLES } from './checkbox-variation-snippets';

@Component({
  selector: 'app-checkbox-catalog-overview',
  standalone: true,
  imports: [RouterLink, CheckboxVariationCatalogComponent],
  templateUrl: './checkbox-catalog-overview.component.html',
  styleUrl: './checkbox-catalog-overview.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CheckboxCatalogOverviewComponent {
  readonly htmlExamples = CHECKBOX_HTML_EXAMPLES;
}
