import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrightrailComboboxComponent, BrightrailComboboxOption } from 'brightrail';

import { CatalogVariationTileComponent } from '../shared/catalog-variation-tile.component';
import { COMBOBOX_VARIATION_SNIPPETS } from './combobox-variation-snippets';

@Component({
  selector: 'app-combobox-variation-catalog',
  standalone: true,
  imports: [FormsModule, BrightrailComboboxComponent, CatalogVariationTileComponent],
  templateUrl: './combobox-variation-catalog.component.html',
  styleUrl: './combobox-variation-catalog.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ComboboxVariationCatalogComponent {
  readonly s = COMBOBOX_VARIATION_SNIPPETS;
  readonly ngModelStandalone = { standalone: true };

  readonly countryOptions: BrightrailComboboxOption[] = [
    { value: 'us', label: 'United States' },
    { value: 'ca', label: 'Canada' },
    { value: 'mx', label: 'Mexico', disabled: true },
  ];

  readonly assigneeOptions: BrightrailComboboxOption[] = [
    { value: 'alex', label: 'Alex Morgan' },
    { value: 'jordan', label: 'Jordan Lee' },
  ];

  readonly priorityOptions: BrightrailComboboxOption[] = [
    { value: 'p1', label: 'P1 — Critical' },
    { value: 'p2', label: 'P2 — High' },
    { value: 'p3', label: 'P3 — Normal' },
  ];

  readonly tagOptions: BrightrailComboboxOption[] = [
    { value: 'bug', label: 'Bug' },
    { value: 'feat', label: 'Feature' },
  ];

  countryCode = 'us';
  assigneeId = 'alex';
  priorityCode = 'p2';
  tagCode = 'bug';
  regionCode = 'us';
  planCode = 'p1';
  cityCode = 'alex';
}
