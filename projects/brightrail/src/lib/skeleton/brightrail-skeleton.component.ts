import { ChangeDetectionStrategy, Component, computed, input } from '@angular/core';

export type BrightrailSkeletonVariant = 'text' | 'circular' | 'rectangular' | 'rounded';
export type BrightrailSkeletonAnimation = 'pulse' | 'wave' | 'none';

@Component({
  selector: 'brightrail-skeleton',
  standalone: true,
  templateUrl: './brightrail-skeleton.component.html',
  styleUrl: './brightrail-skeleton.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    '[class]': 'hostClass()',
    '[style.--br-skel-width]': 'resolvedWidth()',
    '[style.--br-skel-height]': 'resolvedHeight()',
  },
})
export class BrightrailSkeletonComponent {
  readonly variant = input<BrightrailSkeletonVariant>('text');
  readonly width = input<string | undefined>(undefined);
  readonly height = input<string | undefined>(undefined);
  readonly animation = input<BrightrailSkeletonAnimation>('wave');
  /** Number of text lines when `variant` is `text`. */
  readonly lines = input(1);

  readonly lineIndices = computed(() =>
    Array.from({ length: Math.max(1, this.lines()) }, (_, i) => i),
  );

  readonly hostClass = computed(
    () =>
      `br-skel br-skel--${this.variant()} br-skel--anim-${this.animation()} ${
        this.lines() > 1 && this.variant() === 'text' ? 'br-skel--multiline' : ''
      }`,
  );

  readonly resolvedWidth = computed(() => {
    const w = this.width();
    if (w) {
      return w;
    }
    switch (this.variant()) {
      case 'circular':
        return '2.5rem';
      case 'text':
        return '100%';
      default:
        return '100%';
    }
  });

  readonly resolvedHeight = computed(() => {
    const h = this.height();
    if (h) {
      return h;
    }
    switch (this.variant()) {
      case 'circular':
        return '2.5rem';
      case 'text':
        return '0.75rem';
      case 'rounded':
        return '2.5rem';
      default:
        return '4rem';
    }
  });

  readonly isLastLine = (index: number): boolean => index === this.lineIndices().length - 1;
}
