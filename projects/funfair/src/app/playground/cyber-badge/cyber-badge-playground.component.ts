import { ChangeDetectionStrategy, Component, computed, inject, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrightrailCyberBadgeComponent } from 'brightrail';

import { PlaygroundThemeId, PlaygroundThemeService } from '../playground-theme.service';
import { PlaygroundPreviewHeaderComponent } from '../shared/playground-preview-header.component';
import { PlaygroundSnippetDockComponent } from '../shared/playground-snippet-dock.component';
import { injectPlaygroundA11yPreviewMode } from '../shared/playground-a11y-preview.utils';
import { createPlaygroundPreviewFx, playgroundFxHtml, playgroundFxTs } from '../shared/playground-fx.util';
import { PlaygroundFxSettingsComponent } from '../shared/playground-fx-settings.component';

@Component({
  selector: 'app-cyber-badge-playground',
  standalone: true,
  imports: [
    FormsModule,
    PlaygroundPreviewHeaderComponent,
    PlaygroundSnippetDockComponent,
    BrightrailCyberBadgeComponent, PlaygroundFxSettingsComponent],
  templateUrl: './cyber-badge-playground.component.html',
  styleUrl: './cyber-badge-playground.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CyberBadgePlaygroundComponent {
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

  readonly appearance = signal<'cyber' | 'neon' | 'holo' | 'glass'>('cyber');
  readonly status = signal<'online' | 'offline' | 'busy' | 'away'>('online');
  readonly label = signal('Neural link');
  readonly pulse = signal(true);

  readonly htmlSnippet = computed(() => playgroundFxHtml(`<brightrail-cyber-badge
  label="${this.label()}"
  appearance="${this.appearance()}"
  status="${this.status()}"
  [pulse]="${this.pulse()}"
/>`, this.previewFx()));

  readonly tsSnippet = computed(() => playgroundFxTs(`import { Component, signal } from '@angular/core';
import { BrightrailCyberBadgeComponent } from 'brightrail';

@Component({
  selector: 'app-status-row',
  standalone: true,
  imports: [BrightrailCyberBadgeComponent],
  template: \`<brightrail-cyber-badge
    [label]="label()"
    [appearance]="appearance()"
    [status]="status()"
    [pulse]="pulse()"
  />\`,
})
export class StatusRowComponent {
  readonly label = signal('${this.label()}');
  readonly appearance = signal<'cyber' | 'neon' | 'holo' | 'glass'>('${this.appearance()}');
  readonly status = signal<'online' | 'offline' | 'busy' | 'away'>('${this.status()}');
  readonly pulse = signal(${this.pulse()});
}`, this.previewFx(), this.themeService.fxShell()));

  readonly scssSnippet = computed(
    () => `.status-row {
  display: flex;
  align-items: center;
  gap: 0.5rem;
}`,
  );

  readonly a11yPreviewState = computed(() => ({
    appearance: this.appearance(),
    status: this.status(),
    label: this.label(),
    pulse: this.pulse(),
  }));

  resetToDefaults(): void {
    this.previewFx.set('inherit');
    this.appearance.set('cyber');
    this.status.set('online');
    this.label.set('Neural link');
    this.pulse.set(true);
    this.themeService.setTheme('light');
  }
}
