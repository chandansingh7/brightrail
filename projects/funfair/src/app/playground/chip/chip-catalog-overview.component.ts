import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink } from '@angular/router';

import { ChipVariationCatalogComponent } from './chip-variation-catalog.component';
import { CHIP_HTML_EXAMPLES } from './chip-variation-snippets';

@Component({
  selector: 'app-chip-catalog-overview',
  standalone: true,
  imports: [RouterLink, ChipVariationCatalogComponent],
  templateUrl: './chip-catalog-overview.component.html',
  styleUrl: './chip-catalog-overview.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ChipCatalogOverviewComponent {
  readonly htmlExamples = CHIP_HTML_EXAMPLES;
}
