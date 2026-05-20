import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink } from '@angular/router';

import { BreadcrumbVariationCatalogComponent } from './breadcrumb-variation-catalog.component';
import { BREADCRUMB_HTML_EXAMPLES } from './breadcrumb-variation-snippets';

@Component({
  selector: 'app-breadcrumb-catalog-overview',
  standalone: true,
  imports: [RouterLink, BreadcrumbVariationCatalogComponent],
  templateUrl: './breadcrumb-catalog-overview.component.html',
  styleUrl: './breadcrumb-catalog-overview.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BreadcrumbCatalogOverviewComponent {
  readonly htmlExamples = BREADCRUMB_HTML_EXAMPLES;
}
