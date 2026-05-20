import { ChangeDetectionStrategy, Component } from '@angular/core';

import { BrightrailSkeletonComponent } from 'brightrail';

import { CatalogVariationTileComponent } from '../shared/catalog-variation-tile.component';
import { SKELETON_VARIATION_SNIPPETS } from './skeleton-variation-snippets';

@Component({
  selector: 'app-skeleton-variation-catalog',
  standalone: true,
  imports: [BrightrailSkeletonComponent, CatalogVariationTileComponent],
  templateUrl: './skeleton-variation-catalog.component.html',
  styleUrl: './skeleton-variation-catalog.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SkeletonVariationCatalogComponent {
  readonly s = SKELETON_VARIATION_SNIPPETS;
  readonly tableRows = [0, 1, 2];
}
