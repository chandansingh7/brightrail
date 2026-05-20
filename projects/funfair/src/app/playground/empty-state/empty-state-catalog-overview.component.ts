import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink } from '@angular/router';

import { EmptyStateVariationCatalogComponent } from './empty-state-variation-catalog.component';
import { EMPTY_STATE_HTML_EXAMPLES } from './empty-state-variation-snippets';

@Component({
  selector: 'app-empty-state-catalog-overview',
  standalone: true,
  imports: [RouterLink, EmptyStateVariationCatalogComponent],
  templateUrl: './empty-state-catalog-overview.component.html',
  styleUrl: './empty-state-catalog-overview.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EmptyStateCatalogOverviewComponent {
  readonly htmlExamples = EMPTY_STATE_HTML_EXAMPLES;
}
