import { ChangeDetectionStrategy, Component, computed, input } from '@angular/core';

import { BrightrailFocusVisibleDirective } from '../platform/brightrail-focus-visible.directive';
import {
  BrightrailButtonIcon,
  BrightrailButtonIconComponent,
} from './brightrail-button-icon.component';

export type BrightrailButtonVariant =
  | 'primary'
  | 'secondary'
  | 'tertiary'
  | 'outline'
  | 'ghost'
  | 'link'
  | 'success'
  | 'warning'
  | 'danger'
  | 'info'
  | 'approve'
  | 'reject';

export type BrightrailButtonSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl';

/** `default` — rounded rect; `pill` — full rounded ends; `icon` — equal width/height; `circle` — FAB-style. */
export type BrightrailButtonShape = 'default' | 'pill' | 'icon' | 'circle';

/** Visible outer outline (e.g. layout / bounds debugging). */
export type BrightrailButtonBoundaryStyle = 'none' | 'dotted';

@Component({
  selector: 'brightrail-button',
  standalone: true,
  imports: [BrightrailButtonIconComponent, BrightrailFocusVisibleDirective],
  host: {
    '[class.br-host--full]': 'fullWidth()',
  },
  template: `
    <span class="br-root" [class.br-root--full]="fullWidth()">
      <button
        type="button"
        brightrailFocusVisible
        [class]="buttonClass()"
        [disabled]="disabled() || loading()"
        [attr.aria-busy]="loading() ? 'true' : null"
        [attr.aria-pressed]="visualState() === 'active' ? 'true' : null"
        [attr.aria-label]="ariaLabel() || null"
      >
        @if (loading()) {
          <span class="br-button__spinner" aria-hidden="true"></span>
        }
        @if (!loading() && iconLeft() !== 'none') {
          <span class="br-button__icon" aria-hidden="true">
            <brightrail-button-icon [name]="iconLeft()" />
          </span>
        }
        <span class="br-button__content">
          <ng-content />
        </span>
        @if (!loading() && iconRight() !== 'none') {
          <span class="br-button__icon" aria-hidden="true">
            <brightrail-button-icon [name]="iconRight()" />
          </span>
        }
        @if (!loading() && dropdownIndicator()) {
          <span class="br-button__icon br-button__icon--dropdown" aria-hidden="true">
            <brightrail-button-icon name="chevron-down" />
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
  readonly shape = input<BrightrailButtonShape>('default');
  readonly disabled = input(false);
  readonly loading = input(false);
  readonly fullWidth = input(false);
  readonly iconLeft = input<BrightrailButtonIcon>('none');
  readonly iconRight = input<BrightrailButtonIcon>('none');
  /** Extra trailing chevron (dropdown trigger pattern). */
  readonly dropdownIndicator = input(false);
  /** Required when the button has no visible label (icon-only / FAB). */
  readonly ariaLabel = input<string | undefined>(undefined);
  /** Simulated pressed / “active” visual state (e.g. toggle groups). */
  readonly visualState = input<'default' | 'active'>('default');
  /**
   * When `disabled` is true and not `loading`, border style for the disabled look.
   * `dotted` helps distinguish disabled controls that should still read as “outlined”.
   */
  readonly disabledBorderStyle = input<'solid' | 'dotted'>('solid');
  /** Optional dotted outer outline to emphasize the control bounds (playground / layout). */
  readonly boundaryStyle = input<BrightrailButtonBoundaryStyle>('none');

  readonly buttonClass = computed(() => {
    const parts = [
      'br-button',
      `br-button--${this.variant()}`,
      `br-button--${this.size()}`,
      `br-button--shape-${this.shape()}`,
    ];
    if (this.visualState() === 'active') {
      parts.push('br-button--state-active');
    }
    if (
      this.disabledBorderStyle() === 'dotted' &&
      this.disabled() &&
      !this.loading()
    ) {
      parts.push('br-button--disabled-border-dotted');
    }
    if (this.boundaryStyle() === 'dotted') {
      parts.push('br-button--boundary-dotted');
    }
    return parts.join(' ');
  });
}
