/** Chart family from the Graph / Chart variation catalog. */
export type BrightrailGraphKind =
  | 'line'
  | 'line-smooth'
  | 'line-area'
  | 'line-multi'
  | 'bar-vertical'
  | 'bar-stacked'
  | 'bar-horizontal'
  | 'bar-grouped'
  | 'area'
  | 'area-gradient'
  | 'area-stacked'
  | 'area-step'
  | 'donut'
  | 'pie'
  | 'radial'
  | 'gauge'
  | 'scatter'
  | 'bubble'
  | 'mixed'
  | 'candlestick'
  | 'heatmap'
  | 'funnel';

export type BrightrailGraphLineStyle = 'default' | 'smooth' | 'step';

export type BrightrailGraphLegendPosition = 'bottom' | 'right';

export type BrightrailGraphSurface = 'light' | 'dark';

export interface BrightrailGraphPoint {
  readonly x: string | number;
  readonly y?: number;
  /** Bubble radius weight (bubble charts). */
  readonly z?: number;
  readonly open?: number;
  readonly high?: number;
  readonly low?: number;
  readonly close?: number;
}

export interface BrightrailGraphSeries {
  readonly id: string;
  readonly label: string;
  readonly color?: string;
  readonly points: readonly BrightrailGraphPoint[];
}

export interface BrightrailGraphSegment {
  readonly label: string;
  readonly value: number;
  readonly color?: string;
}

export interface BrightrailGraphHeatCell {
  readonly row: string;
  readonly col: string;
  readonly value: number;
}

export interface BrightrailGraphPlotPoint {
  readonly x: number;
  readonly y: number;
  readonly label: string;
  readonly value: number;
  readonly seriesId?: string;
  readonly seriesLabel?: string;
  readonly color?: string;
  readonly z?: number;
}

export interface BrightrailGraphGridLine {
  readonly x1: number;
  readonly y1: number;
  readonly x2: number;
  readonly y2: number;
}

export interface BrightrailGraphBarRect {
  readonly x: number;
  readonly y: number;
  readonly width: number;
  readonly height: number;
  readonly color: string;
  readonly label: string;
  readonly value: number;
  readonly seriesId?: string;
}

export interface BrightrailGraphArcSlice {
  readonly path: string;
  readonly color: string;
  readonly label: string;
  readonly value: number;
  readonly pct: number;
}

export interface BrightrailGraphCandle {
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

export interface BrightrailGraphHeatRect {
  readonly x: number;
  readonly y: number;
  readonly width: number;
  readonly height: number;
  readonly color: string;
  readonly row: string;
  readonly col: string;
  readonly value: number;
}

export interface BrightrailGraphFunnelStage {
  readonly path: string;
  readonly color: string;
  readonly label: string;
  readonly value: number;
  readonly pct: number;
}

export interface BrightrailGraphLegendItem {
  readonly color: string;
  readonly label: string;
}

export interface BrightrailGraphAxisTick {
  readonly x: number;
  readonly y: number;
  readonly label: string;
}

export interface BrightrailGraphLayoutOptions {
  readonly showYAxisLabel?: boolean;
  readonly showXAxisLabel?: boolean;
}

export interface BrightrailGraphLayout {
  readonly width: number;
  readonly height: number;
  readonly plotLeft: number;
  readonly plotTop: number;
  readonly plotWidth: number;
  readonly plotHeight: number;
  /** SVG x for the rotated Y-axis title (left of tick labels). */
  readonly yAxisLabelX: number;
  /** SVG y for the centered X-axis title. */
  readonly xAxisLabelY: number;
}

export const BRIGHTRAIL_GRAPH_DEFAULT_COLORS: readonly string[] = [
  '#4F46E5',
  '#06B6D4',
  '#10B981',
  '#F59E0B',
  '#EF4444',
  '#8B5CF6',
];
