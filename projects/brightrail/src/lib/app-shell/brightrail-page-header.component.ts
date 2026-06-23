import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { BRIGHTRAIL_FX_SHELL_HOST } from '../futuristic/brightrail-futuristic-host';

@Component({
  selector: 'brightrail-page-header',
  hostDirectives: [BRIGHTRAIL_FX_SHELL_HOST],
  standalone: true,
  template: `
    <header class="br-page-header" [class.br-page-header--bordered]="bordered()">
      <div class="br-page-header__copy">
        @if (title()) {
          <h1 class="br-page-header__title">{{ title() }}</h1>
        } @else {
          <ng-content select="[brightrailPageTitle]" />
        }
        @if (subtitle()) {
          <p class="br-page-header__subtitle">{{ subtitle() }}</p>
        } @else {
          <ng-content select="[brightrailPageSubtitle]" />
        }
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
  /** Primary page title. Alternative to projecting `[brightrailPageTitle]`. */
  readonly title = input<string | undefined>(undefined);
  /** Secondary line under the title. Alternative to projecting `[brightrailPageSubtitle]`. */
  readonly subtitle = input<string | undefined>(undefined);
}
