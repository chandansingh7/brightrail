import { ChangeDetectionStrategy, Component } from '@angular/core';

import {
  BrightrailAvatarComponent,
  BrightrailAvatarGroupComponent,
  BrightrailButtonIconComponent,
} from 'brightrail';

import { CatalogVariationTileComponent } from '../shared/catalog-variation-tile.component';
import { FF_AVATAR_DEFAULT_SRC, FF_AVATAR_PUBLIC } from './avatar-demo-assets';
import { AVATAR_VARIATION_SNIPPETS } from './avatar-variation-snippets';

@Component({
  selector: 'app-avatar-variation-catalog',
  standalone: true,
  imports: [
    BrightrailAvatarComponent,
    BrightrailAvatarGroupComponent,
    BrightrailButtonIconComponent,
    CatalogVariationTileComponent,
  ],
  templateUrl: './avatar-variation-catalog.component.html',
  styleUrl: './avatar-variation-catalog.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AvatarVariationCatalogComponent {
  readonly demoImg = FF_AVATAR_DEFAULT_SRC;
  readonly avatarImg = FF_AVATAR_PUBLIC;
  readonly s = AVATAR_VARIATION_SNIPPETS;

  /** Photo stack row (+2 overflow with maxVisible=3). */
  readonly groupPhotoStack = [
    FF_AVATAR_PUBLIC.a01,
    FF_AVATAR_PUBLIC.a02,
    FF_AVATAR_PUBLIC.a03,
    FF_AVATAR_PUBLIC.a04,
    FF_AVATAR_PUBLIC.a05,
  ];

  /** Second photo stack (+3 overflow with maxVisible=4). */
  readonly groupPhotoStackSeven = [
    FF_AVATAR_PUBLIC.a03,
    FF_AVATAR_PUBLIC.a04,
    FF_AVATAR_PUBLIC.a05,
    FF_AVATAR_PUBLIC.a06,
    FF_AVATAR_PUBLIC.a07,
    FF_AVATAR_PUBLIC.a08,
    FF_AVATAR_PUBLIC.a01,
  ];

  readonly groupInitialsRoster = [
    { name: 'Jamie Doe', tone: 'primary' as const },
    { name: 'Sam Kim', tone: 'success' as const },
    { name: 'Alex Lee', tone: 'warning' as const },
    { name: 'Chris Wu', tone: 'info' as const },
    { name: 'Dana Fox', tone: 'neutral' as const },
    { name: 'Evan Ray', tone: 'primary' as const },
    { name: 'Faye Lin', tone: 'success' as const },
    { name: 'Gabe Ort', tone: 'warning' as const },
  ];
}
