import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink } from '@angular/router';

import { GraphVariationCatalogComponent } from './graph-variation-catalog.component';
import { GRAPH_HTML_EXAMPLES } from './graph-variation-snippets';

@Component({
  selector: 'app-graph-catalog-overview',
  standalone: true,
  imports: [RouterLink, GraphVariationCatalogComponent],
  templateUrl: './graph-catalog-overview.component.html',
  styleUrl: './graph-catalog-overview.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class GraphCatalogOverviewComponent {
  readonly htmlExamples = GRAPH_HTML_EXAMPLES;
}
