import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { BRIGHTRAIL_FX_SHELL_HOST } from '../futuristic/brightrail-futuristic-host';

@Component({
  selector: 'brightrail-top-bar',
  hostDirectives: [BRIGHTRAIL_FX_SHELL_HOST],
  standalone: true,
  template: `
    <div class="br-top-bar" [class.br-top-bar--bordered]="bordered()">
      <div class="br-top-bar__start">
        <ng-content select="[brightrailTopBarStart]" />
      </div>
      <div class="br-top-bar__center">
        <ng-content select="[brightrailTopBarCenter]" />
      </div>
      <div class="br-top-bar__end">
        <ng-content select="[brightrailTopBarEnd]" />
      </div>
    </div>
  `,
  styleUrl: './brightrail-top-bar.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BrightrailTopBarComponent {
  readonly bordered = input(true);
  readonly height = input('3.25rem');
}
