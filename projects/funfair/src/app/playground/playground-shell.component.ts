import { ChangeDetectionStrategy, Component, computed, inject } from '@angular/core';
import { NavigationEnd, Router, RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { toSignal } from '@angular/core/rxjs-interop';
import { filter, map, startWith } from 'rxjs';

import { midwayDevUrl } from '../midway-dev-url';
import { PlaygroundThemeService } from './playground-theme.service';

@Component({
  selector: 'app-playground-shell',
  standalone: true,
  imports: [RouterOutlet, RouterLink, RouterLinkActive],
  templateUrl: './playground-shell.component.html',
  styleUrl: './playground-shell.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PlaygroundShellComponent {
  private readonly router = inject(Router);
  readonly themeService = inject(PlaygroundThemeService);

  /** Shipped library version (keep aligned with projects/brightrail/package.json). */
  readonly libraryVersion = '0.0.1';
  readonly midwayHref = midwayDevUrl();

  readonly headerThemeOptions = [
    { id: 'light' as const, label: 'Material light' },
    { id: 'dark' as const, label: 'Material dark' },
  ];

  private readonly routeUrl = toSignal(
    this.router.events.pipe(
      filter((e): e is NavigationEnd => e instanceof NavigationEnd),
      map(() => this.router.url),
      startWith(this.router.url),
    ),
    { initialValue: this.router.url },
  );

  readonly sidebarTip = computed(() =>
    this.routeUrl().includes('/table')
      ? 'Tables support sorting, pagination, selection, density, variants, toolbars, and rich row states.'
      : this.routeUrl().includes('/checkbox')
        ? 'Checkbox settings cover indeterminate, validation, tone, size, and enterprise bulk-select patterns.'
        : this.routeUrl().includes('/radio')
          ? 'Radio settings support grouped choices, validation states, semantic tones, and size scaling.'
          : this.routeUrl().includes('/date-picker')
            ? 'Date picker settings cover type, appearance, size, range, popup behavior, validation, and enterprise usage patterns.'
            : this.routeUrl().includes('/file-upload')
              ? 'File upload settings cover accepted types, limits, statuses, and enterprise intake workflows.'
            : this.routeUrl().includes('/accordion')
            ? 'Accordion patterns cover appearances, multi-expand, icons, badges, nested panels, and header actions.'
            : this.routeUrl().includes('/breadcrumb')
              ? 'Breadcrumbs support separator styles, icon paths, truncation, and current-page emphasis for deep navigation.'
              : this.routeUrl().includes('/stepper')
                ? 'Steppers guide multi-step flows with orientation, status states, descriptions, and futuristic progress styles.'
            : this.routeUrl().includes('/pagination')
              ? 'Pagination supports summaries, page-size placement, ellipsis ranges, mobile layouts, and jump-to-page.'
              : this.routeUrl().includes('/drawer')
                ? 'Drawer settings cover placements, sizes, behavior modes, overlay styles, sticky regions, and action footers.'
              : this.routeUrl().includes('/progress')
                ? 'Progress supports determinate, indeterminate, and buffer states with rich theming, rings, steppers, and futuristic variants.'
                : this.routeUrl().includes('/badge')
                ? 'Use badge settings to switch between count, status, dot, and notification patterns quickly.'
                : this.routeUrl().includes('/chip')
                  ? 'Chips combine status, filters, avatars, and dismiss actions for dense enterprise workflows.'
                  : this.routeUrl().includes('/avatar')
                    ? 'Use avatars to represent people in lists, menus, and collaboration surfaces.'
                    : this.routeUrl().includes('/tooltip')
                      ? 'Use tooltips for short contextual help. Keep messages concise and avoid essential-only information.'
                      : 'Tweak controls on the left — the preview and generated markup stay in sync.',
  );
}
