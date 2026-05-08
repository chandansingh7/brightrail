import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { BrightrailDatePickerComponent, BrightrailDateRange } from 'brightrail';

@Component({
  selector: 'app-date-picker-catalog-overview',
  standalone: true,
  imports: [RouterLink, FormsModule, BrightrailDatePickerComponent],
  templateUrl: './date-picker-catalog-overview.component.html',
  styleUrl: './date-picker-catalog-overview.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DatePickerCatalogOverviewComponent {
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
