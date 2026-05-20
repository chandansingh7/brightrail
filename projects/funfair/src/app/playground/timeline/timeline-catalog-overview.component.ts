import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink } from '@angular/router';

import { TimelineVariationCatalogComponent } from './timeline-variation-catalog.component';
import { TIMELINE_HTML_EXAMPLES } from './timeline-variation-snippets';

@Component({
  selector: 'app-timeline-catalog-overview',
  standalone: true,
  imports: [RouterLink, TimelineVariationCatalogComponent],
  templateUrl: './timeline-catalog-overview.component.html',
  styleUrl: './timeline-catalog-overview.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TimelineCatalogOverviewComponent {
  readonly htmlExamples = TIMELINE_HTML_EXAMPLES;
}
