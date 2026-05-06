import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { BrightrailBreadcrumbComponent } from 'brightrail';

@Component({
  selector: 'app-breadcrumb-catalog-overview',
  standalone: true,
  imports: [RouterLink, BrightrailBreadcrumbComponent],
  templateUrl: './breadcrumb-catalog-overview.component.html',
  styleUrl: './breadcrumb-catalog-overview.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BreadcrumbCatalogOverviewComponent {
  readonly items = [
    { label: 'Home', href: '/', icon: 'home' },
    { label: 'Products', href: '/products' },
    { label: 'Categories', href: '/categories' },
    { label: 'Laptops', current: true },
  ];

  readonly short = [
    { label: 'Home', href: '/', icon: 'home' },
    { label: 'Products', href: '/products' },
    { label: 'Details', current: true },
  ];

  readonly longPath = [
    { label: 'Home', href: '/', icon: 'home' },
    { label: 'Catalog', href: '/catalog' },
    { label: 'Categories', href: '/categories' },
    { label: 'Subcategories', href: '/sub' },
    { label: 'Laptops', current: true },
  ];

  readonly enterprise = [
    { label: 'Organization', href: '/org' },
    { label: 'Projects', href: '/projects' },
    { label: 'Website Redesign', href: '/website' },
    { label: 'Tasks', current: true },
  ];
}
