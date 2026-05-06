import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'brightrail-modal-footer',
  standalone: true,
  template: ` <footer class="br-modal__footer"><ng-content /></footer> `,
  styleUrl: './brightrail-modal-shell.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BrightrailModalFooterComponent {}
