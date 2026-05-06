import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./playground/playground-shell.component').then((m) => m.PlaygroundShellComponent),
    children: [
      { path: '', pathMatch: 'full', redirectTo: 'button' },
      {
        path: 'button',
        loadComponent: () =>
          import('./playground/button-playground.component').then((m) => m.ButtonPlaygroundComponent),
      },
      {
        path: 'text-field',
        loadComponent: () =>
          import('./playground/text-field-section.component').then((m) => m.TextFieldSectionComponent),
        children: [
          {
            path: '',
            loadComponent: () =>
              import('./playground/text-field-playground.component').then(
                (m) => m.TextFieldPlaygroundComponent,
              ),
          },
          {
            path: 'inset-label',
            loadComponent: () =>
              import('./playground/text-field-inset-label-guide.component').then(
                (m) => m.TextFieldInsetLabelGuideComponent,
              ),
          },
        ],
      },
      {
        path: 'tabs',
        loadComponent: () =>
          import('./playground/tabs-playground.component').then((m) => m.TabsPlaygroundComponent),
      },
      {
        path: 'alerts',
        loadComponent: () =>
          import('./playground/alert-section.component').then((m) => m.AlertSectionComponent),
        children: [
          {
            path: '',
            loadComponent: () =>
              import('./playground/alert-playground.component').then((m) => m.AlertPlaygroundComponent),
          },
          {
            path: 'catalog',
            loadComponent: () =>
              import('./playground/alert-catalog-overview.component').then(
                (m) => m.AlertCatalogOverviewComponent,
              ),
          },
        ],
      },
      {
        path: 'modal',
        loadComponent: () =>
          import('./playground/modal-playground.component').then((m) => m.ModalPlaygroundComponent),
      },
      {
        path: 'drawer',
        loadComponent: () =>
          import('./playground/drawer-section.component').then((m) => m.DrawerSectionComponent),
        children: [
          {
            path: '',
            loadComponent: () =>
              import('./playground/drawer-playground.component').then((m) => m.DrawerPlaygroundComponent),
          },
          {
            path: 'catalog',
            loadComponent: () =>
              import('./playground/drawer-catalog-overview.component').then(
                (m) => m.DrawerCatalogOverviewComponent,
              ),
          },
        ],
      },
      {
        path: 'card',
        loadComponent: () =>
          import('./playground/card-playground.component').then((m) => m.CardPlaygroundComponent),
      },
      {
        path: 'table',
        loadComponent: () =>
          import('./playground/table-section.component').then((m) => m.TableSectionComponent),
        children: [
          {
            path: '',
            loadComponent: () =>
              import('./playground/table-playground.component').then((m) => m.TablePlaygroundComponent),
          },
          {
            path: 'catalog',
            loadComponent: () =>
              import('./playground/table-catalog-overview.component').then(
                (m) => m.TableCatalogOverviewComponent,
              ),
          },
          {
            path: 'inline-edit',
            loadComponent: () =>
              import('./playground/table-inline-edit-catalog.component').then(
                (m) => m.TableInlineEditCatalogComponent,
              ),
          },
        ],
      },
      {
        path: 'badge',
        loadComponent: () =>
          import('./playground/badge-section.component').then((m) => m.BadgeSectionComponent),
        children: [
          {
            path: '',
            loadComponent: () =>
              import('./playground/badge-playground.component').then((m) => m.BadgePlaygroundComponent),
          },
          {
            path: 'catalog',
            loadComponent: () =>
              import('./playground/badge-catalog-overview.component').then(
                (m) => m.BadgeCatalogOverviewComponent,
              ),
          },
        ],
      },
      {
        path: 'chip',
        loadComponent: () =>
          import('./playground/chip-section.component').then((m) => m.ChipSectionComponent),
        children: [
          {
            path: '',
            loadComponent: () =>
              import('./playground/chip-playground.component').then((m) => m.ChipPlaygroundComponent),
          },
          {
            path: 'catalog',
            loadComponent: () =>
              import('./playground/chip-catalog-overview.component').then(
                (m) => m.ChipCatalogOverviewComponent,
              ),
          },
        ],
      },
      {
        path: 'avatar',
        loadComponent: () =>
          import('./playground/avatar-section.component').then((m) => m.AvatarSectionComponent),
        children: [
          {
            path: '',
            loadComponent: () =>
              import('./playground/avatar-playground.component').then((m) => m.AvatarPlaygroundComponent),
          },
          {
            path: 'catalog',
            loadComponent: () =>
              import('./playground/avatar-catalog-overview.component').then(
                (m) => m.AvatarCatalogOverviewComponent,
              ),
          },
        ],
      },
      {
        path: 'tooltip',
        loadComponent: () =>
          import('./playground/tooltip-section.component').then((m) => m.TooltipSectionComponent),
        children: [
          {
            path: '',
            loadComponent: () =>
              import('./playground/tooltip-playground.component').then((m) => m.TooltipPlaygroundComponent),
          },
          {
            path: 'catalog',
            loadComponent: () =>
              import('./playground/tooltip-catalog-overview.component').then(
                (m) => m.TooltipCatalogOverviewComponent,
              ),
          },
        ],
      },
      {
        path: 'select',
        loadComponent: () =>
          import('./playground/select-section.component').then((m) => m.SelectSectionComponent),
        children: [
          {
            path: '',
            loadComponent: () =>
              import('./playground/select-playground.component').then((m) => m.SelectPlaygroundComponent),
          },
          {
            path: 'resources',
            loadComponent: () =>
              import('./playground/select-resources-guide.component').then(
                (m) => m.SelectResourcesGuideComponent,
              ),
          },
        ],
      },
      {
        path: 'checkbox',
        loadComponent: () =>
          import('./playground/checkbox-playground.component').then(
            (m) => m.CheckboxPlaygroundComponent,
          ),
      },
      {
        path: 'radio',
        loadComponent: () =>
          import('./playground/radio-playground.component').then((m) => m.RadioPlaygroundComponent),
      },
      {
        path: 'accordion',
        loadComponent: () =>
          import('./playground/accordion-section.component').then((m) => m.AccordionSectionComponent),
        children: [
          {
            path: '',
            loadComponent: () =>
              import('./playground/accordion-playground.component').then(
                (m) => m.AccordionPlaygroundComponent,
              ),
          },
          {
            path: 'catalog',
            loadComponent: () =>
              import('./playground/accordion-catalog-overview.component').then(
                (m) => m.AccordionCatalogOverviewComponent,
              ),
          },
        ],
      },
      {
        path: 'pagination',
        loadComponent: () =>
          import('./playground/pagination-section.component').then((m) => m.PaginationSectionComponent),
        children: [
          {
            path: '',
            loadComponent: () =>
              import('./playground/pagination-playground.component').then(
                (m) => m.PaginationPlaygroundComponent,
              ),
          },
          {
            path: 'catalog',
            loadComponent: () =>
              import('./playground/pagination-catalog-overview.component').then(
                (m) => m.PaginationCatalogOverviewComponent,
              ),
          },
        ],
      },
      {
        path: 'progress',
        loadComponent: () =>
          import('./playground/progress-section.component').then((m) => m.ProgressSectionComponent),
        children: [
          {
            path: '',
            loadComponent: () =>
              import('./playground/progress-playground.component').then((m) => m.ProgressPlaygroundComponent),
          },
          {
            path: 'catalog',
            loadComponent: () =>
              import('./playground/progress-catalog-overview.component').then(
                (m) => m.ProgressCatalogOverviewComponent,
              ),
          },
        ],
      },
    ],
  },
];
