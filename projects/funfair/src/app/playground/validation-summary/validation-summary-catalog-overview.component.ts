import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink } from '@angular/router';

import { ValidationSummaryVariationCatalogComponent } from './validation-summary-variation-catalog.component';
import { VALIDATION_SUMMARY_HTML_EXAMPLES } from './validation-summary-variation-snippets';

@Component({
  selector: 'app-validation-summary-catalog-overview',
  standalone: true,
  imports: [RouterLink, ValidationSummaryVariationCatalogComponent],
  templateUrl: './validation-summary-catalog-overview.component.html',
  styleUrl: './validation-summary-catalog-overview.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ValidationSummaryCatalogOverviewComponent {
  readonly htmlExamples = VALIDATION_SUMMARY_HTML_EXAMPLES;
}
