import { ChangeDetectionStrategy, Component } from '@angular/core';

import { BrightrailSwitchComponent } from 'brightrail';

import { CatalogVariationTileComponent } from '../shared/catalog-variation-tile.component';
import { SWITCH_VARIATION_SNIPPETS } from './switch-variation-snippets';

@Component({
  selector: 'app-switch-variation-catalog',
  standalone: true,
  imports: [BrightrailSwitchComponent, CatalogVariationTileComponent],
  templateUrl: './switch-variation-catalog.component.html',
  styleUrl: './switch-variation-catalog.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SwitchVariationCatalogComponent {
  readonly s = SWITCH_VARIATION_SNIPPETS;
}
