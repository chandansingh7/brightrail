import { ChangeDetectionStrategy, Component } from '@angular/core';

import { BrightrailButtonComponent, BrightrailEmptyStateComponent } from 'brightrail';

import { CatalogVariationTileComponent } from '../shared/catalog-variation-tile.component';
import { EMPTY_STATE_VARIATION_SNIPPETS } from './empty-state-variation-snippets';

@Component({
  selector: 'app-empty-state-variation-catalog',
  standalone: true,
  imports: [BrightrailEmptyStateComponent, BrightrailButtonComponent, CatalogVariationTileComponent],
  templateUrl: './empty-state-variation-catalog.component.html',
  styleUrl: './empty-state-variation-catalog.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EmptyStateVariationCatalogComponent {
  readonly s = EMPTY_STATE_VARIATION_SNIPPETS;
}
