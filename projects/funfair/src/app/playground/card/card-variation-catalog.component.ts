import { ChangeDetectionStrategy, Component } from '@angular/core';

import {
  BrightrailButtonComponent,
  BrightrailCardActionsComponent,
  BrightrailCardComponent,
  BrightrailCardContentComponent,
  BrightrailCardFooterComponent,
  BrightrailCardHeaderActionsDirective,
  BrightrailCardHeaderComponent,
  BrightrailCardHeaderLeadingDirective,
  BrightrailCardHeaderTitleDirective,
  BrightrailCardMediaComponent,
  BrightrailIconButtonComponent,
  BrightrailIconComponent,
} from 'brightrail';

import { CatalogVariationTileComponent } from '../shared/catalog-variation-tile.component';
import { CARD_PLAYGROUND_DEMO_IMAGES } from './card-playground.component';
import { CARD_VARIATION_SNIPPETS } from './card-variation-snippets';

@Component({
  selector: 'app-card-variation-catalog',
  standalone: true,
  imports: [
    BrightrailCardComponent,
    BrightrailCardMediaComponent,
    BrightrailCardHeaderComponent,
    BrightrailCardHeaderTitleDirective,
    BrightrailCardHeaderLeadingDirective,
    BrightrailCardHeaderActionsDirective,
    BrightrailCardContentComponent,
    BrightrailCardActionsComponent,
    BrightrailCardFooterComponent,
    BrightrailButtonComponent,
    BrightrailIconComponent,
    BrightrailIconButtonComponent,
    CatalogVariationTileComponent,
  ],
  templateUrl: './card-variation-catalog.component.html',
  styleUrl: './card-variation-catalog.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CardVariationCatalogComponent {
  readonly demoImages = CARD_PLAYGROUND_DEMO_IMAGES;
  readonly s = CARD_VARIATION_SNIPPETS;
}
