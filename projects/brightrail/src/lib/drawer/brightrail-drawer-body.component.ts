import { ChangeDetectionStrategy, Component, input } from '@angular/core';

@Component({
  selector: 'brightrail-drawer-body',
  standalone: true,
  template: `
    <section class="br-drawer__body" [class.br-drawer__body--flush]="flush()">
      <ng-content />
    </section>
  `,
  styleUrl: './brightrail-drawer-shell.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BrightrailDrawerBodyComponent {
  readonly flush = input(false);
}
