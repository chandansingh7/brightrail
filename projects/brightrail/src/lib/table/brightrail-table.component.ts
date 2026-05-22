import { NgTemplateOutlet } from '@angular/common';
import { BRIGHTRAIL_FX_SHELL_HOST } from '../futuristic/brightrail-futuristic-host';
import {
  ChangeDetectionStrategy,
  Component,
  computed,
  input,
  model,
  output,
  signal,
  TemplateRef,
} from '@angular/core';

import type {
  BrightrailTableBadgeTone,
  BrightrailTableBulkActionsPlacement,
  BrightrailTableColumn,
  BrightrailTableDensity,
  BrightrailTableInlineEditMode,
  BrightrailTableInlineSaveEvent,
  BrightrailTablePageEvent,
  BrightrailTablePaginationConfig,
  BrightrailTableRow,
  BrightrailTableRowSelectionMode,
  BrightrailTableSortEvent,
  BrightrailTableVariant,
} from './brightrail-table.types';
import { brightrailTableResolveRowId } from './brightrail-table.types';

type PageTile =
  | { kind: 'page'; page: number }
  | { kind: 'ellipsis'; label: string };

@Component({
  selector: 'brightrail-table',
  standalone: true,
  hostDirectives: [BRIGHTRAIL_FX_SHELL_HOST],
  imports: [NgTemplateOutlet],
  templateUrl: './brightrail-table.component.html',
  styleUrl: './brightrail-table.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    class: 'br-table-host',
  },
})
export class BrightrailTableComponent {
  private static nextRadioGroupSeq = 0;

  /**
   * Unique `name` per table instance so several `brightrail-table` widgets on one page
   * do not share a single HTML radio group (which breaks selection).
   */
  readonly radioGroupName = `br-table-row-sel-${BrightrailTableComponent.nextRadioGroupSeq++}`;

  readonly data = input<BrightrailTableRow[]>([]);
  readonly columns = input<BrightrailTableColumn[]>([]);

  readonly variant = input<BrightrailTableVariant>('basic');
  readonly density = input<BrightrailTableDensity>('medium');

  readonly sorting = input(false);
  readonly pagination = input<BrightrailTablePaginationConfig | null>(null);
  readonly rowSelection = input<BrightrailTableRowSelectionMode>('none');
  readonly expandable = input(false);
  readonly expandedTemplate = input<TemplateRef<{ $implicit: BrightrailTableRow }> | null>(null);

  readonly stickyHeader = input(false);
  readonly stickyMaxHeight = input<string | null>('22rem');

  readonly loading = input(false);
  readonly skeletonRows = input(5);

  readonly emptyTitle = input('No data available');
  readonly emptyDescription = input<string | null>(null);
  readonly showEmptyAction = input(false);
  readonly emptyActionLabel = input('Add record');

  /** When filters remove every row, this copy is shown instead of the default empty state. */
  readonly filterEmptyTitle = input('No results found');
  readonly filterEmptyDescription = input<string | null>(
    'Try adjusting search or filter controls.',
  );

  /** Show the second header row with search / dropdown / date controls (per-column metadata). */
  readonly columnSearch = input(false);
  readonly columnFilters = input(false);
  /** Two-way filter state; keys are column `id` values. */
  readonly filterState = model<Record<string, string>>({});

  /** Funnel control in the leading header-control cell (clears filters via `clearFilters()` by default). */
  readonly showGlobalFilterButton = input(true);
  readonly bulkToolbarVisible = input(true);
  /**
   * `end`: bulk buttons align to the right of the bar (default).
   * `inline`: bulk buttons sit immediately after “N selected”.
   */
  readonly bulkActionsPlacement = input<BrightrailTableBulkActionsPlacement>('end');

  /** When `rowSelection` is `single` and one row is selected, show the single-actions projection row. */
  readonly singleActionsToolbarVisible = input(true);

  /**
   * Placement for {@link singleActionsToolbarVisible} — same semantics as `bulkActionsPlacement`.
   */
  readonly singleActionsPlacement = input<BrightrailTableBulkActionsPlacement>('end');

  readonly ariaLabel = input<string | null>('Data table');

  readonly trackByField = input('id');
  readonly disabledRowIds = input<string[]>([]);

  /** Controlled selection (omit for internal selection state). */
  readonly selectedIds = input<string[] | undefined>(undefined);

  readonly emptyAction = output<void>();
  readonly globalFilterClick = output<void>();

  readonly sortChange = output<BrightrailTableSortEvent>();
  readonly pageChange = output<BrightrailTablePageEvent>();
  readonly selectionChange = output<string[]>();

  readonly inlineSave = output<BrightrailTableInlineSaveEvent>();
  readonly inlineCancel = output<void>();

  /** Enables inline editors driven by column `editable` / `editor` / `columnRole: 'actions'`. */
  readonly inlineEdit = input(false);
  readonly inlineEditMode = input<BrightrailTableInlineEditMode>('cell');
  /** When true (cell mode only), a pencil appears on hover instead of editing on plain cell click. */
  readonly inlineEditHoverReveal = input(false);

  /**
   * Optional cell templates keyed by `BrightrailTableColumn.cellTemplateKey`.
   * Context: `{ $implicit: row, column }`.
   */
  readonly cellTemplates = input<
    Record<string, TemplateRef<{ $implicit: BrightrailTableRow; column: BrightrailTableColumn }>>
  >({});

  readonly expandedIds = signal(new Set<string>());
  readonly internalPageIndex = signal(0);

  readonly internalSelection = signal(new Set<string>());
  readonly sortState = signal<{ columnId: string; direction: 'asc' | 'desc' } | null>(null);

  readonly editingCell = signal<{ rowId: string; columnId: string } | null>(null);
  readonly editingRowId = signal<string | null>(null);
  readonly inlineDraft = signal<Record<string, unknown>>({});
  readonly inlineErrors = signal<Record<string, string>>({});

  readonly surfaceClass = computed(
    () =>
      `br-table br-table__surface br-table--variant-${this.variant()} br-table--density-${this.density()}`,
  );

  readonly skeletonRepeat = computed(() => Array.from({ length: this.skeletonRows() }, (_, i) => i));

  readonly disabledSet = computed(() => new Set(this.disabledRowIds()));

  /**
   * When column controls are on but there is no expand/select column, render a narrow
   * leading column so the funnel aligns with the filter row (matches advanced-table spec).
   */
  readonly leadFunnelColumn = computed(
    () =>
      this.headerControlsEnabled() &&
      this.showGlobalFilterButton() &&
      !this.expandable() &&
      this.rowSelection() === 'none',
  );

  readonly detailColspan = computed(() => {
    let n = this.columns().length;
    if (this.expandable()) {
      n += 1;
    }
    if (this.rowSelection() !== 'none') {
      n += 1;
    }
    if (this.leadFunnelColumn()) {
      n += 1;
    }
    return Math.max(n, 1);
  });

  readonly headerControlsEnabled = computed(() => {
    const cols = this.columns();
    return cols.some((c) => this.columnControlKind(c) !== 'none');
  });

  /**
   * True when at least one visible column filter is applying (non-empty search/date,
   * or select value other than the cleared “All …” option). Ignores stray `filterState` keys.
   */
  readonly filterActive = computed(() => {
    const state = this.filterState();
    for (const col of this.columns()) {
      const kind = this.columnControlKind(col);
      if (kind === 'none') {
        continue;
      }
      const raw = state[col.id];
      if (raw === undefined || raw === null) {
        continue;
      }
      const v = String(raw).trim();
      if (v === '') {
        continue;
      }
      if (kind === 'select') {
        const opts = col.filterOptions ?? [];
        const chosen = opts.find((o) => String(o.value) === v);
        if (!chosen || String(chosen.value).trim() === '') {
          continue;
        }
      }
      return true;
    }
    return false;
  });

  readonly filteredRows = computed(() => {
    const rows = this.data();
    const cols = this.columns();
    const state = this.filterState();
    let out = rows;
    for (const col of cols) {
      const raw = state[col.id];
      if (raw === undefined || raw === null || String(raw).trim() === '') {
        continue;
      }
      const field = col.field;
      if (!field) {
        continue;
      }
      const v = String(raw).trim();
      if (col.dateFilter) {
        out = out.filter((row) => {
          const cell = String(row[field] ?? '');
          return cell.slice(0, 10) === v.slice(0, 10);
        });
      } else if (this.columnFilters() && col.filterOptions?.length) {
        out = out.filter((row) => String(row[field] ?? '') === v);
      } else if (this.columnSearch() && col.searchable) {
        out = out.filter((row) =>
          String(row[field] ?? '')
            .toLowerCase()
            .includes(v.toLowerCase()),
        );
      }
    }
    return out;
  });

  readonly pageSizeStr = computed(() => String(this.pageSize()));

  pageSizeOptionStr(opt: number): string {
    return String(opt);
  }

  readonly sortedRows = computed(() => {
    const rows = [...this.filteredRows()];
    const sort = this.sortState();
    if (!this.sorting() || !sort) {
      return rows;
    }
    const col = this.columns().find((c) => c.id === sort.columnId);
    const field = col?.field;
    if (!field) {
      return rows;
    }
    const dir = sort.direction === 'asc' ? 1 : -1;
    return rows.sort((a, b) => compareUnknown(a[field], b[field]) * dir);
  });

  readonly totalRows = computed(() => this.sortedRows().length);

  readonly pageSize = computed(() => this.pagination()?.pageSize ?? 10);

  readonly pageSizeOptionsResolved = computed(() => {
    const opts = this.pagination()?.pageSizeOptions;
    if (opts?.length) {
      return opts;
    }
    return [5, 10, 25];
  });

  readonly pageCount = computed(() => {
    const size = this.pageSize();
    const total = this.totalRows();
    return Math.max(1, Math.ceil(total / Math.max(1, size)));
  });

  readonly effectivePageIndex = computed(() => {
    const pag = this.pagination();
    if (!pag) {
      return 0;
    }
    if (pag.pageIndex !== undefined) {
      return clamp(pag.pageIndex, 0, this.pageCount() - 1);
    }
    return clamp(this.internalPageIndex(), 0, this.pageCount() - 1);
  });

  readonly pagedRows = computed(() => {
    const pag = this.pagination();
    const rows = this.sortedRows();
    if (!pag) {
      return rows;
    }
    const size = Math.max(1, pag.pageSize);
    const page = this.effectivePageIndex();
    const start = page * size;
    return rows.slice(start, start + size);
  });

  readonly paginationSummaryText = computed(() => {
    const pag = this.pagination();
    if (!pag) {
      return '';
    }
    const total = this.totalRows();
    if (!total) {
      return 'Showing 0 results';
    }
    const size = Math.max(1, pag.pageSize);
    const page = this.effectivePageIndex();
    const start = page * size + 1;
    const end = Math.min(total, (page + 1) * size);
    return `Showing ${start} to ${end} of ${total} results`;
  });

  readonly effectiveSelectedIds = computed(() => {
    const external = this.selectedIds();
    if (external !== undefined) {
      return new Set(external);
    }
    return this.internalSelection();
  });

  readonly selectionCount = computed(() => this.effectiveSelectedIds().size);

  readonly pageSelectAllChecked = computed(() => {
    if (this.rowSelection() !== 'multiple') {
      return false;
    }
    const ids = this.pageRowIds().filter((id) => id && !this.disabledSet().has(id));
    if (!ids.length) {
      return false;
    }
    const sel = this.effectiveSelectedIds();
    return ids.every((id) => sel.has(id));
  });

  readonly pageSelectAllIndeterminate = computed(() => {
    if (this.rowSelection() !== 'multiple') {
      return false;
    }
    const ids = this.pageRowIds().filter((id) => id && !this.disabledSet().has(id));
    if (!ids.length) {
      return false;
    }
    const sel = this.effectiveSelectedIds();
    const selectedCount = ids.filter((id) => sel.has(id)).length;
    return selectedCount > 0 && selectedCount < ids.length;
  });

  readonly pageNumberTiles = computed(() => buildPageTiles(this.effectivePageIndex(), this.pageCount()));

  readonly ariaRowCount = computed(() => this.pagedRows().length);

  trackRow(index: number, row: BrightrailTableRow): string {
    const id = brightrailTableResolveRowId(row, this.trackByField());
    return id || `idx-${index}`;
  }

  rowLabel(row: BrightrailTableRow): string {
    const id = brightrailTableResolveRowId(row, this.trackByField());
    return id || 'row';
  }

  columnControlKind(col: BrightrailTableColumn): 'none' | 'search' | 'select' | 'date' {
    if (!col.field) {
      return 'none';
    }
    if (col.dateFilter) {
      return 'date';
    }
    if (this.columnFilters() && col.filterOptions?.length) {
      return 'select';
    }
    if (this.columnSearch() && col.searchable) {
      return 'search';
    }
    return 'none';
  }

  filterValue(columnId: string): string {
    return this.filterState()[columnId] ?? '';
  }

  filterPlaceholder(col: BrightrailTableColumn): string {
    return col.filterPlaceholder ?? `Search ${col.header.toLowerCase()}`;
  }

  patchFilter(columnId: string, value: string): void {
    this.filterState.update((s) => ({ ...s, [columnId]: value }));
    this.afterFilterChanged();
  }

  clearFilters(): void {
    this.filterState.set({});
    this.afterFilterChanged();
  }

  onGlobalFilterButtonClick(): void {
    this.clearFilters();
    this.globalFilterClick.emit();
  }

  detailContext(row: BrightrailTableRow): { $implicit: BrightrailTableRow } {
    return { $implicit: row };
  }

  isDisabled(row: BrightrailTableRow): boolean {
    const id = brightrailTableResolveRowId(row, this.trackByField());
    return !!id && this.disabledSet().has(id);
  }

  isSelected(row: BrightrailTableRow): boolean {
    const id = brightrailTableResolveRowId(row, this.trackByField());
    return !!id && this.effectiveSelectedIds().has(id);
  }

  isExpandableRow(row: BrightrailTableRow): boolean {
    if (!this.expandable()) {
      return false;
    }
    const flag = row['_expandable'];
    if (flag === false) {
      return false;
    }
    return true;
  }

  isExpanded(row: BrightrailTableRow): boolean {
    const id = brightrailTableResolveRowId(row, this.trackByField());
    return !!id && this.expandedIds().has(id);
  }

  ariaSortFor(columnId: string): 'ascending' | 'descending' | 'none' | null {
    const sort = this.sortState();
    if (!this.sorting() || !sort || sort.columnId !== columnId) {
      return 'none';
    }
    return sort.direction === 'asc' ? 'ascending' : 'descending';
  }

  sortActive(columnId: string, direction: 'asc' | 'desc'): boolean {
    const sort = this.sortState();
    return !!sort && sort.columnId === columnId && sort.direction === direction;
  }

  onSortClick(col: BrightrailTableColumn): void {
    if (!this.sorting() || col.sortable === false || !col.field) {
      return;
    }
    const current = this.sortState();
    let nextDir: 'asc' | 'desc' = 'asc';
    if (current?.columnId === col.id) {
      nextDir = current.direction === 'asc' ? 'desc' : 'asc';
    }
    this.sortState.set({ columnId: col.id, direction: nextDir });
    this.sortChange.emit({ columnId: col.id, direction: nextDir });
  }

  onToggleExpand(row: BrightrailTableRow): void {
    if (this.isDisabled(row)) {
      return;
    }
    const id = brightrailTableResolveRowId(row, this.trackByField());
    if (!id) {
      return;
    }
    const next = new Set(this.expandedIds());
    if (next.has(id)) {
      next.delete(id);
    } else {
      next.add(id);
    }
    this.expandedIds.set(next);
  }

  onToggleRowCheckbox(row: BrightrailTableRow, event: Event): void {
    if (this.isDisabled(row)) {
      return;
    }
    const checked = (event.target as HTMLInputElement | null)?.checked ?? false;
    const id = brightrailTableResolveRowId(row, this.trackByField());
    if (!id) {
      return;
    }
    this.applySelectionToggle(id, checked);
  }

  selectSingle(row: BrightrailTableRow): void {
    if (this.rowSelection() !== 'single' || this.isDisabled(row)) {
      return;
    }
    const id = brightrailTableResolveRowId(row, this.trackByField());
    if (!id) {
      return;
    }
    if (this.isSelected(row)) {
      return;
    }
    this.commitSelection(new Set([id]));
  }

  /** Uses `click` (not `change`) for reliable cross-browser single selection; stops row bubbling. */
  onSingleRadioClick(row: BrightrailTableRow, event: MouseEvent): void {
    event.stopPropagation();
    this.selectSingle(row);
  }

  /**
   * Activates row selection from a click on the row. Direct clicks on inputs/buttons are ignored
   * so checkbox/radio handlers do not double-toggle; hits on the select column outside the control
   * still activate (padding no longer dead).
   */
  onRowClick(row: BrightrailTableRow, event: MouseEvent): void {
    const mode = this.rowSelection();
    if (mode === 'none') {
      return;
    }
    if (this.isDisabled(row)) {
      return;
    }
    if (this.shouldIgnoreRowSelectionClick(event.target)) {
      return;
    }
    const id = brightrailTableResolveRowId(row, this.trackByField());
    if (!id) {
      return;
    }
    if (mode === 'single') {
      this.selectSingle(row);
    } else {
      this.applySelectionToggle(id, !this.isSelected(row));
    }
  }

  private shouldIgnoreRowSelectionClick(target: EventTarget | null): boolean {
    const el = target as HTMLElement | null;
    if (!el?.closest) {
      return false;
    }
    return !!el.closest(
      'button, input, select, textarea, a[href], .br-table__td--expand, .br-table__inline-editor, .br-table__cell-hover-edit',
    );
  }

  isActionsColumn(col: BrightrailTableColumn): boolean {
    return col.columnRole === 'actions';
  }

  isRowBeingEdited(row: BrightrailTableRow): boolean {
    if (!this.inlineEdit() || this.inlineEditMode() !== 'row') {
      return false;
    }
    const id = brightrailTableResolveRowId(row, this.trackByField());
    return !!id && this.editingRowId() === id;
  }

  shouldShowCellEditor(row: BrightrailTableRow, col: BrightrailTableColumn): boolean {
    if (!this.inlineEdit() || this.isActionsColumn(col) || !col.editable || !col.field) {
      return false;
    }
    const rowId = brightrailTableResolveRowId(row, this.trackByField());
    if (!rowId) {
      return false;
    }
    const mode = this.inlineEditMode();
    if (mode === 'cell') {
      const cur = this.editingCell();
      return !!cur && cur.rowId === rowId && cur.columnId === col.id;
    }
    return this.editingRowId() === rowId;
  }

  cellInlineError(row: BrightrailTableRow, col: BrightrailTableColumn): string | null {
    const rowId = brightrailTableResolveRowId(row, this.trackByField());
    if (!rowId) {
      return null;
    }
    return this.inlineErrors()[`${rowId}::${col.id}`] ?? null;
  }

  draftText(col: BrightrailTableColumn): string {
    const f = col.field;
    if (!f) {
      return '';
    }
    const raw = this.inlineDraft()[f];
    if (raw === null || raw === undefined) {
      return '';
    }
    return String(raw);
  }

  patchDraftField(col: BrightrailTableColumn, value: string): void {
    const f = col.field;
    if (!f) {
      return;
    }
    this.inlineDraft.update((d) => ({ ...d, [f]: value }));
  }

  beginCellEdit(row: BrightrailTableRow, col: BrightrailTableColumn): void {
    if (!this.inlineEdit() || this.inlineEditMode() !== 'cell' || !col.editable || !col.field) {
      return;
    }
    const rowId = brightrailTableResolveRowId(row, this.trackByField());
    if (!rowId) {
      return;
    }
    this.discardInlineEdit();
    this.editingCell.set({ rowId, columnId: col.id });
    this.inlineDraft.set({ [col.field]: row[col.field] ?? '' });
  }

  beginRowEdit(row: BrightrailTableRow): void {
    if (!this.inlineEdit() || this.inlineEditMode() !== 'row') {
      return;
    }
    const rowId = brightrailTableResolveRowId(row, this.trackByField());
    if (!rowId) {
      return;
    }
    this.discardInlineEdit();
    this.editingRowId.set(rowId);
    const draft: Record<string, unknown> = {};
    for (const c of this.columns()) {
      if (this.isActionsColumn(c) || !c.editable || !c.field) {
        continue;
      }
      draft[c.field] = row[c.field] ?? '';
    }
    this.inlineDraft.set(draft);
  }

  cancelInlineEdit(): void {
    const had = this.editingCell() !== null || this.editingRowId() !== null;
    this.discardInlineEdit();
    if (had) {
      this.inlineCancel.emit();
    }
  }

  /** Clears edit state without emitting {@link inlineCancel} (used when swapping edits or after save). */
  discardInlineEdit(): void {
    this.editingCell.set(null);
    this.editingRowId.set(null);
    this.inlineDraft.set({});
    this.inlineErrors.set({});
  }

  commitInlineSave(row: BrightrailTableRow): void {
    if (!this.inlineEdit()) {
      return;
    }
    const rowId = brightrailTableResolveRowId(row, this.trackByField());
    if (!rowId) {
      return;
    }
    const mode = this.inlineEditMode();
    const draft = this.inlineDraft();
    const errors: Record<string, string> = {};

    if (mode === 'cell') {
      const cell = this.editingCell();
      if (!cell || cell.rowId !== rowId) {
        return;
      }
      const col = this.columns().find((c) => c.id === cell.columnId);
      if (!col?.field) {
        return;
      }
      const raw = draft[col.field];
      if (col.required && String(raw ?? '').trim() === '') {
        errors[`${rowId}::${col.id}`] = `${col.header} is required`;
        this.inlineErrors.set(errors);
        return;
      }
      const changes: Record<string, unknown> = {
        [col.field]: this.normalizeDraftValue(col, raw),
      };
      this.inlineSave.emit({ rowId, changes });
      this.discardInlineEdit();
      return;
    }

    if (this.editingRowId() !== rowId) {
      return;
    }
    for (const c of this.columns()) {
      if (!c.editable || !c.field) {
        continue;
      }
      const raw = draft[c.field];
      if (c.required && String(raw ?? '').trim() === '') {
        errors[`${rowId}::${c.id}`] = `${c.header} is required`;
      }
    }
    if (Object.keys(errors).length) {
      this.inlineErrors.set(errors);
      return;
    }
    const changes: Record<string, unknown> = {};
    for (const c of this.columns()) {
      if (!c.editable || !c.field) {
        continue;
      }
      changes[c.field] = this.normalizeDraftValue(c, draft[c.field]);
    }
    this.inlineSave.emit({ rowId, changes });
    this.discardInlineEdit();
  }

  onInlineInputKeydown(ev: KeyboardEvent, row: BrightrailTableRow): void {
    if (!this.inlineEdit()) {
      return;
    }
    if (ev.key === 'Escape') {
      ev.preventDefault();
      this.cancelInlineEdit();
      return;
    }
    if (ev.key === 'Enter') {
      const tag = (ev.target as HTMLElement).tagName;
      if (tag === 'TEXTAREA') {
        return;
      }
      ev.preventDefault();
      this.commitInlineSave(row);
    }
  }

  onEditableCellClick(row: BrightrailTableRow, col: BrightrailTableColumn, event: MouseEvent): void {
    if (
      !this.inlineEdit() ||
      this.inlineEditMode() !== 'cell' ||
      !col.editable ||
      this.isActionsColumn(col)
    ) {
      return;
    }
    if (this.inlineEditHoverReveal()) {
      return;
    }
    const target = event.target as HTMLElement;
    if (target.closest('button, input, select, textarea')) {
      return;
    }
    event.stopPropagation();
    this.beginCellEdit(row, col);
  }

  templateForColumn(col: BrightrailTableColumn):
    | TemplateRef<{ $implicit: BrightrailTableRow; column: BrightrailTableColumn }>
    | null {
    const key = col.cellTemplateKey;
    if (!key) {
      return null;
    }
    return this.cellTemplates()[key] ?? null;
  }

  private normalizeDraftValue(col: BrightrailTableColumn, raw: unknown): unknown {
    const ed = col.editor ?? 'text';
    if (ed === 'number') {
      if (raw === '' || raw === null || raw === undefined) {
        return '';
      }
      const n = typeof raw === 'number' ? raw : Number(raw);
      return Number.isFinite(n) ? n : raw;
    }
    return raw;
  }

  onToggleSelectAllPage(event: Event): void {
    if (this.rowSelection() !== 'multiple') {
      return;
    }
    const checked = (event.target as HTMLInputElement | null)?.checked ?? false;
    const ids = this.pageRowIds().filter((id) => id && !this.disabledSet().has(id));
    const base =
      this.selectedIds() !== undefined
        ? new Set(this.effectiveSelectedIds())
        : new Set(this.internalSelection());
    if (checked) {
      for (const id of ids) {
        base.add(id);
      }
    } else {
      for (const id of ids) {
        base.delete(id);
      }
    }
    this.commitSelection(base);
  }

  canPrev(): boolean {
    return !!this.pagination() && this.effectivePageIndex() > 0;
  }

  canNext(): boolean {
    return !!this.pagination() && this.effectivePageIndex() < this.pageCount() - 1;
  }

  goPrev(): void {
    if (!this.canPrev()) {
      return;
    }
    this.goToPage(this.effectivePageIndex() - 1);
  }

  goNext(): void {
    if (!this.canNext()) {
      return;
    }
    this.goToPage(this.effectivePageIndex() + 1);
  }

  goToPage(pageIndex: number): void {
    const pag = this.pagination();
    if (!pag) {
      return;
    }
    const clamped = clamp(pageIndex, 0, this.pageCount() - 1);
    if (pag.pageIndex === undefined) {
      this.internalPageIndex.set(clamped);
    }
    this.pageChange.emit({ pageIndex: clamped, pageSize: pag.pageSize });
  }

  onPageSizeChange(event: Event): void {
    const pag = this.pagination();
    if (!pag) {
      return;
    }
    const value = Number((event.target as HTMLSelectElement).value);
    if (!Number.isFinite(value) || value <= 0) {
      return;
    }
    const nextIndex = 0;
    if (pag.pageIndex === undefined) {
      this.internalPageIndex.set(nextIndex);
    }
    this.pageChange.emit({ pageIndex: nextIndex, pageSize: value });
  }

  formatText(row: BrightrailTableRow, col: BrightrailTableColumn): string {
    if (!col.field) {
      return '';
    }
    return formatUnknown(row[col.field]);
  }

  formatField(row: BrightrailTableRow, field: string): string {
    return formatUnknown(row[field]);
  }

  formatCurrencyCell(row: BrightrailTableRow, col: BrightrailTableColumn): string {
    if (!col.field) {
      return '';
    }
    const raw = row[col.field];
    const amount = typeof raw === 'number' ? raw : Number(raw);
    if (!Number.isFinite(amount)) {
      return '';
    }
    const code = col.currencyCode ?? 'USD';
    try {
      return new Intl.NumberFormat(undefined, { style: 'currency', currency: code }).format(amount);
    } catch {
      return String(amount);
    }
  }

  formatPercentChange(row: BrightrailTableRow, col: BrightrailTableColumn): string {
    if (!col.field) {
      return '';
    }
    const raw = row[col.field];
    const value = typeof raw === 'number' ? raw : Number(raw);
    if (!Number.isFinite(value)) {
      return '';
    }
    const rounded = Math.round(value * 10) / 10;
    const sign = rounded > 0 ? '+' : '';
    return `${sign}${rounded}%`;
  }

  percentClass(row: BrightrailTableRow, col: BrightrailTableColumn): string {
    if (!col.field) {
      return 'br-table__pct';
    }
    const raw = row[col.field];
    const value = typeof raw === 'number' ? raw : Number(raw);
    if (!Number.isFinite(value) || value === 0) {
      return 'br-table__pct';
    }
    return value > 0 ? 'br-table__pct br-table__pct--up' : 'br-table__pct br-table__pct--down';
  }

  badgeTone(row: BrightrailTableRow, col: BrightrailTableColumn): BrightrailTableBadgeTone {
    if (col.badgeTone) {
      return col.badgeTone;
    }
    const text = this.formatText(row, col).trim().toLowerCase();
    return inferToneFromLabel(text);
  }

  badgeClass(row: BrightrailTableRow, col: BrightrailTableColumn): string {
    const tone = this.badgeTone(row, col);
    return `br-table__badge br-table__badge--${tone}`;
  }

  avatarInitials(row: BrightrailTableRow, col: BrightrailTableColumn): string {
    const name = this.formatText(row, col);
    const parts = name.split(/\s+/).filter(Boolean);
    if (!parts.length) {
      return '?';
    }
    if (parts.length === 1) {
      return parts[0].slice(0, 2).toUpperCase();
    }
    return `${parts[0][0] ?? ''}${parts[parts.length - 1][0] ?? ''}`.toUpperCase();
  }

  trackPageTile(_index: number, p: PageTile): string {
    return p.kind === 'ellipsis' ? `e-${p.label}` : `p-${p.page}`;
  }

  private afterFilterChanged(): void {
    const pag = this.pagination();
    if (pag && pag.pageIndex === undefined) {
      this.internalPageIndex.set(0);
    }
  }

  private pageRowIds(): string[] {
    return this.pagedRows().map((r) => brightrailTableResolveRowId(r, this.trackByField()));
  }

  private applySelectionToggle(id: string, checked: boolean): void {
    const mode = this.rowSelection();
    if (mode !== 'multiple') {
      return;
    }
    const next =
      this.selectedIds() !== undefined
        ? new Set(this.effectiveSelectedIds())
        : new Set(this.internalSelection());
    if (checked) {
      next.add(id);
    } else {
      next.delete(id);
    }
    this.commitSelection(next);
  }

  private commitSelection(next: Set<string>): void {
    if (this.selectedIds() === undefined) {
      this.internalSelection.set(next);
    }
    this.selectionChange.emit([...next]);
  }
}

function compareUnknown(a: unknown, b: unknown): number {
  if (Object.is(a, b)) {
    return 0;
  }
  if (a === null || a === undefined) {
    return -1;
  }
  if (b === null || b === undefined) {
    return 1;
  }
  if (typeof a === 'number' && typeof b === 'number') {
    return a - b;
  }
  return String(a).localeCompare(String(b), undefined, { numeric: true, sensitivity: 'base' });
}

function formatUnknown(value: unknown): string {
  if (value === null || value === undefined) {
    return '';
  }
  if (value instanceof Date) {
    return value.toISOString().slice(0, 10);
  }
  return String(value);
}

function clamp(value: number, min: number, max: number): number {
  return Math.min(max, Math.max(min, value));
}

function inferToneFromLabel(label: string): BrightrailTableBadgeTone {
  if (!label) {
    return 'neutral';
  }
  if (
    ['active', 'approved', 'complete', 'completed', 'in stock', 'success', 'published'].some((k) =>
      label.includes(k),
    )
  ) {
    return 'success';
  }
  if (
    ['pending', 'in-progress', 'in progress', 'warning', 'low stock', 'review'].some((k) =>
      label.includes(k),
    )
  ) {
    return 'warning';
  }
  if (
    ['inactive', 'disabled', 'draft', 'queued', 'scheduled'].some((k) => label.includes(k))
  ) {
    return 'neutral';
  }
  if (['rejected', 'error', 'failed', 'out of stock', 'deleted'].some((k) => label.includes(k))) {
    return 'danger';
  }
  return 'neutral';
}

function buildPageTiles(current: number, pageCount: number): PageTile[] {
  if (pageCount <= 1) {
    return [{ kind: 'page', page: 0 }];
  }

  const indices = new Set<number>([0, pageCount - 1, current, current - 1, current + 1]);
  const sorted = [...indices].filter((i) => i >= 0 && i < pageCount).sort((a, b) => a - b);

  const tiles: PageTile[] = [];
  let prev = -2;
  for (const idx of sorted) {
    if (prev >= 0 && idx - prev > 1) {
      tiles.push({ kind: 'ellipsis', label: `gap-${prev}-${idx}` });
    }
    tiles.push({ kind: 'page', page: idx });
    prev = idx;
  }
  return tiles;
}
