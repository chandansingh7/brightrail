import { FormsModule } from '@angular/forms';
import { ChangeDetectionStrategy, Component, computed, inject, signal } from '@angular/core';
import type { WritableSignal } from '@angular/core';

import { PlaygroundPreviewHeaderComponent } from '../shared/playground-preview-header.component';
import {
  injectPlaygroundA11yPreviewMode,
  initPlaygroundA11yPreview,
} from '../shared/playground-a11y-preview.utils';
import {
  restorePlaygroundState,
  snapshotPlaygroundState,
} from '../shared/playground-a11y-state.utils';
import {
  BRIGHTRAIL_GRAPH_DEFAULT_COLORS,
  BrightrailGraphComponent,
  BrightrailGraphKind,
  BrightrailGraphLegendPosition,
  BrightrailGraphLineStyle,
} from 'brightrail';

import { PlaygroundThemeService } from '../playground-theme.service';
import {
  GRAPH_DEMO_DONUT_SEGMENTS,
  GRAPH_DEMO_FUNNEL_SEGMENTS,
  GRAPH_DEMO_HEATMAP_CELLS,
  GraphDemoDatasetId,
  graphDemoDataset,
  sliceGraphSeries,
} from './graph-demo-data';
import {
  formatGraphHeatmapLiteral,
  formatGraphSegmentsLiteral,
  formatGraphSeriesLiteral,
} from './graph-snippet-format';
import { createPlaygroundPreviewFx, playgroundFxHtml, playgroundFxTs } from '../shared/playground-fx.util';
import { PlaygroundFxSettingsComponent } from '../shared/playground-fx-settings.component';

type CodeTabId = 'html' | 'ts' | 'scss';

type GraphRecipe =
  | 'line-core'
  | 'bar-stack'
  | 'area-gradient'
  | 'donut-pie'
  | 'radial-gauge'
  | 'scatter-bubble'
  | 'mixed'
  | 'candlestick'
  | 'heatmap'
  | 'funnel';

@Component({
  selector: 'app-graph-playground',
  standalone: true,
  imports: [
    PlaygroundPreviewHeaderComponent,FormsModule, BrightrailGraphComponent, PlaygroundFxSettingsComponent],
  templateUrl: './graph-playground.component.html',
  styleUrl: './graph-playground.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class GraphPlaygroundComponent {
  readonly previewOnly = injectPlaygroundA11yPreviewMode();
  readonly a11yPreviewState = computed(() =>
    snapshotPlaygroundState({
      previewRecipe: () => this.previewRecipe(),
      kind: () => this.kind(),
      datasetId: () => this.datasetId(),
      dataPoints: () => this.dataPoints(),
      showArea: () => this.showArea(),
      showLegend: () => this.showLegend(),
      showGrid: () => this.showGrid(),
      showXAxis: () => this.showXAxis(),
      showYAxis: () => this.showYAxis(),
      showTooltip: () => this.showTooltip(),
      enableZoom: () => this.enableZoom(),
      enablePan: () => this.enablePan(),
      lineWidth: () => this.lineWidth(),
      pointRadius: () => this.pointRadius(),
      areaOpacity: () => this.areaOpacity(),
      lineStyle: () => this.lineStyle(),
      legendPosition: () => this.legendPosition(),
      colorScheme: () => this.colorScheme(),
      xAxisLabel: () => this.xAxisLabel(),
      yAxisLabel: () => this.yAxisLabel(),
      tooltipPrefix: () => this.tooltipPrefix(),
      tooltipSuffix: () => this.tooltipSuffix(),
      radialValue: () => this.radialValue(),
      gaugeValue: () => this.gaugeValue(),
    }),
  );


  readonly themeService = inject(PlaygroundThemeService);
  private readonly _playgroundFx = createPlaygroundPreviewFx();
  readonly previewFx = this._playgroundFx.previewFx;
  readonly resolvedFxShell = this._playgroundFx.resolvedFxShell;

  readonly recipeGroups = ['Line', 'Bar & area', 'Radial', 'Advanced'] as const;
  readonly recipeOptions: { value: GraphRecipe; label: string; group: string }[] = [
    { value: 'line-core', label: 'Line with area', group: 'Line' },
    { value: 'bar-stack', label: 'Stacked bars', group: 'Bar & area' },
    { value: 'area-gradient', label: 'Gradient area', group: 'Bar & area' },
    { value: 'donut-pie', label: 'Donut chart', group: 'Radial' },
    { value: 'radial-gauge', label: 'Gauge', group: 'Radial' },
    { value: 'scatter-bubble', label: 'Bubble chart', group: 'Advanced' },
    { value: 'mixed', label: 'Mixed bar + line', group: 'Advanced' },
    { value: 'candlestick', label: 'Candlestick', group: 'Advanced' },
    { value: 'heatmap', label: 'Heatmap', group: 'Advanced' },
    { value: 'funnel', label: 'Funnel', group: 'Advanced' },
  ];

  readonly kindOptions: { value: BrightrailGraphKind; label: string }[] = [
    { value: 'line', label: 'Line' },
    { value: 'line-smooth', label: 'Smooth' },
    { value: 'line-area', label: 'Line + area' },
    { value: 'line-multi', label: 'Multi line' },
    { value: 'bar-vertical', label: 'Bar vertical' },
    { value: 'bar-stacked', label: 'Bar stacked' },
    { value: 'bar-horizontal', label: 'Bar horizontal' },
    { value: 'bar-grouped', label: 'Bar grouped' },
    { value: 'area', label: 'Area' },
    { value: 'area-gradient', label: 'Area gradient' },
    { value: 'area-stacked', label: 'Area stacked' },
    { value: 'area-step', label: 'Area step' },
    { value: 'donut', label: 'Donut' },
    { value: 'pie', label: 'Pie' },
    { value: 'radial', label: 'Radial progress' },
    { value: 'gauge', label: 'Gauge' },
    { value: 'scatter', label: 'Scatter' },
    { value: 'bubble', label: 'Bubble' },
    { value: 'mixed', label: 'Mixed' },
    { value: 'candlestick', label: 'Candlestick' },
    { value: 'heatmap', label: 'Heatmap' },
    { value: 'funnel', label: 'Funnel' },
  ];

  readonly datasetOptions: { value: GraphDemoDatasetId; label: string }[] = [
    { value: 'sales-overview', label: 'Sales overview' },
    { value: 'sales-multi', label: 'Revenue vs costs' },
    { value: 'channel-mix', label: 'Channel mix' },
    { value: 'scatter', label: 'Scatter cluster' },
    { value: 'bubble', label: 'Bubble regions' },
    { value: 'candlestick', label: 'Ticker OHLC' },
    { value: 'mixed', label: 'Units + conversion' },
  ];

  readonly dataPointOptions = [3, 4, 6] as const;
  readonly colorSchemeOptions = [
    { id: 'indigo', colors: [...BRIGHTRAIL_GRAPH_DEFAULT_COLORS] },
    { id: 'ocean', colors: ['#0EA5E9', '#06B6D4', '#14B8A6', '#22C55E', '#EAB308', '#F97316'] },
    { id: 'violet', colors: ['#7C3AED', '#A855F7', '#EC4899', '#F43F5E', '#FB7185', '#F59E0B'] },
  ] as const;

  readonly lineStyleOptions: { value: BrightrailGraphLineStyle | ''; label: string }[] = [
    { value: '', label: 'Auto (from kind)' },
    { value: 'default', label: 'Default' },
    { value: 'smooth', label: 'Smooth' },
    { value: 'step', label: 'Step' },
  ];

  readonly legendPositionOptions: { value: BrightrailGraphLegendPosition; label: string }[] = [
    { value: 'bottom', label: 'Bottom' },
    { value: 'right', label: 'Right' },
  ];

  readonly yesNoOptions = [
    { value: 'no', label: 'No' },
    { value: 'yes', label: 'Yes' },
  ] as const;

  readonly selectedRecipeGroup = signal<string>('Line');
  readonly previewRecipe = signal<GraphRecipe>('line-core');
  readonly kind = signal<BrightrailGraphKind>('line-area');
  readonly datasetId = signal<GraphDemoDatasetId>('sales-overview');
  readonly dataPoints = signal<number>(6);
  readonly showArea = signal(true);
  readonly showLegend = signal(true);
  readonly showGrid = signal(true);
  readonly showXAxis = signal(true);
  readonly showYAxis = signal(true);
  readonly showTooltip = signal(true);
  readonly enableZoom = signal(true);
  readonly enablePan = signal(false);
  readonly lineWidth = signal(2);
  readonly pointRadius = signal(4);
  readonly areaOpacity = signal(0.15);
  readonly lineStyle = signal<BrightrailGraphLineStyle | ''>('');
  readonly legendPosition = signal<BrightrailGraphLegendPosition>('bottom');
  readonly colorScheme = signal<'indigo' | 'ocean' | 'violet'>('indigo');
  readonly xAxisLabel = signal('Month');
  readonly yAxisLabel = signal('Revenue (USD)');
  readonly tooltipPrefix = signal('$');
  readonly tooltipSuffix = signal('');
  readonly radialValue = signal(68);
  readonly gaugeValue = signal(72);
  readonly activeTab = signal<CodeTabId>('html');

  readonly colors = computed(() => {
    const scheme = this.colorSchemeOptions.find((s) => s.id === this.colorScheme());
    return scheme?.colors ?? BRIGHTRAIL_GRAPH_DEFAULT_COLORS;
  });

  /** Playground demo only — bind your own `BrightrailGraphSeries[]` in app code. */
  readonly series = computed(() => sliceGraphSeries(this.dataPoints(), graphDemoDataset(this.datasetId())));

  /** Donut, pie, and funnel charts use segments instead of series. */
  readonly segments = computed(() => {
    const k = this.kind();
    if (k === 'funnel') {
      return GRAPH_DEMO_FUNNEL_SEGMENTS;
    }
    return GRAPH_DEMO_DONUT_SEGMENTS;
  });

  readonly heatmapCells = computed(() => GRAPH_DEMO_HEATMAP_CELLS);

  readonly usesSeries = computed(() => {
    const k = this.kind();
    return !['donut', 'pie', 'radial', 'gauge', 'heatmap', 'funnel'].includes(k);
  });

  readonly dataBindingLabel = computed(() => {
    const k = this.kind();
    if (this.usesSeries()) {
      return '[series]="chartSeries"';
    }
    if (k === 'donut' || k === 'pie' || k === 'funnel') {
      return '[segments]="chartSegments"';
    }
    if (k === 'heatmap') {
      return '[heatmapCells]="heatmapCells"';
    }
    if (k === 'radial') {
      return `[radialValue]="${this.radialValue()}"`;
    }
    if (k === 'gauge') {
      return `[gaugeValue]="${this.gaugeValue()}"`;
    }
    return '—';
  });

  readonly dataBindingDetail = computed(() => {
    const k = this.kind();
    if (this.usesSeries()) {
      const label = this.datasetOptions.find((o) => o.value === this.datasetId())?.label ?? this.datasetId();
      const seriesCount = this.series().length;
      const pointCount = this.series()[0]?.points.length ?? 0;
      return `${label} · ${seriesCount} series · ${pointCount} points`;
    }
    if (k === 'donut' || k === 'pie') {
      return `${GRAPH_DEMO_DONUT_SEGMENTS.length} segments (demo)`;
    }
    if (k === 'funnel') {
      return `${GRAPH_DEMO_FUNNEL_SEGMENTS.length} stages (demo)`;
    }
    if (k === 'heatmap') {
      return `${GRAPH_DEMO_HEATMAP_CELLS.length} cells (demo)`;
    }
    return '';
  });

  readonly htmlSnippet = computed(() => playgroundFxHtml(this.buildHtml(), this.previewFx()));
  readonly activeSnippet = computed(() => {
    switch (this.activeTab()) {
      case 'ts':
        return this.buildTs();
      case 'scss':
        return this.buildScss();
      default:
        return this.htmlSnippet();
    }
  });

  readonly propertySummary = computed(() => [
    { label: 'Type', value: this.kindOptions.find((o) => o.value === this.kind())?.label ?? this.kind() },
    { label: 'Line style', value: this.lineStyle() || 'Auto' },
    { label: 'Legend', value: this.legendPosition() },
    { label: 'Show area', value: this.showArea() ? 'Yes' : 'No' },
    { label: 'Show grid', value: this.showGrid() ? 'Yes' : 'No' },
    { label: 'Tooltip', value: this.showTooltip() ? 'Yes' : 'No' },
    { label: 'Line width', value: `${this.lineWidth()}px` },
    { label: 'X-axis', value: this.xAxisLabel() },
    { label: 'Y-axis', value: this.yAxisLabel() },
  ]);

  constructor() {
    initPlaygroundA11yPreview('graph', this.previewOnly);
    this.applyRecipe('line-core');
  }

  recipesInGroup(group: string): { value: GraphRecipe; label: string }[] {
    return this.recipeOptions.filter((r) => r.group === group).map((r) => ({ value: r.value, label: r.label }));
  }

  onRecipeGroupChange(group: string): void {
    this.selectedRecipeGroup.set(group);
    const first = this.recipesInGroup(group)[0]?.value;
    if (first) {
      this.onRecipeChange(first);
    }
  }

  onRecipeChange(recipe: GraphRecipe): void {
    this.previewRecipe.set(recipe);
    this.applyRecipe(recipe);
  }

  applyRecipe(recipe: GraphRecipe): void {
    switch (recipe) {
      case 'line-core':
        this.kind.set('line-area');
        this.datasetId.set('sales-overview');
        this.showArea.set(true);
        this.yAxisLabel.set('Revenue (USD)');
        break;
      case 'bar-stack':
        this.kind.set('bar-stacked');
        this.datasetId.set('channel-mix');
        this.showArea.set(false);
        this.yAxisLabel.set('Share');
        break;
      case 'area-gradient':
        this.kind.set('area-gradient');
        this.datasetId.set('sales-overview');
        this.showArea.set(true);
        this.yAxisLabel.set('Revenue (USD)');
        break;
      case 'donut-pie':
        this.kind.set('donut');
        this.showLegend.set(true);
        break;
      case 'radial-gauge':
        this.kind.set('gauge');
        this.gaugeValue.set(72);
        break;
      case 'scatter-bubble':
        this.kind.set('bubble');
        this.datasetId.set('bubble');
        this.yAxisLabel.set('Value');
        break;
      case 'mixed':
        this.kind.set('mixed');
        this.datasetId.set('mixed');
        this.yAxisLabel.set('Units / Conversion');
        break;
      case 'candlestick':
        this.kind.set('candlestick');
        this.datasetId.set('candlestick');
        this.yAxisLabel.set('Price (USD)');
        break;
      case 'heatmap':
        this.kind.set('heatmap');
        break;
      case 'funnel':
        this.kind.set('funnel');
        break;
    }
  }

  resetToDefaults(): void {
    this.previewFx.set('inherit');
    this.applyRecipe('line-core');
    this.dataPoints.set(6);
    this.showLegend.set(true);
    this.showGrid.set(true);
    this.showTooltip.set(true);
    this.enableZoom.set(true);
    this.enablePan.set(false);
    this.lineWidth.set(2);
    this.pointRadius.set(4);
    this.lineStyle.set('');
    this.legendPosition.set('bottom');
    this.colorScheme.set('indigo');
    this.xAxisLabel.set('Month');
    this.tooltipPrefix.set('$');
  }

  selectTab(tab: CodeTabId): void {
    this.activeTab.set(tab);
  }

  copySnippet(): void {
    void navigator.clipboard?.writeText(this.activeSnippet());
  }

  onKindChange(value: BrightrailGraphKind): void {
    this.kind.set(value);
    if (value === 'line-multi' || value === 'bar-stacked' || value === 'bar-grouped' || value === 'area-stacked') {
      this.datasetId.set('channel-mix');
    } else if (value === 'scatter') {
      this.datasetId.set('scatter');
    } else if (value === 'bubble') {
      this.datasetId.set('bubble');
    } else if (value === 'mixed') {
      this.datasetId.set('mixed');
    } else if (value === 'candlestick') {
      this.datasetId.set('candlestick');
    } else if (!['donut', 'pie', 'radial', 'gauge', 'heatmap', 'funnel'].includes(value)) {
      this.datasetId.set('sales-overview');
    }
  }

  private buildHtml(): string {
    const lines: string[] = ['<brightrail-graph'];
    lines.push(`  kind="${this.kind()}"`);
    if (this.usesSeries()) {
      lines.push('  [series]="chartSeries"');
    }
    if (this.kind() === 'donut' || this.kind() === 'pie' || this.kind() === 'funnel') {
      lines.push('  [segments]="chartSegments"');
    }
    if (this.kind() === 'heatmap') {
      lines.push('  [heatmapCells]="heatmapCells"');
    }
    if (this.kind() === 'radial') {
      lines.push(`  [radialValue]="${this.radialValue()}"`);
    }
    if (this.kind() === 'gauge') {
      lines.push(`  [gaugeValue]="${this.gaugeValue()}"`);
    }
    if (this.yAxisLabel() && this.usesSeries()) {
      lines.push(`  yAxisLabel="${this.yAxisLabel()}"`);
    }
    if (this.xAxisLabel() && this.usesSeries()) {
      lines.push(`  xAxisLabel="${this.xAxisLabel()}"`);
    }
    if (this.lineStyle()) {
      lines.push(`  lineStyle="${this.lineStyle()}"`);
    }
    lines.push(`  legendPosition="${this.legendPosition()}"`);
    lines.push(`  surface="${this.themeService.theme()}"`);
    lines.push(`  [lineWidth]="${this.lineWidth()}"`);
    lines.push(`  [pointRadius]="${this.pointRadius()}"`);
    lines.push(`  [showArea]="${this.showArea()}"`);
    lines.push(`  [showLegend]="${this.showLegend()}"`);
    lines.push(`  [showGrid]="${this.showGrid()}"`);
    lines.push(`  [showXAxis]="${this.showXAxis()}"`);
    lines.push(`  [showYAxis]="${this.showYAxis()}"`);
    lines.push(`  [showTooltip]="${this.showTooltip()}"`);
    if (this.tooltipPrefix()) {
      lines.push(`  tooltipValuePrefix="${this.tooltipPrefix()}"`);
    }
    lines.push(`  [enableZoom]="${this.enableZoom()}"`);
    lines.push(`  [enablePan]="${this.enablePan()}"`);
    lines.push('  ariaLabel="Analytics chart"');
    lines.push('/>');
    return lines.join('\n');
  }

  private buildTs(): string {
    const k = this.kind();
    const imports = [`import { Component } from '@angular/core';`, `import { BrightrailGraphComponent`];
    const typeImports: string[] = [];

    if (this.usesSeries()) {
      typeImports.push('BrightrailGraphSeries');
    }
    if (k === 'donut' || k === 'pie' || k === 'funnel') {
      typeImports.push('BrightrailGraphSegment');
    }
    if (k === 'heatmap') {
      typeImports.push('BrightrailGraphHeatCell');
    }

    imports[1] += typeImports.length ? `, ${typeImports.join(', ')}` : '';
    imports.push(`} from 'brightrail';`);
    imports.push('');

    const bodyLines: string[] = [
      `@Component({`,
      `  selector: 'app-analytics-chart',`,
      `  standalone: true,`,
      `  imports: [BrightrailGraphComponent],`,
      `  templateUrl: './analytics-chart.component.html',`,
      `})`,
      `export class AnalyticsChartComponent {`,
    ];

    if (this.usesSeries()) {
      bodyLines.push(
        `  /** Your app owns chart data — map from API, store, or static config. */`,
        `  readonly chartSeries: BrightrailGraphSeries[] = ${formatGraphSeriesLiteral(this.series())};`,
      );
    } else if (k === 'donut' || k === 'pie') {
      bodyLines.push(
        `  /** Segment charts use [segments], not [series]. */`,
        `  readonly chartSegments = ${formatGraphSegmentsLiteral(this.segments())};`,
      );
    } else if (k === 'funnel') {
      bodyLines.push(
        `  readonly chartSegments = ${formatGraphSegmentsLiteral(this.segments())};`,
      );
    } else if (k === 'heatmap') {
      bodyLines.push(
        `  readonly heatmapCells = ${formatGraphHeatmapLiteral(this.heatmapCells())};`,
      );
    } else if (k === 'radial') {
      bodyLines.push(`  readonly radialValue = ${this.radialValue()};`);
    } else if (k === 'gauge') {
      bodyLines.push(`  readonly gaugeValue = ${this.gaugeValue()};`);
    }

    bodyLines.push(`}`);

    return playgroundFxTs([...imports, ...bodyLines].join('\n'), this.previewFx(), this.themeService.fxShell());
  }

  private buildScss(): string {
    return `:host {
  display: block;
}

brightrail-graph {
  --br-graph-height: 320px;
}`;
  }
}
