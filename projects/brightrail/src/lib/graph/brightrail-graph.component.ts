import {
  ChangeDetectionStrategy,
  Component,
  booleanAttribute,
  computed,
  input,
  signal,
} from '@angular/core';
import { BRIGHTRAIL_FX_SHELL_HOST } from '../futuristic/brightrail-futuristic-host';

import {
  BRIGHTRAIL_GRAPH_DEFAULT_COLORS,
  BrightrailGraphArcSlice,
  BrightrailGraphAxisTick,
  BrightrailGraphBarRect,
  BrightrailGraphFunnelStage,
  BrightrailGraphGridLine,
  BrightrailGraphHeatRect,
  BrightrailGraphHeatCell,
  BrightrailGraphKind,
  BrightrailGraphLegendItem,
  BrightrailGraphLegendPosition,
  BrightrailGraphLineStyle,
  BrightrailGraphPlotPoint,
  BrightrailGraphSegment,
  BrightrailGraphSeries,
  BrightrailGraphSurface,
} from './brightrail-graph.types';
import {
  buildArcSlices,
  buildAreaPath,
  buildBubblePoints,
  buildCandles,
  buildFunnelStages,
  buildGaugeNeedle,
  buildGridLines,
  buildHeatmap,
  buildHorizontalBars,
  buildLinePath,
  buildRadialProgress,
  buildScatterPoints,
  buildVerticalBars,
  buildXAxisTicks,
  buildYAxisTicks,
  categoryLabels,
  collectNumericValues,
  colorAt,
  domainMinMax,
  numericXValues,
  resolveGraphLayout,
  resolveLineStyle,
  seriesPlotPoints,
} from './brightrail-graph.utils';

export interface BrightrailGraphLineLayer {
  readonly path: string;
  readonly areaPath: string;
  readonly color: string;
  readonly label: string;
  readonly points: readonly BrightrailGraphPlotPoint[];
}

export interface BrightrailGraphCandleView {
  readonly x: number;
  readonly openY: number;
  readonly closeY: number;
  readonly highY: number;
  readonly lowY: number;
  readonly bodyTop: number;
  readonly bodyBottom: number;
  readonly bodyHeight: number;
  readonly bodyWidth: number;
  readonly color: string;
  readonly label: string;
}

export interface BrightrailGraphTooltipView {
  readonly x: number;
  readonly y: number;
  readonly title: string;
  readonly value: string;
}

@Component({
  selector: 'brightrail-graph',
  standalone: true,
  hostDirectives: [BRIGHTRAIL_FX_SHELL_HOST],
  templateUrl: './brightrail-graph.component.html',
  styleUrl: './brightrail-graph.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    class: 'br-graph',
    '[class.br-graph--interactive]': 'showTooltip()',
    '[class.br-graph--legend-right]': "legendPosition() === 'right'",
    '[class.br-graph--surface-dark]': "surface() === 'dark'",
    '[style.--br-graph-height.px]': 'height()',
    '[style.--br-graph-area-opacity]': 'areaOpacity()',
  },
})
export class BrightrailGraphComponent {
  private static nextId = 0;

  readonly svgDefId = `br-graph-${++BrightrailGraphComponent.nextId}`;

  readonly kind = input<BrightrailGraphKind>('line');
  readonly series = input<readonly BrightrailGraphSeries[]>([]);
  readonly segments = input<readonly BrightrailGraphSegment[]>([]);
  readonly heatmapCells = input<readonly BrightrailGraphHeatCell[]>([]);

  readonly showArea = input(false, { transform: booleanAttribute });
  readonly showLegend = input(true, { transform: booleanAttribute });
  readonly showGrid = input(true, { transform: booleanAttribute });
  readonly showXAxis = input(true, { transform: booleanAttribute });
  readonly showYAxis = input(true, { transform: booleanAttribute });
  readonly showTooltip = input(true, { transform: booleanAttribute });
  readonly enableZoom = input(false, { transform: booleanAttribute });
  readonly enablePan = input(false, { transform: booleanAttribute });

  /** Override line interpolation; when unset, derived from `kind`. */
  readonly lineStyle = input<BrightrailGraphLineStyle | undefined>(undefined);
  readonly legendPosition = input<BrightrailGraphLegendPosition>('bottom');

  readonly lineWidth = input(2);
  readonly pointRadius = input(4);
  readonly areaOpacity = input(0.15);
  readonly height = input(280);
  readonly width = input(0);
  readonly colors = input<readonly string[]>(BRIGHTRAIL_GRAPH_DEFAULT_COLORS);

  readonly xAxisLabel = input('');
  readonly yAxisLabel = input('Value');
  readonly yTickCount = input(4);
  /** Optional Y-axis domain overrides (auto-scaled from `series` when omitted). */
  readonly yMin = input<number | undefined>(undefined);
  readonly yMax = input<number | undefined>(undefined);

  readonly radialValue = input(68);
  readonly gaugeValue = input(72);
  readonly donutInnerRadius = input(0.55);

  /** Canvas treatment — bind to app theme or `PlaygroundThemeService.theme()` in Funfair. */
  readonly surface = input<BrightrailGraphSurface>('light');

  readonly tooltipValuePrefix = input('');
  readonly tooltipValueSuffix = input('');

  readonly ariaLabel = input<string | undefined>(undefined);

  readonly activeTooltip = signal<BrightrailGraphTooltipView | null>(null);

  readonly layout = computed(() => {
    const w = this.width() > 0 ? this.width() : 480;
    return resolveGraphLayout(w, this.height(), this.kind(), {
      showYAxisLabel: Boolean(this.yAxisLabel()) && this.showYAxis() && !this.isNonCartesian(),
      showXAxisLabel: Boolean(this.xAxisLabel()) && this.showXAxis() && !this.isNonCartesian(),
    });
  });

  readonly viewBox = computed(() => `0 0 ${this.layout().width} ${this.layout().height}`);

  readonly yDomain = computed(() => {
    const auto = domainMinMax(collectNumericValues(this.series()));
    return {
      min: this.yMin() ?? auto.min,
      max: this.yMax() ?? auto.max,
    };
  });

  readonly gridLines = computed((): BrightrailGraphGridLine[] => {
    if (!this.showGrid() || this.isNonCartesian()) {
      return [];
    }
    return buildGridLines(this.layout(), this.yTickCount(), this.yDomain());
  });

  readonly yTicks = computed((): BrightrailGraphAxisTick[] => {
    if (this.isNonCartesian() || !this.showYAxis()) {
      return [];
    }
    return buildYAxisTicks(this.layout(), this.yTickCount(), this.yDomain());
  });

  readonly xTicks = computed((): BrightrailGraphAxisTick[] => {
    if (this.isNonCartesian() || !this.showXAxis()) {
      return [];
    }
    const labels = categoryLabels(this.series());
    return buildXAxisTicks(this.layout(), labels);
  });

  readonly lineLayers = computed((): BrightrailGraphLineLayer[] => {
    const kind = this.kind();
    if (!this.isLineFamily(kind) && kind !== 'mixed') {
      return [];
    }
    const layout = this.layout();
    const domain = this.yDomain();
    const style = this.lineStyle() ?? resolveLineStyle(kind);
    const baseline = layout.plotTop + layout.plotHeight;
    const palette = this.colors();

    const source =
      kind === 'line-multi' || kind === 'area-stacked'
        ? this.series()
        : kind === 'mixed'
          ? this.series().slice(1)
          : this.series().slice(0, 1);

    return source.map((s, i) => {
      const color = s.color ?? colorAt(i, palette);
      const seriesDomain =
        kind === 'mixed' && i > 0 ? domainMinMax(s.points.map((p) => p.y ?? 0)) : domain;
      const points = seriesPlotPoints(layout, s, seriesDomain, color);
      const path = buildLinePath(points, style);
      const firstX = points[0]?.x ?? layout.plotLeft;
      const lastX = points[points.length - 1]?.x ?? layout.plotLeft + layout.plotWidth;
      const areaOn =
        this.showArea() || kind === 'line-area' || kind.startsWith('area');
      return {
        path,
        areaPath: areaOn ? buildAreaPath(path, baseline, firstX, lastX) : '',
        color,
        label: s.label,
        points,
      };
    });
  });

  readonly bars = computed((): BrightrailGraphBarRect[] => {
    const kind = this.kind();
    const layout = this.layout();
    const palette = this.colors();
    if (kind === 'bar-vertical') {
      return buildVerticalBars(layout, this.series(), this.yDomain(), palette, 'single');
    }
    if (kind === 'bar-stacked') {
      return buildVerticalBars(layout, this.series(), this.yDomain(), palette, 'stacked');
    }
    if (kind === 'bar-grouped') {
      return buildVerticalBars(layout, this.series(), this.yDomain(), palette, 'grouped');
    }
    if (kind === 'bar-horizontal') {
      const s = this.series()[0];
      return s ? buildHorizontalBars(layout, s, this.yDomain(), s.color ?? palette[0]) : [];
    }
    if (kind === 'mixed') {
      const s = this.series()[0];
      return s ? buildVerticalBars(layout, [s], this.yDomain(), palette, 'single') : [];
    }
    if (kind === 'area-stacked') {
      return [];
    }
    return [];
  });

  readonly arcSlices = computed((): BrightrailGraphArcSlice[] => {
    const kind = this.kind();
    if (kind !== 'donut' && kind !== 'pie') {
      return [];
    }
    return buildArcSlices(this.layout(), this.segments(), this.colors(), kind === 'donut' ? this.donutInnerRadius() : 0);
  });

  readonly radial = computed(() => {
    if (this.kind() !== 'radial') {
      return null;
    }
    return buildRadialProgress(this.layout(), this.radialValue(), this.colors()[0] ?? '#4F46E5');
  });

  readonly gauge = computed(() => {
    if (this.kind() !== 'gauge') {
      return null;
    }
    const g = buildGaugeNeedle(this.layout(), this.gaugeValue());
    return { ...g, cx: this.layout().plotLeft + this.layout().plotWidth / 2, cy: this.layout().plotTop + this.layout().plotHeight - 8 };
  });

  readonly scatterPoints = computed((): BrightrailGraphPlotPoint[] => {
    if (this.kind() !== 'scatter') {
      return [];
    }
    const s = this.series()[0];
    if (!s) {
      return [];
    }
    const xs = numericXValues(s.points);
    const ys = s.points.map((p) => p.y ?? 0);
    return buildScatterPoints(
      this.layout(),
      s,
      domainMinMax(xs, 0),
      domainMinMax(ys),
      s.color ?? this.colors()[0],
    );
  });

  readonly bubblePoints = computed(() => {
    if (this.kind() !== 'bubble') {
      return [];
    }
    const s = this.series()[0];
    if (!s) {
      return [];
    }
    const xs = numericXValues(s.points);
    const ys = s.points.map((p) => p.y ?? 0);
    const zs = s.points.map((p) => p.z ?? 1);
    return buildBubblePoints(
      this.layout(),
      s,
      domainMinMax(xs, 0),
      domainMinMax(ys),
      domainMinMax(zs, 0),
      s.color ?? this.colors()[0],
    );
  });

  readonly candles = computed((): BrightrailGraphCandleView[] => {
    if (this.kind() !== 'candlestick') {
      return [];
    }
    const s = this.series()[0];
    if (!s) {
      return [];
    }
    return buildCandles(this.layout(), s, this.yDomain());
  });

  readonly heatRects = computed((): BrightrailGraphHeatRect[] => {
    if (this.kind() !== 'heatmap') {
      return [];
    }
    return buildHeatmap(this.layout(), this.heatmapCells(), this.colors());
  });

  readonly funnelStages = computed((): BrightrailGraphFunnelStage[] => {
    if (this.kind() !== 'funnel') {
      return [];
    }
    return buildFunnelStages(this.layout(), this.segments(), this.colors());
  });

  readonly legendItems = computed((): BrightrailGraphLegendItem[] => {
    if (!this.showLegend()) {
      return [];
    }
    const kind = this.kind();
    if (kind === 'donut' || kind === 'pie') {
      return this.arcSlices().map((s) => ({ color: s.color, label: s.label }));
    }
    if (kind === 'funnel') {
      return this.funnelStages().map((s) => ({ color: s.color, label: s.label }));
    }
    if (kind === 'mixed') {
      return this.series().map((s, i) => ({
        color: s.color ?? colorAt(i, this.colors()),
        label: s.label,
      }));
    }
    if (this.isLineFamily(kind)) {
      return this.lineLayers().map((l) => ({ color: l.color, label: l.label }));
    }
    if (kind.startsWith('bar')) {
      return this.series().map((s, i) => ({
        color: s.color ?? colorAt(i, this.colors()),
        label: s.label,
      }));
    }
    return [];
  });

  readonly gradientDefs = computed(() => {
    return this.lineLayers().map((layer, i) => ({
      id: `${this.svgDefId}-grad-${i}`,
      color: layer.color,
    }));
  });

  readonly yAxisLabelPos = computed(() => ({
    x: this.layout().yAxisLabelX,
    y: this.layout().plotTop + this.layout().plotHeight / 2,
  }));

  readonly xAxisLabelPos = computed(() => ({
    x: this.layout().plotLeft + this.layout().plotWidth / 2,
    y: this.layout().xAxisLabelY,
  }));

  formatTooltipValue(value: number): string {
    return `${this.tooltipValuePrefix()}${value}${this.tooltipValueSuffix()}`;
  }

  onPointEnter(point: BrightrailGraphPlotPoint, event: MouseEvent): void {
    if (!this.showTooltip()) {
      return;
    }
    const svg = (event.currentTarget as Element).closest('svg');
    const rect = svg?.getBoundingClientRect();
    const x = rect ? event.clientX - rect.left : point.x;
    const y = rect ? event.clientY - rect.top : point.y;
    this.activeTooltip.set({
      x,
      y,
      title: point.seriesLabel ? `${point.label} · ${point.seriesLabel}` : point.label,
      value: this.formatTooltipValue(point.value),
    });
  }

  onPointLeave(): void {
    this.activeTooltip.set(null);
  }

  onBarEnter(bar: BrightrailGraphBarRect, event: MouseEvent): void {
    if (!this.showTooltip()) {
      return;
    }
    const svg = (event.currentTarget as Element).closest('svg');
    const rect = svg?.getBoundingClientRect();
    this.activeTooltip.set({
      x: rect ? event.clientX - rect.left : bar.x,
      y: rect ? event.clientY - rect.top : bar.y,
      title: bar.label,
      value: this.formatTooltipValue(bar.value),
    });
  }

  private isLineFamily(kind: BrightrailGraphKind): boolean {
    return (
      kind === 'line' ||
      kind === 'line-smooth' ||
      kind === 'line-area' ||
      kind === 'line-multi' ||
      kind.startsWith('area')
    );
  }

  private isNonCartesian(): boolean {
    const k = this.kind();
    return (
      k === 'donut' ||
      k === 'pie' ||
      k === 'radial' ||
      k === 'gauge' ||
      k === 'funnel' ||
      k === 'heatmap'
    );
  }
}
