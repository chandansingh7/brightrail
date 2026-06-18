import { ChangeDetectionStrategy, Component, inject, OnInit, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {
  BrightrailBadgeComponent,
  BrightrailButtonComponent,
  BrightrailButtonGroupComponent,
  BrightrailChipComponent,
  BrightrailComboboxComponent,
  BrightrailEmptyStateComponent,
  BrightrailIconComponent,
  BrightrailPaginationComponent,
  BrightrailProgressFileRowComponent,
  BrightrailRatingComponent,
  BrightrailSelectComponent,
  BrightrailSkeletonComponent,
  BrightrailTabComponent,
  BrightrailTabContentDirective,
  BrightrailTabsComponent,
} from 'brightrail';

import {
  COMMERCE_CATEGORY_OPTIONS,
  COMMERCE_PRODUCT_COLUMNS,
  COMMERCE_PRODUCT_ROWS,
  type CommerceProductRow,
} from '../../shared/demo-data';
import { DemoShellComponent } from '../../shared/demo-shell.component';
import { DEMO_SITES } from '../../shared/demo-sites.registry';
import { demoBreadcrumb } from '../../shared/demo-site.util';
import { DemoThemeService } from '../../shared/demo-theme.service';
import { LibraryCoverageHostComponent } from '../../shared/library-coverage-host.component';

@Component({
  selector: 'app-commerce-site',
  standalone: true,
  imports: [
    FormsModule,
    DemoShellComponent,
    BrightrailTabsComponent,
    BrightrailTabComponent,
    BrightrailTabContentDirective,
    BrightrailRatingComponent,
    BrightrailChipComponent,
    BrightrailBadgeComponent,
    BrightrailPaginationComponent,
    BrightrailEmptyStateComponent,
    BrightrailSkeletonComponent,
    BrightrailSelectComponent,
    BrightrailComboboxComponent,
    BrightrailButtonComponent,
    BrightrailButtonGroupComponent,
    BrightrailIconComponent,
    BrightrailProgressFileRowComponent,
    LibraryCoverageHostComponent,
  ],
  templateUrl: './commerce-site.component.html',
  styleUrl: './commerce-site.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CommerceSiteComponent implements OnInit {
  private readonly theme = inject(DemoThemeService);

  readonly site = DEMO_SITES.commerce;
  readonly breadcrumbs = demoBreadcrumb(this.site, 'Catalog');
  readonly products: readonly CommerceProductRow[] = COMMERCE_PRODUCT_ROWS;
  readonly columns = COMMERCE_PRODUCT_COLUMNS;
  readonly categories = COMMERCE_CATEGORY_OPTIONS;
  readonly activeTabIndex = signal(0);
  category = 'apparel';
  statusFilter = 'all';
  readonly pageIndex = signal(0);
  readonly loading = signal(false);
  rating = 4;

  ngOnInit(): void {
    this.theme.applySite(this.site);
  }
}
