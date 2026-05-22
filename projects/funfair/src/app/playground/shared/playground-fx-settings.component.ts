import { ChangeDetectionStrategy, Component, inject, model } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { PlaygroundThemeService } from '../playground-theme.service';
import {
  PLAYGROUND_PREVIEW_FX_OPTIONS,
  PLAYGROUND_SITE_FX_OPTIONS,
  type PlaygroundPreviewFxId,
} from './playground-fx.util';

@Component({
  selector: 'app-playground-fx-settings',
  standalone: true,
  imports: [FormsModule],
  styleUrl: './playground-fx-settings.component.scss',
  template: `
    <div class="bp-setting-row">
      <span class="bp-setting-row__label" id="bp-fx-site-label">Site futuristic shell</span>
      <div class="bp-dropdown">
        <select
          class="bp-dropdown__select"
          [ngModel]="themeService.fxShell()"
          (ngModelChange)="themeService.setFxShell($event)"
          [ngModelOptions]="ngModelStandalone"
          [attr.aria-labelledby]="'bp-fx-site-label'"
        >
          @for (opt of siteFxOptions; track opt.id) {
            <option [value]="opt.id">{{ opt.label }}</option>
          }
        </select>
        <span class="bp-dropdown__chev" aria-hidden="true"></span>
      </div>
    </div>
    <div class="bp-setting-row">
      <span class="bp-setting-row__label" id="bp-fx-preview-label">Preview futuristic shell</span>
      <div class="bp-dropdown">
        <select
          class="bp-dropdown__select"
          [ngModel]="previewFx()"
          (ngModelChange)="previewFx.set($event)"
          [ngModelOptions]="ngModelStandalone"
          [attr.aria-labelledby]="'bp-fx-preview-label'"
        >
          @for (opt of previewFxOptions; track opt.id) {
            <option [value]="opt.id">{{ opt.label }}</option>
          }
        </select>
        <span class="bp-dropdown__chev" aria-hidden="true"></span>
      </div>
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PlaygroundFxSettingsComponent {
  readonly themeService = inject(PlaygroundThemeService);
  readonly previewFx = model<PlaygroundPreviewFxId>('inherit');

  readonly ngModelStandalone = { standalone: true };
  readonly siteFxOptions = PLAYGROUND_SITE_FX_OPTIONS;
  readonly previewFxOptions = PLAYGROUND_PREVIEW_FX_OPTIONS;
}
