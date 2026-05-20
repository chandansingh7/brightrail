import { ChangeDetectionStrategy, Component } from '@angular/core';

import { BrightrailPaginationComponent } from 'brightrail';

import { CatalogVariationTileComponent } from '../shared/catalog-variation-tile.component';
import { PAGINATION_VARIATION_SNIPPETS } from './pagination-variation-snippets';

@Component({
  selector: 'app-pagination-variation-catalog',
  standalone: true,
  imports: [BrightrailPaginationComponent, CatalogVariationTileComponent],
  templateUrl: './pagination-variation-catalog.component.html',
  styleUrl: './pagination-variation-catalog.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PaginationVariationCatalogComponent {
  readonly s = PAGINATION_VARIATION_SNIPPETS;
}
