import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink } from '@angular/router';

import { TextareaVariationCatalogComponent } from './textarea-variation-catalog.component';
import { TEXTAREA_HTML_EXAMPLES } from './textarea-variation-snippets';

@Component({
  selector: 'app-textarea-catalog-overview',
  standalone: true,
  imports: [RouterLink, TextareaVariationCatalogComponent],
  templateUrl: './textarea-catalog-overview.component.html',
  styleUrl: './textarea-catalog-overview.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TextareaCatalogOverviewComponent {
  readonly htmlExamples = TEXTAREA_HTML_EXAMPLES;
}
