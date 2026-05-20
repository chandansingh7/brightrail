import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink } from '@angular/router';

import { RadioVariationCatalogComponent } from './radio-variation-catalog.component';
import { RADIO_HTML_EXAMPLES } from './radio-variation-snippets';

@Component({
  selector: 'app-radio-catalog-overview',
  standalone: true,
  imports: [RouterLink, RadioVariationCatalogComponent],
  templateUrl: './radio-catalog-overview.component.html',
  styleUrl: './radio-catalog-overview.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RadioCatalogOverviewComponent {
  readonly htmlExamples = RADIO_HTML_EXAMPLES;
}
