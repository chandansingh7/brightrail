import { ChangeDetectionStrategy, Component, computed, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';

import type { BrightrailTableDensity, BrightrailTableVariant } from 'brightrail';

import { TableVariationCatalogComponent } from './table-variation-catalog.component';

@Component({
  selector: 'app-table-catalog-overview',
  standalone: true,
  imports: [FormsModule, RouterLink, TableVariationCatalogComponent],
  templateUrl: './table-catalog-overview.component.html',
  styleUrl: './alert-catalog-overview.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TableCatalogOverviewComponent {
  readonly canonicalSnippet = `<brightrail-table
  [data]="users"
  [columns]="columns"
  [variant]="'basic'"
  density="comfortable"
  [sorting]="true"
  [pagination]="{ pageSize: 5, pageSizeOptions: [5, 10, 25] }"
  [rowSelection]="'multiple'"
  [expandable]="true"
  [stickyHeader]="false"
  ariaLabel="Users data table"
  (sortChange)="onSortChange($event)"
  (pageChange)="onPageChange($event)"
  (selectionChange)="onSelectionChange($event)"
>
  <brightrail-table-toolbar><!-- optional actions --></brightrail-table-toolbar>
</brightrail-table>`;

  readonly mirrorVariant = signal<BrightrailTableVariant>('basic');
  readonly mirrorDensity = signal<BrightrailTableDensity>('medium');
  readonly mirrorSorting = signal(true);

  readonly catalogFocusSection = signal(1);
  readonly catalogShowAllSections = signal(false);

  readonly catalogEffectiveFocus = computed(() =>
    this.catalogShowAllSections() ? 0 : this.catalogFocusSection(),
  );

  private readonly catalogSectionTitles = [
    '',
    'Core types',
    'States',
    'Density',
    'Interactions',
    'Popular app tables',
    'Enterprise patterns',
    'Advanced patterns',
    'Usage tips',
  ] as const;

  readonly catalogSectionTitle = computed(
    () => this.catalogSectionTitles[this.catalogFocusSection()] ?? '',
  );

  readonly variantOptions: BrightrailTableVariant[] = ['basic', 'bordered', 'striped'];

  readonly densityOptions: { value: BrightrailTableDensity; label: string }[] = [
    { value: 'compact', label: 'Compact' },
    { value: 'medium', label: 'Medium' },
    { value: 'comfortable', label: 'Comfortable' },
  ];

  catalogSectionPrev(): void {
    const n = this.catalogFocusSection();
    this.catalogFocusSection.set(n <= 1 ? 8 : n - 1);
  }

  catalogSectionNext(): void {
    const n = this.catalogFocusSection();
    this.catalogFocusSection.set(n >= 8 ? 1 : n + 1);
  }

  bindMirrorVariant(v: string): void {
    this.mirrorVariant.set(v as BrightrailTableVariant);
  }

  bindMirrorDensity(v: string): void {
    this.mirrorDensity.set(v as BrightrailTableDensity);
  }
}
