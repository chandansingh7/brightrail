import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink } from '@angular/router';

import { SelectVariationCatalogComponent } from './select-variation-catalog.component';
import { SELECT_HTML_EXAMPLES } from './select-variation-snippets';

@Component({
  selector: 'app-select-catalog-overview',
  standalone: true,
  imports: [RouterLink, SelectVariationCatalogComponent],
  templateUrl: './select-catalog-overview.component.html',
  styleUrl: './select-catalog-overview.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SelectCatalogOverviewComponent {
  readonly htmlExamples = SELECT_HTML_EXAMPLES;
}
