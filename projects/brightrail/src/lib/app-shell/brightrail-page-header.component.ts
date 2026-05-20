import { ChangeDetectionStrategy, Component, input } from '@angular/core';

@Component({
  selector: 'brightrail-page-header',
  standalone: true,
  template: `
    <header class="br-page-header" [class.br-page-header--bordered]="bordered()">
      <div class="br-page-header__copy">
        <ng-content select="[brightrailPageTitle]" />
        <ng-content select="[brightrailPageSubtitle]" />
      </div>
      <div class="br-page-header__actions">
        <ng-content select="[brightrailPageHeaderActions]" />
      </div>
    </header>
  `,
  styleUrl: './brightrail-page-header.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BrightrailPageHeaderComponent {
  readonly bordered = input(true);
}
