import { demoBreadcrumb, demoSiteNavLabel } from './demo-site.util';
import { DEMO_SITES } from './demo-sites.registry';

describe('demo-site.util', () => {
  const saas = DEMO_SITES.saas;

  it('builds breadcrumb trail with hub, site, and page', () => {
    expect(demoBreadcrumb(saas, 'Workspace')).toEqual([
      { label: 'Midway', href: '/' },
      { label: 'CloudForge', href: '/saas' },
      { label: 'Workspace' },
    ]);
  });

  it('formats nav label from site config', () => {
    expect(demoSiteNavLabel(saas)).toBe('CloudForge — SaaS');
  });
});
