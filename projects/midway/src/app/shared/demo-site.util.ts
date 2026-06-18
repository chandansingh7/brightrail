import type { DemoBreadcrumbItem, DemoSiteConfig } from './demo-site.types';

export function demoBreadcrumb(site: DemoSiteConfig, page: string): DemoBreadcrumbItem[] {
  return [
    { label: 'Midway', href: '/' },
    { label: site.name, href: site.route },
    { label: page },
  ];
}

export function demoSiteNavLabel(site: DemoSiteConfig): string {
  return `${site.name} — ${site.domain}`;
}
