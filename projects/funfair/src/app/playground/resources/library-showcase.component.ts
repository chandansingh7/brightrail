import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import {
  BrightrailBadgeComponent,
  BrightrailBreadcrumbComponent,
  BrightrailBreadcrumbItem,
  BrightrailButtonComponent,
  BrightrailCardComponent,
  BrightrailCardContentComponent,
  BrightrailCardHeaderComponent,
  BrightrailCardHeaderTitleDirective,
  BrightrailPageHeaderComponent,
  BrightrailPageSubtitleDirective,
  BrightrailPageTitleDirective,
} from 'brightrail';

import { midwayDevUrl } from '../../midway-dev-url';
import {
  LIBRARY_SHOWCASE_EXPLORE,
  LIBRARY_SHOWCASE_PILLARS,
  LIBRARY_SHOWCASE_STEPS,
  LIBRARY_SHOWCASE_TAGLINE,
  LIBRARY_SHOWCASE_VERSION,
} from './library-showcase.content';

@Component({
  selector: 'app-library-showcase',
  standalone: true,
  imports: [
    RouterLink,
    BrightrailBadgeComponent,
    BrightrailBreadcrumbComponent,
    BrightrailButtonComponent,
    BrightrailCardComponent,
    BrightrailCardContentComponent,
    BrightrailCardHeaderComponent,
    BrightrailCardHeaderTitleDirective,
    BrightrailPageHeaderComponent,
    BrightrailPageSubtitleDirective,
    BrightrailPageTitleDirective,
  ],
  templateUrl: './library-showcase.component.html',
  styleUrl: './library-showcase.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LibraryShowcaseComponent {
  private readonly router = inject(Router);

  readonly version = LIBRARY_SHOWCASE_VERSION;
  readonly tagline = LIBRARY_SHOWCASE_TAGLINE;
  readonly pillars = LIBRARY_SHOWCASE_PILLARS;
  readonly steps = LIBRARY_SHOWCASE_STEPS;
  readonly exploreLinks = LIBRARY_SHOWCASE_EXPLORE;
  readonly midwayHref = midwayDevUrl();

  readonly breadcrumbItems: BrightrailBreadcrumbItem[] = [
    { label: 'Playground', href: '#/' },
    { label: 'Library showcase', current: true },
  ];

  navigate(route: string): void {
    if (route.startsWith('http')) {
      window.open(route, '_blank', 'noopener,noreferrer');
      return;
    }
    void this.router.navigateByUrl(route.startsWith('/') ? route : `/${route}`);
  }

  explorePath(path: string): string {
    return path.startsWith('/') ? path.slice(1) : path;
  }

  isExternalExplore(path: string): boolean {
    return path.startsWith('http') || path === '/midway';
  }
}
