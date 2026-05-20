import {
  BrightrailGraphHeatCell,
  BrightrailGraphSegment,
  BrightrailGraphSeries,
} from 'brightrail';

/** Funfair-only demo data for playground & variation catalog — not shipped in the library. */

export const GRAPH_DEMO_SALES_OVERVIEW: BrightrailGraphSeries[] = [
  {
    id: 'revenue',
    label: 'Revenue',
    points: [
      { x: 'Jan', y: 4200 },
      { x: 'Feb', y: 5100 },
      { x: 'Mar', y: 6240 },
      { x: 'Apr', y: 5800 },
      { x: 'May', y: 7100 },
      { x: 'Jun', y: 8200 },
    ],
  },
];

export const GRAPH_DEMO_SALES_MULTI: BrightrailGraphSeries[] = [
  {
    id: 'revenue',
    label: 'Revenue',
    color: '#4F46E5',
    points: [
      { x: 'Jan', y: 4200 },
      { x: 'Feb', y: 5100 },
      { x: 'Mar', y: 6240 },
      { x: 'Apr', y: 5800 },
      { x: 'May', y: 7100 },
      { x: 'Jun', y: 8200 },
    ],
  },
  {
    id: 'costs',
    label: 'Costs',
    color: '#06B6D4',
    points: [
      { x: 'Jan', y: 2800 },
      { x: 'Feb', y: 3100 },
      { x: 'Mar', y: 3400 },
      { x: 'Apr', y: 3200 },
      { x: 'May', y: 3600 },
      { x: 'Jun', y: 3900 },
    ],
  },
];

export const GRAPH_DEMO_CHANNEL_MIX: BrightrailGraphSeries[] = [
  {
    id: 'web',
    label: 'Web',
    points: [
      { x: 'Q1', y: 42 },
      { x: 'Q2', y: 48 },
      { x: 'Q3', y: 52 },
      { x: 'Q4', y: 58 },
    ],
  },
  {
    id: 'mobile',
    label: 'Mobile',
    points: [
      { x: 'Q1', y: 28 },
      { x: 'Q2', y: 32 },
      { x: 'Q3', y: 36 },
      { x: 'Q4', y: 40 },
    ],
  },
  {
    id: 'partner',
    label: 'Partner',
    points: [
      { x: 'Q1', y: 18 },
      { x: 'Q2', y: 20 },
      { x: 'Q3', y: 22 },
      { x: 'Q4', y: 24 },
    ],
  },
];

export const GRAPH_DEMO_DONUT_SEGMENTS: BrightrailGraphSegment[] = [
  { label: 'Direct', value: 38, color: '#4F46E5' },
  { label: 'Organic', value: 28, color: '#06B6D4' },
  { label: 'Paid', value: 22, color: '#10B981' },
  { label: 'Referral', value: 12, color: '#F59E0B' },
];

export const GRAPH_DEMO_SCATTER_SERIES: BrightrailGraphSeries[] = [
  {
    id: 'cluster-a',
    label: 'Cluster A',
    color: '#4F46E5',
    points: [
      { x: 12, y: 24 },
      { x: 18, y: 32 },
      { x: 22, y: 28 },
      { x: 28, y: 40 },
      { x: 34, y: 36 },
    ],
  },
];

export const GRAPH_DEMO_BUBBLE_SERIES: BrightrailGraphSeries[] = [
  {
    id: 'regions',
    label: 'Regions',
    color: '#4F46E5',
    points: [
      { x: 10, y: 20, z: 8 },
      { x: 22, y: 34, z: 14 },
      { x: 32, y: 28, z: 20 },
      { x: 44, y: 42, z: 12 },
      { x: 52, y: 36, z: 18 },
    ],
  },
];

export const GRAPH_DEMO_CANDLE_SERIES: BrightrailGraphSeries[] = [
  {
    id: 'ticker',
    label: 'BRAIL',
    points: [
      { x: 'Mon', open: 42, high: 48, low: 40, close: 46 },
      { x: 'Tue', open: 46, high: 50, low: 44, close: 45 },
      { x: 'Wed', open: 45, high: 47, low: 41, close: 42 },
      { x: 'Thu', open: 42, high: 49, low: 41, close: 48 },
      { x: 'Fri', open: 48, high: 52, low: 47, close: 51 },
    ],
  },
];

export const GRAPH_DEMO_HEATMAP_CELLS: BrightrailGraphHeatCell[] = [
  { row: 'Mon', col: 'AM', value: 12 },
  { row: 'Mon', col: 'PM', value: 28 },
  { row: 'Tue', col: 'AM', value: 18 },
  { row: 'Tue', col: 'PM', value: 34 },
  { row: 'Wed', col: 'AM', value: 22 },
  { row: 'Wed', col: 'PM', value: 40 },
  { row: 'Thu', col: 'AM', value: 16 },
  { row: 'Thu', col: 'PM', value: 30 },
  { row: 'Fri', col: 'AM', value: 24 },
  { row: 'Fri', col: 'PM', value: 36 },
];

export const GRAPH_DEMO_FUNNEL_SEGMENTS: BrightrailGraphSegment[] = [
  { label: 'Visitors', value: 10000 },
  { label: 'Sign-ups', value: 6200 },
  { label: 'Trials', value: 3400 },
  { label: 'Paid', value: 1800 },
  { label: 'Renewed', value: 920 },
];

export const GRAPH_DEMO_MIXED_SERIES: BrightrailGraphSeries[] = [
  {
    id: 'bars',
    label: 'Units sold',
    color: '#4F46E5',
    points: [
      { x: 'Jan', y: 120 },
      { x: 'Feb', y: 148 },
      { x: 'Mar', y: 132 },
      { x: 'Apr', y: 160 },
      { x: 'May', y: 175 },
      { x: 'Jun', y: 190 },
    ],
  },
  {
    id: 'line',
    label: 'Conversion %',
    color: '#06B6D4',
    points: [
      { x: 'Jan', y: 2.4 },
      { x: 'Feb', y: 2.8 },
      { x: 'Mar', y: 2.6 },
      { x: 'Apr', y: 3.1 },
      { x: 'May', y: 3.4 },
      { x: 'Jun', y: 3.8 },
    ],
  },
];

export type GraphDemoDatasetId =
  | 'sales-overview'
  | 'sales-multi'
  | 'channel-mix'
  | 'scatter'
  | 'bubble'
  | 'candlestick'
  | 'mixed';

export function graphDemoDataset(id: GraphDemoDatasetId): BrightrailGraphSeries[] {
  switch (id) {
    case 'sales-multi':
      return GRAPH_DEMO_SALES_MULTI;
    case 'channel-mix':
      return GRAPH_DEMO_CHANNEL_MIX;
    case 'scatter':
      return GRAPH_DEMO_SCATTER_SERIES;
    case 'bubble':
      return GRAPH_DEMO_BUBBLE_SERIES;
    case 'candlestick':
      return GRAPH_DEMO_CANDLE_SERIES;
    case 'mixed':
      return GRAPH_DEMO_MIXED_SERIES;
    case 'sales-overview':
    default:
      return GRAPH_DEMO_SALES_OVERVIEW;
  }
}

export function sliceGraphSeries(count: number, series: BrightrailGraphSeries[]): BrightrailGraphSeries[] {
  return series.map((s) => ({
    ...s,
    points: s.points.slice(0, count),
  }));
}
