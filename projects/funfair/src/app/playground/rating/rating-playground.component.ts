import { ChangeDetectionStrategy, Component, computed, inject, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrightrailRatingComponent } from 'brightrail';

import { PlaygroundThemeId, PlaygroundThemeService } from '../playground-theme.service';
import { PlaygroundPreviewHeaderComponent } from '../shared/playground-preview-header.component';
import { PlaygroundSnippetDockComponent } from '../shared/playground-snippet-dock.component';
import { injectPlaygroundA11yPreviewMode } from '../shared/playground-a11y-preview.utils';
import { createPlaygroundPreviewFx } from '../shared/playground-fx.util';
import { PlaygroundFxSettingsComponent } from '../shared/playground-fx-settings.component';

@Component({
  selector: 'app-rating-playground',
  standalone: true,
  imports: [
    FormsModule,
    PlaygroundPreviewHeaderComponent,
    PlaygroundSnippetDockComponent,
    BrightrailRatingComponent, PlaygroundFxSettingsComponent],
  templateUrl: './rating-playground.component.html',
  styleUrl: './rating-playground.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RatingPlaygroundComponent {
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

  readonly score = signal(4);
  readonly max = signal(5);
  readonly label = signal('Overall satisfaction');

  readonly htmlSnippet = computed(
    () => `<brightrail-rating
  label="${this.label()}"
  [max]="${this.max()}"
  [(ngModel)]="score"
/>`,
  );

  readonly tsSnippet = `import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrightrailRatingComponent } from 'brightrail';

@Component({
  standalone: true,
  imports: [FormsModule, BrightrailRatingComponent],
  templateUrl: './feedback-form.component.html',
})
export class FeedbackFormComponent {
  readonly score = signal(4);
  readonly max = signal(5);
}`;

  resetToDefaults(): void {
    this.previewFx.set('inherit');
    this.score.set(4);
    this.max.set(5);
    this.label.set('Overall satisfaction');
    this.themeService.setTheme('light');
  }
}
