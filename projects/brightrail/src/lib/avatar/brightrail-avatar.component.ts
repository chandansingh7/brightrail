import { NgTemplateOutlet } from '@angular/common';
import { ChangeDetectionStrategy, Component, computed, input } from '@angular/core';

import {
  BrightrailButtonIcon,
  BrightrailButtonIconComponent,
} from '../buttons/brightrail-button-icon.component';
import { BrightrailTooltipDirective } from '../tooltip/brightrail-tooltip.directive';
import { BRIGHTRAIL_FX_SHELL_HOST } from '../futuristic/brightrail-futuristic-host';

export type BrightrailAvatarKind = 'image' | 'initials' | 'icon';
export type BrightrailAvatarShape = 'circle' | 'rounded-square' | 'square';
/** Pixel-aligned sizes from the catalog: xs 16, sm 24, md 32, lg 48, xl 64. `large` is an alias of `lg`. */
export type BrightrailAvatarSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'large';
export type BrightrailAvatarVariant =
  | 'default'
  | 'presence-ring'
  | 'neon'
  | 'ai-assistant'
  | 'glassmorphism'
  | 'cyber'
  | 'sci-fi-badge';
export type BrightrailAvatarBorderStyle = 'none' | 'subtle' | 'soft-glow' | 'ring' | 'hard-edge';
export type BrightrailAvatarStatus = 'none' | 'online' | 'away' | 'busy' | 'offline';
export type BrightrailAvatarStatusPosition =
  | 'bottom-right'
  | 'bottom-left'
  | 'top-right'
  | 'top-left';
export type BrightrailAvatarEnterpriseRole =
  | 'none'
  | 'assignee'
  | 'team-member'
  | 'reviewer'
  | 'comment';
export type BrightrailAvatarState = 'default' | 'hover' | 'active' | 'disabled';
export type BrightrailAvatarTone =
  | 'primary'
  | 'success'
  | 'warning'
  | 'danger'
  | 'info'
  | 'neutral'
  | 'priority';

export function brightrailAvatarInitialsFromName(name: string): string {
  const parts = name.trim().split(/\s+/).filter(Boolean);
  if (parts.length === 0) {
    return '?';
  }
  if (parts.length === 1) {
    return parts[0].slice(0, 2).toUpperCase();
  }
  return (parts[0][0] + parts[parts.length - 1][0]).toUpperCase();
}

@Component({
  selector: 'brightrail-avatar',
  standalone: true,
  imports: [BrightrailButtonIconComponent, NgTemplateOutlet],
  hostDirectives: [
    BRIGHTRAIL_FX_SHELL_HOST,
    {
      directive: BrightrailTooltipDirective,
      inputs: [
        'brightrailTooltip: tooltip',
        'brightrailTooltipPlacement: tooltipPlacement',
        'brightrailTooltipTrigger: tooltipTrigger',
        'brightrailTooltipContentVariant: tooltipContentVariant',
        'brightrailTooltipVariant: tooltipVariant',
        'brightrailTooltipSize: tooltipSize',
        'brightrailTooltipWidthMode: tooltipWidthMode',
        'brightrailTooltipShowArrow: tooltipShowArrow',
        'brightrailTooltipShowDelay: tooltipShowDelay',
        'brightrailTooltipHideDelay: tooltipHideDelay',
        'brightrailTooltipMaxWidth: tooltipMaxWidth',
        'brightrailTooltipDisabled: tooltipDisabled',
        'brightrailTooltipId: tooltipId',
        'brightrailTooltipCloseOnEscape: tooltipCloseOnEscape',
        'brightrailTooltipZIndex: tooltipZIndex',
        'brightrailTooltipTheme: tooltipTheme',
      ],
    },
  ],
  template: `
    <div
      class="br-avatar-root"
      [class]="rootClass()"
      [attr.data-theme]="theme() || null"
      [attr.aria-label]="ariaResolved()"
      [style.--br-avatar-size]="diameter() || null"
      [style.--br-avatar-badge-scale]="badgeScale()"
      [style.--br-avatar-ring]="ringColor() || null"
      [style.--br-avatar-glow]="glowColor() || null"
    >
      @if (profileLayout()) {
        <div class="br-avatar-profile">
          <ng-container *ngTemplateOutlet="avatarFrame" />
          <div class="br-avatar-meta">
            @if (label().trim().length > 0) {
              <div class="br-avatar-meta__label">{{ label() }}</div>
            }
            @if (subtitle().trim().length > 0) {
              <div class="br-avatar-meta__subtitle">{{ subtitle() }}</div>
            }
          </div>
        </div>
      } @else {
        <ng-container *ngTemplateOutlet="avatarFrame" />
      }

      <ng-template #avatarFrame>
        <div class="br-avatar-frame">
          <div class="br-avatar__shell">
            @switch (kind()) {
              @case ('image') {
                <img
                  class="br-avatar__media"
                  [src]="imageSrc()"
                  [alt]="imageAlt() || ariaResolved() || 'Avatar'"
                  loading="lazy"
                  decoding="async"
                />
              }
              @case ('initials') {
                <span class="br-avatar__initials">{{ resolvedInitials() }}</span>
              }
              @case ('icon') {
                <span class="br-avatar__icon" aria-hidden="true">
                  <brightrail-button-icon [name]="icon()" />
                </span>
              }
            }
          </div>
          @if (enterpriseRole() !== 'none') {
            <span
              class="br-avatar__enterprise"
              [class]="'br-avatar__enterprise--' + enterpriseRole()"
              aria-hidden="true"
            >
              @switch (enterpriseRole()) {
                @case ('assignee') {
                  <svg viewBox="0 0 16 16" width="1em" height="1em" aria-hidden="true">
                    <path
                      fill="currentColor"
                      d="M6.6 11.8 3.4 8.6l1.1-1.1 2.1 2.1 4.8-4.8 1.1 1.1-5.9 5.9z"
                    />
                  </svg>
                }
                @case ('team-member') {
                  <svg viewBox="0 0 16 16" width="1em" height="1em" aria-hidden="true">
                    <path
                      fill="currentColor"
                      d="M8 1.2 9.9 5l4.1.6-3 2.9.7 4.1L8 11.1 4.3 12.6l.7-4.1-3-2.9 4.1-.6L8 1.2z"
                    />
                  </svg>
                }
                @case ('reviewer') {
                  <svg viewBox="0 0 16 16" width="1em" height="1em" aria-hidden="true">
                    <path
                      fill="currentColor"
                      d="M8 1 12 3v5c0 2.5-1.7 4.7-4 5.3L8 15l-4-1.7C1.7 12.7 0 10.5 0 8V3l8-2zm0 2.2L2.5 4.4V8c0 1.9 1.3 3.6 3 4.1l2.5 1 2.5-1c1.7-.6 3-2.2 3-4.1V4.4L8 3.2z"
                    />
                  </svg>
                }
                @case ('comment') {
                  <svg viewBox="0 0 16 16" width="1em" height="1em" aria-hidden="true">
                    <circle cx="8" cy="8" r="6" fill="currentColor" />
                  </svg>
                }
              }
            </span>
          } @else if (status() !== 'none') {
            <span
              class="br-avatar__status"
              [class]="'br-avatar__status--' + status()"
              [attr.aria-label]="statusAria()"
              role="img"
            ></span>
          }
        </div>
      </ng-template>
    </div>
  `,
  styleUrl: './brightrail-avatar.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BrightrailAvatarComponent {
  readonly kind = input<BrightrailAvatarKind>('image');
  readonly imageSrc = input('');
  readonly imageAlt = input('');
  /** Explicit initials; when empty and kind is initials, derived from {@link displayName}. */
  readonly initials = input('');
  /** Full name for initials generation and accessible labeling. */
  readonly displayName = input('', { alias: 'name' });
  readonly icon = input<BrightrailButtonIcon>('user');
  readonly shape = input<BrightrailAvatarShape>('circle');
  readonly size = input<BrightrailAvatarSize>('md');
  readonly variant = input<BrightrailAvatarVariant>('default');
  readonly borderStyle = input<BrightrailAvatarBorderStyle>('none');
  readonly status = input<BrightrailAvatarStatus>('none');
  readonly statusPosition = input<BrightrailAvatarStatusPosition>('bottom-right');
  readonly enterpriseRole = input<BrightrailAvatarEnterpriseRole>('none');
  readonly state = input<BrightrailAvatarState>('default');
  readonly tone = input<BrightrailAvatarTone>('primary');
  readonly label = input('');
  readonly subtitle = input('');
  /** When true, label and subtitle render in a profile column under the glyph. */
  readonly showProfileMeta = input(false);
  /** Optional accessible label override. */
  readonly ariaLabel = input<string | undefined>(undefined);
  /**
   * Override shell diameter (any CSS length). When set, wins over {@link size}.
   * Consumers can also set `--br-avatar-size` on `:host` or a parent.
   */
  readonly diameter = input<string | undefined>(undefined);
  /** CSS color for ring-focused variants (falls back to token). */
  readonly ringColor = input<string | undefined>(undefined);
  /** CSS color for glow / neon halos. */
  readonly glowColor = input<string | undefined>(undefined);
  /** Scales the presence / enterprise badge; 1 is default. */
  readonly badgeScale = input(1);
  /** Optional theme token for app-level styling hooks (e.g. material-light). */
  readonly theme = input<string | undefined>(undefined);

  readonly resolvedInitials = computed(() => {
    const explicit = this.initials().trim();
    if (explicit.length > 0) {
      return explicit.slice(0, 3).toUpperCase();
    }
    return brightrailAvatarInitialsFromName(this.displayName());
  });

  readonly ariaResolved = computed(() => {
    if (this.ariaLabel() != null && this.ariaLabel() !== '') {
      return this.ariaLabel()!;
    }
    const l = this.label().trim();
    if (l.length > 0) {
      return l;
    }
    const n = this.displayName().trim();
    if (n.length > 0) {
      return n;
    }
    if (this.kind() === 'initials') {
      return this.resolvedInitials();
    }
    return this.imageAlt().trim() || null;
  });

  readonly profileLayout = computed(
    () => this.showProfileMeta() && (this.label().trim().length > 0 || this.subtitle().trim().length > 0),
  );

  readonly layoutSize = computed((): 'xs' | 'sm' | 'md' | 'lg' | 'xl' => {
    const s = this.size();
    return s === 'large' ? 'lg' : s;
  });

  readonly rootClass = computed(() => {
    const parts = [
      'br-avatar-root',
      `br-avatar--kind-${this.kind()}`,
      `br-avatar--shape-${this.shape()}`,
      `br-avatar--size-${this.layoutSize()}`,
      `br-avatar--variant-${this.variant()}`,
      `br-avatar--border-${this.borderStyle()}`,
      `br-avatar--tone-${this.tone()}`,
      `br-avatar--state-${this.state()}`,
      `br-avatar--status-${this.statusPosition()}`,
    ];
    if (this.profileLayout()) {
      parts.push('br-avatar--profile');
    }
    return parts.join(' ');
  });

  statusAria(): string {
    switch (this.status()) {
      case 'online':
        return 'Online';
      case 'away':
        return 'Away';
      case 'busy':
        return 'Busy';
      case 'offline':
        return 'Offline';
      default:
        return '';
    }
  }
}
