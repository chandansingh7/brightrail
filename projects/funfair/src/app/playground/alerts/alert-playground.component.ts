import { TitleCasePipe } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {
  ChangeDetectionStrategy,
  Component,
  computed,
  inject,
  signal,
} from '@angular/core';
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
  BrightrailAlertAccent,
  BrightrailAlertActionsComponent,
  BrightrailAlertAppearance,
  BrightrailAlertComponent,
  BrightrailAlertMessageDirective,
  BrightrailAlertPlacement,
  BrightrailAlertStatus,
  BrightrailAlertTitleDirective,
  BrightrailButtonComponent,
  BrightrailButtonIcon,
} from 'brightrail';

import { PlaygroundThemeId, PlaygroundThemeService } from '../playground-theme.service';
import { createPlaygroundPreviewFx } from '../shared/playground-fx.util';
import { PlaygroundFxSettingsComponent } from '../shared/playground-fx-settings.component';

export type CodeTabId = 'html' | 'ts' | 'scss';

export type AlertPreviewRecipe =
  | 'inlineSuccess'
  | 'inlineInfoBanner'
  | 'inlineWarning'
  | 'inlineError'
  | 'withActionsLinks'
  | 'withActionsButtons'
  | 'toastInverse'
  | 'bottomSnack'
  | 'minimalInline'
  | 'custom'
  /** Mirrors doc/alerts catalog mock §1–§6 */
  | 'catCoreInfo'
  | 'catCoreSuccess'
  | 'catCoreWarning'
  | 'catCoreError'
  | 'catStatesDismissible'
  | 'catStatesCustomIcon'
  | 'catAppToast'
  | 'catInlineValidation'
  | 'catTopBanner'
  | 'catSectionNotice'
  | 'catEnterpriseMaint'
  | 'catEnterprisePolicy'
  | 'catEnterpriseApproval'
  | 'catEnterpriseSync';

@Component({
  selector: 'app-alert-playground',
  standalone: true,
  imports: [
    PlaygroundPreviewHeaderComponent,
    FormsModule,
    BrightrailAlertComponent,
    BrightrailAlertTitleDirective,
    BrightrailAlertMessageDirective,
    BrightrailAlertActionsComponent,
    BrightrailButtonComponent,
    TitleCasePipe, PlaygroundFxSettingsComponent],
  templateUrl: './alert-playground.component.html',
  styleUrl: './alert-playground.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AlertPlaygroundComponent {
  readonly previewOnly = injectPlaygroundA11yPreviewMode();
  readonly a11yPreviewState = computed(() =>
    snapshotPlaygroundState({
      previewRecipe: () => this.previewRecipe(),
      appearance: () => this.appearance(),
      status: () => this.status(),
      size: () => this.size(),
      corners: () => this.corners(),
      dismissible: () => this.dismissible(),
      showIcon: () => this.showIcon(),
      actionsPreset: () => this.actionsPreset(),
      fullWidth: () => this.fullWidth(),
      inverse: () => this.inverse(),
      multilineBody: () => this.multilineBody(),
      accent: () => this.accent(),
      iconPreset: () => this.iconPreset(),
      placement: () => this.placement(),
    }),
  );

  constructor() {
    initPlaygroundA11yPreview('alerts', this.previewOnly, (state) =>
      this.restoreA11yPreviewState(state),
    );
  }
  private restoreA11yPreviewState(state: unknown): void {
    if (!state || typeof state !== 'object') {
      return;
    }
    const snapshot = state as Record<string, unknown>;
    if (typeof snapshot['previewRecipe'] === 'string') {
      this.applyRecipe(snapshot['previewRecipe'] as AlertPreviewRecipe);
      return;
    }
    restorePlaygroundState(state, {
      previewRecipe: this.previewRecipe as WritableSignal<unknown>,
      appearance: this.appearance as WritableSignal<unknown>,
      status: this.status as WritableSignal<unknown>,
      size: this.size as WritableSignal<unknown>,
      corners: this.corners as WritableSignal<unknown>,
      dismissible: this.dismissible as WritableSignal<unknown>,
      showIcon: this.showIcon as WritableSignal<unknown>,
      actionsPreset: this.actionsPreset as WritableSignal<unknown>,
      fullWidth: this.fullWidth as WritableSignal<unknown>,
      inverse: this.inverse as WritableSignal<unknown>,
      multilineBody: this.multilineBody as WritableSignal<unknown>,
      accent: this.accent as WritableSignal<unknown>,
      iconPreset: this.iconPreset as WritableSignal<unknown>,
      placement: this.placement as WritableSignal<unknown>,
    });
  }

  readonly themeService = inject(PlaygroundThemeService);
  private readonly _playgroundFx = createPlaygroundPreviewFx();
  readonly previewFx = this._playgroundFx.previewFx;
  readonly resolvedFxShell = this._playgroundFx.resolvedFxShell;

  readonly recipeGroups = ['Basics', 'Patterns', 'Catalog'] as const;

  readonly recipeOptions: { value: AlertPreviewRecipe; label: string; group: string }[] = [
    { value: 'inlineSuccess', label: 'Inline alert', group: 'Basics' },
    { value: 'inlineInfoBanner', label: 'Inline info (filled)', group: 'Basics' },
    { value: 'inlineWarning', label: 'Soft warning', group: 'Basics' },
    { value: 'inlineError', label: 'Outlined error', group: 'Basics' },
    { value: 'minimalInline', label: 'Minimal (no icon)', group: 'Basics' },
    { value: 'custom', label: 'Custom (manual)', group: 'Basics' },
    { value: 'withActionsLinks', label: 'With action links', group: 'Patterns' },
    { value: 'withActionsButtons', label: 'With action buttons', group: 'Patterns' },
    { value: 'toastInverse', label: 'Toast-style (inverse)', group: 'Patterns' },
    { value: 'bottomSnack', label: 'Bottom dock (snackbar)', group: 'Patterns' },
    { value: 'custom', label: 'Custom (manual)', group: 'Patterns' },
    { value: 'catCoreInfo', label: '§1 Core · Info', group: 'Catalog' },
    { value: 'catCoreSuccess', label: '§1 Core · Success', group: 'Catalog' },
    { value: 'catCoreWarning', label: '§1 Core · Warning', group: 'Catalog' },
    { value: 'catCoreError', label: '§1 Core · Error', group: 'Catalog' },
    { value: 'catStatesDismissible', label: '§3 States · Dismissible', group: 'Catalog' },
    { value: 'catStatesCustomIcon', label: '§3 States · Custom icon', group: 'Catalog' },
    { value: 'catAppToast', label: '§5 App · Toast shell', group: 'Catalog' },
    { value: 'catInlineValidation', label: '§5 App · Inline validation', group: 'Catalog' },
    { value: 'catTopBanner', label: '§5 App · Top banner', group: 'Catalog' },
    { value: 'catSectionNotice', label: '§5 App · Section notice', group: 'Catalog' },
    { value: 'catEnterpriseMaint', label: '§6 Enterprise · Maintenance', group: 'Catalog' },
    { value: 'catEnterprisePolicy', label: '§6 Enterprise · Policy', group: 'Catalog' },
    { value: 'catEnterpriseApproval', label: '§6 Enterprise · Approval', group: 'Catalog' },
    { value: 'catEnterpriseSync', label: '§6 Enterprise · Sync failed', group: 'Catalog' },
    { value: 'custom', label: 'Custom (manual)', group: 'Catalog' },
  ];

  readonly appearanceOptions: BrightrailAlertAppearance[] = ['filled', 'soft', 'outlined', 'tonal'];

  readonly statusOptions: { value: BrightrailAlertStatus; label: string }[] = [
    { value: 'info', label: 'Info' },
    { value: 'success', label: 'Success' },
    { value: 'warning', label: 'Warning' },
    { value: 'error', label: 'Error' },
  ];

  readonly sizeOptions: { value: 'sm' | 'md' | 'lg'; label: string }[] = [
    { value: 'sm', label: 'Compact' },
    { value: 'md', label: 'Medium' },
    { value: 'lg', label: 'Large' },
  ];

  readonly cornersOptions: { value: 'rounded' | 'square'; label: string }[] = [
    { value: 'rounded', label: 'Rounded (default)' },
    { value: 'square', label: 'Square' },
  ];

  readonly actionsPresetOptions: { value: 'none' | 'links' | 'buttons'; label: string }[] = [
    { value: 'none', label: 'None' },
    { value: 'links', label: 'Text links' },
    { value: 'buttons', label: 'Buttons' },
  ];

  readonly accentOptions: { value: BrightrailAlertAccent; label: string }[] = [
    { value: 'default', label: 'Default' },
    { value: 'approval', label: 'Approval (purple)' },
  ];

  readonly placementOptions: { value: BrightrailAlertPlacement; label: string }[] = [
    { value: 'inline', label: 'Inline (default)' },
    { value: 'bottom', label: 'Bottom dock' },
  ];

  readonly iconPresetOptions: { value: BrightrailButtonIcon | 'none'; label: string }[] = [
    { value: 'none', label: 'Default (from status)' },
    { value: 'heart', label: 'Heart override' },
  ];

  readonly themeRowOptions: { id: PlaygroundThemeId; label: string }[] = [
    { id: 'light', label: 'Material light' },
    { id: 'dark', label: 'Material dark' },
  ];

  readonly previewRecipe = signal<AlertPreviewRecipe>('inlineSuccess');
  readonly selectedRecipeGroup = signal<string>('Basics');

  readonly appearance = signal<BrightrailAlertAppearance>('soft');
  readonly status = signal<BrightrailAlertStatus>('success');
  readonly size = signal<'sm' | 'md' | 'lg'>('md');
  readonly corners = signal<'rounded' | 'square'>('rounded');
  readonly dismissible = signal(true);
  readonly showIcon = signal(true);
  readonly actionsPreset = signal<'none' | 'links' | 'buttons'>('none');
  readonly fullWidth = signal(false);
  readonly inverse = signal(false);
  readonly multilineBody = signal(false);
  readonly accent = signal<BrightrailAlertAccent>('default');
  readonly iconPreset = signal<BrightrailButtonIcon | 'none'>('none');
  readonly placement = signal<BrightrailAlertPlacement>('inline');

  readonly activeTab = signal<CodeTabId>('html');

  readonly alertIconBinding = computed((): BrightrailButtonIcon | undefined => {
    const p = this.iconPreset();
    return p === 'none' ? undefined : p;
  });

  readonly liveTitle = computed(() => {
    switch (this.status()) {
      case 'success':
        return 'Changes saved';
      case 'info':
        return 'Heads up';
      case 'warning':
        return 'Review needed';
      case 'error':
        return 'Something went wrong';
    }
  });

  readonly liveMessage = computed(() => {
    if (this.multilineBody()) {
      return 'This message spans multiple lines so you can preview wrapping inside the alert shell. Adjust width using the preview panel scrollbar.';
    }
    switch (this.status()) {
      case 'success':
        return 'Your settings have been updated successfully.';
      case 'info':
        return 'New analytics filters apply to reports opened after saving.';
      case 'warning':
        return 'Billing details differ from your last invoice.';
      case 'error':
        return 'We could not sync your workspace. Retry or contact support.';
    }
  });

  recipesInGroup(group: string): { value: AlertPreviewRecipe; label: string; group: string }[] {
    return this.recipeOptions.filter((r) => r.group === group);
  }

  onRecipeGroupNgModelChange(v: string): void {
    this.selectedRecipeGroup.set(v);
    const first = this.recipesInGroup(v)[0]?.value;
    if (first != null) {
      this.previewRecipe.set(first);
      if (first !== 'custom') {
        this.applyRecipe(first);
      }
    }
  }

  onRecipeNgModelChange(v: string): void {
    const recipe = v as AlertPreviewRecipe;
    this.previewRecipe.set(recipe);
    if (recipe !== 'custom') {
      this.applyRecipe(recipe);
    }
  }

  applyRecipe(recipe: AlertPreviewRecipe): void {
    this.placement.set('inline');
    switch (recipe) {
      case 'inlineSuccess':
        this.appearance.set('soft');
        this.status.set('success');
        this.size.set('md');
        this.corners.set('rounded');
        this.dismissible.set(true);
        this.showIcon.set(true);
        this.actionsPreset.set('none');
        this.fullWidth.set(false);
        this.inverse.set(false);
        this.multilineBody.set(false);
        this.accent.set('default');
        this.iconPreset.set('none');
        break;
      case 'inlineInfoBanner':
        this.appearance.set('filled');
        this.status.set('info');
        this.size.set('md');
        this.corners.set('rounded');
        this.dismissible.set(false);
        this.showIcon.set(true);
        this.actionsPreset.set('links');
        this.fullWidth.set(true);
        this.inverse.set(false);
        this.multilineBody.set(false);
        this.accent.set('default');
        this.iconPreset.set('none');
        break;
      case 'inlineWarning':
        this.appearance.set('soft');
        this.status.set('warning');
        this.size.set('md');
        this.corners.set('rounded');
        this.dismissible.set(false);
        this.showIcon.set(true);
        this.actionsPreset.set('none');
        this.fullWidth.set(false);
        this.inverse.set(false);
        this.multilineBody.set(false);
        this.accent.set('default');
        this.iconPreset.set('none');
        break;
      case 'inlineError':
        this.appearance.set('outlined');
        this.status.set('error');
        this.size.set('md');
        this.corners.set('rounded');
        this.dismissible.set(true);
        this.showIcon.set(true);
        this.actionsPreset.set('none');
        this.fullWidth.set(false);
        this.inverse.set(false);
        this.multilineBody.set(false);
        this.accent.set('default');
        this.iconPreset.set('none');
        break;
      case 'minimalInline':
        this.appearance.set('tonal');
        this.status.set('info');
        this.size.set('sm');
        this.corners.set('rounded');
        this.dismissible.set(false);
        this.showIcon.set(false);
        this.actionsPreset.set('none');
        this.fullWidth.set(false);
        this.inverse.set(false);
        this.multilineBody.set(false);
        this.accent.set('default');
        this.iconPreset.set('none');
        break;
      case 'withActionsLinks':
        this.appearance.set('soft');
        this.status.set('info');
        this.size.set('md');
        this.corners.set('rounded');
        this.dismissible.set(true);
        this.showIcon.set(true);
        this.actionsPreset.set('links');
        this.fullWidth.set(false);
        this.inverse.set(false);
        this.multilineBody.set(false);
        this.accent.set('default');
        this.iconPreset.set('none');
        break;
      case 'withActionsButtons':
        this.appearance.set('outlined');
        this.status.set('error');
        this.size.set('md');
        this.corners.set('rounded');
        this.dismissible.set(false);
        this.showIcon.set(true);
        this.actionsPreset.set('buttons');
        this.fullWidth.set(false);
        this.inverse.set(false);
        this.multilineBody.set(false);
        this.accent.set('default');
        this.iconPreset.set('none');
        break;
      case 'toastInverse':
        this.appearance.set('filled');
        this.status.set('info');
        this.size.set('sm');
        this.corners.set('rounded');
        this.dismissible.set(true);
        this.showIcon.set(true);
        this.actionsPreset.set('none');
        this.fullWidth.set(false);
        this.inverse.set(true);
        this.multilineBody.set(false);
        this.accent.set('default');
        this.iconPreset.set('none');
        break;
      case 'bottomSnack':
        this.appearance.set('filled');
        this.status.set('success');
        this.size.set('sm');
        this.corners.set('rounded');
        this.dismissible.set(true);
        this.showIcon.set(true);
        this.actionsPreset.set('none');
        this.fullWidth.set(false);
        this.inverse.set(true);
        this.multilineBody.set(false);
        this.accent.set('default');
        this.iconPreset.set('none');
        this.placement.set('bottom');
        break;
      case 'catCoreInfo':
      case 'catCoreSuccess':
      case 'catCoreWarning':
      case 'catCoreError': {
        const st: BrightrailAlertStatus =
          recipe === 'catCoreInfo'
            ? 'info'
            : recipe === 'catCoreSuccess'
              ? 'success'
              : recipe === 'catCoreWarning'
                ? 'warning'
                : 'error';
        this.appearance.set('soft');
        this.status.set(st);
        this.size.set('md');
        this.corners.set('rounded');
        this.dismissible.set(false);
        this.showIcon.set(true);
        this.actionsPreset.set('none');
        this.fullWidth.set(false);
        this.inverse.set(false);
        this.multilineBody.set(false);
        this.accent.set('default');
        this.iconPreset.set('none');
        break;
      }
      case 'catStatesDismissible':
        this.appearance.set('soft');
        this.status.set('success');
        this.size.set('md');
        this.corners.set('rounded');
        this.dismissible.set(true);
        this.showIcon.set(true);
        this.actionsPreset.set('none');
        this.fullWidth.set(false);
        this.inverse.set(false);
        this.multilineBody.set(false);
        this.accent.set('default');
        this.iconPreset.set('none');
        break;
      case 'catStatesCustomIcon':
        this.appearance.set('soft');
        this.status.set('info');
        this.size.set('md');
        this.corners.set('rounded');
        this.dismissible.set(false);
        this.showIcon.set(true);
        this.actionsPreset.set('none');
        this.fullWidth.set(false);
        this.inverse.set(false);
        this.multilineBody.set(false);
        this.accent.set('default');
        this.iconPreset.set('heart');
        break;
      case 'catAppToast':
        this.appearance.set('filled');
        this.status.set('info');
        this.size.set('sm');
        this.corners.set('rounded');
        this.dismissible.set(true);
        this.showIcon.set(true);
        this.actionsPreset.set('none');
        this.fullWidth.set(false);
        this.inverse.set(true);
        this.multilineBody.set(false);
        this.accent.set('default');
        this.iconPreset.set('none');
        break;
      case 'catInlineValidation':
        this.appearance.set('outlined');
        this.status.set('error');
        this.size.set('sm');
        this.corners.set('rounded');
        this.dismissible.set(false);
        this.showIcon.set(true);
        this.actionsPreset.set('none');
        this.fullWidth.set(false);
        this.inverse.set(false);
        this.multilineBody.set(false);
        this.accent.set('default');
        this.iconPreset.set('none');
        break;
      case 'catTopBanner':
        this.appearance.set('filled');
        this.status.set('info');
        this.size.set('md');
        this.corners.set('rounded');
        this.dismissible.set(true);
        this.showIcon.set(true);
        this.actionsPreset.set('links');
        this.fullWidth.set(true);
        this.inverse.set(false);
        this.multilineBody.set(false);
        this.accent.set('default');
        this.iconPreset.set('none');
        break;
      case 'catSectionNotice':
        this.appearance.set('tonal');
        this.status.set('info');
        this.size.set('sm');
        this.corners.set('rounded');
        this.dismissible.set(false);
        this.showIcon.set(true);
        this.actionsPreset.set('none');
        this.fullWidth.set(false);
        this.inverse.set(false);
        this.multilineBody.set(false);
        this.accent.set('default');
        this.iconPreset.set('none');
        break;
      case 'catEnterpriseMaint':
        this.appearance.set('soft');
        this.status.set('warning');
        this.size.set('md');
        this.corners.set('rounded');
        this.dismissible.set(true);
        this.showIcon.set(true);
        this.actionsPreset.set('none');
        this.fullWidth.set(false);
        this.inverse.set(false);
        this.multilineBody.set(false);
        this.accent.set('default');
        this.iconPreset.set('none');
        break;
      case 'catEnterprisePolicy':
        this.appearance.set('tonal');
        this.status.set('info');
        this.size.set('md');
        this.corners.set('rounded');
        this.dismissible.set(false);
        this.showIcon.set(true);
        this.actionsPreset.set('none');
        this.fullWidth.set(false);
        this.inverse.set(false);
        this.multilineBody.set(false);
        this.accent.set('default');
        this.iconPreset.set('none');
        break;
      case 'catEnterpriseApproval':
        this.appearance.set('filled');
        this.status.set('info');
        this.size.set('md');
        this.corners.set('rounded');
        this.dismissible.set(false);
        this.showIcon.set(true);
        this.actionsPreset.set('buttons');
        this.fullWidth.set(false);
        this.inverse.set(false);
        this.multilineBody.set(false);
        this.accent.set('approval');
        this.iconPreset.set('none');
        break;
      case 'catEnterpriseSync':
        this.appearance.set('soft');
        this.status.set('error');
        this.size.set('md');
        this.corners.set('rounded');
        this.dismissible.set(false);
        this.showIcon.set(true);
        this.actionsPreset.set('buttons');
        this.fullWidth.set(false);
        this.inverse.set(false);
        this.multilineBody.set(false);
        this.accent.set('default');
        this.iconPreset.set('none');
        break;
      case 'custom':
        break;
      default:
        break;
    }
  }

  resetToDefaults(): void {
    this.previewFx.set('inherit');
    this.selectedRecipeGroup.set('Basics');
    this.previewRecipe.set('inlineSuccess');
    this.applyRecipe('inlineSuccess');
    this.themeService.setTheme('light');
    this.activeTab.set('html');
  }

  bindTheme(id: string): void {
    this.themeService.setTheme(id as PlaygroundThemeId);
  }

  bindAppearance(v: string): void {
    this.appearance.set(v as BrightrailAlertAppearance);
    this.markManualRecipe();
  }

  bindStatus(v: string): void {
    this.status.set(v as BrightrailAlertStatus);
    this.markManualRecipe();
  }

  bindSize(v: string): void {
    this.size.set(v as 'sm' | 'md' | 'lg');
    this.markManualRecipe();
  }

  bindCorners(v: string): void {
    this.corners.set(v as 'rounded' | 'square');
    this.markManualRecipe();
  }

  bindDismiss(v: string): void {
    this.dismissible.set(v === 'yes');
    this.markManualRecipe();
  }

  bindShowIcon(v: string): void {
    this.showIcon.set(v === 'yes');
    this.markManualRecipe();
  }

  bindActionsPreset(v: string): void {
    this.actionsPreset.set(v as 'none' | 'links' | 'buttons');
    this.markManualRecipe();
  }

  bindMultiline(v: string): void {
    this.multilineBody.set(v === 'yes');
    this.markManualRecipe();
  }

  bindFullWidth(v: string): void {
    this.fullWidth.set(v === 'yes');
    this.markManualRecipe();
  }

  bindInverse(v: string): void {
    this.inverse.set(v === 'yes');
    this.markManualRecipe();
  }

  bindAccent(v: string): void {
    this.accent.set(v as BrightrailAlertAccent);
    this.markManualRecipe();
  }

  bindPlacement(v: string): void {
    this.placement.set(v as BrightrailAlertPlacement);
    this.markManualRecipe();
  }

  bindIconPreset(v: string): void {
    this.iconPreset.set(v === 'none' ? 'none' : (v as BrightrailButtonIcon));
    this.markManualRecipe();
  }

  private markManualRecipe(): void {
    this.previewRecipe.set('custom');
  }

  selectTab(tab: CodeTabId): void {
    this.activeTab.set(tab);
  }

  readonly activeSnippet = computed(() => {
    switch (this.activeTab()) {
      case 'html':
        return this.buildHtml();
      case 'ts':
        return this.buildTs();
      case 'scss':
        return this.buildScss();
    }
  });

  copySnippet(): void {
    void navigator.clipboard?.writeText(this.activeSnippet());
  }

  private buildHtml(): string {
    const lines: string[] = ['<brightrail-alert'];
    lines.push(`  appearance="${this.appearance()}"`);
    lines.push(`  status="${this.status()}"`);
    lines.push(`  size="${this.size()}"`);
    lines.push(`  corners="${this.corners()}"`);
    lines.push(`  [dismissible]="${this.dismissible()}"`);
    lines.push(`  [showIcon]="${this.showIcon()}"`);
    if (this.fullWidth()) lines.push(`  [fullWidth]="true"`);
    if (this.inverse()) lines.push(`  [inverse]="true"`);
    if (this.placement() !== 'inline') lines.push(`  placement="${this.placement()}"`);
    if (this.accent() !== 'default') lines.push(`  accent="${this.accent()}"`);
    const icon = this.alertIconBinding();
    if (icon != null) lines.push(`  icon="${icon}"`);
    lines.push(`  (dismiss)="onDismiss()">`);
    lines.push(`  <div brightrailAlertTitle>${escapePcdata(this.liveTitle())}</div>`);
    lines.push(`  <div brightrailAlertMessage>${escapePcdata(this.liveMessage())}</div>`);
    if (this.actionsPreset() === 'links') {
      lines.push(`  <brightrail-alert-actions>`);
      lines.push(`    <button type="button" class="your-link-button">Learn more</button>`);
      lines.push(`    <button type="button" class="your-link-button">Dismiss</button>`);
      lines.push(`  </brightrail-alert-actions>`);
    } else if (this.actionsPreset() === 'buttons') {
      lines.push(`  <brightrail-alert-actions>`);
      lines.push(`    <brightrail-button variant="primary" size="sm">Retry</brightrail-button>`);
      lines.push(`    <brightrail-button variant="outline" size="sm">Cancel</brightrail-button>`);
      lines.push(`  </brightrail-alert-actions>`);
    }
    lines.push(`</brightrail-alert>`);
    return lines.join('\n');
  }

  private buildTs(): string {
    return [
      `import {`,
      `  BrightrailAlertActionsComponent,`,
      `  BrightrailAlertComponent,`,
      `  BrightrailAlertMessageDirective,`,
      `  BrightrailAlertTitleDirective,`,
      `  BrightrailButtonComponent,`,
      `} from 'brightrail';`,
      ``,
      `// Recipe: "${this.previewRecipe()}" — wire dismiss to clear local state or call your API.`,
      `onDismiss(): void {`,
      `  console.info('Alert dismissed');`,
      `}`,
    ].join('\n');
  }

  private buildScss(): string {
    return [
      `/* Optional: wrap the live preview so position:fixed docks inside the panel */`,
      `.preview-dock-scope {`,
      `  transform: translateZ(0);`,
      `  position: relative;`,
      `  min-height: 14rem;`,
      `}`,
      ``,
      `brightrail-alert {`,
      `  display: block;`,
      `  max-width: 42rem; /* widen or drop when using fullWidth banners */`,
      `}`,
      ``,
      `.your-link-button {`,
      `  border: none;`,
      `  background: none;`,
      `  padding: 0;`,
      `  font: inherit;`,
      `  font-weight: 600;`,
      `  color: var(--ff-brand, #1e6bdd);`,
      `  cursor: pointer;`,
      `  text-decoration: underline;`,
      `}`,
    ].join('\n');
  }
}

function escapePcdata(text: string): string {
  return text.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
}
