import type { BrightrailFuturisticAppearance } from '../futuristic/brightrail-futuristic-appearance.types';

export type BrightrailHolographicPanelAppearance = BrightrailFuturisticAppearance;

export type BrightrailHolographicMetricTrend = 'up' | 'down' | 'flat';

export interface BrightrailHolographicMetric {
  readonly label: string;
  readonly value: string;
  readonly unit?: string;
  readonly trend?: BrightrailHolographicMetricTrend;
}
