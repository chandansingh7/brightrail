import { ChangeDetectionStrategy, Component, inject, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import {
  BrightrailBadgeComponent,
  BrightrailIconComponent,
} from 'brightrail';

import type { BrightrailIconName } from 'brightrail';

import { DEMO_SITE_LIST } from '../shared/demo-sites.registry';
import { DemoThemeService } from '../shared/demo-theme.service';

@Component({
  selector: 'app-hub',
  standalone: true,
  imports: [
    RouterLink,
    BrightrailBadgeComponent,
    BrightrailIconComponent,
  ],
  templateUrl: './hub.component.html',
  styleUrl: './hub.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HubComponent implements OnInit {
  private readonly theme = inject(DemoThemeService);
  readonly sites = DEMO_SITE_LIST;

  ngOnInit(): void {
    this.theme.reset();
  }

  siteIcon(id: string): BrightrailIconName {
    return id === 'fintech' || id === 'cyber' ? 'show_chart' : 'more_vert';
  }
}
