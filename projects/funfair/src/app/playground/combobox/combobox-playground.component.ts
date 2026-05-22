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
  BrightrailComboboxComponent,
  BrightrailComboboxOption,
} from 'brightrail';

import { PlaygroundThemeId, PlaygroundThemeService } from '../playground-theme.service';
import { createPlaygroundPreviewFx, playgroundFxHtml, playgroundFxTs } from '../shared/playground-fx.util';
import { PlaygroundFxSettingsComponent } from '../shared/playground-fx-settings.component';

type CodeTabId = 'html' | 'ts' | 'scss';

type ComboboxRecipe =
  | 'default-country'
  | 'assignee-search'
  | 'priority-static'
  | 'inline-tag'
  | 'disabled-control'
  | 'disabled-option'
  | 'full-width'
  | 'narrow-inline'
  | 'form-settings'
  | 'enterprise-pair';

@Component({
  selector: 'app-combobox-playground',
  standalone: true,
  imports: [
    PlaygroundPreviewHeaderComponent,FormsModule, BrightrailComboboxComponent, PlaygroundFxSettingsComponent],
  templateUrl: './combobox-playground.component.html',
  styleUrl: './combobox-playground.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ComboboxPlaygroundComponent {
  readonly previewOnly = injectPlaygroundA11yPreviewMode();
  readonly a11yPreviewState = computed(() =>
    snapshotPlaygroundState({
      recipe: () => this.recipe(),
      placeholder: () => this.placeholder(),
      filterable: () => this.filterable(),
      disabled: () => this.disabled(),
      fullWidth: () => this.fullWidth(),
      selectedValue: () => this.selectedValue(),
      cityValue: () => this.cityValue(),
    }),
  );

  constructor() {
    initPlaygroundA11yPreview('combobox', this.previewOnly, (state) =>
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
      placeholder: this.placeholder as WritableSignal<unknown>,
      filterable: this.filterable as WritableSignal<unknown>,
      disabled: this.disabled as WritableSignal<unknown>,
      fullWidth: this.fullWidth as WritableSignal<unknown>,
      selectedValue: this.selectedValue as WritableSignal<unknown>,
      cityValue: this.cityValue as WritableSignal<unknown>,
    });
  }

  readonly themeService = inject(PlaygroundThemeService);
  private readonly _playgroundFx = createPlaygroundPreviewFx();
  readonly previewFx = this._playgroundFx.previewFx;
  readonly resolvedFxShell = this._playgroundFx.resolvedFxShell;
  readonly ngModelStandalone = { standalone: true };

  readonly recipeGroups = ['Core', 'Behavior', 'Layout', 'Forms'] as const;
  readonly recipeOptions: { value: ComboboxRecipe; label: string; group: string }[] = [
    { value: 'default-country', label: 'Country picker', group: 'Core' },
    { value: 'assignee-search', label: 'Filterable assignee', group: 'Core' },
    { value: 'priority-static', label: 'Static priority list', group: 'Core' },
    { value: 'inline-tag', label: 'Inline tag picker', group: 'Core' },
    { value: 'disabled-control', label: 'Disabled control', group: 'Behavior' },
    { value: 'disabled-option', label: 'Disabled option', group: 'Behavior' },
    { value: 'full-width', label: 'Full width field', group: 'Layout' },
    { value: 'narrow-inline', label: 'Inline width', group: 'Layout' },
    { value: 'form-settings', label: 'Settings form row', group: 'Forms' },
    { value: 'enterprise-pair', label: 'Country + city pair', group: 'Forms' },
  ];

  readonly countryOptions: BrightrailComboboxOption[] = [
    { value: 'us', label: 'United States' },
    { value: 'ca', label: 'Canada' },
    { value: 'mx', label: 'Mexico', disabled: true },
    { value: 'br', label: 'Brazil' },
  ];

  readonly assigneeOptions: BrightrailComboboxOption[] = [
    { value: 'alex', label: 'Alex Morgan' },
    { value: 'jordan', label: 'Jordan Lee' },
    { value: 'sam', label: 'Sam Patel' },
  ];

  readonly priorityOptions: BrightrailComboboxOption[] = [
    { value: 'p1', label: 'P1 — Critical' },
    { value: 'p2', label: 'P2 — High' },
    { value: 'p3', label: 'P3 — Normal' },
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
  readonly recipe = signal<ComboboxRecipe>('default-country');
  readonly placeholder = signal('Search or select…');
  readonly filterable = signal(true);
  readonly disabled = signal(false);
  readonly fullWidth = signal(true);
  readonly selectedValue = signal('us');
  readonly cityValue = signal('alex');
  readonly activeTab = signal<CodeTabId>('html');

  readonly previewOptions = computed(() => {
    const r = this.recipe();
    if (r === 'assignee-search') return this.assigneeOptions;
    if (r === 'priority-static' || r === 'disabled-option') return this.priorityOptions;
    return this.countryOptions;
  });

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

  recipesInGroup(group: string): { value: ComboboxRecipe; label: string }[] {
    return this.recipeOptions.filter((r) => r.group === group).map((r) => ({ value: r.value, label: r.label }));
  }

  onRecipeGroupNgModelChange(v: string): void {
    this.selectedRecipeGroup.set(v);
    const first = this.recipesInGroup(v)[0]?.value;
    if (first) this.onRecipeNgModelChange(first);
  }

  onRecipeNgModelChange(v: string): void {
    const next = v as ComboboxRecipe;
    this.recipe.set(next);
    this.applyRecipe(next);
  }

  applyRecipe(recipe: ComboboxRecipe): void {
    this.placeholder.set('Search or select…');
    this.filterable.set(true);
    this.disabled.set(false);
    this.fullWidth.set(true);
    this.selectedValue.set('us');

    switch (recipe) {
      case 'default-country':
        break;
      case 'assignee-search':
        this.placeholder.set('Search assignees…');
        this.selectedValue.set('alex');
        break;
      case 'priority-static':
        this.placeholder.set('Priority');
        this.filterable.set(false);
        this.selectedValue.set('p2');
        break;
      case 'inline-tag':
        this.placeholder.set('Tag');
        this.fullWidth.set(false);
        this.selectedValue.set('');
        break;
      case 'disabled-control':
        this.disabled.set(true);
        break;
      case 'disabled-option':
        this.placeholder.set('Select plan');
        this.filterable.set(false);
        this.selectedValue.set('p1');
        break;
      case 'full-width':
        this.placeholder.set('Select region');
        this.fullWidth.set(true);
        break;
      case 'narrow-inline':
        this.placeholder.set('Status');
        this.fullWidth.set(false);
        this.selectedValue.set('us');
        break;
      case 'form-settings':
        this.placeholder.set('Department');
        this.filterable.set(false);
        this.selectedValue.set('ca');
        break;
      case 'enterprise-pair':
        this.placeholder.set('Country');
        this.fullWidth.set(true);
        this.selectedValue.set('us');
        break;
    }
  }

  resetToDefaults(): void {
    this.previewFx.set('inherit');
    this.selectedRecipeGroup.set('Core');
    this.onRecipeNgModelChange('default-country');
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
    return playgroundFxHtml([
      '<brightrail-combobox',
      '  [options]="options"',
      `  placeholder="${escapeAttr(this.placeholder())}"`,
      `  [filterable]="${this.filterable()}"`,
      `  [disabled]="${this.disabled()}"`,
      `  [fullWidth]="${this.fullWidth()}"`,
      '  [(ngModel)]="value"',
      '  (valueChange)="onValueChange($event)"',
      '/>',
    ].join('\n'), this.previewFx());
  }

  private buildTs(): string {
    return playgroundFxTs([
      "import { BrightrailComboboxComponent, BrightrailComboboxOption } from 'brightrail';",
      '',
      'readonly options: BrightrailComboboxOption[] = [',
      "  { value: 'us', label: 'United States' },",
      "  { value: 'ca', label: 'Canada' },",
      '];',
      "value = 'us';",
    ].join('\n'), this.previewFx(), this.themeService.fxShell());
  }

  private buildScss(): string {
    return '.combobox-row { max-width: 22rem; }';
  }
}

function escapeAttr(value: string): string {
  return value.replace(/"/g, '&quot;');
}
