import type { BrightrailFuturisticAppearance } from 'brightrail';

export type DemoSiteTheme = 'light' | 'dark';

export interface DemoSiteConfig {
  id: string;
  name: string;
  tagline: string;
  domain: string;
  theme: DemoSiteTheme;
  fx: BrightrailFuturisticAppearance | null;
  accent: string;
  route: string;
  description: string;
}

export interface DemoBreadcrumbItem {
  label: string;
  href?: string;
}
