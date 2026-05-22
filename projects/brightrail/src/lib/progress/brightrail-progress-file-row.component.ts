import { ChangeDetectionStrategy, Component, input } from '@angular/core';

import { BrightrailProgressComponent } from './brightrail-progress.component';
import { BRIGHTRAIL_FX_SHELL_HOST } from '../futuristic/brightrail-futuristic-host';

export type BrightrailProgressFileState = 'active' | 'complete' | 'paused' | 'queued';

@Component({
  selector: 'brightrail-progress-file-row',
  hostDirectives: [BRIGHTRAIL_FX_SHELL_HOST],
  standalone: true,
  imports: [BrightrailProgressComponent],
  templateUrl: './brightrail-progress-file-row.component.html',
  styleUrl: './brightrail-progress-file-row.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    class: 'br-prog-file-host',
  },
})
export class BrightrailProgressFileRowComponent {
  readonly fileName = input('');
  readonly fileSizeLabel = input('');
  readonly value = input(0, {
    transform: (v: number | string) => (typeof v === 'string' ? parseFloat(v) || 0 : v),
  });
  readonly state = input<BrightrailProgressFileState>('active');
  readonly statusLabel = input('');
}
