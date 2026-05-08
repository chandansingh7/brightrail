import { TitleCasePipe } from '@angular/common';
import { ChangeDetectionStrategy, Component, computed, inject, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {
  BrightrailButtonComponent,
  BrightrailDrawerBackdropStyle,
  BrightrailDrawerBodyComponent,
  BrightrailDrawerComponent,
  BrightrailDrawerFooterComponent,
  BrightrailDrawerHeaderComponent,
  BrightrailDrawerMode,
  BrightrailDrawerPlacement,
  BrightrailDrawerSize,
  BrightrailDrawerSubtitleDirective,
  BrightrailDrawerTitleDirective,
} from 'brightrail';

import { PlaygroundThemeId, PlaygroundThemeService } from '../playground-theme.service';

type CodeTabId = 'html' | 'ts' | 'scss';
type FooterPreset = 'none' | 'primarySecondary' | 'singlePrimary' | 'destructive';
type HeaderMode = 'title' | 'none';
type DrawerRecipe =
  | 'form-panel'
  | 'navigation-drawer'
  | 'settings-panel'
  | 'detail-inspector'
  | 'bottom-sheet'
  | 'full-height-right'
  | 'minimal'
  | 'futuristic-ai-shell'
  | 'futuristic-glass-shell'
  | 'futuristic-gradient-shell';

@Component({
  selector: 'app-drawer-playground',
  standalone: true,
  imports: [
    FormsModule,
    TitleCasePipe,
    BrightrailDrawerComponent,
    BrightrailDrawerHeaderComponent,
    BrightrailDrawerBodyComponent,
    BrightrailDrawerFooterComponent,
    BrightrailDrawerTitleDirective,
    BrightrailDrawerSubtitleDirective,
    BrightrailButtonComponent,
  ],
  templateUrl: './drawer-playground.component.html',
  styleUrl: './drawer-playground.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DrawerPlaygroundComponent {
  readonly themeService = inject(PlaygroundThemeService);
  readonly ngModelStandalone = { standalone: true };

  readonly recipeGroups = ['Basics', 'Enterprise', 'Advanced', 'Futuristic'] as const;
  readonly recipeOptions: { value: DrawerRecipe; label: string; group: string }[] = [
    { value: 'form-panel', label: 'Form panel', group: 'Basics' },
    { value: 'navigation-drawer', label: 'Navigation drawer', group: 'Basics' },
    { value: 'settings-panel', label: 'Settings panel', group: 'Enterprise' },
    { value: 'detail-inspector', label: 'Detail inspector', group: 'Enterprise' },
    { value: 'bottom-sheet', label: 'Bottom sheet', group: 'Advanced' },
    { value: 'full-height-right', label: 'Full height (right)', group: 'Advanced' },
    { value: 'minimal', label: 'Minimal shell', group: 'Advanced' },
    { value: 'futuristic-ai-shell', label: 'AI command center', group: 'Futuristic' },
    { value: 'futuristic-glass-shell', label: 'Glassmorphism panel', group: 'Futuristic' },
    { value: 'futuristic-gradient-shell', label: 'Gradient accent panel', group: 'Futuristic' },
  ];

  readonly placementOptions: BrightrailDrawerPlacement[] = ['left', 'right', 'bottom', 'top'];
  readonly sizeOptions: BrightrailDrawerSize[] = ['narrow', 'medium', 'wide', 'xwide', 'full'];
  readonly modeOptions: BrightrailDrawerMode[] = ['modal', 'dismissible', 'persistent'];
  readonly backdropStyleOptions: BrightrailDrawerBackdropStyle[] = [
    'dim',
    'dim-strong',
    'blur',
    'glass',
    'none',
  ];
  readonly surfaceOptions = ['default', 'glass', 'gradient', 'ai'] as const;
  readonly footerOptions: FooterPreset[] = ['none', 'primarySecondary', 'singlePrimary', 'destructive'];
  readonly themeRowOptions: { id: PlaygroundThemeId; label: string }[] = [
    { id: 'light', label: 'Material light' },
    { id: 'dark', label: 'Material dark' },
  ];

  readonly selectedRecipeGroup = signal<string>('Basics');
  readonly recipe = signal<DrawerRecipe>('form-panel');
  readonly drawerOpen = signal(true);
  readonly placement = signal<BrightrailDrawerPlacement>('right');
  readonly size = signal<BrightrailDrawerSize>('medium');
  readonly mode = signal<BrightrailDrawerMode>('modal');
  readonly backdrop = signal(true);
  readonly backdropStyle = signal<BrightrailDrawerBackdropStyle>('dim');
  readonly surface = signal<(typeof this.surfaceOptions)[number]>('default');
  readonly showCloseButton = signal(true);
  readonly headerMode = signal<HeaderMode>('title');
  readonly stickyFooter = signal(true);
  readonly stickyHeader = signal(true);
  readonly footerPreset = signal<FooterPreset>('primarySecondary');
  readonly footerActionsEnabled = computed(() => this.footerPreset() !== 'none');
  readonly titleText = signal('Edit project details');
  readonly subtitleText = signal('Update project settings and save when complete.');

  readonly activeTab = signal<CodeTabId>('html');

  constructor() {
    this.applyRecipe('form-panel');
  }

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

  recipesInGroup(group: string): { value: DrawerRecipe; label: string }[] {
    return this.recipeOptions.filter((r) => r.group === group).map((r) => ({ value: r.value, label: r.label }));
  }

  onRecipeGroupNgModelChange(v: string): void {
    this.selectedRecipeGroup.set(v);
    const first = this.recipesInGroup(v)[0]?.value;
    if (first) this.onRecipeNgModelChange(first);
  }

  onRecipeNgModelChange(v: string): void {
    const recipe = v as DrawerRecipe;
    this.recipe.set(recipe);
    this.applyRecipe(recipe);
  }

  applyRecipe(recipe: DrawerRecipe): void {
    this.drawerOpen.set(true);
    this.placement.set('right');
    this.size.set('medium');
    this.mode.set('modal');
    this.backdrop.set(true);
    this.backdropStyle.set('dim');
    this.surface.set('default');
    this.showCloseButton.set(true);
    this.headerMode.set('title');
    this.stickyHeader.set(true);
    this.stickyFooter.set(true);
    this.footerPreset.set('primarySecondary');
    this.titleText.set('Edit project details');
    this.subtitleText.set('Update project settings and save when complete.');

    switch (recipe) {
      case 'navigation-drawer':
        this.placement.set('left');
        this.size.set('narrow');
        this.mode.set('dismissible');
        this.backdrop.set(false);
        this.stickyFooter.set(false);
        this.footerPreset.set('none');
        this.titleText.set('Projects');
        this.subtitleText.set('Quick links and team navigation.');
        break;
      case 'settings-panel':
        this.placement.set('right');
        this.size.set('wide');
        this.mode.set('modal');
        this.backdrop.set(true);
        this.backdropStyle.set('blur');
        this.footerPreset.set('singlePrimary');
        this.titleText.set('Workspace settings');
        this.subtitleText.set('Change alert and policy defaults.');
        break;
      case 'detail-inspector':
        this.placement.set('right');
        this.size.set('narrow');
        this.mode.set('dismissible');
        this.backdrop.set(false);
        this.stickyFooter.set(false);
        this.footerPreset.set('none');
        this.titleText.set('Detail inspector');
        this.subtitleText.set('Object metadata and activity.');
        break;
      case 'bottom-sheet':
        this.placement.set('bottom');
        this.size.set('full');
        this.mode.set('modal');
        this.stickyHeader.set(false);
        this.footerPreset.set('primarySecondary');
        this.titleText.set('Quick actions');
        this.subtitleText.set('Run fast actions without leaving context.');
        break;
      case 'full-height-right':
        this.placement.set('right');
        this.size.set('full');
        this.mode.set('modal');
        this.backdropStyle.set('blur');
        this.footerPreset.set('destructive');
        this.titleText.set('Approval workflow');
        this.subtitleText.set('Review and approve change requests.');
        break;
      case 'minimal':
        this.placement.set('right');
        this.size.set('medium');
        this.mode.set('persistent');
        this.backdrop.set(false);
        this.showCloseButton.set(false);
        this.headerMode.set('none');
        this.stickyHeader.set(false);
        this.stickyFooter.set(false);
        this.footerPreset.set('none');
        this.titleText.set('Panel');
        this.subtitleText.set('');
        break;
      case 'futuristic-ai-shell':
        this.placement.set('right');
        this.size.set('wide');
        this.mode.set('modal');
        this.backdrop.set(true);
        this.backdropStyle.set('glass');
        this.surface.set('ai');
        this.footerPreset.set('primarySecondary');
        this.titleText.set('AI command center');
        this.subtitleText.set('Route smart suggestions and automations.');
        break;
      case 'futuristic-glass-shell':
        this.placement.set('right');
        this.size.set('medium');
        this.mode.set('modal');
        this.backdrop.set(true);
        this.backdropStyle.set('glass');
        this.surface.set('glass');
        this.footerPreset.set('primarySecondary');
        this.titleText.set('Glass panel');
        this.subtitleText.set('Soft layered glass treatment with blur.');
        break;
      case 'futuristic-gradient-shell':
        this.placement.set('right');
        this.size.set('medium');
        this.mode.set('modal');
        this.backdrop.set(true);
        this.backdropStyle.set('blur');
        this.surface.set('gradient');
        this.footerPreset.set('primarySecondary');
        this.titleText.set('Gradient panel');
        this.subtitleText.set('Modern accent gradients for premium workflows.');
        break;
      case 'form-panel':
      default:
        break;
    }
  }

  onBackdropDismiss(): void {
    if (!this.backdrop()) return;
    this.drawerOpen.set(false);
  }

  onClosed(): void {
    this.drawerOpen.set(false);
  }

  reopenDrawer(): void {
    this.drawerOpen.set(true);
  }

  resetToDefaults(): void {
    this.selectedRecipeGroup.set('Basics');
    this.recipe.set('form-panel');
    this.applyRecipe('form-panel');
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
    const lines: string[] = [];
    lines.push(`<brightrail-drawer`);
    lines.push(`  [isOpen]="drawerOpen()"`);
    lines.push(`  placement="${this.placement()}"`);
    lines.push(`  size="${this.size()}"`);
    lines.push(`  mode="${this.mode()}"`);
    lines.push(`  [contain]="true"`);
    lines.push(`  [showBackdrop]="${this.backdrop()}"`);
    lines.push(`  backdropStyle="${this.backdropStyle()}"`);
    if (this.surface() !== 'default') {
      lines.push(`  surface="${this.surface()}"`);
    }
    lines.push(`  [showCloseButton]="${this.showCloseButton()}"`);
    lines.push(`  [stickyHeader]="${this.stickyHeader()}"`);
    lines.push(`  [stickyFooter]="${this.stickyFooter()}"`);
    lines.push(`  (backdropDismiss)="onBackdropDismiss()"`);
    lines.push(`  (closed)="onClosed()">`);
    if (this.headerMode() === 'title') {
      lines.push(`  <brightrail-drawer-header [showCloseButton]="${this.showCloseButton()}">`);
      lines.push(`    <div brightrailDrawerTitle>${this.titleText()}</div>`);
      if (this.subtitleText().trim().length > 0) {
        lines.push(`    <div brightrailDrawerSubtitle>${this.subtitleText()}</div>`);
      }
      lines.push(`  </brightrail-drawer-header>`);
    }
    lines.push(`  <brightrail-drawer-body>`);
    lines.push(`    <!-- drawer content -->`);
    lines.push(`  </brightrail-drawer-body>`);
    if (this.footerPreset() !== 'none') {
      lines.push(`  <brightrail-drawer-footer>`);
      if (this.footerPreset() === 'primarySecondary') {
        lines.push(`    <brightrail-button variant="outline" size="sm">Cancel</brightrail-button>`);
        lines.push(`    <brightrail-button variant="primary" size="sm">Save changes</brightrail-button>`);
      } else if (this.footerPreset() === 'singlePrimary') {
        lines.push(`    <brightrail-button variant="primary" size="sm">Apply</brightrail-button>`);
      } else {
        lines.push(`    <brightrail-button variant="outline" size="sm">Cancel</brightrail-button>`);
        lines.push(`    <brightrail-button variant="danger" size="sm">Delete</brightrail-button>`);
      }
      lines.push(`  </brightrail-drawer-footer>`);
    }
    lines.push(`</brightrail-drawer>`);
    return lines.join('\n');
  }

  bindHeaderMode(v: string): void {
    this.headerMode.set(v as HeaderMode);
  }

  bindFooterActionsEnabled(v: string): void {
    const enabled = v === 'yes';
    if (!enabled) {
      this.footerPreset.set('none');
      return;
    }
    if (this.footerPreset() === 'none') {
      this.footerPreset.set('primarySecondary');
    }
  }

  private buildTs(): string {
    return [
      `import { signal } from '@angular/core';`,
      `import {`,
      `  BrightrailDrawerComponent, BrightrailDrawerHeaderComponent, BrightrailDrawerBodyComponent,`,
      `  BrightrailDrawerFooterComponent, BrightrailDrawerTitleDirective, BrightrailDrawerSubtitleDirective,`,
      `  BrightrailButtonComponent`,
      `} from 'brightrail';`,
      ``,
      `drawerOpen = signal(true);`,
      `onBackdropDismiss(): void { this.drawerOpen.set(false); }`,
      `onClosed(): void { this.drawerOpen.set(false); }`,
    ].join('\n');
  }

  private buildScss(): string {
    return [
      `.dr-preview-inner {`,
      `  position: relative;`,
      `  min-height: 30rem;`,
      `  display: grid;`,
      `  place-items: center;`,
      `}`,
      ``,
      `.dr-preview-shell {`,
      `  position: relative;`,
      `  width: min(100%, 58rem);`,
      `  height: min(62vh, 34rem);`,
      `  border: 1px solid var(--ff-border);`,
      `  border-radius: 0.75rem;`,
      `  overflow: hidden;`,
      `  background: var(--ff-surface);`,
      `}`,
    ].join('\n');
  }
}
