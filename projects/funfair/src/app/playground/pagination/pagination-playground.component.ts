import { ChangeDetectionStrategy, Component, computed, inject, signal } from '@angular/core';
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
import { FormsModule } from '@angular/forms';
import {
  BrightrailPaginationComponent,
  BrightrailPaginationPageSizePosition,
  BrightrailPaginationSize,
  BrightrailPaginationState,
  BrightrailPaginationSummaryMode,
  BrightrailPaginationVariant,
} from 'brightrail';

import { PlaygroundThemeId, PlaygroundThemeService } from '../playground-theme.service';
import { createPlaygroundPreviewFx } from '../shared/playground-fx.util';
import { PlaygroundFxSettingsComponent } from '../shared/playground-fx-settings.component';

type CodeTabId = 'html' | 'ts' | 'scss';

type PaginationRecipe =
  | 'basics-standard'
  | 'basics-minimal'
  | 'basics-compact-num'
  | 'basics-simple'
  | 'size-sm'
  | 'size-md'
  | 'size-lg'
  | 'state-disabled'
  | 'range-ellipsis'
  | 'page-size-start'
  | 'page-size-end'
  | 'page-size-both'
  | 'summary-range'
  | 'summary-results'
  | 'summary-filtered'
  | 'mobile-stack'
  | 'mobile-sheet-ui'
  | 'icon-only-pager'
  | 'jump-page'
  | 'summary-server'
  | 'empty-results';

@Component({
  selector: 'app-pagination-playground',
  standalone: true,
  imports: [
    PlaygroundPreviewHeaderComponent,FormsModule, BrightrailPaginationComponent, PlaygroundFxSettingsComponent],
  templateUrl: './pagination-playground.component.html',
  styleUrl: './pagination-playground.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PaginationPlaygroundComponent {
  readonly previewOnly = injectPlaygroundA11yPreviewMode();
  readonly a11yPreviewState = computed(() =>
    snapshotPlaygroundState({
      recipe: () => this.recipe(),
      variant: () => this.variant(),
      size: () => this.size(),
      state: () => this.state(),
      compact: () => this.compact(),
      length: () => this.length(),
      pageIndex: () => this.pageIndex(),
      pageSize: () => this.pageSize(),
      totalPagesOverride: () => this.totalPagesOverride(),
      pageSizeOptions: () => this.pageSizeOptions(),
      pageSizeOptionsText: () => this.pageSizeOptionsText(),
      showPageSize: () => this.showPageSize(),
      showFirstLast: () => this.showFirstLast(),
      showPrevNext: () => this.showPrevNext(),
      pageSizePosition: () => this.pageSizePosition(),
      summaryMode: () => this.summaryMode(),
      summaryItemsLabel: () => this.summaryItemsLabel(),
      showJumpToPage: () => this.showJumpToPage(),
      maxPageButtons: () => this.maxPageButtons(),
    }),
  );

  constructor() {
    initPlaygroundA11yPreview('pagination', this.previewOnly, (state) =>
      this.restoreA11yPreviewState(state),
    );
  }
  private restoreA11yPreviewState(state: unknown): void {
    if (!state || typeof state !== 'object') {
      return;
    }
    const snapshot = state as Record<string, unknown>;
    
    restorePlaygroundState(state, {
      recipe: this.recipe as WritableSignal<unknown>,
      variant: this.variant as WritableSignal<unknown>,
      size: this.size as WritableSignal<unknown>,
      state: this.state as WritableSignal<unknown>,
      compact: this.compact as WritableSignal<unknown>,
      length: this.length as WritableSignal<unknown>,
      pageIndex: this.pageIndex as WritableSignal<unknown>,
      pageSize: this.pageSize as WritableSignal<unknown>,
      totalPagesOverride: this.totalPagesOverride as WritableSignal<unknown>,
      pageSizeOptions: this.pageSizeOptions as WritableSignal<unknown>,
      pageSizeOptionsText: this.pageSizeOptionsText as WritableSignal<unknown>,
      showPageSize: this.showPageSize as WritableSignal<unknown>,
      showFirstLast: this.showFirstLast as WritableSignal<unknown>,
      showPrevNext: this.showPrevNext as WritableSignal<unknown>,
      pageSizePosition: this.pageSizePosition as WritableSignal<unknown>,
      summaryMode: this.summaryMode as WritableSignal<unknown>,
      summaryItemsLabel: this.summaryItemsLabel as WritableSignal<unknown>,
      showJumpToPage: this.showJumpToPage as WritableSignal<unknown>,
      maxPageButtons: this.maxPageButtons as WritableSignal<unknown>,
    });
  }

  readonly themeService = inject(PlaygroundThemeService);
  private readonly _playgroundFx = createPlaygroundPreviewFx();
  readonly previewFx = this._playgroundFx.previewFx;
  readonly resolvedFxShell = this._playgroundFx.resolvedFxShell;
  readonly ngModelStandalone = { standalone: true };

  readonly recipeGroups = [
    'Basics',
    'Sizes',
    'States',
    'Range / density',
    'Page size',
    'Summaries',
    'Mobile & icons',
    'Advanced',
  ] as const;

  readonly recipeOptions: { value: PaginationRecipe; label: string; group: string }[] = [
    { value: 'basics-standard', label: 'Standard numbered', group: 'Basics' },
    { value: 'basics-minimal', label: 'Minimal window', group: 'Basics' },
    { value: 'basics-compact-num', label: 'Compact spacing', group: 'Basics' },
    { value: 'basics-simple', label: 'Prev / Next only', group: 'Basics' },
    { value: 'size-sm', label: 'Small', group: 'Sizes' },
    { value: 'size-md', label: 'Medium', group: 'Sizes' },
    { value: 'size-lg', label: 'Large', group: 'Sizes' },
    { value: 'state-disabled', label: 'Disabled', group: 'States' },
    { value: 'range-ellipsis', label: 'Long range + ellipsis', group: 'Range / density' },
    { value: 'page-size-start', label: 'Page size left', group: 'Page size' },
    { value: 'page-size-end', label: 'Page size right', group: 'Page size' },
    { value: 'page-size-both', label: 'Page size both sides', group: 'Page size' },
    { value: 'summary-range', label: 'Range summary', group: 'Summaries' },
    { value: 'summary-results', label: 'Results count', group: 'Summaries' },
    { value: 'summary-filtered', label: 'Filtered results', group: 'Summaries' },
    { value: 'mobile-stack', label: 'Mobile label', group: 'Mobile & icons' },
    { value: 'mobile-sheet-ui', label: 'Mobile bottom-sheet affordance', group: 'Mobile & icons' },
    { value: 'icon-only-pager', label: 'Icon arrows', group: 'Mobile & icons' },
    { value: 'jump-page', label: 'Jump to page', group: 'Advanced' },
    { value: 'summary-server', label: 'Server-side summary', group: 'Summaries' },
    { value: 'empty-results', label: 'Zero results (disabled)', group: 'Summaries' },
  ];

  readonly themeRowOptions: { id: PlaygroundThemeId; label: string }[] = [
    { id: 'light', label: 'Material light' },
    { id: 'dark', label: 'Material dark' },
  ];

  readonly variantOptions: BrightrailPaginationVariant[] = [
    'numbered',
    'minimal',
    'simple',
    'icon-only',
    'mobile',
    'mobile-sheet',
  ];
  readonly sizeOptions: BrightrailPaginationSize[] = ['sm', 'md', 'lg'];
  readonly stateOptions: BrightrailPaginationState[] = ['default', 'disabled'];
  readonly summaryOptions: BrightrailPaginationSummaryMode[] = [
    'none',
    'range',
    'results',
    'filtered',
    'server',
  ];
  readonly pageSizePosOptions: BrightrailPaginationPageSizePosition[] = ['start', 'end', 'both'];

  readonly selectedRecipeGroup = signal<string>('Basics');
  readonly recipe = signal<PaginationRecipe>('basics-standard');

  readonly variant = signal<BrightrailPaginationVariant>('numbered');
  readonly size = signal<BrightrailPaginationSize>('md');
  readonly state = signal<BrightrailPaginationState>('default');
  readonly compact = signal(false);

  readonly length = signal(128);
  readonly pageIndex = signal(3);
  readonly pageSize = signal(10);
  readonly totalPagesOverride = signal<number | null>(null);

  readonly pageSizeOptions = signal<number[]>([10, 25, 50]);
  readonly pageSizeOptionsText = signal('10, 25, 50');

  readonly showPageSize = signal(false);
  readonly showFirstLast = signal(true);
  readonly showPrevNext = signal(true);
  readonly pageSizePosition = signal<BrightrailPaginationPageSizePosition>('end');
  readonly summaryMode = signal<BrightrailPaginationSummaryMode>('none');
  readonly summaryItemsLabel = signal('items');
  readonly showJumpToPage = signal(false);
  readonly maxPageButtons = signal(7);

  readonly activeTab = signal<CodeTabId>('html');

  readonly activeSnippet = computed(() => {
    switch (this.activeTab()) {
      case 'ts':
        return this.buildTs();
      case 'scss':
        return this.buildScss();
      default:
        return this.buildHtml();
    }
  });

  recipesInGroup(group: string): { value: PaginationRecipe; label: string }[] {
    return this.recipeOptions.filter((r) => r.group === group).map((r) => ({ value: r.value, label: r.label }));
  }

  onRecipeGroupNgModelChange(v: string): void {
    this.selectedRecipeGroup.set(v);
    const next = this.recipesInGroup(v)[0]?.value;
    if (next) this.onRecipeNgModelChange(next);
  }

  onRecipeNgModelChange(v: string): void {
    const recipe = v as PaginationRecipe;
    this.recipe.set(recipe);
    this.applyRecipe(recipe);
  }

  applyRecipe(recipe: PaginationRecipe): void {
    this.variant.set('numbered');
    this.size.set('md');
    this.state.set('default');
    this.compact.set(false);
    this.length.set(128);
    this.pageIndex.set(3);
    this.pageSize.set(10);
    this.totalPagesOverride.set(null);
    this.pageSizeOptions.set([10, 25, 50]);
    this.pageSizeOptionsText.set('10, 25, 50');
    this.showPageSize.set(false);
    this.showFirstLast.set(true);
    this.showPrevNext.set(true);
    this.pageSizePosition.set('end');
    this.summaryMode.set('none');
    this.summaryItemsLabel.set('items');
    this.showJumpToPage.set(false);
    this.maxPageButtons.set(7);

    if (recipe === 'basics-minimal') {
      this.maxPageButtons.set(5);
    } else if (recipe === 'basics-compact-num') {
      this.compact.set(true);
    } else if (recipe === 'basics-simple') {
      this.variant.set('simple');
      this.showFirstLast.set(false);
    } else if (recipe === 'size-sm') this.size.set('sm');
    else if (recipe === 'size-md') this.size.set('md');
    else if (recipe === 'size-lg') this.size.set('lg');
    else if (recipe === 'state-disabled') this.state.set('disabled');
    else if (recipe === 'range-ellipsis') {
      this.length.set(500);
      this.pageSize.set(10);
      this.pageIndex.set(24);
    } else if (recipe === 'page-size-start') {
      this.showPageSize.set(true);
      this.pageSizePosition.set('start');
    } else if (recipe === 'page-size-end') {
      this.showPageSize.set(true);
      this.pageSizePosition.set('end');
    } else if (recipe === 'page-size-both') {
      this.showPageSize.set(true);
      this.pageSizePosition.set('both');
    } else if (recipe === 'summary-range') {
      this.summaryMode.set('range');
    } else if (recipe === 'summary-results') {
      this.summaryMode.set('results');
    } else if (recipe === 'summary-filtered') {
      this.summaryMode.set('filtered');
      this.length.set(26);
    } else if (recipe === 'mobile-stack') {
      this.variant.set('mobile');
      this.showFirstLast.set(false);
    } else if (recipe === 'mobile-sheet-ui') {
      this.variant.set('mobile-sheet');
      this.showFirstLast.set(false);
    } else if (recipe === 'icon-only-pager') {
      this.variant.set('icon-only');
      this.showFirstLast.set(false);
    } else if (recipe === 'jump-page') {
      this.showJumpToPage.set(true);
      this.totalPagesOverride.set(20);
      this.length.set(200);
    } else if (recipe === 'summary-server') {
      this.summaryMode.set('server');
    } else if (recipe === 'empty-results') {
      this.length.set(0);
      this.pageIndex.set(0);
      this.summaryMode.set('results');
    }
  }

  resetToDefaults(): void {
    this.previewFx.set('inherit');
    this.selectedRecipeGroup.set('Basics');
    this.onRecipeNgModelChange('basics-standard');
  }

  onPageChange(ix: number): void {
    this.pageIndex.set(ix);
  }

  /** From pager component when user picks a new rows-per-page value. */
  onPageSizeFromPager(sz: number): void {
    this.pageSize.set(sz);
    this.pageIndex.set(0);
  }

  onTotalPagesOverrideChange(v: number | string | null): void {
    if (v === '' || v === null || v === undefined || (typeof v === 'number' && !Number.isFinite(v))) {
      this.totalPagesOverride.set(null);
      return;
    }
    const n = typeof v === 'string' ? parseInt(v, 10) : v;
    this.totalPagesOverride.set(Number.isFinite(n) ? n : null);
  }

  onPageSizeOptionsTextChange(raw: string): void {
    this.pageSizeOptionsText.set(raw);
    const parsed = raw
      .split(/[,\s]+/)
      .map((s) => parseInt(s.trim(), 10))
      .filter((n) => Number.isFinite(n) && n > 0);
    if (parsed.length) {
      this.pageSizeOptions.set(parsed);
    }
  }

  totalPagesBinding(): number | undefined {
    const v = this.totalPagesOverride();
    return v === null ? undefined : v;
  }

  buildHtml(): string {
    const opts = this.pageSizeOptions().join(', ');
    const tp = this.totalPagesOverride();
    const tpLine =
      tp === null ? '' : `\n  [totalPages]="${tp}"`;
    return `<!-- Recipe: ${this.recipe()} -->
<brightrail-pagination
  [length]="${this.length()}"
  [pageIndex]="${this.pageIndex()}"
  [pageSize]="${this.pageSize()}"${tpLine}
  [pageSizeOptions]="[${opts}]"
  [showPageSize]="${this.showPageSize()}"
  [showFirstLast]="${this.showFirstLast()}"
  [showPrevNext]="${this.showPrevNext()}"
  [variant]="'${this.variant()}'"
  [size]="'${this.size()}'"
  [state]="'${this.state()}'"
  [compact]="${this.compact()}"
  [pageSizePosition]="'${this.pageSizePosition()}'"
  [summaryMode]="'${this.summaryMode()}'"
  [summaryItemsLabel]="'${this.summaryItemsLabel()}'"
  [showJumpToPage]="${this.showJumpToPage()}"
  [maxPageButtons]="${this.maxPageButtons()}"
  ariaLabel="Pagination navigation"
  (pageChange)="onPage($event)"
  (pageSizeChange)="onPageSize($event)" />`;
  }

  buildTs(): string {
    return `// Recipe: ${this.recipe()}
import { Component, signal } from '@angular/core';
import { BrightrailPaginationComponent } from 'brightrail';

@Component({
  selector: 'app-example',
  standalone: true,
  imports: [BrightrailPaginationComponent],
  templateUrl: './example.component.html',
})
export class ExampleComponent {
  readonly pageIndex = signal(${this.pageIndex()});

  onPage(ix: number): void {
    this.pageIndex.set(ix);
  }

  onPageSize(size: number): void {
    /* update collection page size */
  }
}`;
  }

  buildScss(): string {
    return `/* Wrap pagination in toolbars or sticky footers as needed */
:host {
  display: block;
}`;
  }

  selectTab(tab: CodeTabId): void {
    this.activeTab.set(tab);
  }

  copySnippet(): void {
    void navigator.clipboard?.writeText(this.activeSnippet());
  }
}
