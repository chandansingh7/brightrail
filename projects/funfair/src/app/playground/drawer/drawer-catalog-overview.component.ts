import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink } from '@angular/router';

import { DrawerVariationCatalogComponent } from './drawer-variation-catalog.component';
import { DRAWER_HTML_EXAMPLES } from './drawer-variation-snippets';

@Component({
  selector: 'app-drawer-catalog-overview',
  standalone: true,
  imports: [RouterLink, DrawerVariationCatalogComponent],
  templateUrl: './drawer-catalog-overview.component.html',
  styleUrl: './drawer-catalog-overview.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DrawerCatalogOverviewComponent {
  readonly htmlExamples = DRAWER_HTML_EXAMPLES;
}
