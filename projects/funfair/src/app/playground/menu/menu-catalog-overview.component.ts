import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink } from '@angular/router';

import { MenuVariationCatalogComponent } from './menu-variation-catalog.component';
import { MENU_HTML_EXAMPLES } from './menu-variation-snippets';

@Component({
  selector: 'app-menu-catalog-overview',
  standalone: true,
  imports: [RouterLink, MenuVariationCatalogComponent],
  templateUrl: './menu-catalog-overview.component.html',
  styleUrl: './menu-catalog-overview.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MenuCatalogOverviewComponent {
  readonly htmlExamples = MENU_HTML_EXAMPLES;
}
