import { ChangeDetectionStrategy, Component, computed, input } from '@angular/core';
import { BRIGHTRAIL_FX_SHELL_HOST } from '../futuristic/brightrail-futuristic-host';
import {
  BrightrailCyberBadgeAppearance,
  BrightrailCyberBadgeStatus,
} from './brightrail-cyber-badge.types';

@Component({
  selector: 'brightrail-cyber-badge',
  hostDirectives: [BRIGHTRAIL_FX_SHELL_HOST],
  standalone: true,
  template: `
    <span
      class="br-cyber-badge"
      [class]="hostClass()"
      [class.br-cyber-badge--pulse]="pulse()"
      role="status"
      [attr.aria-label]="ariaLabel() || label() + ' — ' + status()"
    >
      @if (appearance() === 'cyber') {
        <span class="br-cyber-badge__frame" aria-hidden="true">
          <span class="br-cyber-badge__corner br-cyber-badge__corner--tl"></span>
          <span class="br-cyber-badge__corner br-cyber-badge__corner--tr"></span>
          <span class="br-cyber-badge__corner br-cyber-badge__corner--bl"></span>
          <span class="br-cyber-badge__corner br-cyber-badge__corner--br"></span>
        </span>
      }
      <span class="br-cyber-badge__dot" [attr.data-status]="status()" aria-hidden="true"></span>
      <span class="br-cyber-badge__label">{{ label() }}</span>
    </span>
  `,
  styleUrl: './brightrail-cyber-badge.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BrightrailCyberBadgeComponent {
  readonly label = input('Status');
  readonly ariaLabel = input('');
  readonly status = input<BrightrailCyberBadgeStatus>('online');
  readonly appearance = input<BrightrailCyberBadgeAppearance>('cyber');
  readonly pulse = input(true);

  readonly hostClass = computed(() => `br-cyber-badge--${this.appearance()}`);
}
