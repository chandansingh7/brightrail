import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink } from '@angular/router';

import { BadgeVariationCatalogComponent } from './badge-variation-catalog.component';
import { BADGE_HTML_EXAMPLES } from './badge-variation-snippets';

@Component({
  selector: 'app-badge-catalog-overview',
  standalone: true,
  imports: [RouterLink, BadgeVariationCatalogComponent],
  templateUrl: './badge-catalog-overview.component.html',
  styleUrl: './badge-catalog-overview.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BadgeCatalogOverviewComponent {
  readonly htmlExamples = BADGE_HTML_EXAMPLES;
}
