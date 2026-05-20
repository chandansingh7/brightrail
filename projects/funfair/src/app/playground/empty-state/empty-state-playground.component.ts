import { ChangeDetectionStrategy, Component, computed, inject, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrightrailButtonComponent, BrightrailEmptyStateComponent } from 'brightrail';

import { PlaygroundThemeId, PlaygroundThemeService } from '../playground-theme.service';

type CodeTabId = 'html' | 'ts' | 'scss';

type EmptyStateRecipe =
  | 'core-default'
  | 'core-compact'
  | 'with-icon'
  | 'with-action'
  | 'full-pattern'
  | 'search-empty'
  | 'error-empty'
  | 'onboarding';

@Component({
  selector: 'app-empty-state-playground',
  standalone: true,
  imports: [FormsModule, BrightrailEmptyStateComponent, BrightrailButtonComponent],
  templateUrl: './empty-state-playground.component.html',
  styleUrl: './empty-state-playground.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EmptyStatePlaygroundComponent {
  readonly themeService = inject(PlaygroundThemeService);
  readonly ngModelStandalone = { standalone: true };

  readonly recipeGroups = ['Basics', 'Slots', 'Patterns', 'Advanced'] as const;

  readonly recipeOptions: { value: EmptyStateRecipe; label: string; group: string }[] = [
    { value: 'core-default', label: 'Title + description', group: 'Basics' },
    { value: 'core-compact', label: 'Compact density', group: 'Basics' },
    { value: 'with-icon', label: 'Icon slot', group: 'Slots' },
    { value: 'with-action', label: 'Action slot', group: 'Slots' },
    { value: 'full-pattern', label: 'Icon + action', group: 'Patterns' },
    { value: 'search-empty', label: 'Search no results', group: 'Patterns' },
    { value: 'error-empty', label: 'Error state', group: 'Advanced' },
    { value: 'onboarding', label: 'Onboarding welcome', group: 'Advanced' },
  ];

  readonly themeRowOptions: { id: PlaygroundThemeId; label: string }[] = [
    { id: 'light', label: 'Material light' },
    { id: 'dark', label: 'Material dark' },
  ];

  readonly selectedRecipeGroup = signal<string>('Basics');
  readonly recipe = signal<EmptyStateRecipe>('core-default');

  readonly title = signal('No results found');
  readonly description = signal('Try adjusting your filters or search terms.');
  readonly compact = signal(false);
  readonly showIcon = signal(false);
  readonly showAction = signal(false);
  readonly actionLabel = signal('Clear filters');
  readonly actionVariant = signal<'primary' | 'secondary' | 'outline' | 'link' | 'ghost'>('primary');

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

  recipesInGroup(group: string): { value: EmptyStateRecipe; label: string }[] {
    return this.recipeOptions.filter((r) => r.group === group).map((r) => ({ value: r.value, label: r.label }));
  }

  onRecipeGroupNgModelChange(v: string): void {
    this.selectedRecipeGroup.set(v);
    const next = this.recipesInGroup(v)[0]?.value;
    if (next) this.onRecipeNgModelChange(next);
  }

  onRecipeNgModelChange(v: string): void {
    const recipe = v as EmptyStateRecipe;
    this.recipe.set(recipe);
    this.applyRecipe(recipe);
  }

  applyRecipe(recipe: EmptyStateRecipe): void {
    this.title.set('No results found');
    this.description.set('Try adjusting your filters or search terms.');
    this.compact.set(false);
    this.showIcon.set(false);
    this.showAction.set(false);
    this.actionLabel.set('Clear filters');
    this.actionVariant.set('primary');

    if (recipe === 'core-compact') {
      this.compact.set(true);
      this.title.set('No items');
      this.description.set('Add your first record to get started.');
    } else if (recipe === 'with-icon') {
      this.showIcon.set(true);
      this.title.set('Inbox empty');
      this.description.set('New messages will appear here.');
    } else if (recipe === 'with-action') {
      this.showAction.set(true);
      this.title.set('No projects yet');
      this.description.set('Create a workspace to collaborate with your team.');
      this.actionLabel.set('Create project');
    } else if (recipe === 'full-pattern' || recipe === 'search-empty') {
      this.showIcon.set(true);
      this.showAction.set(true);
      this.title.set('No results found');
      this.description.set('Try different keywords or clear filters.');
      this.actionLabel.set('Clear filters');
    } else if (recipe === 'error-empty') {
      this.showIcon.set(true);
      this.showAction.set(true);
      this.title.set('Something went wrong');
      this.description.set('We could not load this view. Please try again.');
      this.actionLabel.set('Retry');
      this.actionVariant.set('secondary');
    } else if (recipe === 'onboarding') {
      this.showIcon.set(true);
      this.showAction.set(true);
      this.title.set('Welcome');
      this.description.set('Complete setup to unlock dashboards and reports.');
      this.actionLabel.set('Get started');
    }
  }

  resetToDefaults(): void {
    this.selectedRecipeGroup.set('Basics');
    this.onRecipeNgModelChange('core-default');
  }

  buildHtml(): string {
    const compactLine = this.compact() ? `\n  [compact]="true"` : '';
    let inner = '';
    if (this.showIcon()) {
      inner += `
  <span brightrailEmptyStateIcon aria-hidden="true">📭</span>`;
    }
    if (this.showAction()) {
      inner += `
  <brightrail-button brightrailEmptyStateAction variant="${this.actionVariant()}">${this.actionLabel()}</brightrail-button>`;
    }
    if (inner.trim().length) {
      return `<!-- Recipe: ${this.recipe()} -->
<brightrail-empty-state
  title="${this.title()}"
  description="${this.description()}"${compactLine}>${inner}
</brightrail-empty-state>`;
    }
    return `<!-- Recipe: ${this.recipe()} -->
<brightrail-empty-state
  title="${this.title()}"
  description="${this.description()}"${compactLine} />`;
  }

  buildTs(): string {
    return `// Recipe: ${this.recipe()}
import { Component } from '@angular/core';
import { BrightrailButtonComponent, BrightrailEmptyStateComponent } from 'brightrail';

@Component({
  selector: 'app-example',
  standalone: true,
  imports: [BrightrailEmptyStateComponent, BrightrailButtonComponent],
  templateUrl: './example.component.html',
})
export class ExampleComponent {}`;
  }

  buildScss(): string {
    return `/* Optional action row when using multiple buttons */
.es-actions {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  justify-content: center;
}`;
  }

  selectTab(tab: CodeTabId): void {
    this.activeTab.set(tab);
  }

  copySnippet(): void {
    void navigator.clipboard?.writeText(this.activeSnippet());
  }
}
