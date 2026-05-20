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
  BrightrailAppShellComponent,
  BrightrailAppShellSidebarPosition,
  BrightrailButtonComponent,
  BrightrailPageHeaderActionsDirective,
  BrightrailPageHeaderComponent,
  BrightrailPageSubtitleDirective,
  BrightrailPageTitleDirective,
  BrightrailSidebarComponent,
  BrightrailTopBarComponent,
} from 'brightrail';

import { PlaygroundThemeId, PlaygroundThemeService } from '../playground-theme.service';

type CodeTabId = 'html' | 'ts' | 'scss';

type AppShellRecipe =
  | 'core-full'
  | 'sidebar-right'
  | 'no-sidebar'
  | 'no-topbar'
  | 'page-header'
  | 'topbar-slots'
  | 'compact';

type AppShellNavId = 'overview' | 'projects' | 'settings';

type AppShellNavItem = {
  id: AppShellNavId;
  label: string;
  title: string;
  subtitle: string;
  content: string;
};

const APP_SHELL_NAV_ITEMS: AppShellNavItem[] = [
  {
    id: 'overview',
    label: 'Overview',
    title: 'Overview',
    subtitle: 'Workspace summary',
    content: 'Main content area for the selected scenario.',
  },
  {
    id: 'projects',
    label: 'Projects',
    title: 'Projects',
    subtitle: 'Active initiatives',
    content: 'Project list and status cards appear here in a real app shell.',
  },
  {
    id: 'settings',
    label: 'Settings',
    title: 'Settings',
    subtitle: 'Account preferences',
    content: 'Profile, notifications, and workspace settings would render here.',
  },
];

@Component({
  selector: 'app-app-shell-playground',
  standalone: true,
  imports: [
    PlaygroundPreviewHeaderComponent,
    FormsModule,
    BrightrailAppShellComponent,
    BrightrailButtonComponent,
    BrightrailSidebarComponent,
    BrightrailTopBarComponent,
    BrightrailPageHeaderComponent,
    BrightrailPageTitleDirective,
    BrightrailPageSubtitleDirective,
    BrightrailPageHeaderActionsDirective,
  ],
  templateUrl: './app-shell-playground.component.html',
  styleUrl: './app-shell-playground.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppShellPlaygroundComponent {
  readonly previewOnly = injectPlaygroundA11yPreviewMode();
  readonly a11yPreviewState = computed(() =>
    snapshotPlaygroundState({
      recipe: () => this.recipe(),
      activeNavId: () => this.activeNavId(),
      sidebarPosition: () => this.sidebarPosition(),
      showSidebar: () => this.showSidebar(),
      showTopBar: () => this.showTopBar(),
      sidebarWidth: () => this.sidebarWidth(),
      sidebarAriaLabel: () => this.sidebarAriaLabel(),
      pageTitle: () => this.pageTitle(),
      pageSubtitle: () => this.pageSubtitle(),
      showPageHeader: () => this.showPageHeader(),
      showHeaderActions: () => this.showHeaderActions(),
      topBarBrand: () => this.topBarBrand(),
      topBarCenter: () => this.topBarCenter(),
      topBarEnd: () => this.topBarEnd(),
    }),
  );

  constructor() {
    initPlaygroundA11yPreview('app-shell', this.previewOnly, (state) =>
      this.restoreA11yPreviewState(state),
    );
  }
  private restoreA11yPreviewState(state: unknown): void {
    if (!state || typeof state !== 'object') {
      return;
    }
    const snapshot = state as Record<string, unknown>;
    if (typeof snapshot['recipe'] === 'string') {
      this.applyRecipe(snapshot['recipe'] as AppShellRecipe);
      if (typeof snapshot['activeNavId'] === 'string') {
        this.selectNav(snapshot['activeNavId'] as AppShellNavId);
      }
      return;
    }

    restorePlaygroundState(state, {
      recipe: this.recipe as WritableSignal<unknown>,
      activeNavId: this.activeNavId as WritableSignal<unknown>,
      sidebarPosition: this.sidebarPosition as WritableSignal<unknown>,
      showSidebar: this.showSidebar as WritableSignal<unknown>,
      showTopBar: this.showTopBar as WritableSignal<unknown>,
      sidebarWidth: this.sidebarWidth as WritableSignal<unknown>,
      sidebarAriaLabel: this.sidebarAriaLabel as WritableSignal<unknown>,
      pageTitle: this.pageTitle as WritableSignal<unknown>,
      pageSubtitle: this.pageSubtitle as WritableSignal<unknown>,
      showPageHeader: this.showPageHeader as WritableSignal<unknown>,
      showHeaderActions: this.showHeaderActions as WritableSignal<unknown>,
      topBarBrand: this.topBarBrand as WritableSignal<unknown>,
      topBarCenter: this.topBarCenter as WritableSignal<unknown>,
      topBarEnd: this.topBarEnd as WritableSignal<unknown>,
    });

    if (typeof snapshot['activeNavId'] === 'string') {
      this.selectNav(snapshot['activeNavId'] as AppShellNavId);
    }
  }

  readonly themeService = inject(PlaygroundThemeService);
  readonly ngModelStandalone = { standalone: true };
  readonly shellNavItems = APP_SHELL_NAV_ITEMS;

  readonly recipeGroups = ['Basics', 'Layout', 'Regions', 'Advanced'] as const;

  readonly recipeOptions: { value: AppShellRecipe; label: string; group: string }[] = [
    { value: 'core-full', label: 'Full shell', group: 'Basics' },
    { value: 'sidebar-right', label: 'Right sidebar', group: 'Layout' },
    { value: 'no-sidebar', label: 'No sidebar', group: 'Layout' },
    { value: 'no-topbar', label: 'No top bar', group: 'Regions' },
    { value: 'page-header', label: 'Page header focus', group: 'Regions' },
    { value: 'topbar-slots', label: 'Top bar slots', group: 'Regions' },
    { value: 'compact', label: 'Compact sidebar', group: 'Advanced' },
  ];

  readonly themeRowOptions: { id: PlaygroundThemeId; label: string }[] = [
    { id: 'light', label: 'Material light' },
    { id: 'dark', label: 'Material dark' },
  ];

  readonly sidebarPositionOptions: BrightrailAppShellSidebarPosition[] = ['left', 'right'];

  readonly selectedRecipeGroup = signal<string>('Basics');
  readonly recipe = signal<AppShellRecipe>('core-full');
  readonly activeNavId = signal<AppShellNavId>('overview');

  readonly activeNavContent = computed(
    () => this.shellNavItems.find((item) => item.id === this.activeNavId())?.content ?? '',
  );

  readonly sidebarPosition = signal<BrightrailAppShellSidebarPosition>('left');
  readonly showSidebar = signal(true);
  readonly showTopBar = signal(true);
  readonly sidebarWidth = signal('16rem');
  readonly sidebarAriaLabel = signal('Application navigation');
  readonly pageTitle = signal('Overview');
  readonly pageSubtitle = signal('Workspace summary');
  readonly showPageHeader = signal(true);
  readonly showHeaderActions = signal(true);
  readonly topBarBrand = signal('Acme');
  readonly topBarCenter = signal('Dashboard');
  readonly topBarEnd = signal('Help');

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

  recipesInGroup(group: string): { value: AppShellRecipe; label: string }[] {
    return this.recipeOptions.filter((r) => r.group === group).map((r) => ({ value: r.value, label: r.label }));
  }

  onRecipeGroupNgModelChange(v: string): void {
    this.selectedRecipeGroup.set(v);
    const next = this.recipesInGroup(v)[0]?.value;
    if (next) this.onRecipeNgModelChange(next);
  }

  onRecipeNgModelChange(v: string): void {
    const next = v as AppShellRecipe;
    this.recipe.set(next);
    this.applyRecipe(next);
  }

  selectNav(navId: AppShellNavId): void {
    const item = this.shellNavItems.find((entry) => entry.id === navId);
    if (!item) {
      return;
    }
    this.activeNavId.set(navId);
    this.pageTitle.set(item.title);
    this.pageSubtitle.set(item.subtitle);
  }

  applyRecipe(recipe: AppShellRecipe): void {
    this.activeNavId.set('overview');
    this.showSidebar.set(true);
    this.showTopBar.set(true);
    this.showPageHeader.set(true);
    this.showHeaderActions.set(true);
    this.sidebarPosition.set('left');
    this.sidebarWidth.set('16rem');
    this.pageTitle.set('Overview');
    this.pageSubtitle.set('Workspace summary');

    switch (recipe) {
      case 'core-full':
        this.topBarBrand.set('Acme');
        this.topBarCenter.set('Dashboard');
        this.topBarEnd.set('Help');
        break;
      case 'sidebar-right':
        this.sidebarPosition.set('right');
        this.pageTitle.set('Settings');
        this.pageSubtitle.set('Account preferences');
        break;
      case 'no-sidebar':
        this.showSidebar.set(false);
        this.pageTitle.set('Analytics');
        this.pageSubtitle.set('Full-width dashboard');
        break;
      case 'no-topbar':
        this.showTopBar.set(false);
        this.pageTitle.set('Documents');
        this.pageSubtitle.set('Sidebar-only layout');
        break;
      case 'page-header':
        this.showTopBar.set(false);
        this.showSidebar.set(false);
        this.pageTitle.set('Reports');
        this.pageSubtitle.set('Q1 summary');
        break;
      case 'topbar-slots':
        this.showPageHeader.set(false);
        this.topBarBrand.set('☰ Menu');
        this.topBarCenter.set('Search workspace');
        this.topBarEnd.set('Profile');
        break;
      case 'compact':
        this.sidebarWidth.set('12rem');
        this.sidebarAriaLabel.set('Primary navigation');
        this.pageSubtitle.set('');
        this.pageTitle.set('Inbox');
        break;
    }
  }

  resetToDefaults(): void {
    this.selectedRecipeGroup.set('Basics');
    this.onRecipeNgModelChange('core-full');
    this.themeService.setTheme('light');
    this.activeTab.set('html');
    this.sidebarAriaLabel.set('Application navigation');
    this.activeNavId.set('overview');
  }

  sidebarNavMarkup(): string {
    return this.shellNavItems
      .map((item) => {
        const current = item.id === this.activeNavId() ? ' aria-current="page"' : '';
        return `<li><button type="button"${current}>${item.label}</button></li>`;
      })
      .join('\n    ');
  }

  buildHtml(): string {
    const headerAction = this.headerActionButtonMarkup();
    const topBarEnd = this.topBarEndMarkup();
    return `<!-- Recipe: ${this.recipe()} -->
<brightrail-app-shell
  sidebarPosition="${this.sidebarPosition()}"
  [showSidebar]="${this.showSidebar()}"
  [showTopBar]="${this.showTopBar()}"
  sidebarWidth="${this.sidebarWidth()}"
  sidebarAriaLabel="${this.sidebarAriaLabel()}"
>
  <brightrail-top-bar>
    <span brightrailTopBarStart>${this.topBarBrand()}</span>
    <span brightrailTopBarCenter>${this.topBarCenter()}</span>
    <span brightrailTopBarEnd>${topBarEnd}</span>
  </brightrail-top-bar>
  <brightrail-sidebar>
    ${this.sidebarNavMarkup()}
  </brightrail-sidebar>
  <brightrail-page-header>
    <h1 brightrailPageTitle>${this.pageTitle()}</h1>
    <p brightrailPageSubtitle>${this.pageSubtitle()}</p>
    <div brightrailPageHeaderActions>
      ${headerAction}
    </div>
  </brightrail-page-header>
  <p>${this.activeNavContent()}</p>
</brightrail-app-shell>`;
  }

  private headerActionButtonMarkup(): string {
    if (this.recipe() === 'page-header') {
      return '<brightrail-button variant="outline" size="sm">Export</brightrail-button>';
    }
    return '<brightrail-button variant="primary" size="sm">New project</brightrail-button>';
  }

  private topBarEndMarkup(): string {
    if (this.recipe() === 'topbar-slots') {
      return '<brightrail-button variant="ghost" size="sm">Profile</brightrail-button>';
    }
    return this.topBarEnd();
  }

  buildTs(): string {
    return `// Recipe: ${this.recipe()}
import { Component } from '@angular/core';
import {
  BrightrailAppShellComponent,
  BrightrailButtonComponent,
  BrightrailPageHeaderActionsDirective,
  BrightrailPageHeaderComponent,
  BrightrailPageSubtitleDirective,
  BrightrailPageTitleDirective,
  BrightrailSidebarComponent,
  BrightrailTopBarComponent,
} from 'brightrail';

@Component({
  selector: 'app-example',
  standalone: true,
  imports: [
    BrightrailAppShellComponent,
    BrightrailSidebarComponent,
    BrightrailTopBarComponent,
    BrightrailPageHeaderComponent,
    BrightrailPageTitleDirective,
    BrightrailPageSubtitleDirective,
    BrightrailPageHeaderActionsDirective,
    BrightrailButtonComponent,
  ],
  templateUrl: './example.component.html',
})
export class ExampleComponent {}`;
  }

  buildScss(): string {
    return `/* Give the shell a bounded height in playground or app root */
.app-shell-host {
  block-size: 100vh;
  min-block-size: 24rem;
}`;
  }

  selectTab(tab: CodeTabId): void {
    this.activeTab.set(tab);
  }

  copySnippet(): void {
    void navigator.clipboard?.writeText(this.activeSnippet());
  }
}
