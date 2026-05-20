import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink } from '@angular/router';

import { SkeletonVariationCatalogComponent } from './skeleton-variation-catalog.component';
import { SKELETON_HTML_EXAMPLES } from './skeleton-variation-snippets';

@Component({
  selector: 'app-skeleton-catalog-overview',
  standalone: true,
  imports: [RouterLink, SkeletonVariationCatalogComponent],
  templateUrl: './skeleton-catalog-overview.component.html',
  styleUrl: './skeleton-catalog-overview.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SkeletonCatalogOverviewComponent {
  readonly htmlExamples = SKELETON_HTML_EXAMPLES;
}
