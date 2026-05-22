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
import { BrightrailButtonIcon } from '../../../../../brightrail/src/lib/buttons/brightrail-button-icon.component';
import {
  BrightrailCheckboxComponent,
  BrightrailCheckboxLabelPosition,
  BrightrailCheckboxSize,
  BrightrailCheckboxState,
  BrightrailCheckboxStatus,
  BrightrailCheckboxTone,
  BrightrailCheckboxVariant,
} from '../../../../../brightrail/src/lib/fields/checkbox/brightrail-checkbox.component';
import {
  BrightrailCheckboxGroupComponent as BrightrailCheckboxGroupLibComponent,
  BrightrailCheckboxGroupLayout,
  BrightrailCheckboxGroupOption,
} from '../../../../../brightrail/src/lib/fields/checkbox/brightrail-checkbox-group.component';

import { PlaygroundThemeId, PlaygroundThemeService } from '../playground-theme.service';
import { createPlaygroundPreviewFx } from '../shared/playground-fx.util';
import { PlaygroundFxSettingsComponent } from '../shared/playground-fx-settings.component';

type CodeTabId = 'html' | 'ts' | 'scss';
type CheckboxRecipe =
  | 'basic'
  | 'with-description'
  | 'indeterminate'
  | 'disabled'
  | 'invalid'
  | 'approval'
  | 'bulk-select'
  | 'permissions'
  | 'vertical-group'
  | 'horizontal-group'
  | 'nested'
  | 'parent-child'
  | 'mixed-state';

@Component({
  selector: 'app-checkbox-playground',
  standalone: true,
  imports: [
    PlaygroundPreviewHeaderComponent,FormsModule, BrightrailCheckboxComponent, BrightrailCheckboxGroupLibComponent, PlaygroundFxSettingsComponent],
  templateUrl: './checkbox-playground.component.html',
  styleUrl: './checkbox-playground.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CheckboxPlaygroundComponent {
  readonly previewOnly = injectPlaygroundA11yPreviewMode();
  readonly a11yPreviewState = computed(() =>
    snapshotPlaygroundState({
      recipe: () => this.recipe(),
      label: () => this.label(),
      description: () => this.description(),
      errorText: () => this.errorText(),
      ariaLabel: () => this.ariaLabel(),
      tone: () => this.tone(),
      variant: () => this.variant(),
      status: () => this.status(),
      labelPosition: () => this.labelPosition(),
      size: () => this.size(),
      state: () => this.state(),
      required: () => this.required(),
      invalid: () => this.invalid(),
      checked: () => this.checked(),
      indeterminate: () => this.indeterminate(),
      checkedIcon: () => this.checkedIcon(),
      groupLayout: () => this.groupLayout(),
      showSelectAll: () => this.showSelectAll(),
      selectAllLabel: () => this.selectAllLabel(),
      optionCount: () => this.optionCount(),
      selectedIds: () => this.selectedIds(),
    }),
  );

  constructor() {
    initPlaygroundA11yPreview('checkbox', this.previewOnly, (state) =>
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
      description: this.description as WritableSignal<unknown>,
      errorText: this.errorText as WritableSignal<unknown>,
      ariaLabel: this.ariaLabel as WritableSignal<unknown>,
      tone: this.tone as WritableSignal<unknown>,
      variant: this.variant as WritableSignal<unknown>,
      status: this.status as WritableSignal<unknown>,
      labelPosition: this.labelPosition as WritableSignal<unknown>,
      size: this.size as WritableSignal<unknown>,
      state: this.state as WritableSignal<unknown>,
      required: this.required as WritableSignal<unknown>,
      invalid: this.invalid as WritableSignal<unknown>,
      checked: this.checked as WritableSignal<unknown>,
      indeterminate: this.indeterminate as WritableSignal<unknown>,
      checkedIcon: this.checkedIcon as WritableSignal<unknown>,
      groupLayout: this.groupLayout as WritableSignal<unknown>,
      showSelectAll: this.showSelectAll as WritableSignal<unknown>,
      selectAllLabel: this.selectAllLabel as WritableSignal<unknown>,
      optionCount: this.optionCount as WritableSignal<unknown>,
      selectedIds: this.selectedIds as WritableSignal<unknown>,
    });
  }

  readonly themeService = inject(PlaygroundThemeService);
  private readonly _playgroundFx = createPlaygroundPreviewFx();
  readonly previewFx = this._playgroundFx.previewFx;
  readonly resolvedFxShell = this._playgroundFx.resolvedFxShell;
  readonly ngModelStandalone = { standalone: true };

  readonly recipeGroups = ['Core', 'Validation', 'Enterprise', 'Advanced'] as const;
  readonly recipeOptions: { value: CheckboxRecipe; label: string; group: string }[] = [
    { value: 'basic', label: 'Basic checkbox', group: 'Core' },
    { value: 'with-description', label: 'With description', group: 'Core' },
    { value: 'indeterminate', label: 'Indeterminate state', group: 'Core' },
    { value: 'disabled', label: 'Disabled control', group: 'Core' },
    { value: 'invalid', label: 'Invalid / required', group: 'Validation' },
    { value: 'approval', label: 'Approval tone', group: 'Validation' },
    { value: 'bulk-select', label: 'Bulk select row', group: 'Enterprise' },
    { value: 'permissions', label: 'Permissions checklist', group: 'Enterprise' },
    { value: 'vertical-group', label: 'Vertical group', group: 'Enterprise' },
    { value: 'horizontal-group', label: 'Horizontal group', group: 'Enterprise' },
    { value: 'nested', label: 'Nested checkboxes', group: 'Advanced' },
    { value: 'parent-child', label: 'Parent-child selection', group: 'Advanced' },
    { value: 'mixed-state', label: 'Mixed state (indeterminate)', group: 'Advanced' },
  ];
  readonly toneOptions: BrightrailCheckboxTone[] = ['primary', 'success', 'warning', 'danger', 'neutral'];
  readonly variantOptions: BrightrailCheckboxVariant[] = ['default', 'outlined', 'filled'];
  readonly statusOptions: BrightrailCheckboxStatus[] = ['none', 'success', 'warning', 'error', 'info'];
  readonly labelPositionOptions: BrightrailCheckboxLabelPosition[] = ['right', 'left'];
  readonly sizeOptions: BrightrailCheckboxSize[] = ['sm', 'md', 'lg'];
  readonly stateOptions: BrightrailCheckboxState[] = [
    'default',
    'hover',
    'focused',
    'disabled',
    'readonly',
  ];
  readonly iconOptions: BrightrailButtonIcon[] = [
    'check',
    'close',
    'info',
    'warning',
    'heart',
    'plus',
    'none',
  ];
  readonly yesNo = [
    { value: 'no', label: 'No' },
    { value: 'yes', label: 'Yes' },
  ] as const;
  readonly themeRowOptions: { id: PlaygroundThemeId; label: string }[] = [
    { id: 'light', label: 'Material light' },
    { id: 'dark', label: 'Material dark' },
  ];

  readonly selectedRecipeGroup = signal<string>('Core');
  readonly recipe = signal<CheckboxRecipe>('basic');
  readonly label = signal('Email me product updates');
  readonly description = signal('');
  readonly errorText = signal('This field is required');
  readonly ariaLabel = signal('');
  readonly tone = signal<BrightrailCheckboxTone>('primary');
  readonly variant = signal<BrightrailCheckboxVariant>('default');
  readonly status = signal<BrightrailCheckboxStatus>('none');
  readonly labelPosition = signal<BrightrailCheckboxLabelPosition>('right');
  readonly size = signal<BrightrailCheckboxSize>('md');
  readonly state = signal<BrightrailCheckboxState>('default');
  readonly required = signal(false);
  readonly invalid = signal(false);
  readonly checked = signal(false);
  readonly indeterminate = signal(false);
  readonly checkedIcon = signal<BrightrailButtonIcon>('check');
  readonly activeTab = signal<CodeTabId>('html');
  readonly groupLayout = signal<BrightrailCheckboxGroupLayout>('vertical');
  readonly showSelectAll = signal(false);
  readonly selectAllLabel = signal('Select all');
  readonly optionCount = signal(3);
  readonly selectedIds = signal<string[]>([]);

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
  readonly groupOptions = computed<BrightrailCheckboxGroupOption[]>(() => {
    const count = Math.max(1, this.optionCount());
    const rec = this.recipe();
    if (rec === 'permissions') {
      return [
        { id: 'read', label: 'Read access' },
        { id: 'write', label: 'Write access' },
        { id: 'admin', label: 'Admin access' },
      ];
    }
    if (rec === 'nested' || rec === 'parent-child' || rec === 'mixed-state') {
      return [
        { id: 'root', label: 'All modules', level: 0 },
        { id: 'a', label: 'Module A', level: 1 },
        { id: 'b', label: 'Module B', level: 1 },
        { id: 'c', label: 'Module C', level: 1 },
      ];
    }
    return Array.from({ length: count }, (_, idx) => ({
      id: `opt-${idx + 1}`,
      label: `Option ${idx + 1}`,
    }));
  });
  readonly usesGroup = computed(
    () =>
      this.recipe() === 'bulk-select' ||
      this.recipe() === 'permissions' ||
      this.recipe() === 'vertical-group' ||
      this.recipe() === 'horizontal-group' ||
      this.recipe() === 'nested' ||
      this.recipe() === 'parent-child' ||
      this.recipe() === 'mixed-state',
  );

  recipesInGroup(group: string): { value: CheckboxRecipe; label: string }[] {
    return this.recipeOptions.filter((r) => r.group === group).map((r) => ({ value: r.value, label: r.label }));
  }

  onRecipeGroupNgModelChange(v: string): void {
    this.selectedRecipeGroup.set(v);
    const next = this.recipesInGroup(v)[0]?.value;
    if (next) this.onRecipeNgModelChange(next);
  }

  onRecipeNgModelChange(v: string): void {
    const recipe = v as CheckboxRecipe;
    this.recipe.set(recipe);
    this.applyRecipe(recipe);
  }

  applyRecipe(recipe: CheckboxRecipe): void {
    this.label.set('Email me product updates');
    this.description.set('');
    this.ariaLabel.set('');
    this.errorText.set('This field is required');
    this.tone.set('primary');
    this.variant.set('default');
    this.status.set('none');
    this.labelPosition.set('right');
    this.size.set('md');
    this.state.set('default');
    this.required.set(false);
    this.invalid.set(false);
    this.checked.set(false);
    this.indeterminate.set(false);
    this.checkedIcon.set('check');
    this.groupLayout.set('vertical');
    this.showSelectAll.set(false);
    this.selectAllLabel.set('Select all');
    this.optionCount.set(3);
    this.selectedIds.set([]);
    if (recipe === 'with-description') {
      this.description.set('Get release updates, feature previews, and migration notes.');
    } else if (recipe === 'indeterminate') {
      this.label.set('Select all users');
      this.indeterminate.set(true);
    } else if (recipe === 'disabled') {
      this.state.set('disabled');
      this.checked.set(true);
    } else if (recipe === 'invalid') {
      this.label.set('I agree to the privacy policy');
      this.required.set(true);
      this.invalid.set(true);
      this.status.set('error');
      this.errorText.set('This field is required');
    } else if (recipe === 'approval') {
      this.label.set('Approve deployment');
      this.tone.set('success');
      this.checked.set(true);
      this.status.set('success');
    } else if (recipe === 'bulk-select') {
      this.label.set('Select all rows');
      this.showSelectAll.set(true);
      this.selectAllLabel.set('Select all items');
      this.tone.set('neutral');
      this.size.set('sm');
      this.variant.set('outlined');
      this.selectedIds.set(['opt-1']);
    } else if (recipe === 'permissions') {
      this.showSelectAll.set(false);
      this.selectedIds.set(['read', 'write']);
      this.label.set('Permissions');
    } else if (recipe === 'vertical-group') {
      this.showSelectAll.set(false);
      this.groupLayout.set('vertical');
      this.optionCount.set(4);
      this.selectedIds.set(['opt-2']);
      this.label.set('Vertical group');
    } else if (recipe === 'horizontal-group') {
      this.groupLayout.set('horizontal');
      this.optionCount.set(4);
      this.selectedIds.set(['opt-2']);
      this.label.set('Horizontal group');
    } else if (recipe === 'nested') {
      this.optionCount.set(4);
      this.selectedIds.set(['a', 'b']);
      this.label.set('Nested');
    } else if (recipe === 'parent-child') {
      this.showSelectAll.set(false);
      this.selectedIds.set(['a', 'b']);
      this.label.set('Parent-child');
    } else if (recipe === 'mixed-state') {
      this.showSelectAll.set(false);
      this.selectedIds.set(['a', 'c']);
      this.label.set('Mixed state');
    }
  }

  resetToDefaults(): void {
    this.previewFx.set('inherit');
    this.selectedRecipeGroup.set('Core');
    this.recipe.set('basic');
    this.applyRecipe('basic');
    this.themeService.setTheme('light');
  }

  selectTab(tab: CodeTabId): void {
    this.activeTab.set(tab);
  }

  async copySnippet(): Promise<void> {
    await navigator.clipboard?.writeText(this.activeSnippet());
  }

  private buildHtml(): string {
    const effectiveAriaLabel = this.ariaLabel().trim() || this.label();
    const attrs = [
      `label="${escapeAttr(this.label())}"`,
      `description="${escapeAttr(this.description())}"`,
      `ariaLabel="${escapeAttr(effectiveAriaLabel)}"`,
      `errorText="${escapeAttr(this.errorText())}"`,
      `tone="${this.tone()}"`,
      `variant="${this.variant()}"`,
      `status="${this.status()}"`,
      `labelPosition="${this.labelPosition()}"`,
      `size="${this.size()}"`,
      `state="${this.state()}"`,
      `checkedIcon="${this.checkedIcon()}"`,
      this.required() ? '[required]="true"' : '',
      this.invalid() ? '[invalid]="true"' : '',
      this.checked() ? '[checked]="true"' : '',
      this.indeterminate() ? '[indeterminate]="true"' : '',
    ].filter(Boolean);
    if (this.usesGroup()) {
      return `<brightrail-checkbox-group
  [options]="options"
  [selectedIds]="selectedIds"
  parentOptionId="root"
  layout="${this.groupLayout()}"
  [showSelectAll]="${this.showSelectAll()}"
  selectAllLabel="${escapeAttr(this.selectAllLabel())}"
  tone="${this.tone()}"
  variant="${this.variant()}"
  status="${this.status()}"
  labelPosition="${this.labelPosition()}"
  size="${this.size()}"
  state="${this.state()}"
  checkedIcon="${this.checkedIcon()}"
/>`;
    }
    return `<brightrail-checkbox\n  ${attrs.join('\n  ')}\n/>`;
  }

  private buildTs(): string {
    return [
      `checked = false;`,
      `onCheckedChange(next: boolean): void {`,
      `  this.checked = next;`,
      `}`,
    ].join('\n');
  }

  private buildScss(): string {
    return `.settings-pref input[type='checkbox'] { accent-color: var(--br-color-primary); }`;
  }
}

function escapeAttr(value: string): string {
  return value.replace(/"/g, '&quot;');
}

