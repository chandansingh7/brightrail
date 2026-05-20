import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { BrightrailButtonIconComponent, BrightrailSelectComponent } from 'brightrail';

import { CatalogVariationTileComponent } from '../shared/catalog-variation-tile.component';
import { SELECT_VARIATION_SNIPPETS } from './select-variation-snippets';

@Component({
  selector: 'app-select-variation-catalog',
  standalone: true,
  imports: [
    FormsModule,
    BrightrailSelectComponent,
    BrightrailButtonIconComponent,
    CatalogVariationTileComponent,
  ],
  templateUrl: './select-variation-catalog.component.html',
  styleUrl: './select-variation-catalog.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SelectVariationCatalogComponent {
  readonly s = SELECT_VARIATION_SNIPPETS;

  readonly ngModelStandalone = { standalone: true };

  readonly demoOptions = [
    { id: 'us', label: 'United States of America (North Region)' },
    { id: 'ca', label: 'Canada - Eastern Territories' },
    { id: 'mx', label: 'Mexico - Federal District' },
  ] as const;

  countryCode = 'us';
  statusCode = 'open';
  filterCode = 'all';
  queryCode = '';
  dateCode = '2026-05-19';
  regionCode = 'br';

  readonly displayUs = 'United States';
  readonly displayUsLong = 'United States of America (North Region)';
  readonly displayReadonly = 'United States (locked)';
  readonly displayRegionLong = 'São Paulo Metropolitan Cluster — Brazil';
  readonly displayDate = 'May 19, 2026';
  readonly displayFilter = 'All items';
}
