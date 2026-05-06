import {
  ChangeDetectionStrategy,
  Component,
  computed,
  input,
  output,
} from '@angular/core';

import {
  BrightrailButtonIcon,
  BrightrailButtonIconComponent,
} from '../buttons/brightrail-button-icon.component';

export type BrightrailAlertAppearance = 'filled' | 'soft' | 'outlined' | 'tonal';
export type BrightrailAlertStatus = 'info' | 'success' | 'warning' | 'error';
export type BrightrailAlertAccent = 'default' | 'approval';
/** Docking relative to the viewport (or nearest fixed-position containing block). */
export type BrightrailAlertPlacement = 'inline' | 'bottom';

@Component({
  selector: 'brightrail-alert',
  standalone: true,
  imports: [BrightrailButtonIconComponent],
  template: `
    <div class="br-alert__shell">
      @if (showIcon()) {
        <span class="br-alert__icon-wrap" aria-hidden="true">
          <brightrail-button-icon [name]="resolvedIcon()" />
        </span>
      }

      <div class="br-alert__copy">
        <div class="br-alert__title-slot">
          <ng-content select="[brightrailAlertTitle]" />
        </div>
        <div class="br-alert__message-slot">
          <ng-content select="[brightrailAlertMessage]" />
        </div>
      </div>

      <div class="br-alert__actions-slot">
        <ng-content select="brightrail-alert-actions" />
      </div>

      @if (dismissible()) {
        <button
          type="button"
          class="br-alert__dismiss"
          aria-label="Dismiss"
          (click)="onDismissClick($event)"
        >
          <brightrail-button-icon name="close" />
        </button>
      }
    </div>
  `,
  styleUrl: './brightrail-alert.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    '[class]': 'hostClass()',
    '[attr.role]': 'announceRole()',
    '[attr.aria-live]': 'ariaLiveAttr()',
  },
})
export class BrightrailAlertComponent {
  readonly appearance = input<BrightrailAlertAppearance>('soft');
  readonly status = input<BrightrailAlertStatus>('info');
  readonly size = input<'sm' | 'md' | 'lg'>('md');
  readonly corners = input<'rounded' | 'square'>('rounded');
  readonly dismissible = input(false);
  readonly showIcon = input(true);
  /** When set (and not `'none'`), overrides the default icon for {@link status}. */
  readonly icon = input<BrightrailButtonIcon | undefined>(undefined);
  readonly fullWidth = input(false);
  /** Pin to the bottom edge (toast / snackbar region). Creates a positioning containing block when an ancestor sets `transform`. */
  readonly placement = input<BrightrailAlertPlacement>('inline');
  /** Dark surface / light foreground (toast-style shells). */
  readonly inverse = input(false);
  /** Shifts semantic palette for enterprise “approval” styling (purple accent). */
  readonly accent = input<BrightrailAlertAccent>('default');

  readonly dismiss = output<void>();

  readonly resolvedIcon = computed((): BrightrailButtonIcon => {
    const override = this.icon();
    if (override && override !== 'none') return override;
    switch (this.status()) {
      case 'info':
        return 'info';
      case 'success':
        return 'check';
      case 'warning':
        return 'warning';
      case 'error':
        return 'error';
    }
  });

  readonly hostClass = computed(() =>
    [
      'br-alert',
      `br-alert--appearance-${this.appearance()}`,
      `br-alert--status-${this.status()}`,
      `br-alert--size-${this.size()}`,
      this.corners() === 'square' ? 'br-alert--corners-square' : '',
      this.fullWidth() ? 'br-alert--full-width' : '',
      this.placement() === 'bottom' ? 'br-alert--placement-bottom' : '',
      this.inverse() ? 'br-alert--inverse' : '',
      this.accent() === 'approval' ? 'br-alert--accent-approval' : '',
    ]
      .filter(Boolean)
      .join(' '),
  );

  readonly announceRole = computed(() => (this.status() === 'error' ? 'alert' : 'status'));

  readonly ariaLiveAttr = computed(() => (this.status() === 'error' ? undefined : ('polite' as const)));

  onDismissClick(ev: Event): void {
    ev.stopPropagation();
    this.dismiss.emit();
  }
}
