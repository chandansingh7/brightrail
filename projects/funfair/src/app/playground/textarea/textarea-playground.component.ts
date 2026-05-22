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
  BrightrailTextareaAppearance,
  BrightrailTextareaComponent,
  BrightrailTextareaResize,
  BrightrailTextareaSize,
  BrightrailTextareaStatus,
} from 'brightrail';

import { PlaygroundThemeId, PlaygroundThemeService } from '../playground-theme.service';
import { createPlaygroundPreviewFx } from '../shared/playground-fx.util';
import { PlaygroundFxSettingsComponent } from '../shared/playground-fx-settings.component';

type CodeTabId = 'html' | 'ts' | 'scss';
type TextareaRecipe =
  | 'basic-outlined'
  | 'filled'
  | 'underline'
  | 'ghost'
  | 'readonly'
  | 'with-helper'
  | 'required'
  | 'error-state'
  | 'disabled'
  | 'loading'
  | 'full-width'
  | 'resize-none'
  | 'form-binding';

@Component({
  selector: 'app-textarea-playground',
  standalone: true,
  imports: [
    PlaygroundPreviewHeaderComponent,FormsModule, BrightrailTextareaComponent, PlaygroundFxSettingsComponent],
  templateUrl: './textarea-playground.component.html',
  styleUrl: './textarea-playground.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TextareaPlaygroundComponent {
  readonly previewOnly = injectPlaygroundA11yPreviewMode();
  readonly a11yPreviewState = computed(() =>
    snapshotPlaygroundState({
      recipe: () => this.recipe(),
      appearance: () => this.appearance(),
      status: () => this.status(),
      size: () => this.size(),
      resize: () => this.resize(),
      label: () => this.label(),
      placeholder: () => this.placeholder(),
      helperText: () => this.helperText(),
      required: () => this.required(),
      disabled: () => this.disabled(),
      loading: () => this.loading(),
      fullWidth: () => this.fullWidth(),
      rows: () => this.rows(),
      value: () => this.value(),
      useNgModel: () => this.useNgModel(),
    }),
  );

  constructor() {
    initPlaygroundA11yPreview('textarea', this.previewOnly, (state) =>
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
      appearance: this.appearance as WritableSignal<unknown>,
      status: this.status as WritableSignal<unknown>,
      size: this.size as WritableSignal<unknown>,
      resize: this.resize as WritableSignal<unknown>,
      label: this.label as WritableSignal<unknown>,
      placeholder: this.placeholder as WritableSignal<unknown>,
      helperText: this.helperText as WritableSignal<unknown>,
      required: this.required as WritableSignal<unknown>,
      disabled: this.disabled as WritableSignal<unknown>,
      loading: this.loading as WritableSignal<unknown>,
      fullWidth: this.fullWidth as WritableSignal<unknown>,
      rows: this.rows as WritableSignal<unknown>,
      value: this.value as WritableSignal<unknown>,
      useNgModel: this.useNgModel as WritableSignal<unknown>,
    });
  }

  readonly themeService = inject(PlaygroundThemeService);
  private readonly _playgroundFx = createPlaygroundPreviewFx();
  readonly previewFx = this._playgroundFx.previewFx;
  readonly resolvedFxShell = this._playgroundFx.resolvedFxShell;
  readonly ngModelStandalone = { standalone: true };

  readonly recipeGroups = ['Core', 'Validation', 'Layout', 'Advanced'] as const;
  readonly recipeOptions: { value: TextareaRecipe; label: string; group: string }[] = [
    { value: 'basic-outlined', label: 'Outlined (default)', group: 'Core' },
    { value: 'filled', label: 'Filled appearance', group: 'Core' },
    { value: 'underline', label: 'Underline appearance', group: 'Core' },
    { value: 'ghost', label: 'Ghost appearance', group: 'Core' },
    { value: 'readonly', label: 'Read-only', group: 'Core' },
    { value: 'with-helper', label: 'With helper text', group: 'Validation' },
    { value: 'required', label: 'Required field', group: 'Validation' },
    { value: 'error-state', label: 'Error status', group: 'Validation' },
    { value: 'disabled', label: 'Disabled', group: 'Validation' },
    { value: 'loading', label: 'Loading state', group: 'Layout' },
    { value: 'full-width', label: 'Full width', group: 'Layout' },
    { value: 'resize-none', label: 'Fixed resize', group: 'Layout' },
    { value: 'form-binding', label: 'Form binding (ngModel)', group: 'Advanced' },
  ];

  readonly appearanceOptions: BrightrailTextareaAppearance[] = [
    'filled',
    'outlined',
    'underline',
    'ghost',
    'readonly',
  ];
  readonly statusOptions: BrightrailTextareaStatus[] = ['none', 'success', 'warning', 'error', 'info'];
  readonly sizeOptions: BrightrailTextareaSize[] = ['xs', 'sm', 'md', 'lg', 'xl'];
  readonly resizeOptions: BrightrailTextareaResize[] = ['none', 'vertical', 'horizontal', 'both'];
  readonly rowsOptions = [2, 3, 4, 5, 6];
  readonly yesNo = [
    { value: 'no', label: 'No' },
    { value: 'yes', label: 'Yes' },
  ] as const;
  readonly themeRowOptions: { id: PlaygroundThemeId; label: string }[] = [
    { id: 'light', label: 'Material light' },
    { id: 'dark', label: 'Material dark' },
  ];

  readonly selectedRecipeGroup = signal<string>('Core');
  readonly recipe = signal<TextareaRecipe>('basic-outlined');
  readonly appearance = signal<BrightrailTextareaAppearance>('outlined');
  readonly status = signal<BrightrailTextareaStatus>('none');
  readonly size = signal<BrightrailTextareaSize>('md');
  readonly resize = signal<BrightrailTextareaResize>('vertical');
  readonly label = signal('Description');
  readonly placeholder = signal('Enter details…');
  readonly helperText = signal('');
  readonly required = signal(false);
  readonly disabled = signal(false);
  readonly loading = signal(false);
  readonly fullWidth = signal(false);
  readonly rows = signal(4);
  readonly value = signal('');
  readonly useNgModel = signal(true);
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

  recipesInGroup(group: string): { value: TextareaRecipe; label: string }[] {
    return this.recipeOptions.filter((r) => r.group === group).map((r) => ({ value: r.value, label: r.label }));
  }

  onRecipeGroupNgModelChange(v: string): void {
    this.selectedRecipeGroup.set(v);
    const next = this.recipesInGroup(v)[0]?.value;
    if (next) this.onRecipeNgModelChange(next);
  }

  onRecipeNgModelChange(v: string): void {
    const recipe = v as TextareaRecipe;
    this.recipe.set(recipe);
    this.applyRecipe(recipe);
  }

  applyRecipe(recipe: TextareaRecipe): void {
    this.appearance.set('outlined');
    this.status.set('none');
    this.size.set('md');
    this.resize.set('vertical');
    this.label.set('Description');
    this.placeholder.set('Enter details…');
    this.helperText.set('');
    this.required.set(false);
    this.disabled.set(false);
    this.loading.set(false);
    this.fullWidth.set(false);
    this.rows.set(4);
    this.value.set('');
    this.useNgModel.set(true);

    switch (recipe) {
      case 'filled':
        this.appearance.set('filled');
        break;
      case 'underline':
        this.appearance.set('underline');
        this.label.set('Notes');
        break;
      case 'ghost':
        this.appearance.set('ghost');
        this.label.set('Comments');
        break;
      case 'readonly':
        this.appearance.set('readonly');
        this.label.set('Terms and conditions');
        this.rows.set(3);
        this.value.set('These terms govern use of the service.');
        break;
      case 'with-helper':
        this.label.set('Bio');
        this.helperText.set('Brief summary shown on your profile.');
        break;
      case 'required':
        this.label.set('Feedback');
        this.required.set(true);
        break;
      case 'error-state':
        this.label.set('Reason');
        this.status.set('error');
        this.helperText.set('This field is required.');
        break;
      case 'disabled':
        this.disabled.set(true);
        this.label.set('Locked field');
        this.value.set('Cannot edit this content.');
        break;
      case 'loading':
        this.loading.set(true);
        this.label.set('Draft');
        break;
      case 'full-width':
        this.fullWidth.set(true);
        this.label.set('Project description');
        this.rows.set(5);
        break;
      case 'resize-none':
        this.resize.set('none');
        this.label.set('Fixed height');
        break;
      case 'form-binding':
        this.label.set('Comments');
        break;
    }
  }

  resetToDefaults(): void {
    this.previewFx.set('inherit');
    this.selectedRecipeGroup.set('Core');
    this.onRecipeNgModelChange('basic-outlined');
    this.themeService.setTheme('light');
    this.activeTab.set('html');
  }

  selectTab(tab: CodeTabId): void {
    this.activeTab.set(tab);
  }

  copySnippet(): void {
    void navigator.clipboard?.writeText(this.activeSnippet());
  }

  buildHtml(): string {
    const lines = [
      '<brightrail-textarea',
      `  appearance="${this.appearance()}"`,
      `  label="${escapeAttr(this.label())}"`,
      `  placeholder="${escapeAttr(this.placeholder())}"`,
      `  size="${this.size()}"`,
      `  resize="${this.resize()}"`,
      `  [rows]="${this.rows()}"`,
    ];
    if (this.helperText().trim()) {
      lines.push(`  helperText="${escapeAttr(this.helperText())}"`);
    }
    if (this.status() !== 'none') {
      lines.push(`  status="${this.status()}"`);
    }
    if (this.required()) lines.push('  [required]="true"');
    if (this.disabled()) lines.push('  [disabled]="true"');
    if (this.loading()) lines.push('  [loading]="true"');
    if (this.fullWidth()) lines.push('  [fullWidth]="true"');
    if (this.useNgModel()) {
      lines.push('  [(ngModel)]="textareaValue"');
    }
    lines.push('/>');
    return lines.join('\n');
  }

  buildTs(): string {
    return [
      "import { BrightrailTextareaComponent } from 'brightrail';",
      '',
      '// imports: [BrightrailTextareaComponent, FormsModule]',
      "textareaValue = '';",
    ].join('\n');
  }

  buildScss(): string {
    return [
      ':host {',
      '  display: block;',
      '  max-width: 32rem;',
      '}',
    ].join('\n');
  }
}

function escapeAttr(value: string): string {
  return value.replace(/"/g, '&quot;');
}
