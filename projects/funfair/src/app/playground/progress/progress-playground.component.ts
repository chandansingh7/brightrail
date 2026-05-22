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
  BrightrailProgressComponent,
  BrightrailProgressFileRowComponent,
  BrightrailProgressMode,
  BrightrailProgressSize,
  BrightrailProgressStatusColor,
  BrightrailProgressSurface,
  BrightrailProgressTrackStyle,
  BrightrailProgressType,
  BrightrailProgressVariant,
  BrightrailStepComponent,
  BrightrailStepperComponent,
} from 'brightrail';

import { PlaygroundThemeId, PlaygroundThemeService } from '../playground-theme.service';
import { createPlaygroundPreviewFx } from '../shared/playground-fx.util';
import { PlaygroundFxSettingsComponent } from '../shared/playground-fx-settings.component';

type CodeTabId = 'html' | 'ts' | 'scss';

type ProgressRecipe =
  | 'linear-core'
  | 'linear-tones'
  | 'circular-sizes'
  | 'circular-kpi'
  | 'mode-indeterminate'
  | 'mode-buffer'
  | 'mode-query'
  | 'step-milestone'
  | 'step-workflow'
  | 'file-upload'
  | 'table-inline'
  | 'kpi-dashboard'
  | 'futuristic-ring'
  | 'futuristic-glass'
  | 'futuristic-neon-arc'
  | 'futuristic-mini-card';

type PreviewPanel = 'progress' | 'stepper' | 'files' | 'table' | 'kpi';

type FileRowSampleId = 'complete' | 'active' | 'paused' | 'queued';

type KpiCardSampleId = 'revenue' | 'resource' | 'sla' | 'nps';

type TableRowSampleId = 'requirements' | 'uiux' | 'api' | 'testing' | 'deployment';

@Component({
  selector: 'app-progress-playground',
  standalone: true,
  imports: [
    PlaygroundPreviewHeaderComponent,
    FormsModule,
    BrightrailProgressComponent,
    BrightrailStepperComponent,
    BrightrailStepComponent,
    BrightrailProgressFileRowComponent, PlaygroundFxSettingsComponent],
  templateUrl: './progress-playground.component.html',
  styleUrl: './progress-playground.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProgressPlaygroundComponent {
  readonly previewOnly = injectPlaygroundA11yPreviewMode();
  readonly a11yPreviewState = computed(() =>
    snapshotPlaygroundState({
      recipe: () => this.recipe(),
      type: () => this.type(),
      variant: () => this.variant(),
      mode: () => this.mode(),
      indeterminate: () => this.indeterminate(),
      buffer: () => this.buffer(),
      value: () => this.value(),
      bufferValue: () => this.bufferValue(),
      size: () => this.size(),
      label: () => this.label(),
      detailText: () => this.detailText(),
      kpiTitle: () => this.kpiTitle(),
      kpiStatus: () => this.kpiStatus(),
      etaText: () => this.etaText(),
      showLabel: () => this.showLabel(),
      showPercentage: () => this.showPercentage(),
      showRingCompleteIcon: () => this.showRingCompleteIcon(),
      trackStyle: () => this.trackStyle(),
      statusColor: () => this.statusColor(),
      surface: () => this.surface(),
      compactCardPlate: () => this.compactCardPlate(),
      canvasBackground: () => this.canvasBackground(),
      activeStep: () => this.activeStep(),
      fileRowSample: () => this.fileRowSample(),
      kpiCardSample: () => this.kpiCardSample(),
      tableRowSample: () => this.tableRowSample(),
    }),
  );

  constructor() {
    initPlaygroundA11yPreview('progress', this.previewOnly, (state) =>
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
      type: this.type as WritableSignal<unknown>,
      variant: this.variant as WritableSignal<unknown>,
      mode: this.mode as WritableSignal<unknown>,
      indeterminate: this.indeterminate as WritableSignal<unknown>,
      buffer: this.buffer as WritableSignal<unknown>,
      value: this.value as WritableSignal<unknown>,
      bufferValue: this.bufferValue as WritableSignal<unknown>,
      size: this.size as WritableSignal<unknown>,
      label: this.label as WritableSignal<unknown>,
      detailText: this.detailText as WritableSignal<unknown>,
      kpiTitle: this.kpiTitle as WritableSignal<unknown>,
      kpiStatus: this.kpiStatus as WritableSignal<unknown>,
      etaText: this.etaText as WritableSignal<unknown>,
      showLabel: this.showLabel as WritableSignal<unknown>,
      showPercentage: this.showPercentage as WritableSignal<unknown>,
      showRingCompleteIcon: this.showRingCompleteIcon as WritableSignal<unknown>,
      trackStyle: this.trackStyle as WritableSignal<unknown>,
      statusColor: this.statusColor as WritableSignal<unknown>,
      surface: this.surface as WritableSignal<unknown>,
      compactCardPlate: this.compactCardPlate as WritableSignal<unknown>,
      canvasBackground: this.canvasBackground as WritableSignal<unknown>,
      activeStep: this.activeStep as WritableSignal<unknown>,
      fileRowSample: this.fileRowSample as WritableSignal<unknown>,
      kpiCardSample: this.kpiCardSample as WritableSignal<unknown>,
      tableRowSample: this.tableRowSample as WritableSignal<unknown>,
    });
  }

  readonly themeService = inject(PlaygroundThemeService);
  private readonly _playgroundFx = createPlaygroundPreviewFx();
  readonly previewFx = this._playgroundFx.previewFx;
  readonly resolvedFxShell = this._playgroundFx.resolvedFxShell;
  readonly ngModelStandalone = { standalone: true };

  /** Example copy for generated HTML snippets (`detailText`, `kpiTitle`, `kpiStatus`, `etaText` on `brightrail-progress`). */
  readonly snippetDetailText = '3 of 4 tasks completed';
  readonly snippetKpiTitle = 'Revenue target';
  readonly snippetKpiStatus = 'On track';
  readonly snippetEtaText = 'ETA 00:16';
  readonly snippetCanvasBackground = 'rgba(15, 16, 22, 0.88)';

  readonly recipeGroups = [
    'Basics',
    'Circular',
    'Modes',
    'Steps',
    'Patterns',
    'Futuristic',
  ] as const;

  readonly recipeOptions: { value: ProgressRecipe; label: string; group: string }[] = [
    { value: 'linear-core', label: 'Core linear', group: 'Basics' },
    { value: 'linear-tones', label: 'Status tones', group: 'Basics' },
    { value: 'circular-sizes', label: 'Ring sizes', group: 'Circular' },
    { value: 'circular-kpi', label: 'Circular KPI', group: 'Circular' },
    { value: 'mode-indeterminate', label: 'Indeterminate', group: 'Modes' },
    { value: 'mode-buffer', label: 'Buffered', group: 'Modes' },
    { value: 'mode-query', label: 'Query / pulse', group: 'Modes' },
    { value: 'step-milestone', label: 'Milestone', group: 'Steps' },
    { value: 'step-workflow', label: 'Workflow labels', group: 'Steps' },
    { value: 'file-upload', label: 'File upload list', group: 'Patterns' },
    { value: 'table-inline', label: 'Table row', group: 'Patterns' },
    { value: 'kpi-dashboard', label: 'KPI grid', group: 'Patterns' },
    { value: 'futuristic-ring', label: 'Neon ring', group: 'Futuristic' },
    { value: 'futuristic-glass', label: 'Glass bar', group: 'Futuristic' },
    { value: 'futuristic-neon-arc', label: 'Glowing arc', group: 'Futuristic' },
    { value: 'futuristic-mini-card', label: 'Mini card + ETA', group: 'Futuristic' },
  ];

  readonly themeRowOptions: { id: PlaygroundThemeId; label: string }[] = [
    { id: 'light', label: 'Material light' },
    { id: 'dark', label: 'Material dark' },
  ];

  readonly typeOptions: BrightrailProgressType[] = ['linear', 'circular'];
  readonly variantOptions: BrightrailProgressVariant[] = [
    'default',
    'futuristic',
    'glass',
    'neon-arc',
    'compact-card',
  ];
  readonly sizeOptions: BrightrailProgressSize[] = ['sm', 'md', 'lg'];
  readonly statusColorOptions: BrightrailProgressStatusColor[] = [
    'primary',
    'success',
    'warning',
    'danger',
    'neutral',
  ];
  readonly trackStyleOptions: BrightrailProgressTrackStyle[] = ['solid', 'glow'];
  readonly modeOptions: BrightrailProgressMode[] = ['determinate', 'indeterminate', 'buffer', 'query'];
  readonly surfaceOptions: BrightrailProgressSurface[] = ['light', 'dark'];

  readonly selectedRecipeGroup = signal<string>('Basics');
  readonly recipe = signal<ProgressRecipe>('linear-core');

  readonly type = signal<BrightrailProgressType>('linear');
  readonly variant = signal<BrightrailProgressVariant>('default');
  readonly mode = signal<BrightrailProgressMode>('determinate');
  readonly indeterminate = signal(false);
  readonly buffer = signal(false);
  readonly value = signal(72);
  readonly bufferValue = signal(85);
  readonly size = signal<BrightrailProgressSize>('md');
  readonly label = signal('Deployment progress');
  readonly detailText = signal('');
  readonly kpiTitle = signal('');
  readonly kpiStatus = signal('');
  readonly etaText = signal('');
  readonly showLabel = signal(true);
  readonly showPercentage = signal(true);
  readonly showRingCompleteIcon = signal(false);
  readonly trackStyle = signal<BrightrailProgressTrackStyle>('solid');
  readonly statusColor = signal<BrightrailProgressStatusColor>('primary');
  readonly surface = signal<BrightrailProgressSurface>('light');
  /** Compact-card variant only: bordered / shadowed shell (library `compactCardPlate`). */
  readonly compactCardPlate = signal(true);
  /** CSS `background` for `canvasBackground` input (empty = transparent). */
  readonly canvasBackground = signal('');

  readonly activeStep = signal(2);

  /** One row at a time in File upload list preview + snippet. */
  readonly fileRowSample = signal<FileRowSampleId>('active');
  /** One KPI card at a time in KPI grid preview + snippet. */
  readonly kpiCardSample = signal<KpiCardSampleId>('revenue');
  /** One table row at a time in Table row preview + snippet. */
  readonly tableRowSample = signal<TableRowSampleId>('requirements');

  readonly fileRowSampleOptions: { id: FileRowSampleId; label: string }[] = [
    { id: 'complete', label: 'Complete (100%)' },
    { id: 'active', label: 'In progress (78%)' },
    { id: 'paused', label: 'Paused (45%)' },
    { id: 'queued', label: 'Queued' },
  ];

  readonly kpiCardSampleOptions: { id: KpiCardSampleId; label: string }[] = [
    { id: 'revenue', label: 'Revenue target' },
    { id: 'resource', label: 'Resource use' },
    { id: 'sla', label: 'SLA compliance' },
    { id: 'nps', label: 'Net promoter' },
  ];

  readonly tableRowSampleOptions: { id: TableRowSampleId; label: string }[] = [
    { id: 'requirements', label: 'Requirements (complete)' },
    { id: 'uiux', label: 'UI / UX (in progress)' },
    { id: 'api', label: 'API integration' },
    { id: 'testing', label: 'Testing (at risk)' },
    { id: 'deployment', label: 'Deployment (not started)' },
  ];

  readonly activeTab = signal<CodeTabId>('html');

  readonly canvasBackgroundBinding = computed(() => {
    const v = this.canvasBackground().trim();
    return v.length > 0 ? v : undefined;
  });

  readonly previewPanel = computed<PreviewPanel>(() => {
    const r = this.recipe();
    if (r === 'step-milestone' || r === 'step-workflow') return 'stepper';
    if (r === 'file-upload') return 'files';
    if (r === 'table-inline') return 'table';
    if (r === 'kpi-dashboard') return 'kpi';
    return 'progress';
  });

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

  recipesInGroup(group: string): { value: ProgressRecipe; label: string }[] {
    return this.recipeOptions.filter((x) => x.group === group).map((x) => ({ value: x.value, label: x.label }));
  }

  onRecipeGroupNgModelChange(v: string): void {
    this.selectedRecipeGroup.set(v);
    const next = this.recipesInGroup(v)[0]?.value;
    if (next) this.onRecipeNgModelChange(next);
  }

  onRecipeNgModelChange(v: string): void {
    const recipe = v as ProgressRecipe;
    this.recipe.set(recipe);
    this.applyRecipe(recipe);
  }

  applyRecipe(recipe: ProgressRecipe): void {
    this.type.set('linear');
    this.variant.set('default');
    this.mode.set('determinate');
    this.indeterminate.set(false);
    this.buffer.set(false);
    this.value.set(72);
    this.bufferValue.set(85);
    this.size.set('md');
    this.label.set('Deployment progress');
    this.detailText.set('');
    this.kpiTitle.set('');
    this.kpiStatus.set('');
    this.etaText.set('');
    this.showLabel.set(true);
    this.showPercentage.set(true);
    this.showRingCompleteIcon.set(false);
    this.trackStyle.set('solid');
    this.statusColor.set('primary');
    this.surface.set('light');
    this.canvasBackground.set('');
    this.compactCardPlate.set(true);
    this.activeStep.set(2);

    if (recipe === 'linear-core') {
      this.type.set('linear');
      this.value.set(72);
    } else if (recipe === 'linear-tones') {
      this.type.set('linear');
      this.statusColor.set('success');
      this.value.set(100);
    } else if (recipe === 'circular-sizes') {
      this.type.set('circular');
      this.size.set('sm');
      this.value.set(48);
    } else if (recipe === 'circular-kpi') {
      this.type.set('circular');
      this.size.set('lg');
      this.variant.set('futuristic');
      this.trackStyle.set('glow');
      this.value.set(72);
      this.label.set('Deployment progress');
      this.detailText.set('3 of 4 tasks completed');
      this.surface.set('light');
    } else if (recipe === 'mode-indeterminate') {
      this.type.set('linear');
      this.indeterminate.set(true);
    } else if (recipe === 'mode-buffer') {
      this.type.set('linear');
      this.buffer.set(true);
      this.value.set(64);
      this.bufferValue.set(85);
    } else if (recipe === 'mode-query') {
      this.type.set('linear');
      this.mode.set('query');
    } else if (recipe === 'step-milestone') {
      this.activeStep.set(2);
    } else if (recipe === 'step-workflow') {
      this.activeStep.set(2);
    } else if (recipe === 'file-upload') {
      this.fileRowSample.set('active');
    } else if (recipe === 'table-inline') {
      this.tableRowSample.set('requirements');
      this.type.set('linear');
      this.size.set('sm');
    } else if (recipe === 'kpi-dashboard') {
      this.kpiCardSample.set('revenue');
    } else if (recipe === 'futuristic-ring') {
      this.type.set('circular');
      this.variant.set('futuristic');
      this.surface.set('light');
      this.trackStyle.set('glow');
      this.value.set(78);
      this.label.set('Loading…');
      this.showPercentage.set(true);
    } else if (recipe === 'futuristic-glass') {
      this.type.set('linear');
      this.variant.set('glass');
      this.surface.set('light');
      this.value.set(65);
      this.label.set('Processing…');
    } else if (recipe === 'futuristic-neon-arc') {
      this.type.set('circular');
      this.variant.set('neon-arc');
      this.surface.set('light');
      this.trackStyle.set('glow');
      this.value.set(60);
      this.label.set('Syncing data');
    } else if (recipe === 'futuristic-mini-card') {
      this.variant.set('compact-card');
      this.surface.set('light');
      this.value.set(60);
      this.label.set('Upload speed');
      this.etaText.set('ETA 00:16');
      this.showLabel.set(true);
      this.showPercentage.set(true);
    }
  }

  resetToDefaults(): void {
    this.previewFx.set('inherit');
    this.selectedRecipeGroup.set('Basics');
    this.onRecipeNgModelChange('linear-core');
  }

  buildHtml(): string {
    const r = this.recipe();
    if (r === 'step-milestone') {
      return `<!-- Scenario: milestone -->
<brightrail-stepper [activeStep]="${this.activeStep()}" preset="milestone">
  <brightrail-step caption="Complete" />
  <brightrail-step caption="Complete" />
  <brightrail-step caption="60%" />
  <brightrail-step caption="Pending" />
  <brightrail-step caption="Pending" />
</brightrail-stepper>`;
    }
    if (r === 'step-workflow') {
      return `<!-- Scenario: workflow -->
<brightrail-stepper [activeStep]="${this.activeStep()}" preset="workflow">
  <brightrail-step label="Account Created" />
  <brightrail-step label="Profile Setup" />
  <brightrail-step label="Verify Email" />
  <brightrail-step label="Payment Details" />
  <brightrail-step label="Complete" />
</brightrail-stepper>`;
    }
    if (r === 'file-upload') {
      return this.buildFileUploadSnippet();
    }
    if (r === 'kpi-dashboard') {
      return this.buildKpiCardSnippet();
    }
    if (r === 'table-inline') {
      return this.buildTableRowSnippet();
    }
    const lines: string[] = ['<brightrail-progress'];
    lines.push(`  type="${this.type()}"`);
    lines.push(`  variant="${this.variant()}"`);
    if (!this.indeterminate() && !this.buffer()) {
      lines.push(`  mode="${this.mode()}"`);
    }
    lines.push(`  [value]="${this.value()}"`);
    if (this.buffer()) {
      lines.push(`  [bufferValue]="${this.bufferValue()}"`);
    }
    lines.push(`  size="${this.size()}"`);
    if (this.label()) {
      lines.push(`  label="${this.label()}"`);
    }
    lines.push(`  [showLabel]="${this.showLabel()}"`);
    lines.push(`  [showPercentage]="${this.showPercentage()}"`);
    lines.push(`  [indeterminate]="${this.indeterminate()}"`);
    lines.push(`  [buffer]="${this.buffer()}"`);
    lines.push(`  statusColor="${this.statusColor()}"`);
    lines.push(`  trackStyle="${this.trackStyle()}"`);
    lines.push(`  surface="${this.surface()}"`);
    if (this.variant() === 'compact-card') {
      lines.push(`  [compactCardPlate]="${this.compactCardPlate()}"`);
    }
    lines.push(`  detailText="${this.snippetDetailText}"`);
    lines.push(`  kpiTitle="${this.snippetKpiTitle}"`);
    lines.push(`  kpiStatus="${this.snippetKpiStatus}"`);
    lines.push(`  etaText="${this.snippetEtaText}"`);
    lines.push(
      `  <!-- canvasBackground="${this.snippetCanvasBackground}" optional: custom panel behind futuristic / glass UI -->`,
    );
    lines.push(`  [showRingCompleteIcon]="${this.showRingCompleteIcon()}"`);
    lines.push(`/>`);
    return lines.join('\n');
  }

  buildTs(): string {
    const r = this.recipe();
    if (r === 'file-upload') {
      return `import { Component } from '@angular/core';
import { BrightrailProgressFileRowComponent } from 'brightrail';

@Component({
  standalone: true,
  imports: [BrightrailProgressFileRowComponent],
  templateUrl: './example.component.html',
})
export class ExampleComponent {}`;
    }
    if (r === 'kpi-dashboard') {
      return `import { Component } from '@angular/core';
import { BrightrailProgressComponent } from 'brightrail';

@Component({
  standalone: true,
  imports: [BrightrailProgressComponent],
  templateUrl: './example.component.html',
})
export class ExampleComponent {}`;
    }
    return `import { Component, signal } from '@angular/core';
import { BrightrailProgressComponent } from 'brightrail';

@Component({
  standalone: true,
  imports: [BrightrailProgressComponent],
  template: \`<brightrail-progress [value]="v()" />\`,
})
export class ExampleComponent {
  readonly v = signal(${this.value()});
}`;
  }

  private buildFileUploadSnippet(): string {
    const s = this.fileRowSample();
    if (s === 'complete') {
      return `<!-- One file row (repeat in an @for or list) -->
<brightrail-progress-file-row
  fileName="Project_Proposal.pdf"
  fileSizeLabel="2.4 MB"
  [value]="100"
  state="complete"
>
  <span class="br-file-icon-slot" aria-hidden="true">📄</span>
  <span class="br-file-status-slot" aria-label="Complete">✓</span>
</brightrail-progress-file-row>`;
    }
    if (s === 'paused') {
      return `<!-- One file row (repeat in an @for or list) -->
<brightrail-progress-file-row
  fileName="Dashboard.png"
  fileSizeLabel="3.1 MB"
  [value]="45"
  state="paused"
>
  <span class="br-file-icon-slot" aria-hidden="true">🖼</span>
  <span class="br-file-status-slot" aria-label="Paused">⏸</span>
</brightrail-progress-file-row>`;
    }
    if (s === 'queued') {
      return `<!-- One file row (repeat in an @for or list) -->
<brightrail-progress-file-row
  fileName="data_export.csv"
  fileSizeLabel="650 KB"
  [value]="0"
  state="queued"
  statusLabel="Queued"
>
  <span class="br-file-icon-slot" aria-hidden="true">📑</span>
  <span class="br-file-status-slot" aria-label="Queued">⏱</span>
</brightrail-progress-file-row>`;
    }
    return `<!-- One file row (repeat in an @for or list) -->
<brightrail-progress-file-row
  fileName="Budget_2024.xlsx"
  fileSizeLabel="1.2 MB"
  [value]="78"
  state="active"
>
  <span class="br-file-icon-slot" aria-hidden="true">📊</span>
</brightrail-progress-file-row>`;
  }

  private buildKpiCardSnippet(): string {
    const k = this.kpiCardSample();
    if (k === 'resource') {
      return `<!-- KPI card shell is your layout; progress is one component -->
<div class="kpi-card">
  <brightrail-progress
    type="circular"
    kpiTitle="Resource use"
    [value]="64"
    detailText="32 / 50 seats"
    kpiStatus="Good"
    statusColor="primary"
    size="md"
    [showLabel]="false"
  />
</div>`;
    }
    if (k === 'sla') {
      return `<div class="kpi-card">
  <brightrail-progress
    type="circular"
    kpiTitle="SLA compliance"
    [value]="91"
    kpiStatus="Excellent"
    statusColor="success"
    size="md"
    [showLabel]="false"
  />
</div>`;
    }
    if (k === 'nps') {
      return `<div class="kpi-card">
  <brightrail-progress
    type="circular"
    kpiTitle="Net promoter"
    [value]="68"
    kpiStatus="Improving"
    statusColor="warning"
    size="md"
    [showLabel]="false"
  />
</div>`;
    }
    return `<div class="kpi-card">
  <brightrail-progress
    type="circular"
    kpiTitle="Revenue target"
    [value]="82"
    detailText="$820K / $1M"
    kpiStatus="On track"
    size="md"
    [showLabel]="false"
  />
</div>`;
  }

  private buildTableRowSnippet(): string {
    const row = this.tableRowSample();
    if (row === 'uiux') {
      return `<!-- Table cell: pair progress with your status UI -->
<td>
  <brightrail-progress
    type="linear"
    [value]="75"
    [showLabel]="false"
    [showPercentage]="false"
    size="sm"
  />
</td>`;
    }
    if (row === 'api') {
      return `<td>
  <brightrail-progress
    type="linear"
    [value]="40"
    [showLabel]="false"
    [showPercentage]="false"
    size="sm"
  />
</td>`;
    }
    if (row === 'testing') {
      return `<td>
  <brightrail-progress
    type="linear"
    [value]="20"
    statusColor="warning"
    [showLabel]="false"
    [showPercentage]="false"
    size="sm"
  />
</td>`;
    }
    if (row === 'deployment') {
      return `<td>
  <brightrail-progress
    type="linear"
    [value]="0"
    statusColor="neutral"
    [showLabel]="false"
    [showPercentage]="false"
    size="sm"
  />
</td>`;
    }
    return `<td>
  <brightrail-progress
    type="linear"
    [value]="100"
    statusColor="success"
    [showLabel]="false"
    [showPercentage]="false"
    size="sm"
  />
</td>`;
  }

  buildScss(): string {
    const r = this.recipe();
    if (r === 'file-upload') {
      return `/* Stack rows in a list container; each row is brightrail-progress-file-row */
.upload-list {
  max-width: 28rem;
}`;
    }
    if (r === 'kpi-dashboard') {
      return `/* Wrap each brightrail-progress in your card / grid cell */
.kpi-card {
  border: 1px solid var(--br-color-border, #e8eaed);
  border-radius: 0.65rem;
  padding: 0.75rem;
}`;
    }
    if (r === 'table-inline') {
      return `/* Progress sits in a table cell next to your status column */
td { vertical-align: middle; }`;
    }
    return `/* Progress inherits theme from brightrail-root / your app tokens */`;
  }

  selectTab(tab: CodeTabId): void {
    this.activeTab.set(tab);
  }

  copySnippet(): void {
    void navigator.clipboard?.writeText(this.activeSnippet());
  }
}
