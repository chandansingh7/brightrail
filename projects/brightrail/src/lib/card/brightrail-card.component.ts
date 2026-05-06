import {
  ChangeDetectionStrategy,
  Component,
  computed,
  input,
  output,
} from '@angular/core';

/** Visual chrome for {@link BrightrailCardComponent}. */
export type BrightrailCardAppearance =
  | 'basic'
  | 'elevated'
  | 'outlined'
  | 'filled'
  | 'horizontal'
  | 'image'
  | 'stats';

@Component({
  selector: 'brightrail-card',
  standalone: true,
  template: `
    @if (dismissible()) {
      <button
        type="button"
        class="br-card__dismiss"
        aria-label="Dismiss"
        (click)="onDismissClick($event)"
      >
        <svg viewBox="0 0 16 16" width="14" height="14" aria-hidden="true">
          <path
            d="M3 3l10 10M13 3L3 13"
            stroke="currentColor"
            stroke-width="1.75"
            fill="none"
            stroke-linecap="round"
          />
        </svg>
      </button>
    }
    <div class="br-card__inner">
      <ng-content select="brightrail-card-media" />
      <div class="br-card__main">
        <ng-content select="brightrail-card-header" />
        <ng-content select="brightrail-card-content" />
        <ng-content select="brightrail-card-actions" />
        <ng-content select="brightrail-card-footer" />
      </div>
    </div>
  `,
  styleUrl: './brightrail-card.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    '[class]': 'hostClass()',
    '[attr.role]': 'roleAttr()',
    '[attr.tabindex]': 'tabindexAttr()',
    '[attr.aria-disabled]': 'ariaDisabledAttr()',
    '(click)': 'onHostClick($event)',
    '(keydown)': 'onHostKeydown($event)',
  },
})
export class BrightrailCardComponent {
  readonly appearance = input<BrightrailCardAppearance>('basic');
  readonly size = input<'sm' | 'md' | 'lg'>('md');
  readonly corners = input<'rounded' | 'square'>('rounded');
  readonly state = input<'default' | 'disabled'>('default');

  /** Whole card acts as a button (keyboard activatable). */
  readonly interactive = input(false);
  readonly dismissible = input(false);
  readonly fullWidth = input(false);

  readonly dismiss = output<void>();
  readonly activated = output<void>();

  readonly hostClass = computed(() => {
    const parts = [
      'br-card',
      `br-card--${this.appearance()}`,
      `br-card--size-${this.size()}`,
      `br-card--corners-${this.corners()}`,
    ];
    if (this.fullWidth()) {
      parts.push('br-host--full');
    }
    if (this.interactive()) {
      parts.push('br-host--interactive');
    }
    if (this.isDisabled()) {
      parts.push('br-host--disabled');
    }
    if (this.dismissible()) {
      parts.push('br-card--dismissible');
    }
    return parts.join(' ');
  });

  readonly roleAttr = computed(() => (this.interactive() ? 'button' : 'article'));

  readonly tabindexAttr = computed(() => {
    if (!this.interactive()) {
      return null;
    }
    return this.isDisabled() ? -1 : 0;
  });

  readonly ariaDisabledAttr = computed(() =>
    this.interactive() && this.isDisabled() ? 'true' : null,
  );

  readonly isDisabled = computed(() => this.state() === 'disabled');

  onDismissClick(event: Event): void {
    event.stopPropagation();
    this.dismiss.emit();
  }

  onHostClick(event: MouseEvent): void {
    if (!this.interactive() || this.isDisabled()) {
      return;
    }
    const target = event.target;
    if (!(target instanceof Element)) {
      return;
    }
    if (target.closest('.br-card__dismiss')) {
      return;
    }
    const host = event.currentTarget as Element;
    const nestedControl = target.closest(
      'button, a, input, select, textarea, [role="button"], [role="link"]',
    );
    if (nestedControl && nestedControl !== host) {
      return;
    }
    this.activated.emit();
  }

  onHostKeydown(event: KeyboardEvent): void {
    if (!this.interactive() || this.isDisabled()) {
      return;
    }
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      this.activated.emit();
    }
  }
}
