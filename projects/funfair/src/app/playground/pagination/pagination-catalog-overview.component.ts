import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink } from '@angular/router';

import { PaginationVariationCatalogComponent } from './pagination-variation-catalog.component';
import { PAGINATION_HTML_EXAMPLES } from './pagination-variation-snippets';

@Component({
  selector: 'app-pagination-catalog-overview',
  standalone: true,
  imports: [RouterLink, PaginationVariationCatalogComponent],
  templateUrl: './pagination-catalog-overview.component.html',
  styleUrl: './pagination-catalog-overview.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PaginationCatalogOverviewComponent {
  readonly htmlExamples = PAGINATION_HTML_EXAMPLES;
}
