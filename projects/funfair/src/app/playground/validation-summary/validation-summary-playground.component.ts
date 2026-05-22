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
  BrightrailValidationSummaryComponent,
  BrightrailValidationSummaryError,
} from 'brightrail';

import { PlaygroundThemeId, PlaygroundThemeService } from '../playground-theme.service';
import { createPlaygroundPreviewFx } from '../shared/playground-fx.util';
import { PlaygroundFxSettingsComponent } from '../shared/playground-fx-settings.component';
import {
  VALIDATION_SUMMARY_DEMO_ERRORS,
  VALIDATION_SUMMARY_FIELD_ERRORS,
} from './validation-summary-variation-snippets';

type CodeTabId = 'html' | 'ts' | 'scss';

type ValidationSummaryRecipe =
  | 'core-strings'
  | 'field-errors'
  | 'custom-title'
  | 'single-error'
  | 'many-errors'
  | 'empty';

@Component({
  selector: 'app-validation-summary-playground',
  standalone: true,
  imports: [
    PlaygroundPreviewHeaderComponent,FormsModule, BrightrailValidationSummaryComponent, PlaygroundFxSettingsComponent],
  templateUrl: './validation-summary-playground.component.html',
  styleUrl: './validation-summary-playground.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ValidationSummaryPlaygroundComponent {
  readonly previewOnly = injectPlaygroundA11yPreviewMode();
  readonly a11yPreviewState = computed(() =>
    snapshotPlaygroundState({
      recipe: () => this.recipe(),
      errors: () => this.errors(),
      title: () => this.title(),
    }),
  );

  constructor() {
    initPlaygroundA11yPreview('validation-summary', this.previewOnly, (state) =>
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
      errors: this.errors as WritableSignal<unknown>,
      title: this.title as WritableSignal<unknown>,
    });
  }

  readonly themeService = inject(PlaygroundThemeService);
  private readonly _playgroundFx = createPlaygroundPreviewFx();
  readonly previewFx = this._playgroundFx.previewFx;
  readonly resolvedFxShell = this._playgroundFx.resolvedFxShell;
  readonly ngModelStandalone = { standalone: true };

  readonly recipeGroups = ['Basics', 'Fields', 'Titles', 'Advanced'] as const;

  readonly recipeOptions: { value: ValidationSummaryRecipe; label: string; group: string }[] = [
    { value: 'core-strings', label: 'String errors', group: 'Basics' },
    { value: 'field-errors', label: 'Field errors', group: 'Fields' },
    { value: 'custom-title', label: 'Custom title', group: 'Titles' },
    { value: 'single-error', label: 'Single error', group: 'Basics' },
    { value: 'many-errors', label: 'Many errors', group: 'Advanced' },
    { value: 'empty', label: 'Empty (hidden)', group: 'Advanced' },
  ];

  readonly themeRowOptions: { id: PlaygroundThemeId; label: string }[] = [
    { id: 'light', label: 'Material light' },
    { id: 'dark', label: 'Material dark' },
  ];

  readonly selectedRecipeGroup = signal<string>('Basics');
  readonly recipe = signal<ValidationSummaryRecipe>('core-strings');

  readonly errors = signal<BrightrailValidationSummaryError[]>(VALIDATION_SUMMARY_DEMO_ERRORS);
  readonly title = signal('Please fix the following errors:');

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

  recipesInGroup(group: string): { value: ValidationSummaryRecipe; label: string }[] {
    return this.recipeOptions.filter((r) => r.group === group).map((r) => ({ value: r.value, label: r.label }));
  }

  onRecipeGroupNgModelChange(v: string): void {
    this.selectedRecipeGroup.set(v);
    const next = this.recipesInGroup(v)[0]?.value;
    if (next) this.onRecipeNgModelChange(next);
  }

  onRecipeNgModelChange(v: string): void {
    const next = v as ValidationSummaryRecipe;
    this.recipe.set(next);
    this.applyRecipe(next);
  }

  applyRecipe(recipe: ValidationSummaryRecipe): void {
    this.title.set('Please fix the following errors:');

    switch (recipe) {
      case 'core-strings':
        this.errors.set([...VALIDATION_SUMMARY_DEMO_ERRORS]);
        break;
      case 'field-errors':
        this.errors.set([...VALIDATION_SUMMARY_FIELD_ERRORS]);
        break;
      case 'custom-title':
        this.title.set('Review your profile details');
        this.errors.set([...VALIDATION_SUMMARY_FIELD_ERRORS]);
        break;
      case 'single-error':
        this.errors.set(['You must accept the terms']);
        break;
      case 'many-errors':
        this.title.set('Unable to submit the form');
        this.errors.set([
          'Name is required',
          'Email is required',
          { field: 'phone', message: 'Enter a valid phone number' },
          { field: 'address', message: 'Street is required' },
          'You must accept the terms',
        ]);
        break;
      case 'empty':
        this.errors.set([]);
        break;
    }
  }

  resetToDefaults(): void {
    this.previewFx.set('inherit');
    this.selectedRecipeGroup.set('Basics');
    this.onRecipeNgModelChange('core-strings');
    this.themeService.setTheme('light');
    this.activeTab.set('html');
  }

  buildHtml(): string {
    return `<!-- Recipe: ${this.recipe()} -->
<brightrail-validation-summary
  title="${this.title()}"
  [errors]="errors"
/>`;
  }

  buildTs(): string {
    return `// Recipe: ${this.recipe()}
import { Component, signal } from '@angular/core';
import {
  BrightrailValidationSummaryComponent,
  BrightrailValidationSummaryError,
} from 'brightrail';

@Component({
  selector: 'app-example',
  standalone: true,
  imports: [BrightrailValidationSummaryComponent],
  templateUrl: './example.component.html',
})
export class ExampleComponent {
  readonly errors = signal<BrightrailValidationSummaryError[]>([]);
}`;
  }

  buildScss(): string {
    return `/* Place validation summary above form fields */
.form-errors {
  margin-block-end: 1rem;
}`;
  }

  selectTab(tab: CodeTabId): void {
    this.activeTab.set(tab);
  }

  copySnippet(): void {
    void navigator.clipboard?.writeText(this.activeSnippet());
  }
}
