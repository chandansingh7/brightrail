import { FormsModule } from '@angular/forms';
import {
  ChangeDetectionStrategy,
  Component,
  computed,
  inject,
  model,
  signal,
  TemplateRef,
  viewChild,
} from '@angular/core';
import type { WritableSignal } from '@angular/core';

import { PlaygroundPreviewHeaderComponent } from '../shared/playground-preview-header.component';
import {
  injectPlaygroundA11yPreviewMode,
  initPlaygroundA11yPreview,
} from '../shared/playground-a11y-preview.utils';
import {
  restorePlaygroundState,
  snapshotPlaygroundState,
} from '../shared/playground-a11y-state.utils';

import type {
  BrightrailTableBadgeTone,
  BrightrailTableBulkActionsPlacement,
  BrightrailTableColumn,
  BrightrailTableDensity,
  BrightrailTableInlineSaveEvent,
  BrightrailTablePageEvent,
  BrightrailTablePaginationConfig,
  BrightrailTableRow,
  BrightrailTableRowSelectionMode,
  BrightrailTableVariant,
} from 'brightrail';
import {
  BrightrailModalBodyComponent,
  BrightrailModalComponent,
  BrightrailModalFooterComponent,
  BrightrailModalHeaderComponent,
  BrightrailModalTitleDirective,
  BrightrailTableBulkActionsComponent,
  BrightrailTableComponent,
  BrightrailTableSingleActionsComponent,
  BrightrailTableToolbarActionsComponent,
  BrightrailTableToolbarComponent,
} from 'brightrail';

import { PlaygroundThemeId, PlaygroundThemeService } from '../playground-theme.service';
import {
  ADVANCED_USER_COLUMNS,
  buildDemoUsers,
  PLAYGROUND_ROLE_FILTER_OPTIONS,
  PLAYGROUND_STATUS_FILTER_OPTIONS,
  PLAYGROUND_USER_COLUMNS,
  PLAYGROUND_USER_COLUMNS_FIVE,
  TABLE_APPROVAL_COLUMNS,
  TABLE_APPROVAL_ROWS,
  TABLE_AUDIT_COLUMNS,
  TABLE_AUDIT_ROWS,
  TABLE_ENTERPRISE_FINANCE_COLUMNS,
  TABLE_ENTERPRISE_FINANCE_ROWS,
  TABLE_INVENTORY_COLUMNS,
  TABLE_INVENTORY_ROWS,
  tablePaginationFive,
} from './table-demo.datasets';
import {
  TP_INLINE_BULK_COLS,
  TP_INLINE_CELL_COLS,
  TP_INLINE_QTY_COLS,
  TP_INLINE_QTY_ROWS,
  TP_INLINE_ROW_COLS,
  TP_INLINE_VALID_COLS,
  TP_INLINE_VALID_ROWS,
  tpCloneUsers,
  tpMergeInlineRows,
} from './table-inline-playground.presets';

/** Recipes that bind `[inlineEdit]` and `(inlineSave)` (library merges via playground signals). */
const PG_INLINE_SAVE_RECIPES: TablePlaygroundRecipe[] = [
  'inlineCell',
  'inlineRow',
  'inlineQty',
  'inlineValidate',
];

/** Recipes that show `<brightrail-table-bulk-actions>` with Funfair-only handlers. */
const PG_BULK_BAR_RECIPES: TablePlaygroundRecipe[] = ['advancedMulti', 'inlineBulk'];

export type CodeTabId = 'html' | 'ts' | 'scss';

export type TablePlaygroundRecipe =
  | 'dataTable'
  | 'teamRoster'
  | 'auditFeed'
  | 'financeBoard'
  | 'approvalQueue'
  | 'inventoryPulse'
  | 'stickyDigest'
  | 'emptyCanvas'
  | 'loadingPulse'
  | 'advancedSimple'
  | 'advancedSingle'
  | 'advancedMulti'
  | 'inlineCell'
  | 'inlineRow'
  | 'inlineQty'
  | 'inlineValidate'
  | 'inlineBulk';

import { createPlaygroundPreviewFx, playgroundFxHtml, playgroundFxTs } from '../shared/playground-fx.util';
import { PlaygroundFxSettingsComponent } from '../shared/playground-fx-settings.component';
@Component({
  selector: 'app-table-playground',
  standalone: true,
  imports: [
    PlaygroundPreviewHeaderComponent,
    FormsModule,
    BrightrailModalBodyComponent,
    BrightrailModalComponent,
    BrightrailModalFooterComponent,
    BrightrailModalHeaderComponent,
    BrightrailModalTitleDirective,
    BrightrailTableComponent,
    BrightrailTableToolbarComponent,
    BrightrailTableToolbarActionsComponent,
    BrightrailTableBulkActionsComponent,
    BrightrailTableSingleActionsComponent, PlaygroundFxSettingsComponent],
  templateUrl: './table-playground.component.html',
  styleUrl: './table-playground.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TablePlaygroundComponent {
  readonly previewOnly = injectPlaygroundA11yPreviewMode();
  readonly a11yPreviewState = computed(() =>
    snapshotPlaygroundState({
      previewRecipe: () => this.previewRecipe(),
      variant: () => this.variant(),
      density: () => this.density(),
      sortingEnabled: () => this.sortingEnabled(),
      paginationEnabled: () => this.paginationEnabled(),
      rowSelection: () => this.rowSelection(),
      expandableEnabled: () => this.expandableEnabled(),
      stickyHeader: () => this.stickyHeader(),
      loadingEnabled: () => this.loadingEnabled(),
      showToolbar: () => this.showToolbar(),
      previewTheme: () => this.previewTheme(),
      playgroundColumnSearch: () => this.playgroundColumnSearch(),
      playgroundColumnFilters: () => this.playgroundColumnFilters(),
      playgroundShowGlobalFilterButton: () => this.playgroundShowGlobalFilterButton(),
      advancedAvatarPresentation: () => this.advancedAvatarPresentation(),
      advancedStatusBadgeTone: () => this.advancedStatusBadgeTone(),
      advancedRolePresentation: () => this.advancedRolePresentation(),
      bulkActionsPlacement: () => this.bulkActionsPlacement(),
      singleActionsPlacement: () => this.singleActionsPlacement(),
      advancedSingleSelectedIds: () => this.advancedSingleSelectedIds(),
      advancedMultiRows: () => this.advancedMultiRows(),
      advancedMultiSelectedIds: () => this.advancedMultiSelectedIds(),
      bulkEditStatusDraft: () => this.bulkEditStatusDraft(),
      inlineCellRows: () => this.inlineCellRows(),
      inlineRowRows: () => this.inlineRowRows(),
      inlineQtyRows: () => this.inlineQtyRows(),
      inlineValidRows: () => this.inlineValidRows(),
      inlineBulkRows: () => this.inlineBulkRows(),
      inlineBulkSelectedIds: () => this.inlineBulkSelectedIds(),
      editModalOpen: () => this.editModalOpen(),
      editNameDraft: () => this.editNameDraft(),
      pagination: () => this.pagination(),
      advancedFilter: () => this.advancedFilter(),
    }),
  );

  private restoreA11yPreviewState(state: unknown): void {
    if (!state || typeof state !== 'object') {
      return;
    }
    const snapshot = state as Record<string, unknown>;
    if (typeof snapshot['previewRecipe'] === 'string') {
      this.previewRecipe.set(snapshot['previewRecipe'] as TablePlaygroundRecipe);
      this.applyRecipeDefaults(snapshot['previewRecipe'] as TablePlaygroundRecipe);
      return;
    }
    restorePlaygroundState(state, {
      previewRecipe: this.previewRecipe as WritableSignal<unknown>,
      variant: this.variant as WritableSignal<unknown>,
      density: this.density as WritableSignal<unknown>,
      sortingEnabled: this.sortingEnabled as WritableSignal<unknown>,
      paginationEnabled: this.paginationEnabled as WritableSignal<unknown>,
      rowSelection: this.rowSelection as WritableSignal<unknown>,
      expandableEnabled: this.expandableEnabled as WritableSignal<unknown>,
      stickyHeader: this.stickyHeader as WritableSignal<unknown>,
      loadingEnabled: this.loadingEnabled as WritableSignal<unknown>,
      showToolbar: this.showToolbar as WritableSignal<unknown>,
      previewTheme: this.previewTheme as WritableSignal<unknown>,
      playgroundColumnSearch: this.playgroundColumnSearch as WritableSignal<unknown>,
      playgroundColumnFilters: this.playgroundColumnFilters as WritableSignal<unknown>,
      playgroundShowGlobalFilterButton: this.playgroundShowGlobalFilterButton as WritableSignal<unknown>,
      advancedAvatarPresentation: this.advancedAvatarPresentation as WritableSignal<unknown>,
      advancedStatusBadgeTone: this.advancedStatusBadgeTone as WritableSignal<unknown>,
      advancedRolePresentation: this.advancedRolePresentation as WritableSignal<unknown>,
      bulkActionsPlacement: this.bulkActionsPlacement as WritableSignal<unknown>,
      singleActionsPlacement: this.singleActionsPlacement as WritableSignal<unknown>,
      advancedSingleSelectedIds: this.advancedSingleSelectedIds as WritableSignal<unknown>,
      advancedMultiRows: this.advancedMultiRows as WritableSignal<unknown>,
      advancedMultiSelectedIds: this.advancedMultiSelectedIds as WritableSignal<unknown>,
      bulkEditStatusDraft: this.bulkEditStatusDraft as WritableSignal<unknown>,
      inlineCellRows: this.inlineCellRows as WritableSignal<unknown>,
      inlineRowRows: this.inlineRowRows as WritableSignal<unknown>,
      inlineQtyRows: this.inlineQtyRows as WritableSignal<unknown>,
      inlineValidRows: this.inlineValidRows as WritableSignal<unknown>,
      inlineBulkRows: this.inlineBulkRows as WritableSignal<unknown>,
      inlineBulkSelectedIds: this.inlineBulkSelectedIds as WritableSignal<unknown>,
      editModalOpen: this.editModalOpen as WritableSignal<unknown>,
      editNameDraft: this.editNameDraft as WritableSignal<unknown>,
      pagination: this.pagination as WritableSignal<unknown>,
      advancedFilter: this.advancedFilter as WritableSignal<unknown>,
    });
  }

  readonly themeService = inject(PlaygroundThemeService);
  private readonly _playgroundFx = createPlaygroundPreviewFx();
  readonly previewFx = this._playgroundFx.previewFx;
  readonly resolvedFxShell = this._playgroundFx.resolvedFxShell;

  constructor() {
    initPlaygroundA11yPreview('table', this.previewOnly, (state) => this.restoreA11yPreviewState(state));
    this.previewTheme.set(this.themeService.theme());
  }

  readonly recipeGroups = [
    'Basics',
    'Recipes',
    'Enterprise',
    'Advanced',
    'Column controls',
    'Inline edit',
  ] as const;

  readonly recipeOptions: { value: TablePlaygroundRecipe; label: string; group: string }[] = [
    { value: 'dataTable', label: 'Data table', group: 'Basics' },
    { value: 'teamRoster', label: 'Compact roster', group: 'Basics' },
    { value: 'auditFeed', label: 'Audit log', group: 'Recipes' },
    { value: 'financeBoard', label: 'Financial deltas', group: 'Recipes' },
    { value: 'approvalQueue', label: 'Approval queue', group: 'Enterprise' },
    { value: 'inventoryPulse', label: 'Inventory status', group: 'Enterprise' },
    { value: 'stickyDigest', label: 'Sticky + pagination', group: 'Advanced' },
    { value: 'emptyCanvas', label: 'Empty state', group: 'Advanced' },
    { value: 'loadingPulse', label: 'Loading skeleton', group: 'Advanced' },
    { value: 'advancedSimple', label: 'Advanced · simple', group: 'Column controls' },
    { value: 'advancedSingle', label: 'Advanced · single select', group: 'Column controls' },
    { value: 'advancedMulti', label: 'Advanced · multi select', group: 'Column controls' },
    { value: 'inlineCell', label: 'Inline · cell edit', group: 'Inline edit' },
    { value: 'inlineRow', label: 'Inline · row + selects', group: 'Inline edit' },
    { value: 'inlineQty', label: 'Inline · numbers & dates', group: 'Inline edit' },
    { value: 'inlineValidate', label: 'Inline · validation', group: 'Inline edit' },
    { value: 'inlineBulk', label: 'Inline · bulk edit bar', group: 'Inline edit' },
  ];

  readonly variantOptions: BrightrailTableVariant[] = ['basic', 'bordered', 'striped'];
  readonly densityOptions: { value: BrightrailTableDensity; label: string }[] = [
    { value: 'compact', label: 'Compact' },
    { value: 'medium', label: 'Medium' },
    { value: 'comfortable', label: 'Comfortable' },
  ];
  readonly selectionOptions: { value: BrightrailTableRowSelectionMode; label: string }[] = [
    { value: 'none', label: 'None' },
    { value: 'single', label: 'Single' },
    { value: 'multiple', label: 'Multiple' },
  ];
  readonly themeRowOptions: { id: PlaygroundThemeId; label: string }[] = [
    { id: 'light', label: 'Material light' },
    { id: 'dark', label: 'Material dark' },
  ];

  readonly selectedRecipeGroup = signal<string>('Basics');
  readonly previewRecipe = signal<TablePlaygroundRecipe>('dataTable');

  readonly variant = signal<BrightrailTableVariant>('basic');
  readonly density = signal<BrightrailTableDensity>('comfortable');
  readonly sortingEnabled = signal(true);
  readonly paginationEnabled = signal(true);
  readonly rowSelection = signal<BrightrailTableRowSelectionMode>('none');
  readonly expandableEnabled = signal(false);
  readonly stickyHeader = signal(false);
  readonly loadingEnabled = signal(false);
  readonly showToolbar = signal(true);
  readonly previewTheme = signal<PlaygroundThemeId>('light');

  /** Inline header search inputs (`BrightrailTableColumn.searchable`). */
  readonly playgroundColumnSearch = signal(false);
  /** Per-column dropdown filters (`BrightrailTableColumn.filterOptions`). */
  readonly playgroundColumnFilters = signal(false);
  /** Funnel icon in the header-control gutter that clears filters. */
  readonly playgroundShowGlobalFilterButton = signal(true);

  /**
   * Column controls (advanced scenarios): how the Name column renders its avatar stack.
   * Maps to `BrightrailTableColumn`: subtitle line, `avatarIconOnly`, etc.
   */
  readonly advancedAvatarPresentation = signal<'full' | 'nameOnly' | 'iconOnly'>('full');

  /** Column controls: fixed semantic tone for the Status badge (`badgeTone`), or auto from cell text. */
  readonly advancedStatusBadgeTone = signal<BrightrailTableBadgeTone | 'auto'>('auto');

  /** Column controls: Role column uses plain text or `format: 'badge'`. */
  readonly advancedRolePresentation = signal<'text' | 'badge'>('text');

  /** Advanced · multi-select: where bulk action buttons sit in the selection bar. */
  readonly bulkActionsPlacement = signal<BrightrailTableBulkActionsPlacement>('end');

  /** Advanced · single-select: where row-action buttons sit in the selection bar. */
  readonly singleActionsPlacement = signal<BrightrailTableBulkActionsPlacement>('end');

  /** Controlled selection for Advanced · single-select (enables clearing after delete). */
  readonly advancedSingleSelectedIds = signal<string[]>([]);

  /**
   * Advanced · multi-select: app-owned dataset so bulk actions (delete, bulk edit) can mutate rows.
   * The table library stays presentational — all policies live here and can be swapped for APIs.
   */
  readonly advancedMultiRows = signal<BrightrailTableRow[]>([]);
  readonly advancedMultiSelectedIds = signal<string[]>([]);

  /** Bulk-edit demo: value applied to `status` on selected rows when “Apply” runs. */
  readonly bulkEditStatusDraft = signal('Active');

  /** Inline-edit demos — playground-owned datasets merged on `(inlineSave)`. */
  readonly inlineCellRows = signal<BrightrailTableRow[]>([]);
  readonly inlineRowRows = signal<BrightrailTableRow[]>([]);
  readonly inlineQtyRows = signal<BrightrailTableRow[]>(
    TP_INLINE_QTY_ROWS.map((r) => ({ ...r })),
  );
  readonly inlineValidRows = signal<BrightrailTableRow[]>(
    TP_INLINE_VALID_ROWS.map((r) => ({ ...r })),
  );
  readonly inlineBulkRows = signal<BrightrailTableRow[]>([]);
  readonly inlineBulkSelectedIds = signal<string[]>([]);

  readonly editModalOpen = signal(false);
  readonly editNameDraft = signal('');
  readonly editModalTitleId = 'tp-table-edit-title';

  /** Bound to `brightrail-table` `filterState` for advanced column-control scenarios. */
  readonly advancedFilter = model<Record<string, string>>({});

  readonly pagination = signal<BrightrailTablePaginationConfig | null>(tablePaginationFive());

  readonly paginationBinding = computed<BrightrailTablePaginationConfig | null>(() =>
    this.paginationEnabled() ? this.pagination() : null,
  );

  readonly advancedScenarioActive = computed(() =>
    ['advancedSimple', 'advancedSingle', 'advancedMulti'].includes(this.previewRecipe()),
  );

  readonly advancedPlaygroundColumns = computed((): BrightrailTableColumn[] => {
    const avatarMode = this.advancedAvatarPresentation();
    const badgeToneMode = this.advancedStatusBadgeTone();
    return ADVANCED_USER_COLUMNS.map((col) => {
      const c: BrightrailTableColumn = { ...col };
      const loose = c as unknown as Record<string, unknown>;
      if (c.id === 'name') {
        c.format = 'avatar';
        if (avatarMode === 'full') {
          c.avatarSubtitleField = 'email';
          delete loose['avatarIconOnly'];
        } else if (avatarMode === 'nameOnly') {
          delete loose['avatarSubtitleField'];
          delete loose['avatarIconOnly'];
        } else {
          c.avatarIconOnly = true;
          c.avatarSubtitleField = 'email';
        }
      }
      if (c.id === 'role') {
        if (this.advancedRolePresentation() === 'badge') {
          c.format = 'badge';
        } else {
          delete loose['format'];
          delete loose['badgeTone'];
        }
      }
      if (c.id === 'status' && c.format === 'badge') {
        if (badgeToneMode === 'auto') {
          delete loose['badgeTone'];
        } else {
          c.badgeTone = badgeToneMode;
        }
      }
      return c;
    });
  });

  /** Controlled selection when the playground needs to clear selection after destructive actions. */
  readonly tableControlledSelectedIds = computed(() => {
    const recipe = this.previewRecipe();
    if (recipe === 'advancedSingle') {
      return this.advancedSingleSelectedIds();
    }
    if (recipe === 'advancedMulti') {
      return this.advancedMultiSelectedIds();
    }
    if (recipe === 'inlineBulk') {
      return this.inlineBulkSelectedIds();
    }
    return undefined;
  });

  readonly playgroundInlineEdit = computed(() =>
    PG_INLINE_SAVE_RECIPES.includes(this.previewRecipe()),
  );

  readonly playgroundInlineEditMode = computed<'cell' | 'row'>(() =>
    this.previewRecipe() === 'inlineCell' ? 'cell' : 'row',
  );

  readonly playgroundBulkBarVisible = computed(() =>
    PG_BULK_BAR_RECIPES.includes(this.previewRecipe()),
  );

  readonly selectedAdvancedSingleRow = computed<BrightrailTableRow | null>(() => {
    if (this.previewRecipe() !== 'advancedSingle') {
      return null;
    }
    const ids = this.advancedSingleSelectedIds();
    if (!ids.length) {
      return null;
    }
    return this.tableRows().find((r) => String(r['id'] ?? '') === ids[0]) ?? null;
  });

  readonly columnCountLabel = computed(() => `${this.previewTableColumns().length} columns`);

  readonly dataPresetLabel = computed(() => {
    switch (this.previewRecipe()) {
      case 'auditFeed':
        return 'Audit events';
      case 'financeBoard':
        return 'Quotes';
      case 'approvalQueue':
        return 'Approvals';
      case 'inventoryPulse':
        return 'SKUs';
      case 'emptyCanvas':
      case 'loadingPulse':
        return '—';
      case 'advancedSimple':
      case 'advancedSingle':
      case 'advancedMulti':
        return 'Users (advanced)';
      case 'inlineCell':
      case 'inlineRow':
      case 'inlineBulk':
        return 'Users (inline)';
      case 'inlineQty':
        return 'SKU rows';
      case 'inlineValidate':
        return 'Validation rows';
      default:
        return 'Users';
    }
  });

  readonly activeTab = signal<CodeTabId>('html');

  readonly rowExpandTpl = viewChild<TemplateRef<{ $implicit: BrightrailTableRow }>>('rowExpand');

  readonly demoUsers = buildDemoUsers(25);

  readonly tableRows = computed<BrightrailTableRow[]>(() => {
    switch (this.previewRecipe()) {
      case 'auditFeed':
        return TABLE_AUDIT_ROWS;
      case 'financeBoard':
        return TABLE_ENTERPRISE_FINANCE_ROWS;
      case 'approvalQueue':
        return TABLE_APPROVAL_ROWS;
      case 'inventoryPulse':
        return TABLE_INVENTORY_ROWS;
      case 'emptyCanvas':
        return [];
      case 'advancedMulti':
        return this.advancedMultiRows();
      case 'inlineCell':
        return this.inlineCellRows();
      case 'inlineRow':
        return this.inlineRowRows();
      case 'inlineQty':
        return this.inlineQtyRows();
      case 'inlineValidate':
        return this.inlineValidRows();
      case 'inlineBulk':
        return this.inlineBulkRows();
      default:
        return this.demoUsers;
    }
  });

  readonly tableColumns = computed<BrightrailTableColumn[]>(() => {
    switch (this.previewRecipe()) {
      case 'teamRoster':
        return PLAYGROUND_USER_COLUMNS_FIVE;
      case 'auditFeed':
        return TABLE_AUDIT_COLUMNS;
      case 'financeBoard':
        return TABLE_ENTERPRISE_FINANCE_COLUMNS;
      case 'approvalQueue':
        return TABLE_APPROVAL_COLUMNS;
      case 'inventoryPulse':
        return TABLE_INVENTORY_COLUMNS;
      case 'advancedSimple':
      case 'advancedSingle':
      case 'advancedMulti':
        return this.advancedPlaygroundColumns();
      case 'inlineCell':
        return TP_INLINE_CELL_COLS;
      case 'inlineRow':
        return TP_INLINE_ROW_COLS;
      case 'inlineQty':
        return TP_INLINE_QTY_COLS;
      case 'inlineValidate':
        return TP_INLINE_VALID_COLS;
      case 'inlineBulk':
        return TP_INLINE_BULK_COLS;
      default:
        return PLAYGROUND_USER_COLUMNS;
    }
  });

  /**
   * Applies Component settings for `[columnSearch]` / `[columnFilters]` to column definitions.
   * Without `searchable` / `filterOptions` on columns, those inputs have no visible controls.
   */
  readonly previewTableColumns = computed((): BrightrailTableColumn[] => {
    const base = this.tableColumns();
    const searchOn = this.playgroundColumnSearch();
    const filtersOn = this.playgroundColumnFilters();
    if (!searchOn && !filtersOn) {
      return base;
    }

    return base.map((col) => {
      const c: BrightrailTableColumn = { ...col };

      if (col.columnRole === 'actions' || !col.field) {
        return c;
      }

      if (filtersOn && !col.filterOptions?.length) {
        if (col.field === 'role') {
          c.filterOptions = PLAYGROUND_ROLE_FILTER_OPTIONS;
        } else if (col.field === 'status') {
          c.filterOptions = PLAYGROUND_STATUS_FILTER_OPTIONS;
        }
      }

      if (searchOn && !col.dateFilter) {
        const selectShown = filtersOn && !!(c.filterOptions?.length);
        if (!selectShown && !c.searchable) {
          c.searchable = true;
        }
        if (c.searchable && col.field === 'name' && !c.filterPlaceholder) {
          c.filterPlaceholder = 'Search';
        }
      }

      return c;
    });
  });

  readonly ariaLabel = computed(() => {
    const recipe = this.previewRecipe();
    if (recipe === 'emptyCanvas') {
      return 'Empty table preview';
    }
    if (recipe === 'loadingPulse') {
      return 'Loading table preview';
    }
    if (recipe === 'advancedSimple' || recipe === 'advancedSingle' || recipe === 'advancedMulti') {
      return 'Advanced column controls table';
    }
    if (PG_INLINE_SAVE_RECIPES.includes(recipe)) {
      return 'Inline edit playground table';
    }
    if (recipe === 'inlineBulk') {
      return 'Bulk inline edit playground table';
    }
    return 'Users data table';
  });

  readonly htmlSnippet = computed(() => playgroundFxHtml(this.buildHtml(), this.previewFx()));
  readonly tsSnippet = computed(() => this.buildTs());
  readonly scssSnippet = computed(() => this.buildScss());

  readonly activeSnippet = computed(() => {
    switch (this.activeTab()) {
      case 'ts':
        return this.tsSnippet();
      case 'scss':
        return this.scssSnippet();
      default:
        return this.htmlSnippet();
    }
  });

  recipesInGroup(group: string): { value: TablePlaygroundRecipe; label: string }[] {
    return this.recipeOptions.filter((o) => o.group === group).map((o) => ({
      value: o.value,
      label: o.label,
    }));
  }

  pickScenarioGroup(value: string): void {
    this.selectedRecipeGroup.set(value);
    const first = this.recipesInGroup(value)[0]?.value;
    if (first) {
      this.pickRecipe(first);
    }
  }

  pickRecipe(value: string): void {
    const recipe = value as TablePlaygroundRecipe;
    this.previewRecipe.set(recipe);
    const meta = this.recipeOptions.find((o) => o.value === recipe);
    if (meta) {
      this.selectedRecipeGroup.set(meta.group);
    }
    if (!['advancedSimple', 'advancedSingle', 'advancedMulti'].includes(recipe)) {
      this.advancedFilter.set({});
    }
    if (recipe !== 'advancedSingle') {
      this.advancedSingleSelectedIds.set([]);
      this.editModalOpen.set(false);
    }
    if (recipe !== 'advancedMulti') {
      this.advancedMultiSelectedIds.set([]);
    }
    if (recipe !== 'inlineBulk') {
      this.inlineBulkSelectedIds.set([]);
    }
    this.applyRecipeDefaults(recipe);
  }

  selectTab(tab: CodeTabId): void {
    this.activeTab.set(tab);
  }

  copySnippet(): void {
    void navigator.clipboard?.writeText(this.activeSnippet());
  }

  readSelectValue(event: Event): string {
    return (event.target as HTMLSelectElement).value;
  }

  onScenarioGroupChange(event: Event): void {
    this.pickScenarioGroup(this.readSelectValue(event));
  }

  onRecipeChange(event: Event): void {
    this.pickRecipe(this.readSelectValue(event));
  }

  onPreviewThemeChange(event: Event): void {
    this.bindPreviewTheme(this.readSelectValue(event) as PlaygroundThemeId);
  }

  onPageChange(ev: BrightrailTablePageEvent): void {
    const current = this.pagination();
    if (!current) {
      return;
    }
    this.pagination.set({
      ...current,
      pageIndex: ev.pageIndex,
      pageSize: ev.pageSize,
    });
  }

  resetToDefaults(): void {
    this.previewFx.set('inherit');
    this.selectedRecipeGroup.set('Basics');
    this.advancedAvatarPresentation.set('full');
    this.advancedStatusBadgeTone.set('auto');
    this.advancedRolePresentation.set('text');
    this.pickRecipe('dataTable');
  }

  bindVariant(value: string): void {
    this.variant.set(value as BrightrailTableVariant);
  }

  bindDensity(value: string): void {
    this.density.set(value as BrightrailTableDensity);
  }

  bindRowSelection(value: string): void {
    this.rowSelection.set(value as BrightrailTableRowSelectionMode);
  }

  bindPaginationEnabled(value: string): void {
    const on = value === 'on';
    this.paginationEnabled.set(on);
    this.pagination.set(on ? tablePaginationFive() : null);
  }

  bindSortingEnabled(value: string): void {
    this.sortingEnabled.set(value === 'on');
  }

  bindExpandableEnabled(value: string): void {
    this.expandableEnabled.set(value === 'on');
  }

  bindSticky(value: string): void {
    this.stickyHeader.set(value === 'on');
  }

  bindLoading(value: string): void {
    this.loadingEnabled.set(value === 'on');
  }

  bindToolbar(value: string): void {
    this.showToolbar.set(value === 'on');
  }

  bindPlaygroundColumnSearch(value: string): void {
    this.playgroundColumnSearch.set(value === 'on');
  }

  bindPlaygroundColumnFilters(value: string): void {
    this.playgroundColumnFilters.set(value === 'on');
  }

  bindPlaygroundGlobalFilterButton(value: string): void {
    this.playgroundShowGlobalFilterButton.set(value === 'on');
  }

  bindBulkActionsPlacement(value: string): void {
    this.bulkActionsPlacement.set(value as BrightrailTableBulkActionsPlacement);
  }

  bindAdvancedAvatarPresentation(value: string): void {
    const v = value as 'full' | 'nameOnly' | 'iconOnly';
    if (v === 'full' || v === 'nameOnly' || v === 'iconOnly') {
      this.advancedAvatarPresentation.set(v);
    }
  }

  bindAdvancedStatusBadgeTone(value: string): void {
    this.advancedStatusBadgeTone.set(value as BrightrailTableBadgeTone | 'auto');
  }

  bindAdvancedRolePresentation(value: string): void {
    const v = value as 'text' | 'badge';
    if (v === 'text' || v === 'badge') {
      this.advancedRolePresentation.set(v);
    }
  }

  bindSingleActionsPlacement(value: string): void {
    this.singleActionsPlacement.set(value as BrightrailTableBulkActionsPlacement);
  }

  onTableSelectionChange(ids: string[]): void {
    const recipe = this.previewRecipe();
    if (recipe === 'advancedSingle') {
      this.advancedSingleSelectedIds.set(ids);
    } else if (recipe === 'advancedMulti') {
      this.advancedMultiSelectedIds.set(ids);
    } else if (recipe === 'inlineBulk') {
      this.inlineBulkSelectedIds.set(ids);
    }
  }

  onPlaygroundInlineSave(ev: BrightrailTableInlineSaveEvent): void {
    const recipe = this.previewRecipe();
    switch (recipe) {
      case 'inlineCell':
        this.inlineCellRows.update((rows) => tpMergeInlineRows(rows, ev.rowId, ev.changes));
        break;
      case 'inlineRow':
        this.inlineRowRows.update((rows) => tpMergeInlineRows(rows, ev.rowId, ev.changes));
        break;
      case 'inlineQty':
        this.inlineQtyRows.update((rows) => tpMergeInlineRows(rows, ev.rowId, ev.changes));
        break;
      case 'inlineValidate':
        this.inlineValidRows.update((rows) => tpMergeInlineRows(rows, ev.rowId, ev.changes));
        break;
      default:
        break;
    }
  }

  /**
   * Customize bulk delete: swap `window.confirm` for a modal service, or call your API then patch signals.
   */
  bulkDeleteSelectedDemoRows(): void {
    const recipe = this.previewRecipe();
    if (recipe === 'advancedMulti') {
      const ids = this.advancedMultiSelectedIds();
      if (!ids.length) {
        return;
      }
      const ok =
        typeof globalThis.confirm === 'function'
          ? globalThis.confirm(`Remove ${ids.length} selected row(s) from this demo dataset?`)
          : true;
      if (!ok) {
        return;
      }
      const remove = new Set(ids);
      this.advancedMultiRows.update((rows) =>
        rows.filter((r) => !remove.has(String(r['id'] ?? ''))),
      );
      this.advancedMultiSelectedIds.set([]);
      return;
    }
    if (recipe === 'inlineBulk') {
      const ids = this.inlineBulkSelectedIds();
      if (!ids.length) {
        return;
      }
      const ok =
        typeof globalThis.confirm === 'function'
          ? globalThis.confirm(`Remove ${ids.length} selected row(s)?`)
          : true;
      if (!ok) {
        return;
      }
      const remove = new Set(ids);
      this.inlineBulkRows.update((rows) =>
        rows.filter((r) => !remove.has(String(r['id'] ?? ''))),
      );
      this.inlineBulkSelectedIds.set([]);
    }
  }

  /** Bulk-edit pattern: set `status` on all selected rows (demo-only). */
  applyBulkStatusToSelection(): void {
    const recipe = this.previewRecipe();
    const ids =
      recipe === 'advancedMulti'
        ? this.advancedMultiSelectedIds()
        : recipe === 'inlineBulk'
          ? this.inlineBulkSelectedIds()
          : [];
    if (!PG_BULK_BAR_RECIPES.includes(recipe) || !ids.length) {
      return;
    }
    const nextStatus = this.bulkEditStatusDraft();
    const idSet = new Set(ids);
    if (recipe === 'advancedMulti') {
      this.advancedMultiRows.update((rows) =>
        rows.map((r) => (idSet.has(String(r['id'] ?? '')) ? { ...r, status: nextStatus } : r)),
      );
    } else {
      this.inlineBulkRows.update((rows) =>
        rows.map((r) => (idSet.has(String(r['id'] ?? '')) ? { ...r, status: nextStatus } : r)),
      );
    }
  }

  clearBulkSelectionDemo(): void {
    const recipe = this.previewRecipe();
    if (recipe === 'advancedMulti') {
      this.advancedMultiSelectedIds.set([]);
    } else if (recipe === 'inlineBulk') {
      this.inlineBulkSelectedIds.set([]);
    }
  }

  openEditSelectedRow(): void {
    const row = this.selectedAdvancedSingleRow();
    if (!row) {
      return;
    }
    this.editNameDraft.set(String(row['name'] ?? ''));
    this.editModalOpen.set(true);
  }

  closeEditModal(): void {
    this.editModalOpen.set(false);
  }

  saveEditModalDemo(): void {
    this.closeEditModal();
  }

  viewSelectedRowDemo(): void {
    const row = this.selectedAdvancedSingleRow();
    if (!row || typeof globalThis.alert !== 'function') {
      return;
    }
    globalThis.alert(`View: ${String(row['name'] ?? '')} (${String(row['email'] ?? '')})`);
  }

  confirmDeleteSelectedRow(): void {
    if (!this.selectedAdvancedSingleRow()) {
      return;
    }
    const ok =
      typeof globalThis.confirm === 'function'
        ? globalThis.confirm('Clear selection (demo only)?')
        : true;
    if (!ok) {
      return;
    }
    this.advancedSingleSelectedIds.set([]);
  }

  bindPreviewTheme(id: PlaygroundThemeId): void {
    this.previewTheme.set(id);
    this.themeService.setTheme(id);
  }

  expandTemplate(): TemplateRef<{ $implicit: BrightrailTableRow }> | null {
    return this.rowExpandTpl() ?? null;
  }

  private applyRecipeDefaults(recipe: TablePlaygroundRecipe): void {
    switch (recipe) {
      case 'dataTable':
        this.variant.set('basic');
        this.density.set('comfortable');
        this.sortingEnabled.set(true);
        this.paginationEnabled.set(true);
        this.pagination.set(tablePaginationFive());
        this.rowSelection.set('none');
        this.expandableEnabled.set(false);
        this.stickyHeader.set(false);
        this.loadingEnabled.set(false);
        this.showToolbar.set(true);
        break;
      case 'teamRoster':
        this.variant.set('striped');
        this.density.set('compact');
        this.sortingEnabled.set(true);
        this.paginationEnabled.set(false);
        this.pagination.set(null);
        this.rowSelection.set('multiple');
        this.expandableEnabled.set(false);
        this.stickyHeader.set(false);
        this.loadingEnabled.set(false);
        this.showToolbar.set(false);
        break;
      case 'auditFeed':
        this.variant.set('bordered');
        this.density.set('medium');
        this.sortingEnabled.set(false);
        this.paginationEnabled.set(false);
        this.pagination.set(null);
        this.rowSelection.set('none');
        this.expandableEnabled.set(false);
        this.stickyHeader.set(false);
        this.loadingEnabled.set(false);
        this.showToolbar.set(false);
        break;
      case 'financeBoard':
        this.variant.set('basic');
        this.density.set('medium');
        this.sortingEnabled.set(true);
        this.paginationEnabled.set(false);
        this.pagination.set(null);
        this.rowSelection.set('none');
        this.expandableEnabled.set(false);
        this.stickyHeader.set(false);
        this.loadingEnabled.set(false);
        this.showToolbar.set(true);
        break;
      case 'approvalQueue':
      case 'inventoryPulse':
        this.variant.set('basic');
        this.density.set('comfortable');
        this.sortingEnabled.set(false);
        this.paginationEnabled.set(false);
        this.pagination.set(null);
        this.rowSelection.set('single');
        this.expandableEnabled.set(false);
        this.stickyHeader.set(false);
        this.loadingEnabled.set(false);
        this.showToolbar.set(false);
        break;
      case 'stickyDigest':
        this.variant.set('bordered');
        this.density.set('compact');
        this.sortingEnabled.set(true);
        this.paginationEnabled.set(true);
        this.pagination.set(tablePaginationFive());
        this.rowSelection.set('multiple');
        this.expandableEnabled.set(true);
        this.stickyHeader.set(true);
        this.loadingEnabled.set(false);
        this.showToolbar.set(true);
        break;
      case 'emptyCanvas':
        this.variant.set('basic');
        this.density.set('comfortable');
        this.sortingEnabled.set(false);
        this.paginationEnabled.set(false);
        this.pagination.set(null);
        this.rowSelection.set('none');
        this.expandableEnabled.set(false);
        this.stickyHeader.set(false);
        this.loadingEnabled.set(false);
        this.showToolbar.set(false);
        break;
      case 'loadingPulse':
        this.variant.set('striped');
        this.density.set('medium');
        this.sortingEnabled.set(false);
        this.paginationEnabled.set(false);
        this.pagination.set(null);
        this.rowSelection.set('none');
        this.expandableEnabled.set(false);
        this.stickyHeader.set(false);
        this.loadingEnabled.set(true);
        this.showToolbar.set(false);
        break;
      case 'advancedSimple':
        this.variant.set('bordered');
        this.density.set('comfortable');
        this.sortingEnabled.set(true);
        this.paginationEnabled.set(true);
        this.pagination.set(tablePaginationFive());
        this.rowSelection.set('none');
        this.expandableEnabled.set(false);
        this.stickyHeader.set(false);
        this.loadingEnabled.set(false);
        this.showToolbar.set(true);
        this.advancedFilter.set({});
        this.advancedAvatarPresentation.set('full');
        this.advancedStatusBadgeTone.set('auto');
        this.advancedRolePresentation.set('text');
        break;
      case 'advancedSingle':
        this.variant.set('bordered');
        this.density.set('compact');
        this.sortingEnabled.set(true);
        this.paginationEnabled.set(true);
        this.pagination.set(tablePaginationFive());
        this.rowSelection.set('single');
        this.expandableEnabled.set(false);
        this.stickyHeader.set(false);
        this.loadingEnabled.set(false);
        this.showToolbar.set(false);
        this.advancedFilter.set({});
        this.advancedSingleSelectedIds.set([]);
        this.advancedAvatarPresentation.set('full');
        this.advancedStatusBadgeTone.set('auto');
        this.advancedRolePresentation.set('text');
        break;
      case 'advancedMulti':
        this.variant.set('bordered');
        this.density.set('compact');
        this.sortingEnabled.set(true);
        this.paginationEnabled.set(true);
        this.pagination.set(tablePaginationFive());
        this.rowSelection.set('multiple');
        this.expandableEnabled.set(false);
        this.stickyHeader.set(false);
        this.loadingEnabled.set(false);
        this.showToolbar.set(false);
        this.advancedFilter.set({});
        this.advancedMultiRows.set(buildDemoUsers(25).map((r) => ({ ...r })));
        this.advancedMultiSelectedIds.set([]);
        this.bulkEditStatusDraft.set('Active');
        this.advancedAvatarPresentation.set('full');
        this.advancedStatusBadgeTone.set('auto');
        this.advancedRolePresentation.set('text');
        break;
      case 'inlineCell':
        this.variant.set('bordered');
        this.density.set('compact');
        this.sortingEnabled.set(true);
        this.paginationEnabled.set(true);
        this.pagination.set(tablePaginationFive());
        this.rowSelection.set('none');
        this.expandableEnabled.set(false);
        this.stickyHeader.set(false);
        this.loadingEnabled.set(false);
        this.showToolbar.set(false);
        this.inlineCellRows.set(tpCloneUsers(6));
        break;
      case 'inlineRow':
        this.variant.set('bordered');
        this.density.set('compact');
        this.sortingEnabled.set(false);
        this.paginationEnabled.set(false);
        this.pagination.set(null);
        this.rowSelection.set('none');
        this.expandableEnabled.set(false);
        this.stickyHeader.set(false);
        this.loadingEnabled.set(false);
        this.showToolbar.set(false);
        this.inlineRowRows.set(tpCloneUsers(4));
        break;
      case 'inlineQty':
        this.variant.set('bordered');
        this.density.set('compact');
        this.sortingEnabled.set(false);
        this.paginationEnabled.set(false);
        this.pagination.set(null);
        this.rowSelection.set('none');
        this.expandableEnabled.set(false);
        this.stickyHeader.set(false);
        this.loadingEnabled.set(false);
        this.showToolbar.set(false);
        this.inlineQtyRows.set(TP_INLINE_QTY_ROWS.map((r) => ({ ...r })));
        break;
      case 'inlineValidate':
        this.variant.set('bordered');
        this.density.set('compact');
        this.sortingEnabled.set(false);
        this.paginationEnabled.set(false);
        this.pagination.set(null);
        this.rowSelection.set('none');
        this.expandableEnabled.set(false);
        this.stickyHeader.set(false);
        this.loadingEnabled.set(false);
        this.showToolbar.set(false);
        this.inlineValidRows.set(TP_INLINE_VALID_ROWS.map((r) => ({ ...r })));
        break;
      case 'inlineBulk':
        this.variant.set('bordered');
        this.density.set('compact');
        this.sortingEnabled.set(true);
        this.paginationEnabled.set(true);
        this.pagination.set(tablePaginationFive());
        this.rowSelection.set('multiple');
        this.expandableEnabled.set(false);
        this.stickyHeader.set(false);
        this.loadingEnabled.set(false);
        this.showToolbar.set(false);
        this.inlineBulkRows.set(tpCloneUsers(12));
        this.inlineBulkSelectedIds.set([]);
        this.bulkEditStatusDraft.set('Active');
        break;
      default:
        break;
    }

    if (['advancedSimple', 'advancedSingle', 'advancedMulti'].includes(recipe)) {
      this.playgroundColumnSearch.set(true);
      this.playgroundColumnFilters.set(true);
      this.playgroundShowGlobalFilterButton.set(true);
    } else {
      this.playgroundColumnSearch.set(false);
      this.playgroundColumnFilters.set(false);
      this.playgroundShowGlobalFilterButton.set(true);
    }
  }

  private buildHtml(): string {
    const dataVar = this.snippetDataVar();
    const pag = this.pagination();
    const pagAttr = this.paginationEnabled()
      ? `\n  [pagination]="${pag ? `{ pageSize: ${pag.pageSize}, pageIndex: ${pag.pageIndex ?? 0}, pageSizeOptions: [${(pag.pageSizeOptions ?? [5, 10, 25]).join(', ')}] }` : 'null'}"`
      : '';

    const toolbarBlock = this.showToolbar()
      ? `
  <brightrail-table-toolbar>
    <brightrail-table-toolbar-actions />
  </brightrail-table-toolbar>`
      : '';

    const expandAttr = this.expandableEnabled()
      ? `\n  [expandedTemplate]="detailTpl()"`
      : '';

    const expandNote = this.expandableEnabled()
      ? `

<!-- Pair with a template in the same HTML file -->
<ng-template #userDetail let-row>
  <p class="row-detail">{{ row['email'] }}</p>
</ng-template>`
      : '';

    const headerFilterLines: string[] = [];
    if (this.playgroundColumnSearch()) {
      headerFilterLines.push(`  [columnSearch]="true"`);
    }
    if (this.playgroundColumnFilters()) {
      headerFilterLines.push(`  [columnFilters]="true"`);
    }
    if (!this.playgroundShowGlobalFilterButton()) {
      headerFilterLines.push(`  [showGlobalFilterButton]="false"`);
    }
    if (this.playgroundColumnSearch() || this.playgroundColumnFilters()) {
      headerFilterLines.push(`  [(filterState)]="filterState"`);
    }
    const headerFilterAttrs =
      headerFilterLines.length > 0 ? `\n${headerFilterLines.join('\n')}` : '';

    const bulkPlacementAttr = PG_BULK_BAR_RECIPES.includes(this.previewRecipe())
      ? `\n  [bulkActionsPlacement]="'${this.bulkActionsPlacement()}'"`
      : '';

    const bulkBlock = PG_BULK_BAR_RECIPES.includes(this.previewRecipe())
        ? `
  <brightrail-table-bulk-actions>
    <label>Edit status
      <select [ngModel]="bulkStatus()" (ngModelChange)="bulkStatus.set($event)" [ngModelOptions]="{ standalone: true }">
        <option value="Active">Active</option>
        <option value="Pending">Pending</option>
        <option value="Inactive">Inactive</option>
      </select>
    </label>
    <button type="button" class="br-table__bulk-btn--primary" (click)="applyBulkStatus()">Apply</button>
    <button type="button" class="br-table__bulk-btn--ghost" (click)="clearSelection()">Clear</button>
    <button type="button" class="br-table__bulk-btn--danger" (click)="deleteSelected()">Delete</button>
    <button type="button" class="br-table__bulk-btn--secondary">Archive</button>
    <button type="button" class="br-table__bulk-btn--ghost">Assign</button>
    <button type="button" class="br-table__bulk-btn--primary">Export</button>
  </brightrail-table-bulk-actions>`
        : '';

    const singlePlacementAttr =
      this.previewRecipe() === 'advancedSingle'
        ? `\n  [singleActionsPlacement]="'${this.singleActionsPlacement()}'"`
        : '';

    const selectedIdsAttr =
      this.previewRecipe() === 'advancedSingle' ||
      PG_BULK_BAR_RECIPES.includes(this.previewRecipe())
        ? `\n  [selectedIds]="selectedIds()"`
        : '';

    const inlineAttrs = PG_INLINE_SAVE_RECIPES.includes(this.previewRecipe())
      ? `\n  [inlineEdit]="true"\n  [inlineEditMode]="'${
          this.previewRecipe() === 'inlineCell' ? 'cell' : 'row'
        }'"\n  (inlineSave)="onInlineSave($event)"`
      : '';

    const singleBlock =
      this.previewRecipe() === 'advancedSingle'
        ? `
  <brightrail-table-single-actions>
    <button type="button" class="br-table__bulk-btn--primary">Edit</button>
    <button type="button" class="br-table__bulk-btn--ghost">View</button>
    <button type="button" class="br-table__bulk-btn--danger">Delete</button>
  </brightrail-table-single-actions>`
        : '';

    return `<brightrail-table
  [data]="${dataVar}"
  [columns]="columns"${pagAttr}
  [sorting]="${this.sortingEnabled()}"
  [rowSelection]="'${this.rowSelection()}'"${headerFilterAttrs}${inlineAttrs}${bulkPlacementAttr}${singlePlacementAttr}${selectedIdsAttr}
  variant="${this.variant()}"
  density="${this.density()}"
  [expandable]="${this.expandableEnabled()}"${expandAttr}
  [stickyHeader]="${this.stickyHeader()}"
  [loading]="${this.loadingEnabled()}"
  ariaLabel="${this.escapeHtmlAttr(this.ariaLabel())}"
  (sortChange)="onSortChange($event)"
  (pageChange)="onPageChange($event)"
  (selectionChange)="onSelectionChange($event)">${bulkBlock}${singleBlock}${toolbarBlock}
</brightrail-table>${expandNote}`;
  }

  private buildTs(): string {
    const dataVar = this.snippetDataVar();
    const pag = this.pagination();
    const pagInitializer = this.paginationEnabled()
      ? `signal<BrightrailTablePaginationConfig | null>({
    pageSize: ${pag?.pageSize ?? 5},
    pageSizeOptions: [${(pag?.pageSizeOptions ?? [5, 10, 25]).join(', ')}],
  })`
      : `signal<BrightrailTablePaginationConfig | null>(null)`;

    const sampleRows = this.snippetSampleRowsBlock();
    const cols = this.snippetColumnsBlock();

    const brightrailImportExtras = PG_INLINE_SAVE_RECIPES.includes(this.previewRecipe())
      ? ',\n  BrightrailTableInlineSaveEvent'
      : '';

    const snippetUsesColumnFilters =
      this.playgroundColumnSearch() || this.playgroundColumnFilters();

    const corePieces = ['Component', 'signal'];
    if (snippetUsesColumnFilters) {
      corePieces.push('model');
    }
    if (this.expandableEnabled()) {
      corePieces.push('TemplateRef', 'viewChild');
    }
    const coreImport = `import { ${corePieces.join(', ')} } from '@angular/core';`;

    const filterStateField = snippetUsesColumnFilters
      ? `
  readonly filterState = model<Record<string, string>>({});
`
      : '';

    const detailField = this.expandableEnabled()
      ? `  readonly detailTpl = viewChild<TemplateRef<{ $implicit: BrightrailTableRow }>>('userDetail');

`
      : '';

    const singleSelectionField =
      this.previewRecipe() === 'advancedSingle' ||
      PG_BULK_BAR_RECIPES.includes(this.previewRecipe())
        ? `  readonly selectedIds = signal<string[]>([]);

`
        : '';

    const inlineSaveMethod = PG_INLINE_SAVE_RECIPES.includes(this.previewRecipe())
      ? `  onInlineSave(event: BrightrailTableInlineSaveEvent): void {
    this.${dataVar}.update((rows) =>
      rows.map((r) =>
        String(r['id']) === event.rowId ? { ...r, ...event.changes } : r,
      ),
    );
  }

`
      : '';

    const selectionHandler =
      this.previewRecipe() === 'advancedSingle'
        ? `  onSelectionChange(ids: string[]): void {
    this.selectedIds.set(ids);
  }`
        : PG_BULK_BAR_RECIPES.includes(this.previewRecipe())
          ? `  readonly bulkStatus = signal('Active');

  onSelectionChange(ids: string[]): void {
    this.selectedIds.set(ids);
  }

  applyBulkStatus(): void {
    /* merge bulkStatus into selected rows */
  }

  clearSelection(): void {
    this.selectedIds.set([]);
  }

  deleteSelected(): void {
    /* filter users signal; clear selection */
  }`
          : `  onSelectionChange(ids: string[]): void {
    console.log('selection', ids);
  }`;

    return playgroundFxTs(`${coreImport}
import {
  BrightrailTableColumn,
  BrightrailTablePageEvent,
  BrightrailTablePaginationConfig,
  BrightrailTableRow,
  BrightrailTableSortEvent${brightrailImportExtras}
} from 'brightrail';

@Component({
  selector: 'app-users-table-demo',
  standalone: true,
  templateUrl: './users-table-demo.component.html',
})
export class UsersTableDemo {
${detailField}  readonly ${dataVar} = signal<BrightrailTableRow[]>([
${sampleRows}
  ]);

  readonly columns = signal<BrightrailTableColumn[]>([
${cols}
  ]);

${filterStateField}  readonly pagination = ${pagInitializer};
${singleSelectionField}${inlineSaveMethod}  onSortChange(event: BrightrailTableSortEvent): void {
    console.log('sort', event);
  }

  onPageChange(event: BrightrailTablePageEvent): void {
    this.pagination.update((current) =>
      current ? { ...current, pageIndex: event.pageIndex, pageSize: event.pageSize } : current,
    );
  }

${selectionHandler}
}`, this.previewFx(), this.themeService.fxShell());
  }

  private snippetDataVar(): string {
    switch (this.previewRecipe()) {
      case 'auditFeed':
      case 'financeBoard':
      case 'approvalQueue':
      case 'inventoryPulse':
        return 'rows';
      default:
        return 'users';
    }
  }

  private snippetSampleRowsBlock(): string {
    const sample = this.tableRows().slice(0, 3);
    const raw = JSON.stringify(sample, null, 2);
    return raw
      .split('\n')
      .map((line) => `    ${line}`)
      .join('\n');
  }

  private snippetColumnsBlock(): string {
    return this.previewTableColumns().map((c) => this.snippetColumnObject(c)).join(',\n');
  }

  private snippetColumnObject(c: BrightrailTableColumn): string {
    const parts: string[] = [`id: '${c.id}'`, `header: '${this.escapeForTs(c.header)}'`];
    if (c.field) {
      parts.push(`field: '${c.field}'`);
    }
    if (c.searchable) {
      parts.push('searchable: true');
    }
    if (c.filterPlaceholder) {
      parts.push(`filterPlaceholder: '${this.escapeForTs(c.filterPlaceholder)}'`);
    }
    if (c.sortable === false) {
      parts.push('sortable: false');
    } else if (c.sortable) {
      parts.push('sortable: true');
    }
    if (c.width) {
      parts.push(`width: '${this.escapeForTs(c.width)}'`);
    }
    if (c.format && c.format !== 'text') {
      parts.push(`format: '${c.format}'`);
    }
    if (c.currencyCode) {
      parts.push(`currencyCode: '${c.currencyCode}'`);
    }
    if (c.avatarSubtitleField) {
      parts.push(`avatarSubtitleField: '${c.avatarSubtitleField}'`);
    }
    if (c.avatarIconOnly) {
      parts.push('avatarIconOnly: true');
    }
    if (c.badgeTone) {
      parts.push(`badgeTone: '${c.badgeTone}'`);
    }
    if (c.align) {
      parts.push(`align: '${c.align}'`);
    }
    if (c.editable) {
      parts.push('editable: true');
    }
    if (c.editor) {
      parts.push(`editor: '${c.editor}'`);
    }
    if (c.required) {
      parts.push('required: true');
    }
    if (c.columnRole) {
      parts.push(`columnRole: '${c.columnRole}'`);
    }
    return `    { ${parts.join(', ')} }`;
  }

  private escapeForTs(value: string): string {
    return value.replace(/\\/g, '\\\\').replace(/'/g, "\\'");
  }

  private escapeHtmlAttr(value: string): string {
    return value.replace(/&/g, '&amp;').replace(/"/g, '&quot;');
  }

  private buildScss(): string {
    return `/* Tables inherit Brightrail tokens via brightrail-root.scss */
.users-table-panel {
  padding: 1rem;
}`;
  }
}
