import {
  BRIGHTRAIL_GRAPH_DEFAULT_COLORS,
  BrightrailGraphArcSlice,
  BrightrailGraphAxisTick,
  BrightrailGraphBarRect,
  BrightrailGraphCandle,
  BrightrailGraphFunnelStage,
  BrightrailGraphGridLine,
  BrightrailGraphHeatRect,
  BrightrailGraphHeatCell,
  BrightrailGraphKind,
  BrightrailGraphLayout,
  BrightrailGraphLayoutOptions,
  BrightrailGraphLineStyle,
  BrightrailGraphPlotPoint,
  BrightrailGraphPoint,
  BrightrailGraphSegment,
  BrightrailGraphSeries,
} from './brightrail-graph.types';

export function clamp(n: number, min: number, max: number): number {
  return Math.min(max, Math.max(min, n));
}

export function scaleLinear(domainMin: number, domainMax: number, rangeMin: number, rangeMax: number) {
  const span = domainMax - domainMin || 1;
  const rangeSpan = rangeMax - rangeMin;
  return (value: number): number => rangeMin + ((value - domainMin) / span) * rangeSpan;
}

export function resolveGraphLayout(
  width: number,
  height: number,
  kind: BrightrailGraphKind,
  options: BrightrailGraphLayoutOptions = {},
): BrightrailGraphLayout {
  const isCircular = kind === 'donut' || kind === 'pie' || kind === 'radial' || kind === 'gauge';
  const isFunnel = kind === 'funnel';
  const isCartesian = !isCircular && !isFunnel && kind !== 'heatmap';

  let left = isCircular ? 24 : isFunnel ? 56 : 44;
  if (isCartesian && options.showYAxisLabel) {
    left = 58;
  }

  const right = isCircular ? 24 : 16;
  const top = 16;

  let bottom = isCircular ? 16 : isFunnel ? 20 : 32;
  if (isCartesian && options.showXAxisLabel) {
    bottom = 42;
  }

  const plotTop = top;
  const plotLeft = left;
  const plotWidth = Math.max(1, width - left - right);
  const plotHeight = Math.max(1, height - top - bottom);

  return {
    width,
    height,
    plotLeft,
    plotTop,
    plotWidth,
    plotHeight,
    yAxisLabelX: isCartesian && options.showYAxisLabel ? 14 : 12,
    xAxisLabelY: plotTop + plotHeight + (options.showXAxisLabel ? 34 : 30),
  };
}

export function colorAt(index: number, colors: readonly string[]): string {
  return colors[index % colors.length] ?? BRIGHTRAIL_GRAPH_DEFAULT_COLORS[0];
}

export function collectNumericValues(series: readonly BrightrailGraphSeries[]): number[] {
  const values: number[] = [];
  for (const s of series) {
    for (const p of s.points) {
      if (p.y != null) values.push(p.y);
      if (p.open != null) values.push(p.open);
      if (p.high != null) values.push(p.high);
      if (p.low != null) values.push(p.low);
      if (p.close != null) values.push(p.close);
      if (p.z != null) values.push(p.z);
    }
  }
  return values.length ? values : [0, 1];
}

export function domainMinMax(values: readonly number[], padRatio = 0.08): { min: number; max: number } {
  const min = Math.min(...values);
  const max = Math.max(...values);
  if (min === max) {
    return { min: min - 1, max: max + 1 };
  }
  const pad = (max - min) * padRatio;
  return { min: min - pad, max: max + pad };
}

export function categoryLabels(series: readonly BrightrailGraphSeries[]): string[] {
  const first = series[0]?.points ?? [];
  return first.map((p) => String(p.x));
}

export function buildGridLines(
  layout: BrightrailGraphLayout,
  yTicks: number,
  domain: { min: number; max: number },
): BrightrailGraphGridLine[] {
  const lines: BrightrailGraphGridLine[] = [];
  const yScale = scaleLinear(domain.min, domain.max, layout.plotTop + layout.plotHeight, layout.plotTop);
  for (let i = 0; i <= yTicks; i++) {
    const t = i / yTicks;
    const value = domain.min + (domain.max - domain.min) * t;
    const y = yScale(value);
    lines.push({
      x1: layout.plotLeft,
      y1: y,
      x2: layout.plotLeft + layout.plotWidth,
      y2: y,
    });
  }
  return lines;
}

export function buildYAxisTicks(
  layout: BrightrailGraphLayout,
  yTicks: number,
  domain: { min: number; max: number },
  formatter: (n: number) => string = (n) => String(Math.round(n)),
): BrightrailGraphAxisTick[] {
  const ticks: BrightrailGraphAxisTick[] = [];
  const yScale = scaleLinear(domain.min, domain.max, layout.plotTop + layout.plotHeight, layout.plotTop);
  for (let i = 0; i <= yTicks; i++) {
    const t = i / yTicks;
    const value = domain.min + (domain.max - domain.min) * t;
    ticks.push({
      x: layout.plotLeft - 8,
      y: yScale(value) + 4,
      label: formatter(value),
    });
  }
  return ticks;
}

export function buildXAxisTicks(
  layout: BrightrailGraphLayout,
  labels: readonly string[],
): BrightrailGraphAxisTick[] {
  if (!labels.length) {
    return [];
  }
  const xScale = scaleLinear(0, Math.max(labels.length - 1, 1), layout.plotLeft, layout.plotLeft + layout.plotWidth);
  return labels.map((label, i) => ({
    x: xScale(i),
    y: layout.plotTop + layout.plotHeight + 18,
    label,
  }));
}

function pointCoords(
  layout: BrightrailGraphLayout,
  index: number,
  count: number,
  value: number,
  domain: { min: number; max: number },
): { x: number; y: number } {
  const xScale = scaleLinear(0, Math.max(count - 1, 1), layout.plotLeft, layout.plotLeft + layout.plotWidth);
  const yScale = scaleLinear(domain.min, domain.max, layout.plotTop + layout.plotHeight, layout.plotTop);
  return { x: xScale(index), y: yScale(value) };
}

export function buildLinePath(
  points: readonly BrightrailGraphPlotPoint[],
  style: BrightrailGraphLineStyle,
): string {
  if (!points.length) {
    return '';
  }
  if (style === 'step') {
    let d = `M ${points[0].x} ${points[0].y}`;
    for (let i = 1; i < points.length; i++) {
      d += ` H ${points[i].x} V ${points[i].y}`;
    }
    return d;
  }
  if (style === 'smooth' && points.length > 2) {
    let d = `M ${points[0].x} ${points[0].y}`;
    for (let i = 0; i < points.length - 1; i++) {
      const p0 = points[i - 1] ?? points[i];
      const p1 = points[i];
      const p2 = points[i + 1];
      const p3 = points[i + 2] ?? p2;
      const cp1x = p1.x + (p2.x - p0.x) / 6;
      const cp1y = p1.y + (p2.y - p0.y) / 6;
      const cp2x = p2.x - (p3.x - p1.x) / 6;
      const cp2y = p2.y - (p3.y - p1.y) / 6;
      d += ` C ${cp1x} ${cp1y}, ${cp2x} ${cp2y}, ${p2.x} ${p2.y}`;
    }
    return d;
  }
  return points.map((p, i) => `${i === 0 ? 'M' : 'L'} ${p.x} ${p.y}`).join(' ');
}

export function buildAreaPath(linePath: string, baselineY: number, firstX: number, lastX: number): string {
  if (!linePath) {
    return '';
  }
  return `${linePath} L ${lastX} ${baselineY} L ${firstX} ${baselineY} Z`;
}

export function seriesPlotPoints(
  layout: BrightrailGraphLayout,
  series: BrightrailGraphSeries,
  domain: { min: number; max: number },
  color: string,
): BrightrailGraphPlotPoint[] {
  const count = series.points.length;
  return series.points.map((p, i) => {
    const { x, y } = pointCoords(layout, i, count, p.y ?? 0, domain);
    return {
      x,
      y,
      label: String(p.x),
      value: p.y ?? 0,
      seriesId: series.id,
      seriesLabel: series.label,
      color,
      z: p.z,
    };
  });
}

export function buildVerticalBars(
  layout: BrightrailGraphLayout,
  series: readonly BrightrailGraphSeries[],
  domain: { min: number; max: number },
  colors: readonly string[],
  mode: 'single' | 'stacked' | 'grouped',
): BrightrailGraphBarRect[] {
  const labels = categoryLabels(series);
  const count = labels.length;
  const groupWidth = layout.plotWidth / Math.max(count, 1);
  const yScale = scaleLinear(domain.min, domain.max, layout.plotTop + layout.plotHeight, layout.plotTop);
  const baseline = layout.plotTop + layout.plotHeight;
  const rects: BrightrailGraphBarRect[] = [];

  if (mode === 'stacked') {
    for (let i = 0; i < count; i++) {
      let stackBase = baseline;
      series.forEach((s, si) => {
        const value = s.points[i]?.y ?? 0;
        const y = yScale(value);
        const height = stackBase - y;
        rects.push({
          x: layout.plotLeft + i * groupWidth + groupWidth * 0.15,
          y,
          width: groupWidth * 0.7,
          height,
          color: s.color ?? colorAt(si, colors),
          label: String(labels[i]),
          value,
          seriesId: s.id,
        });
        stackBase = y;
      });
    }
    return rects;
  }

  const barCount = mode === 'grouped' ? series.length : 1;
  const barWidth = (groupWidth * 0.7) / barCount;

  for (let i = 0; i < count; i++) {
    series.forEach((s, si) => {
      const value = s.points[i]?.y ?? 0;
      const y = yScale(value);
      const offset = mode === 'grouped' ? si * barWidth : 0;
      rects.push({
        x: layout.plotLeft + i * groupWidth + groupWidth * 0.15 + offset,
        y,
        width: barWidth,
        height: baseline - y,
        color: s.color ?? colorAt(si, colors),
        label: String(labels[i]),
        value,
        seriesId: s.id,
      });
    });
  }
  return rects;
}

export function buildHorizontalBars(
  layout: BrightrailGraphLayout,
  series: BrightrailGraphSeries,
  domain: { min: number; max: number },
  color: string,
): BrightrailGraphBarRect[] {
  const labels = series.points.map((p) => String(p.x));
  const count = labels.length;
  const rowHeight = layout.plotHeight / Math.max(count, 1);
  const xScale = scaleLinear(domain.min, domain.max, layout.plotLeft, layout.plotLeft + layout.plotWidth);
  return series.points.map((p, i) => {
    const xEnd = xScale(p.y ?? 0);
    return {
      x: layout.plotLeft,
      y: layout.plotTop + i * rowHeight + rowHeight * 0.2,
      width: xEnd - layout.plotLeft,
      height: rowHeight * 0.6,
      color,
      label: String(p.x),
      value: p.y ?? 0,
      seriesId: series.id,
    };
  });
}

export function buildArcSlices(
  layout: BrightrailGraphLayout,
  segments: readonly BrightrailGraphSegment[],
  colors: readonly string[],
  innerRadiusRatio: number,
): BrightrailGraphArcSlice[] {
  const total = segments.reduce((sum, s) => sum + s.value, 0) || 1;
  const cx = layout.plotLeft + layout.plotWidth / 2;
  const cy = layout.plotTop + layout.plotHeight / 2;
  const outerR = Math.min(layout.plotWidth, layout.plotHeight) / 2 - 8;
  const innerR = outerR * innerRadiusRatio;
  let angle = -Math.PI / 2;

  return segments.map((seg, i) => {
    const slice = (seg.value / total) * Math.PI * 2;
    const start = angle;
    const end = angle + slice;
    angle = end;
    const path = describeArc(cx, cy, innerR, outerR, start, end);
    return {
      path,
      color: seg.color ?? colorAt(i, colors),
      label: seg.label,
      value: seg.value,
      pct: Math.round((seg.value / total) * 100),
    };
  });
}

function polar(cx: number, cy: number, r: number, angle: number): { x: number; y: number } {
  return { x: cx + Math.cos(angle) * r, y: cy + Math.sin(angle) * r };
}

function describeArc(
  cx: number,
  cy: number,
  innerR: number,
  outerR: number,
  start: number,
  end: number,
): string {
  const large = end - start > Math.PI ? 1 : 0;
  const o0 = polar(cx, cy, outerR, start);
  const o1 = polar(cx, cy, outerR, end);
  if (innerR <= 0) {
    return `M ${cx} ${cy} L ${o0.x} ${o0.y} A ${outerR} ${outerR} 0 ${large} 1 ${o1.x} ${o1.y} Z`;
  }
  const i1 = polar(cx, cy, innerR, end);
  const i0 = polar(cx, cy, innerR, start);
  return [
    `M ${o0.x} ${o0.y}`,
    `A ${outerR} ${outerR} 0 ${large} 1 ${o1.x} ${o1.y}`,
    `L ${i1.x} ${i1.y}`,
    `A ${innerR} ${innerR} 0 ${large} 0 ${i0.x} ${i0.y}`,
    'Z',
  ].join(' ');
}

export function buildRadialProgress(
  layout: BrightrailGraphLayout,
  value: number,
  color: string,
): { track: string; fill: string; pct: number } {
  const pct = clamp(value, 0, 100);
  const cx = layout.plotLeft + layout.plotWidth / 2;
  const cy = layout.plotTop + layout.plotHeight / 2 + 8;
  const r = Math.min(layout.plotWidth, layout.plotHeight) / 2 - 10;
  const start = -Math.PI * 0.75;
  const end = Math.PI * 0.75;
  const sweep = start + ((end - start) * pct) / 100;
  const track = describeOpenArc(cx, cy, r, start, end);
  const fill = describeOpenArc(cx, cy, r, start, sweep);
  return { track, fill, pct };
}

function describeOpenArc(cx: number, cy: number, r: number, start: number, end: number): string {
  const p0 = polar(cx, cy, r, start);
  const p1 = polar(cx, cy, r, end);
  const large = end - start > Math.PI ? 1 : 0;
  return `M ${p0.x} ${p0.y} A ${r} ${r} 0 ${large} 1 ${p1.x} ${p1.y}`;
}

export function buildGaugeNeedle(
  layout: BrightrailGraphLayout,
  value: number,
): { arcTrack: string; arcFill: string; needleX: number; needleY: number; pct: number } {
  const pct = clamp(value, 0, 100);
  const cx = layout.plotLeft + layout.plotWidth / 2;
  const cy = layout.plotTop + layout.plotHeight - 8;
  const r = Math.min(layout.plotWidth, layout.plotHeight) - 16;
  const start = Math.PI;
  const end = 0;
  const angle = start + ((end - start) * pct) / 100;
  const tip = polar(cx, cy, r * 0.85, angle);
  const midSweep = start + ((end - start) * pct) / 100;
  return {
    arcTrack: describeOpenArc(cx, cy, r, start, end),
    arcFill: describeOpenArc(cx, cy, r, start, midSweep),
    needleX: tip.x,
    needleY: tip.y,
    pct,
  };
}

export function buildScatterPoints(
  layout: BrightrailGraphLayout,
  series: BrightrailGraphSeries,
  domainX: { min: number; max: number },
  domainY: { min: number; max: number },
  color: string,
): BrightrailGraphPlotPoint[] {
  const xScale = scaleLinear(domainX.min, domainX.max, layout.plotLeft, layout.plotLeft + layout.plotWidth);
  const yScale = scaleLinear(domainY.min, domainY.max, layout.plotTop + layout.plotHeight, layout.plotTop);
  return series.points.map((p, idx) => {
    const xv = typeof p.x === 'number' ? p.x : idx;
    return {
      x: xScale(xv),
      y: yScale(p.y ?? 0),
      label: String(p.x),
      value: p.y ?? 0,
      color,
      z: p.z,
    };
  });
}

export function buildBubblePoints(
  layout: BrightrailGraphLayout,
  series: BrightrailGraphSeries,
  domainX: { min: number; max: number },
  domainY: { min: number; max: number },
  domainZ: { min: number; max: number },
  color: string,
): (BrightrailGraphPlotPoint & { r: number })[] {
  const xScale = scaleLinear(domainX.min, domainX.max, layout.plotLeft, layout.plotLeft + layout.plotWidth);
  const yScale = scaleLinear(domainY.min, domainY.max, layout.plotTop + layout.plotHeight, layout.plotTop);
  const rScale = scaleLinear(domainZ.min, domainZ.max, 4, 16);
  return series.points.map((p, idx) => {
    const xv = typeof p.x === 'number' ? p.x : idx;
    const z = p.z ?? 1;
    return {
      x: xScale(xv),
      y: yScale(p.y ?? 0),
      label: String(p.x),
      value: p.y ?? 0,
      color,
      z,
      r: rScale(z),
    };
  });
}

export function buildCandles(
  layout: BrightrailGraphLayout,
  series: BrightrailGraphSeries,
  domain: { min: number; max: number },
): BrightrailGraphCandle[] {
  const count = series.points.length;
  const groupWidth = layout.plotWidth / Math.max(count, 1);
  const yScale = scaleLinear(domain.min, domain.max, layout.plotTop + layout.plotHeight, layout.plotTop);
  return series.points.map((p, i) => {
    const open = p.open ?? p.y ?? 0;
    const close = p.close ?? p.y ?? 0;
    const high = p.high ?? Math.max(open, close);
    const low = p.low ?? Math.min(open, close);
    const bullish = close >= open;
    const color = bullish ? '#10B981' : '#EF4444';
    const cx = layout.plotLeft + i * groupWidth + groupWidth / 2;
    const bodyTop = yScale(Math.max(open, close));
    const bodyBottom = yScale(Math.min(open, close));
    return {
      x: cx,
      openY: yScale(open),
      closeY: yScale(close),
      highY: yScale(high),
      lowY: yScale(low),
      bodyTop,
      bodyBottom,
      bodyHeight: Math.max(2, bodyBottom - bodyTop),
      bodyWidth: groupWidth * 0.45,
      color,
      label: String(p.x),
    };
  });
}

export function buildHeatmap(
  layout: BrightrailGraphLayout,
  cells: readonly BrightrailGraphHeatCell[],
  colors: readonly string[],
): BrightrailGraphHeatRect[] {
  const rows = [...new Set(cells.map((c) => c.row))];
  const cols = [...new Set(cells.map((c) => c.col))];
  const values = cells.map((c) => c.value);
  const domain = domainMinMax(values, 0);
  const cellW = layout.plotWidth / Math.max(cols.length, 1);
  const cellH = layout.plotHeight / Math.max(rows.length, 1);

  return cells.map((cell) => {
    const colIndex = cols.indexOf(cell.col);
    const rowIndex = rows.indexOf(cell.row);
    const t = (cell.value - domain.min) / (domain.max - domain.min || 1);
    return {
      x: layout.plotLeft + colIndex * cellW,
      y: layout.plotTop + rowIndex * cellH,
      width: cellW - 2,
      height: cellH - 2,
      color: interpolateHeatColor(t, colors[0] ?? '#4F46E5'),
      row: cell.row,
      col: cell.col,
      value: cell.value,
    };
  });
}

function interpolateHeatColor(t: number, base: string): string {
  const clamped = clamp(t, 0, 1);
  const alpha = 0.15 + clamped * 0.85;
  return `color-mix(in srgb, ${base} ${Math.round(alpha * 100)}%, white)`;
}

export function buildFunnelStages(
  layout: BrightrailGraphLayout,
  segments: readonly BrightrailGraphSegment[],
  colors: readonly string[],
): BrightrailGraphFunnelStage[] {
  const max = segments[0]?.value ?? 1;
  const total = segments.reduce((s, seg) => s + seg.value, 0) || 1;
  const stageHeight = layout.plotHeight / Math.max(segments.length, 1);
  let y = layout.plotTop;

  return segments.map((seg, i) => {
    const widthRatio = seg.value / max;
    const nextRatio = segments[i + 1] ? segments[i + 1].value / max : widthRatio * 0.85;
    const topWidth = layout.plotWidth * widthRatio;
    const bottomWidth = layout.plotWidth * nextRatio;
    const cx = layout.plotLeft + layout.plotWidth / 2;
    const x0 = cx - topWidth / 2;
    const x1 = cx + topWidth / 2;
    const x2 = cx + bottomWidth / 2;
    const x3 = cx - bottomWidth / 2;
    const y0 = y;
    const y1 = y + stageHeight - 2;
    y = y1;
    const path = `M ${x0} ${y0} L ${x1} ${y0} L ${x2} ${y1} L ${x3} ${y1} Z`;
    return {
      path,
      color: seg.color ?? colorAt(i, colors),
      label: seg.label,
      value: seg.value,
      pct: Math.round((seg.value / total) * 100),
    };
  });
}

export function resolveLineStyle(kind: BrightrailGraphKind): BrightrailGraphLineStyle {
  if (kind === 'line-smooth' || kind === 'area-gradient') {
    return 'smooth';
  }
  if (kind === 'area-step') {
    return 'step';
  }
  return 'default';
}

export function numericXValues(points: readonly BrightrailGraphPoint[]): number[] {
  return points.map((p, i) => (typeof p.x === 'number' ? p.x : i));
}
