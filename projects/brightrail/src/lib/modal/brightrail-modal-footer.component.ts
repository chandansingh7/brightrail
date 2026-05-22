import { ChangeDetectionStrategy, Component } from '@angular/core';
import { BRIGHTRAIL_FX_SHELL_HOST } from '../futuristic/brightrail-futuristic-host';

@Component({
  selector: 'brightrail-modal-footer',
  hostDirectives: [BRIGHTRAIL_FX_SHELL_HOST],
  standalone: true,
  template: ` <footer class="br-modal__footer"><ng-content /></footer> `,
  styleUrl: './brightrail-modal-shell.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BrightrailModalFooterComponent {}
