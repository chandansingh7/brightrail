import { ChangeDetectionStrategy, Component } from '@angular/core';
import {
  BrightrailAvatarComponent,
  BrightrailButtonIconComponent,
  BrightrailTooltipDirective,
} from 'brightrail';

import { FF_AVATAR_PUBLIC } from '../avatar/avatar-demo-assets';
import { CatalogVariationTileComponent } from '../shared/catalog-variation-tile.component';
import { TOOLTIP_VARIATION_SNIPPETS } from './tooltip-variation-snippets';

@Component({
  selector: 'app-tooltip-variation-catalog',
  standalone: true,
  imports: [
    BrightrailTooltipDirective,
    BrightrailButtonIconComponent,
    BrightrailAvatarComponent,
    CatalogVariationTileComponent,
  ],
  templateUrl: './tooltip-variation-catalog.component.html',
  styleUrl: './tooltip-variation-catalog.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TooltipVariationCatalogComponent {
  readonly avatarImg = FF_AVATAR_PUBLIC;
  readonly s = TOOLTIP_VARIATION_SNIPPETS;
}
