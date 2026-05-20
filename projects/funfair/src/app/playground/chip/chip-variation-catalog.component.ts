import { ChangeDetectionStrategy, Component } from '@angular/core';

import { BrightrailChipComponent } from 'brightrail';

import { CatalogVariationTileComponent } from '../shared/catalog-variation-tile.component';
import { CHIP_VARIATION_SNIPPETS } from './chip-variation-snippets';

@Component({
  selector: 'app-chip-variation-catalog',
  standalone: true,
  imports: [BrightrailChipComponent, CatalogVariationTileComponent],
  templateUrl: './chip-variation-catalog.component.html',
  styleUrl: './chip-variation-catalog.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ChipVariationCatalogComponent {
  readonly s = CHIP_VARIATION_SNIPPETS;
}
