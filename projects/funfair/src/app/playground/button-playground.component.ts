import { TitleCasePipe } from '@angular/common';
import { ChangeDetectionStrategy, Component, computed, inject, signal } from '@angular/core';
import {
  BrightrailButtonComponent,
  BrightrailButtonIcon,
  BrightrailButtonSize,
  BrightrailButtonVariant,
} from 'brightrail';

import { PlaygroundThemeId, PlaygroundThemeService } from './playground-theme.service';

export type CodeTabId = 'html' | 'ts' | 'scss';
export type IconSide = 'left' | 'right' | 'both';

@Component({
  selector: 'app-button-playground',
  standalone: true,
  imports: [BrightrailButtonComponent, TitleCasePipe],
  templateUrl: './button-playground.component.html',
  styleUrl: './button-playground.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ButtonPlaygroundComponent {
  readonly themeService = inject(PlaygroundThemeService);

  readonly variants: BrightrailButtonVariant[] = ['primary', 'secondary', 'outline', 'ghost'];
  readonly sizeOptions: { value: BrightrailButtonSize; label: string }[] = [
    { value: 'sm', label: 'Small' },
    { value: 'md', label: 'Medium' },
    { value: 'lg', label: 'Large' },
  ];
  readonly stateOptions: { value: 'default' | 'active'; label: string }[] = [
    { value: 'default', label: 'Default' },
    { value: 'active', label: 'Active' },
  ];
  readonly themeRowOptions: { id: PlaygroundThemeId; label: string }[] = [
    { id: 'light', label: 'Material light' },
    { id: 'dark', label: 'Material dark' },
  ];
  readonly iconChoices: BrightrailButtonIcon[] = ['none', 'plus', 'chevron'];
  readonly iconLabels: Record<BrightrailButtonIcon, string> = {
    none: 'None',
    plus: 'Plus',
    chevron: 'Chevron',
  };
  readonly iconSideOptions: { value: IconSide; label: string }[] = [
    { value: 'left', label: 'Left' },
    { value: 'right', label: 'Right' },
    { value: 'both', label: 'Both sides' },
  ];

  readonly variant = signal<BrightrailButtonVariant>('primary');
  readonly size = signal<BrightrailButtonSize>('md');
  readonly visualState = signal<'default' | 'active'>('default');
  readonly disabled = signal(false);
  readonly loading = signal(false);
  readonly fullWidth = signal(false);
  readonly label = signal('Button');
  /** Where the selected icon appears (Icon options). */
  readonly iconSide = signal<IconSide>('left');
  /** Which icon glyph to use (`none` hides icons on all sides). */
  readonly iconKind = signal<BrightrailButtonIcon>('none');

  /** Effective values passed to `brightrail-button` (derived from side + kind). */
  readonly leftIconForButton = computed(() => effectiveLeftIcon(this.iconKind(), this.iconSide()));
  readonly rightIconForButton = computed(() => effectiveRightIcon(this.iconKind(), this.iconSide()));

  readonly activeTab = signal<CodeTabId>('html');

  readonly htmlSnippet = computed(() => this.buildHtml());
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

  onStateChange(ev: Event): void {
    this.visualState.set((ev.target as HTMLSelectElement).value as 'default' | 'active');
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

  onToggleDisabled(ev: Event): void {
    this.disabled.set((ev.target as HTMLInputElement).checked);
  }

  onToggleLoading(ev: Event): void {
    this.loading.set((ev.target as HTMLInputElement).checked);
  }

  onToggleFullWidth(ev: Event): void {
    this.fullWidth.set((ev.target as HTMLInputElement).checked);
  }

  async copySnippet(): Promise<void> {
    const text = this.activeSnippet();
    await navigator.clipboard?.writeText(text);
  }

  private buildHtml(): string {
    const lines: string[] = ['<brightrail-button'];
    lines.push(`  variant="${this.variant()}"`);
    lines.push(`  size="${this.size()}"`);
    if (this.visualState() === 'active') {
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
    if (this.disabled()) {
      lines.push('  [disabled]="true"');
    }
    if (this.loading()) {
      lines.push('  [loading]="true"');
    }
    if (this.fullWidth()) {
      lines.push('  [fullWidth]="true"');
    }
    lines.push(`>${escapeTemplateInnerText(this.label())}</brightrail-button>`);
    return lines.join('\n');
  }

  private buildTs(): string {
    return [
      `import { BrightrailButtonComponent } from 'brightrail';`,
      ``,
      `// In your standalone component:`,
      `// imports: [BrightrailButtonComponent]`,
      ``,
      `// Template`,
      this.buildHtml(),
    ].join('\n');
  }

  private buildScss(): string {
    return [
      `/* Optional: theme tokens (see brightrail-button.component.scss for full list) */`,
      `app-root brightrail-button,`,
      `.my-layout brightrail-button {`,
      `  --br-btn-primary-bg: #1e6bdd;`,
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
