/** Generic row shape for {@link BrightrailTableComponent}. */
export type BrightrailTableRow = Record<string, unknown>;

export type BrightrailTableVariant = 'basic' | 'bordered' | 'striped';

export type BrightrailTableDensity = 'compact' | 'medium' | 'comfortable';

export type BrightrailTableRowSelectionMode = 'none' | 'single' | 'multiple';

/** Where projected bulk or single-select action buttons sit in the selection bar. */
export type BrightrailTableBulkActionsPlacement = 'end' | 'inline';

/** @see BrightrailTableBulkActionsPlacement */
export type BrightrailTableSingleActionsPlacement = BrightrailTableBulkActionsPlacement;

/** Granularity for {@link BrightrailTableComponent.inlineEdit}. */
export type BrightrailTableInlineEditMode = 'cell' | 'row';

export type BrightrailTableColumnRole = 'data' | 'actions';

export type BrightrailTableColumnEditor = 'text' | 'number' | 'date' | 'select';

export type BrightrailTableColumnFormat =
  | 'text'
  | 'badge'
  | 'avatar'
  | 'currency'
  | 'percentChange';

export type BrightrailTableBadgeTone = 'success' | 'warning' | 'danger' | 'neutral';

/** Emitted when an inline edit commits successfully (parent merges into `data`). */
export interface BrightrailTableInlineSaveEvent {
  rowId: string;
  changes: Record<string, unknown>;
}

/** Option row for column dropdown filters (`columnFilters` on the table). */
export interface BrightrailTableFilterOption {
  value: string;
  label: string;
}

export interface BrightrailTableColumn<
  R extends BrightrailTableRow = BrightrailTableRow,
> {
  id: string;
  header: string;
  field?: keyof R & string;
  sortable?: boolean;
  align?: 'start' | 'center' | 'end';
  width?: string;
  format?: BrightrailTableColumnFormat;
  /** ISO 4217 code when format is `currency`. */
  currencyCode?: string;
  /** Preferred semantic tone when format is `badge`. */
  badgeTone?: BrightrailTableBadgeTone;
  /** Secondary line under the name when format is `avatar`. */
  avatarSubtitleField?: keyof R & string;
  /** When format is `avatar`, show only the initials circle (name/subtitle stay screen-reader only). */
  avatarIconOnly?: boolean;
  /** When the table has `columnSearch`, show an inline text filter for this column. */
  searchable?: boolean;
  /** When the table has `columnFilters`, show a dropdown; include `{ value: '', label: 'All …' }` for “no filter”. */
  filterOptions?: BrightrailTableFilterOption[];
  /** Date filter (YYYY-MM-DD) matching the start of the cell value (ISO date strings supported). */
  dateFilter?: boolean;
  /** Placeholder for search inputs (`columnSearch`); defaults to `Search {header}`. */
  filterPlaceholder?: string;

  /** Built-in actions column (row edit affordances) when `inlineEditMode` is `row`. */
  columnRole?: BrightrailTableColumnRole;
  /** Allow inline editing when {@link BrightrailTableComponent.inlineEdit} is enabled. */
  editable?: boolean;
  editor?: BrightrailTableColumnEditor;
  /** Options when `editor` is `select`. */
  editOptions?: BrightrailTableFilterOption[];
  /** Validates non-empty string/number before {@link BrightrailTableInlineSaveEvent}. */
  required?: boolean;
  /** Pin header/body cells while scrolling horizontally. */
  sticky?: 'left' | 'right';
  /** Renders `cellTemplates[key]` instead of `format` when not actively editing. */
  cellTemplateKey?: string;
}

export interface BrightrailTablePaginationConfig {
  pageSize: number;
  /** Zero-based page index (controlled when provided every change detection cycle). */
  pageIndex?: number;
  pageSizeOptions?: number[];
}

export interface BrightrailTableSortEvent {
  columnId: string;
  direction: 'asc' | 'desc';
}

export interface BrightrailTablePageEvent {
  pageIndex: number;
  pageSize: number;
}

export function brightrailTableResolveRowId(
  row: BrightrailTableRow,
  trackByField: string,
): string {
  const raw = row[trackByField];
  if (raw === null || raw === undefined) {
    return '';
  }
  return String(raw);
}
