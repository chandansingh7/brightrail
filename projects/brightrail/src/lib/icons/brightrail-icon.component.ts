import { ChangeDetectionStrategy, Component, input } from '@angular/core';

/** Icons used outside buttons (e.g. card headers). */
export type BrightrailIconName = 'more_vert' | 'show_chart';

@Component({
  selector: 'brightrail-icon',
  standalone: true,
  template: `
    @switch (name()) {
      @case ('more_vert') {
        <svg viewBox="0 0 16 16" width="1em" height="1em" aria-hidden="true">
          <circle cx="8" cy="3.25" r="1.35" fill="currentColor" />
          <circle cx="8" cy="8" r="1.35" fill="currentColor" />
          <circle cx="8" cy="12.75" r="1.35" fill="currentColor" />
        </svg>
      }
      @case ('show_chart') {
        <svg viewBox="0 0 24 24" width="1em" height="1em" aria-hidden="true">
          <path
            d="M4 16 L9 11 L13 15 L20 8"
            stroke="currentColor"
            stroke-width="2"
            fill="none"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      }
    }
  `,
  styles: `
    :host {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      line-height: 0;
    }
    :host svg {
      display: block;
      flex-shrink: 0;
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BrightrailIconComponent {
  readonly name = input<BrightrailIconName>('show_chart');
}
