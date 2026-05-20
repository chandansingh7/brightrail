import { ChangeDetectionStrategy, Component } from '@angular/core';

import { BrightrailBadgeComponent } from 'brightrail';

import { CatalogVariationTileComponent } from '../shared/catalog-variation-tile.component';
import { BADGE_VARIATION_SNIPPETS } from './badge-variation-snippets';

@Component({
  selector: 'app-badge-variation-catalog',
  standalone: true,
  imports: [BrightrailBadgeComponent, CatalogVariationTileComponent],
  templateUrl: './badge-variation-catalog.component.html',
  styleUrl: './badge-variation-catalog.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BadgeVariationCatalogComponent {
  readonly s = BADGE_VARIATION_SNIPPETS;
}
