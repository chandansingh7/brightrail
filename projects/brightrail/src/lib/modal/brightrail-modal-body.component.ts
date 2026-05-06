import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'brightrail-modal-body',
  standalone: true,
  template: ` <div class="br-modal__body"><ng-content /></div> `,
  styleUrl: './brightrail-modal-shell.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BrightrailModalBodyComponent {}
