import { ChangeDetectionStrategy, Component, computed, inject, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrightrailQuantumStepperComponent } from 'brightrail';

import { PlaygroundThemeId, PlaygroundThemeService } from '../playground-theme.service';
import { PlaygroundPreviewHeaderComponent } from '../shared/playground-preview-header.component';
import { PlaygroundSnippetDockComponent } from '../shared/playground-snippet-dock.component';
import { injectPlaygroundA11yPreviewMode } from '../shared/playground-a11y-preview.utils';

@Component({
  selector: 'app-quantum-stepper-playground',
  standalone: true,
  imports: [
    FormsModule,
    PlaygroundPreviewHeaderComponent,
    PlaygroundSnippetDockComponent,
    BrightrailQuantumStepperComponent,
  ],
  templateUrl: './quantum-stepper-playground.component.html',
  styleUrl: './quantum-stepper-playground.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class QuantumStepperPlaygroundComponent {
  readonly previewOnly = injectPlaygroundA11yPreviewMode();
  readonly themeService = inject(PlaygroundThemeService);
  readonly ngModelStandalone = { standalone: true };

  readonly themeRowOptions: { id: PlaygroundThemeId; label: string }[] = [
    { id: 'light', label: 'Material light' },
    { id: 'dark', label: 'Material dark' },
  ];

  readonly appearance = signal<'glow' | 'pill' | 'minimal'>('glow');
  readonly currentStep = signal(1);
  readonly steps = [
    { label: 'Scan', description: 'Ingest telemetry' },
    { label: 'Train', description: 'Fit model weights' },
    { label: 'Deploy', description: 'Ship to edge nodes' },
  ];

  readonly htmlSnippet = computed(
    () => `<brightrail-quantum-stepper
  appearance="${this.appearance()}"
  [currentStep]="${this.currentStep()}"
  [steps]="steps"
/>`,
  );

  readonly tsSnippet = `import { Component, signal } from '@angular/core';
import { BrightrailQuantumStepperComponent } from 'brightrail';

@Component({
  standalone: true,
  imports: [BrightrailQuantumStepperComponent],
  templateUrl: './onboarding-flow.component.html',
})
export class OnboardingFlowComponent {
  readonly currentStep = signal(0);
  readonly steps = [
    { label: 'Scan', description: 'Ingest telemetry' },
    { label: 'Train', description: 'Fit model weights' },
    { label: 'Deploy', description: 'Ship to edge nodes' },
  ];
}`;

  resetToDefaults(): void {
    this.appearance.set('glow');
    this.currentStep.set(1);
    this.themeService.setTheme('light');
  }
}
