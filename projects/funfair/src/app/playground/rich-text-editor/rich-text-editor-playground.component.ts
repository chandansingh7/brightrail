import { ChangeDetectionStrategy, Component, computed, inject, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrightrailRichTextEditorComponent } from 'brightrail';

import { PlaygroundThemeId, PlaygroundThemeService } from '../playground-theme.service';
import { PlaygroundPreviewHeaderComponent } from '../shared/playground-preview-header.component';
import { PlaygroundSnippetDockComponent } from '../shared/playground-snippet-dock.component';
import { injectPlaygroundA11yPreviewMode } from '../shared/playground-a11y-preview.utils';
import { createPlaygroundPreviewFx } from '../shared/playground-fx.util';
import { PlaygroundFxSettingsComponent } from '../shared/playground-fx-settings.component';

@Component({
  selector: 'app-rich-text-editor-playground',
  standalone: true,
  imports: [
    FormsModule,
    PlaygroundPreviewHeaderComponent,
    PlaygroundSnippetDockComponent,
    BrightrailRichTextEditorComponent, PlaygroundFxSettingsComponent],
  templateUrl: './rich-text-editor-playground.component.html',
  styleUrl: './rich-text-editor-playground.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RichTextEditorPlaygroundComponent {
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

  readonly body = signal('<p>Start writing your article…</p>');
  readonly label = signal('Article body');
  readonly placeholder = signal('Write content…');

  readonly htmlSnippet = computed(
    () => `<brightrail-rich-text-editor
  label="${this.label()}"
  placeholder="${this.placeholder()}"
  [(ngModel)]="body"
/>`,
  );

  readonly tsSnippet = `import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrightrailRichTextEditorComponent } from 'brightrail';

@Component({
  standalone: true,
  imports: [FormsModule, BrightrailRichTextEditorComponent],
  templateUrl: './article-editor.component.html',
})
export class ArticleEditorComponent {
  readonly body = signal('<p></p>');
}`;

  resetToDefaults(): void {
    this.previewFx.set('inherit');
    this.body.set('<p>Start writing your article…</p>');
    this.label.set('Article body');
    this.placeholder.set('Write content…');
    this.themeService.setTheme('light');
  }
}
