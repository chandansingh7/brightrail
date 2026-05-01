import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';

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
  readonly themeService = inject(PlaygroundThemeService);

  /** Shipped library version (keep aligned with projects/brightrail/package.json). */
  readonly libraryVersion = '0.0.1';
  readonly midwayHref = midwayDevUrl();

  readonly headerThemeOptions = [
    { id: 'light' as const, label: 'Material light' },
    { id: 'dark' as const, label: 'Material dark' },
  ];
}
