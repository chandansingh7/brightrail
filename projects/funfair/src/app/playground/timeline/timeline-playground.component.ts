import { ChangeDetectionStrategy, Component, computed, inject, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {
  BrightrailTimelineComponent,
  BrightrailTimelineItemComponent,
  BrightrailTimelineItemStatus,
} from 'brightrail';

import { PlaygroundThemeId, PlaygroundThemeService } from '../playground-theme.service';

type CodeTabId = 'html' | 'ts' | 'scss';

type TimelineRecipe =
  | 'core-workflow'
  | 'status-completed'
  | 'status-current'
  | 'status-error'
  | 'audit-trail'
  | 'minimal'
  | 'mixed';

@Component({
  selector: 'app-timeline-playground',
  standalone: true,
  imports: [FormsModule, BrightrailTimelineComponent, BrightrailTimelineItemComponent],
  templateUrl: './timeline-playground.component.html',
  styleUrl: './timeline-playground.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TimelinePlaygroundComponent {
  readonly themeService = inject(PlaygroundThemeService);
  readonly ngModelStandalone = { standalone: true };

  readonly recipeGroups = ['Basics', 'Statuses', 'Enterprise', 'Advanced'] as const;

  readonly recipeOptions: { value: TimelineRecipe; label: string; group: string }[] = [
    { value: 'core-workflow', label: 'Deployment workflow', group: 'Basics' },
    { value: 'status-completed', label: 'Completed step', group: 'Statuses' },
    { value: 'status-current', label: 'Current step', group: 'Statuses' },
    { value: 'status-error', label: 'Error step', group: 'Statuses' },
    { value: 'audit-trail', label: 'Audit trail', group: 'Enterprise' },
    { value: 'minimal', label: 'Single item', group: 'Advanced' },
    { value: 'mixed', label: 'Mixed statuses', group: 'Advanced' },
  ];

  readonly themeRowOptions: { id: PlaygroundThemeId; label: string }[] = [
    { id: 'light', label: 'Material light' },
    { id: 'dark', label: 'Material dark' },
  ];

  readonly statusOptions: BrightrailTimelineItemStatus[] = [
    'completed',
    'current',
    'pending',
    'error',
  ];

  readonly selectedRecipeGroup = signal<string>('Basics');
  readonly recipe = signal<TimelineRecipe>('core-workflow');

  readonly ariaLabel = signal('Timeline');
  readonly showWorkflow = signal(true);
  readonly showAudit = signal(false);
  readonly showMixed = signal(false);
  readonly showMinimal = signal(false);
  readonly itemTitle = signal('Build started');
  readonly itemDescription = signal('CI pipeline #4821');
  readonly itemStatus = signal<BrightrailTimelineItemStatus>('completed');

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

  recipesInGroup(group: string): { value: TimelineRecipe; label: string }[] {
    return this.recipeOptions.filter((r) => r.group === group).map((r) => ({ value: r.value, label: r.label }));
  }

  onRecipeGroupNgModelChange(v: string): void {
    this.selectedRecipeGroup.set(v);
    const next = this.recipesInGroup(v)[0]?.value;
    if (next) this.onRecipeNgModelChange(next);
  }

  onRecipeNgModelChange(v: string): void {
    const next = v as TimelineRecipe;
    this.recipe.set(next);
    this.applyRecipe(next);
  }

  applyRecipe(recipe: TimelineRecipe): void {
    this.showWorkflow.set(false);
    this.showAudit.set(false);
    this.showMixed.set(false);
    this.showMinimal.set(false);
    this.ariaLabel.set('Timeline');

    switch (recipe) {
      case 'core-workflow':
        this.showWorkflow.set(true);
        this.ariaLabel.set('Deployment progress');
        break;
      case 'status-completed':
        this.showMinimal.set(true);
        this.itemTitle.set('Payment received');
        this.itemDescription.set('Invoice #1042');
        this.itemStatus.set('completed');
        break;
      case 'status-current':
        this.showMinimal.set(true);
        this.itemTitle.set('Under review');
        this.itemDescription.set('Compliance team');
        this.itemStatus.set('current');
        break;
      case 'status-error':
        this.showMinimal.set(true);
        this.itemTitle.set('Upload failed');
        this.itemDescription.set('Retry or contact support');
        this.itemStatus.set('error');
        break;
      case 'audit-trail':
        this.showAudit.set(true);
        this.ariaLabel.set('Audit trail');
        break;
      case 'minimal':
        this.showMinimal.set(true);
        this.itemTitle.set('Account created');
        this.itemDescription.set('');
        this.itemStatus.set('completed');
        break;
      case 'mixed':
        this.showMixed.set(true);
        break;
    }
  }

  resetToDefaults(): void {
    this.selectedRecipeGroup.set('Basics');
    this.onRecipeNgModelChange('core-workflow');
    this.themeService.setTheme('light');
    this.activeTab.set('html');
  }

  buildHtml(): string {
    return `<!-- Recipe: ${this.recipe()} -->
<brightrail-timeline ariaLabel="${this.ariaLabel()}">
  <brightrail-timeline-item
    title="${this.itemTitle()}"
    description="${this.itemDescription()}"
    status="${this.itemStatus()}"
  />
</brightrail-timeline>`;
  }

  buildTs(): string {
    return `// Recipe: ${this.recipe()}
import { Component } from '@angular/core';
import {
  BrightrailTimelineComponent,
  BrightrailTimelineItemComponent,
} from 'brightrail';

@Component({
  selector: 'app-example',
  standalone: true,
  imports: [BrightrailTimelineComponent, BrightrailTimelineItemComponent],
  templateUrl: './example.component.html',
})
export class ExampleComponent {}`;
  }

  buildScss(): string {
    return `/* Constrain timeline width in detail panels */
.timeline-panel {
  max-width: 22rem;
}`;
  }

  selectTab(tab: CodeTabId): void {
    this.activeTab.set(tab);
  }

  copySnippet(): void {
    void navigator.clipboard?.writeText(this.activeSnippet());
  }
}
