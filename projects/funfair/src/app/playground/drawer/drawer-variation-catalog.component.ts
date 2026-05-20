import { ChangeDetectionStrategy, Component } from '@angular/core';

import {
  BrightrailButtonComponent,
  BrightrailDrawerBodyComponent,
  BrightrailDrawerComponent,
  BrightrailDrawerFooterComponent,
  BrightrailDrawerHeaderComponent,
  BrightrailDrawerSubtitleDirective,
  BrightrailDrawerTitleDirective,
} from 'brightrail';

import { CatalogVariationTileComponent } from '../shared/catalog-variation-tile.component';
import { DRAWER_VARIATION_SNIPPETS } from './drawer-variation-snippets';

@Component({
  selector: 'app-drawer-variation-catalog',
  standalone: true,
  imports: [
    BrightrailDrawerComponent,
    BrightrailDrawerHeaderComponent,
    BrightrailDrawerBodyComponent,
    BrightrailDrawerFooterComponent,
    BrightrailDrawerTitleDirective,
    BrightrailDrawerSubtitleDirective,
    BrightrailButtonComponent,
    CatalogVariationTileComponent,
  ],
  templateUrl: './drawer-variation-catalog.component.html',
  styleUrl: './drawer-variation-catalog.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DrawerVariationCatalogComponent {
  readonly s = DRAWER_VARIATION_SNIPPETS;
}
