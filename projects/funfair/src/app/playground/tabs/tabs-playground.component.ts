import { TitleCasePipe, UpperCasePipe } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  computed,
  inject,
  signal,
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
import {
  BrightrailTabComponent,
  BrightrailTabContentDirective,
  BrightrailTabsAppearance,
  BrightrailTabsComponent,
  BrightrailTabsCorners,
  BrightrailTabsOrientation,
  BrightrailTabsSize,
  BrightrailTabsState,
  BrightrailTabsStatus,
  BrightrailTabsTriggerLayout,
  BrightrailTabIconName,
} from 'brightrail';

import { PlaygroundThemeId, PlaygroundThemeService } from '../playground-theme.service';

export type CodeTabId = 'html' | 'ts' | 'scss';

export type TabsPreviewRecipe =
  | 'standardTabs'
  | 'iconOnlyTabs'
  | 'iconLabelTabs'
  | 'badgeTabs'
  | 'closableTabs'
  | 'stepsWizard'
  | 'analyticsStacked'
  | 'verticalNav'
  | 'scrollableStrip'
  | 'nestedComposite'
  | 'compactToolbar';

interface TabPlayDef {
  label: string;
  body: string;
  icon?: BrightrailTabIconName;
  iconOnly?: boolean;
  badge?: number;
  closable?: boolean;
  active?: boolean;
}

@Component({
  selector: 'app-tabs-playground',
  standalone: true,
  imports: [
    PlaygroundPreviewHeaderComponent,
    BrightrailTabsComponent,
    BrightrailTabComponent,
    BrightrailTabContentDirective,
    TitleCasePipe,
    UpperCasePipe,
  ],
  templateUrl: './tabs-playground.component.html',
  styleUrl: './tabs-playground.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TabsPlaygroundComponent {
  readonly previewOnly = injectPlaygroundA11yPreviewMode();
  readonly a11yPreviewState = computed(() =>
    snapshotPlaygroundState({
      previewRecipe: () => this.previewRecipe(),
      appearance: () => this.appearance(),
      orientation: () => this.orientation(),
      status: () => this.status(),
      size: () => this.size(),
      corners: () => this.corners(),
      barState: () => this.barState(),
      triggerLayout: () => this.triggerLayout(),
      scrollable: () => this.scrollable(),
      closableDefs: () => this.closableDefs(),
    }),
  );

  constructor() {
    initPlaygroundA11yPreview('tabs', this.previewOnly, (state) =>
      this.restoreA11yPreviewState(state),
    );
  }
  private restoreA11yPreviewState(state: unknown): void {
    if (!state || typeof state !== 'object') {
      return;
    }
    const snapshot = state as Record<string, unknown>;
    
    restorePlaygroundState(state, {
      previewRecipe: this.previewRecipe as WritableSignal<unknown>,
      appearance: this.appearance as WritableSignal<unknown>,
      orientation: this.orientation as WritableSignal<unknown>,
      status: this.status as WritableSignal<unknown>,
      size: this.size as WritableSignal<unknown>,
      corners: this.corners as WritableSignal<unknown>,
      barState: this.barState as WritableSignal<unknown>,
      triggerLayout: this.triggerLayout as WritableSignal<unknown>,
      scrollable: this.scrollable as WritableSignal<unknown>,
      closableDefs: this.closableDefs as WritableSignal<unknown>,
    });
  }

  readonly themeService = inject(PlaygroundThemeService);

  readonly recipeGroups = ['Basics', 'Popular app', 'Layouts & density', 'Enterprise'];

  readonly recipeOptions: { value: TabsPreviewRecipe; label: string; group: string }[] = [
    { value: 'standardTabs', label: 'Standard tabs', group: 'Basics' },
    { value: 'iconOnlyTabs', label: 'Icon-only tabs', group: 'Basics' },
    { value: 'iconLabelTabs', label: 'Icon + label', group: 'Popular app' },
    { value: 'badgeTabs', label: 'Tabs with badges', group: 'Popular app' },
    { value: 'closableTabs', label: 'Closable tabs', group: 'Popular app' },
    { value: 'stepsWizard', label: 'Steps / wizard labels', group: 'Popular app' },
    { value: 'analyticsStacked', label: 'Analytics (stacked icon)', group: 'Popular app' },
    { value: 'verticalNav', label: 'Vertical navigation', group: 'Layouts & density' },
    { value: 'scrollableStrip', label: 'Scrollable tab strip', group: 'Layouts & density' },
    { value: 'compactToolbar', label: 'Compact density', group: 'Layouts & density' },
    { value: 'nestedComposite', label: 'Nested tab groups', group: 'Enterprise' },
  ];

  readonly appearanceOptions: BrightrailTabsAppearance[] = [
    'underline',
    'contained',
    'pill',
    'segmented',
  ];

  readonly orientationOptions: BrightrailTabsOrientation[] = ['horizontal', 'vertical'];

  readonly statusOptions: BrightrailTabsStatus[] = ['none', 'success', 'warning', 'error', 'info'];

  readonly sizeOptions: BrightrailTabsSize[] = ['sm', 'md', 'lg'];

  readonly cornersOptions: BrightrailTabsCorners[] = ['rounded', 'square'];

  readonly stateOptions: BrightrailTabsState[] = ['default', 'disabled'];

  readonly triggerLayoutOptions: { value: BrightrailTabsTriggerLayout; label: string }[] = [
    { value: 'inline', label: 'Inline icon + label' },
    { value: 'stacked', label: 'Stacked (icon above)' },
  ];

  readonly themeRowOptions: { id: PlaygroundThemeId; label: string }[] = [
    { id: 'light', label: 'Material light' },
    { id: 'dark', label: 'Material dark' },
  ];

  readonly selectedRecipeGroup = signal<string>('Basics');
  readonly previewRecipe = signal<TabsPreviewRecipe>('standardTabs');

  readonly appearance = signal<BrightrailTabsAppearance>('underline');
  readonly orientation = signal<BrightrailTabsOrientation>('horizontal');
  readonly status = signal<BrightrailTabsStatus>('none');
  readonly size = signal<BrightrailTabsSize>('md');
  readonly corners = signal<BrightrailTabsCorners>('rounded');
  readonly barState = signal<BrightrailTabsState>('default');
  readonly triggerLayout = signal<BrightrailTabsTriggerLayout>('inline');
  readonly scrollable = signal(false);

  readonly activeTab = signal<CodeTabId>('html');

  readonly closableDefs = signal<TabPlayDef[]>([
    { label: 'Overview', body: 'Pin boards and starred links.', active: true, closable: true },
    { label: 'Details', body: 'Metadata and ownership.', closable: true },
    { label: 'Activity', body: 'Recent edits and mentions.', closable: true },
  ]);

  recipesInGroup(group: string): { value: TabsPreviewRecipe; label: string }[] {
    return this.recipeOptions.filter((o) => o.group === group).map((o) => ({
      value: o.value,
      label: o.label,
    }));
  }

  readonly tabDefs = computed((): TabPlayDef[] => {
    switch (this.previewRecipe()) {
      case 'standardTabs':
        return [
          {
            label: 'Overview',
            body: 'Track profile details, usage, and recent updates in one place.',
            active: true,
          },
          { label: 'Details', body: 'Owners, tags, and workspace membership.' },
          { label: 'Activity', body: 'Imports, exports, and audit events.' },
          { label: 'Settings', body: 'Notifications and API keys.' },
        ];
      case 'iconOnlyTabs':
        return [
          { label: 'Overview', body: 'Summary metrics.', icon: 'calendar', iconOnly: true, active: true },
          { label: 'Search', body: 'Search results.', icon: 'search', iconOnly: true },
          { label: 'People', body: 'Members.', icon: 'user', iconOnly: true },
          { label: 'Filter', body: 'Filters.', icon: 'filter', iconOnly: true },
        ];
      case 'iconLabelTabs':
        return [
          { label: 'Overview', body: 'Highlights for this workspace.', icon: 'calendar', active: true },
          { label: 'Library', body: 'Saved queries and assets.', icon: 'copy' },
          { label: 'Alerts', body: 'Threshold breaches.', icon: 'warning' },
          { label: 'Settings', body: 'Team defaults.', icon: 'edit' },
        ];
      case 'badgeTabs':
        return [
          { label: 'Inbox', body: 'Unread threads.', active: true },
          { label: 'Alerts', body: 'Paged incidents.', badge: 3 },
          { label: 'Messages', body: 'DM backlog.', badge: 12 },
          { label: 'Archive', body: 'Older items.' },
        ];
      case 'closableTabs':
        return this.closableDefs();
      case 'stepsWizard':
        return [
          { label: '1 Details', body: 'Capture the basics before you continue.', active: true },
          { label: '2 Review', body: 'Confirm scope and owners.' },
          { label: '3 Confirm', body: 'Publish the change window.' },
        ];
      case 'analyticsStacked':
        return [
          { label: 'Traffic', body: 'Sessions and bounce rate.', icon: 'info', active: true },
          { label: 'Latency', body: 'p50 / p95 trend.', icon: 'calendar' },
          { label: 'Errors', body: 'Top failing routes.', icon: 'error' },
        ];
      case 'verticalNav':
        return [
          { label: 'Overview', body: 'Primary workspace snapshot.', active: true },
          { label: 'Members', body: 'Seat usage and roles.' },
          { label: 'Billing', body: 'Invoices and payment method.' },
          { label: 'Security', body: 'SSO and session policy.' },
        ];
      case 'scrollableStrip':
        return Array.from({ length: 12 }, (_, i) => ({
          label: `Segment ${i + 1}`,
          body: `Content for segment ${i + 1}.`,
          active: i === 0,
        }));
      case 'compactToolbar':
        return [
          { label: 'All', body: 'Everything in this view.', active: true },
          { label: 'Open', body: 'Unresolved items only.' },
          { label: 'Mine', body: 'Owned by you.' },
        ];
      case 'nestedComposite':
        return [
          { label: 'Workspace', body: '__nested__', active: true },
          { label: 'Billing', body: 'Plans and invoices.' },
        ];
      default:
        return [];
    }
  });

  readonly htmlSnippet = computed(() => this.buildHtml());
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

  selectSnippetTab(tab: CodeTabId): void {
    this.activeTab.set(tab);
  }

  onScenarioGroupChange(ev: Event): void {
    const g = (ev.target as HTMLSelectElement).value;
    this.selectedRecipeGroup.set(g);
    const choices = this.recipesInGroup(g);
    const cur = this.previewRecipe();
    if (!choices.some((c) => c.value === cur) && choices[0]) {
      this.onRecipeChange(choices[0].value);
    }
  }

  onRecipeChange(value: TabsPreviewRecipe): void {
    this.previewRecipe.set(value);
    const meta = this.recipeOptions.find((o) => o.value === value);
    if (meta) {
      this.selectedRecipeGroup.set(meta.group);
    }
    this.applyRecipeDefaults(value);
  }

  onScenarioChange(ev: Event): void {
    this.onRecipeChange((ev.target as HTMLSelectElement).value as TabsPreviewRecipe);
  }

  onAppearanceChange(ev: Event): void {
    this.appearance.set((ev.target as HTMLSelectElement).value as BrightrailTabsAppearance);
  }

  onOrientationChange(ev: Event): void {
    this.orientation.set((ev.target as HTMLSelectElement).value as BrightrailTabsOrientation);
  }

  onStatusChange(ev: Event): void {
    this.status.set((ev.target as HTMLSelectElement).value as BrightrailTabsStatus);
  }

  onSizeChange(ev: Event): void {
    this.size.set((ev.target as HTMLSelectElement).value as BrightrailTabsSize);
  }

  onCornersChange(ev: Event): void {
    this.corners.set((ev.target as HTMLSelectElement).value as BrightrailTabsCorners);
  }

  onBarStateChange(ev: Event): void {
    this.barState.set((ev.target as HTMLSelectElement).value as BrightrailTabsState);
  }

  onTriggerLayoutChange(ev: Event): void {
    this.triggerLayout.set((ev.target as HTMLSelectElement).value as BrightrailTabsTriggerLayout);
  }

  onToggleScrollable(ev: Event): void {
    this.scrollable.set((ev.target as HTMLInputElement).checked);
  }

  onThemeRowChange(ev: Event): void {
    this.themeService.setTheme((ev.target as HTMLSelectElement).value as PlaygroundThemeId);
  }

  onTabClose(label: string): void {
    if (this.previewRecipe() !== 'closableTabs') {
      return;
    }
    this.closableDefs.update((rows) => rows.filter((r) => r.label !== label));
  }

  resetToDefaults(): void {
    this.previewRecipe.set('standardTabs');
    this.applyRecipeDefaults('standardTabs');
    this.selectedRecipeGroup.set('Basics');
    this.themeService.setTheme('light');
    this.closableDefs.set([
      { label: 'Overview', body: 'Pin boards and starred links.', active: true, closable: true },
      { label: 'Details', body: 'Metadata and ownership.', closable: true },
      { label: 'Activity', body: 'Recent edits and mentions.', closable: true },
    ]);
  }

  effectiveScrollable(): boolean {
    return this.previewRecipe() === 'scrollableStrip' || this.scrollable();
  }

  private applyRecipeDefaults(r: TabsPreviewRecipe): void {
    switch (r) {
      case 'standardTabs':
        this.appearance.set('underline');
        this.orientation.set('horizontal');
        this.size.set('md');
        this.barState.set('default');
        this.status.set('none');
        this.scrollable.set(false);
        this.triggerLayout.set('inline');
        break;
      case 'iconOnlyTabs':
        this.appearance.set('underline');
        this.orientation.set('horizontal');
        this.size.set('md');
        break;
      case 'iconLabelTabs':
        this.appearance.set('contained');
        this.orientation.set('horizontal');
        this.size.set('md');
        break;
      case 'badgeTabs':
        this.appearance.set('pill');
        this.orientation.set('horizontal');
        break;
      case 'closableTabs':
        this.appearance.set('underline');
        this.orientation.set('horizontal');
        this.closableDefs.set([
          {
            label: 'Overview',
            body: 'Pin boards and starred links.',
            active: true,
            closable: true,
          },
          { label: 'Details', body: 'Metadata and ownership.', closable: true },
          { label: 'Activity', body: 'Recent edits and mentions.', closable: true },
        ]);
        break;
      case 'stepsWizard':
        this.appearance.set('segmented');
        this.orientation.set('horizontal');
        this.size.set('md');
        break;
      case 'analyticsStacked':
        this.appearance.set('underline');
        this.orientation.set('horizontal');
        this.triggerLayout.set('stacked');
        break;
      case 'verticalNav':
        this.appearance.set('underline');
        this.orientation.set('vertical');
        this.size.set('md');
        break;
      case 'scrollableStrip':
        this.appearance.set('underline');
        this.orientation.set('horizontal');
        this.scrollable.set(true);
        this.size.set('sm');
        break;
      case 'compactToolbar':
        this.appearance.set('underline');
        this.orientation.set('horizontal');
        this.size.set('sm');
        break;
      case 'nestedComposite':
        this.appearance.set('underline');
        this.orientation.set('horizontal');
        this.size.set('md');
        break;
      default:
        break;
    }
  }

  async copySnippet(): Promise<void> {
    await navigator.clipboard?.writeText(this.activeSnippet());
  }

  private buildHtml(): string {
    const lines: string[] = [
      '<brightrail-tabs',
      `  appearance="${this.appearance()}"`,
      `  orientation="${this.orientation()}"`,
      `  size="${this.size()}"`,
      `  corners="${this.corners()}"`,
      `  state="${this.barState()}"`,
      `  status="${this.status()}"`,
    ];
    if (this.effectiveScrollable()) {
      lines.push('  [scrollable]="true"');
    }
    if (this.triggerLayout() === 'stacked') {
      lines.push('  triggerLayout="stacked"');
    }
    lines.push('>');
    for (const t of this.tabDefs()) {
      lines.push(`  <brightrail-tab`);
      lines.push(`    label="${escapeAttr(t.label)}"`);
      if (t.icon) {
        lines.push(`    icon="${t.icon}"`);
      }
      if (t.iconOnly) {
        lines.push(`    [iconOnly]="true"`);
      }
      if (t.badge !== undefined) {
        lines.push(`    [badge]="${t.badge}"`);
      }
      if (t.closable) {
        lines.push(`    [closable]="true"`);
      }
      if (t.active) {
        lines.push(`    [active]="true"`);
      }
      lines.push(`  >`);
      lines.push(`    <ng-template brightrailTabContent>`);
      lines.push(`      <p>${escapePcdata(t.body)}</p>`);
      lines.push(`    </ng-template>`);
      lines.push(`  </brightrail-tab>`);
    }
    lines.push('</brightrail-tabs>');
    return lines.join('\n');
  }

  private buildTs(): string {
    return [
      `import { BrightrailTabsComponent, BrightrailTabComponent, BrightrailTabContentDirective } from 'brightrail';`,
      ``,
      `// Recipe: "${this.previewRecipe()}" — mirror the HTML tab in your standalone component imports.`,
    ].join('\n');
  }

  private buildScss(): string {
    return [
      `brightrail-tabs {`,
      `  /* Optional: tune density or panel spacing per surface */`,
      `}`,
    ].join('\n');
  }
}

function escapeAttr(text: string): string {
  return text.replace(/&/g, '&amp;').replace(/"/g, '&quot;');
}

function escapePcdata(text: string): string {
  return text.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
}
