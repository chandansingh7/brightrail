import { ChangeDetectionStrategy, Component, computed, inject, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {
  BrightrailRadioLabelPosition,
  BrightrailRadioComponent,
  BrightrailRadioSize,
  BrightrailRadioState,
  BrightrailRadioStatus,
  BrightrailRadioTone,
  BrightrailRadioVariant,
} from '../../../../../brightrail/src/lib/fields/radio/brightrail-radio.component';
import { BrightrailButtonIcon } from '../../../../../brightrail/src/lib/buttons/brightrail-button-icon.component';
import {
  BrightrailRadioGroupComponent as BrightrailRadioGroupLibComponent,
  BrightrailRadioGroupLayout,
  BrightrailRadioGroupOption,
} from '../../../../../brightrail/src/lib/fields/radio/brightrail-radio-group.component';

import { PlaygroundThemeId, PlaygroundThemeService } from '../playground-theme.service';

type CodeTabId = 'html' | 'ts' | 'scss';
type RadioRecipe =
  | 'core-default'
  | 'core-selected'
  | 'core-disabled'
  | 'size-small'
  | 'size-medium'
  | 'size-large'
  | 'state-hover'
  | 'state-focused'
  | 'state-invalid'
  | 'label-right'
  | 'label-left'
  | 'desc-below'
  | 'group-vertical'
  | 'group-horizontal'
  | 'group-segmented'
  | 'ent-notification'
  | 'ent-account'
  | 'ent-shipping'
  | 'ent-approval'
  | 'adv-helper'
  | 'adv-error'
  | 'adv-card'
  | 'adv-icon';

@Component({
  selector: 'app-radio-playground',
  standalone: true,
  imports: [FormsModule, BrightrailRadioComponent, BrightrailRadioGroupLibComponent],
  templateUrl: './radio-playground.component.html',
  styleUrl: './radio-playground.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RadioPlaygroundComponent {
  readonly themeService = inject(PlaygroundThemeService);
  readonly ngModelStandalone = { standalone: true };

  readonly recipeGroups = ['Core', 'Sizes', 'States', 'Labels', 'Group patterns', 'Enterprise', 'Advanced'] as const;
  readonly recipeOptions: { value: RadioRecipe; label: string; group: string }[] = [
    { value: 'core-default', label: 'Default option', group: 'Core' },
    { value: 'core-selected', label: 'Selected option', group: 'Core' },
    { value: 'core-disabled', label: 'Disabled option', group: 'Core' },
    { value: 'size-small', label: 'Small', group: 'Sizes' },
    { value: 'size-medium', label: 'Medium', group: 'Sizes' },
    { value: 'size-large', label: 'Large', group: 'Sizes' },
    { value: 'state-hover', label: 'Hover state', group: 'States' },
    { value: 'state-focused', label: 'Focused state', group: 'States' },
    { value: 'state-invalid', label: 'Invalid state', group: 'States' },
    { value: 'label-right', label: 'Label right', group: 'Labels' },
    { value: 'label-left', label: 'Label left', group: 'Labels' },
    { value: 'desc-below', label: 'Description below', group: 'Labels' },
    { value: 'group-vertical', label: 'Vertical group', group: 'Group patterns' },
    { value: 'group-horizontal', label: 'Horizontal group', group: 'Group patterns' },
    { value: 'group-segmented', label: 'Segmented choice', group: 'Group patterns' },
    { value: 'ent-notification', label: 'Notification preference', group: 'Enterprise' },
    { value: 'ent-account', label: 'Account type', group: 'Enterprise' },
    { value: 'ent-shipping', label: 'Shipping method', group: 'Enterprise' },
    { value: 'ent-approval', label: 'Approval choice', group: 'Enterprise' },
    { value: 'adv-helper', label: 'Helper text', group: 'Advanced' },
    { value: 'adv-error', label: 'Validation error', group: 'Advanced' },
    { value: 'adv-card', label: 'Card-style selection', group: 'Advanced' },
    { value: 'adv-icon', label: 'Icon radio options', group: 'Advanced' },
  ];
  readonly toneOptions: BrightrailRadioTone[] = ['primary', 'success', 'warning', 'danger', 'neutral'];
  readonly variantOptions: BrightrailRadioVariant[] = ['default', 'outlined', 'filled', 'card'];
  readonly statusOptions: BrightrailRadioStatus[] = ['none', 'success', 'warning', 'error', 'info'];
  readonly labelPositionOptions: BrightrailRadioLabelPosition[] = ['right', 'left'];
  readonly layoutOptions: BrightrailRadioGroupLayout[] = ['vertical', 'horizontal', 'segmented'];
  readonly sizeOptions: BrightrailRadioSize[] = ['sm', 'md', 'lg'];
  readonly stateOptions: BrightrailRadioState[] = ['default', 'hover', 'focused', 'disabled', 'readonly'];
  readonly iconOptions: BrightrailButtonIcon[] = ['none', 'info', 'warning', 'user', 'calendar', 'close'];
  readonly yesNo = [
    { value: 'no', label: 'No' },
    { value: 'yes', label: 'Yes' },
  ] as const;
  readonly themeRowOptions: { id: PlaygroundThemeId; label: string }[] = [
    { id: 'light', label: 'Material light' },
    { id: 'dark', label: 'Material dark' },
  ];

  readonly selectedRecipeGroup = signal<string>('Core');
  readonly recipe = signal<RadioRecipe>('core-default');
  readonly groupLabel = signal('Notification preference');
  readonly errorText = signal('Please select an option.');
  readonly label = signal('Email notifications');
  readonly description = signal('');
  readonly ariaLabel = signal('');
  readonly variant = signal<BrightrailRadioVariant>('default');
  readonly status = signal<BrightrailRadioStatus>('none');
  readonly labelPosition = signal<BrightrailRadioLabelPosition>('right');
  readonly tone = signal<BrightrailRadioTone>('primary');
  readonly size = signal<BrightrailRadioSize>('md');
  readonly state = signal<BrightrailRadioState>('default');
  readonly layout = signal<BrightrailRadioGroupLayout>('vertical');
  readonly optionIcon = signal<BrightrailButtonIcon>('none');
  readonly required = signal(false);
  readonly invalid = signal(false);
  readonly checked = signal(false);
  readonly selectedId = signal('a');
  readonly groupOptions = signal<BrightrailRadioGroupOption[]>([
    { id: 'a', label: 'First option' },
    { id: 'b', label: 'Second option' },
    { id: 'c', label: 'Third option' },
  ]);
  readonly activeTab = signal<CodeTabId>('html');
  readonly usesGroup = computed(() =>
    this.recipe().startsWith('group-') || this.recipe().startsWith('ent-') || this.recipe() === 'adv-card' || this.recipe() === 'adv-icon',
  );

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

  recipesInGroup(group: string): { value: RadioRecipe; label: string }[] {
    return this.recipeOptions.filter((r) => r.group === group).map((r) => ({ value: r.value, label: r.label }));
  }

  onRecipeGroupNgModelChange(v: string): void {
    this.selectedRecipeGroup.set(v);
    const next = this.recipesInGroup(v)[0]?.value;
    if (next) this.onRecipeNgModelChange(next);
  }

  onRecipeNgModelChange(v: string): void {
    const recipe = v as RadioRecipe;
    this.recipe.set(recipe);
    this.applyRecipe(recipe);
  }

  applyRecipe(recipe: RadioRecipe): void {
    this.groupLabel.set('Notification preference');
    this.errorText.set('Please select an option.');
    this.label.set('Email notifications');
    this.description.set('');
    this.ariaLabel.set('');
    this.variant.set('default');
    this.status.set('none');
    this.labelPosition.set('right');
    this.tone.set('primary');
    this.size.set('md');
    this.state.set('default');
    this.layout.set('vertical');
    this.optionIcon.set('none');
    this.required.set(false);
    this.invalid.set(false);
    this.checked.set(false);
    this.selectedId.set('a');
    this.groupOptions.set([
      { id: 'a', label: 'First option' },
      { id: 'b', label: 'Second option' },
      { id: 'c', label: 'Third option' },
    ]);
    if (recipe === 'core-selected') {
      this.checked.set(true);
    } else if (recipe === 'core-disabled') {
      this.state.set('disabled');
    } else if (recipe === 'size-small') {
      this.size.set('sm');
      this.checked.set(true);
    } else if (recipe === 'size-medium') {
      this.size.set('md');
      this.checked.set(true);
    } else if (recipe === 'size-large') {
      this.size.set('lg');
      this.checked.set(true);
    } else if (recipe === 'state-hover') {
      this.state.set('hover');
    } else if (recipe === 'state-focused') {
      this.state.set('focused');
      this.checked.set(true);
    } else if (recipe === 'state-invalid') {
      this.invalid.set(true);
      this.status.set('error');
      this.errorText.set('Please select an option.');
    } else if (recipe === 'label-left') {
      this.labelPosition.set('left');
      this.checked.set(true);
    } else if (recipe === 'desc-below') {
      this.description.set('This option includes additional details.');
    } else if (recipe === 'group-horizontal') {
      this.layout.set('horizontal');
    } else if (recipe === 'group-segmented') {
      this.layout.set('segmented');
      this.groupOptions.set([
        { id: 'daily', label: 'Daily' },
        { id: 'weekly', label: 'Weekly' },
        { id: 'monthly', label: 'Monthly' },
      ]);
      this.selectedId.set('daily');
    } else if (recipe === 'ent-notification') {
      this.groupLabel.set('Notification preference');
      this.groupOptions.set([
        { id: 'email', label: 'Email' },
        { id: 'sms', label: 'SMS' },
        { id: 'push', label: 'Push notification' },
        { id: 'none', label: 'Do not notify' },
      ]);
      this.selectedId.set('email');
    } else if (recipe === 'ent-account') {
      this.groupLabel.set('Account type');
      this.groupOptions.set([
        { id: 'personal', label: 'Personal' },
        { id: 'business', label: 'Business' },
        { id: 'enterprise', label: 'Enterprise' },
      ]);
      this.selectedId.set('personal');
    } else if (recipe === 'ent-shipping') {
      this.groupLabel.set('Shipping method');
      this.groupOptions.set([
        { id: 'std', label: 'Standard (3-5 days)' },
        { id: 'exp', label: 'Express (1-2 days)' },
        { id: 'overnight', label: 'Overnight' },
      ]);
      this.selectedId.set('std');
    } else if (recipe === 'ent-approval') {
      this.groupLabel.set('Approval choice');
      this.groupOptions.set([
        { id: 'approve', label: 'Approve' },
        { id: 'reject', label: 'Reject changes' },
      ]);
      this.selectedId.set('approve');
      this.tone.set('success');
    } else if (recipe === 'adv-helper') {
      this.groupLabel.set('Delivery speed');
      this.groupOptions.set([
        { id: 'std', label: 'Standard shipping', helperText: 'Delivers in 3-5 business days.' },
        { id: 'exp', label: 'Express shipping', helperText: 'Delivers in 1-2 business days.' },
      ]);
      this.selectedId.set('std');
    } else if (recipe === 'adv-error') {
      this.groupLabel.set('Confirmation');
      this.groupOptions.set([
        { id: 'yes', label: 'Yes' },
        { id: 'no', label: 'No' },
      ]);
      this.invalid.set(true);
      this.status.set('error');
      this.selectedId.set('');
    } else if (recipe === 'adv-card') {
      this.variant.set('card');
      this.layout.set('horizontal');
      this.groupLabel.set('Shipping card');
      this.groupOptions.set([
        { id: 'std', label: 'Standard 3-5 days', icon: 'info' },
        { id: 'exp', label: 'Express 1-2 days', icon: 'warning' },
      ]);
      this.selectedId.set('std');
    } else if (recipe === 'adv-icon') {
      this.groupLabel.set('Platform');
      this.groupOptions.set([
        { id: 'desktop', label: 'Desktop', icon: 'user' },
        { id: 'tablet', label: 'Tablet', icon: 'calendar' },
        { id: 'mobile', label: 'Mobile', icon: 'info' },
      ]);
      this.selectedId.set('desktop');
    }
  }

  resetToDefaults(): void {
    this.selectedRecipeGroup.set('Core');
    this.recipe.set('core-default');
    this.applyRecipe('core-default');
    this.themeService.setTheme('light');
  }

  selectTab(tab: CodeTabId): void {
    this.activeTab.set(tab);
  }

  async copySnippet(): Promise<void> {
    await navigator.clipboard?.writeText(this.activeSnippet());
  }

  private buildHtml(): string {
    const effectiveGroupLabel = this.groupLabel().trim() || 'Notification preference';
    const effectiveLabel = this.label().trim() || 'Email notifications';
    if (this.usesGroup()) {
      const optionsLiteral = this.groupOptions()
        .map((opt) => {
          const iconPart = opt.icon && opt.icon !== 'none' ? `, icon: '${opt.icon}'` : '';
          const helperPart = opt.helperText ? `, helperText: '${escapeAttr(opt.helperText)}'` : '';
          return `    { id: '${opt.id}', label: '${escapeAttr(opt.label)}'${helperPart}${iconPart} }`;
        })
        .join('\n');
      return `<brightrail-radio-group
  <!-- Recipe: ${this.recipe()} -->
  name="notification-preference"
  groupLabel="${escapeAttr(effectiveGroupLabel)}"
  [options]="[
${optionsLiteral}
  ]"
  [selectedId]="'${this.selectedId()}'"
  layout="${this.layout()}"
  tone="${this.tone()}"
  variant="${this.variant()}"
  status="${this.status()}"
  labelPosition="${this.labelPosition()}"
  size="${this.size()}"
  state="${this.state()}"
  [required]="${this.required()}"
  [invalid]="${this.invalid()}"
  errorText="${escapeAttr(this.errorText())}"
/>`;
    }
    const attrs = [
      `label="${escapeAttr(effectiveLabel)}"`,
      `groupLabel="${escapeAttr(effectiveGroupLabel)}"`,
      `ariaLabel="${escapeAttr(this.ariaLabel().trim() || effectiveLabel)}"`,
      `tone="${this.tone()}"`,
      `variant="${this.variant()}"`,
      `status="${this.status()}"`,
      `labelPosition="${this.labelPosition()}"`,
      `size="${this.size()}"`,
      `state="${this.state()}"`,
      `icon="${this.optionIcon()}"`,
      `errorText="${escapeAttr(this.errorText())}"`,
      this.description().trim().length > 0 ? `description="${escapeAttr(this.description())}"` : '',
      this.required() ? '[required]="true"' : '',
      this.invalid() ? '[invalid]="true"' : '',
      this.checked() ? '[checked]="true"' : '',
    ].filter(Boolean);
    return `<brightrail-radio\n  <!-- Recipe: ${this.recipe()} -->\n  ${attrs.join('\n  ')}\n/>`;
  }

  private buildTs(): string {
    const optionsTs = this.groupOptions()
      .map((opt) => {
        const iconPart = opt.icon && opt.icon !== 'none' ? `, icon: '${opt.icon}'` : '';
        const helperPart = opt.helperText ? `, helperText: '${escapeAttr(opt.helperText)}'` : '';
        return `  { id: '${opt.id}', label: '${escapeAttr(opt.label)}'${helperPart}${iconPart} },`;
      })
      .join('\n');
    return [
      `// Recipe: ${this.recipe()}`,
      `selectedId = '${this.selectedId()}';`,
      `groupLabel = '${escapeAttr(this.groupLabel())}';`,
      `options = [`,
      optionsTs,
      `];`,
      `onSelect(id: string): void { this.selectedId = id; }`,
    ].join('\n');
  }

  private buildScss(): string {
    return `.prefs-group { display: grid; gap: 0.5rem; }`;
  }
}

function escapeAttr(value: string): string {
  return value.replace(/"/g, '&quot;');
}

