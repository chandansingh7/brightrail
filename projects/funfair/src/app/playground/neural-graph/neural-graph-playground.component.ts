import { ChangeDetectionStrategy, Component, computed, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrightrailNeuralGraphComponent } from 'brightrail';

import { PlaygroundThemeId, PlaygroundThemeService } from '../playground-theme.service';
import { PlaygroundPreviewHeaderComponent } from '../shared/playground-preview-header.component';
import { PlaygroundSnippetDockComponent } from '../shared/playground-snippet-dock.component';
import { injectPlaygroundA11yPreviewMode } from '../shared/playground-a11y-preview.utils';
import { createPlaygroundPreviewFx } from '../shared/playground-fx.util';
import { PlaygroundFxSettingsComponent } from '../shared/playground-fx-settings.component';

@Component({
  selector: 'app-neural-graph-playground',
  standalone: true,
  imports: [
    FormsModule,
    PlaygroundPreviewHeaderComponent,
    PlaygroundSnippetDockComponent,
    BrightrailNeuralGraphComponent, PlaygroundFxSettingsComponent],
  templateUrl: './neural-graph-playground.component.html',
  styleUrl: './neural-graph-playground.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NeuralGraphPlaygroundComponent {
  readonly previewOnly = injectPlaygroundA11yPreviewMode();
  readonly themeService = inject(PlaygroundThemeService);
  private readonly _playgroundFx = createPlaygroundPreviewFx();
  readonly previewFx = this._playgroundFx.previewFx;
  readonly resolvedFxShell = this._playgroundFx.resolvedFxShell;
  readonly ngModelStandalone = { standalone: true };

  readonly themeRowOptions: { id: PlaygroundThemeId; label: string }[] = [
    { id: 'light', label: 'Material light' },
    { id: 'dark', label: 'Material dark' },
  ];

  readonly nodes = [
    { id: 'input', label: 'Input' },
    { id: 'encoder', label: 'Encoder' },
    { id: 'core', label: 'Core' },
    { id: 'output', label: 'Output' },
  ];
  readonly links = [
    { source: 'input', target: 'encoder' },
    { source: 'encoder', target: 'core' },
    { source: 'core', target: 'output' },
  ];

  readonly htmlSnippet = computed(
    () => `<brightrail-neural-graph
  caption="ML pipeline"
  [nodes]="nodes"
  [links]="links"
/>`,
  );

  readonly tsSnippet = `import { Component } from '@angular/core';
import { BrightrailNeuralGraphComponent } from 'brightrail';

@Component({
  standalone: true,
  imports: [BrightrailNeuralGraphComponent],
  templateUrl: './pipeline-graph.component.html',
})
export class PipelineGraphComponent {
  readonly nodes = [
    { id: 'input', label: 'Input' },
    { id: 'core', label: 'Core' },
    { id: 'output', label: 'Output' },
  ];
  readonly links = [
    { source: 'input', target: 'core' },
    { source: 'core', target: 'output' },
  ];
}`;

  resetToDefaults(): void {
    this.previewFx.set('inherit');
    this.themeService.setTheme('light');
  }
}
