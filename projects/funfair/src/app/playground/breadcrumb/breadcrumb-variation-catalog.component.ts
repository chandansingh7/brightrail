import { ChangeDetectionStrategy, Component } from '@angular/core';
import { BrightrailBreadcrumbComponent } from 'brightrail';

import { CatalogVariationTileComponent } from '../shared/catalog-variation-tile.component';
import { BREADCRUMB_VARIATION_SNIPPETS } from './breadcrumb-variation-snippets';

@Component({
  selector: 'app-breadcrumb-variation-catalog',
  standalone: true,
  imports: [BrightrailBreadcrumbComponent, CatalogVariationTileComponent],
  templateUrl: './breadcrumb-variation-catalog.component.html',
  styleUrl: './breadcrumb-variation-catalog.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BreadcrumbVariationCatalogComponent {
  readonly s = BREADCRUMB_VARIATION_SNIPPETS;

  readonly coreAllLinks = [
    { label: 'Home', href: '/', icon: 'home' },
    { label: 'Products', href: '/products' },
    { label: 'Categories', href: '/categories' },
    { label: 'Laptops', href: '/laptops' },
  ];

  readonly coreWithCurrent = [
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

  readonly statesDisabled = [
    { label: 'Home', href: '/', disabled: true },
    { label: 'Products', href: '/products', disabled: true },
    { label: 'Categories', href: '/categories', disabled: true },
    { label: 'Laptops', current: true },
  ];

  readonly iconStart = [
    { label: 'Home', href: '/', icon: 'home' },
    { label: 'Products', href: '/products' },
    { label: 'Details', current: true },
  ];

  readonly iconBeforeItems = [
    { label: 'Home', href: '/', icon: 'home' },
    { label: 'Products', href: '/products', icon: '📦' },
    { label: 'Categories', href: '/categories', icon: '☰' },
    { label: 'Laptops', current: true, icon: '💻' },
  ];

  readonly mobileBreadcrumb = [
    { label: 'Back', href: '/' },
    { label: 'Settings', href: '/settings' },
    { label: 'Profile', current: true },
  ];

  readonly filePathBreadcrumb = [
    { label: 'Users', href: '/users', icon: '📁' },
    { label: 'brightrail', href: '/users/brightrail' },
    { label: 'Documents', href: '/docs' },
    { label: 'Designs', current: true },
  ];

  readonly multiLevelBreadcrumb = [
    { label: 'Organization', href: '/org', icon: '🏢' },
    { label: 'Projects', href: '/projects', icon: '📁' },
    { label: 'Website Redesign', href: '/website' },
    { label: 'Tasks', current: true },
  ];

  readonly futuristicItems = this.coreWithCurrent;
}
