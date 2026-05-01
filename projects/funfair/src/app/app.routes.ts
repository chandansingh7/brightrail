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
    ],
  },
];
