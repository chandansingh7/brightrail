import { ChangeDetectionStrategy, Component } from '@angular/core';

import { BrightrailSliderComponent } from 'brightrail';

import { CatalogVariationTileComponent } from '../shared/catalog-variation-tile.component';
import { SLIDER_VARIATION_SNIPPETS } from './slider-variation-snippets';

@Component({
  selector: 'app-slider-variation-catalog',
  standalone: true,
  imports: [BrightrailSliderComponent, CatalogVariationTileComponent],
  templateUrl: './slider-variation-catalog.component.html',
  styleUrl: './slider-variation-catalog.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SliderVariationCatalogComponent {
  readonly s = SLIDER_VARIATION_SNIPPETS;
}
