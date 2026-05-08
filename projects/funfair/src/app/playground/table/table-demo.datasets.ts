import type {
  BrightrailTableColumn,
  BrightrailTableFilterOption,
  BrightrailTablePaginationConfig,
  BrightrailTableRow,
} from 'brightrail';

const DEMO_ROLES = ['Owner', 'Admin', 'Editor', 'Viewer', 'Billing'] as const;
const DEMO_STATUSES = ['Active', 'Pending', 'Inactive'] as const;

/** Narrow preset rows for catalog tiles (string-ish cells only). */
export type DemoRow = BrightrailTableRow;

export const TABLE_VAR_MINI_ROWS: DemoRow[] = [
  { id: 'v1', name: 'Alex Rivera', role: 'Admin', status: 'Active' },
  { id: 'v2', name: 'Jordan Lee', role: 'Editor', status: 'Pending' },
  { id: 'v3', name: 'Sam Patel', role: 'Viewer', status: 'Inactive' },
];

export const TABLE_VAR_MINI_COLUMNS: BrightrailTableColumn[] = [
  { id: 'name', header: 'Name', field: 'name' },
  { id: 'role', header: 'Role', field: 'role' },
  { id: 'status', header: 'Status', field: 'status', format: 'badge' },
];

export const TABLE_ENTERPRISE_FINANCE_ROWS: DemoRow[] = [
  { id: 'f1', ticker: 'BRGT', price: 124.5, changePct: 2.4 },
  { id: 'f2', ticker: 'NRDL', price: 42.1, changePct: -1.2 },
  { id: 'f3', ticker: 'LMNO', price: 8.9, changePct: -4.8 },
];

export const TABLE_ENTERPRISE_FINANCE_COLUMNS: BrightrailTableColumn[] = [
  { id: 'ticker', header: 'Ticker', field: 'ticker' },
  { id: 'price', header: 'Price', field: 'price', format: 'currency', currencyCode: 'USD' },
  { id: 'changePct', header: 'Change', field: 'changePct', format: 'percentChange' },
];

export const TABLE_APPROVAL_ROWS: DemoRow[] = [
  { id: 'a1', title: 'Budget request', status: 'Pending' },
  { id: 'a2', title: 'Vendor onboarding', status: 'Approved' },
  { id: 'a3', title: 'Refund batch', status: 'Rejected' },
];

export const TABLE_APPROVAL_COLUMNS: BrightrailTableColumn[] = [
  { id: 'title', header: 'Request', field: 'title' },
  { id: 'status', header: 'Status', field: 'status', format: 'badge' },
];

export const TABLE_INVENTORY_ROWS: DemoRow[] = [
  { id: 'i1', sku: 'SKU-102', stockLabel: 'In Stock' },
  { id: 'i2', sku: 'SKU-441', stockLabel: 'Low Stock' },
  { id: 'i3', sku: 'SKU-903', stockLabel: 'Out of Stock' },
];

export const TABLE_INVENTORY_COLUMNS: BrightrailTableColumn[] = [
  { id: 'sku', header: 'SKU', field: 'sku' },
  { id: 'stockLabel', header: 'Stock', field: 'stockLabel', format: 'badge' },
];

export const TABLE_AUDIT_ROWS: DemoRow[] = [
  { id: 'u1', action: 'Login', actor: 'jdoe', when: '2026-05-02' },
  { id: 'u2', action: 'Export CSV', actor: 'admin', when: '2026-05-03' },
];

export const TABLE_AUDIT_COLUMNS: BrightrailTableColumn[] = [
  { id: 'action', header: 'Action', field: 'action' },
  { id: 'actor', header: 'User', field: 'actor' },
  { id: 'when', header: 'When', field: 'when' },
];

export function tablePaginationFive(): BrightrailTablePaginationConfig {
  return { pageSize: 5, pageSizeOptions: [5, 10, 25] };
}

const FIRST_NAMES = [
  'Emma',
  'Lucas',
  'Priya',
  'Noah',
  'Maya',
  'Ethan',
  'Sofia',
  'Owen',
  'Aria',
  'Diego',
];
const LAST_NAMES = ['Hart', 'Nguyen', 'Patel', 'Brown', 'Garcia', 'Kim', 'Li', 'Singh', 'Martin', 'Reyes'];

const ROLES = ['Owner', 'Admin', 'Editor', 'Viewer', 'Billing'];
const STATUSES = ['Active', 'Pending', 'Inactive'];

/** Builds deterministic demo users like the playground screenshot (25 rows). */
export function buildDemoUsers(count = 25): DemoRow[] {
  const rows: DemoRow[] = [];
  for (let i = 1; i <= count; i++) {
    const fn = FIRST_NAMES[(i - 1) % FIRST_NAMES.length];
    const ln = LAST_NAMES[(i + 2) % LAST_NAMES.length];
    const name = `${fn} ${ln}`;
    const role = ROLES[(i + 1) % ROLES.length];
    const status = STATUSES[(i + 3) % STATUSES.length];
    rows.push({
      id: String(i),
      name,
      email: `${fn.toLowerCase()}.${ln.toLowerCase()}@example.com`,
      role,
      status,
      created: `2026-04-${String(((i - 1) % 28) + 1).padStart(2, '0')}`,
    });
  }
  return rows;
}

/** Dropdown filter presets aligned with {@link buildDemoUsers} role/status values. */
export const PLAYGROUND_ROLE_FILTER_OPTIONS: BrightrailTableFilterOption[] = [
  { value: '', label: 'All roles' },
  ...DEMO_ROLES.map((r) => ({ value: r, label: r })),
];

export const PLAYGROUND_STATUS_FILTER_OPTIONS: BrightrailTableFilterOption[] = [
  { value: '', label: 'All status' },
  ...DEMO_STATUSES.map((s) => ({ value: s, label: s })),
];

/**
 * Advanced table preset — minimal columns so integrated filters stay usable on narrow widths.
 * Row data still includes id/email/created for expand panels and other demos.
 */
export const ADVANCED_USER_COLUMNS: BrightrailTableColumn[] = [
  {
    id: 'name',
    header: 'Name',
    field: 'name',
    width: '46%',
    sortable: true,
    searchable: true,
    filterPlaceholder: 'Search',
    format: 'avatar',
    avatarSubtitleField: 'email',
  },
  {
    id: 'role',
    header: 'Role',
    field: 'role',
    width: '26%',
    sortable: true,
    filterOptions: PLAYGROUND_ROLE_FILTER_OPTIONS,
  },
  {
    id: 'status',
    header: 'Status',
    field: 'status',
    width: '22%',
    sortable: true,
    format: 'badge',
    filterOptions: PLAYGROUND_STATUS_FILTER_OPTIONS,
  },
];

export const PLAYGROUND_USER_COLUMNS: BrightrailTableColumn[] = [
  { id: 'id', header: 'ID', field: 'id', width: '4.5rem', sortable: true },
  {
    id: 'name',
    header: 'Name',
    field: 'name',
    sortable: true,
    format: 'avatar',
    avatarSubtitleField: 'email',
  },
  { id: 'email', header: 'Email', field: 'email', sortable: true },
  { id: 'role', header: 'Role', field: 'role', sortable: true },
  { id: 'status', header: 'Status', field: 'status', sortable: true, format: 'badge' },
  { id: 'created', header: 'Created', field: 'created', sortable: true },
];

export const PLAYGROUND_USER_COLUMNS_FIVE: BrightrailTableColumn[] = PLAYGROUND_USER_COLUMNS.filter((c) =>
  ['id', 'name', 'role', 'status', 'created'].includes(c.id),
);

export const TABLE_EXPAND_ROWS: DemoRow[] = TABLE_VAR_MINI_ROWS.map((r, i) => ({
  ...r,
  email: `user${i + 1}@brightrail.dev`,
  dept: ['Operations', 'Finance', 'Design'][i % 3],
}));

export const TABLE_REPORT_ROWS: DemoRow[] = [
  { id: 'r1', name: 'Roadmap', owner: 'Alice', updated: '2026-05-01', status: 'Complete' },
  { id: 'r2', name: 'Billing rollout', owner: 'Marcus', updated: '2026-05-03', status: 'In-Progress' },
  { id: 'r3', name: 'Design QA', owner: 'Priya', updated: '2026-05-04', status: 'Pending' },
];

export const TABLE_REPORT_COLUMNS: BrightrailTableColumn[] = [
  { id: 'name', header: 'Name', field: 'name' },
  { id: 'owner', header: 'Owner', field: 'owner' },
  { id: 'updated', header: 'Updated', field: 'updated' },
  { id: 'status', header: 'Status', field: 'status', format: 'badge' },
];

export const TABLE_DATA_GRID_ROWS: DemoRow[] = [
  { id: 'd1', name: 'Northwind deck', owner: 'Jordan', updated: '2026-05-02' },
  { id: 'd2', name: 'Ops backlog', owner: 'Sam', updated: '2026-05-02' },
];

export const TABLE_DATA_GRID_COLUMNS: BrightrailTableColumn[] = [
  { id: 'name', header: 'Name', field: 'name' },
  { id: 'owner', header: 'Owner', field: 'owner' },
  { id: 'updated', header: 'Updated', field: 'updated' },
];
