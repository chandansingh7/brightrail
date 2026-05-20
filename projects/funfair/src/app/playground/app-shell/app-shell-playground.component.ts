import { ChangeDetectionStrategy, Component, computed, inject, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {
  BrightrailAppShellComponent,
  BrightrailAppShellSidebarPosition,
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

@Component({
  selector: 'app-app-shell-playground',
  standalone: true,
  imports: [
    FormsModule,
    BrightrailAppShellComponent,
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
  readonly themeService = inject(PlaygroundThemeService);
  readonly ngModelStandalone = { standalone: true };

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

  applyRecipe(recipe: AppShellRecipe): void {
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
  }

  buildHtml(): string {
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
    <span brightrailTopBarEnd>${this.topBarEnd()}</span>
  </brightrail-top-bar>
  <brightrail-sidebar>
    <li><a href="#" aria-current="page">Overview</a></li>
    <li><a href="#">Projects</a></li>
  </brightrail-sidebar>
  <brightrail-page-header>
    <h1 brightrailPageTitle>${this.pageTitle()}</h1>
    <p brightrailPageSubtitle>${this.pageSubtitle()}</p>
    <div brightrailPageHeaderActions>
      <button type="button">New project</button>
    </div>
  </brightrail-page-header>
  <p>Main content area</p>
</brightrail-app-shell>`;
  }

  buildTs(): string {
    return `// Recipe: ${this.recipe()}
import { Component } from '@angular/core';
import {
  BrightrailAppShellComponent,
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
