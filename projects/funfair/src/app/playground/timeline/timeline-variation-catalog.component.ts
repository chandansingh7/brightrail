import { ChangeDetectionStrategy, Component } from '@angular/core';
import { BrightrailTimelineComponent, BrightrailTimelineItemComponent } from 'brightrail';

import { CatalogVariationTileComponent } from '../shared/catalog-variation-tile.component';
import { TIMELINE_VARIATION_SNIPPETS } from './timeline-variation-snippets';

@Component({
  selector: 'app-timeline-variation-catalog',
  standalone: true,
  imports: [BrightrailTimelineComponent, BrightrailTimelineItemComponent, CatalogVariationTileComponent],
  templateUrl: './timeline-variation-catalog.component.html',
  styleUrl: './timeline-variation-catalog.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TimelineVariationCatalogComponent {
  readonly s = TIMELINE_VARIATION_SNIPPETS;
}
