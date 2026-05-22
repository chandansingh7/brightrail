import { ChangeDetectionStrategy, Component, computed, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {
  BrightrailButtonComponent,
  BrightrailPopoverComponent,
  BrightrailPopoverTriggerDirective,
} from 'brightrail';

import { PlaygroundThemeId, PlaygroundThemeService } from '../playground-theme.service';
import { PlaygroundPreviewHeaderComponent } from '../shared/playground-preview-header.component';
import { PlaygroundSnippetDockComponent } from '../shared/playground-snippet-dock.component';
import { injectPlaygroundA11yPreviewMode } from '../shared/playground-a11y-preview.utils';
import { createPlaygroundPreviewFx, playgroundFxHtml, playgroundFxTs } from '../shared/playground-fx.util';
import { PlaygroundFxSettingsComponent } from '../shared/playground-fx-settings.component';

@Component({
  selector: 'app-popover-playground',
  standalone: true,
  imports: [
    FormsModule,
    PlaygroundPreviewHeaderComponent,
    PlaygroundSnippetDockComponent,
    BrightrailButtonComponent,
    BrightrailPopoverComponent,
    BrightrailPopoverTriggerDirective, PlaygroundFxSettingsComponent],
  templateUrl: './popover-playground.component.html',
  styleUrl: './popover-playground.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PopoverPlaygroundComponent {
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

  readonly htmlSnippet = computed(() => playgroundFxHtml(`<brightrail-button variant="outline" [brightrailPopoverTrigger]="filters">
  Filter options
</brightrail-button>
<brightrail-popover #filters>
  <p class="pp-pop__title">Quick filters</p>
  <label><input type="checkbox" checked /> Active only</label>
  <label><input type="checkbox" /> Include archived</label>
</brightrail-popover>`, this.previewFx()));

  readonly tsSnippet = computed(() => playgroundFxTs(`import { Component } from '@angular/core';
import {
  BrightrailButtonComponent,
  BrightrailPopoverComponent,
  BrightrailPopoverTriggerDirective,
} from 'brightrail';

@Component({
  standalone: true,
  imports: [BrightrailButtonComponent, BrightrailPopoverComponent, BrightrailPopoverTriggerDirective],
  templateUrl: './filter-toolbar.component.html',
})
export class FilterToolbarComponent {}`, this.previewFx(), this.themeService.fxShell()));

  resetToDefaults(): void {
    this.previewFx.set('inherit');
    this.themeService.setTheme('light');
  }
}
