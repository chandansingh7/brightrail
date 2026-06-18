import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { RouterLink } from '@angular/router';
import {
  BrightrailAppShellComponent,
  BrightrailAvatarComponent,
  BrightrailBreadcrumbComponent,
  BrightrailButtonComponent,
  BrightrailIconButtonComponent,
  BrightrailPageHeaderActionsDirective,
  BrightrailPageHeaderComponent,
  BrightrailPageSubtitleDirective,
  BrightrailPageTitleDirective,
  BrightrailSidebarComponent,
  BrightrailTopBarComponent,
} from 'brightrail';

import type { DemoBreadcrumbItem, DemoSiteConfig } from './demo-site.types';
import { DEMO_SITE_LIST } from './demo-sites.registry';

@Component({
  selector: 'app-demo-shell',
  standalone: true,
  imports: [
    RouterLink,
    BrightrailAppShellComponent,
    BrightrailTopBarComponent,
    BrightrailSidebarComponent,
    BrightrailPageHeaderComponent,
    BrightrailPageTitleDirective,
    BrightrailPageSubtitleDirective,
    BrightrailPageHeaderActionsDirective,
    BrightrailBreadcrumbComponent,
    BrightrailButtonComponent,
    BrightrailIconButtonComponent,
    BrightrailAvatarComponent,
  ],
  templateUrl: './demo-shell.component.html',
  styleUrl: './demo-shell.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    class: 'demo-shell-host',
    '[style.--mw-accent]': 'site().accent',
  },
})
export class DemoShellComponent {
  readonly site = input.required<DemoSiteConfig>();
  readonly pageTitle = input.required<string>();
  readonly pageSubtitle = input('');
  readonly breadcrumbs = input<DemoBreadcrumbItem[]>([]);

  readonly allSites = DEMO_SITE_LIST;
}
