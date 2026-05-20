import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink } from '@angular/router';

import { CardVariationCatalogComponent } from './card-variation-catalog.component';
import { CARD_HTML_EXAMPLES } from './card-variation-snippets';

@Component({
  selector: 'app-card-catalog-overview',
  standalone: true,
  imports: [RouterLink, CardVariationCatalogComponent],
  templateUrl: './card-catalog-overview.component.html',
  styleUrl: './card-catalog-overview.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CardCatalogOverviewComponent {
  readonly htmlExamples = CARD_HTML_EXAMPLES;
}
