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
import { BrightrailToastVariant } from './brightrail-toast.types';

@Component({
  selector: 'brightrail-toast',
  standalone: true,
  imports: [BrightrailButtonIconComponent],
  template: `
    <div class="br-toast__shell" role="status" [attr.aria-live]="ariaLive()">
      <span class="br-toast__icon" aria-hidden="true">
        <brightrail-button-icon [name]="resolvedIcon()" />
      </span>
      <div class="br-toast__copy">
        @if (title().trim().length > 0) {
          <p class="br-toast__title">{{ title() }}</p>
        }
        <p class="br-toast__message">{{ message() }}</p>
      </div>
      @if (dismissible()) {
        <button
          type="button"
          class="br-toast__dismiss"
          aria-label="Dismiss notification"
          (click)="onDismiss($event)"
        >
          <brightrail-button-icon name="close" />
        </button>
      }
    </div>
  `,
  styleUrl: './brightrail-toast.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    '[class]': 'hostClass()',
  },
})
export class BrightrailToastComponent {
  readonly variant = input<BrightrailToastVariant>('info');
  readonly title = input('');
  readonly message = input('');
  readonly dismissible = input(true);

  readonly dismiss = output<void>();

  readonly hostClass = computed(
    () => `br-toast br-toast--${this.variant()}`,
  );

  readonly resolvedIcon = computed((): BrightrailButtonIcon => {
    switch (this.variant()) {
      case 'success':
        return 'check';
      case 'warning':
        return 'warning';
      case 'danger':
        return 'error';
      default:
        return 'info';
    }
  });

  readonly ariaLive = computed(() =>
    this.variant() === 'danger' ? ('assertive' as const) : ('polite' as const),
  );

  onDismiss(ev: Event): void {
    ev.stopPropagation();
    this.dismiss.emit();
  }
}
