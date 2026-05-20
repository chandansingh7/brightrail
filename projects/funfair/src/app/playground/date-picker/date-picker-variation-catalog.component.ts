import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { BrightrailDatePickerComponent, BrightrailDateRange } from 'brightrail';

import { CatalogVariationTileComponent } from '../shared/catalog-variation-tile.component';
import { DATE_PICKER_VARIATION_SNIPPETS } from './date-picker-variation-snippets';

@Component({
  selector: 'app-date-picker-variation-catalog',
  standalone: true,
  imports: [FormsModule, BrightrailDatePickerComponent, CatalogVariationTileComponent],
  templateUrl: './date-picker-variation-catalog.component.html',
  styleUrl: './date-picker-variation-catalog.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DatePickerVariationCatalogComponent {
  readonly s = DATE_PICKER_VARIATION_SNIPPETS;

  readonly singleDate = new Date(2026, 4, 20);
  readonly monthDate = new Date(2026, 4, 1);
  readonly rangeDate: BrightrailDateRange = {
    start: new Date(2026, 4, 12),
    end: new Date(2026, 4, 20),
  };
  readonly bookingRange: BrightrailDateRange = {
    start: new Date(2026, 4, 12),
    end: new Date(2026, 4, 20),
  };
}
