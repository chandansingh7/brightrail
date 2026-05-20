import { ChangeDetectionStrategy, Component, inject, input } from '@angular/core';
import { BrightrailButtonComponent } from 'brightrail';

import { PlaygroundThemeService } from '../playground-theme.service';
import { PlaygroundA11yPreviewService } from './playground-a11y-preview.service';

@Component({
  selector: 'app-playground-preview-header',
  standalone: true,
  imports: [BrightrailButtonComponent],
  template: `
    <div class="bp-preview-head">
      <h2 [id]="titleId()" class="bp-panel__title bp-panel__title--live">
        <span class="bp-live-dot" aria-hidden="true"></span>
        Live preview
      </h2>
      <brightrail-button variant="outline" size="sm" (click)="openA11yPreview()">
        Open a11y preview
      </brightrail-button>
    </div>
  `,
  styles: `
    .bp-preview-head {
      display: flex;
      flex-wrap: wrap;
      align-items: center;
      justify-content: space-between;
      gap: 0.5rem;
      margin-bottom: 0.65rem;
    }

    .bp-preview-head .bp-panel__title {
      margin: 0;
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PlaygroundPreviewHeaderComponent {
  private readonly preview = inject(PlaygroundA11yPreviewService);
  private readonly theme = inject(PlaygroundThemeService);

  readonly titleId = input.required<string>();
  readonly componentId = input.required<string>();
  readonly state = input<unknown>({});

  openA11yPreview(): void {
    this.preview.open(this.componentId(), this.theme.theme(), this.state());
  }
}
