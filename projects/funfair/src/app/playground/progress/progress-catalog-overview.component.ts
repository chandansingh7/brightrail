import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink } from '@angular/router';

import { ProgressVariationCatalogComponent } from './progress-variation-catalog.component';
import { PROGRESS_HTML_EXAMPLES } from './progress-variation-snippets';

@Component({
  selector: 'app-progress-catalog-overview',
  standalone: true,
  imports: [RouterLink, ProgressVariationCatalogComponent],
  templateUrl: './progress-catalog-overview.component.html',
  styleUrl: './progress-catalog-overview.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProgressCatalogOverviewComponent {
  readonly htmlExamples = PROGRESS_HTML_EXAMPLES;
}
