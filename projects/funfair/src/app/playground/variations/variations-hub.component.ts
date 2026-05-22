import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink } from '@angular/router';

import {
  VARIATION_CATALOG_ENTRIES,
  catalogRouteSegments,
  variationCatalogCoveragePercent,
} from './variation-catalog-registry';
import { VariationCatalogHubPreviewComponent } from './variation-catalog-hub-preview.component';

@Component({
  selector: 'app-variations-hub',
  standalone: true,
  imports: [RouterLink, VariationCatalogHubPreviewComponent],
  templateUrl: './variations-hub.component.html',
  styleUrl: './variations-hub.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class VariationsHubComponent {
  readonly entries = VARIATION_CATALOG_ENTRIES;
  readonly catalogCoveragePercent = variationCatalogCoveragePercent();
  readonly catalogRouteSegments = catalogRouteSegments;
}
