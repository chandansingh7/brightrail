import {
  VARIATION_CATALOG_ENTRIES,
  catalogRouteSegments,
  variationCatalogCoveragePercent,
} from './variation-catalog-registry';

describe('variation-catalog-registry', () => {
  it('lists every playground component', () => {
    expect(VARIATION_CATALOG_ENTRIES.length).toBeGreaterThanOrEqual(20);
  });

  it('computes catalog route coverage', () => {
    const pct = variationCatalogCoveragePercent();
    expect(pct).toBeGreaterThan(50);
    expect(pct).toBeLessThanOrEqual(100);
  });

  it('splits catalog routes into router segments', () => {
    expect(catalogRouteSegments('button/catalog')).toEqual(['/', 'button', 'catalog']);
    expect(catalogRouteSegments('text-field/catalog')).toEqual(['/', 'text-field', 'catalog']);
  });
});
