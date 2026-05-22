import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { BRIGHTRAIL_FX_SHELL_HOST } from '../futuristic/brightrail-futuristic-host';

/** Icons available on `BrightrailButtonComponent` (`iconLeft` / `iconRight`). */
export type BrightrailButtonIcon =
  | 'none'
  | 'plus'
  | 'chevron'
  | 'chevron-down'
  | 'check'
  | 'warning'
  | 'trash'
  | 'info'
  | 'heart'
  | 'download'
  | 'upload'
  | 'user'
  | 'filter'
  | 'export'
  | 'edit'
  | 'copy'
  | 'more'
  | 'search'
  | 'calendar'
  | 'close'
  | 'eye'
  | 'eye-off'
  | 'error'
  | 'loader'
  | 'help'
  | 'gear'
  | 'bell'
  | 'headset'
  | 'list'
  | 'chevron-right';

@Component({
  selector: 'brightrail-button-icon',
  hostDirectives: [BRIGHTRAIL_FX_SHELL_HOST],
  standalone: true,
  template: `
    @switch (name()) {
      @case ('plus') {
        <svg viewBox="0 0 16 16" width="1em" height="1em" aria-hidden="true">
          <path d="M8 1v14M1 8h14" stroke="currentColor" stroke-width="2" fill="none" />
        </svg>
      }
      @case ('chevron') {
        <svg viewBox="0 0 16 16" width="1em" height="1em" aria-hidden="true">
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
      @case ('chevron-down') {
        <svg viewBox="0 0 16 16" width="1em" height="1em" aria-hidden="true">
          <path
            d="M3.5 5.5L8 10l4.5-4.5"
            stroke="currentColor"
            stroke-width="1.75"
            fill="none"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      }
      @case ('check') {
        <svg viewBox="0 0 16 16" width="1em" height="1em" aria-hidden="true">
          <path
            d="M2.5 8.5l4 4 7-4.5"
            stroke="currentColor"
            stroke-width="2"
            fill="none"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      }
      @case ('warning') {
        <svg viewBox="0 0 16 16" width="1em" height="1em" aria-hidden="true">
          <path
            d="M8 1.5L14.5 13h-13L8 1.5z"
            stroke="currentColor"
            stroke-width="1.5"
            fill="none"
            stroke-linejoin="round"
          />
          <path d="M8 6v3.5M8 11.5h.01" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" />
        </svg>
      }
      @case ('trash') {
        <svg viewBox="0 0 16 16" width="1em" height="1em" aria-hidden="true">
          <path
            d="M2.5 4h11M5.5 4V2.5h5V4M6 6.5v5M10 6.5v5M3.5 4l1 8h7l1-8"
            stroke="currentColor"
            stroke-width="1.35"
            fill="none"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      }
      @case ('info') {
        <svg viewBox="0 0 16 16" width="1em" height="1em" aria-hidden="true">
          <circle cx="8" cy="8" r="6.25" stroke="currentColor" stroke-width="1.5" fill="none" />
          <path d="M8 7.2V11M8 5.2h.01" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" />
        </svg>
      }
      @case ('heart') {
        <svg viewBox="0 0 16 16" width="1em" height="1em" aria-hidden="true">
          <path
            d="M8 13.5S2.5 9.5 2.5 6a3.25 3.25 0 016.1-1.55L8 5.2l.4-.75A3.25 3.25 0 0113.5 6c0 3.5-5.5 7.5-5.5 7.5z"
            stroke="currentColor"
            stroke-width="1.35"
            fill="none"
            stroke-linejoin="round"
          />
        </svg>
      }
      @case ('download') {
        <svg viewBox="0 0 16 16" width="1em" height="1em" aria-hidden="true">
          <path
            d="M8 2.5v7.5M5 7.5l3 3 3-3M2.5 12.5h11"
            stroke="currentColor"
            stroke-width="1.5"
            fill="none"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      }
      @case ('upload') {
        <svg viewBox="0 0 16 16" width="1em" height="1em" aria-hidden="true">
          <path
            d="M8 13.5V6M5 9l3-3 3 3M2.5 3.5h11"
            stroke="currentColor"
            stroke-width="1.5"
            fill="none"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      }
      @case ('user') {
        <svg viewBox="0 0 16 16" width="1em" height="1em" aria-hidden="true">
          <circle
            cx="8"
            cy="5"
            r="2.25"
            stroke="currentColor"
            stroke-width="1.35"
            fill="none"
          />
          <path
            d="M3 13.5c.8-2.8 2.8-4.25 5-4.25s4.2 1.45 5 4.25"
            stroke="currentColor"
            stroke-width="1.35"
            fill="none"
            stroke-linecap="round"
          />
        </svg>
      }
      @case ('filter') {
        <svg viewBox="0 0 16 16" width="1em" height="1em" aria-hidden="true">
          <path
            d="M2.5 3.5h11L10 8v4.5l-4 2V8L2.5 3.5z"
            stroke="currentColor"
            stroke-width="1.35"
            fill="none"
            stroke-linejoin="round"
          />
        </svg>
      }
      @case ('export') {
        <svg viewBox="0 0 16 16" width="1em" height="1em" aria-hidden="true">
          <path
            d="M9 2.5h4v4M6 10l7-7M2.5 8.5v5h11v-5"
            stroke="currentColor"
            stroke-width="1.35"
            fill="none"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      }
      @case ('edit') {
        <svg viewBox="0 0 16 16" width="1em" height="1em" aria-hidden="true">
          <path
            d="M10.5 2.5l3 3-8 8H5v-2.5l8-8zM9 4l3 3"
            stroke="currentColor"
            stroke-width="1.35"
            fill="none"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      }
      @case ('copy') {
        <svg viewBox="0 0 16 16" width="1em" height="1em" aria-hidden="true">
          <rect
            x="5"
            y="5"
            width="8.5"
            height="8.5"
            rx="1.5"
            stroke="currentColor"
            stroke-width="1.35"
            fill="none"
          />
          <path
            d="M4 10.5H2.5V2.5H10V4"
            stroke="currentColor"
            stroke-width="1.35"
            fill="none"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      }
      @case ('more') {
        <svg viewBox="0 0 16 16" width="1em" height="1em" aria-hidden="true">
          <circle cx="3" cy="8" r="1.35" fill="currentColor" />
          <circle cx="8" cy="8" r="1.35" fill="currentColor" />
          <circle cx="13" cy="8" r="1.35" fill="currentColor" />
        </svg>
      }
      @case ('search') {
        <svg viewBox="0 0 16 16" width="1em" height="1em" aria-hidden="true">
          <circle cx="6.75" cy="6.75" r="4.25" stroke="currentColor" stroke-width="1.5" fill="none" />
          <path d="M9.75 9.75L13.5 13.5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" />
        </svg>
      }
      @case ('calendar') {
        <svg viewBox="0 0 16 16" width="1em" height="1em" aria-hidden="true">
          <rect x="2.5" y="3.5" width="11" height="10" rx="1" stroke="currentColor" stroke-width="1.35" fill="none" />
          <path d="M2.5 6.5h11M5.5 2v2.5M10.5 2v2.5" stroke="currentColor" stroke-width="1.35" stroke-linecap="round" />
        </svg>
      }
      @case ('close') {
        <svg viewBox="0 0 16 16" width="1em" height="1em" aria-hidden="true">
          <path
            d="M4 4l8 8M12 4l-8 8"
            stroke="currentColor"
            stroke-width="1.75"
            fill="none"
            stroke-linecap="round"
          />
        </svg>
      }
      @case ('eye') {
        <svg viewBox="0 0 16 16" width="1em" height="1em" aria-hidden="true">
          <path
            d="M1.5 8s3-4.5 6.5-4.5S14.5 8 14.5 8s-3 4.5-6.5 4.5S1.5 8 1.5 8z"
            stroke="currentColor"
            stroke-width="1.35"
            fill="none"
            stroke-linejoin="round"
          />
          <circle cx="8" cy="8" r="2" stroke="currentColor" stroke-width="1.35" fill="none" />
        </svg>
      }
      @case ('eye-off') {
        <svg viewBox="0 0 16 16" width="1em" height="1em" aria-hidden="true">
          <path
            d="M2 2l12 12M4.5 4.5C2.5 5.6 1.5 8 1.5 8s3 4.5 6.5 4.5c.9 0 1.8-.2 2.6-.6M7 7c.3.6.9 1 1.5 1 .5 0 1-.2 1.3-.5M11.4 11.4c1.8-.9 3.1-2.8 3.1-3.4 0-.5-1.2-2.3-2.9-3.3"
            stroke="currentColor"
            stroke-width="1.35"
            fill="none"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      }
      @case ('error') {
        <svg viewBox="0 0 16 16" width="1em" height="1em" aria-hidden="true">
          <circle cx="8" cy="8" r="6.25" stroke="currentColor" stroke-width="1.5" fill="none" />
          <path
            d="M5.35 5.35l5.3 5.3M10.65 5.35l-5.3 5.3"
            stroke="currentColor"
            stroke-width="1.75"
            fill="none"
            stroke-linecap="round"
          />
        </svg>
      }
      @case ('loader') {
        <svg viewBox="0 0 16 16" width="1em" height="1em" aria-hidden="true">
          <circle
            cx="8"
            cy="8"
            r="6"
            stroke="currentColor"
            stroke-width="2"
            fill="none"
            stroke-linecap="round"
            stroke-dasharray="9 20"
          />
        </svg>
      }
      @case ('help') {
        <svg viewBox="0 0 16 16" width="1em" height="1em" aria-hidden="true">
          <circle cx="8" cy="8" r="6.25" stroke="currentColor" stroke-width="1.5" fill="none" />
          <path
            d="M6.2 6.4c.3-1.1 1.4-1.8 2.6-1.6 1.2.2 2 1.2 1.9 2.4-.1 1.1-.9 1.6-1.6 2.1-.4.3-.7.6-.8 1.1l-.1.6M8 11.8h.01"
            stroke="currentColor"
            stroke-width="1.35"
            fill="none"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      }
      @case ('gear') {
        <svg viewBox="0 0 16 16" width="1em" height="1em" aria-hidden="true">
          <circle cx="8" cy="8" r="2.25" stroke="currentColor" stroke-width="1.35" fill="none" />
          <path
            d="M8 2v2.25M8 11.75V14M2.9 5.3l1.95 1.1M11.15 9.6l1.95 1.1M2 8h2.25M11.75 8H14M2.9 10.7l1.95-1.1M11.15 6.4l1.95-1.1"
            stroke="currentColor"
            stroke-width="1.35"
            stroke-linecap="round"
          />
        </svg>
      }
      @case ('bell') {
        <svg viewBox="0 0 16 16" width="1em" height="1em" aria-hidden="true">
          <path
            d="M8 2.25c1.9 0 3.25 1.25 3.25 3.35v2.4l1 2V10H3.75v-2l1-2.4V5.6c0-2.1 1.35-3.35 3.25-3.35zM6.25 12.25h3.5a1.75 1.75 0 01-3.5 0z"
            stroke="currentColor"
            stroke-width="1.35"
            fill="none"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      }
      @case ('headset') {
        <svg viewBox="0 0 16 16" width="1em" height="1em" aria-hidden="true">
          <path
            d="M4 10.25V8.5a4 4 0 018 0v1.75M4 10.25h1.25a1 1 0 011 1v1a1 1 0 01-1 1H4M12 10.25h-1.25a1 1 0 00-1 1v1a1 1 0 001 1H12"
            stroke="currentColor"
            stroke-width="1.35"
            fill="none"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      }
      @case ('list') {
        <svg viewBox="0 0 16 16" width="1em" height="1em" aria-hidden="true">
          <path d="M4 4.5h9M4 8h9M4 11.5h9" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" />
        </svg>
      }
      @case ('chevron-right') {
        <svg viewBox="0 0 16 16" width="1em" height="1em" aria-hidden="true">
          <path
            d="M6 4l4 4-4 4"
            stroke="currentColor"
            stroke-width="1.75"
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
export class BrightrailButtonIconComponent {
  readonly name = input<BrightrailButtonIcon>('none');
}
