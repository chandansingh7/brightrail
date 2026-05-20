import {
  ChangeDetectionStrategy,
  Component,
  input,
  TemplateRef,
  viewChild,
} from '@angular/core';

import type {
  BrightrailTableColumn,
  BrightrailTableDensity,
  BrightrailTableRow,
  BrightrailTableVariant,
} from 'brightrail';
import {
  BrightrailTableComponent,
} from 'brightrail';

import { CatalogVariationTileComponent } from '../shared/catalog-variation-tile.component';
import { TABLE_VARIATION_SNIPPETS } from './table-variation-snippets';
import {
  buildDemoUsers,
  PLAYGROUND_USER_COLUMNS,
  TABLE_APPROVAL_COLUMNS,
  TABLE_APPROVAL_ROWS,
  TABLE_AUDIT_COLUMNS,
  TABLE_AUDIT_ROWS,
  TABLE_DATA_GRID_COLUMNS,
  TABLE_DATA_GRID_ROWS,
  TABLE_ENTERPRISE_FINANCE_COLUMNS,
  TABLE_ENTERPRISE_FINANCE_ROWS,
  TABLE_EXPAND_ROWS,
  TABLE_INVENTORY_COLUMNS,
  TABLE_INVENTORY_ROWS,
  PLAYGROUND_USER_COLUMNS_FIVE,
  TABLE_REPORT_COLUMNS,
  TABLE_REPORT_ROWS,
  TABLE_VAR_MINI_COLUMNS,
  TABLE_VAR_MINI_ROWS,
  tablePaginationFive,
} from './table-demo.datasets';

@Component({
  selector: 'app-table-variation-catalog',
  standalone: true,
  imports: [
    BrightrailTableComponent,
    CatalogVariationTileComponent,
  ],
  templateUrl: './table-variation-catalog.component.html',
  styleUrl: './table-variation-catalog.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TableVariationCatalogComponent {
  readonly s = TABLE_VARIATION_SNIPPETS;

  readonly mirrorVariant = input<BrightrailTableVariant>('basic');
  readonly mirrorDensity = input<BrightrailTableDensity>('medium');
  readonly mirrorSorting = input(false);

  readonly densityVariants: BrightrailTableDensity[] = ['compact', 'medium', 'comfortable'];

  readonly stickyDemoRows = buildDemoUsers(40);
  readonly stickyCols = PLAYGROUND_USER_COLUMNS_FIVE;

  /** 0 = show every section; 1–9 = show only that numbered section */
  readonly focusSection = input(0);

  readonly catalogExpandTpl = viewChild<TemplateRef<{ $implicit: BrightrailTableRow }>>(
    'catalogExpandTpl',
  );

  readonly miniRows = TABLE_VAR_MINI_ROWS;
  readonly miniCols = TABLE_VAR_MINI_COLUMNS;

  readonly expandRows = TABLE_EXPAND_ROWS;
  readonly expandCols = TABLE_VAR_MINI_COLUMNS;

  readonly dataGridRows = TABLE_DATA_GRID_ROWS;
  readonly dataGridCols = TABLE_DATA_GRID_COLUMNS;

  readonly reportRows = TABLE_REPORT_ROWS;
  readonly reportCols = TABLE_REPORT_COLUMNS;

  readonly auditRows = TABLE_AUDIT_ROWS;
  readonly auditCols = TABLE_AUDIT_COLUMNS;

  readonly userMgmtRows = buildDemoUsers(5);
  readonly userMgmtCols = PLAYGROUND_USER_COLUMNS.filter((c) =>
    ['name', 'email', 'role', 'status'].includes(c.id),
  );

  readonly financeRows = TABLE_ENTERPRISE_FINANCE_ROWS;
  readonly financeCols = TABLE_ENTERPRISE_FINANCE_COLUMNS;

  readonly approvalRows = TABLE_APPROVAL_ROWS;
  readonly approvalCols = TABLE_APPROVAL_COLUMNS;

  readonly inventoryRows = TABLE_INVENTORY_ROWS;
  readonly inventoryCols = TABLE_INVENTORY_COLUMNS;

  readonly pagFive = tablePaginationFive();

  readonly statesDemoRows: BrightrailTableRow[] = [
    { id: 's1', label: 'Default row', note: 'Standard interaction affordances' },
    { id: 's2', label: 'Hover row', note: 'Move the pointer over rows — hover wash is automatic' },
    {
      id: 's3',
      label: 'Selected row',
      note: 'Controlled selection styling via selectedIds',
    },
    {
      id: 's4',
      label: 'Disabled row',
      note: 'Non-interactive rows via disabledRowIds',
    },
  ];

  readonly pagDemoRows: BrightrailTableRow[] = Array.from({ length: 12 }, (_, i) => ({
    id: String(i + 1),
    label: `Record ${i + 1}`,
    lane: ['Alpha', 'Beta', 'Gamma'][i % 3],
    status: i % 3 === 0 ? 'Active' : i % 3 === 1 ? 'Pending' : 'Inactive',
  }));

  readonly pagDemoCols: BrightrailTableColumn[] = [
    { id: 'label', header: 'Label', field: 'label', sortable: true },
    { id: 'lane', header: 'Lane', field: 'lane', sortable: true },
    { id: 'status', header: 'Status', field: 'status', format: 'badge', sortable: true },
  ];

  readonly statesCols: BrightrailTableColumn[] = [
    { id: 'label', header: 'State', field: 'label' },
    { id: 'note', header: 'Notes', field: 'note' },
  ];

  readonly statesSelectedIds = ['s3'];
  readonly statesDisabledIds = ['s4'];

  sectionVisible(section: number): boolean {
    const f = this.focusSection();
    return f === 0 || f === section;
  }

  expandTplOrNull(): TemplateRef<{ $implicit: BrightrailTableRow }> | null {
    return this.catalogExpandTpl() ?? null;
  }
}
