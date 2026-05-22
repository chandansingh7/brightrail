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
  BrightrailSwitchComponent,
  BrightrailSwitchSize,
  BrightrailSwitchTone,
} from 'brightrail';

import { PlaygroundThemeId, PlaygroundThemeService } from '../playground-theme.service';
import { createPlaygroundPreviewFx } from '../shared/playground-fx.util';
import { PlaygroundFxSettingsComponent } from '../shared/playground-fx-settings.component';

type CodeTabId = 'html' | 'ts' | 'scss';
type SwitchRecipe =
  | 'basic-off'
  | 'basic-on'
  | 'with-label'
  | 'aria-only'
  | 'disabled'
  | 'notifications'
  | 'dark-mode'
  | 'auto-save'
  | 'success-tone'
  | 'danger-tone'
  | 'settings-row'
  | 'form-binding';

@Component({
  selector: 'app-switch-playground',
  standalone: true,
  imports: [
    PlaygroundPreviewHeaderComponent,FormsModule, BrightrailSwitchComponent, PlaygroundFxSettingsComponent],
  templateUrl: './switch-playground.component.html',
  styleUrl: './switch-playground.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SwitchPlaygroundComponent {
  readonly previewOnly = injectPlaygroundA11yPreviewMode();
  readonly a11yPreviewState = computed(() =>
    snapshotPlaygroundState({
      recipe: () => this.recipe(),
      label: () => this.label(),
      ariaLabel: () => this.ariaLabel(),
      tone: () => this.tone(),
      size: () => this.size(),
      checked: () => this.checked(),
      disabled: () => this.disabled(),
      useNgModel: () => this.useNgModel(),
      ngModelValue: () => this.ngModelValue(),
    }),
  );

  constructor() {
    initPlaygroundA11yPreview('switch', this.previewOnly, (state) =>
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
      label: this.label as WritableSignal<unknown>,
      ariaLabel: this.ariaLabel as WritableSignal<unknown>,
      tone: this.tone as WritableSignal<unknown>,
      size: this.size as WritableSignal<unknown>,
      checked: this.checked as WritableSignal<unknown>,
      disabled: this.disabled as WritableSignal<unknown>,
      useNgModel: this.useNgModel as WritableSignal<unknown>,
      ngModelValue: this.ngModelValue as WritableSignal<unknown>,
    });
  }

  readonly themeService = inject(PlaygroundThemeService);
  private readonly _playgroundFx = createPlaygroundPreviewFx();
  readonly previewFx = this._playgroundFx.previewFx;
  readonly resolvedFxShell = this._playgroundFx.resolvedFxShell;
  readonly ngModelStandalone = { standalone: true };

  readonly recipeGroups = ['Core', 'Settings', 'Tones', 'Advanced'] as const;
  readonly recipeOptions: { value: SwitchRecipe; label: string; group: string }[] = [
    { value: 'basic-off', label: 'Off (default)', group: 'Core' },
    { value: 'basic-on', label: 'On (checked)', group: 'Core' },
    { value: 'with-label', label: 'With label', group: 'Core' },
    { value: 'aria-only', label: 'Aria label only', group: 'Core' },
    { value: 'disabled', label: 'Disabled', group: 'Core' },
    { value: 'notifications', label: 'Email notifications', group: 'Settings' },
    { value: 'dark-mode', label: 'Dark mode toggle', group: 'Settings' },
    { value: 'auto-save', label: 'Auto-save drafts', group: 'Settings' },
    { value: 'success-tone', label: 'Success tone', group: 'Tones' },
    { value: 'danger-tone', label: 'Danger tone', group: 'Tones' },
    { value: 'settings-row', label: 'Settings row layout', group: 'Advanced' },
    { value: 'form-binding', label: 'Form binding (ngModel)', group: 'Advanced' },
  ];

  readonly toneOptions: BrightrailSwitchTone[] = ['primary', 'success', 'warning', 'danger', 'neutral'];
  readonly sizeOptions: BrightrailSwitchSize[] = ['sm', 'md', 'lg'];
  readonly yesNo = [
    { value: 'no', label: 'No' },
    { value: 'yes', label: 'Yes' },
  ] as const;
  readonly themeRowOptions: { id: PlaygroundThemeId; label: string }[] = [
    { id: 'light', label: 'Material light' },
    { id: 'dark', label: 'Material dark' },
  ];

  readonly selectedRecipeGroup = signal<string>('Core');
  readonly recipe = signal<SwitchRecipe>('basic-off');
  readonly label = signal('Enable notifications');
  readonly ariaLabel = signal('');
  readonly tone = signal<BrightrailSwitchTone>('primary');
  readonly size = signal<BrightrailSwitchSize>('md');
  readonly checked = signal(false);
  readonly disabled = signal(false);
  readonly useNgModel = signal(false);
  readonly ngModelValue = signal(false);
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

  recipesInGroup(group: string): { value: SwitchRecipe; label: string }[] {
    return this.recipeOptions.filter((r) => r.group === group).map((r) => ({ value: r.value, label: r.label }));
  }

  onRecipeGroupNgModelChange(v: string): void {
    this.selectedRecipeGroup.set(v);
    const next = this.recipesInGroup(v)[0]?.value;
    if (next) this.onRecipeNgModelChange(next);
  }

  onRecipeNgModelChange(v: string): void {
    const recipe = v as SwitchRecipe;
    this.recipe.set(recipe);
    this.applyRecipe(recipe);
  }

  applyRecipe(recipe: SwitchRecipe): void {
    this.label.set('Enable notifications');
    this.ariaLabel.set('');
    this.tone.set('primary');
    this.size.set('md');
    this.checked.set(false);
    this.disabled.set(false);
    this.useNgModel.set(false);
    this.ngModelValue.set(false);

    switch (recipe) {
      case 'basic-on':
        this.checked.set(true);
        break;
      case 'with-label':
        this.label.set('Email notifications');
        this.checked.set(true);
        break;
      case 'aria-only':
        this.label.set('');
        this.ariaLabel.set('Toggle feature');
        this.checked.set(true);
        break;
      case 'disabled':
        this.disabled.set(true);
        this.checked.set(true);
        break;
      case 'notifications':
        this.label.set('Email notifications');
        this.checked.set(true);
        break;
      case 'dark-mode':
        this.label.set('Dark mode');
        this.tone.set('neutral');
        break;
      case 'auto-save':
        this.label.set('Auto-save drafts');
        this.tone.set('success');
        this.checked.set(true);
        break;
      case 'success-tone':
        this.label.set('Feature enabled');
        this.tone.set('success');
        this.checked.set(true);
        break;
      case 'danger-tone':
        this.label.set('Delete on sync');
        this.tone.set('danger');
        break;
      case 'settings-row':
        this.label.set('');
        this.ariaLabel.set('Push notifications');
        this.size.set('sm');
        this.checked.set(true);
        break;
      case 'form-binding':
        this.label.set('Marketing emails');
        this.useNgModel.set(true);
        this.ngModelValue.set(true);
        break;
    }
  }

  resetToDefaults(): void {
    this.previewFx.set('inherit');
    this.selectedRecipeGroup.set('Core');
    this.onRecipeNgModelChange('basic-off');
    this.themeService.setTheme('light');
    this.activeTab.set('html');
  }

  selectTab(tab: CodeTabId): void {
    this.activeTab.set(tab);
  }

  copySnippet(): void {
    void navigator.clipboard?.writeText(this.activeSnippet());
  }

  onCheckedChange(next: boolean): void {
    this.checked.set(next);
    this.ngModelValue.set(next);
  }

  buildHtml(): string {
    const lines = ['<brightrail-switch'];
    if (this.label().trim()) {
      lines.push(`  label="${escapeAttr(this.label())}"`);
    }
    if (this.ariaLabel().trim()) {
      lines.push(`  ariaLabel="${escapeAttr(this.ariaLabel())}"`);
    }
    lines.push(`  tone="${this.tone()}"`);
    lines.push(`  size="${this.size()}"`);
    if (this.checked()) lines.push('  [checked]="true"');
    if (this.disabled()) lines.push('  [disabled]="true"');
    if (this.useNgModel()) {
      lines.push('  [(ngModel)]="switchValue"');
    } else if (this.checked()) {
      lines.push('  (checkedChange)="onCheckedChange($event)"');
    }
    lines.push('/>');
    return lines.join('\n');
  }

  buildTs(): string {
    return [
      "import { BrightrailSwitchComponent } from 'brightrail';",
      '',
      '// imports: [BrightrailSwitchComponent, FormsModule]',
      'switchValue = false;',
      '',
      'onCheckedChange(next: boolean): void {',
      '  this.switchValue = next;',
      '}',
    ].join('\n');
  }

  buildScss(): string {
    return [
      '.settings-row {',
      '  display: flex;',
      '  align-items: center;',
      '  justify-content: space-between;',
      '  gap: 0.75rem;',
      '}',
    ].join('\n');
  }
}

function escapeAttr(value: string): string {
  return value.replace(/"/g, '&quot;');
}
