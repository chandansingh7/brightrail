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

import { PlaygroundThemeId, PlaygroundThemeService } from '../playground-theme.service';
import { createPlaygroundPreviewFx } from '../shared/playground-fx.util';
import { PlaygroundFxSettingsComponent } from '../shared/playground-fx-settings.component';

export type CodeTabId = 'html' | 'ts' | 'scss';
export type IconSide = 'left' | 'right' | 'both';
export type PlaygroundFieldState = 'default' | 'disabled';
export type SelectTextOverflow = 'truncate' | 'wrap';
export type SelectSelectionMode = 'single' | 'multi';

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
  | 'optionEditSave'
  | 'inlineEditActions'
  | 'multiSelect'
  | 'multiSelectCheckboxCount'
  | 'enterprise';

@Component({
  selector: 'app-select-playground',
  standalone: true,
  imports: [
    PlaygroundPreviewHeaderComponent,
    BrightrailSelectComponent,
    BrightrailButtonComponent,
    BrightrailButtonGroupComponent,
    BrightrailButtonIconComponent,
    FormsModule,
    TitleCasePipe, PlaygroundFxSettingsComponent],
  templateUrl: './select-playground.component.html',
  styleUrl: './select-playground.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SelectPlaygroundComponent {
  readonly previewOnly = injectPlaygroundA11yPreviewMode();
  readonly a11yPreviewState = computed(() =>
    snapshotPlaygroundState({
      editableOptions: () => this.editableOptions(),
      previewRecipe: () => this.previewRecipe(),
      appearance: () => this.appearance(),
      status: () => this.status(),
      size: () => this.size(),
      shape: () => this.shape(),
      labelPosition: () => this.labelPosition(),
      fieldState: () => this.fieldState(),
      fieldLoading: () => this.fieldLoading(),
      clearable: () => this.clearable(),
      fullWidth: () => this.fullWidth(),
      textOverflow: () => this.textOverflow(),
      selectionMode: () => this.selectionMode(),
      actionButtonCount: () => this.actionButtonCount(),
      iconSide: () => this.iconSide(),
      iconKind: () => this.iconKind(),
      previewValue: () => this.previewValue(),
      cascadeParent: () => this.cascadeParent(),
      cascadeChild: () => this.cascadeChild(),
      filterStatus: () => this.filterStatus(),
      filterAssignee: () => this.filterAssignee(),
      filterPriority: () => this.filterPriority(),
      segment: () => this.segment(),
      tagModel: () => this.tagModel(),
      optionEditorValue: () => this.optionEditorValue(),
      multiValues: () => this.multiValues(),
      editingOptionId: () => this.editingOptionId(),
      editingOptionDraft: () => this.editingOptionDraft(),
      inlineEditingId: () => this.inlineEditingId(),
      inlineEditingDraft: () => this.inlineEditingDraft(),
    }),
  );

  constructor() {
    initPlaygroundA11yPreview('select', this.previewOnly, (state) =>
      this.restoreA11yPreviewState(state),
    );
  }
  private restoreA11yPreviewState(state: unknown): void {
    if (!state || typeof state !== 'object') {
      return;
    }
    const snapshot = state as Record<string, unknown>;
    
    restorePlaygroundState(state, {
      editableOptions: this.editableOptions as WritableSignal<unknown>,
      previewRecipe: this.previewRecipe as WritableSignal<unknown>,
      appearance: this.appearance as WritableSignal<unknown>,
      status: this.status as WritableSignal<unknown>,
      size: this.size as WritableSignal<unknown>,
      shape: this.shape as WritableSignal<unknown>,
      labelPosition: this.labelPosition as WritableSignal<unknown>,
      fieldState: this.fieldState as WritableSignal<unknown>,
      fieldLoading: this.fieldLoading as WritableSignal<unknown>,
      clearable: this.clearable as WritableSignal<unknown>,
      fullWidth: this.fullWidth as WritableSignal<unknown>,
      textOverflow: this.textOverflow as WritableSignal<unknown>,
      selectionMode: this.selectionMode as WritableSignal<unknown>,
      actionButtonCount: this.actionButtonCount as WritableSignal<unknown>,
      iconSide: this.iconSide as WritableSignal<unknown>,
      iconKind: this.iconKind as WritableSignal<unknown>,
      previewValue: this.previewValue as WritableSignal<unknown>,
      cascadeParent: this.cascadeParent as WritableSignal<unknown>,
      cascadeChild: this.cascadeChild as WritableSignal<unknown>,
      filterStatus: this.filterStatus as WritableSignal<unknown>,
      filterAssignee: this.filterAssignee as WritableSignal<unknown>,
      filterPriority: this.filterPriority as WritableSignal<unknown>,
      segment: this.segment as WritableSignal<unknown>,
      tagModel: this.tagModel as WritableSignal<unknown>,
      optionEditorValue: this.optionEditorValue as WritableSignal<unknown>,
      multiValues: this.multiValues as WritableSignal<unknown>,
      editingOptionId: this.editingOptionId as WritableSignal<unknown>,
      editingOptionDraft: this.editingOptionDraft as WritableSignal<unknown>,
      inlineEditingId: this.inlineEditingId as WritableSignal<unknown>,
      inlineEditingDraft: this.inlineEditingDraft as WritableSignal<unknown>,
    });
  }

  readonly themeService = inject(PlaygroundThemeService);
  private readonly _playgroundFx = createPlaygroundPreviewFx();
  readonly previewFx = this._playgroundFx.previewFx;
  readonly resolvedFxShell = this._playgroundFx.resolvedFxShell;

  readonly ngModelStandalone = { standalone: true };

  readonly previewLabel = 'Label';
  readonly demoOptions: { id: string; label: string }[] = [
    { id: 'us', label: 'United States of America (North Region)' },
    { id: 'ca', label: 'Canada - Eastern Territories' },
    { id: 'mx', label: 'Mexico - Federal District and Coastal Zone' },
    { id: 'br', label: 'Brazil - Sao Paulo Metropolitan Cluster' },
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

  readonly editableOptions = signal<{ id: string; label: string }[]>([
    { id: 'us', label: 'United States of America (North Region)' },
    { id: 'ca', label: 'Canada - Eastern Territories' },
    { id: 'mx', label: 'Mexico - Federal District and Coastal Zone' },
    { id: 'br', label: 'Brazil - Sao Paulo Metropolitan Cluster' },
  ]);

  readonly recipeOptions: { value: SelectPreviewRecipe; label: string; group: string }[] = [
    { value: 'standard', label: 'Single-select: standard list', group: 'Core' },
    { value: 'country', label: 'Single-select: country / region', group: 'App patterns' },
    { value: 'language', label: 'Single-select: language', group: 'App patterns' },
    { value: 'assignee', label: 'Single-select: assignee + avatar', group: 'App patterns' },
    { value: 'category', label: 'Single-select: category', group: 'App patterns' },
    { value: 'commandPalette', label: 'Single-select: command palette', group: 'App patterns' },
    { value: 'tagMulti', label: 'Multi-select: tags (pills)', group: 'Multi-select & editable' },
    { value: 'utilityFilter', label: 'Single-select: leading icon (filter)', group: 'Icon patterns' },
    { value: 'utilitySearch', label: 'Single-select: leading icon (search)', group: 'Icon patterns' },
    { value: 'utilityCalendarTrail', label: 'Single-select: trailing icon (calendar)', group: 'Icon patterns' },
    { value: 'cascade', label: 'Single-select: cascading pair', group: 'Layout patterns' },
    { value: 'selectPlusAction', label: 'Single-select: with primary action', group: 'Layout patterns' },
    { value: 'compactFilters', label: 'Single-select: compact filter bar (x3)', group: 'Layout patterns' },
    { value: 'segmented', label: 'Single-select: segmented control', group: 'Layout patterns' },
    { value: 'optionEditSave', label: 'Editable options: save/delete', group: 'Multi-select & editable' },
    { value: 'inlineEditActions', label: 'Editable options: inline edit (dbl-click)', group: 'Multi-select & editable' },
    { value: 'multiSelect', label: 'Multi-select: chips', group: 'Multi-select & editable' },
    { value: 'multiSelectCheckboxCount', label: 'Multi-select: checkbox count', group: 'Multi-select & editable' },
    { value: 'enterprise', label: 'Enterprise field (department)', group: 'Enterprise' },
  ];

  readonly recipeGroups: string[] = [
    'Core',
    'Multi-select & editable',
    'App patterns',
    'Icon patterns',
    'Layout patterns',
    'Enterprise',
  ];

  /** First dropdown: narrows the second “Scenario” list (Popular app, Group layouts, …). */
  readonly selectedRecipeGroup = signal<string>('Core');

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
  readonly textOverflowOptions: { value: SelectTextOverflow; label: string }[] = [
    { value: 'truncate', label: 'Truncate (single line)' },
    { value: 'wrap', label: 'Wrap (multiple lines)' },
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
  readonly textOverflow = signal<SelectTextOverflow>('truncate');
  readonly selectionMode = signal<SelectSelectionMode>('single');
  readonly actionButtonCount = signal(2);
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
  readonly optionEditorValue = signal('us');
  readonly multiValues = signal<string[]>(['us', 'ca']);
  readonly editingOptionId = signal<string | null>(null);
  readonly editingOptionDraft = signal('');
  readonly inlineEditingId = signal<string | null>(null);
  readonly inlineEditingDraft = signal('');
  readonly optionEditorDisplayText = computed(
    () => this.editableOptions().find((o) => o.id === this.optionEditorValue())?.label ?? '',
  );
  readonly multiDisplayText = computed(() =>
    this.multiValues()
      .map((id) => this.editableOptions().find((o) => o.id === id)?.label)
      .filter((value): value is string => !!value)
      .join(', '),
  );

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
      case 'multiSelect':
      case 'multiSelectCheckboxCount':
        return 'Countries';
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
    if (r === 'multiSelect') {
      if (this.selectionMode() === 'multi') {
        return this.multiDisplayText();
      }
      const hit = this.editableOptions().find((o) => o.id === this.previewValue());
      return hit?.label ?? '';
    }
    if (r === 'multiSelectCheckboxCount') {
      return `${this.effectiveFieldLabel()} (${this.multiValues().length} selected)`;
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
      r === 'optionEditSave' ||
      r === 'inlineEditActions' ||
      r === 'multiSelect' ||
      r === 'multiSelectCheckboxCount' ||
      r === 'enterprise'
    );
  });

  readonly selectRecipeIsCascade = computed(() => this.previewRecipe() === 'cascade');

  readonly selectFullFieldChromeEditable = computed(
    () => this.showMainSelectRecipe() || this.previewRecipe() === 'selectPlusAction',
  );

  readonly selectAppearanceStatusEditable = computed(
    () => this.selectFullFieldChromeEditable() || this.selectRecipeIsCascade(),
  );

  readonly selectFieldStateEditable = computed(() => this.selectFullFieldChromeEditable());

  readonly selectBehaviorTogglesEditable = computed(() => this.selectFullFieldChromeEditable());

  readonly selectIconControlsEditable = computed(() => this.selectFullFieldChromeEditable());

  readonly selectIconSideEditable = computed(
    () => this.selectIconControlsEditable() && this.iconKind() !== 'none',
  );

  selectTab(tab: CodeTabId): void {
    this.activeTab.set(tab);
  }

  resetToDefaults(): void {
    this.previewFx.set('inherit');
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
    this.textOverflow.set('truncate');
    this.selectionMode.set('single');
    this.actionButtonCount.set(2);
    this.previewValue.set('us');
    this.cascadeParent.set('us');
    this.cascadeChild.set('ca-state');
    this.filterStatus.set('open');
    this.filterAssignee.set('any');
    this.filterPriority.set('p2');
    this.segment.set('month');
    this.tagModel.set('tags');
    this.optionEditorValue.set('us');
    this.multiValues.set(['us', 'ca']);
    this.editingOptionId.set(null);
    this.editingOptionDraft.set('');
    this.inlineEditingId.set(null);
    this.inlineEditingDraft.set('');
    this.iconSide.set('left');
    this.iconKind.set('none');
    this.selectedRecipeGroup.set('Core');
    this.themeService.setTheme('light');
  }

  pick(id: string): void {
    this.previewValue.set(id);
  }

  onPreviewModelChange(value: string): void {
    if (this.previewRecipe() === 'tagMulti') {
      this.previewValue.set(value);
    } else {
      this.previewValue.set(value);
    }
  }

  previewModelValue(): string {
    if (this.previewRecipe() === 'tagMulti') {
      return this.multiValues()[0] ?? '';
    }
    return this.previewValue();
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
    } else if (v === 'multiSelect' || v === 'multiSelectCheckboxCount') {
      this.selectionMode.set('multi');
      this.multiValues.set(['us', 'ca']);
    } else if (v === 'tagMulti') {
      this.selectionMode.set('multi');
      this.multiValues.set(['us', 'ca']);
      this.previewValue.set('us');
    } else if (v !== 'commandPalette') {
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

  onTextOverflowChange(ev: Event): void {
    this.textOverflow.set((ev.target as HTMLSelectElement).value as SelectTextOverflow);
  }

  onSelectionModeChange(ev: Event): void {
    const next = (ev.target as HTMLSelectElement).value as SelectSelectionMode;
    this.selectionMode.set(next);
    if (next === 'single') {
      this.previewValue.set(this.multiValues()[0] ?? this.editableOptions()[0]?.id ?? '');
    }
  }

  onActionButtonCountChange(ev: Event): void {
    const n = Number((ev.target as HTMLSelectElement).value);
    this.actionButtonCount.set(Number.isFinite(n) ? Math.min(5, Math.max(1, n)) : 2);
  }

  onIconSideChange(ev: Event): void {
    this.iconSide.set((ev.target as HTMLSelectElement).value as IconSide);
  }

  onIconKindChange(ev: Event): void {
    this.iconKind.set((ev.target as HTMLSelectElement).value as BrightrailButtonIcon);
  }

  toggleMultiValue(id: string): void {
    this.multiValues.update((selected) =>
      selected.includes(id) ? selected.filter((v) => v !== id) : [...selected, id],
    );
  }

  beginEditOption(id: string): void {
    const hit = this.editableOptions().find((o) => o.id === id);
    this.editingOptionId.set(id);
    this.editingOptionDraft.set(hit?.label ?? '');
    this.inlineEditingId.set(null);
  }

  saveOptionLabel(id: string): void {
    const next = this.editingOptionDraft().trim();
    if (!next) return;
    this.editableOptions.update((items) =>
      items.map((o) => (o.id === id ? { ...o, label: next } : o)),
    );
    this.editingOptionId.set(null);
  }

  deleteOption(id: string): void {
    this.editableOptions.update((items) => items.filter((o) => o.id !== id));
    if (this.optionEditorValue() === id) {
      this.optionEditorValue.set(this.editableOptions()[0]?.id ?? '');
    }
    if (this.editingOptionId() === id) {
      this.editingOptionId.set(null);
    }
  }

  beginInlineEdit(id: string): void {
    const hit = this.editableOptions().find((o) => o.id === id);
    this.inlineEditingId.set(id);
    this.inlineEditingDraft.set(hit?.label ?? '');
    this.editingOptionId.set(null);
  }

  saveInlineEdit(id: string): void {
    const next = this.inlineEditingDraft().trim();
    if (!next) return;
    this.editableOptions.update((items) =>
      items.map((o) => (o.id === id ? { ...o, label: next } : o)),
    );
    this.inlineEditingId.set(null);
  }

  cancelInlineEdit(): void {
    this.inlineEditingId.set(null);
  }

  inlineActionLabels(): string[] {
    const base = ['Save', 'Delete', 'Archive', 'Clone', 'Assign'];
    return base.slice(0, this.actionButtonCount());
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
      case 'optionEditSave':
        return [
          '<brightrail-select ... [(ngModel)]="selectedId">',
          '  <div class="br-select-panel demo-sel-panel">',
          '    <div class="sel-opt-row">',
          '      <span class="br-select-option">United States</span>',
          '      <button type="button">Edit</button><button type="button">Save</button><button type="button">Delete</button>',
          '    </div>',
          '    <!-- Repeat rows / wire save + delete to your data source -->',
          '  </div>',
          '</brightrail-select>',
        ].join('\n');
      case 'inlineEditActions':
        return [
          '<div class="sel-inline-actions">',
          '  <div class="sel-opt-row">',
          '    <span class="br-select-option" (dblclick)="beginInlineEdit(row.id)">Canada</span>',
          '    <div class="sel-opt-actions">',
          '      <button type="button">Save</button>',
          '      <button type="button">Delete</button>',
          '      <!-- Add N actions via ngFor -->',
          '    </div>',
          '  </div>',
          '</div>',
        ].join('\n');
      case 'multiSelect':
        return [
          '<brightrail-select ... [displayText]="selectedLabels.join(\', \')" [ariaLabel]="\'Countries\'">',
          '  <span class="br-select-value-slot sel-tag-row">',
          '    <span class="sel-tag-pill" *ngFor="let id of selectedIds">{{ labelFor(id) }}</span>',
          '  </span>',
          '  <div class="br-select-panel demo-sel-panel">',
          '    <button type="button" class="demo-sel-panel__opt br-select-option" (click)="toggleMultiValue(\'us\')">United States</button>',
          '  </div>',
          '</brightrail-select>',
        ].join('\n');
      case 'multiSelectCheckboxCount':
        return [
          '<brightrail-select ... [displayText]="`Countries (${selectedIds.length} selected)`">',
          '  <div class="br-select-panel demo-sel-panel">',
          '    <label class="sel-check-opt" *ngFor="let opt of options">',
          '      <input type="checkbox" [checked]="selectedIds.includes(opt.id)" (change)="toggleMultiValue(opt.id)" />',
          '      <span>{{ opt.label }}</span>',
          '    </label>',
          '  </div>',
          '</brightrail-select>',
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
    const needsButtons = r === 'selectPlusAction' || r === 'segmented';
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

    if (r === 'optionEditSave') {
      return [
        ...imports,
        '',
        `editableOptions = [`,
        `  { id: 'us', label: 'United States' },`,
        `  { id: 'ca', label: 'Canada' },`,
        `];`,
        `selectedId = 'us';`,
        `editingId: string | null = null;`,
        `editingDraft = '';`,
        '',
        `beginEditOption(id: string): void {`,
        `  this.editingId = id;`,
        `  this.editingDraft = this.editableOptions.find((o) => o.id === id)?.label ?? '';`,
        `}`,
        '',
        `saveOptionLabel(id: string): void {`,
        `  const next = this.editingDraft.trim();`,
        `  if (!next) return;`,
        `  this.editableOptions = this.editableOptions.map((o) =>`,
        `    o.id === id ? { ...o, label: next } : o,`,
        `  );`,
        `  this.editingId = null;`,
        `}`,
        '',
        `deleteOption(id: string): void {`,
        `  this.editableOptions = this.editableOptions.filter((o) => o.id !== id);`,
        `  if (this.selectedId === id) {`,
        `    this.selectedId = this.editableOptions[0]?.id ?? '';`,
        `  }`,
        `  if (this.editingId === id) this.editingId = null;`,
        `}`,
      ].join('\n');
    }

    if (r === 'inlineEditActions') {
      return [
        ...imports,
        '',
        `rows = [`,
        `  { id: 'ca', label: 'Canada' },`,
        `  { id: 'mx', label: 'Mexico' },`,
        `];`,
        `actionButtonCount = 3; // any number`,
        `inlineEditingId: string | null = null;`,
        `inlineEditingDraft = '';`,
        '',
        `inlineActionLabels(): string[] {`,
        `  const base = ['Save', 'Delete', 'Archive', 'Clone', 'Assign'];`,
        `  return base.slice(0, this.actionButtonCount);`,
        `}`,
        '',
        `beginInlineEdit(id: string): void {`,
        `  this.inlineEditingId = id;`,
        `  this.inlineEditingDraft = this.rows.find((r) => r.id === id)?.label ?? '';`,
        `}`,
        '',
        `saveInlineEdit(id: string): void {`,
        `  const next = this.inlineEditingDraft.trim();`,
        `  if (!next) return;`,
        `  this.rows = this.rows.map((r) => (r.id === id ? { ...r, label: next } : r));`,
        `  this.inlineEditingId = null;`,
        `}`,
        '',
        `deleteInlineRow(id: string): void {`,
        `  this.rows = this.rows.filter((r) => r.id !== id);`,
        `}`,
      ].join('\n');
    }

    if (r === 'multiSelect') {
      return [
        ...imports,
        '',
        `selectedIds: string[] = ['us', 'ca'];`,
        `options = [`,
        `  { id: 'us', label: 'United States' },`,
        `  { id: 'ca', label: 'Canada' },`,
        `  { id: 'mx', label: 'Mexico' },`,
        `];`,
        '',
        `toggleMultiValue(id: string): void {`,
        `  this.selectedIds = this.selectedIds.includes(id)`,
        `    ? this.selectedIds.filter((v) => v !== id)`,
        `    : [...this.selectedIds, id];`,
        `}`,
      ].join('\n');
    }

    if (r === 'multiSelectCheckboxCount') {
      return [
        ...imports,
        '',
        `selectedIds: string[] = ['us', 'ca'];`,
        `options = [`,
        `  { id: 'us', label: 'United States' },`,
        `  { id: 'ca', label: 'Canada' },`,
        `  { id: 'mx', label: 'Mexico' },`,
        `];`,
        '',
        `displayText = \`Countries (\${this.selectedIds.length} selected)\`;`,
        '',
        `toggleMultiValue(id: string): void {`,
        `  this.selectedIds = this.selectedIds.includes(id)`,
        `    ? this.selectedIds.filter((v) => v !== id)`,
        `    : [...this.selectedIds, id];`,
        `}`,
      ].join('\n');
    }

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
    lines.push(`  textOverflow="${this.textOverflow()}"`);
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
        `    <button type="button" class="demo-sel-panel__opt br-select-option" (click)="selectCountry('${escapeForJsString(opt.id)}')">${escapeHtmlText(opt.label)}</button>`,
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
