import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink } from '@angular/router';

import { TooltipVariationCatalogComponent } from './tooltip-variation-catalog.component';
import { TOOLTIP_HTML_EXAMPLES } from './tooltip-variation-snippets';

@Component({
  selector: 'app-tooltip-catalog-overview',
  standalone: true,
  imports: [RouterLink, TooltipVariationCatalogComponent],
  templateUrl: './tooltip-catalog-overview.component.html',
  styleUrl: './tooltip-catalog-overview.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TooltipCatalogOverviewComponent {
  readonly htmlExamples = TOOLTIP_HTML_EXAMPLES;
}
