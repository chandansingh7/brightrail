import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink } from '@angular/router';

import {
  VARIATION_CATALOG_ENTRIES,
  catalogRouteSegments,
  variationCatalogCoveragePercent,
} from './variation-catalog-registry';

@Component({
  selector: 'app-variations-hub',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './variations-hub.component.html',
  styleUrl: './variations-hub.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class VariationsHubComponent {
  readonly entries = VARIATION_CATALOG_ENTRIES;
  readonly catalogCoveragePercent = variationCatalogCoveragePercent();
  readonly catalogRouteSegments = catalogRouteSegments;
}
