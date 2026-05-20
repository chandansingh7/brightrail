import { ChangeDetectionStrategy, Component, computed, inject, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {
  BrightrailTreeComponent,
  BrightrailTreeNode,
  BrightrailTreeSelectionMode,
} from 'brightrail';

import { PlaygroundThemeId, PlaygroundThemeService } from '../playground-theme.service';
import { TREE_DEMO_FILES, TREE_DEMO_ORG, TREE_DEMO_WORKSPACE } from './tree-variation-snippets';

type CodeTabId = 'html' | 'ts' | 'scss';

type TreeRecipe =
  | 'core-workspace'
  | 'core-files'
  | 'core-flat'
  | 'select-single'
  | 'select-none'
  | 'expand-open'
  | 'expand-closed'
  | 'state-disabled'
  | 'state-disabled-parent'
  | 'ent-nav'
  | 'ent-org'
  | 'adv-deep'
  | 'adv-dual';

@Component({
  selector: 'app-tree-playground',
  standalone: true,
  imports: [FormsModule, BrightrailTreeComponent],
  templateUrl: './tree-playground.component.html',
  styleUrl: './tree-playground.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TreePlaygroundComponent {
  readonly themeService = inject(PlaygroundThemeService);
  readonly ngModelStandalone = { standalone: true };

  readonly recipeGroups = ['Basics', 'Selection', 'Expand', 'States', 'Enterprise', 'Advanced'] as const;

  readonly recipeOptions: { value: TreeRecipe; label: string; group: string }[] = [
    { value: 'core-workspace', label: 'Workspace hierarchy', group: 'Basics' },
    { value: 'core-files', label: 'File tree', group: 'Basics' },
    { value: 'core-flat', label: 'Flat list', group: 'Basics' },
    { value: 'select-single', label: 'Single selection', group: 'Selection' },
    { value: 'select-none', label: 'Navigation only', group: 'Selection' },
    { value: 'expand-open', label: 'Expanded by default', group: 'Expand' },
    { value: 'expand-closed', label: 'Collapsed parent', group: 'Expand' },
    { value: 'state-disabled', label: 'Disabled leaf', group: 'States' },
    { value: 'state-disabled-parent', label: 'Disabled branch', group: 'States' },
    { value: 'ent-nav', label: 'Primary navigation', group: 'Enterprise' },
    { value: 'ent-org', label: 'Org chart', group: 'Enterprise' },
    { value: 'adv-deep', label: 'Deep nesting', group: 'Advanced' },
    { value: 'adv-dual', label: 'Dual trees', group: 'Advanced' },
  ];

  readonly themeRowOptions: { id: PlaygroundThemeId; label: string }[] = [
    { id: 'light', label: 'Material light' },
    { id: 'dark', label: 'Material dark' },
  ];

  readonly selectionModeOptions: BrightrailTreeSelectionMode[] = ['single', 'none'];

  readonly selectedRecipeGroup = signal<string>('Basics');
  readonly recipe = signal<TreeRecipe>('core-workspace');

  readonly nodes = signal<BrightrailTreeNode[]>(TREE_DEMO_WORKSPACE);
  readonly selectionMode = signal<BrightrailTreeSelectionMode>('single');
  readonly selectedId = signal<string | null>('alpha');
  readonly ariaLabel = signal('Tree navigation');
  readonly levelIndent = signal('1.25rem');
  readonly showDual = signal(false);

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

  recipesInGroup(group: string): { value: TreeRecipe; label: string }[] {
    return this.recipeOptions.filter((r) => r.group === group).map((r) => ({ value: r.value, label: r.label }));
  }

  onRecipeGroupNgModelChange(v: string): void {
    this.selectedRecipeGroup.set(v);
    const next = this.recipesInGroup(v)[0]?.value;
    if (next) this.onRecipeNgModelChange(next);
  }

  onRecipeNgModelChange(v: string): void {
    const next = v as TreeRecipe;
    this.recipe.set(next);
    this.applyRecipe(next);
  }

  applyRecipe(recipe: TreeRecipe): void {
    this.showDual.set(false);
    this.selectionMode.set('single');
    this.levelIndent.set('1.25rem');
    this.ariaLabel.set('Tree navigation');

    switch (recipe) {
      case 'core-workspace':
        this.nodes.set(structuredClone(TREE_DEMO_WORKSPACE));
        this.selectedId.set('alpha');
        break;
      case 'core-files':
        this.nodes.set(structuredClone(TREE_DEMO_FILES));
        this.selectedId.set('app');
        break;
      case 'core-flat':
        this.nodes.set([
          { id: 'inbox', label: 'Inbox' },
          { id: 'sent', label: 'Sent' },
        ]);
        this.selectedId.set('inbox');
        break;
      case 'select-single':
        this.nodes.set(structuredClone(TREE_DEMO_WORKSPACE));
        this.selectionMode.set('single');
        this.selectedId.set('settings');
        break;
      case 'select-none':
        this.nodes.set(structuredClone(TREE_DEMO_FILES));
        this.selectionMode.set('none');
        this.selectedId.set(null);
        break;
      case 'expand-open':
        this.nodes.set([
          {
            id: 'parent',
            label: 'Expanded parent',
            expanded: true,
            children: [{ id: 'child', label: 'Child row' }],
          },
        ]);
        this.selectedId.set('child');
        break;
      case 'expand-closed':
        this.nodes.set([
          {
            id: 'parent',
            label: 'Collapsed parent',
            expanded: false,
            children: [{ id: 'child', label: 'Hidden child' }],
          },
        ]);
        this.selectedId.set(null);
        break;
      case 'state-disabled':
        this.nodes.set([
          { id: 'ok', label: 'Available' },
          { id: 'locked', label: 'Locked', disabled: true },
        ]);
        this.selectedId.set('ok');
        break;
      case 'state-disabled-parent':
        this.nodes.set([
          {
            id: 'parent',
            label: 'Parent (disabled)',
            disabled: true,
            children: [{ id: 'child', label: 'Child' }],
          },
        ]);
        this.selectionMode.set('none');
        this.selectedId.set(null);
        break;
      case 'ent-nav':
        this.ariaLabel.set('Primary navigation');
        this.nodes.set(structuredClone(TREE_DEMO_WORKSPACE));
        this.selectedId.set('projects');
        break;
      case 'ent-org':
        this.nodes.set(structuredClone(TREE_DEMO_ORG));
        this.selectedId.set('platform');
        break;
      case 'adv-deep':
        this.levelIndent.set('1.5rem');
        this.nodes.set([
          {
            id: 'l1',
            label: 'Level 1',
            expanded: true,
            children: [
              {
                id: 'l2',
                label: 'Level 2',
                expanded: true,
                children: [
                  {
                    id: 'l3',
                    label: 'Level 3',
                    expanded: true,
                    children: [{ id: 'l4', label: 'Level 4 leaf' }],
                  },
                ],
              },
            ],
          },
        ]);
        this.selectedId.set('l4');
        break;
      case 'adv-dual':
        this.showDual.set(true);
        this.nodes.set([
          { id: 'docs', label: 'Documents', expanded: true, children: [{ id: 'drafts', label: 'Drafts' }] },
        ]);
        this.selectedId.set('docs');
        break;
    }
  }

  readonly secondaryNodes = signal<BrightrailTreeNode[]>([
    { id: 'queue', label: 'Queue', expanded: true, children: [{ id: 'pending', label: 'Pending' }] },
  ]);

  onSelectedIdChange(id: string): void {
    this.selectedId.set(id);
  }

  resetToDefaults(): void {
    this.selectedRecipeGroup.set('Basics');
    this.onRecipeNgModelChange('core-workspace');
    this.themeService.setTheme('light');
    this.activeTab.set('html');
  }

  buildHtml(): string {
    return `<!-- Recipe: ${this.recipe()} -->
<brightrail-tree
  [nodes]="nodes"
  selectionMode="${this.selectionMode()}"
  [selectedId]="${this.selectedId() === null ? 'null' : `'${this.selectedId()}'`}"
  ariaLabel="${this.ariaLabel()}"
  levelIndent="${this.levelIndent()}"
  (selectedIdChange)="onSelectedIdChange($event)"
/>`;
  }

  buildTs(): string {
    return `// Recipe: ${this.recipe()}
import { Component, signal } from '@angular/core';
import { BrightrailTreeComponent, BrightrailTreeNode } from 'brightrail';

@Component({
  selector: 'app-example',
  standalone: true,
  imports: [BrightrailTreeComponent],
  templateUrl: './example.component.html',
})
export class ExampleComponent {
  readonly nodes = signal<BrightrailTreeNode[]>([]);
  readonly selectedId = signal<string | null>(null);

  onSelectedIdChange(id: string): void {
    this.selectedId.set(id);
  }
}`;
  }

  buildScss(): string {
    return `/* Constrain tree width in side panels */
.tree-panel {
  max-width: 16rem;
}`;
  }

  selectTab(tab: CodeTabId): void {
    this.activeTab.set(tab);
  }

  copySnippet(): void {
    void navigator.clipboard?.writeText(this.activeSnippet());
  }
}
