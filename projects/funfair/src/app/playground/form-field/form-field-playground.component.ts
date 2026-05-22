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
  BrightrailFormFieldComponent,
  BrightrailSwitchComponent,
  BrightrailTextFieldComponent,
} from 'brightrail';

import { PlaygroundThemeId, PlaygroundThemeService } from '../playground-theme.service';
import { createPlaygroundPreviewFx, playgroundFxHtml, playgroundFxTs } from '../shared/playground-fx.util';
import { PlaygroundFxSettingsComponent } from '../shared/playground-fx-settings.component';

type CodeTabId = 'html' | 'ts' | 'scss';

type FormFieldRecipe =
  | 'label-hint'
  | 'label-only'
  | 'required'
  | 'error-state'
  | 'text-outlined'
  | 'text-filled'
  | 'switch-notify'
  | 'switch-terms'
  | 'stacked-names'
  | 'settings-row';

type ControlSlot = 'text-field' | 'switch';

@Component({
  selector: 'app-form-field-playground',
  standalone: true,
  imports: [
    PlaygroundPreviewHeaderComponent,
    FormsModule,
    BrightrailFormFieldComponent,
    BrightrailTextFieldComponent,
    BrightrailSwitchComponent, PlaygroundFxSettingsComponent],
  templateUrl: './form-field-playground.component.html',
  styleUrl: './form-field-playground.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FormFieldPlaygroundComponent {
  readonly previewOnly = injectPlaygroundA11yPreviewMode();
  readonly a11yPreviewState = computed(() =>
    snapshotPlaygroundState({
      recipe: () => this.recipe(),
      label: () => this.label(),
      hint: () => this.hint(),
      error: () => this.error(),
      required: () => this.required(),
      invalid: () => this.invalid(),
      controlSlot: () => this.controlSlot(),
      textAppearance: () => this.textAppearance(),
      textValue: () => this.textValue(),
      lastNameValue: () => this.lastNameValue(),
      switchValue: () => this.switchValue(),
    }),
  );

  constructor() {
    initPlaygroundA11yPreview('form-field', this.previewOnly, (state) =>
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
      hint: this.hint as WritableSignal<unknown>,
      error: this.error as WritableSignal<unknown>,
      required: this.required as WritableSignal<unknown>,
      invalid: this.invalid as WritableSignal<unknown>,
      controlSlot: this.controlSlot as WritableSignal<unknown>,
      textAppearance: this.textAppearance as WritableSignal<unknown>,
      textValue: this.textValue as WritableSignal<unknown>,
      lastNameValue: this.lastNameValue as WritableSignal<unknown>,
      switchValue: this.switchValue as WritableSignal<unknown>,
    });
  }

  readonly themeService = inject(PlaygroundThemeService);
  private readonly _playgroundFx = createPlaygroundPreviewFx();
  readonly previewFx = this._playgroundFx.previewFx;
  readonly resolvedFxShell = this._playgroundFx.resolvedFxShell;
  readonly ngModelStandalone = { standalone: true };

  readonly recipeGroups = ['Core', 'Validation', 'Controls', 'Layout'] as const;
  readonly recipeOptions: { value: FormFieldRecipe; label: string; group: string }[] = [
    { value: 'label-hint', label: 'Label + hint', group: 'Core' },
    { value: 'label-only', label: 'Label only', group: 'Core' },
    { value: 'required', label: 'Required field', group: 'Validation' },
    { value: 'error-state', label: 'Invalid + error', group: 'Validation' },
    { value: 'text-outlined', label: 'Text field (outlined)', group: 'Controls' },
    { value: 'text-filled', label: 'Text field (filled)', group: 'Controls' },
    { value: 'switch-notify', label: 'Switch notifications', group: 'Controls' },
    { value: 'switch-terms', label: 'Switch + required error', group: 'Validation' },
    { value: 'stacked-names', label: 'Stacked name fields', group: 'Layout' },
    { value: 'settings-row', label: 'Settings switch row', group: 'Layout' },
  ];

  readonly yesNoOptions = [
    { value: 'no', label: 'No' },
    { value: 'yes', label: 'Yes' },
  ] as const;
  readonly themeRowOptions: { id: PlaygroundThemeId; label: string }[] = [
    { id: 'light', label: 'Material light' },
    { id: 'dark', label: 'Material dark' },
  ];
  readonly controlSlotOptions: { value: ControlSlot; label: string }[] = [
    { value: 'text-field', label: 'Text field' },
    { value: 'switch', label: 'Switch' },
  ];

  readonly selectedRecipeGroup = signal<string>('Core');
  readonly recipe = signal<FormFieldRecipe>('label-hint');
  readonly label = signal('Email');
  readonly hint = signal('We will never share your email.');
  readonly error = signal('This field is required.');
  readonly required = signal(false);
  readonly invalid = signal(false);
  readonly controlSlot = signal<ControlSlot>('text-field');
  readonly textAppearance = signal<'outlined' | 'filled'>('outlined');
  readonly textValue = signal('');
  readonly lastNameValue = signal('');
  readonly switchValue = signal(false);
  readonly activeTab = signal<CodeTabId>('html');

  readonly showStackedPreview = computed(() => this.recipe() === 'stacked-names');

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

  recipesInGroup(group: string): { value: FormFieldRecipe; label: string }[] {
    return this.recipeOptions.filter((r) => r.group === group).map((r) => ({ value: r.value, label: r.label }));
  }

  onRecipeGroupNgModelChange(v: string): void {
    this.selectedRecipeGroup.set(v);
    const first = this.recipesInGroup(v)[0]?.value;
    if (first) this.onRecipeNgModelChange(first);
  }

  onRecipeNgModelChange(v: string): void {
    const next = v as FormFieldRecipe;
    this.recipe.set(next);
    this.applyRecipe(next);
  }

  applyRecipe(recipe: FormFieldRecipe): void {
    this.label.set('Email');
    this.hint.set('');
    this.error.set('This field is required.');
    this.required.set(false);
    this.invalid.set(false);
    this.controlSlot.set('text-field');
    this.textAppearance.set('outlined');
    this.textValue.set('');
    this.switchValue.set(false);

    switch (recipe) {
      case 'label-hint':
        this.hint.set('We will never share your email.');
        break;
      case 'label-only':
        this.label.set('Display name');
        this.hint.set('');
        break;
      case 'required':
        this.label.set('Workspace name');
        this.required.set(true);
        break;
      case 'error-state':
        this.label.set('Password');
        this.required.set(true);
        this.invalid.set(true);
        this.error.set('Password must be at least 8 characters.');
        break;
      case 'text-outlined':
        this.label.set('Company');
        this.hint.set('Legal entity name on invoices.');
        this.textAppearance.set('outlined');
        break;
      case 'text-filled':
        this.label.set('Job title');
        this.textAppearance.set('filled');
        break;
      case 'switch-notify':
        this.label.set('Email notifications');
        this.hint.set('Receive product updates and security alerts.');
        this.controlSlot.set('switch');
        this.switchValue.set(true);
        break;
      case 'switch-terms':
        this.label.set('Terms of service');
        this.controlSlot.set('switch');
        this.required.set(true);
        this.invalid.set(true);
        this.error.set('You must accept the terms to continue.');
        break;
      case 'stacked-names':
        this.label.set('First name');
        this.required.set(true);
        break;
      case 'settings-row':
        this.label.set('Public profile');
        this.hint.set('Visible to anyone with the link.');
        this.controlSlot.set('switch');
        break;
    }
  }

  resetToDefaults(): void {
    this.previewFx.set('inherit');
    this.selectedRecipeGroup.set('Core');
    this.onRecipeNgModelChange('label-hint');
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
    const shell = [
      '<brightrail-form-field',
      `  label="${escapeAttr(this.label())}"`,
      this.hint().trim() ? `  hint="${escapeAttr(this.hint())}"` : '',
      this.required() ? '  [required]="true"' : '',
      this.invalid() ? `  [invalid]="true"\n  error="${escapeAttr(this.error())}"` : '',
      '>',
      this.controlSlot() === 'switch'
        ? '  <brightrail-switch label="Enable" [(ngModel)]="enabled" />'
        : `  <brightrail-text-field appearance="${this.textAppearance()}" labelPosition="none" [(ngModel)]="value" />`,
      '</brightrail-form-field>',
    ];
    return shell.filter(Boolean).join('\n');
  }

  private buildTs(): string {
    return playgroundFxTs([
      "import { BrightrailFormFieldComponent, BrightrailTextFieldComponent } from 'brightrail';",
      '',
      '// Wrap any control in <brightrail-form-field> for shared label, hint, and error.',
    ].join('\n'), this.previewFx(), this.themeService.fxShell());
  }

  private buildScss(): string {
    return '.ff-play-stack { display: grid; gap: 0.75rem; max-width: 22rem; }';
  }
}

function escapeAttr(value: string): string {
  return value.replace(/"/g, '&quot;');
}
