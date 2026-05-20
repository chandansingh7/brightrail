import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink } from '@angular/router';

import { TreeVariationCatalogComponent } from './tree-variation-catalog.component';
import { TREE_HTML_EXAMPLES } from './tree-variation-snippets';

@Component({
  selector: 'app-tree-catalog-overview',
  standalone: true,
  imports: [RouterLink, TreeVariationCatalogComponent],
  templateUrl: './tree-catalog-overview.component.html',
  styleUrl: './tree-catalog-overview.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TreeCatalogOverviewComponent {
  readonly htmlExamples = TREE_HTML_EXAMPLES;
}
