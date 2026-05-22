import { TitleCasePipe } from '@angular/common';
import { ChangeDetectionStrategy, Component, computed, inject, signal } from '@angular/core';
import {
  BrightrailButtonBoundaryStyle,
  BrightrailButtonComponent,
  BrightrailButtonIcon,
  BrightrailButtonShape,
  BrightrailButtonSize,
  BrightrailButtonVariant,
} from 'brightrail';

import { PlaygroundPreviewHeaderComponent } from '../shared/playground-preview-header.component';
import {
  injectPlaygroundA11yPreviewMode,
  initPlaygroundA11yPreview,
} from '../shared/playground-a11y-preview.utils';
import { PlaygroundThemeId, PlaygroundThemeService } from '../playground-theme.service';
import { createPlaygroundPreviewFx, playgroundFxHtml, playgroundFxTs } from '../shared/playground-fx.util';
import { PlaygroundFxSettingsComponent } from '../shared/playground-fx-settings.component';

export type CodeTabId = 'html' | 'ts' | 'scss';
export type IconSide = 'left' | 'right' | 'both';
/** Playground state: replaces separate disabled toggle + visual state. */
export type PlaygroundButtonState = 'default' | 'active' | 'disabled';

interface ButtonA11yPreviewState {
  variant: BrightrailButtonVariant;
  size: BrightrailButtonSize;
  shape: BrightrailButtonShape;
  boundaryStyle: BrightrailButtonBoundaryStyle;
  buttonState: PlaygroundButtonState;
  loading: boolean;
  fullWidth: boolean;
  dropdownIndicator: boolean;
  label: string;
  iconSide: IconSide;
  iconKind: BrightrailButtonIcon;
}

@Component({
  selector: 'app-button-playground',
  standalone: true,
  imports: [BrightrailButtonComponent, TitleCasePipe, PlaygroundPreviewHeaderComponent, PlaygroundFxSettingsComponent],
  templateUrl: './button-playground.component.html',
  styleUrl: './button-playground.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ButtonPlaygroundComponent {
  readonly themeService = inject(PlaygroundThemeService);
  private readonly _playgroundFx = createPlaygroundPreviewFx();
  readonly previewFx = this._playgroundFx.previewFx;
  readonly resolvedFxShell = this._playgroundFx.resolvedFxShell;
  readonly previewOnly = injectPlaygroundA11yPreviewMode();

  readonly a11yPreviewState = computed<ButtonA11yPreviewState>(() => ({
    variant: this.variant(),
    size: this.size(),
    shape: this.shape(),
    boundaryStyle: this.boundaryStyle(),
    buttonState: this.buttonState(),
    loading: this.loading(),
    fullWidth: this.fullWidth(),
    dropdownIndicator: this.dropdownIndicator(),
    label: this.label(),
    iconSide: this.iconSide(),
    iconKind: this.iconKind(),
  }));

  constructor() {
    initPlaygroundA11yPreview('button', this.previewOnly, (state) => this.restoreA11yPreviewState(state));
  }

  private restoreA11yPreviewState(state: unknown): void {
    if (!state || typeof state !== 'object') {
      return;
    }
    const s = state as Partial<ButtonA11yPreviewState>;
    if (s.variant) this.variant.set(s.variant);
    if (s.size) this.size.set(s.size);
    if (s.shape) this.shape.set(s.shape);
    if (s.boundaryStyle) this.boundaryStyle.set(s.boundaryStyle);
    if (s.buttonState) this.buttonState.set(s.buttonState);
    if (typeof s.loading === 'boolean') this.loading.set(s.loading);
    if (typeof s.fullWidth === 'boolean') this.fullWidth.set(s.fullWidth);
    if (typeof s.dropdownIndicator === 'boolean') this.dropdownIndicator.set(s.dropdownIndicator);
    if (typeof s.label === 'string') this.label.set(s.label);
    if (s.iconSide) this.iconSide.set(s.iconSide);
    if (s.iconKind) this.iconKind.set(s.iconKind);
  }

  readonly variants: BrightrailButtonVariant[] = [
    'primary',
    'secondary',
    'tertiary',
    'outline',
    'ghost',
    'link',
    'success',
    'warning',
    'danger',
    'info',
    'approve',
    'reject',
  ];
  readonly sizeOptions: { value: BrightrailButtonSize; label: string }[] = [
    { value: 'xs', label: 'Extra small' },
    { value: 'sm', label: 'Small' },
    { value: 'md', label: 'Medium' },
    { value: 'lg', label: 'Large' },
    { value: 'xl', label: 'Extra large' },
  ];
  readonly shapeOptions: { value: BrightrailButtonShape; label: string }[] = [
    { value: 'default', label: 'Default' },
    { value: 'pill', label: 'Pill' },
    { value: 'icon', label: 'Icon (square)' },
    { value: 'circle', label: 'Circle' },
  ];
  readonly boundaryOptions: { value: BrightrailButtonBoundaryStyle; label: string }[] = [
    { value: 'none', label: 'None' },
    { value: 'dotted', label: 'Dotted outline' },
  ];
  readonly stateOptions: { value: PlaygroundButtonState; label: string }[] = [
    { value: 'default', label: 'Default' },
    { value: 'active', label: 'Active' },
    { value: 'disabled', label: 'Disabled' },
  ];
  readonly themeRowOptions: { id: PlaygroundThemeId; label: string }[] = [
    { id: 'light', label: 'Material light' },
    { id: 'dark', label: 'Material dark' },
  ];
  readonly iconChoices: BrightrailButtonIcon[] = [
    'none',
    'plus',
    'chevron',
    'chevron-down',
    'check',
    'warning',
    'trash',
    'info',
    'heart',
    'download',
    'upload',
    'user',
    'filter',
    'export',
    'edit',
    'copy',
    'more',
    'search',
    'calendar',
    'close',
    'eye',
    'eye-off',
    'error',
    'help',
    'gear',
    'bell',
    'headset',
    'list',
    'chevron-right',
    'loader',
  ];
  readonly iconLabels: Record<BrightrailButtonIcon, string> = {
    none: 'None',
    plus: 'Plus',
    chevron: 'Chevron',
    'chevron-down': 'Chevron down',
    check: 'Check',
    warning: 'Warning',
    trash: 'Trash',
    info: 'Info',
    heart: 'Heart',
    download: 'Download',
    upload: 'Upload',
    user: 'User',
    filter: 'Filter',
    export: 'Export',
    edit: 'Edit',
    copy: 'Copy',
    more: 'More',
    search: 'Search',
    calendar: 'Calendar',
    close: 'Close',
    eye: 'Eye',
    'eye-off': 'Eye off',
    error: 'Error',
    help: 'Help',
    gear: 'Gear',
    bell: 'Bell',
    headset: 'Headset',
    list: 'List',
    'chevron-right': 'Chevron right',
    loader: 'Loader',
  };
  readonly iconSideOptions: { value: IconSide; label: string }[] = [
    { value: 'left', label: 'Left' },
    { value: 'right', label: 'Right' },
    { value: 'both', label: 'Both sides' },
  ];

  readonly variant = signal<BrightrailButtonVariant>('primary');
  readonly size = signal<BrightrailButtonSize>('md');
  readonly shape = signal<BrightrailButtonShape>('default');
  readonly boundaryStyle = signal<BrightrailButtonBoundaryStyle>('none');
  readonly buttonState = signal<PlaygroundButtonState>('default');
  readonly loading = signal(false);
  readonly fullWidth = signal(false);
  readonly dropdownIndicator = signal(false);
  readonly label = signal('Button');
  readonly iconSide = signal<IconSide>('left');
  readonly iconKind = signal<BrightrailButtonIcon>('none');

  readonly buttonBoundaryEditable = computed(() => this.variant() !== 'link');
  readonly buttonIconSideEditable = computed(() => this.iconKind() !== 'none');

  readonly leftIconForButton = computed(() => effectiveLeftIcon(this.iconKind(), this.iconSide()));
  readonly rightIconForButton = computed(() => effectiveRightIcon(this.iconKind(), this.iconSide()));

  readonly visualStateForButton = computed(() =>
    this.buttonState() === 'active' ? ('active' as const) : ('default' as const),
  );
  readonly disabledForButton = computed(() => this.buttonState() === 'disabled');

  readonly activeTab = signal<CodeTabId>('html');

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

  onThemeRowChange(ev: Event): void {
    const v = (ev.target as HTMLSelectElement).value as PlaygroundThemeId;
    this.themeService.setTheme(v);
  }

  onVariantChange(ev: Event): void {
    this.variant.set((ev.target as HTMLSelectElement).value as BrightrailButtonVariant);
  }

  onSizeChange(ev: Event): void {
    this.size.set((ev.target as HTMLSelectElement).value as BrightrailButtonSize);
  }

  onShapeChange(ev: Event): void {
    this.shape.set((ev.target as HTMLSelectElement).value as BrightrailButtonShape);
  }

  onBoundaryChange(ev: Event): void {
    this.boundaryStyle.set(
      (ev.target as HTMLSelectElement).value as BrightrailButtonBoundaryStyle,
    );
  }

  resetToDefaults(): void {
    this.previewFx.set('inherit');
    this.variant.set('primary');
    this.size.set('md');
    this.shape.set('default');
    this.boundaryStyle.set('none');
    this.buttonState.set('default');
    this.loading.set(false);
    this.fullWidth.set(false);
    this.dropdownIndicator.set(false);
    this.label.set('Button');
    this.iconSide.set('left');
    this.iconKind.set('none');
    this.themeService.setTheme('light');
  }

  onStateChange(ev: Event): void {
    this.buttonState.set((ev.target as HTMLSelectElement).value as PlaygroundButtonState);
  }

  onLabelInput(ev: Event): void {
    this.label.set((ev.target as HTMLInputElement).value);
  }

  onIconSideChange(ev: Event): void {
    this.iconSide.set((ev.target as HTMLSelectElement).value as IconSide);
  }

  onIconKindChange(ev: Event): void {
    this.iconKind.set((ev.target as HTMLSelectElement).value as BrightrailButtonIcon);
  }

  onToggleLoading(ev: Event): void {
    this.loading.set((ev.target as HTMLInputElement).checked);
  }

  onToggleFullWidth(ev: Event): void {
    this.fullWidth.set((ev.target as HTMLInputElement).checked);
  }

  onToggleDropdown(ev: Event): void {
    this.dropdownIndicator.set((ev.target as HTMLInputElement).checked);
  }

  async copySnippet(): Promise<void> {
    const text = this.activeSnippet();
    await navigator.clipboard?.writeText(text);
  }

  private buildHtml(): string {
    const lines: string[] = ['<brightrail-button'];
    lines.push(`  variant="${this.variant()}"`);
    lines.push(`  size="${this.size()}"`);
    if (this.shape() !== 'default') {
      lines.push(`  shape="${this.shape()}"`);
    }
    if (this.boundaryStyle() === 'dotted') {
      lines.push(`  boundaryStyle="dotted"`);
    }
    if (this.buttonState() === 'active') {
      lines.push(`  visualState="active"`);
    }
    const li = this.leftIconForButton();
    const ri = this.rightIconForButton();
    if (li !== 'none') {
      lines.push(`  iconLeft="${li}"`);
    }
    if (ri !== 'none') {
      lines.push(`  iconRight="${ri}"`);
    }
    if (this.dropdownIndicator()) {
      lines.push('  [dropdownIndicator]="true"');
    }
    if (this.buttonState() === 'disabled') {
      lines.push('  [disabled]="true"');
    }
    if (this.loading()) {
      lines.push('  [loading]="true"');
    }
    if (this.fullWidth()) {
      lines.push('  [fullWidth]="true"');
    }
    if (this.shape() === 'circle' || this.shape() === 'icon') {
      if (!this.label().trim()) {
        lines.push(`  ariaLabel="${escapeAttr(this.iconLabels[this.iconKind()] || 'Action')}"`);
      }
    }
    lines.push(`>${escapeTemplateInnerText(this.label())}</brightrail-button>`);
    return lines.join('\n');
  }

  private buildTs(): string {
    return playgroundFxTs([
      `import { BrightrailButtonComponent } from 'brightrail';`,
      ``,
      `// In your standalone component:`,
      `// imports: [BrightrailButtonComponent]`,
      ``,
      `// Template`,
      this.buildHtml(),
    ].join('\n'), this.previewFx(), this.themeService.fxShell());
  }

  private buildScss(): string {
    return [
      `/* Optional: theme tokens (see brightrail-button.component.scss) */`,
      `app-root brightrail-button,`,
      `.my-layout brightrail-button {`,
      `  --br-btn-primary-bg: #0062ff;`,
      `  --br-btn-radius: 0.375rem;`,
      `}`,
    ].join('\n');
  }
}

function effectiveLeftIcon(kind: BrightrailButtonIcon, side: IconSide): BrightrailButtonIcon {
  if (kind === 'none') {
    return 'none';
  }
  return side === 'left' || side === 'both' ? kind : 'none';
}

function effectiveRightIcon(kind: BrightrailButtonIcon, side: IconSide): BrightrailButtonIcon {
  if (kind === 'none') {
    return 'none';
  }
  return side === 'right' || side === 'both' ? kind : 'none';
}

function escapeTemplateInnerText(text: string): string {
  return text.replace(/&/g, '&amp;').replace(/</g, '&lt;');
}

function escapeAttr(text: string): string {
  return text.replace(/&/g, '&amp;').replace(/"/g, '&quot;');
}
