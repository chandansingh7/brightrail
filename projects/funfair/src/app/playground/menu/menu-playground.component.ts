import {
  ChangeDetectionStrategy,
  Component,
  afterNextRender,
  computed,
  inject,
  signal,
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
import { FormsModule } from '@angular/forms';
import {
  BrightrailMenuComponent,
  BrightrailMenuItemComponent,
  BrightrailMenuTriggerDirective,
} from 'brightrail';

import { PlaygroundThemeId, PlaygroundThemeService } from '../playground-theme.service';
import { createPlaygroundPreviewFx } from '../shared/playground-fx.util';
import { PlaygroundFxSettingsComponent } from '../shared/playground-fx-settings.component';

type CodeTabId = 'html' | 'ts' | 'scss';

type MenuRecipe =
  | 'basic-actions'
  | 'overflow-trigger'
  | 'account-menu'
  | 'view-switcher'
  | 'disabled-item'
  | 'row-context'
  | 'bulk-actions'
  | 'split-save'
  | 'toolbar-pair'
  | 'activate-handler';

@Component({
  selector: 'app-menu-playground',
  standalone: true,
  imports: [
    PlaygroundPreviewHeaderComponent,
    FormsModule,
    BrightrailMenuComponent,
    BrightrailMenuItemComponent,
    BrightrailMenuTriggerDirective, PlaygroundFxSettingsComponent],
  templateUrl: './menu-playground.component.html',
  styleUrl: './menu-playground.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MenuPlaygroundComponent {
  readonly previewOnly = injectPlaygroundA11yPreviewMode();
  readonly a11yPreviewState = computed(() =>
    snapshotPlaygroundState({
      recipe: () => this.recipe(),
      triggerLabel: () => this.triggerLabel(),
      item1Label: () => this.item1Label(),
      item2Label: () => this.item2Label(),
      item3Label: () => this.item3Label(),
      item1Selected: () => this.item1Selected(),
      item2Selected: () => this.item2Selected(),
      item3Selected: () => this.item3Selected(),
      item1Disabled: () => this.item1Disabled(),
      item2Disabled: () => this.item2Disabled(),
      item3Disabled: () => this.item3Disabled(),
      lastAction: () => this.lastAction(),
    }),
  );


  private readonly menuRef = viewChild<BrightrailMenuComponent>('menuRef');
  private readonly filterMenuRef = viewChild<BrightrailMenuComponent>('filterMenuRef');

  readonly themeService = inject(PlaygroundThemeService);
  private readonly _playgroundFx = createPlaygroundPreviewFx();
  readonly previewFx = this._playgroundFx.previewFx;
  readonly resolvedFxShell = this._playgroundFx.resolvedFxShell;
  readonly ngModelStandalone = { standalone: true };

  constructor() {
    initPlaygroundA11yPreview('menu', this.previewOnly);
    afterNextRender(() => this.openPreviewMenu());
  }

  readonly recipeGroups = ['Core', 'States', 'Context', 'Layout', 'Advanced'] as const;
  readonly recipeOptions: { value: MenuRecipe; label: string; group: string }[] = [
    { value: 'basic-actions', label: 'Action menu', group: 'Core' },
    { value: 'overflow-trigger', label: 'Overflow (⋯)', group: 'Core' },
    { value: 'account-menu', label: 'Account menu', group: 'Core' },
    { value: 'view-switcher', label: 'View switcher (selected)', group: 'States' },
    { value: 'disabled-item', label: 'With disabled item', group: 'States' },
    { value: 'row-context', label: 'Table row context', group: 'Context' },
    { value: 'bulk-actions', label: 'Bulk actions', group: 'Context' },
    { value: 'split-save', label: 'Split save trigger', group: 'Layout' },
    { value: 'toolbar-pair', label: 'Filter + sort pair', group: 'Layout' },
    { value: 'activate-handler', label: 'Activate handlers', group: 'Advanced' },
  ];

  readonly yesNoOptions = [
    { value: 'no', label: 'No' },
    { value: 'yes', label: 'Yes' },
  ] as const;
  readonly themeRowOptions: { id: PlaygroundThemeId; label: string }[] = [
    { id: 'light', label: 'Material light' },
    { id: 'dark', label: 'Material dark' },
  ];

  readonly selectedRecipeGroup = signal<string>('Core');
  readonly recipe = signal<MenuRecipe>('basic-actions');
  readonly triggerLabel = signal('Actions');
  readonly item1Label = signal('Edit');
  readonly item2Label = signal('Duplicate');
  readonly item3Label = signal('Archive');
  readonly item1Selected = signal(false);
  readonly item2Selected = signal(false);
  readonly item3Selected = signal(false);
  readonly item1Disabled = signal(false);
  readonly item2Disabled = signal(false);
  readonly item3Disabled = signal(false);
  readonly lastAction = signal('');
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

  recipesInGroup(group: string): { value: MenuRecipe; label: string }[] {
    return this.recipeOptions.filter((r) => r.group === group).map((r) => ({ value: r.value, label: r.label }));
  }

  onRecipeGroupNgModelChange(v: string): void {
    this.selectedRecipeGroup.set(v);
    const first = this.recipesInGroup(v)[0]?.value;
    if (first) this.onRecipeNgModelChange(first);
  }

  onRecipeNgModelChange(v: string): void {
    const next = v as MenuRecipe;
    this.recipe.set(next);
    this.applyRecipe(next);
    queueMicrotask(() => this.openPreviewMenu());
  }

  /** Keep the dropdown visible in live preview (menus start closed by default). */
  private openPreviewMenu(): void {
    if (this.recipe() === 'toolbar-pair') {
      this.filterMenuRef()?.open();
      return;
    }
    this.menuRef()?.open();
  }

  applyRecipe(recipe: MenuRecipe): void {
    this.triggerLabel.set('Actions');
    this.item1Label.set('Edit');
    this.item2Label.set('Duplicate');
    this.item3Label.set('Archive');
    this.item1Selected.set(false);
    this.item2Selected.set(false);
    this.item3Selected.set(false);
    this.item1Disabled.set(false);
    this.item2Disabled.set(false);
    this.item3Disabled.set(false);
    this.lastAction.set('');

    switch (recipe) {
      case 'basic-actions':
        break;
      case 'overflow-trigger':
        this.triggerLabel.set('⋯');
        this.item1Label.set('Rename');
        this.item2Label.set('Move');
        this.item3Label.set('Delete');
        break;
      case 'account-menu':
        this.triggerLabel.set('Account');
        this.item1Label.set('Profile');
        this.item2Label.set('Settings');
        this.item3Label.set('Sign out');
        break;
      case 'view-switcher':
        this.triggerLabel.set('View');
        this.item1Label.set('List');
        this.item2Label.set('Board');
        this.item3Label.set('Calendar');
        this.item1Selected.set(true);
        break;
      case 'disabled-item':
        this.triggerLabel.set('Row actions');
        this.item1Label.set('Edit');
        this.item2Label.set('Share');
        this.item3Label.set('Delete');
        this.item3Disabled.set(true);
        break;
      case 'row-context':
        this.triggerLabel.set('⋯');
        this.item1Label.set('Open');
        this.item2Label.set('Assign');
        this.item3Label.set('Remove');
        break;
      case 'bulk-actions':
        this.triggerLabel.set('Bulk actions');
        this.item1Label.set('Export CSV');
        this.item2Label.set('Add tag');
        this.item3Label.set('Delete selected');
        break;
      case 'split-save':
        this.triggerLabel.set('▾');
        this.item1Label.set('Save and continue');
        this.item2Label.set('Save as draft');
        this.item3Label.set('Discard');
        this.item3Disabled.set(true);
        break;
      case 'toolbar-pair':
        this.triggerLabel.set('Filter');
        this.item1Label.set('Active only');
        this.item2Label.set('Archived');
        this.item3Label.set('All');
        this.item1Selected.set(true);
        break;
      case 'activate-handler':
        this.triggerLabel.set('File');
        this.item1Label.set('Download');
        this.item2Label.set('Print');
        this.item3Label.set('Share link');
        break;
    }
  }

  onItemActivate(which: 1 | 2 | 3): void {
    const labels = [this.item1Label(), this.item2Label(), this.item3Label()];
    this.lastAction.set(labels[which - 1] ?? '');
  }

  resetToDefaults(): void {
    this.previewFx.set('inherit');
    this.selectedRecipeGroup.set('Core');
    this.onRecipeNgModelChange('basic-actions');
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
    const items = [
      this.itemSnippet(1),
      this.itemSnippet(2),
      this.itemSnippet(3),
    ].join('\n  ');
    const trigger = `<button type="button" [brightrailMenuTrigger]="menu">${escapeAttr(this.triggerLabel())}</button>`;
    const menu = `<brightrail-menu #menu>\n  ${items}\n</brightrail-menu>`;
    if (this.recipe() === 'split-save') {
      return [
        '<span class="menu-split">',
        '  <button type="button" class="menu-split__primary">Save</button>',
        `  <button type="button" [brightrailMenuTrigger]="menu" aria-label="More save options">${escapeAttr(this.triggerLabel())}</button>`,
        '</span>',
        menu,
      ].join('\n');
    }
    if (this.recipe() === 'toolbar-pair') {
      return [
        '<span class="menu-toolbar">',
        `  <button type="button" [brightrailMenuTrigger]="filterMenu">${escapeAttr(this.triggerLabel())}</button>`,
        '  <button type="button" [brightrailMenuTrigger]="sortMenu">Sort</button>',
        '</span>',
        '<brightrail-menu #filterMenu>',
        `  <brightrail-menu-item label="${escapeAttr(this.item1Label())}" [selected]="true" />`,
        `  <brightrail-menu-item label="${escapeAttr(this.item2Label())}" />`,
        '</brightrail-menu>',
        '<brightrail-menu #sortMenu>',
        '  <brightrail-menu-item label="Newest" [selected]="true" />',
        '  <brightrail-menu-item label="Oldest" />',
        '</brightrail-menu>',
      ].join('\n');
    }
    return `${trigger}\n${menu}`;
  }

  private itemSnippet(index: 1 | 2 | 3): string {
    const label = index === 1 ? this.item1Label() : index === 2 ? this.item2Label() : this.item3Label();
    const selected =
      index === 1 ? this.item1Selected() : index === 2 ? this.item2Selected() : this.item3Selected();
    const disabled =
      index === 1 ? this.item1Disabled() : index === 2 ? this.item2Disabled() : this.item3Disabled();
    const activate =
      this.recipe() === 'activate-handler' ? ` (activate)="onItem${index}()"` : '';
    const attrs = [
      `label="${escapeAttr(label)}"`,
      selected ? '[selected]="true"' : '',
      disabled ? '[disabled]="true"' : '',
    ].filter(Boolean);
    return `<brightrail-menu-item ${attrs.join(' ')}${activate} />`;
  }

  private buildTs(): string {
    return [
      "import {",
      '  BrightrailMenuComponent,',
      '  BrightrailMenuItemComponent,',
      '  BrightrailMenuTriggerDirective,',
      "} from 'brightrail';",
      '',
      '// imports: [BrightrailMenuComponent, BrightrailMenuItemComponent, BrightrailMenuTriggerDirective]',
      'onEdit(): void { /* handle menu activate */ }',
    ].join('\n');
  }

  private buildScss(): string {
    return [
      '.menu-split {',
      '  display: inline-flex;',
      '  align-items: stretch;',
      '}',
      '.menu-toolbar {',
      '  display: inline-flex;',
      '  gap: 0.35rem;',
      '}',
    ].join('\n');
  }
}

function escapeAttr(value: string): string {
  return value.replace(/"/g, '&quot;');
}
