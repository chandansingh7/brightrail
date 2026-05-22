import { ChangeDetectionStrategy, Component, computed, inject, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrightrailHolographicPanelComponent } from 'brightrail';

import { PlaygroundThemeId, PlaygroundThemeService } from '../playground-theme.service';
import { PlaygroundPreviewHeaderComponent } from '../shared/playground-preview-header.component';
import { PlaygroundSnippetDockComponent } from '../shared/playground-snippet-dock.component';
import { injectPlaygroundA11yPreviewMode } from '../shared/playground-a11y-preview.utils';

@Component({
  selector: 'app-holographic-panel-playground',
  standalone: true,
  imports: [
    FormsModule,
    PlaygroundPreviewHeaderComponent,
    PlaygroundSnippetDockComponent,
    BrightrailHolographicPanelComponent,
  ],
  templateUrl: './holographic-panel-playground.component.html',
  styleUrl: './holographic-panel-playground.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HolographicPanelPlaygroundComponent {
  readonly previewOnly = injectPlaygroundA11yPreviewMode();
  readonly themeService = inject(PlaygroundThemeService);
  readonly ngModelStandalone = { standalone: true };

  readonly themeRowOptions: { id: PlaygroundThemeId; label: string }[] = [
    { id: 'light', label: 'Material light' },
    { id: 'dark', label: 'Material dark' },
  ];

  readonly appearance = signal<'glass' | 'neon' | 'holo' | 'cyber'>('holo');
  readonly metrics = [
    { label: 'Latency', value: '12', unit: 'ms', trend: 'down' as const },
    { label: 'Throughput', value: '98', unit: '%', trend: 'up' as const },
    { label: 'Nodes', value: '1.2', unit: 'k', trend: 'flat' as const },
  ];

  readonly htmlSnippet = computed(
    () => `<brightrail-holographic-panel
  title="Command center"
  appearance="${this.appearance()}"
  [metrics]="metrics"
/>`,
  );

  readonly tsSnippet = `import { Component } from '@angular/core';
import { BrightrailHolographicPanelComponent } from 'brightrail';

@Component({
  standalone: true,
  imports: [BrightrailHolographicPanelComponent],
  templateUrl: './dashboard-kpis.component.html',
})
export class DashboardKpisComponent {
  readonly metrics = [
    { label: 'Latency', value: '12', unit: 'ms', trend: 'down' as const },
    { label: 'Throughput', value: '98', unit: '%', trend: 'up' as const },
  ];
}`;

  resetToDefaults(): void {
    this.appearance.set('holo');
    this.themeService.setTheme('light');
  }
}
