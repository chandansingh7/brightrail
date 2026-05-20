import { TitleCasePipe } from '@angular/common';
import { RouterLink } from '@angular/router';
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
  BrightrailButtonIcon,
  BrightrailTextFieldAppearance,
  BrightrailTextFieldComponent,
  BrightrailTextFieldLabelPosition,
  BrightrailTextFieldShape,
  BrightrailTextFieldSize,
  BrightrailTextFieldSuffixPosition,
  BrightrailTextFieldStatus,
} from 'brightrail';

import { PlaygroundThemeId, PlaygroundThemeService } from '../playground-theme.service';

export type CodeTabId = 'html' | 'ts' | 'scss';
export type IconSide = 'left' | 'right' | 'both';
export type PlaygroundFieldState = 'default' | 'disabled';
export type PlaygroundInputType = 'text' | 'password' | 'email' | 'search' | 'tel';
/** Where fixed demo suffix `kg` appears; `none` hides the suffix. */
export type PlaygroundSuffixPlacement = 'none' | BrightrailTextFieldSuffixPosition;

@Component({
  selector: 'app-text-field-playground',
  standalone: true,
  imports: [
    PlaygroundPreviewHeaderComponent,BrightrailTextFieldComponent, FormsModule, TitleCasePipe, RouterLink],
  templateUrl: './text-field-playground.component.html',
  styleUrl: './text-field-playground.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TextFieldPlaygroundComponent {
  readonly previewOnly = injectPlaygroundA11yPreviewMode();
  readonly a11yPreviewState = computed(() =>
    snapshotPlaygroundState({
      appearance: () => this.appearance(),
      shape: () => this.shape(),
      status: () => this.status(),
      size: () => this.size(),
      rows: () => this.rows(),
      inputType: () => this.inputType(),
      fieldState: () => this.fieldState(),
      fullWidth: () => this.fullWidth(),
      dropdownIndicator: () => this.dropdownIndicator(),
      clearable: () => this.clearable(),
      labelPosition: () => this.labelPosition(),
      suffixPlacement: () => this.suffixPlacement(),
      iconSide: () => this.iconSide(),
      iconKind: () => this.iconKind(),
      fieldLoading: () => this.fieldLoading(),
      previewValue: () => this.previewValue(),
    }),
  );

  constructor() {
    initPlaygroundA11yPreview('text-field', this.previewOnly, (state) =>
      this.restoreA11yPreviewState(state),
    );
  }
  private restoreA11yPreviewState(state: unknown): void {
    if (!state || typeof state !== 'object') {
      return;
    }
    const snapshot = state as Record<string, unknown>;
    
    restorePlaygroundState(state, {
      appearance: this.appearance as WritableSignal<unknown>,
      shape: this.shape as WritableSignal<unknown>,
      status: this.status as WritableSignal<unknown>,
      size: this.size as WritableSignal<unknown>,
      rows: this.rows as WritableSignal<unknown>,
      inputType: this.inputType as WritableSignal<unknown>,
      fieldState: this.fieldState as WritableSignal<unknown>,
      fullWidth: this.fullWidth as WritableSignal<unknown>,
      dropdownIndicator: this.dropdownIndicator as WritableSignal<unknown>,
      clearable: this.clearable as WritableSignal<unknown>,
      labelPosition: this.labelPosition as WritableSignal<unknown>,
      suffixPlacement: this.suffixPlacement as WritableSignal<unknown>,
      iconSide: this.iconSide as WritableSignal<unknown>,
      iconKind: this.iconKind as WritableSignal<unknown>,
      fieldLoading: this.fieldLoading as WritableSignal<unknown>,
      previewValue: this.previewValue as WritableSignal<unknown>,
    });
  }

  readonly themeService = inject(PlaygroundThemeService);

  /** Label copy for the preview / snippet (fixed in code; not edited in the UI). */
  readonly previewLabel = 'Label';
  readonly previewPlaceholder = '';

  /** Fixed suffix for the demo when placement is not `none`. */
  readonly previewSuffix = 'kg';

  readonly appearanceOptions: BrightrailTextFieldAppearance[] = [
    'filled',
    'outlined',
    'underline',
    'ghost',
    'readonly',
  ];
  readonly statusOptions: { value: BrightrailTextFieldStatus; label: string }[] = [
    { value: 'none', label: 'None' },
    { value: 'success', label: 'Success' },
    { value: 'warning', label: 'Warning' },
    { value: 'error', label: 'Error' },
    { value: 'info', label: 'Info' },
  ];
  readonly sizeOptions: { value: BrightrailTextFieldSize; label: string }[] = [
    { value: 'xs', label: 'Extra small' },
    { value: 'sm', label: 'Small' },
    { value: 'md', label: 'Medium' },
    { value: 'lg', label: 'Large' },
    { value: 'xl', label: 'Extra large' },
  ];
  readonly rowsOptions: { value: number; label: string }[] = [
    { value: 1, label: 'Single line' },
    { value: 2, label: '2 lines' },
    { value: 3, label: '3 lines' },
    { value: 4, label: '4 lines' },
    { value: 6, label: '6 lines' },
  ];
  readonly inputTypeOptions: { value: PlaygroundInputType; label: string }[] = [
    { value: 'text', label: 'Text' },
    { value: 'password', label: 'Password' },
    { value: 'email', label: 'Email' },
    { value: 'search', label: 'Search' },
    { value: 'tel', label: 'Phone' },
  ];
  readonly stateOptions: { value: PlaygroundFieldState; label: string }[] = [
    { value: 'default', label: 'Default' },
    { value: 'disabled', label: 'Disabled' },
  ];
  readonly themeRowOptions: { id: PlaygroundThemeId; label: string }[] = [
    { id: 'light', label: 'Material light' },
    { id: 'dark', label: 'Material dark' },
  ];
  readonly shapeOptions: { value: BrightrailTextFieldShape; label: string }[] = [
    { value: 'default', label: 'Rounded (default)' },
    { value: 'square', label: 'Square' },
    { value: 'pill', label: 'Pill' },
  ];
  readonly labelPositionOptions: { value: BrightrailTextFieldLabelPosition; label: string }[] = [
    { value: 'none', label: 'None' },
    { value: 'top', label: 'Top' },
    { value: 'inset', label: 'Inset (on border)' },
    { value: 'left', label: 'Left' },
    { value: 'right', label: 'Right' },
  ];
  readonly suffixPlacementOptions: { value: PlaygroundSuffixPlacement; label: string }[] = [
    { value: 'none', label: 'None' },
    { value: 'left', label: 'Left' },
    { value: 'right', label: 'Right' },
  ];
  /** Icon picker excludes `loader`; loading is controlled separately. */
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
    loader: 'Loading (spinner)',
  };
  readonly iconSideOptions: { value: IconSide; label: string }[] = [
    { value: 'left', label: 'Left' },
    { value: 'right', label: 'Right' },
    { value: 'both', label: 'Both sides' },
  ];

  readonly appearance = signal<BrightrailTextFieldAppearance>('outlined');
  readonly shape = signal<BrightrailTextFieldShape>('default');
  readonly status = signal<BrightrailTextFieldStatus>('none');
  readonly size = signal<BrightrailTextFieldSize>('md');
  readonly rows = signal(1);
  readonly inputType = signal<PlaygroundInputType>('text');
  readonly fieldState = signal<PlaygroundFieldState>('default');
  readonly fullWidth = signal(false);
  readonly dropdownIndicator = signal(false);
  readonly clearable = signal(false);
  readonly labelPosition = signal<BrightrailTextFieldLabelPosition>('none');
  readonly suffixPlacement = signal<PlaygroundSuffixPlacement>('none');
  readonly iconSide = signal<IconSide>('left');
  readonly iconKind = signal<BrightrailButtonIcon>('none');
  readonly fieldLoading = signal(false);

  readonly textFieldSuffixPlacementEditable = computed(() => this.rows() === 1);
  readonly textFieldIconSideEditable = computed(() => this.iconKind() !== 'none');

  readonly previewValue = signal('');

  readonly suffixForPreview = computed(() =>
    this.suffixPlacement() === 'none' ? undefined : this.previewSuffix,
  );

  readonly suffixPositionForBinding = computed((): BrightrailTextFieldSuffixPosition => {
    const p = this.suffixPlacement();
    return p === 'left' || p === 'right' ? p : 'none';
  });

  readonly leftIconForField = computed(() => effectiveLeftIcon(this.iconKind(), this.iconSide()));
  readonly rightIconForField = computed(() => effectiveRightIcon(this.iconKind(), this.iconSide()));
  readonly disabledForField = computed(() => this.fieldState() === 'disabled');

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

  resetToDefaults(): void {
    this.appearance.set('outlined');
    this.shape.set('default');
    this.status.set('none');
    this.size.set('md');
    this.rows.set(1);
    this.inputType.set('text');
    this.fieldState.set('default');
    this.fullWidth.set(false);
    this.dropdownIndicator.set(false);
    this.clearable.set(false);
    this.labelPosition.set('none');
    this.suffixPlacement.set('none');
    this.iconSide.set('left');
    this.iconKind.set('none');
    this.fieldLoading.set(false);
    this.previewValue.set('');
    this.themeService.setTheme('light');
  }

  onThemeRowChange(ev: Event): void {
    this.themeService.setTheme((ev.target as HTMLSelectElement).value as PlaygroundThemeId);
  }

  onAppearanceChange(ev: Event): void {
    this.appearance.set((ev.target as HTMLSelectElement).value as BrightrailTextFieldAppearance);
  }

  onShapeChange(ev: Event): void {
    this.shape.set((ev.target as HTMLSelectElement).value as BrightrailTextFieldShape);
  }

  onLabelPositionChange(ev: Event): void {
    this.labelPosition.set(
      (ev.target as HTMLSelectElement).value as BrightrailTextFieldLabelPosition,
    );
  }

  onStatusChange(ev: Event): void {
    this.status.set((ev.target as HTMLSelectElement).value as BrightrailTextFieldStatus);
  }

  onSizeChange(ev: Event): void {
    this.size.set((ev.target as HTMLSelectElement).value as BrightrailTextFieldSize);
  }

  onRowsChange(ev: Event): void {
    this.rows.set(Number.parseInt((ev.target as HTMLSelectElement).value, 10) || 1);
  }

  onInputTypeChange(ev: Event): void {
    this.inputType.set((ev.target as HTMLSelectElement).value as PlaygroundInputType);
  }

  onFieldStateChange(ev: Event): void {
    this.fieldState.set((ev.target as HTMLSelectElement).value as PlaygroundFieldState);
  }

  onSuffixPlacementChange(ev: Event): void {
    this.suffixPlacement.set((ev.target as HTMLSelectElement).value as PlaygroundSuffixPlacement);
  }

  onIconSideChange(ev: Event): void {
    this.iconSide.set((ev.target as HTMLSelectElement).value as IconSide);
  }

  onIconKindChange(ev: Event): void {
    this.iconKind.set((ev.target as HTMLSelectElement).value as BrightrailButtonIcon);
  }

  onToggleFullWidth(ev: Event): void {
    this.fullWidth.set((ev.target as HTMLInputElement).checked);
  }

  onToggleDropdown(ev: Event): void {
    this.dropdownIndicator.set((ev.target as HTMLInputElement).checked);
  }

  onToggleClearable(ev: Event): void {
    this.clearable.set((ev.target as HTMLInputElement).checked);
  }

  onToggleLoading(ev: Event): void {
    this.fieldLoading.set((ev.target as HTMLInputElement).checked);
  }

  async copySnippet(): Promise<void> {
    await navigator.clipboard?.writeText(this.activeSnippet());
  }

  private buildHtml(): string {
    const lines: string[] = ['<brightrail-text-field'];
    lines.push(`  appearance="${this.appearance()}"`);
    if (this.shape() !== 'default') {
      lines.push(`  shape="${this.shape()}"`);
    }
    if (this.status() !== 'none') {
      lines.push(`  status="${this.status()}"`);
    }
    lines.push(`  size="${this.size()}"`);
    if (this.rows() > 1) {
      lines.push(`  [rows]="${this.rows()}"`);
    }
    if (this.inputType() !== 'text') {
      lines.push(`  inputType="${this.inputType()}"`);
    }
    lines.push(`  label="${escapeAttr(this.previewLabel)}"`);
    if (this.labelPosition() !== 'none') {
      lines.push(`  labelPosition="${this.labelPosition()}"`);
    }
    const ph = this.previewPlaceholder;
    if (ph) {
      lines.push(`  placeholder="${escapeAttr(ph)}"`);
    }
    const place = this.suffixPlacement();
    if (place !== 'none') {
      lines.push(`  suffix="${escapeAttr(this.previewSuffix)}"`);
      lines.push(`  suffixPosition="${place}"`);
    }
    const li = this.leftIconForField();
    const ri = this.rightIconForField();
    if (li !== 'none') {
      lines.push(`  iconLeft="${li}"`);
    }
    if (ri !== 'none') {
      lines.push(`  iconRight="${ri}"`);
    }
    if (this.dropdownIndicator()) {
      lines.push('  [dropdownIndicator]="true"');
    }
    if (this.fieldState() === 'disabled') {
      lines.push('  [disabled]="true"');
    }
    if (this.fieldLoading()) {
      lines.push('  [loading]="true"');
    }
    if (this.fullWidth()) {
      lines.push('  [fullWidth]="true"');
    }
    if (this.clearable()) {
      lines.push('  [clearable]="true"');
    }
    if (this.inputType() === 'password') {
      lines.push('  [showPasswordToggle]="true"');
    }
    lines.push(`  [(ngModel)]="fieldValue"`);
    lines.push('></brightrail-text-field>');
    return lines.join('\n');
  }

  private buildTs(): string {
    return [
      `import { BrightrailTextFieldComponent } from 'brightrail';`,
      `import { FormsModule } from '@angular/forms';`,
      ``,
      `// imports: [BrightrailTextFieldComponent, FormsModule]`,
      ``,
      this.buildHtml(),
    ].join('\n');
  }

  private buildScss(): string {
    return [
      `/* Optional: theme tokens (see brightrail-text-field.component.scss) */`,
      `brightrail-text-field {`,
      `  --br-tf-border-focus: #0062ff;`,
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

function escapeAttr(text: string): string {
  return text.replace(/&/g, '&amp;').replace(/"/g, '&quot;');
}
