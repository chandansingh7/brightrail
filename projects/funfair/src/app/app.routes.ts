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
    ],
  },
];
