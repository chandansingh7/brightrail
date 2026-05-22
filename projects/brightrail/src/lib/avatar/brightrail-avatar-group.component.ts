import {
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  afterRenderEffect,
  computed,
  inject,
  input,
  signal,
  untracked,
} from '@angular/core';
import { BRIGHTRAIL_FX_SHELL_HOST } from '../futuristic/brightrail-futuristic-host';

/**
 * Horizontal stack of avatars with optional overflow counter.
 * Place {@link BrightrailAvatarComponent} nodes as direct children of the default slot.
 *
 * Customize overlap with CSS variable `--br-avatar-group-overlap` (negative margin; default `-0.45rem`).
 */
@Component({
  selector: 'brightrail-avatar-group',
  hostDirectives: [BRIGHTRAIL_FX_SHELL_HOST],
  standalone: true,
  template: `
    <div
      class="br-avatar-group"
      [class]="maxVisibleClass()"
      role="group"
      [attr.aria-label]="ariaLabel()"
    >
      <div class="br-avatar-group__stack">
        <ng-content />
      </div>
      @if (overflowCount() > 0) {
        <span class="br-avatar-group__more" [attr.aria-label]="moreAriaLabel()">+{{ overflowCount() }}</span>
      }
    </div>
  `,
  styleUrl: './brightrail-avatar-group.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BrightrailAvatarGroupComponent {
  private readonly host = inject(ElementRef<HTMLElement>);

  /** When set, additional avatars beyond this index are hidden and counted toward the +N chip. */
  readonly maxVisible = input<number | null>(null);
  /** Accessible name for the stack (e.g. "Project members"). */
  readonly ariaLabel = input('Avatar group');
  /**
   * When true, the overflow chip is not shown even if there are hidden avatars.
   * Useful when you manually control summary text elsewhere.
   */
  readonly hideOverflowBadge = input(false);

  private readonly projectedAvatarCount = signal(0);

  constructor() {
    afterRenderEffect(() => {
      const stack = this.host.nativeElement.querySelector('.br-avatar-group__stack');
      const n = stack ? stack.querySelectorAll(':scope > brightrail-avatar').length : 0;
      untracked(() => {
        if (this.projectedAvatarCount() !== n) {
          this.projectedAvatarCount.set(n);
        }
      });
    });
  }

  readonly overflowCount = computed(() => {
    if (this.hideOverflowBadge()) {
      return 0;
    }
    const max = this.maxVisible();
    const total = this.projectedAvatarCount();
    if (max == null || max < 1 || total <= max) {
      return 0;
    }
    return total - max;
  });

  readonly maxVisibleClass = computed(() => {
    const max = this.maxVisible();
    return max != null && max >= 1 ? `br-ag--max-${Math.min(Math.floor(max), 24)}` : '';
  });

  moreAriaLabel(): string {
    const n = this.overflowCount();
    return n > 0 ? `${n} more people` : '';
  }
}
