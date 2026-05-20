import { ChangeDetectionStrategy, Component, input } from '@angular/core';

@Component({
  selector: 'brightrail-sidebar',
  standalone: true,
  template: `
    <nav class="br-sidebar" [attr.aria-label]="ariaLabel() || null">
      <ul class="br-sidebar__list" role="list">
        <ng-content />
      </ul>
    </nav>
  `,
  styleUrl: './brightrail-sidebar.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BrightrailSidebarComponent {
  readonly ariaLabel = input('Sidebar');
}
