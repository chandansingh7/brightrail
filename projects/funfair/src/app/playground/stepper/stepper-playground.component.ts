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
  BrightrailStepComponent,
  BrightrailStepperComponent,
  BrightrailStepperLabelPlacement,
  BrightrailStepperOrientation,
  BrightrailStepperStepStyle,
} from 'brightrail';

import { PlaygroundThemeId, PlaygroundThemeService } from '../playground-theme.service';
import { createPlaygroundPreviewFx, playgroundFxHtml, playgroundFxTs } from '../shared/playground-fx.util';
import { PlaygroundFxSettingsComponent } from '../shared/playground-fx-settings.component';

type CodeTabId = 'html' | 'ts' | 'scss';
type StepperScenario = 'standard-flow' | 'vertical-details' | 'compact' | 'error-state' | 'futuristic';
type StepDemoStatus = 'completed' | 'current' | 'pending' | 'error' | 'disabled' | 'inactive';
interface StepDemoItem {
  label: string;
  description: string;
  status: StepDemoStatus;
}

@Component({
  selector: 'app-stepper-playground',
  standalone: true,
  imports: [
    PlaygroundPreviewHeaderComponent,FormsModule, TitleCasePipe, BrightrailStepperComponent, BrightrailStepComponent, PlaygroundFxSettingsComponent],
  templateUrl: './stepper-playground.component.html',
  styleUrl: './stepper-playground.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class StepperPlaygroundComponent {
  readonly previewOnly = injectPlaygroundA11yPreviewMode();
  readonly a11yPreviewState = computed(() =>
    snapshotPlaygroundState({
      scenario: () => this.scenario(),
      orientation: () => this.orientation(),
      stepStyle: () => this.stepStyle(),
      currentStep: () => this.currentStep(),
      labelPlacement: () => this.labelPlacement(),
      withDescriptions: () => this.withDescriptions(),
      connectorGap: () => this.connectorGap(),
      currentColor: () => this.currentColor(),
      completedColor: () => this.completedColor(),
      steps: () => this.steps(),
    }),
  );


  readonly themeService = inject(PlaygroundThemeService);
  private readonly _playgroundFx = createPlaygroundPreviewFx();
  readonly previewFx = this._playgroundFx.previewFx;
  readonly resolvedFxShell = this._playgroundFx.resolvedFxShell;
  readonly ngModelStandalone = { standalone: true };

  readonly recipeGroups = ['Basics', 'Workflow', 'States', 'Futuristic'] as const;
  readonly recipeOptions: { value: StepperScenario; label: string; group: string }[] = [
    { value: 'standard-flow', label: 'Standard flow', group: 'Basics' },
    { value: 'compact', label: 'Compact', group: 'Basics' },
    { value: 'vertical-details', label: 'Vertical details', group: 'Workflow' },
    { value: 'error-state', label: 'Error state', group: 'States' },
    { value: 'futuristic', label: 'Futuristic glow', group: 'Futuristic' },
  ];

  readonly orientationOptions: BrightrailStepperOrientation[] = ['horizontal', 'vertical'];
  readonly styleOptions: BrightrailStepperStepStyle[] = ['numbered', 'progress'];
  readonly labelPlacementOptions: BrightrailStepperLabelPlacement[] = ['below', 'top'];
  readonly themeRowOptions: { id: PlaygroundThemeId; label: string }[] = [
    { id: 'light', label: 'Material light' },
    { id: 'dark', label: 'Material dark' },
  ];

  readonly selectedRecipeGroup = signal<string>('Basics');
  readonly scenario = signal<StepperScenario>('standard-flow');
  readonly orientation = signal<BrightrailStepperOrientation>('horizontal');
  readonly stepStyle = signal<BrightrailStepperStepStyle>('numbered');
  /** 1-based for UI friendliness; converted to 0-based when bound to component API. */
  readonly currentStep = signal(2);
  readonly labelPlacement = signal<BrightrailStepperLabelPlacement>('below');
  readonly withDescriptions = signal(true);
  readonly connectorGap = signal('0px');
  readonly currentColor = signal('#0062ff');
  readonly completedColor = signal('#0062ff');
  readonly activeTab = signal<CodeTabId>('html');

  readonly steps = signal<StepDemoItem[]>([
    { label: 'Account setup', description: 'Create your account', status: 'pending' as const },
    { label: 'Profile', description: 'Add your details', status: 'pending' as const },
    { label: 'Verify email', description: 'Confirm your email', status: 'pending' as const },
    { label: 'Complete', description: "You're all set!", status: 'pending' as const },
  ]);

  constructor() {
    initPlaygroundA11yPreview('stepper', this.previewOnly);
    this.applyScenario('standard-flow');
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

  recipesInGroup(group: string): { value: StepperScenario; label: string }[] {
    return this.recipeOptions.filter((x) => x.group === group).map((x) => ({ value: x.value, label: x.label }));
  }

  onRecipeGroupNgModelChange(v: string): void {
    this.selectedRecipeGroup.set(v);
    const next = this.recipesInGroup(v)[0]?.value;
    if (next) this.onScenarioNgModelChange(next);
  }

  onScenarioNgModelChange(v: string): void {
    const scenario = v as StepperScenario;
    this.scenario.set(scenario);
    this.applyScenario(scenario);
  }

  applyScenario(scenario: StepperScenario): void {
    this.orientation.set('horizontal');
    this.stepStyle.set('numbered');
    this.currentStep.set(2);
    this.labelPlacement.set('below');
    this.withDescriptions.set(true);
    this.connectorGap.set('0px');
    this.currentColor.set('#0062ff');
    this.completedColor.set('#0062ff');
    this.steps.set([
      { label: 'Account setup', description: 'Create your account', status: 'pending' as const },
      { label: 'Profile', description: 'Add your details', status: 'pending' as const },
      { label: 'Verify email', description: 'Confirm your email', status: 'pending' as const },
      { label: 'Complete', description: "You're all set!", status: 'pending' as const },
    ]);
    if (scenario === 'vertical-details') {
      this.orientation.set('vertical');
      this.currentStep.set(3);
    } else if (scenario === 'compact') {
      this.withDescriptions.set(false);
    } else if (scenario === 'error-state') {
      this.steps.set([
        { label: 'Account setup', description: 'Create your account', status: 'pending' as const },
        { label: 'Profile', description: 'Add your details', status: 'error' as const },
        { label: 'Verify email', description: 'Confirm your email', status: 'pending' as const },
        { label: 'Complete', description: "You're all set!", status: 'pending' as const },
      ]);
    } else if (scenario === 'futuristic') {
      this.stepStyle.set('progress');
      this.steps.set([
        { label: 'Discover', description: '', status: 'pending' as const },
        { label: 'Configure', description: '', status: 'pending' as const },
        { label: 'Preview', description: '', status: 'pending' as const },
        { label: 'Launch', description: '', status: 'pending' as const },
      ]);
      this.withDescriptions.set(false);
    }
  }
  toApiCurrentStep(): number {
    return Math.max(0, Math.min(this.currentStep() - 1, this.steps().length));
  }


  resetToDefaults(): void {
    this.previewFx.set('inherit');
    this.selectedRecipeGroup.set('Basics');
    this.onScenarioNgModelChange('standard-flow');
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
    const stepLines = this.steps()
      .map(
        (s) =>
          `  <brightrail-step label="${s.label}" description="${s.description}" status="${s.status}" />`,
      )
      .join('\n');
    return playgroundFxHtml([
      `<brightrail-stepper`,
      `  orientation="${this.orientation()}"`,
      `  stepStyle="${this.stepStyle()}"`,
      `  [currentStep]="${this.toApiCurrentStep()}"`,
      `  labelPlacement="${this.labelPlacement()}"`,
      `  [withDescriptions]="${this.withDescriptions()}"`,
      `  [connectorGap]="'${this.connectorGap()}'"`,
      `  currentColor="${this.currentColor()}"`,
      `  completedColor="${this.completedColor()}">`,
      stepLines,
      `</brightrail-stepper>`,
    ].join('\n'), this.previewFx());
  }

  private buildTs(): string {
    return playgroundFxTs(`import { BrightrailStepComponent, BrightrailStepperComponent } from 'brightrail';`, this.previewFx(), this.themeService.fxShell());
  }

  private buildScss(): string {
    return `.stepper-shell { padding: 0.75rem; }`;
  }
}
