import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink } from '@angular/router';

import { DatePickerVariationCatalogComponent } from './date-picker-variation-catalog.component';
import { DATE_PICKER_HTML_EXAMPLES } from './date-picker-variation-snippets';

@Component({
  selector: 'app-date-picker-catalog-overview',
  standalone: true,
  imports: [RouterLink, DatePickerVariationCatalogComponent],
  templateUrl: './date-picker-catalog-overview.component.html',
  styleUrl: './date-picker-catalog-overview.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DatePickerCatalogOverviewComponent {
  readonly htmlExamples = DATE_PICKER_HTML_EXAMPLES;
}
