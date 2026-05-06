import { FormsModule } from '@angular/forms';
import {
  ChangeDetectionStrategy,
  Component,
  computed,
  signal,
  TemplateRef,
  viewChild,
} from '@angular/core';
import { RouterLink } from '@angular/router';

import type {
  BrightrailTableColumn,
  BrightrailTableFilterOption,
  BrightrailTableInlineSaveEvent,
  BrightrailTableRow,
} from 'brightrail';
import {
  BrightrailTableBulkActionsComponent,
  BrightrailTableComponent,
} from 'brightrail';

import {
  TABLE_VAR_MINI_COLUMNS,
  TABLE_VAR_MINI_ROWS,
  buildDemoUsers,
} from './table-demo.datasets';
import { TP_INLINE_CELL_COLS } from './table-inline-playground.presets';

const ROLE_OPTS: BrightrailTableFilterOption[] = [
  'Owner',
  'Admin',
  'Editor',
  'Viewer',
].map((r) => ({ value: r, label: r }));

const STATUS_OPTS: BrightrailTableFilterOption[] = ['Active', 'Pending', 'Inactive'].map((s) => ({
  value: s,
  label: s,
}));

function mergeRows(
  rows: BrightrailTableRow[],
  rowId: string,
  changes: Record<string, unknown>,
): BrightrailTableRow[] {
  return rows.map((r) => (String(r['id'] ?? '') === rowId ? { ...r, ...changes } : r));
}

type CellTemplateCtx = { $implicit: BrightrailTableRow; column: BrightrailTableColumn };

@Component({
  selector: 'app-table-inline-edit-catalog',
  standalone: true,
  imports: [FormsModule, RouterLink, BrightrailTableComponent, BrightrailTableBulkActionsComponent],
  templateUrl: './table-inline-edit-catalog.component.html',
  styleUrl: './table-inline-edit-catalog.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TableInlineEditCatalogComponent {
  /** Custom actions column — Context: `{ $implicit: row, column }`. */
  readonly richActionsTpl = viewChild<TemplateRef<CellTemplateCtx>>('richActionsTpl');

  readonly richActionTemplates = computed((): Record<string, TemplateRef<CellTemplateCtx>> => {
    const t = this.richActionsTpl();
    return t ? { richActions: t } : {};
  });

  /* ----- 1 · Single-cell ----- */
  readonly cellDemoRows = signal<BrightrailTableRow[]>(
    buildDemoUsers(4).map((r, i) => (i === 0 ? { ...r } : r)),
  );

  readonly cellDemoCols = TP_INLINE_CELL_COLS;

  onCellSave(ev: BrightrailTableInlineSaveEvent): void {
    this.cellDemoRows.update((rows) => mergeRows(rows, ev.rowId, ev.changes));
  }

  /* ----- 2 · Row inline ----- */
  readonly rowEditRows = signal<BrightrailTableRow[]>(
    buildDemoUsers(3).map((r) => ({ ...r })),
  );

  readonly rowEditCols: BrightrailTableColumn[] = [
    { id: 'name', header: 'Name', field: 'name', editable: true },
    {
      id: 'role',
      header: 'Role',
      field: 'role',
      editable: true,
      editor: 'select',
      editOptions: ROLE_OPTS,
    },
    {
      id: 'status',
      header: 'Status',
      field: 'status',
      editable: true,
      editor: 'select',
      editOptions: STATUS_OPTS,
      format: 'badge',
    },
    {
      id: 'actions',
      header: 'Actions',
      columnRole: 'actions',
      width: '7.5rem',
      sortable: false,
    },
  ];

  onRowSave(ev: BrightrailTableInlineSaveEvent): void {
    this.rowEditRows.update((rows) => mergeRows(rows, ev.rowId, ev.changes));
  }

  /* ----- 4 · Number & date ----- */
  readonly qtyRows = signal<BrightrailTableRow[]>([
    { id: 'p1', sku: 'Deck rail', price: 129.0, qty: 4, due: '2026-05-12' },
    { id: 'p2', sku: 'Signal lamp', price: 42.5, qty: 12, due: '2026-05-20' },
  ]);

  readonly qtyCols: BrightrailTableColumn[] = [
    { id: 'sku', header: 'SKU', field: 'sku' },
    {
      id: 'price',
      header: 'Price',
      field: 'price',
      align: 'end',
      editable: true,
      editor: 'number',
    },
    {
      id: 'qty',
      header: 'Qty',
      field: 'qty',
      align: 'center',
      editable: true,
      editor: 'number',
    },
    {
      id: 'due',
      header: 'Due date',
      field: 'due',
      editable: true,
      editor: 'date',
    },
    {
      id: 'actions',
      header: 'Actions',
      columnRole: 'actions',
      width: '7rem',
      sortable: false,
    },
  ];

  onQtySave(ev: BrightrailTableInlineSaveEvent): void {
    this.qtyRows.update((rows) => mergeRows(rows, ev.rowId, ev.changes));
  }

  /* ----- 5 · Validation ----- */
  readonly validRows = signal<BrightrailTableRow[]>([
    { id: 'v1', name: 'Jordan Lee', role: 'Admin' },
    { id: 'v2', name: '', role: 'Viewer' },
  ]);

  readonly validCols: BrightrailTableColumn[] = [
    { id: 'name', header: 'Name', field: 'name', editable: true, required: true },
    {
      id: 'role',
      header: 'Role',
      field: 'role',
      editable: true,
      editor: 'select',
      editOptions: ROLE_OPTS,
    },
    {
      id: 'actions',
      header: 'Actions',
      columnRole: 'actions',
      width: '7rem',
      sortable: false,
    },
  ];

  onValidSave(ev: BrightrailTableInlineSaveEvent): void {
    this.validRows.update((rows) => mergeRows(rows, ev.rowId, ev.changes));
  }

  /* ----- 6 · Bulk edit ----- */
  readonly bulkRows = signal<BrightrailTableRow[]>(
    buildDemoUsers(6).map((r) => ({ ...r })),
  );
  readonly bulkSelectedIds = signal<string[]>([]);
  readonly bulkStatusDraft = signal('Active');

  readonly bulkCols: BrightrailTableColumn[] = [
    {
      id: 'name',
      header: 'Name',
      field: 'name',
      sortable: true,
      format: 'avatar',
      avatarSubtitleField: 'email',
    },
    { id: 'role', header: 'Role', field: 'role', sortable: true },
    { id: 'status', header: 'Status', field: 'status', sortable: true, format: 'badge' },
  ];

  onBulkSelection(ids: string[]): void {
    this.bulkSelectedIds.set(ids);
  }

  applyBulkStatusDemo(): void {
    const ids = new Set(this.bulkSelectedIds());
    if (!ids.size) {
      return;
    }
    const status = this.bulkStatusDraft();
    this.bulkRows.update((rows) =>
      rows.map((r) => (ids.has(String(r['id'] ?? '')) ? { ...r, status } : r)),
    );
  }

  clearBulkDemo(): void {
    this.bulkSelectedIds.set([]);
  }

  bulkDeleteDemo(): void {
    const ids = new Set(this.bulkSelectedIds());
    if (!ids.size) {
      return;
    }
    const ok =
      typeof globalThis.confirm === 'function'
        ? globalThis.confirm(`Delete ${ids.size} row(s)?`)
        : true;
    if (!ok) {
      return;
    }
    this.bulkRows.update((rows) => rows.filter((r) => !ids.has(String(r['id'] ?? ''))));
    this.bulkSelectedIds.set([]);
  }

  /* ----- 8 · Template actions ----- */
  readonly tplRows = signal<BrightrailTableRow[]>(
    buildDemoUsers(2).map((r) => ({ ...r })),
  );

  readonly tplCols: BrightrailTableColumn[] = [
    { id: 'name', header: 'Name', field: 'name' },
    {
      id: 'actions',
      header: 'Actions',
      cellTemplateKey: 'richActions',
      sticky: 'right',
      width: '9rem',
      sortable: false,
    },
  ];

  noopDemo(row: BrightrailTableRow, action: string): void {
    if (typeof globalThis.alert === 'function') {
      globalThis.alert(`${action}: ${String(row['name'] ?? '')}`);
    }
  }

  /* ----- 9 · Hover + sticky ----- */
  readonly stickyRows = signal<BrightrailTableRow[]>(
    buildDemoUsers(12).map((r) => ({
      ...r,
      segment: ['North', 'South', 'East'][Number(r['id'] ?? 0) % 3],
      tier: ['Starter', 'Pro', 'Enterprise'][Number(r['id'] ?? 0) % 3],
      notes: `Workspace rollout ${r['id']} — pilot checklist, SOC2 packet, billing hooks.`,
    })),
  );

  readonly stickyCols: BrightrailTableColumn[] = [
    { id: 'name', header: 'Name', field: 'name', width: '22%', format: 'avatar', avatarSubtitleField: 'email' },
    { id: 'segment', header: 'Segment', field: 'segment', width: '18%' },
    { id: 'tier', header: 'Tier', field: 'tier', width: '14%' },
    { id: 'role', header: 'Role', field: 'role', width: '14%' },
    {
      id: 'notes',
      header: 'Notes',
      field: 'notes',
      editable: true,
      editor: 'text',
      width: '26%',
    },
    {
      id: 'actions',
      header: 'Actions',
      columnRole: 'actions',
      sticky: 'right',
      width: '6rem',
      sortable: false,
    },
  ];

  onStickySave(ev: BrightrailTableInlineSaveEvent): void {
    this.stickyRows.update((rows) => mergeRows(rows, ev.rowId, ev.changes));
  }

  readonly hoverCellRows = signal<BrightrailTableRow[]>(
    buildDemoUsers(3).map((r) => ({ ...r })),
  );

  readonly hoverCellCols: BrightrailTableColumn[] = [
    { id: 'name', header: 'Name', field: 'name' },
    {
      id: 'email',
      header: 'Email',
      field: 'email',
      editable: true,
      editor: 'text',
    },
    { id: 'role', header: 'Role', field: 'role' },
  ];

  onHoverCellSave(ev: BrightrailTableInlineSaveEvent): void {
    this.hoverCellRows.update((rows) => mergeRows(rows, ev.rowId, ev.changes));
  }

  readonly miniUsersRows = TABLE_VAR_MINI_ROWS;
  readonly miniUsersCols = TABLE_VAR_MINI_COLUMNS;

  readonly miniPricingRows: BrightrailTableRow[] = [
    { id: 'pr1', item: 'Seat pack', price: 49, qty: 120 },
    { id: 'pr2', item: 'Addon API', price: 199, qty: 44 },
  ];

  readonly miniPricingCols: BrightrailTableColumn[] = [
    { id: 'item', header: 'Item', field: 'item' },
    { id: 'price', header: 'Price', field: 'price', align: 'end', format: 'currency', currencyCode: 'USD' },
    { id: 'qty', header: 'Qty', field: 'qty', align: 'center' },
  ];

  readonly miniTaskRows: BrightrailTableRow[] = [
    { id: 't1', task: 'Cut scope doc', owner: 'Sam', status: 'In Progress' },
    { id: 't2', task: 'Ship beta', owner: 'Lee', status: 'Done' },
  ];

  readonly miniTaskCols: BrightrailTableColumn[] = [
    { id: 'task', header: 'Task', field: 'task' },
    { id: 'owner', header: 'Owner', field: 'owner' },
    { id: 'status', header: 'Status', field: 'status', format: 'badge' },
  ];
}
