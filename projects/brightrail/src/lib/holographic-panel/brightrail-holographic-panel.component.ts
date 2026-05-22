import { ChangeDetectionStrategy, Component, computed, input } from '@angular/core';
import { BRIGHTRAIL_FX_SHELL_HOST } from '../futuristic/brightrail-futuristic-host';
import {
  BrightrailHolographicMetric,
  BrightrailHolographicPanelAppearance,
} from './brightrail-holographic-panel.types';

@Component({
  selector: 'brightrail-holographic-panel',
  hostDirectives: [BRIGHTRAIL_FX_SHELL_HOST],
  standalone: true,
  template: `
    <section
      class="br-holo-panel"
      [class]="hostClass()"
      [attr.aria-label]="ariaLabel() || title() || 'Metrics panel'"
    >
      @if (title()) {
        <header class="br-holo-panel__title">{{ title() }}</header>
      }
      <div class="br-holo-panel__grid" role="list">
        @for (metric of metrics(); track metric.label) {
          <article class="br-holo-panel__metric" role="listitem">
            <span class="br-holo-panel__label">{{ metric.label }}</span>
            <span class="br-holo-panel__value">
              {{ metric.value }}
              @if (metric.unit) {
                <span class="br-holo-panel__unit">{{ metric.unit }}</span>
              }
            </span>
            @if (metric.trend) {
              <span class="br-holo-panel__trend" [attr.data-trend]="metric.trend" aria-hidden="true">
                {{ trendGlyph(metric.trend) }}
              </span>
            }
          </article>
        }
      </div>
    </section>
  `,
  styleUrl: './brightrail-holographic-panel.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BrightrailHolographicPanelComponent {
  readonly title = input('');
  readonly ariaLabel = input('');
  readonly appearance = input<BrightrailHolographicPanelAppearance>('glass');
  readonly metrics = input<readonly BrightrailHolographicMetric[]>([]);

  readonly hostClass = computed(() => `br-holo-panel--${this.appearance()}`);

  trendGlyph(trend: NonNullable<BrightrailHolographicMetric['trend']>): string {
    if (trend === 'up') return '▲';
    if (trend === 'down') return '▼';
    return '—';
  }
}
