import { Route } from '@angular/router';

/** Catalog child route for {@link SelectSectionComponent} — merge into `select` children. */
export const SELECT_CATALOG_ROUTE: Route = {
  path: 'catalog',
  loadComponent: () =>
    import('./select-catalog-overview.component').then((m) => m.SelectCatalogOverviewComponent),
};
