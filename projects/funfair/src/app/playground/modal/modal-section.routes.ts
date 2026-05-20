import { Routes } from '@angular/router';

/** Child routes for {@link ModalSectionComponent} — merge under `path: 'modal'`. */
export const MODAL_SECTION_CHILD_ROUTES: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./modal-playground.component').then((m) => m.ModalPlaygroundComponent),
  },
  {
    path: 'catalog',
    loadComponent: () =>
      import('./modal-catalog-overview.component').then((m) => m.ModalCatalogOverviewComponent),
  },
];
