import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./hub/hub.component').then((m) => m.HubComponent),
  },
  {
    path: 'saas',
    loadComponent: () => import('./sites/saas/saas-site.component').then((m) => m.SaasSiteComponent),
  },
  {
    path: 'commerce',
    loadComponent: () => import('./sites/commerce/commerce-site.component').then((m) => m.CommerceSiteComponent),
  },
  {
    path: 'fintech',
    loadComponent: () => import('./sites/fintech/fintech-site.component').then((m) => m.FintechSiteComponent),
  },
  {
    path: 'healthcare',
    loadComponent: () => import('./sites/healthcare/healthcare-site.component').then((m) => m.HealthcareSiteComponent),
  },
  {
    path: 'education',
    loadComponent: () => import('./sites/education/education-site.component').then((m) => m.EducationSiteComponent),
  },
  {
    path: 'cyber',
    loadComponent: () => import('./sites/cyber/cyber-site.component').then((m) => m.CyberSiteComponent),
  },
  { path: '**', redirectTo: '' },
];
