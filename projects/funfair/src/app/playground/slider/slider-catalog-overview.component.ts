import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink } from '@angular/router';

import { SliderVariationCatalogComponent } from './slider-variation-catalog.component';
import { SLIDER_HTML_EXAMPLES } from './slider-variation-snippets';

@Component({
  selector: 'app-slider-catalog-overview',
  standalone: true,
  imports: [RouterLink, SliderVariationCatalogComponent],
  templateUrl: './slider-catalog-overview.component.html',
  styleUrl: './slider-catalog-overview.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SliderCatalogOverviewComponent {
  readonly htmlExamples = SLIDER_HTML_EXAMPLES;
}
