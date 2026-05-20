import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink } from '@angular/router';

import { SwitchVariationCatalogComponent } from './switch-variation-catalog.component';
import { SWITCH_HTML_EXAMPLES } from './switch-variation-snippets';

@Component({
  selector: 'app-switch-catalog-overview',
  standalone: true,
  imports: [RouterLink, SwitchVariationCatalogComponent],
  templateUrl: './switch-catalog-overview.component.html',
  styleUrl: './switch-catalog-overview.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SwitchCatalogOverviewComponent {
  readonly htmlExamples = SWITCH_HTML_EXAMPLES;
}
