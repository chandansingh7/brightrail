import { ChangeDetectionStrategy, Component, computed, input } from '@angular/core';

import {
  BrightrailButtonIcon,
  BrightrailButtonIconComponent,
} from '../buttons/brightrail-button-icon.component';

export type BrightrailBadgeVariant = 'filled' | 'outlined' | 'tonal' | 'soft';
export type BrightrailBadgeColor =
  | 'primary'
  | 'success'
  | 'warning'
  | 'danger'
  | 'critical'
  | 'info'
  | 'neutral'
  | 'priority';
export type BrightrailBadgeSize = 'small' | 'medium' | 'large';
export type BrightrailBadgeState = 'default' | 'hover' | 'active' | 'disabled';

@Component({
  selector: 'brightrail-badge',
  standalone: true,
  imports: [BrightrailButtonIconComponent],
  template: `
    <span class="br-badge" [class]="badgeClass()" [attr.aria-label]="computedAriaLabel()">
      @if (icon() !== 'none') {
        <span class="br-badge__icon" aria-hidden="true">
          <brightrail-button-icon [name]="icon()" />
        </span>
      }
      @if (!dot()) {
        <span class="br-badge__text">{{ label() }}</span>
      }
    </span>
  `,
  styleUrl: './brightrail-badge.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BrightrailBadgeComponent {
  readonly variant = input<BrightrailBadgeVariant>('filled');
  /** Alias for design docs that use `appearance`. */
  readonly appearance = input<BrightrailBadgeVariant | undefined>(undefined, { alias: 'appearance' });
  readonly color = input<BrightrailBadgeColor>('primary');
  readonly size = input<BrightrailBadgeSize>('medium');
  readonly state = input<BrightrailBadgeState>('default');
  readonly icon = input<BrightrailButtonIcon>('none');
  readonly dot = input(false);
  readonly label = input('Badge');
  readonly ariaLabel = input<string | undefined>(undefined);

  readonly resolvedVariant = computed(() => this.appearance() ?? this.variant());
  readonly resolvedColor = computed(() => (this.color() === 'critical' ? 'danger' : this.color()));

  readonly badgeClass = computed(() => {
    const parts = [
      'br-badge',
      `br-badge--${this.resolvedVariant()}`,
      `br-badge--${this.resolvedColor()}`,
      `br-badge--${this.size()}`,
      `br-badge--state-${this.state()}`,
    ];
    if (this.dot()) {
      parts.push('br-badge--dot');
    }
    return parts.join(' ');
  });

  readonly computedAriaLabel = computed(() => {
    if (this.ariaLabel() != null) {
      return this.ariaLabel();
    }
    return this.dot() ? this.label() : null;
  });
}
