import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink } from '@angular/router';

import { ToastVariationCatalogComponent } from './toast-variation-catalog.component';
import { TOAST_HTML_EXAMPLES } from './toast-variation-snippets';

@Component({
  selector: 'app-toast-catalog-overview',
  standalone: true,
  imports: [RouterLink, ToastVariationCatalogComponent],
  templateUrl: './toast-catalog-overview.component.html',
  styleUrl: './toast-catalog-overview.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ToastCatalogOverviewComponent {
  readonly htmlExamples = TOAST_HTML_EXAMPLES;
}
