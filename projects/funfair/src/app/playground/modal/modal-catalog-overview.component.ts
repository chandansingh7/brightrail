import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink } from '@angular/router';

import { ModalVariationCatalogComponent } from './modal-variation-catalog.component';
import { MODAL_HTML_EXAMPLES } from './modal-variation-snippets';

@Component({
  selector: 'app-modal-catalog-overview',
  standalone: true,
  imports: [RouterLink, ModalVariationCatalogComponent],
  templateUrl: './modal-catalog-overview.component.html',
  styleUrl: './modal-catalog-overview.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ModalCatalogOverviewComponent {
  readonly htmlExamples = MODAL_HTML_EXAMPLES;
}
