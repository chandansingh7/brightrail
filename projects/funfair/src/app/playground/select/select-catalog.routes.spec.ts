import { SELECT_CATALOG_ROUTE } from './select-catalog.routes';

describe('select-catalog.routes', () => {
  it('defines the catalog child route', () => {
    expect(SELECT_CATALOG_ROUTE.path).toBe('catalog');
    expect(SELECT_CATALOG_ROUTE.loadComponent).toBeDefined();
  });
});
