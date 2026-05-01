import { ChangeDetectionStrategy, Component, computed, input } from '@angular/core';

export type BrightrailButtonVariant = 'primary' | 'secondary' | 'outline' | 'ghost';
export type BrightrailButtonSize = 'sm' | 'md' | 'lg';
export type BrightrailButtonIcon = 'none' | 'plus' | 'chevron';

@Component({
  selector: 'brightrail-button',
  standalone: true,
  template: `
    <span class="br-root" [class.br-root--full]="fullWidth()">
      <button
        type="button"
        [class]="buttonClass()"
        [disabled]="disabled() || loading()"
        [attr.aria-busy]="loading() ? 'true' : null"
        [attr.aria-pressed]="visualState() === 'active' ? 'true' : null"
      >
        @if (loading()) {
          <span class="br-button__spinner" aria-hidden="true"></span>
        }
        @if (!loading() && iconLeft() !== 'none') {
          <span class="br-button__icon" aria-hidden="true">
            @switch (iconLeft()) {
              @case ('plus') {
                <svg viewBox="0 0 16 16" width="1em" height="1em" fill="currentColor">
                  <path d="M8 1v14M1 8h14" stroke="currentColor" stroke-width="2" fill="none" />
                </svg>
              }
              @case ('chevron') {
                <svg viewBox="0 0 16 16" width="1em" height="1em" fill="currentColor">
                  <path
                    d="M4 6l4 4 4-4"
                    stroke="currentColor"
                    stroke-width="1.75"
                    fill="none"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              }
            }
          </span>
        }
        <span class="br-button__content">
          <ng-content />
        </span>
        @if (!loading() && iconRight() !== 'none') {
          <span class="br-button__icon" aria-hidden="true">
            @switch (iconRight()) {
              @case ('plus') {
                <svg viewBox="0 0 16 16" width="1em" height="1em" fill="currentColor">
                  <path d="M8 1v14M1 8h14" stroke="currentColor" stroke-width="2" fill="none" />
                </svg>
              }
              @case ('chevron') {
                <svg viewBox="0 0 16 16" width="1em" height="1em" fill="currentColor">
                  <path
                    d="M4 6l4 4 4-4"
                    stroke="currentColor"
                    stroke-width="1.75"
                    fill="none"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              }
            }
          </span>
        }
      </button>
    </span>
  `,
  styleUrl: './brightrail-button.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BrightrailButtonComponent {
  readonly variant = input<BrightrailButtonVariant>('primary');
  readonly size = input<BrightrailButtonSize>('md');
  readonly disabled = input(false);
  readonly loading = input(false);
  readonly fullWidth = input(false);
  readonly iconLeft = input<BrightrailButtonIcon>('none');
  readonly iconRight = input<BrightrailButtonIcon>('none');
  /** Simulated pressed / “active” visual state for playgrounds. */
  readonly visualState = input<'default' | 'active'>('default');

  readonly buttonClass = computed(() => {
    const parts = ['br-button', `br-button--${this.variant()}`, `br-button--${this.size()}`];
    if (this.visualState() === 'active') {
      parts.push('br-button--state-active');
    }
    return parts.join(' ');
  });
}
