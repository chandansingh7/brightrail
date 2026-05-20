import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink } from '@angular/router';

import { TabsVariationCatalogComponent } from './tabs-variation-catalog.component';
import { TABS_HTML_EXAMPLES } from './tabs-variation-snippets';

@Component({
  selector: 'app-tabs-catalog-overview',
  standalone: true,
  imports: [RouterLink, TabsVariationCatalogComponent],
  templateUrl: './tabs-catalog-overview.component.html',
  styleUrl: './tabs-catalog-overview.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TabsCatalogOverviewComponent {
  readonly htmlExamples = TABS_HTML_EXAMPLES;
}
