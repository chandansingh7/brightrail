import type {
  BrightrailCommandPaletteItem,
  BrightrailComboboxOption,
  BrightrailGraphSeries,
  BrightrailTableColumn,
  BrightrailTableRow,
  BrightrailTreeNode,
  BrightrailTreeTableNode,
} from 'brightrail';

export const SAAS_USER_ROWS: BrightrailTableRow[] = [
  { id: 'u1', name: 'Alex Rivera', role: 'Admin', status: 'Active', lastLogin: '2m ago' },
  { id: 'u2', name: 'Jordan Lee', role: 'Editor', status: 'Pending', lastLogin: '1h ago' },
  { id: 'u3', name: 'Sam Patel', role: 'Viewer', status: 'Active', lastLogin: 'Today' },
  { id: 'u4', name: 'Morgan Chen', role: 'Billing', status: 'Inactive', lastLogin: '3d ago' },
];

export const SAAS_USER_COLUMNS: BrightrailTableColumn[] = [
  { id: 'name', header: 'Name', field: 'name' },
  { id: 'role', header: 'Role', field: 'role' },
  { id: 'status', header: 'Status', field: 'status', format: 'badge' },
  { id: 'lastLogin', header: 'Last login', field: 'lastLogin' },
];

export const COMMERCE_PRODUCT_ROWS = [
  { id: 'p1', name: 'Trail Runner Pro', sku: 'SKU-102', stockLabel: 'In Stock', price: 129.99 },
  { id: 'p2', name: 'Urban Pack Lite', sku: 'SKU-441', stockLabel: 'Low Stock', price: 79.5 },
  { id: 'p3', name: 'Summit Jacket', sku: 'SKU-903', stockLabel: 'Out of Stock', price: 249 },
] as const;

export type CommerceProductRow = (typeof COMMERCE_PRODUCT_ROWS)[number];

export const COMMERCE_PRODUCT_COLUMNS: BrightrailTableColumn[] = [
  { id: 'name', header: 'Product', field: 'name' },
  { id: 'sku', header: 'SKU', field: 'sku' },
  { id: 'stockLabel', header: 'Stock', field: 'stockLabel', format: 'badge' },
  { id: 'price', header: 'Price', field: 'price', format: 'currency', currencyCode: 'USD' },
];

export const FINTECH_PORTFOLIO_ROWS: BrightrailTableRow[] = [
  { id: 'f1', ticker: 'BRGT', price: 124.5, changePct: 2.4 },
  { id: 'f2', ticker: 'NRDL', price: 42.1, changePct: -1.2 },
  { id: 'f3', ticker: 'LMNO', price: 8.9, changePct: -4.8 },
  { id: 'f4', ticker: 'ACME', price: 56.3, changePct: 0.8 },
];

export const FINTECH_PORTFOLIO_COLUMNS: BrightrailTableColumn[] = [
  { id: 'ticker', header: 'Ticker', field: 'ticker' },
  { id: 'price', header: 'Price', field: 'price', format: 'currency', currencyCode: 'USD' },
  { id: 'changePct', header: 'Change', field: 'changePct', format: 'percentChange' },
];

export const FINTECH_REVENUE_SERIES: BrightrailGraphSeries[] = [
  {
    id: 'revenue',
    label: 'Revenue',
    color: '#22d3ee',
    points: [
      { x: 'Jan', y: 4200 },
      { x: 'Feb', y: 5100 },
      { x: 'Mar', y: 6240 },
      { x: 'Apr', y: 5800 },
      { x: 'May', y: 7100 },
      { x: 'Jun', y: 8200 },
    ],
  },
];

export const CYBER_THREAT_ROWS: BrightrailTableRow[] = [
  { id: 't1', severity: 'Critical', source: '10.0.4.22', vector: 'SQL injection', status: 'Open' },
  { id: 't2', severity: 'High', source: '192.168.1.88', vector: 'Brute force', status: 'Investigating' },
  { id: 't3', severity: 'Medium', source: '172.16.0.5', vector: 'Phishing', status: 'Contained' },
];

export const CYBER_THREAT_COLUMNS: BrightrailTableColumn[] = [
  { id: 'severity', header: 'Severity', field: 'severity', format: 'badge' },
  { id: 'source', header: 'Source IP', field: 'source' },
  { id: 'vector', header: 'Vector', field: 'vector' },
  { id: 'status', header: 'Status', field: 'status', format: 'badge' },
];

export const SAAS_COMMANDS: BrightrailCommandPaletteItem[] = [
  { id: 'invite', label: 'Invite teammate', group: 'People', shortcut: '⌘I' },
  { id: 'roles', label: 'Manage roles', group: 'Security' },
  { id: 'audit', label: 'View audit log', group: 'Security', shortcut: '⌘L' },
  { id: 'settings', label: 'Workspace settings', group: 'App', shortcut: '⌘,' },
];

export const COMMERCE_CATEGORY_OPTIONS: BrightrailComboboxOption[] = [
  { value: 'apparel', label: 'Apparel' },
  { value: 'footwear', label: 'Footwear' },
  { value: 'accessories', label: 'Accessories' },
  { value: 'outdoor', label: 'Outdoor gear' },
];

export const EDUCATION_TREE_NODES: BrightrailTreeNode[] = [
  {
    id: 'course',
    label: 'UX Design 101',
    expanded: true,
    children: [
      {
        id: 'mod1',
        label: 'Module 1 — Research',
        expanded: true,
        children: [
          { id: 'l1', label: 'Lesson: Interviews' },
          { id: 'l2', label: 'Lesson: Personas' },
        ],
      },
      { id: 'mod2', label: 'Module 2 — Prototyping' },
    ],
  },
];

export const EDUCATION_TREE_TABLE_NODES: BrightrailTreeTableNode[] = [
  {
    id: 'org',
    label: 'Design Program',
    meta: 'Fall 2026',
    children: [
      {
        id: 'cohort-a',
        label: 'Cohort A',
        meta: '24 learners',
        children: [
          { id: 'team-1', label: 'Team Alpha', meta: 'Project due Fri' },
          { id: 'team-2', label: 'Team Beta', meta: 'Draft review' },
        ],
      },
    ],
  },
];

export const NEURAL_GRAPH_NODES = [
  { id: 'ingress', label: 'Ingress' },
  { id: 'detect', label: 'Detection' },
  { id: 'analyze', label: 'Analysis' },
  { id: 'respond', label: 'Response' },
];

export const NEURAL_GRAPH_LINKS = [
  { source: 'ingress', target: 'detect' },
  { source: 'detect', target: 'analyze' },
  { source: 'analyze', target: 'respond' },
];

export const QUANTUM_STEPS = [
  { label: 'Scan', description: 'Ingest telemetry streams' },
  { label: 'Correlate', description: 'Map threat signatures' },
  { label: 'Respond', description: 'Deploy countermeasures' },
];

export function tablePagination(size = 5) {
  return { pageSize: size, pageSizeOptions: [5, 10, 25] };
}
