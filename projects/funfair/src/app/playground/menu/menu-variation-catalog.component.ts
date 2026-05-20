import { ChangeDetectionStrategy, Component } from '@angular/core';
import {
  BrightrailMenuComponent,
  BrightrailMenuItemComponent,
  BrightrailMenuTriggerDirective,
} from 'brightrail';

import { CatalogVariationTileComponent } from '../shared/catalog-variation-tile.component';
import { MENU_VARIATION_SNIPPETS } from './menu-variation-snippets';

@Component({
  selector: 'app-menu-variation-catalog',
  standalone: true,
  imports: [
    BrightrailMenuComponent,
    BrightrailMenuItemComponent,
    BrightrailMenuTriggerDirective,
    CatalogVariationTileComponent,
  ],
  templateUrl: './menu-variation-catalog.component.html',
  styleUrl: './menu-variation-catalog.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MenuVariationCatalogComponent {
  readonly s = MENU_VARIATION_SNIPPETS;
}
