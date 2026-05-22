import {
  ChangeDetectionStrategy,
  Component,
  booleanAttribute,
  computed,
  input,
} from '@angular/core';
import { BRIGHTRAIL_FX_SHELL_HOST } from '../futuristic/brightrail-futuristic-host';

export type BrightrailProgressType = 'linear' | 'circular';
export type BrightrailProgressMode = 'determinate' | 'indeterminate' | 'buffer' | 'query';
export type BrightrailProgressSize = 'sm' | 'md' | 'lg';
export type BrightrailProgressVariant = 'default' | 'futuristic' | 'glass' | 'neon-arc' | 'compact-card';
export type BrightrailProgressStatusColor = 'primary' | 'success' | 'warning' | 'danger' | 'neutral';
export type BrightrailProgressTrackStyle = 'solid' | 'glow';
export type BrightrailProgressSurface = 'light' | 'dark';

function toNumber(v: number | string): number {
  if (typeof v === 'number') {
    return Number.isFinite(v) ? v : 0;
  }
  const n = parseFloat(v);
  return Number.isFinite(n) ? n : 0;
}

function clampPct(n: number): number {
  if (!Number.isFinite(n)) {
    return 0;
  }
  return Math.min(100, Math.max(0, n));
}

@Component({
  selector: 'brightrail-progress',
  hostDirectives: [BRIGHTRAIL_FX_SHELL_HOST],
  standalone: true,
  templateUrl: './brightrail-progress.component.html',
  styleUrl: './brightrail-progress.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    '[class]': 'hostClass()',
    '[style.--br-prog-canvas-bg]': 'resolvedCanvasBackground()',
  },
})
export class BrightrailProgressComponent {
  private static nextId = 0;

  /** Unique SVG defs id when multiple progress rings share a page. */
  readonly svgDefId = `br-prog-${++BrightrailProgressComponent.nextId}`;
  /** Layout: horizontal bar or radial ring. */
  readonly type = input<BrightrailProgressType>('linear');
  /** Visual treatment (default enterprise, futuristic / glass for hero surfaces). */
  readonly variant = input<BrightrailProgressVariant>('default');
  /** Primary mode; `indeterminate` / `buffer` inputs override when set. */
  readonly mode = input<BrightrailProgressMode>('determinate');
  /** Shorthand: when true, behaves like `mode="indeterminate"`. */
  readonly indeterminate = input(false);
  /** Shorthand: when true, behaves like `mode="buffer"` (requires `bufferValue`). */
  readonly buffer = input(false);

  readonly value = input(0, { transform: toNumber });
  readonly bufferValue = input(0, { transform: toNumber });

  readonly size = input<BrightrailProgressSize>('md');
  readonly statusColor = input<BrightrailProgressStatusColor>('primary');
  readonly trackStyle = input<BrightrailProgressTrackStyle>('solid');

  readonly label = input('');
  readonly detailText = input('');
  readonly kpiTitle = input('');
  readonly kpiStatus = input('');
  readonly etaText = input('');

  readonly showLabel = input(true);
  readonly showPercentage = input(true);
  /** When set, overrides `showPercentage` for the numeric readout. */
  readonly showValue = input<boolean | undefined>(undefined);

  readonly showRingCompleteIcon = input(false);

  /** Light (default) or dark canvas (futuristic / neon). */
  readonly surface = input<BrightrailProgressSurface>('light');

  /**
   * Optional panel background (any CSS `background` value). Futuristic / glass / neon / compact-card
   * variants default to transparent so the parent shows through; set this for a custom plate (e.g. `rgba(15,16,22,.9)`).
   */
  readonly canvasBackground = input<string | undefined>(undefined);

  /**
   * When `variant` is `compact-card`, shows the bordered, shadowed card shell (default).
   * Set `false` for a flush layout (no panel background / border / shadow).
   */
  readonly compactCardPlate = input(true, { transform: booleanAttribute });

  readonly ariaLabel = input<string | undefined>(undefined);

  readonly effectiveMode = computed<BrightrailProgressMode>(() => {
    if (this.indeterminate()) {
      return 'indeterminate';
    }
    if (this.buffer()) {
      return 'buffer';
    }
    return this.mode();
  });

  readonly valueClamped = computed(() => clampPct(this.value()));
  readonly bufferClamped = computed(() => clampPct(this.bufferValue()));

  readonly showValueResolved = computed(() => {
    const v = this.showValue();
    return v !== undefined ? v : this.showPercentage();
  });

  readonly isCircular = computed(() => this.type() === 'circular');
  readonly isCompactCard = computed(() => this.variant() === 'compact-card');

  /** Drives `--br-prog-canvas-bg` on the host (transparent when unset). */
  readonly resolvedCanvasBackground = computed(() => {
    const raw = this.canvasBackground()?.trim();
    return raw && raw.length > 0 ? raw : 'transparent';
  });

  readonly hostClass = computed(() => {
    const parts = [
      'br-prog',
      `br-prog--${this.type()}`,
      `br-prog--size-${this.size()}`,
      `br-prog--${this.statusColor()}`,
      `br-prog--variant-${this.variant()}`,
      `br-prog--track-${this.trackStyle()}`,
      `br-prog--surface-${this.surface()}`,
      `br-prog--mode-${this.effectiveMode()}`,
    ];
    if (this.variant() === 'compact-card' && !this.compactCardPlate()) {
      parts.push('br-prog--compact-no-plate');
    }
    return parts.join(' ');
  });

  readonly ariaValueNow = computed(() => {
    const m = this.effectiveMode();
    if (m === 'indeterminate' || m === 'query') {
      return null;
    }
    return Math.round(this.valueClamped());
  });

  readonly ariaLabelText = computed(() => {
    const explicit = this.ariaLabel();
    if (explicit) {
      return explicit;
    }
    const lab = this.label();
    if (lab) {
      return lab;
    }
    return 'Progress';
  });

  /** SVG geometry in user units (viewBox 0 0 100 100). Slightly inset from the box edge so inner labels clear stroke + round caps. */
  readonly ringRadius = computed(() => {
    switch (this.size()) {
      case 'sm':
        return 37;
      case 'lg':
        return 39;
      default:
        return 38;
    }
  });

  readonly displayPercentText = computed(() => `${Math.round(this.valueClamped())}%`);
}
