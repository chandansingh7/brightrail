import { FormsModule } from '@angular/forms';
import { ChangeDetectionStrategy, Component, computed, inject, signal, TemplateRef, viewChild } from '@angular/core';
import {
  BrightrailButtonIconComponent,
  BrightrailTooltipContentVariant,
  BrightrailTooltipDirective,
  BrightrailTooltipPlacement,
  BrightrailTooltipSize,
  BrightrailTooltipTrigger,
  BrightrailTooltipVariant,
  BrightrailTooltipWidthMode,
} from 'brightrail';

import { PlaygroundThemeId, PlaygroundThemeService } from './playground-theme.service';

type CodeTabId = 'html' | 'ts' | 'scss';

type TooltipRecipe =
  | 'info-account'
  | 'helper-question'
  | 'rich-content'
  | 'placement-top'
  | 'placement-bottom'
  | 'placement-left'
  | 'placement-right'
  | 'trigger-hover'
  | 'trigger-focus'
  | 'trigger-click'
  | 'trigger-delayed'
  | 'state-disabled'
  | 'size-sm'
  | 'size-md'
  | 'size-lg'
  | 'semantic-success'
  | 'semantic-warning'
  | 'semantic-error'
  | 'semantic-info'
  | 'futuristic-neon'
  | 'futuristic-holo'
  | 'futuristic-glass'
  | 'futuristic-cyber';

@Component({
  selector: 'app-tooltip-playground',
  standalone: true,
  imports: [FormsModule, BrightrailTooltipDirective, BrightrailButtonIconComponent],
  templateUrl: './tooltip-playground.component.html',
  styleUrl: './tooltip-playground.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TooltipPlaygroundComponent {
  readonly themeService = inject(PlaygroundThemeService);

  readonly richTpl = viewChild<TemplateRef<unknown>>('richTpl');

  readonly recipeGroups = ['Basics', 'Placement', 'Triggers & state', 'Sizing', 'Semantics', 'Futuristic'] as const;
  readonly recipeOptions: { value: TooltipRecipe; label: string; group: string }[] = [
    { value: 'info-account', label: 'Info tooltip', group: 'Basics' },
    { value: 'helper-question', label: 'Helper tooltip', group: 'Basics' },
    { value: 'rich-content', label: 'Rich content (template)', group: 'Basics' },
    { value: 'placement-top', label: 'Placement · top', group: 'Placement' },
    { value: 'placement-bottom', label: 'Placement · bottom', group: 'Placement' },
    { value: 'placement-left', label: 'Placement · left', group: 'Placement' },
    { value: 'placement-right', label: 'Placement · right', group: 'Placement' },
    { value: 'trigger-hover', label: 'Trigger · hover', group: 'Triggers & state' },
    { value: 'trigger-focus', label: 'Trigger · focus', group: 'Triggers & state' },
    { value: 'trigger-click', label: 'Trigger · click', group: 'Triggers & state' },
    { value: 'trigger-delayed', label: 'Trigger · delayed hover', group: 'Triggers & state' },
    { value: 'state-disabled', label: 'Disabled host', group: 'Triggers & state' },
    { value: 'size-sm', label: 'Size · small', group: 'Sizing' },
    { value: 'size-md', label: 'Size · medium', group: 'Sizing' },
    { value: 'size-lg', label: 'Size · large', group: 'Sizing' },
    { value: 'semantic-success', label: 'Status · success', group: 'Semantics' },
    { value: 'semantic-warning', label: 'Status · warning', group: 'Semantics' },
    { value: 'semantic-error', label: 'Status · error', group: 'Semantics' },
    { value: 'semantic-info', label: 'Status · info', group: 'Semantics' },
    { value: 'futuristic-neon', label: 'Neon glow', group: 'Futuristic' },
    { value: 'futuristic-holo', label: 'Holographic', group: 'Futuristic' },
    { value: 'futuristic-glass', label: 'Glassmorphism', group: 'Futuristic' },
    { value: 'futuristic-cyber', label: 'Cyber pulse', group: 'Futuristic' },
  ];

  readonly placementOptions: { value: BrightrailTooltipPlacement; label: string }[] = [
    { value: 'top', label: 'Top' },
    { value: 'bottom', label: 'Bottom' },
    { value: 'left', label: 'Left' },
    { value: 'right', label: 'Right' },
  ];
  readonly triggerOptions: { value: BrightrailTooltipTrigger; label: string }[] = [
    { value: 'hover', label: 'Hover' },
    { value: 'focus', label: 'Focus' },
    { value: 'click', label: 'Click' },
  ];
  readonly contentVariantOptions: { value: BrightrailTooltipContentVariant; label: string }[] = [
    { value: 'default', label: 'Default' },
    { value: 'success', label: 'Success' },
    { value: 'warning', label: 'Warning' },
    { value: 'error', label: 'Error' },
    { value: 'info', label: 'Info' },
    { value: 'neutral', label: 'Neutral' },
  ];
  readonly variantOptions: { value: BrightrailTooltipVariant; label: string }[] = [
    { value: 'default', label: 'Default' },
    { value: 'neon', label: 'Neon' },
    { value: 'holographic', label: 'Holographic' },
    { value: 'glassmorphism', label: 'Glassmorphism' },
    { value: 'cyber-pulse', label: 'Cyber pulse' },
  ];
  readonly sizeOptions: { value: BrightrailTooltipSize; label: string }[] = [
    { value: 'sm', label: 'Small' },
    { value: 'md', label: 'Medium' },
    { value: 'lg', label: 'Large' },
  ];
  readonly widthModeOptions: { value: BrightrailTooltipWidthMode; label: string }[] = [
    { value: 'auto', label: 'Auto' },
    { value: 'min-content', label: 'Min content' },
  ];
  readonly themeRowOptions: { id: PlaygroundThemeId; label: string }[] = [
    { id: 'light', label: 'Material light' },
    { id: 'dark', label: 'Material dark' },
  ];

  readonly selectedRecipeGroup = signal<string>('Basics');
  readonly previewRecipe = signal<TooltipRecipe>('info-account');

  readonly placement = signal<BrightrailTooltipPlacement>('top');
  readonly trigger = signal<BrightrailTooltipTrigger>('hover');
  readonly contentVariant = signal<BrightrailTooltipContentVariant>('default');
  readonly variant = signal<BrightrailTooltipVariant>('default');
  readonly size = signal<BrightrailTooltipSize>('md');
  readonly widthMode = signal<BrightrailTooltipWidthMode>('auto');
  readonly showArrow = signal(true);
  readonly showDelay = signal(200);
  readonly hideDelay = signal(0);
  readonly maxWidth = signal(240);
  readonly disabled = signal(false);
  readonly themeToken = signal('material-light');
  readonly useRichTemplate = signal(false);
  readonly plainText = signal('View account information and recent activity.');
  readonly triggerLabel = signal('Account details');

  readonly activeTab = signal<CodeTabId>('html');

  readonly resolvedTooltip = computed(() => {
    if (!this.useRichTemplate()) return this.plainText();
    return this.richTpl() ?? this.plainText();
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

  constructor() {
    this.applyRecipe('info-account');
  }

  recipesInGroup(group: string): { value: TooltipRecipe; label: string }[] {
    return this.recipeOptions.filter((r) => r.group === group).map((r) => ({ value: r.value, label: r.label }));
  }

  onRecipeGroupNgModelChange(v: string): void {
    this.selectedRecipeGroup.set(v);
    const first = this.recipesInGroup(v)[0]?.value;
    if (first) this.onRecipeNgModelChange(first);
  }

  onRecipeNgModelChange(v: string): void {
    const recipe = v as TooltipRecipe;
    this.previewRecipe.set(recipe);
    this.applyRecipe(recipe);
  }

  applyRecipe(recipe: TooltipRecipe): void {
    this.disabled.set(false);
    this.useRichTemplate.set(false);
    this.triggerLabel.set('Account details');
    switch (recipe) {
      case 'info-account':
        this.placement.set('top');
        this.trigger.set('hover');
        this.contentVariant.set('default');
        this.variant.set('default');
        this.size.set('md');
        this.widthMode.set('auto');
        this.showArrow.set(true);
        this.showDelay.set(200);
        this.hideDelay.set(0);
        this.maxWidth.set(240);
        this.plainText.set('View account information and recent activity.');
        break;
      case 'helper-question':
        this.placement.set('top');
        this.trigger.set('hover');
        this.plainText.set('This helps you complete the task.');
        this.triggerLabel.set('Need help?');
        break;
      case 'rich-content':
        this.useRichTemplate.set(true);
        this.placement.set('top');
        this.trigger.set('hover');
        this.maxWidth.set(280);
        this.triggerLabel.set('System update');
        break;
      case 'placement-top':
        this.placement.set('top');
        break;
      case 'placement-bottom':
        this.placement.set('bottom');
        break;
      case 'placement-left':
        this.placement.set('left');
        break;
      case 'placement-right':
        this.placement.set('right');
        break;
      case 'trigger-hover':
        this.trigger.set('hover');
        this.showDelay.set(0);
        break;
      case 'trigger-focus':
        this.trigger.set('focus');
        break;
      case 'trigger-click':
        this.trigger.set('click');
        break;
      case 'trigger-delayed':
        this.trigger.set('hover');
        this.showDelay.set(600);
        break;
      case 'state-disabled':
        this.disabled.set(true);
        break;
      case 'size-sm':
        this.size.set('sm');
        break;
      case 'size-md':
        this.size.set('md');
        break;
      case 'size-lg':
        this.size.set('lg');
        break;
      case 'semantic-success':
        this.contentVariant.set('success');
        this.plainText.set('Everything looks good!');
        break;
      case 'semantic-warning':
        this.contentVariant.set('warning');
        this.plainText.set('Be careful with this action.');
        break;
      case 'semantic-error':
        this.contentVariant.set('error');
        this.plainText.set('Action failed. Please retry.');
        break;
      case 'semantic-info':
        this.contentVariant.set('info');
        this.plainText.set("Here's some information.");
        break;
      case 'futuristic-neon':
        this.variant.set('neon');
        this.plainText.set('Neon guidance layer for dense dashboards.');
        break;
      case 'futuristic-holo':
        this.variant.set('holographic');
        this.plainText.set('Holographic readout — scan lines are decorative.');
        break;
      case 'futuristic-glass':
        this.variant.set('glassmorphism');
        this.plainText.set('Frosted glass tooltip for layered UIs.');
        break;
      case 'futuristic-cyber':
        this.variant.set('cyber-pulse');
        this.plainText.set('Pulsing frame for high-contrast dark shells.');
        break;
    }
  }

  selectTab(tab: CodeTabId): void {
    this.activeTab.set(tab);
  }

  resetToDefaults(): void {
    this.selectedRecipeGroup.set('Basics');
    this.onRecipeNgModelChange('info-account');
    this.themeService.setTheme('light');
    this.activeTab.set('html');
  }

  copySnippet(): void {
    void navigator.clipboard?.writeText(this.activeSnippet());
  }

  private buildHtml(): string {
    const lines: string[] = [];
    if (this.useRichTemplate()) {
      lines.push('<!-- Template -->');
      lines.push('<ng-template #richTpl>');
      lines.push('  <div class="my-rich-tip">');
      lines.push('    <strong>System update</strong>');
      lines.push('    <p>Version 2.4.0 is now available with performance fixes.</p>');
      lines.push('    <a href="#">Learn more →</a>');
      lines.push('  </div>');
      lines.push('</ng-template>');
      lines.push('');
    }
    lines.push('<button');
    lines.push('  type="button"');
    lines.push('  class="tp-demo-trigger"');
    if (this.useRichTemplate()) {
      lines.push('  [brightrailTooltip]="richTpl"');
    } else {
      lines.push(`  brightrailTooltip=${JSON.stringify(this.plainText())}`);
    }
    lines.push(`  brightrailTooltipPlacement="${this.placement()}"`);
    lines.push(`  brightrailTooltipTrigger="${this.trigger()}"`);
    lines.push(`  brightrailTooltipContentVariant="${this.contentVariant()}"`);
    lines.push(`  brightrailTooltipVariant="${this.variant()}"`);
    lines.push(`  brightrailTooltipSize="${this.size()}"`);
    lines.push(`  brightrailTooltipWidthMode="${this.widthMode()}"`);
    lines.push(`  [brightrailTooltipShowArrow]="${this.showArrow()}"`);
    lines.push(`  [brightrailTooltipShowDelay]="${this.showDelay()}"`);
    lines.push(`  [brightrailTooltipHideDelay]="${this.hideDelay()}"`);
    lines.push(`  [brightrailTooltipMaxWidth]="${this.maxWidth()}"`);
    if (this.disabled()) {
      lines.push('  [brightrailTooltipDisabled]="true"');
    }
    if (this.themeToken().trim()) {
      lines.push(`  brightrailTooltipTheme="${this.themeToken()}"`);
    }
    lines.push('>');
    lines.push('  <brightrail-button-icon name="info" />');
    lines.push(`  <span>${this.triggerLabel()}</span>`);
    lines.push('</button>');
    return lines.join('\n');
  }

  private buildTs(): string {
    const lines: string[] = [];
    if (this.useRichTemplate()) {
      lines.push("import { TemplateRef, viewChild } from '@angular/core';");
    }
    lines.push(
      "import {",
      '  BrightrailTooltipDirective,',
      '  BrightrailTooltipPlacement,',
      '  BrightrailTooltipTrigger,',
      '  BrightrailTooltipContentVariant,',
      '  BrightrailTooltipVariant,',
      '  BrightrailTooltipSize,',
      '  BrightrailTooltipWidthMode,',
      "} from 'brightrail';",
      '',
      '// imports: [BrightrailTooltipDirective, BrightrailButtonIconComponent]',
    );
    if (this.useRichTemplate()) {
      lines.push('', "readonly richTpl = viewChild<TemplateRef<unknown>>('richTpl');");
    }
    lines.push(
      '',
      `placement: BrightrailTooltipPlacement = '${this.placement()}';`,
      `trigger: BrightrailTooltipTrigger = '${this.trigger()}';`,
      `contentVariant: BrightrailTooltipContentVariant = '${this.contentVariant()}';`,
      `variant: BrightrailTooltipVariant = '${this.variant()}';`,
      `size: BrightrailTooltipSize = '${this.size()}';`,
      `widthMode: BrightrailTooltipWidthMode = '${this.widthMode()}';`,
    );
    return lines.join('\n');
  }

  private buildScss(): string {
    return [
      '@use "brightrail/styles/brightrail-root";',
      '',
      '.tp-demo-trigger {',
      '  display: inline-flex;',
      '  flex-direction: column;',
      '  align-items: center;',
      '  gap: 0.35rem;',
      '  padding: 0.5rem 0.75rem;',
      '  border-radius: 0.75rem;',
      '  border: 1px solid var(--br-color-border);',
      '  background: var(--br-color-surface);',
      '}',
    ].join('\n');
  }
}
