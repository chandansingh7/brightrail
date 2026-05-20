import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink } from '@angular/router';

import { ButtonVariationCatalogComponent } from './button-variation-catalog.component';
import { BUTTON_HTML_EXAMPLES } from './button-variation-snippets';

@Component({
  selector: 'app-button-catalog-overview',
  standalone: true,
  imports: [RouterLink, ButtonVariationCatalogComponent],
  templateUrl: './button-catalog-overview.component.html',
  styleUrl: './button-catalog-overview.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ButtonCatalogOverviewComponent {
  readonly htmlExamples = BUTTON_HTML_EXAMPLES;
}
