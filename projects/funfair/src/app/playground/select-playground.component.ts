import { TitleCasePipe } from '@angular/common';
import { ChangeDetectionStrategy, Component, computed, inject, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {
  BrightrailButtonIcon,
  BrightrailButtonComponent,
  BrightrailButtonGroupComponent,
  BrightrailButtonIconComponent,
  BrightrailSelectComponent,
  BrightrailTextFieldAppearance,
  BrightrailTextFieldLabelPosition,
  BrightrailTextFieldShape,
  BrightrailTextFieldSize,
  BrightrailTextFieldStatus,
} from 'brightrail';

import { PlaygroundThemeId, PlaygroundThemeService } from './playground-theme.service';

export type CodeTabId = 'html' | 'ts' | 'scss';
export type IconSide = 'left' | 'right' | 'both';
export type PlaygroundFieldState = 'default' | 'disabled';

/** Drives the live preview + snippets — pick a scenario from the settings panel. */
export type SelectPreviewRecipe =
  | 'standard'
  | 'country'
  | 'language'
  | 'assignee'
  | 'category'
  | 'commandPalette'
  | 'tagMulti'
  | 'utilityFilter'
  | 'utilitySearch'
  | 'utilityCalendarTrail'
  | 'cascade'
  | 'selectPlusAction'
  | 'compactFilters'
  | 'segmented'
  | 'inlineEditable'
  | 'enterprise';

@Component({
  selector: 'app-select-playground',
  standalone: true,
  imports: [
    BrightrailSelectComponent,
    BrightrailButtonComponent,
    BrightrailButtonGroupComponent,
    BrightrailButtonIconComponent,
    FormsModule,
    TitleCasePipe,
  ],
  templateUrl: './select-playground.component.html',
  styleUrl: './select-playground.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SelectPlaygroundComponent {
  readonly themeService = inject(PlaygroundThemeService);

  readonly ngModelStandalone = { standalone: true };

  readonly previewLabel = 'Label';
  readonly demoOptions: { id: string; label: string }[] = [
    { id: 'us', label: 'United States' },
    { id: 'ca', label: 'Canada' },
    { id: 'mx', label: 'Mexico' },
    { id: 'br', label: 'Brazil' },
  ];

  readonly deptOptions: { id: string; label: string }[] = [
    { id: 'eng', label: 'Engineering' },
    { id: 'des', label: 'Design' },
    { id: 'sal', label: 'Sales' },
  ];

  readonly filterStatusOpts: { id: string; label: string }[] = [
    { id: 'open', label: 'Open' },
    { id: 'done', label: 'Done' },
  ];
  readonly filterAssigneeOpts: { id: string; label: string }[] = [
    { id: 'any', label: 'Any' },
    { id: 'me', label: 'Assigned to me' },
  ];
  readonly filterPriorityOpts: { id: string; label: string }[] = [
    { id: 'p1', label: 'P1' },
    { id: 'p2', label: 'P2' },
    { id: 'p3', label: 'P3' },
  ];

  readonly recipeOptions: { value: SelectPreviewRecipe; label: string; group: string }[] = [
    { value: 'standard', label: 'Standard list', group: 'Basics' },
    { value: 'country', label: 'Country / region', group: 'Popular app' },
    { value: 'language', label: 'Language', group: 'Popular app' },
    { value: 'assignee', label: 'Assignee + avatar', group: 'Popular app' },
    { value: 'category', label: 'Category', group: 'Popular app' },
    { value: 'commandPalette', label: 'Command palette', group: 'Popular app' },
    { value: 'tagMulti', label: 'Tag multi-select (pills)', group: 'Popular app' },
    { value: 'utilityFilter', label: 'Leading icon: filter', group: 'Icons & utility' },
    { value: 'utilitySearch', label: 'Leading icon: search', group: 'Icons & utility' },
    { value: 'utilityCalendarTrail', label: 'Trailing icon: calendar', group: 'Icons & utility' },
    { value: 'cascade', label: 'Cascading selects', group: 'Group layouts' },
    { value: 'selectPlusAction', label: 'Select + primary action', group: 'Group layouts' },
    { value: 'compactFilters', label: 'Compact filter bar (×3)', group: 'Group layouts' },
    { value: 'segmented', label: 'Segmented control', group: 'Group layouts' },
    { value: 'inlineEditable', label: 'Inline editable row', group: 'Group layouts' },
    { value: 'enterprise', label: 'Enterprise field (department)', group: 'Enterprise' },
  ];

  readonly recipeGroups: string[] = [
    'Basics',
    'Popular app',
    'Icons & utility',
    'Group layouts',
    'Enterprise',
  ];

  /** First dropdown: narrows the second “Scenario” list (Popular app, Group layouts, …). */
  readonly selectedRecipeGroup = signal<string>('Basics');

  recipesInGroup(group: string): { value: SelectPreviewRecipe; label: string }[] {
    return this.recipeOptions.filter((o) => o.group === group);
  }

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
  readonly shapeOptions: { value: BrightrailTextFieldShape; label: string }[] = [
    { value: 'default', label: 'Rounded (default)' },
    { value: 'square', label: 'Square' },
    { value: 'pill', label: 'Pill' },
  ];
  readonly labelPositionOptions: { value: BrightrailTextFieldLabelPosition; label: string }[] = [
    { value: 'none', label: 'None' },
    { value: 'top', label: 'Top' },
    { value: 'inset', label: 'Inset (border)' },
    { value: 'left', label: 'Left' },
    { value: 'right', label: 'Right' },
  ];
  readonly stateOptions: { value: PlaygroundFieldState; label: string }[] = [
    { value: 'default', label: 'Default' },
    { value: 'disabled', label: 'Disabled' },
  ];
  readonly themeRowOptions: { id: PlaygroundThemeId; label: string }[] = [
    { id: 'light', label: 'Material light' },
    { id: 'dark', label: 'Material dark' },
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
    loader: 'Loading (spinner)',
  };
  readonly iconSideOptions: { value: IconSide; label: string }[] = [
    { value: 'left', label: 'Left' },
    { value: 'right', label: 'Right' },
    { value: 'both', label: 'Both sides' },
  ];

  readonly previewRecipe = signal<SelectPreviewRecipe>('standard');

  readonly appearance = signal<BrightrailTextFieldAppearance>('outlined');
  readonly status = signal<BrightrailTextFieldStatus>('none');
  readonly size = signal<BrightrailTextFieldSize>('md');
  readonly shape = signal<BrightrailTextFieldShape>('default');
  readonly labelPosition = signal<BrightrailTextFieldLabelPosition>('none');
  readonly fieldState = signal<PlaygroundFieldState>('default');
  readonly fieldLoading = signal(false);
  readonly clearable = signal(false);
  readonly fullWidth = signal(false);
  readonly iconSide = signal<IconSide>('left');
  readonly iconKind = signal<BrightrailButtonIcon>('none');

  readonly previewValue = signal<string>('us');

  readonly cascadeParent = signal<'us' | 'can'>('us');
  readonly cascadeChild = signal('ca-state');

  readonly filterStatus = signal('open');
  readonly filterAssignee = signal('any');
  readonly filterPriority = signal('p2');

  readonly segment = signal<'day' | 'week' | 'month' | 'year'>('month');

  readonly cascadeChildLabel = computed(
    () => this.cascadeChildOptions().find((o) => o.id === this.cascadeChild())?.label ?? '',
  );

  readonly filterStatusLabel = computed(
    () => this.filterStatusOpts.find((o) => o.id === this.filterStatus())?.label ?? '',
  );
  readonly filterAssigneeLabel = computed(
    () => this.filterAssigneeOpts.find((o) => o.id === this.filterAssignee())?.label ?? '',
  );
  readonly filterPriorityLabel = computed(
    () => this.filterPriorityOpts.find((o) => o.id === this.filterPriority())?.label ?? '',
  );

  readonly tagModel = signal('tags');

  /** Single-select panel options for the active (non-composite) recipe. */
  readonly activePanelOptions = computed(() =>
    this.previewRecipe() === 'enterprise' ? this.deptOptions : this.demoOptions,
  );

  readonly effectiveFieldLabel = computed((): string => {
    switch (this.previewRecipe()) {
      case 'country':
        return 'Country';
      case 'language':
        return 'Language';
      case 'assignee':
        return 'Assignee';
      case 'category':
        return 'Category';
      case 'commandPalette':
        return 'Command';
      case 'tagMulti':
        return 'Skills';
      case 'utilityFilter':
        return 'Filter';
      case 'utilitySearch':
        return 'Search';
      case 'utilityCalendarTrail':
        return 'Date';
      case 'enterprise':
        return 'Department';
      default:
        return this.previewLabel;
    }
  });

  readonly effectivePlaceholder = computed((): string => {
    switch (this.previewRecipe()) {
      case 'commandPalette':
        return 'Type a command…';
      case 'utilitySearch':
        return 'Search options…';
      case 'enterprise':
        return 'Select department';
      case 'category':
        return 'Choose category';
      default:
        return 'Select country';
    }
  });

  readonly displayText = computed(() => {
    const r = this.previewRecipe();
    if (r === 'assignee') {
      return 'Olivia Rhye';
    }
    if (r === 'category') {
      return 'Product design';
    }
    if (r === 'language') {
      return 'English (US)';
    }
    if (r === 'commandPalette' || r === 'tagMulti') {
      return '';
    }
    if (r === 'enterprise') {
      const hit = this.deptOptions.find((o) => o.id === this.previewValue());
      return hit?.label ?? '';
    }
    const v = this.previewValue();
    const hit = this.demoOptions.find((o) => o.id === v);
    return hit?.label ?? '';
  });

  readonly cascadeChildOptions = computed(() => {
    if (this.cascadeParent() === 'us') {
      return [
        { id: 'ca-state', label: 'California' },
        { id: 'tx', label: 'Texas' },
      ];
    }
    return [
      { id: 'on', label: 'Ontario' },
      { id: 'bc', label: 'British Columbia' },
    ];
  });

  readonly disabledForField = computed(() => this.fieldState() === 'disabled');

  /** Playground-driven icon in `.br-select-prefix` (overrides recipe prefix when not `none`). */
  readonly playgroundLeftIcon = computed(() =>
    effectiveLeftIcon(this.iconKind(), this.iconSide()),
  );
  readonly playgroundRightIcon = computed(() =>
    effectiveRightIcon(this.iconKind(), this.iconSide()),
  );

  /**
   * Leading `brightrail-button-icon` for recipes that use glyphs in `.br-select-prefix`
   * (country, language, assignee, category) are handled in the template — not here — so
   * “Icon options” do not hide the flag, globe, avatar, or category dot.
   */
  readonly selectLeadingButtonIcon = computed((): BrightrailButtonIcon | null => {
    const r = this.previewRecipe();
    if (
      r === 'country' ||
      r === 'language' ||
      r === 'assignee' ||
      r === 'category' ||
      r === 'tagMulti'
    ) {
      return null;
    }
    const play = this.playgroundLeftIcon();
    if (play !== 'none') {
      return play;
    }
    if (r === 'utilityFilter') {
      return 'filter';
    }
    if (r === 'utilitySearch' || r === 'commandPalette') {
      return 'search';
    }
    return null;
  });

  readonly selectTrailingButtonIcon = computed((): BrightrailButtonIcon | null => {
    const r = this.previewRecipe();
    if (r === 'tagMulti') {
      return null;
    }
    const play = this.playgroundRightIcon();
    if (play !== 'none') {
      return play;
    }
    if (r === 'utilityCalendarTrail') {
      return 'calendar';
    }
    return null;
  });

  /** Primary action next to select + row: same size token as the text-field/select scale. */
  readonly exportActionButtonSize = computed(
    (): 'xs' | 'sm' | 'md' | 'lg' | 'xl' => this.size(),
  );

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

  readonly showMainSelectRecipe = computed(() => {
    const r = this.previewRecipe();
    return (
      r === 'standard' ||
      r === 'country' ||
      r === 'language' ||
      r === 'assignee' ||
      r === 'category' ||
      r === 'commandPalette' ||
      r === 'tagMulti' ||
      r === 'utilityFilter' ||
      r === 'utilitySearch' ||
      r === 'utilityCalendarTrail' ||
      r === 'enterprise'
    );
  });

  selectTab(tab: CodeTabId): void {
    this.activeTab.set(tab);
  }

  resetToDefaults(): void {
    this.previewRecipe.set('standard');
    this.appearance.set('outlined');
    this.status.set('none');
    this.size.set('md');
    this.shape.set('default');
    this.labelPosition.set('none');
    this.fieldState.set('default');
    this.fieldLoading.set(false);
    this.clearable.set(false);
    this.fullWidth.set(false);
    this.previewValue.set('us');
    this.cascadeParent.set('us');
    this.cascadeChild.set('ca-state');
    this.filterStatus.set('open');
    this.filterAssignee.set('any');
    this.filterPriority.set('p2');
    this.segment.set('month');
    this.tagModel.set('tags');
    this.iconSide.set('left');
    this.iconKind.set('none');
    this.selectedRecipeGroup.set('Basics');
    this.themeService.setTheme('light');
  }

  pick(id: string): void {
    this.previewValue.set(id);
  }

  onPreviewModelChange(value: string): void {
    if (this.previewRecipe() === 'tagMulti') {
      this.tagModel.set(value);
    } else {
      this.previewValue.set(value);
    }
  }

  previewModelValue(): string {
    return this.previewRecipe() === 'tagMulti' ? this.tagModel() : this.previewValue();
  }

  onRecipeNgModelChange(value: string): void {
    const v = value as SelectPreviewRecipe;
    this.previewRecipe.set(v);
    const meta = this.recipeOptions.find((o) => o.value === v);
    if (meta) {
      this.selectedRecipeGroup.set(meta.group);
    }
    if (v === 'enterprise') {
      this.previewValue.set('eng');
    } else if (v !== 'tagMulti' && v !== 'commandPalette') {
      this.previewValue.set('us');
    }
    if (v === 'cascade') {
      this.cascadeParent.set('us');
      this.cascadeChild.set('ca-state');
    }
  }

  onRecipeGroupNgModelChange(group: string): void {
    this.selectedRecipeGroup.set(group);
    const choices = this.recipesInGroup(group);
    const cur = this.previewRecipe();
    if (!choices.some((c) => c.value === cur) && choices[0]) {
      this.onRecipeNgModelChange(choices[0].value);
    }
  }

  onCascadeParentPick(code: string): void {
    const next: 'us' | 'can' = code === 'can' ? 'can' : 'us';
    this.cascadeParent.set(next);
    this.cascadeChild.set(next === 'us' ? 'ca-state' : 'on');
  }

  onThemeRowChange(ev: Event): void {
    this.themeService.setTheme((ev.target as HTMLSelectElement).value as PlaygroundThemeId);
  }

  onAppearanceChange(ev: Event): void {
    this.appearance.set((ev.target as HTMLSelectElement).value as BrightrailTextFieldAppearance);
  }

  onStatusChange(ev: Event): void {
    this.status.set((ev.target as HTMLSelectElement).value as BrightrailTextFieldStatus);
  }

  onSizeChange(ev: Event): void {
    this.size.set((ev.target as HTMLSelectElement).value as BrightrailTextFieldSize);
  }

  onShapeChange(ev: Event): void {
    this.shape.set((ev.target as HTMLSelectElement).value as BrightrailTextFieldShape);
  }

  onLabelPositionChange(ev: Event): void {
    this.labelPosition.set(
      (ev.target as HTMLSelectElement).value as BrightrailTextFieldLabelPosition,
    );
  }

  onFieldStateChange(ev: Event): void {
    this.fieldState.set((ev.target as HTMLSelectElement).value as PlaygroundFieldState);
  }

  onToggleLoading(ev: Event): void {
    this.fieldLoading.set((ev.target as HTMLInputElement).checked);
  }

  onToggleClearable(ev: Event): void {
    this.clearable.set((ev.target as HTMLInputElement).checked);
  }

  onToggleFullWidth(ev: Event): void {
    this.fullWidth.set((ev.target as HTMLInputElement).checked);
  }

  onIconSideChange(ev: Event): void {
    this.iconSide.set((ev.target as HTMLSelectElement).value as IconSide);
  }

  onIconKindChange(ev: Event): void {
    this.iconKind.set((ev.target as HTMLSelectElement).value as BrightrailButtonIcon);
  }

  async copySnippet(): Promise<void> {
    await navigator.clipboard?.writeText(this.activeSnippet());
  }

  private buildHtml(): string {
    const r = this.previewRecipe();
    switch (r) {
      case 'cascade':
        return [
          '<!-- Parent + child selects; wire models separately in your component. -->',
          '<div class="sel-cascade">',
          '  <brightrail-select ...><!-- regions --></brightrail-select>',
          '  <span aria-hidden="true">→</span>',
          '  <brightrail-select ...><!-- sub-regions depend on parent --></brightrail-select>',
          '</div>',
        ].join('\n');
      case 'selectPlusAction':
        return [
          '<div class="sel-row-actions">',
          '  <brightrail-select class="sel-flex" ...></brightrail-select>',
          '  <brightrail-button variant="primary" size="sm">Export</brightrail-button>',
          '</div>',
        ].join('\n');
      case 'compactFilters':
        return [
          '<div class="sel-filter-bar">',
          '  <brightrail-select size="xs" labelPosition="none" ariaLabel="Status" ... />',
          '  <brightrail-select size="xs" labelPosition="none" ariaLabel="Assignee" ... />',
          '  <brightrail-select size="xs" labelPosition="none" ariaLabel="Priority" ... />',
          '</div>',
        ].join('\n');
      case 'segmented':
        return [
          '<brightrail-button-group mode="segmented">',
          '  <brightrail-button variant="secondary" size="sm" [visualState]="active === \'day\' ? \'active\' : \'default\'">Day</brightrail-button>',
          '  <!-- Week, Month, Year -->',
          '</brightrail-button-group>',
        ].join('\n');
      case 'inlineEditable':
        return [
          '<div class="sel-inline-edit">',
          '  <span class="sel-inline-edit__lbl">Owner</span>',
          '  <span class="sel-inline-edit__val">Alex Morgan</span>',
          '  <brightrail-button variant="ghost" size="sm" [iconLeft]="\'edit\'" ariaLabel="Edit" />',
          '</div>',
        ].join('\n');
      case 'tagMulti':
        return this.buildSingleSelectSnippet({
          includeTagSlot: true,
          includeCountryPrefix: false,
          includeGlobe: false,
          includeFilterIcon: false,
          includeSearchIcon: false,
          includeCalendarSuffix: false,
          includeFlag: false,
          includeAvatar: false,
        });
      case 'country':
        return this.buildSingleSelectSnippet({
          includeTagSlot: false,
          includeCountryPrefix: true,
          includeGlobe: false,
          includeFilterIcon: false,
          includeSearchIcon: false,
          includeCalendarSuffix: false,
          includeFlag: false,
          includeAvatar: false,
        });
      case 'language':
        return this.buildSingleSelectSnippet({
          includeTagSlot: false,
          includeCountryPrefix: false,
          includeGlobe: true,
          includeFilterIcon: false,
          includeSearchIcon: false,
          includeCalendarSuffix: false,
          includeFlag: false,
          includeAvatar: false,
        });
      case 'assignee':
        return this.buildSingleSelectSnippet({
          includeTagSlot: false,
          includeCountryPrefix: false,
          includeGlobe: false,
          includeFilterIcon: false,
          includeSearchIcon: false,
          includeCalendarSuffix: false,
          includeFlag: false,
          includeAvatar: true,
        });
      case 'utilityFilter':
        return this.buildSingleSelectSnippet({
          includeTagSlot: false,
          includeCountryPrefix: false,
          includeGlobe: false,
          includeFilterIcon: true,
          includeSearchIcon: false,
          includeCalendarSuffix: false,
          includeFlag: false,
          includeAvatar: false,
        });
      case 'utilitySearch':
        return this.buildSingleSelectSnippet({
          includeTagSlot: false,
          includeCountryPrefix: false,
          includeGlobe: false,
          includeFilterIcon: false,
          includeSearchIcon: true,
          includeCalendarSuffix: false,
          includeFlag: false,
          includeAvatar: false,
        });
      case 'utilityCalendarTrail':
        return this.buildSingleSelectSnippet({
          includeTagSlot: false,
          includeCountryPrefix: false,
          includeGlobe: false,
          includeFilterIcon: false,
          includeSearchIcon: false,
          includeCalendarSuffix: true,
          includeFlag: false,
          includeAvatar: false,
        });
      default:
        return this.buildSingleSelectSnippet({
          includeTagSlot: false,
          includeCountryPrefix: false,
          includeGlobe: false,
          includeFilterIcon: false,
          includeSearchIcon: false,
          includeCalendarSuffix: false,
          includeFlag: false,
          includeAvatar: false,
        });
    }
  }

  private buildTs(): string {
    const r = this.previewRecipe();
    const needsButtons = r === 'selectPlusAction' || r === 'segmented' || r === 'inlineEditable';
    const usesIcons =
      this.selectLeadingButtonIcon() !== null ||
      this.selectTrailingButtonIcon() !== null ||
      r === 'utilityFilter' ||
      r === 'utilitySearch' ||
      r === 'utilityCalendarTrail' ||
      r === 'commandPalette';
    const imports = [
      `import { BrightrailSelectComponent } from 'brightrail';`,
      usesIcons ? `import { BrightrailButtonIconComponent } from 'brightrail';` : null,
      needsButtons
        ? `import { BrightrailButtonComponent, BrightrailButtonGroupComponent } from 'brightrail';`
        : null,
      `import { FormsModule } from '@angular/forms';`,
      `import { Component } from '@angular/core';`,
      ``,
      `// Recipe: "${r}" — mirror the HTML tab in your template.`,
      `// With ngModel on a standalone control, use [ngModelOptions]="{ standalone: true }".`,
    ].filter((line): line is string => line !== null);
    return imports.join('\n');
  }

  private buildScss(): string {
    return [
      `brightrail-select {`,
      `  --br-tf-focus: #0062ff;`,
      `  --br-tf-radius: 0.375rem;`,
      `}`,
      ``,
      `.br-select-panel { /* menu panel */ }`,
      `.sel-cascade, .sel-row-actions, .sel-filter-bar, .sel-inline-edit { /* layout wrappers */ }`,
    ].join('\n');
  }

  private buildSingleSelectSnippet(opts: {
    includeTagSlot: boolean;
    includeCountryPrefix: boolean;
    includeGlobe: boolean;
    includeFilterIcon: boolean;
    includeSearchIcon: boolean;
    includeCalendarSuffix: boolean;
    includeFlag: boolean;
    includeAvatar: boolean;
  }): string {
    const lines: string[] = [
      '<brightrail-select',
      '  [ngModelOptions]="ngModelStandalone"',
      `  appearance="${this.appearance()}"`,
    ];
    if (this.shape() !== 'default') {
      lines.push(`  shape="${this.shape()}"`);
    }
    if (this.status() !== 'none') {
      lines.push(`  status="${this.status()}"`);
    }
    lines.push(`  size="${this.size()}"`);
    lines.push(`  label="${escapeAttr(this.effectiveFieldLabel())}"`);
    lines.push(`  labelPosition="${this.labelPosition()}"`);
    lines.push(`  placeholder="${escapeAttr(this.effectivePlaceholder())}"`);
    lines.push(`  displayText="${escapeAttr(this.displayText())}"`);
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
    lines.push(`  [(ngModel)]="countryCode"`);
    lines.push('>');
    const lead = this.selectLeadingButtonIcon();
    if (lead) {
      lines.push(`  <span class="br-select-prefix"><brightrail-button-icon name="${lead}" /></span>`);
    } else if (opts.includeCountryPrefix || opts.includeFlag) {
      lines.push('  <span class="br-select-prefix" aria-hidden="true">🇺🇸</span>');
    } else if (opts.includeGlobe) {
      lines.push(
        '  <span class="br-select-prefix sel-lang-prefix" aria-hidden="true"><span>🇺🇸</span><span>🌐</span></span>',
      );
    } else if (opts.includeAvatar) {
      lines.push('  <span class="br-select-prefix sel-assignee-avatar" aria-hidden="true">O</span>');
    } else if (this.previewRecipe() === 'category') {
      lines.push(
        '  <span class="br-select-prefix sel-cat-prefix" aria-hidden="true"><span class="sel-cat-dot"></span></span>',
      );
    }
    const trail = this.selectTrailingButtonIcon();
    if (trail) {
      lines.push(`  <span class="br-select-suffix"><brightrail-button-icon name="${trail}" /></span>`);
    }
    if (opts.includeTagSlot) {
      lines.push('  <span class="br-select-value-slot sel-tag-row">');
      lines.push('    <span class="sel-tag-pill">Angular</span>');
      lines.push('    <span class="sel-tag-pill">React</span>');
      lines.push('  </span>');
    }
    lines.push('  <div class="br-select-panel demo-sel-panel">');
    const optsList = this.previewRecipe() === 'enterprise' ? this.deptOptions : this.demoOptions;
    for (const opt of optsList) {
      lines.push(
        `    <button type="button" class="demo-sel-panel__opt" (click)="selectCountry('${escapeForJsString(opt.id)}')">${escapeHtmlText(opt.label)}</button>`,
      );
    }
    lines.push('  </div>');
    lines.push('</brightrail-select>');
    return lines.join('\n');
  }
}

function escapeAttr(text: string): string {
  return text.replace(/&/g, '&amp;').replace(/"/g, '&quot;');
}

function escapeHtmlText(text: string): string {
  return text
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;');
}

function escapeForJsString(text: string): string {
  return text.replace(/\\/g, '\\\\').replace(/'/g, "\\'");
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
