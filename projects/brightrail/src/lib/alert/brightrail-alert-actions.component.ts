import { ChangeDetectionStrategy, Component } from '@angular/core';

/** Right-aligned actions strip inside {@link BrightrailAlertComponent} (links or buttons). */
@Component({
  selector: 'brightrail-alert-actions',
  standalone: true,
  template: `<div class="br-alert__actions-inner"><ng-content /></div>`,
  styleUrl: './brightrail-alert-actions.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BrightrailAlertActionsComponent {}
