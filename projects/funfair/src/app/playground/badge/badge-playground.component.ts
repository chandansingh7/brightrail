import { FormsModule } from '@angular/forms';
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
import {
  BrightrailBadgeColor,
  BrightrailBadgeComponent,
  BrightrailBadgeSize,
  BrightrailBadgeState,
  BrightrailBadgeVariant,
  BrightrailButtonIcon,
} from 'brightrail';

import { PlaygroundThemeId, PlaygroundThemeService } from '../playground-theme.service';
import { createPlaygroundPreviewFx, playgroundFxHtml, playgroundFxTs } from '../shared/playground-fx.util';
import { PlaygroundFxSettingsComponent } from '../shared/playground-fx-settings.component';

type CodeTabId = 'html' | 'ts' | 'scss';
type BadgeRecipe =
  | 'notification'
  | 'count'
  | 'status'
  | 'dot'
  | 'text'
  | 'appearance-outlined'
  | 'size-small'
  | 'state-hover'
  | 'enterprise-nav'
  | 'enterprise-alerts'
  | 'enterprise-messages'
  | 'enterprise-priority'
  | 'workflow-approved'
  | 'workflow-pending'
  | 'workflow-rejected'
  | 'advanced-environment'
  | 'advanced-category'
  | 'advanced-grouped'
  | 'advanced-compound';
type BadgeMode = 'text' | 'count' | 'status' | 'dot' | 'notification';

@Component({
  selector: 'app-badge-playground',
  standalone: true,
  imports: [
    PlaygroundPreviewHeaderComponent,FormsModule, BrightrailBadgeComponent, PlaygroundFxSettingsComponent],
  templateUrl: './badge-playground.component.html',
  styleUrl: './badge-playground.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BadgePlaygroundComponent {
  readonly previewOnly = injectPlaygroundA11yPreviewMode();
  readonly a11yPreviewState = computed(() =>
    snapshotPlaygroundState({
      previewRecipe: () => this.previewRecipe(),
      mode: () => this.mode(),
      variant: () => this.variant(),
      color: () => this.color(),
      size: () => this.size(),
      state: () => this.state(),
      icon: () => this.icon(),
      label: () => this.label(),
      count: () => this.count(),
      context: () => this.context(),
    }),
  );

  constructor() {
    initPlaygroundA11yPreview('badge', this.previewOnly, (state) =>
      this.restoreA11yPreviewState(state),
    );
  }
  private restoreA11yPreviewState(state: unknown): void {
    if (!state || typeof state !== 'object') {
      return;
    }
    const snapshot = state as Record<string, unknown>;
    if (typeof snapshot['previewRecipe'] === 'string') {
      this.applyRecipe(snapshot['previewRecipe'] as BadgeRecipe);
      return;
    }
    restorePlaygroundState(state, {
      previewRecipe: this.previewRecipe as WritableSignal<unknown>,
      mode: this.mode as WritableSignal<unknown>,
      variant: this.variant as WritableSignal<unknown>,
      color: this.color as WritableSignal<unknown>,
      size: this.size as WritableSignal<unknown>,
      state: this.state as WritableSignal<unknown>,
      icon: this.icon as WritableSignal<unknown>,
      label: this.label as WritableSignal<unknown>,
      count: this.count as WritableSignal<unknown>,
      context: this.context as WritableSignal<unknown>,
    });
  }

  readonly themeService = inject(PlaygroundThemeService);
  private readonly _playgroundFx = createPlaygroundPreviewFx();
  readonly previewFx = this._playgroundFx.previewFx;
  readonly resolvedFxShell = this._playgroundFx.resolvedFxShell;

  readonly recipeGroups = ['Core', 'Status', 'Appearance & State', 'Enterprise', 'Advanced'] as const;
  readonly recipeOptions: { value: BadgeRecipe; label: string; group: string }[] = [
    { value: 'notification', label: 'Notification badge', group: 'Core' },
    { value: 'count', label: 'Count badge', group: 'Core' },
    { value: 'status', label: 'Status badge', group: 'Status' },
    { value: 'dot', label: 'Dot badge', group: 'Status' },
    { value: 'text', label: 'Text badge', group: 'Core' },
    { value: 'appearance-outlined', label: 'Outlined appearance', group: 'Appearance & State' },
    { value: 'size-small', label: 'Small size', group: 'Appearance & State' },
    { value: 'state-hover', label: 'Hover state', group: 'Appearance & State' },
    { value: 'enterprise-nav', label: 'Nav badge', group: 'Enterprise' },
    { value: 'enterprise-alerts', label: 'Alerts badge', group: 'Enterprise' },
    { value: 'enterprise-messages', label: 'Messages badge', group: 'Enterprise' },
    { value: 'enterprise-priority', label: 'Priority badge', group: 'Enterprise' },
    { value: 'workflow-approved', label: 'Workflow: approved', group: 'Enterprise' },
    { value: 'workflow-pending', label: 'Workflow: pending', group: 'Enterprise' },
    { value: 'workflow-rejected', label: 'Workflow: rejected', group: 'Enterprise' },
    { value: 'advanced-environment', label: 'Environment badge', group: 'Advanced' },
    { value: 'advanced-category', label: 'Category badge', group: 'Advanced' },
    { value: 'advanced-grouped', label: 'Grouped usage (+n)', group: 'Advanced' },
    { value: 'advanced-compound', label: 'Compound example', group: 'Advanced' },
  ];

  readonly variantOptions: BrightrailBadgeVariant[] = ['filled', 'outlined', 'tonal', 'soft'];
  readonly colorOptions: BrightrailBadgeColor[] = [
    'primary',
    'success',
    'warning',
    'danger',
    'critical',
    'info',
    'neutral',
    'priority',
  ];
  readonly sizeOptions: BrightrailBadgeSize[] = ['small', 'medium', 'large'];
  readonly stateOptions: BrightrailBadgeState[] = ['default', 'hover', 'active', 'disabled'];
  readonly modeOptions: { value: BadgeMode; label: string }[] = [
    { value: 'text', label: 'Text' },
    { value: 'count', label: 'Count' },
    { value: 'status', label: 'Status' },
    { value: 'dot', label: 'Dot' },
    { value: 'notification', label: 'Notification' },
  ];
  readonly iconOptions: { value: BrightrailButtonIcon; label: string }[] = [
    { value: 'none', label: 'None' },
    { value: 'check', label: 'Check' },
    { value: 'warning', label: 'Warning' },
    { value: 'info', label: 'Info' },
  ];
  readonly themeRowOptions: { id: PlaygroundThemeId; label: string }[] = [
    { id: 'light', label: 'Material light' },
    { id: 'dark', label: 'Material dark' },
  ];

  readonly selectedRecipeGroup = signal<string>('Core');
  readonly previewRecipe = signal<BadgeRecipe>('notification');
  readonly mode = signal<BadgeMode>('notification');
  readonly variant = signal<BrightrailBadgeVariant>('filled');
  readonly color = signal<BrightrailBadgeColor>('primary');
  readonly size = signal<BrightrailBadgeSize>('medium');
  readonly state = signal<BrightrailBadgeState>('default');
  readonly icon = signal<BrightrailButtonIcon>('none');
  readonly label = signal('Notifications');
  readonly count = signal('12');
  readonly context = signal('');
  readonly activeTab = signal<CodeTabId>('html');

  readonly effectiveDot = computed(() => this.mode() === 'dot');
  readonly effectiveIcon = computed(() => (this.mode() === 'dot' ? 'none' : this.icon()));
  readonly effectiveLabel = computed(() => {
    switch (this.mode()) {
      case 'count':
      case 'notification':
        return this.count().trim() || '0';
      case 'status':
      case 'text':
      case 'dot':
        return this.label().trim() || 'Badge';
    }
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

  recipesInGroup(group: string): { value: BadgeRecipe; label: string }[] {
    return this.recipeOptions.filter((r) => r.group === group).map((r) => ({ value: r.value, label: r.label }));
  }

  onRecipeGroupNgModelChange(v: string): void {
    this.selectedRecipeGroup.set(v);
    const first = this.recipesInGroup(v)[0]?.value;
    if (first) this.onRecipeNgModelChange(first);
  }

  onRecipeNgModelChange(v: string): void {
    this.previewRecipe.set(v as BadgeRecipe);
    this.applyRecipe(v as BadgeRecipe);
  }

  applyRecipe(recipe: BadgeRecipe): void {
    switch (recipe) {
      case 'notification':
        this.mode.set('notification');
        this.variant.set('filled');
        this.color.set('primary');
        this.size.set('medium');
        this.state.set('default');
        this.icon.set('none');
        this.label.set('Notifications');
        this.count.set('12');
        this.context.set('');
        break;
      case 'count':
        this.mode.set('count');
        this.variant.set('tonal');
        this.color.set('neutral');
        this.size.set('medium');
        this.state.set('default');
        this.icon.set('none');
        this.label.set('Count');
        this.count.set('47');
        this.context.set('');
        break;
      case 'status':
        this.mode.set('status');
        this.variant.set('tonal');
        this.color.set('success');
        this.size.set('medium');
        this.state.set('default');
        this.icon.set('check');
        this.label.set('Active');
        this.count.set('1');
        this.context.set('');
        break;
      case 'dot':
        this.mode.set('dot');
        this.variant.set('filled');
        this.color.set('primary');
        this.size.set('medium');
        this.state.set('default');
        this.icon.set('none');
        this.label.set('Online');
        this.count.set('1');
        this.context.set('');
        break;
      case 'text':
        this.mode.set('text');
        this.variant.set('soft');
        this.color.set('priority');
        this.size.set('medium');
        this.state.set('default');
        this.icon.set('none');
        this.label.set('New');
        this.count.set('0');
        this.context.set('');
        break;
      case 'appearance-outlined':
        this.mode.set('text');
        this.variant.set('outlined');
        this.color.set('primary');
        this.size.set('medium');
        this.state.set('default');
        this.icon.set('none');
        this.label.set('Outlined');
        this.count.set('0');
        this.context.set('');
        break;
      case 'size-small':
        this.mode.set('text');
        this.variant.set('filled');
        this.color.set('primary');
        this.size.set('small');
        this.state.set('default');
        this.icon.set('none');
        this.label.set('Small');
        this.count.set('0');
        this.context.set('');
        break;
      case 'state-hover':
        this.mode.set('text');
        this.variant.set('filled');
        this.color.set('primary');
        this.size.set('medium');
        this.state.set('hover');
        this.icon.set('none');
        this.label.set('Hover');
        this.count.set('0');
        this.context.set('');
        break;
      case 'enterprise-nav':
        this.mode.set('count');
        this.variant.set('filled');
        this.color.set('primary');
        this.size.set('small');
        this.state.set('default');
        this.icon.set('none');
        this.label.set('Dashboard');
        this.count.set('5');
        this.context.set('Dashboard');
        break;
      case 'enterprise-alerts':
        this.mode.set('count');
        this.variant.set('filled');
        this.color.set('danger');
        this.size.set('small');
        this.state.set('default');
        this.icon.set('none');
        this.label.set('Alerts');
        this.count.set('3');
        this.context.set('Alerts');
        break;
      case 'enterprise-messages':
        this.mode.set('count');
        this.variant.set('filled');
        this.color.set('primary');
        this.size.set('small');
        this.state.set('default');
        this.icon.set('none');
        this.label.set('Messages');
        this.count.set('12');
        this.context.set('Messages');
        break;
      case 'enterprise-priority':
        this.mode.set('text');
        this.variant.set('tonal');
        this.color.set('warning');
        this.size.set('small');
        this.state.set('default');
        this.icon.set('none');
        this.label.set('High');
        this.count.set('0');
        this.context.set('Priority');
        break;
      case 'workflow-approved':
        this.mode.set('status');
        this.variant.set('tonal');
        this.color.set('success');
        this.size.set('small');
        this.state.set('default');
        this.icon.set('none');
        this.label.set('Approved');
        this.count.set('0');
        this.context.set('Workflow');
        break;
      case 'workflow-pending':
        this.mode.set('status');
        this.variant.set('tonal');
        this.color.set('warning');
        this.size.set('small');
        this.state.set('default');
        this.icon.set('none');
        this.label.set('Pending');
        this.count.set('0');
        this.context.set('Workflow');
        break;
      case 'workflow-rejected':
        this.mode.set('status');
        this.variant.set('tonal');
        this.color.set('critical');
        this.size.set('small');
        this.state.set('default');
        this.icon.set('none');
        this.label.set('Rejected');
        this.count.set('0');
        this.context.set('Workflow');
        break;
      case 'advanced-environment':
        this.mode.set('text');
        this.variant.set('tonal');
        this.color.set('info');
        this.size.set('small');
        this.state.set('default');
        this.icon.set('none');
        this.label.set('Staging');
        this.count.set('0');
        this.context.set('Environment');
        break;
      case 'advanced-category':
        this.mode.set('text');
        this.variant.set('soft');
        this.color.set('primary');
        this.size.set('small');
        this.state.set('default');
        this.icon.set('none');
        this.label.set('Finance');
        this.count.set('0');
        this.context.set('Category');
        break;
      case 'advanced-grouped':
        this.mode.set('count');
        this.variant.set('soft');
        this.color.set('neutral');
        this.size.set('small');
        this.state.set('default');
        this.icon.set('none');
        this.label.set('Grouped');
        this.count.set('+4');
        this.context.set('Grouped');
        break;
      case 'advanced-compound':
        this.mode.set('text');
        this.variant.set('tonal');
        this.color.set('primary');
        this.size.set('small');
        this.state.set('default');
        this.icon.set('none');
        this.label.set('In progress');
        this.count.set('0');
        this.context.set('Order #12345');
        break;
    }
  }

  selectTab(tab: CodeTabId): void {
    this.activeTab.set(tab);
  }

  resetToDefaults(): void {
    this.previewFx.set('inherit');
    this.selectedRecipeGroup.set('Core');
    this.previewRecipe.set('notification');
    this.applyRecipe('notification');
    this.themeService.setTheme('light');
    this.activeTab.set('html');
  }

  copySnippet(): void {
    void navigator.clipboard?.writeText(this.activeSnippet());
  }

  private buildHtml(): string {
    const adjacent = this.context().trim();
    if (this.mode() === 'notification') {
      return playgroundFxHtml([
        '<div class="notification-badge-anchor">',
        '  <span class="notification-bell" aria-hidden="true">Bell</span>',
        '  <brightrail-badge',
        `    variant="${this.variant()}"`,
        `    color="${this.color()}"`,
        `    size="${this.size()}"`,
        `    state="${this.state()}"`,
        `    label="${this.effectiveLabel()}"`,
        '  />',
        ...(adjacent ? [`  <span class="badge-context">${adjacent}</span>`] : []),
        '</div>',
      ].join('\n'), this.previewFx());
    }

    const lines = [
      '<brightrail-badge',
      `  variant="${this.variant()}"`,
      `  color="${this.color()}"`,
      `  size="${this.size()}"`,
      `  state="${this.state()}"`,
      `  label="${this.effectiveLabel()}"`,
    ];
    if (this.effectiveDot()) lines.push('  [dot]="true"');
    if (this.effectiveIcon() !== 'none') lines.push(`  icon="${this.effectiveIcon()}"`);
    lines.push('/>');
    if (!adjacent) {
      return lines.join('\n');
    }
    return playgroundFxHtml([
      '<span class="badge-with-context">',
      ...lines.map((l) => `  ${l}`),
      `  <span class="badge-context">${adjacent}</span>`,
      '</span>',
    ].join('\n'), this.previewFx());
  }

  private buildTs(): string {
    return [
      "import { BrightrailBadgeComponent } from 'brightrail';",
      '',
      '// imports: [BrightrailBadgeComponent]',
      this.mode() === 'notification' ? '// add your own bell icon element as anchor' : '',
    ]
      .filter(Boolean)
      .join('\n');
  }

  private buildScss(): string {
    return [
      '.notification-badge-anchor {',
      '  position: relative;',
      '  display: inline-flex;',
      '}',
      '.notification-badge-anchor brightrail-badge {',
      '  position: absolute;',
      '  top: -0.45rem;',
      '  right: -0.5rem;',
      '}',
      '.badge-with-context {',
      '  display: inline-flex;',
      '  align-items: center;',
      '  gap: 0.35rem;',
      '}',
      '.badge-context {',
      '  color: var(--ff-muted, #5f6368);',
      '  font-size: 0.8125rem;',
      '}',
    ].join('\n');
  }
}
