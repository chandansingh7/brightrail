import { TitleCasePipe } from '@angular/common';
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
  BrightrailBreadcrumbComponent,
  BrightrailBreadcrumbCurrentItemStyle,
  BrightrailBreadcrumbItem,
  BrightrailBreadcrumbSeparator,
  BrightrailBreadcrumbSize,
  BrightrailBreadcrumbTruncation,
} from 'brightrail';

import { PlaygroundThemeId, PlaygroundThemeService } from '../playground-theme.service';
import { createPlaygroundPreviewFx } from '../shared/playground-fx.util';
import { PlaygroundFxSettingsComponent } from '../shared/playground-fx-settings.component';

type CodeTabId = 'html' | 'ts' | 'scss';
type BreadcrumbScenario = 'standard' | 'enterprise' | 'mobile' | 'futuristic';

@Component({
  selector: 'app-breadcrumb-playground',
  standalone: true,
  imports: [
    PlaygroundPreviewHeaderComponent,FormsModule, TitleCasePipe, BrightrailBreadcrumbComponent, PlaygroundFxSettingsComponent],
  templateUrl: './breadcrumb-playground.component.html',
  styleUrl: './breadcrumb-playground.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BreadcrumbPlaygroundComponent {
  readonly previewOnly = injectPlaygroundA11yPreviewMode();
  readonly a11yPreviewState = computed(() =>
    snapshotPlaygroundState({
      scenario: () => this.scenario(),
      separator: () => this.separator(),
      withIcons: () => this.withIcons(),
      boxed: () => this.boxed(),
      maxItems: () => this.maxItems(),
      truncation: () => this.truncation(),
      currentItemStyle: () => this.currentItemStyle(),
      size: () => this.size(),
      items: () => this.items(),
    }),
  );


  readonly themeService = inject(PlaygroundThemeService);
  private readonly _playgroundFx = createPlaygroundPreviewFx();
  readonly previewFx = this._playgroundFx.previewFx;
  readonly resolvedFxShell = this._playgroundFx.resolvedFxShell;
  readonly ngModelStandalone = { standalone: true };

  readonly recipeGroups = ['Basics', 'Enterprise', 'Futuristic'] as const;
  readonly recipeOptions: { value: BreadcrumbScenario; label: string; group: string }[] = [
    { value: 'standard', label: 'Standard', group: 'Basics' },
    { value: 'mobile', label: 'Mobile compact', group: 'Basics' },
    { value: 'enterprise', label: 'Enterprise path', group: 'Enterprise' },
    { value: 'futuristic', label: 'Futuristic accent', group: 'Futuristic' },
  ];

  readonly separatorOptions: BrightrailBreadcrumbSeparator[] = ['chevron', 'slash', 'dot', 'arrow'];
  readonly truncationOptions: BrightrailBreadcrumbTruncation[] = ['none', 'collapse-middle'];
  readonly currentStyleOptions: BrightrailBreadcrumbCurrentItemStyle[] = ['text', 'pill', 'accent'];
  readonly sizeOptions: BrightrailBreadcrumbSize[] = ['xs', 'sm', 'md', 'lg', 'xl'];
  readonly themeRowOptions: { id: PlaygroundThemeId; label: string }[] = [
    { id: 'light', label: 'Material light' },
    { id: 'dark', label: 'Material dark' },
  ];

  readonly selectedRecipeGroup = signal<string>('Basics');
  readonly scenario = signal<BreadcrumbScenario>('standard');
  readonly separator = signal<BrightrailBreadcrumbSeparator>('slash');
  readonly withIcons = signal(true);
  readonly boxed = signal(true);
  readonly maxItems = signal(4);
  readonly truncation = signal<BrightrailBreadcrumbTruncation>('collapse-middle');
  readonly currentItemStyle = signal<BrightrailBreadcrumbCurrentItemStyle>('text');
  readonly size = signal<BrightrailBreadcrumbSize>('md');

  readonly activeTab = signal<CodeTabId>('html');

  readonly items = signal<BrightrailBreadcrumbItem[]>([
    { label: 'Home', href: '/', icon: 'home' },
    { label: 'Projects', href: '/projects' },
    { label: 'Design system', href: '/design-system' },
    { label: 'Component library', current: true },
  ]);

  constructor() {
    initPlaygroundA11yPreview('breadcrumb', this.previewOnly);
    this.applyScenario('standard');
  }

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

  recipesInGroup(group: string): { value: BreadcrumbScenario; label: string }[] {
    return this.recipeOptions.filter((x) => x.group === group).map((x) => ({ value: x.value, label: x.label }));
  }

  onRecipeGroupNgModelChange(v: string): void {
    this.selectedRecipeGroup.set(v);
    const next = this.recipesInGroup(v)[0]?.value;
    if (next) this.onScenarioNgModelChange(next);
  }

  onScenarioNgModelChange(v: string): void {
    const recipe = v as BreadcrumbScenario;
    this.scenario.set(recipe);
    this.applyScenario(recipe);
  }

  applyScenario(recipe: BreadcrumbScenario): void {
    this.separator.set('slash');
    this.withIcons.set(true);
    this.maxItems.set(4);
    this.truncation.set('collapse-middle');
    this.currentItemStyle.set('text');
    this.size.set('md');
    this.boxed.set(true);
    this.items.set([
      { label: 'Home', href: '/', icon: 'home' },
      { label: 'Projects', href: '/projects' },
      { label: 'Design system', href: '/design-system' },
      { label: 'Component library', current: true },
    ]);

    if (recipe === 'mobile') {
      this.size.set('sm');
      this.maxItems.set(3);
      this.withIcons.set(false);
      this.boxed.set(false);
      this.items.set([
        { label: 'Back', href: '/' },
        { label: 'Settings', href: '/settings' },
        { label: 'Profile', current: true },
      ]);
    } else if (recipe === 'enterprise') {
      this.separator.set('chevron');
      this.boxed.set(true);
      this.items.set([
        { label: 'Organization', href: '/org', icon: '🏢' },
        { label: 'Projects', href: '/projects', icon: '📁' },
        { label: 'Website redesign', href: '/website' },
        { label: 'Tasks', current: true },
      ]);
    } else if (recipe === 'futuristic') {
      this.separator.set('dot');
      this.currentItemStyle.set('pill');
      this.boxed.set(true);
      this.items.set([
        { label: 'Home', href: '/', icon: 'home' },
        { label: 'Products', href: '/products' },
        { label: 'Categories', href: '/categories' },
        { label: 'Laptops', current: true },
      ]);
    }
  }

  resetToDefaults(): void {
    this.previewFx.set('inherit');
    this.selectedRecipeGroup.set('Basics');
    this.onScenarioNgModelChange('standard');
    this.themeService.setTheme('light');
    this.activeTab.set('html');
  }

  selectTab(tab: CodeTabId): void {
    this.activeTab.set(tab);
  }

  copySnippet(): void {
    void navigator.clipboard?.writeText(this.activeSnippet());
  }

  private buildHtml(): string {
    return [
      `<brightrail-breadcrumb`,
      `  [boxed]="${this.boxed()}"`,
      `  separator="${this.separator()}"`,
      `  [withIcons]="${this.withIcons()}"`,
      `  [maxItems]="${this.maxItems()}"`,
      `  truncation="${this.truncation()}"`,
      `  currentItemStyle="${this.currentItemStyle()}"`,
      `  size="${this.size()}"`,
      `  [items]="breadcrumbItems"`,
      `/>`,
    ].join('\n');
  }

  private buildTs(): string {
    return [
      `import { BrightrailBreadcrumbItem } from 'brightrail';`,
      ``,
      `breadcrumbItems: BrightrailBreadcrumbItem[] = [`,
      `  { label: 'Home', href: '/', icon: 'home' },`,
      `  { label: 'Projects', href: '/projects' },`,
      `  { label: 'Design system', href: '/design-system' },`,
      `  { label: 'Component library', current: true },`,
      `];`,
    ].join('\n');
  }

  private buildScss(): string {
    return `.breadcrumb-shell { padding: 0.75rem; border: 1px solid var(--ff-border); border-radius: 0.6rem; }`;
  }
}
