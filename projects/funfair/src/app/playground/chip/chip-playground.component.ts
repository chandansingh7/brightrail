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
  BrightrailButtonIcon,
  BrightrailChipColor,
  BrightrailChipComponent,
  BrightrailChipSize,
  BrightrailChipState,
  BrightrailChipVariant,
} from 'brightrail';

import { PlaygroundThemeId, PlaygroundThemeService } from '../playground-theme.service';

type CodeTabId = 'html' | 'ts' | 'scss';
type ChipRecipe =
  | 'status-filled'
  | 'filter-selected'
  | 'action'
  | 'link'
  | 'removable'
  | 'icon'
  | 'avatar'
  | 'enterprise-workflow'
  | 'advanced-overflow';

@Component({
  selector: 'app-chip-playground',
  standalone: true,
  imports: [
    PlaygroundPreviewHeaderComponent,FormsModule, BrightrailChipComponent],
  templateUrl: './chip-playground.component.html',
  styleUrl: './chip-playground.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ChipPlaygroundComponent {
  readonly previewOnly = injectPlaygroundA11yPreviewMode();
  readonly a11yPreviewState = computed(() =>
    snapshotPlaygroundState({
      previewRecipe: () => this.previewRecipe(),
      variant: () => this.variant(),
      color: () => this.color(),
      size: () => this.size(),
      state: () => this.state(),
      label: () => this.label(),
      icon: () => this.icon(),
      removable: () => this.removable(),
      selectable: () => this.selectable(),
      selected: () => this.selected(),
      avatarText: () => this.avatarText(),
      adjacentText: () => this.adjacentText(),
    }),
  );

  constructor() {
    initPlaygroundA11yPreview('chip', this.previewOnly, (state) =>
      this.restoreA11yPreviewState(state),
    );
  }
  private restoreA11yPreviewState(state: unknown): void {
    if (!state || typeof state !== 'object') {
      return;
    }
    const snapshot = state as Record<string, unknown>;
    if (typeof snapshot['previewRecipe'] === 'string') {
      this.applyRecipe(snapshot['previewRecipe'] as ChipRecipe);
      return;
    }
    restorePlaygroundState(state, {
      previewRecipe: this.previewRecipe as WritableSignal<unknown>,
      variant: this.variant as WritableSignal<unknown>,
      color: this.color as WritableSignal<unknown>,
      size: this.size as WritableSignal<unknown>,
      state: this.state as WritableSignal<unknown>,
      label: this.label as WritableSignal<unknown>,
      icon: this.icon as WritableSignal<unknown>,
      removable: this.removable as WritableSignal<unknown>,
      selectable: this.selectable as WritableSignal<unknown>,
      selected: this.selected as WritableSignal<unknown>,
      avatarText: this.avatarText as WritableSignal<unknown>,
      adjacentText: this.adjacentText as WritableSignal<unknown>,
    });
  }

  readonly themeService = inject(PlaygroundThemeService);

  readonly recipeGroups = ['Status', 'Interactive', 'Enterprise', 'Advanced'] as const;
  readonly recipeOptions: { value: ChipRecipe; label: string; group: string }[] = [
    { value: 'status-filled', label: 'Filled status chip', group: 'Status' },
    { value: 'filter-selected', label: 'Filter selected chip', group: 'Status' },
    { value: 'action', label: 'Action chip', group: 'Interactive' },
    { value: 'link', label: 'Link chip', group: 'Interactive' },
    { value: 'removable', label: 'Removable chip', group: 'Interactive' },
    { value: 'icon', label: 'Icon chip', group: 'Interactive' },
    { value: 'avatar', label: 'Avatar chip', group: 'Interactive' },
    { value: 'enterprise-workflow', label: 'Workflow chip', group: 'Enterprise' },
    { value: 'advanced-overflow', label: 'Overflow chip (+n)', group: 'Advanced' },
  ];

  readonly variantOptions: BrightrailChipVariant[] = ['filled', 'outlined', 'soft', 'text'];
  readonly colorOptions: BrightrailChipColor[] = [
    'primary',
    'success',
    'warning',
    'danger',
    'critical',
    'info',
    'neutral',
  ];
  readonly sizeOptions: BrightrailChipSize[] = ['small', 'medium', 'large', 'compact'];
  readonly stateOptions: BrightrailChipState[] = ['default', 'hover', 'focused', 'disabled'];
  readonly iconOptions: BrightrailButtonIcon[] = ['none', 'check', 'info', 'warning', 'close'];
  readonly yesNoOptions = [
    { value: 'no', label: 'No' },
    { value: 'yes', label: 'Yes' },
  ] as const;
  readonly themeRowOptions: { id: PlaygroundThemeId; label: string }[] = [
    { id: 'light', label: 'Material light' },
    { id: 'dark', label: 'Material dark' },
  ];

  readonly selectedRecipeGroup = signal<string>('Status');
  readonly previewRecipe = signal<ChipRecipe>('status-filled');
  readonly variant = signal<BrightrailChipVariant>('filled');
  readonly color = signal<BrightrailChipColor>('success');
  readonly size = signal<BrightrailChipSize>('medium');
  readonly state = signal<BrightrailChipState>('default');
  readonly label = signal('Active');
  readonly icon = signal<BrightrailButtonIcon>('check');
  readonly removable = signal(false);
  readonly selectable = signal(false);
  readonly selected = signal(false);
  readonly avatarText = signal('');
  readonly adjacentText = signal('');
  readonly activeTab = signal<CodeTabId>('html');

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

  recipesInGroup(group: string): { value: ChipRecipe; label: string }[] {
    return this.recipeOptions.filter((r) => r.group === group).map((r) => ({ value: r.value, label: r.label }));
  }

  onRecipeGroupNgModelChange(v: string): void {
    this.selectedRecipeGroup.set(v);
    const first = this.recipesInGroup(v)[0]?.value;
    if (first) this.onRecipeNgModelChange(first);
  }

  onRecipeNgModelChange(v: string): void {
    const recipe = v as ChipRecipe;
    this.previewRecipe.set(recipe);
    this.applyRecipe(recipe);
  }

  applyRecipe(recipe: ChipRecipe): void {
    this.adjacentText.set('');
    switch (recipe) {
      case 'status-filled':
        this.variant.set('filled');
        this.color.set('success');
        this.size.set('medium');
        this.state.set('default');
        this.label.set('Active');
        this.icon.set('check');
        this.removable.set(false);
        this.selectable.set(false);
        this.selected.set(false);
        this.avatarText.set('');
        break;
      case 'filter-selected':
        this.variant.set('filled');
        this.color.set('primary');
        this.size.set('small');
        this.state.set('default');
        this.label.set('Active');
        this.icon.set('none');
        this.removable.set(false);
        this.selectable.set(true);
        this.selected.set(true);
        this.avatarText.set('');
        break;
      case 'action':
        this.variant.set('outlined');
        this.color.set('neutral');
        this.size.set('medium');
        this.state.set('default');
        this.label.set('Share');
        this.icon.set('info');
        this.removable.set(false);
        this.selectable.set(false);
        this.selected.set(false);
        this.avatarText.set('');
        break;
      case 'link':
        this.variant.set('text');
        this.color.set('primary');
        this.size.set('medium');
        this.state.set('default');
        this.label.set('View docs');
        this.icon.set('none');
        this.removable.set(false);
        this.selectable.set(false);
        this.selected.set(false);
        this.avatarText.set('');
        break;
      case 'removable':
        this.variant.set('outlined');
        this.color.set('primary');
        this.size.set('medium');
        this.state.set('default');
        this.label.set('Marketing');
        this.icon.set('none');
        this.removable.set(true);
        this.selectable.set(false);
        this.selected.set(false);
        this.avatarText.set('');
        break;
      case 'icon':
        this.variant.set('outlined');
        this.color.set('neutral');
        this.size.set('medium');
        this.state.set('default');
        this.label.set('Docs');
        this.icon.set('info');
        this.removable.set(false);
        this.selectable.set(false);
        this.selected.set(false);
        this.avatarText.set('');
        break;
      case 'avatar':
        this.variant.set('soft');
        this.color.set('neutral');
        this.size.set('medium');
        this.state.set('default');
        this.label.set('James');
        this.icon.set('none');
        this.removable.set(false);
        this.selectable.set(false);
        this.selected.set(false);
        this.avatarText.set('JN');
        break;
      case 'enterprise-workflow':
        this.variant.set('soft');
        this.color.set('critical');
        this.size.set('small');
        this.state.set('default');
        this.label.set('Rejected');
        this.icon.set('none');
        this.removable.set(false);
        this.selectable.set(false);
        this.selected.set(false);
        this.avatarText.set('');
        this.adjacentText.set('Workflow');
        break;
      case 'advanced-overflow':
        this.variant.set('outlined');
        this.color.set('neutral');
        this.size.set('small');
        this.state.set('default');
        this.label.set('+3');
        this.icon.set('none');
        this.removable.set(false);
        this.selectable.set(false);
        this.selected.set(false);
        this.avatarText.set('');
        break;
    }
  }

  resetToDefaults(): void {
    this.selectedRecipeGroup.set('Status');
    this.previewRecipe.set('status-filled');
    this.applyRecipe('status-filled');
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
    const lines = [
      '<brightrail-chip',
      `  variant="${this.variant()}"`,
      `  color="${this.color()}"`,
      `  size="${this.size()}"`,
      `  state="${this.state()}"`,
      `  label="${this.label()}"`,
    ];
    if (this.icon() !== 'none') lines.push(`  icon="${this.icon()}"`);
    if (this.removable()) lines.push('  [removable]="true"');
    if (this.selectable()) lines.push('  [selectable]="true"');
    if (this.selected()) lines.push('  [selected]="true"');
    if (this.avatarText().trim().length > 0) lines.push(`  avatarText="${this.avatarText()}"`);
    lines.push('/>');
    const adjacent = this.adjacentText().trim();
    if (!adjacent) return lines.join('\n');
    return ['<span class="chip-with-context">', ...lines.map((l) => `  ${l}`), `  <span>${adjacent}</span>`, '</span>'].join('\n');
  }

  private buildTs(): string {
    return [
      "import { BrightrailChipComponent } from 'brightrail';",
      '',
      '// imports: [BrightrailChipComponent]',
      "onChipRemove(): void { console.info('Chip removed'); }",
    ].join('\n');
  }

  private buildScss(): string {
    return [
      '.chip-with-context {',
      '  display: inline-flex;',
      '  align-items: center;',
      '  gap: 0.35rem;',
      '}',
    ].join('\n');
  }
}
