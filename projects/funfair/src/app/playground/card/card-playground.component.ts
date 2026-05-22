import { TitleCasePipe } from '@angular/common';
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
  BrightrailButtonComponent,
  BrightrailCardActionsAlign,
  BrightrailCardActionsComponent,
  BrightrailCardAppearance,
  BrightrailCardComponent,
  BrightrailCardContentComponent,
  BrightrailCardFooterComponent,
  BrightrailCardHeaderActionsDirective,
  BrightrailCardHeaderComponent,
  BrightrailCardHeaderLeadingDirective,
  BrightrailCardHeaderTitleDirective,
  BrightrailCardMediaComponent,
  BrightrailIconButtonComponent,
  BrightrailIconComponent,
} from 'brightrail';

import { PlaygroundThemeId, PlaygroundThemeService } from '../playground-theme.service';
import { createPlaygroundPreviewFx, playgroundFxHtml, playgroundFxTs } from '../shared/playground-fx.util';
import { PlaygroundFxSettingsComponent } from '../shared/playground-fx-settings.component';

/** Files in `projects/funfair/public/images`; copied to the app root as `/images/*`. */
export const CARD_PLAYGROUND_DEMO_IMAGES = {
  horizontalThumb: '/images/1.png',
  imageLeadHero: '/images/2.png',
} as const;

export type CodeTabId = 'html' | 'ts' | 'scss';

export type CardPreviewRecipe =
  | 'elevatedTeam'
  | 'basicCard'
  | 'outlinedActions'
  | 'filledSummary'
  | 'horizontalBrief'
  | 'imageLead'
  | 'statsRevenue'
  | 'dismissibleToast';

@Component({
  selector: 'app-card-playground',
  standalone: true,
  imports: [
    PlaygroundPreviewHeaderComponent,
    BrightrailCardComponent,
    BrightrailCardMediaComponent,
    BrightrailCardHeaderComponent,
    BrightrailCardHeaderTitleDirective,
    BrightrailCardHeaderLeadingDirective,
    BrightrailCardHeaderActionsDirective,
    BrightrailCardContentComponent,
    BrightrailCardActionsComponent,
    BrightrailCardFooterComponent,
    BrightrailButtonComponent,
    BrightrailIconComponent,
    BrightrailIconButtonComponent,
    TitleCasePipe, PlaygroundFxSettingsComponent],
  templateUrl: './card-playground.component.html',
  styleUrl: './card-playground.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CardPlaygroundComponent {
  readonly previewOnly = injectPlaygroundA11yPreviewMode();
  readonly a11yPreviewState = computed(() =>
    snapshotPlaygroundState({
      previewRecipe: () => this.previewRecipe(),
      appearance: () => this.appearance(),
      size: () => this.size(),
      corners: () => this.corners(),
      headerMode: () => this.headerMode(),
      mediaLeading: () => this.mediaLeading(),
      cardState: () => this.cardState(),
      actionsAlign: () => this.actionsAlign(),
      showHeaderOverflow: () => this.showHeaderOverflow(),
    }),
  );

  constructor() {
    initPlaygroundA11yPreview('card', this.previewOnly, (state) =>
      this.restoreA11yPreviewState(state),
    );
  }
  private restoreA11yPreviewState(state: unknown): void {
    if (!state || typeof state !== 'object') {
      return;
    }
    const snapshot = state as Record<string, unknown>;
    
    restorePlaygroundState(state, {
      previewRecipe: this.previewRecipe as WritableSignal<unknown>,
      appearance: this.appearance as WritableSignal<unknown>,
      size: this.size as WritableSignal<unknown>,
      corners: this.corners as WritableSignal<unknown>,
      headerMode: this.headerMode as WritableSignal<unknown>,
      mediaLeading: this.mediaLeading as WritableSignal<unknown>,
      cardState: this.cardState as WritableSignal<unknown>,
      actionsAlign: this.actionsAlign as WritableSignal<unknown>,
      showHeaderOverflow: this.showHeaderOverflow as WritableSignal<unknown>,
    });
  }

  readonly themeService = inject(PlaygroundThemeService);
  private readonly _playgroundFx = createPlaygroundPreviewFx();
  readonly previewFx = this._playgroundFx.previewFx;
  readonly resolvedFxShell = this._playgroundFx.resolvedFxShell;
  readonly demoCardImages = CARD_PLAYGROUND_DEMO_IMAGES;

  readonly recipeGroups: string[] = ['Basics', 'Layouts', 'Data displays'];

  readonly recipeOptions: { value: CardPreviewRecipe; label: string; group: string }[] = [
    { value: 'elevatedTeam', label: 'Elevated card', group: 'Basics' },
    { value: 'basicCard', label: 'Basic surface', group: 'Basics' },
    { value: 'outlinedActions', label: 'Outlined + buttons', group: 'Basics' },
    { value: 'filledSummary', label: 'Filled background', group: 'Basics' },
    { value: 'dismissibleToast', label: 'Dismissible notice', group: 'Basics' },
    { value: 'horizontalBrief', label: 'Horizontal media row', group: 'Layouts' },
    { value: 'imageLead', label: 'Image on top', group: 'Layouts' },
    { value: 'statsRevenue', label: 'Stats emphasis', group: 'Data displays' },
  ];

  readonly appearanceOptions: BrightrailCardAppearance[] = [
    'basic',
    'elevated',
    'outlined',
    'filled',
    'horizontal',
    'image',
    'stats',
  ];

  readonly sizeOptions: { value: 'sm' | 'md' | 'lg'; label: string }[] = [
    { value: 'sm', label: 'Small' },
    { value: 'md', label: 'Medium' },
    { value: 'lg', label: 'Large' },
  ];

  readonly cornersOptions: { value: 'rounded' | 'square'; label: string }[] = [
    { value: 'rounded', label: 'Rounded (default)' },
    { value: 'square', label: 'Square' },
  ];

  readonly headerModeOptions: { value: 'with-title' | 'minimal'; label: string }[] = [
    { value: 'with-title', label: 'With title' },
    { value: 'minimal', label: 'Minimal (freeform)' },
  ];

  readonly mediaOptions: { value: 'none' | 'chart'; label: string }[] = [
    { value: 'none', label: 'None' },
    { value: 'chart', label: 'Leading chart badge' },
  ];

  readonly cardStateOptions: { value: 'default' | 'disabled'; label: string }[] = [
    { value: 'default', label: 'Default' },
    { value: 'disabled', label: 'Disabled' },
  ];

  readonly actionsAlignOptions: { value: BrightrailCardActionsAlign; label: string }[] = [
    { value: 'start', label: 'Start' },
    { value: 'between', label: 'Space between' },
    { value: 'end', label: 'End' },
    { value: 'center', label: 'Center' },
  ];

  readonly themeRowOptions: { id: PlaygroundThemeId; label: string }[] = [
    { id: 'light', label: 'Material light' },
    { id: 'dark', label: 'Material dark' },
  ];

  readonly selectedRecipeGroup = signal<string>('Basics');
  readonly previewRecipe = signal<CardPreviewRecipe>('elevatedTeam');

  readonly appearance = signal<BrightrailCardAppearance>('elevated');
  readonly size = signal<'sm' | 'md' | 'lg'>('md');
  readonly corners = signal<'rounded' | 'square'>('rounded');
  readonly headerMode = signal<'with-title' | 'minimal'>('with-title');
  readonly mediaLeading = signal<'none' | 'chart'>('chart');
  readonly cardState = signal<'default' | 'disabled'>('default');
  readonly actionsAlign = signal<BrightrailCardActionsAlign>('between');
  readonly showHeaderOverflow = signal(true);

  readonly activeTab = signal<CodeTabId>('html');

  /** Recipes whose live preview uses the shared configurable header block. */
  readonly cardUsesConfigurableHeader = computed(() => {
    switch (this.previewRecipe()) {
      case 'elevatedTeam':
      case 'basicCard':
      case 'filledSummary':
        return true;
      default:
        return false;
    }
  });

  readonly cardHeaderLayoutEditable = computed(() => this.cardUsesConfigurableHeader());

  readonly cardMediaLeadingEditable = computed(() => {
    if (this.previewRecipe() === 'horizontalBrief') {
      return true;
    }
    if (!this.cardUsesConfigurableHeader()) {
      return false;
    }
    return this.headerMode() === 'with-title';
  });

  readonly cardHeaderOverflowEditable = computed(
    () => this.cardUsesConfigurableHeader() && this.headerMode() === 'with-title',
  );

  readonly cardActionsAlignEditable = computed(() => {
    if (!this.showActionsSlot()) {
      return false;
    }
    return !this.useFooterInsteadOfActions();
  });

  recipesInGroup(group: string): { value: CardPreviewRecipe; label: string }[] {
    return this.recipeOptions.filter((o) => o.group === group).map((o) => ({
      value: o.value,
      label: o.label,
    }));
  }

  readonly htmlSnippet = computed(() => playgroundFxHtml(this.buildHtml(), this.previewFx()));
  readonly tsSnippet = computed(() => this.buildTs());
  readonly scssSnippet = computed(() => this.buildScss());

  readonly activeSnippet = computed(() => {
    switch (this.activeTab()) {
      case 'ts':
        return this.tsSnippet();
      case 'scss':
        return this.scssSnippet();
      default:
        return this.htmlSnippet();
    }
  });

  selectTab(tab: CodeTabId): void {
    this.activeTab.set(tab);
  }

  onScenarioGroupChange(ev: Event): void {
    this.onRecipeGroupChange((ev.target as HTMLSelectElement).value);
  }

  onScenarioChange(ev: Event): void {
    this.onRecipeChange((ev.target as HTMLSelectElement).value as CardPreviewRecipe);
  }

  onRecipeGroupChange(group: string): void {
    this.selectedRecipeGroup.set(group);
    const choices = this.recipesInGroup(group);
    const cur = this.previewRecipe();
    if (!choices.some((c) => c.value === cur) && choices[0]) {
      this.onRecipeChange(choices[0].value);
    }
  }

  onRecipeChange(value: string): void {
    const v = value as CardPreviewRecipe;
    this.previewRecipe.set(v);
    const meta = this.recipeOptions.find((o) => o.value === v);
    if (meta) {
      this.selectedRecipeGroup.set(meta.group);
    }
    this.applyRecipeDefaults(v);
  }

  onThemeRowChange(ev: Event): void {
    this.themeService.setTheme((ev.target as HTMLSelectElement).value as PlaygroundThemeId);
  }

  onAppearanceChange(ev: Event): void {
    this.appearance.set((ev.target as HTMLSelectElement).value as BrightrailCardAppearance);
  }

  onSizeChange(ev: Event): void {
    this.size.set((ev.target as HTMLSelectElement).value as 'sm' | 'md' | 'lg');
  }

  onCornersChange(ev: Event): void {
    this.corners.set((ev.target as HTMLSelectElement).value as 'rounded' | 'square');
  }

  onHeaderModeChange(ev: Event): void {
    this.headerMode.set((ev.target as HTMLSelectElement).value as 'with-title' | 'minimal');
  }

  onMediaChange(ev: Event): void {
    this.mediaLeading.set((ev.target as HTMLSelectElement).value as 'none' | 'chart');
  }

  onCardStateChange(ev: Event): void {
    this.cardState.set((ev.target as HTMLSelectElement).value as 'default' | 'disabled');
  }

  onActionsAlignChange(ev: Event): void {
    this.actionsAlign.set((ev.target as HTMLSelectElement).value as BrightrailCardActionsAlign);
  }

  onToggleHeaderOverflow(ev: Event): void {
    this.showHeaderOverflow.set((ev.target as HTMLInputElement).checked);
  }

  resetToDefaults(): void {
    this.previewFx.set('inherit');
    this.selectedRecipeGroup.set('Basics');
    this.previewRecipe.set('elevatedTeam');
    this.applyRecipeDefaults('elevatedTeam');
    this.themeService.setTheme('light');
  }

  async copySnippet(): Promise<void> {
    await navigator.clipboard?.writeText(this.activeSnippet());
  }

  recipeBody(): string {
    switch (this.previewRecipe()) {
      case 'elevatedTeam':
        return 'Monitor weekly delivery metrics and team updates.';
      case 'statsRevenue':
        return 'Compared to the prior rolling quarter.';
      default:
        return 'Supporting copy for this card scenario.';
    }
  }

  recipeTitle(): string {
    switch (this.previewRecipe()) {
      case 'elevatedTeam':
        return 'Team performance';
      case 'statsRevenue':
        return 'North star metric';
      case 'dismissibleToast':
        return 'Heads up';
      case 'horizontalBrief':
        return 'Briefing pack';
      case 'imageLead':
        return 'Featured launch';
      default:
        return 'Card title';
    }
  }

  showActionsSlot(): boolean {
    switch (this.previewRecipe()) {
      case 'statsRevenue':
        return false;
      case 'outlinedActions':
        return true;
      default:
        return true;
    }
  }

  useFooterInsteadOfActions(): boolean {
    return this.previewRecipe() === 'outlinedActions';
  }

  private applyRecipeDefaults(r: CardPreviewRecipe): void {
    switch (r) {
      case 'elevatedTeam':
        this.appearance.set('elevated');
        this.size.set('md');
        this.corners.set('rounded');
        this.headerMode.set('with-title');
        this.mediaLeading.set('chart');
        this.cardState.set('default');
        this.actionsAlign.set('between');
        this.showHeaderOverflow.set(true);
        break;
      case 'basicCard':
        this.appearance.set('basic');
        this.size.set('md');
        this.corners.set('rounded');
        this.headerMode.set('minimal');
        this.mediaLeading.set('none');
        this.cardState.set('default');
        this.actionsAlign.set('start');
        this.showHeaderOverflow.set(false);
        break;
      case 'outlinedActions':
        this.appearance.set('outlined');
        this.size.set('md');
        this.corners.set('rounded');
        this.headerMode.set('minimal');
        this.mediaLeading.set('none');
        this.cardState.set('default');
        this.actionsAlign.set('end');
        this.showHeaderOverflow.set(false);
        break;
      case 'filledSummary':
        this.appearance.set('filled');
        this.size.set('md');
        this.corners.set('rounded');
        this.headerMode.set('minimal');
        this.mediaLeading.set('none');
        this.cardState.set('default');
        this.actionsAlign.set('start');
        this.showHeaderOverflow.set(false);
        break;
      case 'horizontalBrief':
        this.appearance.set('horizontal');
        this.size.set('md');
        this.corners.set('rounded');
        this.headerMode.set('minimal');
        this.mediaLeading.set('chart');
        this.cardState.set('default');
        this.actionsAlign.set('start');
        this.showHeaderOverflow.set(false);
        break;
      case 'imageLead':
        this.appearance.set('image');
        this.size.set('md');
        this.corners.set('rounded');
        this.headerMode.set('minimal');
        this.mediaLeading.set('none');
        this.cardState.set('default');
        this.actionsAlign.set('start');
        this.showHeaderOverflow.set(false);
        break;
      case 'statsRevenue':
        this.appearance.set('stats');
        this.size.set('md');
        this.corners.set('rounded');
        this.headerMode.set('minimal');
        this.mediaLeading.set('none');
        this.cardState.set('default');
        this.actionsAlign.set('start');
        this.showHeaderOverflow.set(false);
        break;
      case 'dismissibleToast':
        this.appearance.set('basic');
        this.size.set('sm');
        this.corners.set('rounded');
        this.headerMode.set('minimal');
        this.mediaLeading.set('none');
        this.cardState.set('default');
        this.actionsAlign.set('end');
        this.showHeaderOverflow.set(false);
        break;
      default:
        break;
    }
  }

  private buildHtml(): string {
    switch (this.previewRecipe()) {
      case 'horizontalBrief':
        return this.buildSnippetHorizontal();
      case 'imageLead':
        return this.buildSnippetImage();
      case 'statsRevenue':
        return this.buildSnippetStats();
      case 'dismissibleToast':
        return this.buildSnippetDismissible();
      case 'outlinedActions':
        return this.buildSnippetOutlined();
      default:
        return this.buildSnippetStandard();
    }
  }

  private cardOpenAttrs(): string[] {
    return [
      '<brightrail-card',
      `  appearance="${this.appearance()}"`,
      `  size="${this.size()}"`,
      `  corners="${this.corners()}"`,
      `  state="${this.cardState()}"`,
      '>',
    ];
  }

  private buildSnippetStandard(): string {
    const lines: string[] = [...this.cardOpenAttrs()];

    const titled = this.headerMode() === 'with-title';
    const lead = this.mediaLeading() === 'chart';

    lines.push(`  <brightrail-card-header`);
    lines.push(`    [withTitle]="${titled}"`);
    lines.push(`    [showLeading]="${lead}"`);
    lines.push(`  >`);

    if (titled && lead) {
      lines.push(`    <span class="br-card-header-chart-badge" brightrailCardHeaderLeading>`);
      lines.push(`      <brightrail-icon name="show_chart" />`);
      lines.push(`    </span>`);
    }

    if (titled) {
      lines.push(
        `    <span class="br-card-header-heading" brightrailCardHeaderTitle>${escapePcdata(this.recipeTitle())}</span>`,
      );
      if (this.showHeaderOverflow()) {
        lines.push(`    <brightrail-icon-button`);
        lines.push(`      ariaLabel="More options"`);
        lines.push(`      brightrailCardHeaderActions`);
        lines.push(`    >`);
        lines.push(`      <brightrail-icon name="more_vert" />`);
        lines.push(`    </brightrail-icon-button>`);
      }
    } else {
      lines.push(`    <h3>${escapePcdata(this.recipeTitle())}</h3>`);
    }

    lines.push(`  </brightrail-card-header>`);
    lines.push(`  <brightrail-card-content>`);
    lines.push(`    <p>${escapePcdata(this.recipeBody())}</p>`);
    lines.push(`  </brightrail-card-content>`);
    lines.push(`  <brightrail-card-actions align="${this.actionsAlign()}">`);
    lines.push(`    <brightrail-button variant="primary">View details</brightrail-button>`);
    lines.push(`    <span class="brightrail-text-secondary">Updated 10 min ago</span>`);
    lines.push(`  </brightrail-card-actions>`);
    lines.push('</brightrail-card>');
    return lines.join('\n');
  }

  private buildSnippetOutlined(): string {
    const lines: string[] = [...this.cardOpenAttrs()];
    lines.push(`  <brightrail-card-header>`);
    lines.push(`    <h3>${escapePcdata(this.recipeTitle())}</h3>`);
    lines.push(`  </brightrail-card-header>`);
    lines.push(`  <brightrail-card-content>`);
    lines.push(`    <p>${escapePcdata(this.recipeBody())}</p>`);
    lines.push(`  </brightrail-card-content>`);
    lines.push(`  <brightrail-card-footer>`);
    lines.push(`    <brightrail-button variant="outline">Cancel</brightrail-button>`);
    lines.push(`    <brightrail-button variant="primary">Save</brightrail-button>`);
    lines.push(`  </brightrail-card-footer>`);
    lines.push('</brightrail-card>');
    return lines.join('\n');
  }

  private buildSnippetHorizontal(): string {
    const lines: string[] = [...this.cardOpenAttrs()];
    if (this.mediaLeading() === 'chart') {
      lines.push(`  <brightrail-card-media>`);
      lines.push(
        `    <img class="card-demo-media-img" src="${CARD_PLAYGROUND_DEMO_IMAGES.horizontalThumb}" alt="" />`,
      );
      lines.push(`  </brightrail-card-media>`);
    }
    lines.push(`  <brightrail-card-header>`);
    lines.push(`    <h3>${escapePcdata(this.recipeTitle())}</h3>`);
    lines.push(`  </brightrail-card-header>`);
    lines.push(`  <brightrail-card-content>`);
    lines.push(`    <p>${escapePcdata(this.recipeBody())}</p>`);
    lines.push(`  </brightrail-card-content>`);
    lines.push(`  <brightrail-card-actions align="${this.actionsAlign()}">`);
    lines.push(`    <brightrail-button variant="link" iconRight="chevron">Open</brightrail-button>`);
    lines.push(`  </brightrail-card-actions>`);
    lines.push('</brightrail-card>');
    return lines.join('\n');
  }

  private buildSnippetImage(): string {
    const lines: string[] = [...this.cardOpenAttrs()];
    lines.push(`  <brightrail-card-media>`);
    lines.push(
      `    <img class="card-demo-image" src="${CARD_PLAYGROUND_DEMO_IMAGES.imageLeadHero}" alt="Decorative artwork" />`,
    );
    lines.push(`  </brightrail-card-media>`);
    lines.push(`  <brightrail-card-header>`);
    lines.push(`    <h3>${escapePcdata(this.recipeTitle())}</h3>`);
    lines.push(`  </brightrail-card-header>`);
    lines.push(`  <brightrail-card-content>`);
    lines.push(`    <p>${escapePcdata(this.recipeBody())}</p>`);
    lines.push(`  </brightrail-card-content>`);
    lines.push(`  <brightrail-card-actions align="${this.actionsAlign()}">`);
    lines.push(`    <brightrail-button variant="primary">View details</brightrail-button>`);
    lines.push(`  </brightrail-card-actions>`);
    lines.push('</brightrail-card>');
    return lines.join('\n');
  }

  private buildSnippetStats(): string {
    const lines: string[] = [...this.cardOpenAttrs()];
    lines.push(`  <brightrail-card-header>`);
    lines.push(`    <p class="br-card-stat-label">Total revenue</p>`);
    lines.push(`  </brightrail-card-header>`);
    lines.push(`  <brightrail-card-content>`);
    lines.push(`    <p class="br-card-stat-value">$24.8M</p>`);
    lines.push(`    <p class="br-card-stat-trend">▲ 12.5% vs last month</p>`);
    lines.push(`    <p>${escapePcdata(this.recipeBody())}</p>`);
    lines.push(`  </brightrail-card-content>`);
    lines.push('</brightrail-card>');
    return lines.join('\n');
  }

  private buildSnippetDismissible(): string {
    const lines: string[] = [
      '<brightrail-card',
      `  appearance="${this.appearance()}"`,
      `  size="${this.size()}"`,
      `  corners="${this.corners()}"`,
      `  state="${this.cardState()}"`,
      `  [dismissible]="true"`,
      `  (dismiss)="onDismiss()"`,
      '>',
    ];
    lines.push(`  <brightrail-card-header>`);
    lines.push(`    <h3>${escapePcdata(this.recipeTitle())}</h3>`);
    lines.push(`  </brightrail-card-header>`);
    lines.push(`  <brightrail-card-content>`);
    lines.push(`    <p>You can dismiss this card from the corner control.</p>`);
    lines.push(`  </brightrail-card-content>`);
    lines.push(`  <brightrail-card-actions align="${this.actionsAlign()}">`);
    lines.push(`    <brightrail-button variant="link">View activity</brightrail-button>`);
    lines.push(`  </brightrail-card-actions>`);
    lines.push('</brightrail-card>');
    return lines.join('\n');
  }

  private buildTs(): string {
    return playgroundFxTs([
      `import {`,
      `  BrightrailButtonComponent,`,
      `  BrightrailCardActionsComponent,`,
      `  BrightrailCardMediaComponent,`,
      `  BrightrailCardComponent,`,
      `  BrightrailCardContentComponent,`,
      `  BrightrailCardFooterComponent,`,
      `  BrightrailCardHeaderActionsDirective,`,
      `  BrightrailCardHeaderComponent,`,
      `  BrightrailCardHeaderLeadingDirective,`,
      `  BrightrailCardHeaderTitleDirective,`,
      `  BrightrailIconButtonComponent,`,
      `  BrightrailIconComponent,`,
      `} from 'brightrail';`,
      ``,
      `// imports: [/* symbols above */]`,
      ``,
      this.buildHtml(),
    ].join('\n'), this.previewFx(), this.themeService.fxShell());
  }

  private buildScss(): string {
    return [
      `/* Optional card tokens */`,
      `.my-surface brightrail-card {`,
      `  --br-card-primary: #0062ff;`,
      `  --br-card-radius: 0.625rem;`,
      `}`,
    ].join('\n');
  }
}

function escapePcdata(text: string): string {
  return text.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
}
