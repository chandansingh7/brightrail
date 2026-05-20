import { ChangeDetectionStrategy, Component } from '@angular/core';
import {
  BrightrailGraphComponent,
} from 'brightrail';

import { CatalogVariationTileComponent } from '../shared/catalog-variation-tile.component';
import {
  GRAPH_DEMO_BUBBLE_SERIES,
  GRAPH_DEMO_CANDLE_SERIES,
  GRAPH_DEMO_CHANNEL_MIX,
  GRAPH_DEMO_DONUT_SEGMENTS,
  GRAPH_DEMO_FUNNEL_SEGMENTS,
  GRAPH_DEMO_HEATMAP_CELLS,
  GRAPH_DEMO_MIXED_SERIES,
  GRAPH_DEMO_SALES_MULTI,
  GRAPH_DEMO_SALES_OVERVIEW,
  GRAPH_DEMO_SCATTER_SERIES,
} from './graph-demo-data';
import { GRAPH_VARIATION_SNIPPETS } from './graph-variation-snippets';

@Component({
  selector: 'app-graph-variation-catalog',
  standalone: true,
  imports: [BrightrailGraphComponent, CatalogVariationTileComponent],
  templateUrl: './graph-variation-catalog.component.html',
  styleUrl: './graph-variation-catalog.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class GraphVariationCatalogComponent {
  readonly s = GRAPH_VARIATION_SNIPPETS;

  /** Demo data lives in the app — consumers bind their own `series` / `segments`. */
  readonly salesOverview = GRAPH_DEMO_SALES_OVERVIEW;
  readonly salesMulti = GRAPH_DEMO_SALES_MULTI;
  readonly channelMix = GRAPH_DEMO_CHANNEL_MIX;
  readonly channelSegments = GRAPH_DEMO_DONUT_SEGMENTS;
  readonly scatterSeries = GRAPH_DEMO_SCATTER_SERIES;
  readonly bubbleSeries = GRAPH_DEMO_BUBBLE_SERIES;
  readonly mixedSeries = GRAPH_DEMO_MIXED_SERIES;
  readonly candleSeries = GRAPH_DEMO_CANDLE_SERIES;
  readonly heatmapCells = GRAPH_DEMO_HEATMAP_CELLS;
  readonly funnelStages = GRAPH_DEMO_FUNNEL_SEGMENTS;
}
