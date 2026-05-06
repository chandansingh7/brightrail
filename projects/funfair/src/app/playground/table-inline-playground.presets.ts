import type {
  BrightrailTableColumn,
  BrightrailTableFilterOption,
  BrightrailTableRow,
} from 'brightrail';

import { buildDemoUsers } from './table-demo.datasets';

export const TP_ROLE_OPTS: BrightrailTableFilterOption[] = ['Owner', 'Admin', 'Editor', 'Viewer'].map(
  (r) => ({ value: r, label: r }),
);

export const TP_STATUS_OPTS: BrightrailTableFilterOption[] = ['Active', 'Pending', 'Inactive'].map(
  (s) => ({ value: s, label: s }),
);

/** Single-cell inline edit — every data column editable (click cell → ✓ / ✕). */
export const TP_INLINE_CELL_COLS: BrightrailTableColumn[] = [
  {
    id: 'name',
    header: 'Name',
    field: 'name',
    sortable: true,
    editable: true,
    editor: 'text',
    format: 'avatar',
    avatarSubtitleField: 'email',
  },
  {
    id: 'email',
    header: 'Email',
    field: 'email',
    sortable: true,
    editable: true,
    editor: 'text',
  },
  {
    id: 'role',
    header: 'Role',
    field: 'role',
    sortable: true,
    editable: true,
    editor: 'select',
    editOptions: TP_ROLE_OPTS,
  },
  {
    id: 'status',
    header: 'Status',
    field: 'status',
    sortable: true,
    editable: true,
    editor: 'select',
    editOptions: TP_STATUS_OPTS,
    format: 'badge',
  },
];

/** Row edit + Role/Status selects — Actions column for Save/Cancel. */
export const TP_INLINE_ROW_COLS: BrightrailTableColumn[] = [
  { id: 'name', header: 'Name', field: 'name', editable: true },
  {
    id: 'role',
    header: 'Role',
    field: 'role',
    editable: true,
    editor: 'select',
    editOptions: TP_ROLE_OPTS,
  },
  {
    id: 'status',
    header: 'Status',
    field: 'status',
    editable: true,
    editor: 'select',
    editOptions: TP_STATUS_OPTS,
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

/** Numbers & dates — row edit. */
export const TP_INLINE_QTY_COLS: BrightrailTableColumn[] = [
  { id: 'sku', header: 'SKU', field: 'sku' },
  { id: 'price', header: 'Price', field: 'price', align: 'end', editable: true, editor: 'number' },
  { id: 'qty', header: 'Qty', field: 'qty', align: 'center', editable: true, editor: 'number' },
  { id: 'due', header: 'Due date', field: 'due', editable: true, editor: 'date' },
  {
    id: 'actions',
    header: 'Actions',
    columnRole: 'actions',
    width: '7rem',
    sortable: false,
  },
];

export const TP_INLINE_QTY_ROWS: BrightrailTableRow[] = [
  { id: 'p1', sku: 'Deck rail', price: 129, qty: 4, due: '2026-05-12' },
  { id: 'p2', sku: 'Signal lamp', price: 42.5, qty: 12, due: '2026-05-20' },
];

/** Required name validation demo. */
export const TP_INLINE_VALID_COLS: BrightrailTableColumn[] = [
  { id: 'name', header: 'Name', field: 'name', editable: true, required: true },
  {
    id: 'role',
    header: 'Role',
    field: 'role',
    editable: true,
    editor: 'select',
    editOptions: TP_ROLE_OPTS,
  },
  {
    id: 'actions',
    header: 'Actions',
    columnRole: 'actions',
    width: '7rem',
    sortable: false,
  },
];

export const TP_INLINE_VALID_ROWS: BrightrailTableRow[] = [
  { id: 'v1', name: 'Jordan Lee', role: 'Admin' },
  { id: 'v2', name: '', role: 'Viewer' },
];

/** Simpler columns for bulk-edit bar (no integrated filters). */
export const TP_INLINE_BULK_COLS: BrightrailTableColumn[] = [
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

export function tpCloneUsers(count = 5): BrightrailTableRow[] {
  return buildDemoUsers(count).map((r) => ({ ...r }));
}

export function tpMergeInlineRows(
  rows: BrightrailTableRow[],
  rowId: string,
  changes: Record<string, unknown>,
): BrightrailTableRow[] {
  return rows.map((r) => (String(r['id'] ?? '') === rowId ? { ...r, ...changes } : r));
}
