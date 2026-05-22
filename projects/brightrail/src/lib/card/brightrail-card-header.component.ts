import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { BRIGHTRAIL_FX_SHELL_HOST } from '../futuristic/brightrail-futuristic-host';

@Component({
  selector: 'brightrail-card-header',
  hostDirectives: [BRIGHTRAIL_FX_SHELL_HOST],
  standalone: true,
  template: `
    @if (withTitle()) {
      <div
        class="br-card-header__row"
        [class.br-card-header__row--with-leading]="showLeading()"
      >
        <div class="br-card-header__leading">
          <ng-content select="[brightrailCardHeaderLeading]" />
        </div>
        <div class="br-card-header__title">
          <ng-content select="[brightrailCardHeaderTitle]" />
        </div>
        <div class="br-card-header__actions">
          <ng-content select="[brightrailCardHeaderActions]" />
        </div>
      </div>
    } @else {
      <ng-content />
    }
  `,
  styleUrl: './brightrail-card-header.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    class: 'br-card-header',
  },
})
export class BrightrailCardHeaderComponent {
  /** When true, use the titled row layout with projection slots; otherwise project freely. */
  readonly withTitle = input(false);
  /** Reserve the leading column for `[brightrailCardHeaderLeading]` content. */
  readonly showLeading = input(false);
}
