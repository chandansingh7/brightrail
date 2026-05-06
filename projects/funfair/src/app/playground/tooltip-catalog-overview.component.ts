import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import {
  BrightrailAvatarComponent,
  BrightrailButtonIconComponent,
  BrightrailTooltipDirective,
} from 'brightrail';

import { FF_AVATAR_PUBLIC } from './avatar-demo-assets';

@Component({
  selector: 'app-tooltip-catalog-overview',
  standalone: true,
  imports: [
    RouterLink,
    BrightrailTooltipDirective,
    BrightrailButtonIconComponent,
    BrightrailAvatarComponent,
  ],
  templateUrl: './tooltip-catalog-overview.component.html',
  styleUrl: './tooltip-catalog-overview.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TooltipCatalogOverviewComponent {
  readonly avatarImg = FF_AVATAR_PUBLIC;
}
