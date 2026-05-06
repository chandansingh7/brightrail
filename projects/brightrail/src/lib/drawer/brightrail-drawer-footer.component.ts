import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'brightrail-drawer-footer',
  standalone: true,
  template: `
    <footer class="br-drawer__footer">
      <ng-content />
    </footer>
  `,
  styleUrl: './brightrail-drawer-shell.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BrightrailDrawerFooterComponent {}
