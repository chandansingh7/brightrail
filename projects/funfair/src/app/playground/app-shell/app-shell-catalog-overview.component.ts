import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink } from '@angular/router';

import { AppShellVariationCatalogComponent } from './app-shell-variation-catalog.component';
import { APP_SHELL_HTML_EXAMPLES } from './app-shell-variation-snippets';

@Component({
  selector: 'app-app-shell-catalog-overview',
  standalone: true,
  imports: [RouterLink, AppShellVariationCatalogComponent],
  templateUrl: './app-shell-catalog-overview.component.html',
  styleUrl: './app-shell-catalog-overview.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppShellCatalogOverviewComponent {
  readonly htmlExamples = APP_SHELL_HTML_EXAMPLES;
}
