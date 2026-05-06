import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { BrightrailAvatarComponent, BrightrailAvatarGroupComponent } from 'brightrail';

import { FF_AVATAR_DEFAULT_SRC, FF_AVATAR_PROFILE_ALT_SRC, FF_AVATAR_PUBLIC } from './avatar-demo-assets';

@Component({
  selector: 'app-avatar-catalog-overview',
  standalone: true,
  imports: [RouterLink, BrightrailAvatarComponent, BrightrailAvatarGroupComponent],
  templateUrl: './avatar-catalog-overview.component.html',
  styleUrl: './avatar-catalog-overview.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AvatarCatalogOverviewComponent {
  readonly demoImg = FF_AVATAR_DEFAULT_SRC;
  readonly demoImg2 = FF_AVATAR_PROFILE_ALT_SRC;
  readonly avatarImg = FF_AVATAR_PUBLIC;

  /** Ten image URLs for dense overflow stack (cycles public assets). */
  readonly groupStackTenSrcs = [
    ...Object.values(FF_AVATAR_PUBLIC),
    FF_AVATAR_PUBLIC.a01,
    FF_AVATAR_PUBLIC.a02,
  ];
}
