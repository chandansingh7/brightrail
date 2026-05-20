import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ComboboxVariationCatalogComponent } from './combobox-variation-catalog.component';
import { COMBOBOX_HTML_EXAMPLES } from './combobox-variation-snippets';

@Component({
  selector: 'app-combobox-catalog-overview',
  standalone: true,
  imports: [RouterLink, ComboboxVariationCatalogComponent],
  templateUrl: './combobox-catalog-overview.component.html',
  styleUrl: './combobox-catalog-overview.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ComboboxCatalogOverviewComponent {
  readonly htmlExamples = COMBOBOX_HTML_EXAMPLES;
}
