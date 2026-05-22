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
  BrightrailSkeletonAnimation,
  BrightrailSkeletonComponent,
  BrightrailSkeletonVariant,
} from 'brightrail';

import { PlaygroundThemeId, PlaygroundThemeService } from '../playground-theme.service';
import { createPlaygroundPreviewFx } from '../shared/playground-fx.util';
import { PlaygroundFxSettingsComponent } from '../shared/playground-fx-settings.component';

type CodeTabId = 'html' | 'ts' | 'scss';

type SkeletonRecipe =
  | 'core-text'
  | 'core-circular'
  | 'core-rectangular'
  | 'core-rounded'
  | 'anim-pulse'
  | 'anim-wave'
  | 'anim-none'
  | 'lines-multi'
  | 'size-avatar'
  | 'size-banner'
  | 'pattern-list'
  | 'pattern-card'
  | 'advanced-table';

@Component({
  selector: 'app-skeleton-playground',
  standalone: true,
  imports: [
    PlaygroundPreviewHeaderComponent,FormsModule, BrightrailSkeletonComponent, PlaygroundFxSettingsComponent],
  templateUrl: './skeleton-playground.component.html',
  styleUrl: './skeleton-playground.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SkeletonPlaygroundComponent {
  readonly previewOnly = injectPlaygroundA11yPreviewMode();
  readonly a11yPreviewState = computed(() =>
    snapshotPlaygroundState({
      recipe: () => this.recipe(),
      variant: () => this.variant(),
      animation: () => this.animation(),
      lines: () => this.lines(),
      width: () => this.width(),
      height: () => this.height(),
    }),
  );

  constructor() {
    initPlaygroundA11yPreview('skeleton', this.previewOnly, (state) =>
      this.restoreA11yPreviewState(state),
    );
  }
  private restoreA11yPreviewState(state: unknown): void {
    if (!state || typeof state !== 'object') {
      return;
    }
    const snapshot = state as Record<string, unknown>;
    
    restorePlaygroundState(state, {
      recipe: this.recipe as WritableSignal<unknown>,
      variant: this.variant as WritableSignal<unknown>,
      animation: this.animation as WritableSignal<unknown>,
      lines: this.lines as WritableSignal<unknown>,
      width: this.width as WritableSignal<unknown>,
      height: this.height as WritableSignal<unknown>,
    });
  }

  readonly themeService = inject(PlaygroundThemeService);
  private readonly _playgroundFx = createPlaygroundPreviewFx();
  readonly previewFx = this._playgroundFx.previewFx;
  readonly resolvedFxShell = this._playgroundFx.resolvedFxShell;
  readonly ngModelStandalone = { standalone: true };

  readonly recipeGroups = ['Basics', 'Animation', 'Layout', 'Patterns', 'Advanced'] as const;

  readonly recipeOptions: { value: SkeletonRecipe; label: string; group: string }[] = [
    { value: 'core-text', label: 'Text line', group: 'Basics' },
    { value: 'core-circular', label: 'Circular (avatar)', group: 'Basics' },
    { value: 'core-rectangular', label: 'Rectangular block', group: 'Basics' },
    { value: 'core-rounded', label: 'Rounded pill', group: 'Basics' },
    { value: 'anim-pulse', label: 'Pulse animation', group: 'Animation' },
    { value: 'anim-wave', label: 'Wave animation', group: 'Animation' },
    { value: 'anim-none', label: 'No animation', group: 'Animation' },
    { value: 'lines-multi', label: 'Multiline text', group: 'Layout' },
    { value: 'size-avatar', label: 'Custom avatar size', group: 'Layout' },
    { value: 'size-banner', label: 'Banner block', group: 'Layout' },
    { value: 'pattern-list', label: 'List row', group: 'Patterns' },
    { value: 'pattern-card', label: 'Card placeholder', group: 'Patterns' },
    { value: 'advanced-table', label: 'Table rows', group: 'Advanced' },
  ];

  readonly themeRowOptions: { id: PlaygroundThemeId; label: string }[] = [
    { id: 'light', label: 'Material light' },
    { id: 'dark', label: 'Material dark' },
  ];

  readonly variantOptions: BrightrailSkeletonVariant[] = ['text', 'circular', 'rectangular', 'rounded'];
  readonly animationOptions: BrightrailSkeletonAnimation[] = ['pulse', 'wave', 'none'];

  readonly selectedRecipeGroup = signal<string>('Basics');
  readonly recipe = signal<SkeletonRecipe>('core-text');

  readonly variant = signal<BrightrailSkeletonVariant>('text');
  readonly animation = signal<BrightrailSkeletonAnimation>('wave');
  readonly lines = signal(1);
  readonly width = signal('');
  readonly height = signal('');

  readonly activeTab = signal<CodeTabId>('html');

  readonly showListPattern = computed(() => this.recipe() === 'pattern-list');
  readonly showCardPattern = computed(() => this.recipe() === 'pattern-card');
  readonly showTablePattern = computed(() => this.recipe() === 'advanced-table');
  readonly showSingleSkeleton = computed(
    () => !this.showListPattern() && !this.showCardPattern() && !this.showTablePattern(),
  );

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

  recipesInGroup(group: string): { value: SkeletonRecipe; label: string }[] {
    return this.recipeOptions.filter((r) => r.group === group).map((r) => ({ value: r.value, label: r.label }));
  }

  onRecipeGroupNgModelChange(v: string): void {
    this.selectedRecipeGroup.set(v);
    const next = this.recipesInGroup(v)[0]?.value;
    if (next) this.onRecipeNgModelChange(next);
  }

  onRecipeNgModelChange(v: string): void {
    const recipe = v as SkeletonRecipe;
    this.recipe.set(recipe);
    this.applyRecipe(recipe);
  }

  applyRecipe(recipe: SkeletonRecipe): void {
    this.variant.set('text');
    this.animation.set('wave');
    this.lines.set(1);
    this.width.set('');
    this.height.set('');

    if (recipe === 'core-circular') this.variant.set('circular');
    else if (recipe === 'core-rectangular') this.variant.set('rectangular');
    else if (recipe === 'core-rounded') this.variant.set('rounded');
    else if (recipe === 'anim-pulse') this.animation.set('pulse');
    else if (recipe === 'anim-wave') this.animation.set('wave');
    else if (recipe === 'anim-none') this.animation.set('none');
    else if (recipe === 'lines-multi') {
      this.variant.set('text');
      this.lines.set(3);
    } else if (recipe === 'size-avatar') {
      this.variant.set('circular');
      this.width.set('3rem');
      this.height.set('3rem');
    } else if (recipe === 'size-banner') {
      this.variant.set('rectangular');
      this.width.set('100%');
      this.height.set('8rem');
    }
  }

  resetToDefaults(): void {
    this.previewFx.set('inherit');
    this.selectedRecipeGroup.set('Basics');
    this.onRecipeNgModelChange('core-text');
  }

  widthBinding(): string | undefined {
    const w = this.width().trim();
    return w.length ? w : undefined;
  }

  heightBinding(): string | undefined {
    const h = this.height().trim();
    return h.length ? h : undefined;
  }

  buildHtml(): string {
    if (this.recipe() === 'pattern-list') {
      return `<!-- Recipe: ${this.recipe()} -->
<div class="skel-row">
  <brightrail-skeleton variant="circular" width="2.5rem" height="2.5rem" animation="${this.animation()}" />
  <div class="skel-row__copy">
    <brightrail-skeleton variant="text" width="40%" animation="${this.animation()}" />
    <brightrail-skeleton variant="text" width="70%" animation="${this.animation()}" />
  </div>
</div>`;
    }
    if (this.recipe() === 'pattern-card') {
      return `<!-- Recipe: ${this.recipe()} -->
<div class="skel-card">
  <brightrail-skeleton variant="rectangular" width="100%" height="6rem" animation="${this.animation()}" />
  <brightrail-skeleton variant="text" [lines]="2" animation="${this.animation()}" />
</div>`;
    }
    if (this.recipe() === 'advanced-table') {
      return `<!-- Recipe: ${this.recipe()} -->
<div class="skel-table">
  <div class="skel-table__row">
    <brightrail-skeleton variant="text" width="18%" animation="${this.animation()}" />
    <brightrail-skeleton variant="text" width="32%" animation="${this.animation()}" />
    <brightrail-skeleton variant="text" width="24%" animation="${this.animation()}" />
  </div>
</div>`;
    }

    const w = this.widthBinding();
    const h = this.heightBinding();
    const wLine = w ? `\n  width="${w}"` : '';
    const hLine = h ? `\n  height="${h}"` : '';
    const linesLine = this.variant() === 'text' && this.lines() > 1 ? `\n  [lines]="${this.lines()}"` : '';

    return `<!-- Recipe: ${this.recipe()} -->
<brightrail-skeleton
  variant="${this.variant()}"
  animation="${this.animation()}"${wLine}${hLine}${linesLine} />`;
  }

  buildTs(): string {
    return `// Recipe: ${this.recipe()}
import { Component } from '@angular/core';
import { BrightrailSkeletonComponent } from 'brightrail';

@Component({
  selector: 'app-example',
  standalone: true,
  imports: [BrightrailSkeletonComponent],
  templateUrl: './example.component.html',
})
export class ExampleComponent {}`;
  }

  buildScss(): string {
    return `/* Skeleton layout helpers */
.skel-row {
  display: flex;
  gap: 0.75rem;
  align-items: center;
}

.skel-row__copy {
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 0.35rem;
}`;
  }

  selectTab(tab: CodeTabId): void {
    this.activeTab.set(tab);
  }

  copySnippet(): void {
    void navigator.clipboard?.writeText(this.activeSnippet());
  }
}
