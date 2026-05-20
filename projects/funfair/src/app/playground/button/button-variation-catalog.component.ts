import { ChangeDetectionStrategy, Component } from '@angular/core';

import { BrightrailButtonComponent } from 'brightrail';

import { CatalogVariationTileComponent } from '../shared/catalog-variation-tile.component';
import { BUTTON_VARIATION_SNIPPETS } from './button-variation-snippets';

@Component({
  selector: 'app-button-variation-catalog',
  standalone: true,
  imports: [BrightrailButtonComponent, CatalogVariationTileComponent],
  templateUrl: './button-variation-catalog.component.html',
  styleUrl: './button-variation-catalog.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ButtonVariationCatalogComponent {
  readonly s = BUTTON_VARIATION_SNIPPETS;
}
