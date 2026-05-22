import type {
  BrightrailBreadcrumbItem,
  BrightrailGraphSeries,
  BrightrailTableColumn,
  BrightrailTableRow,
  BrightrailTreeNode,
  BrightrailTreeTableNode,
} from 'brightrail';

import { TABLE_VAR_MINI_COLUMNS, TABLE_VAR_MINI_ROWS } from '../table/table-demo.datasets';

/** Mini table slice for hub tile previews. */
export const HUB_PREVIEW_TABLE_ROWS: BrightrailTableRow[] = TABLE_VAR_MINI_ROWS.slice(0, 2);
export const HUB_PREVIEW_TABLE_COLUMNS: BrightrailTableColumn[] = [...TABLE_VAR_MINI_COLUMNS];

export const HUB_PREVIEW_GRAPH_SERIES: BrightrailGraphSeries[] = [
  {
    id: 'revenue',
    label: 'Revenue',
    points: [
      { x: 'Jan', y: 42 },
      { x: 'Feb', y: 51 },
      { x: 'Mar', y: 62 },
      { x: 'Apr', y: 58 },
    ],
  },
];

export const HUB_PREVIEW_BREADCRUMB_ITEMS: BrightrailBreadcrumbItem[] = [
  { label: 'Home', href: '/', icon: 'home' },
  { label: 'Catalog', href: '/catalog' },
  { label: 'Preview', current: true },
];

export const HUB_PREVIEW_TREE_TABLE_NODES: BrightrailTreeTableNode[] = [
  {
    id: 'org',
    label: 'Workspace',
    meta: 'Org',
    children: [{ id: 'proj', label: 'Project', meta: 'Team' }],
  },
];

export const HUB_PREVIEW_TREE_NODES: BrightrailTreeNode[] = [
  { id: 'workspace', label: 'Workspace', expanded: true, children: [{ id: 'project', label: 'Project' }] },
];

export const HUB_PREVIEW_VALIDATION_ERRORS = ['Email is required.', 'Password must be at least 8 characters.'];

/**
 * Routes that use a large brightrail-icon instead of a live widget (overlays, full layouts).
 */
export const HUB_PREVIEW_FALLBACK_ICONS: Readonly<Record<string, string>> = {
  'app-shell': 'list',
  drawer: 'list',
  modal: 'copy',
  'command-palette': 'search',
};

export function hubPreviewFallbackIcon(playgroundRoute: string): string {
  return HUB_PREVIEW_FALLBACK_ICONS[playgroundRoute] ?? 'more';
}

export function hubPreviewUsesFallbackIcon(playgroundRoute: string): boolean {
  return playgroundRoute in HUB_PREVIEW_FALLBACK_ICONS;
}
