import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'brightrail-modal-header',
  standalone: true,
  template: `
    <header class="br-modal__header">
      <div class="br-modal__header-main">
        <ng-content select="[brightrailModalTitle]" />
      </div>
      <div class="br-modal__header-aside">
        <ng-content select="[brightrailModalHeaderActions]" />
      </div>
    </header>
  `,
  styleUrl: './brightrail-modal-shell.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BrightrailModalHeaderComponent {}
