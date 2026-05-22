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
  BrightrailCommandPaletteComponent,
  BrightrailCommandPaletteItem,
} from 'brightrail';

import { PlaygroundThemeId, PlaygroundThemeService } from '../playground-theme.service';
import {
  COMMAND_PALETTE_DEMO_COMMANDS,
  COMMAND_PALETTE_GROUPED,
  COMMAND_PALETTE_WITH_DISABLED,
} from './command-palette-variation-snippets';

type CodeTabId = 'html' | 'ts' | 'scss';

type CommandPaletteRecipe =
  | 'core-open'
  | 'core-closed'
  | 'grouped'
  | 'shortcuts'
  | 'empty'
  | 'disabled'
  | 'filtered';

import { createPlaygroundPreviewFx } from '../shared/playground-fx.util';
import { PlaygroundFxSettingsComponent } from '../shared/playground-fx-settings.component';
@Component({
  selector: 'app-command-palette-playground',
  standalone: true,
  imports: [
    PlaygroundPreviewHeaderComponent,FormsModule, BrightrailCommandPaletteComponent, PlaygroundFxSettingsComponent],
  templateUrl: './command-palette-playground.component.html',
  styleUrl: './command-palette-playground.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CommandPalettePlaygroundComponent {
  readonly previewOnly = injectPlaygroundA11yPreviewMode();
  readonly a11yPreviewState = computed(() =>
    snapshotPlaygroundState({
      recipe: () => this.recipe(),
      commands: () => this.commands(),
      placeholder: () => this.placeholder(),
      lastSelected: () => this.lastSelected(),
    }),
  );

  constructor() {
    initPlaygroundA11yPreview('command-palette', this.previewOnly, (state) =>
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
      commands: this.commands as WritableSignal<unknown>,
      placeholder: this.placeholder as WritableSignal<unknown>,
      lastSelected: this.lastSelected as WritableSignal<unknown>,
    });
  }

  readonly themeService = inject(PlaygroundThemeService);
  private readonly _playgroundFx = createPlaygroundPreviewFx();
  readonly previewFx = this._playgroundFx.previewFx;
  readonly resolvedFxShell = this._playgroundFx.resolvedFxShell;
  readonly ngModelStandalone = { standalone: true };

  readonly recipeGroups = ['Basics', 'Content', 'States', 'Advanced'] as const;

  readonly recipeOptions: { value: CommandPaletteRecipe; label: string; group: string }[] = [
    { value: 'core-open', label: 'Open palette', group: 'Basics' },
    { value: 'core-closed', label: 'Closed', group: 'Basics' },
    { value: 'grouped', label: 'Grouped commands', group: 'Content' },
    { value: 'shortcuts', label: 'With shortcuts', group: 'Content' },
    { value: 'empty', label: 'No matches', group: 'States' },
    { value: 'disabled', label: 'Disabled items', group: 'States' },
    { value: 'filtered', label: 'Large command list', group: 'Advanced' },
  ];

  readonly themeRowOptions: { id: PlaygroundThemeId; label: string }[] = [
    { id: 'light', label: 'Material light' },
    { id: 'dark', label: 'Material dark' },
  ];

  readonly selectedRecipeGroup = signal<string>('Basics');
  readonly recipe = signal<CommandPaletteRecipe>('core-open');

  readonly isOpen = signal(true);
  readonly commands = signal<BrightrailCommandPaletteItem[]>(COMMAND_PALETTE_DEMO_COMMANDS);
  readonly placeholder = signal('Search commands…');
  readonly lastSelected = signal<string | null>(null);

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

  recipesInGroup(group: string): { value: CommandPaletteRecipe; label: string }[] {
    return this.recipeOptions.filter((r) => r.group === group).map((r) => ({ value: r.value, label: r.label }));
  }

  onRecipeGroupNgModelChange(v: string): void {
    this.selectedRecipeGroup.set(v);
    const next = this.recipesInGroup(v)[0]?.value;
    if (next) this.onRecipeNgModelChange(next);
  }

  onRecipeNgModelChange(v: string): void {
    const next = v as CommandPaletteRecipe;
    this.recipe.set(next);
    this.applyRecipe(next);
  }

  applyRecipe(recipe: CommandPaletteRecipe): void {
    this.placeholder.set('Search commands…');
    this.isOpen.set(true);
    this.commands.set(structuredClone(COMMAND_PALETTE_DEMO_COMMANDS));

    switch (recipe) {
      case 'core-open':
        this.isOpen.set(true);
        break;
      case 'core-closed':
        this.isOpen.set(false);
        break;
      case 'grouped':
        this.commands.set(structuredClone(COMMAND_PALETTE_GROUPED));
        this.placeholder.set('Jump to…');
        break;
      case 'shortcuts':
        this.commands.set(structuredClone(COMMAND_PALETTE_DEMO_COMMANDS));
        break;
      case 'empty':
        this.commands.set([]);
        break;
      case 'disabled':
        this.commands.set(structuredClone(COMMAND_PALETTE_WITH_DISABLED));
        break;
      case 'filtered':
        this.commands.set([
          ...structuredClone(COMMAND_PALETTE_DEMO_COMMANDS),
          { id: 'find', label: 'Find in page', group: 'Edit', shortcut: '⌘F', keywords: ['search'] },
          { id: 'replace', label: 'Replace', group: 'Edit', keywords: ['search'] },
          { id: 'theme', label: 'Toggle theme', group: 'View' },
        ]);
        this.placeholder.set('Type to filter by label or keyword…');
        break;
    }
  }

  openPalette(): void {
    this.isOpen.set(true);
  }

  onCommandSelect(item: BrightrailCommandPaletteItem): void {
    this.lastSelected.set(item.label);
    this.isOpen.set(false);
  }

  onPaletteClosed(): void {
    this.isOpen.set(false);
  }

  resetToDefaults(): void {
    this.previewFx.set('inherit');
    this.selectedRecipeGroup.set('Basics');
    this.onRecipeNgModelChange('core-open');
    this.themeService.setTheme('light');
    this.activeTab.set('html');
    this.lastSelected.set(null);
  }

  buildHtml(): string {
    return `<!-- Recipe: ${this.recipe()} -->
<button type="button" (click)="isOpen.set(true)">Open palette</button>
<brightrail-command-palette
  [isOpen]="isOpen()"
  [commands]="commands"
  placeholder="${this.placeholder()}"
  (commandSelect)="onCommandSelect($event)"
  (closed)="isOpen.set(false)"
/>`;
  }

  buildTs(): string {
    return `// Recipe: ${this.recipe()}
import { Component, signal } from '@angular/core';
import {
  BrightrailCommandPaletteComponent,
  BrightrailCommandPaletteItem,
} from 'brightrail';

@Component({
  selector: 'app-example',
  standalone: true,
  imports: [BrightrailCommandPaletteComponent],
  templateUrl: './example.component.html',
})
export class ExampleComponent {
  readonly isOpen = signal(false);
  readonly commands = signal<BrightrailCommandPaletteItem[]>([]);

  onCommandSelect(item: BrightrailCommandPaletteItem): void {
    this.isOpen.set(false);
    console.log(item.id);
  }
}`;
  }

  buildScss(): string {
    return `/* Command palette overlays the viewport; no extra host styles required */`;
  }

  selectTab(tab: CodeTabId): void {
    this.activeTab.set(tab);
  }

  copySnippet(): void {
    void navigator.clipboard?.writeText(this.activeSnippet());
  }
}
