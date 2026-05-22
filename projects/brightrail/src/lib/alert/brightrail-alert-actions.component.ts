import { ChangeDetectionStrategy, Component } from '@angular/core';
import { BRIGHTRAIL_FX_SHELL_HOST } from '../futuristic/brightrail-futuristic-host';

/** Right-aligned actions strip inside {@link BrightrailAlertComponent} (links or buttons). */
@Component({
  selector: 'brightrail-alert-actions',
  hostDirectives: [BRIGHTRAIL_FX_SHELL_HOST],
  standalone: true,
  template: `<div class="br-alert__actions-inner"><ng-content /></div>`,
  styleUrl: './brightrail-alert-actions.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BrightrailAlertActionsComponent {}
