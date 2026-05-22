export type BrightrailHolographicPanelAppearance = 'glass' | 'neon' | 'holo' | 'cyber';

export type BrightrailHolographicMetricTrend = 'up' | 'down' | 'flat';

export interface BrightrailHolographicMetric {
  readonly label: string;
  readonly value: string;
  readonly unit?: string;
  readonly trend?: BrightrailHolographicMetricTrend;
}
