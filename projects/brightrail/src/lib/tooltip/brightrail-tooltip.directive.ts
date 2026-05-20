import { isPlatformBrowser } from '@angular/common';
import {
  Directive,
  ElementRef,
  TemplateRef,
  DOCUMENT,
  PLATFORM_ID,
  DestroyRef,
  NgZone,
  Renderer2,
  ViewContainerRef,
  inject,
  input,
  computed,
} from '@angular/core';

import {
  type BrightrailTooltipContentVariant,
  type BrightrailTooltipPlacement,
  type BrightrailTooltipSize,
  type BrightrailTooltipTrigger,
  type BrightrailTooltipVariant,
  type BrightrailTooltipWidthMode,
} from './brightrail-tooltip.types';

export type {
  BrightrailTooltipContentVariant,
  BrightrailTooltipPlacement,
  BrightrailTooltipSize,
  BrightrailTooltipTrigger,
  BrightrailTooltipVariant,
  BrightrailTooltipWidthMode,
} from './brightrail-tooltip.types';

const GAP = 10;
const ARROW = 6;

let nextTooltipId = 0;

@Directive({
  selector: '[brightrailTooltip]',
  standalone: true,
  host: {
    '[attr.tabindex]': 'resolvedTabindex()',
    '[attr.aria-describedby]': 'describedBy()',
    '(mouseenter)': 'onMouseEnter()',
    '(mouseleave)': 'onMouseLeave()',
    '(focusin)': 'onFocusIn()',
    '(focusout)': 'onFocusOut()',
    '(click)': 'onClick($event)',
  },
})
export class BrightrailTooltipDirective {
  private readonly host = inject(ElementRef<HTMLElement>);
  private readonly doc = inject(DOCUMENT);
  private readonly platformId = inject(PLATFORM_ID);
  private readonly zone = inject(NgZone);
  private readonly destroyRef = inject(DestroyRef);
  private readonly renderer = inject(Renderer2);
  private readonly vcr = inject(ViewContainerRef);

  /** Plain text or rich `TemplateRef` content. */
  readonly brightrailTooltip = input<string | TemplateRef<unknown> | null | undefined>(undefined);

  readonly brightrailTooltipPlacement = input<BrightrailTooltipPlacement>('top');
  readonly brightrailTooltipTrigger = input<BrightrailTooltipTrigger>('hover');
  readonly brightrailTooltipContentVariant = input<BrightrailTooltipContentVariant>('default');
  readonly brightrailTooltipVariant = input<BrightrailTooltipVariant>('default');
  readonly brightrailTooltipSize = input<BrightrailTooltipSize>('md');
  readonly brightrailTooltipWidthMode = input<BrightrailTooltipWidthMode>('auto');
  readonly brightrailTooltipShowArrow = input(true);
  /** Delay before the tooltip appears (ms). */
  readonly brightrailTooltipShowDelay = input(0);
  /** Delay before the tooltip hides after leaving (ms). */
  readonly brightrailTooltipHideDelay = input(0);
  /** Pixel cap for wrapping long strings (maps to CSS max-width). */
  readonly brightrailTooltipMaxWidth = input(240);
  readonly brightrailTooltipDisabled = input(false);
  /** Optional stable id for `role="tooltip"`; auto-generated when omitted. */
  readonly brightrailTooltipId = input<string | undefined>(undefined);
  readonly brightrailTooltipCloseOnEscape = input(true);
  /** Raise portal z-index for nested overlays. */
  readonly brightrailTooltipZIndex = input(10800);
  /** Optional theme hook on the portal (e.g. material-light). */
  readonly brightrailTooltipTheme = input<string | undefined>(undefined);

  private readonly tooltipUid = `br-tooltip-${nextTooltipId++}`;
  private portal: HTMLElement | null = null;
  private panel: HTMLElement | null = null;
  private bodyEl: HTMLElement | null = null;
  private arrowEl: HTMLElement | null = null;
  private embeddedViewCleanup: (() => void) | null = null;
  private panelUnlisten: Array<() => void> = [];

  private open = false;
  private showTimer: ReturnType<typeof setTimeout> | null = null;
  private hideTimer: ReturnType<typeof setTimeout> | null = null;

  private boundReposition = (): void => {
    if (this.open) this.position();
  };

  private boundDocMouseDown = (ev: MouseEvent): void => {
    if (!this.open || this.brightrailTooltipTrigger() !== 'click') return;
    const t = ev.target as Node | null;
    if (t && (this.host.nativeElement.contains(t) || this.panel?.contains(t))) {
      return;
    }
    this.hideNow();
  };

  private boundDocKeydown = (ev: KeyboardEvent): void => {
    if (!this.open || !this.brightrailTooltipCloseOnEscape()) return;
    if (ev.key === 'Escape') {
      ev.stopPropagation();
      this.hideNow();
    }
  };

  readonly resolvedTabindex = computed((): string | null => {
    if (this.brightrailTooltipDisabled()) return null;
    if (this.brightrailTooltipTrigger() !== 'focus') return null;
    const el = this.host.nativeElement;
    if (el.matches('button,a[href],input,select,textarea,[contenteditable="true"]')) {
      return null;
    }
    const existing = el.getAttribute('tabindex');
    if (existing != null) return null;
    return '0';
  });

  readonly describedBy = computed((): string | null => {
    if (!this.open) return null;
    return this.brightrailTooltipId() ?? this.tooltipUid;
  });

  constructor() {
    this.destroyRef.onDestroy(() => this.teardownPortal());
  }

  private hasContent(): boolean {
    const c = this.brightrailTooltip();
    if (c == null) return false;
    if (typeof c === 'string') return c.trim().length > 0;
    return true;
  }

  private clearTimers(): void {
    if (this.showTimer) {
      clearTimeout(this.showTimer);
      this.showTimer = null;
    }
    if (this.hideTimer) {
      clearTimeout(this.hideTimer);
      this.hideTimer = null;
    }
  }

  private scheduleShow(): void {
    if (!isPlatformBrowser(this.platformId) || this.brightrailTooltipDisabled() || !this.hasContent()) {
      return;
    }
    this.clearHide();
    const d = Math.max(0, this.brightrailTooltipShowDelay());
    this.showTimer = setTimeout(() => {
      this.showTimer = null;
      this.showNow();
    }, d);
  }

  private scheduleHide(): void {
    this.clearShow();
    const d = Math.max(0, this.brightrailTooltipHideDelay());
    this.hideTimer = setTimeout(() => {
      this.hideTimer = null;
      this.hideNow();
    }, d);
  }

  private clearShow(): void {
    if (this.showTimer) {
      clearTimeout(this.showTimer);
      this.showTimer = null;
    }
  }

  private clearHide(): void {
    if (this.hideTimer) {
      clearTimeout(this.hideTimer);
      this.hideTimer = null;
    }
  }

  private showNow(): void {
    if (!isPlatformBrowser(this.platformId) || this.open) return;
    this.ensurePortal();
    if (!this.panel || !this.portal) return;
    this.applyContent();
    this.applyShellClasses();
    this.portal.style.zIndex = String(this.brightrailTooltipZIndex());
    this.renderer.setStyle(this.panel, '--br-tooltip-max-width', `${this.brightrailTooltipMaxWidth()}px`);
    this.doc.body.appendChild(this.portal);
    this.open = true;
    this.position();
    this.zone.runOutsideAngular(() => {
      window.addEventListener('scroll', this.boundReposition, true);
      window.addEventListener('resize', this.boundReposition);
    });
    if (this.brightrailTooltipTrigger() === 'click') {
      this.doc.addEventListener('mousedown', this.boundDocMouseDown, true);
    }
    if (this.brightrailTooltipCloseOnEscape()) {
      this.doc.addEventListener('keydown', this.boundDocKeydown, true);
    }
  }

  private hideNow(): void {
    this.clearTimers();
    if (!this.open) return;
    this.zone.runOutsideAngular(() => {
      window.removeEventListener('scroll', this.boundReposition, true);
      window.removeEventListener('resize', this.boundReposition);
    });
    this.doc.removeEventListener('mousedown', this.boundDocMouseDown, true);
    this.doc.removeEventListener('keydown', this.boundDocKeydown, true);
    this.open = false;
    this.clearEmbedded();
    if (this.portal?.parentNode) {
      this.portal.parentNode.removeChild(this.portal);
    }
  }

  private teardownPortal(): void {
    this.hideNow();
    for (const u of this.panelUnlisten) u();
    this.panelUnlisten = [];
    this.portal = null;
    this.panel = null;
    this.bodyEl = null;
    this.arrowEl = null;
  }

  private ensurePortal(): void {
    if (this.portal) return;
    const portal = this.renderer.createElement('div') as HTMLElement;
    this.renderer.addClass(portal, 'br-tooltip-portal');
    const panel = this.renderer.createElement('div') as HTMLElement;
    this.renderer.addClass(panel, 'br-tooltip');
    this.renderer.setAttribute(panel, 'role', 'tooltip');
    this.renderer.setAttribute(panel, 'id', this.brightrailTooltipId() ?? this.tooltipUid);
    const theme = this.brightrailTooltipTheme();
    if (theme) {
      this.renderer.setAttribute(panel, 'data-theme', theme);
    }
    const body = this.renderer.createElement('div') as HTMLElement;
    this.renderer.addClass(body, 'br-tooltip__body');
    const arrow = this.renderer.createElement('div') as HTMLElement;
    this.renderer.addClass(arrow, 'br-tooltip__arrow');
    this.renderer.appendChild(panel, body);
    this.renderer.appendChild(panel, arrow);
    this.renderer.appendChild(portal, panel);
    this.portal = portal;
    this.panel = panel;
    this.bodyEl = body;
    this.arrowEl = arrow;

    if (this.panelUnlisten.length === 0) {
      this.panelUnlisten.push(
        this.renderer.listen(panel, 'mouseenter', () => this.onPanelMouseEnter()),
        this.renderer.listen(panel, 'mouseleave', () => this.onPanelMouseLeave()),
      );
    }
  }

  private applyShellClasses(): void {
    if (!this.panel || !this.arrowEl) return;
    const p = this.panel;
    const placement = this.brightrailTooltipPlacement();
    const size = this.brightrailTooltipSize();
    const shell = this.brightrailTooltipVariant();
    const content = this.brightrailTooltipContentVariant();
    const width = this.brightrailTooltipWidthMode();
    const arrow = this.brightrailTooltipShowArrow();

    const cls = [
      'br-tooltip',
      `br-tooltip--placement-${placement}`,
      `br-tooltip--size-${size}`,
      `br-tooltip--variant-${shell}`,
      `br-tooltip--content-${content}`,
      width === 'min-content' ? 'br-tooltip--width-min' : 'br-tooltip--width-auto',
      arrow ? 'br-tooltip--arrow-true' : 'br-tooltip--arrow-false',
    ];
    p.className = cls.join(' ');

    const c = this.brightrailTooltip();
    const interactive =
      this.brightrailTooltipTrigger() === 'click' || (c != null && typeof c !== 'string');
    if (interactive) {
      this.renderer.addClass(this.portal!, 'is-interactive');
    } else {
      this.renderer.removeClass(this.portal!, 'is-interactive');
    }
  }

  private applyContent(): void {
    if (!this.bodyEl) return;
    this.clearEmbedded();
    while (this.bodyEl.firstChild) {
      this.bodyEl.removeChild(this.bodyEl.firstChild);
    }
    const c = this.brightrailTooltip();
    if (typeof c === 'string') {
      this.bodyEl.textContent = c;
      return;
    }
    if (c instanceof TemplateRef) {
      const view = this.vcr.createEmbeddedView(c);
      view.detectChanges();
      for (const n of view.rootNodes) {
        this.bodyEl.appendChild(n);
      }
      this.embeddedViewCleanup = () => {
        view.destroy();
        this.embeddedViewCleanup = null;
      };
    }
  }

  private clearEmbedded(): void {
    this.embeddedViewCleanup?.();
  }

  private position(): void {
    if (!this.panel || !this.portal || !isPlatformBrowser(this.platformId)) return;
    const anchor = this.host.nativeElement.getBoundingClientRect();
    const placement = this.brightrailTooltipPlacement();
    this.panel.style.visibility = 'hidden';
    this.panel.style.left = '0';
    this.panel.style.top = '0';
    const rect = this.panel.getBoundingClientRect();
    const gap = GAP + (this.brightrailTooltipShowArrow() ? ARROW : 0);
    let top = 0;
    let left = 0;
    switch (placement) {
      case 'top':
        top = anchor.top - rect.height - gap;
        left = anchor.left + anchor.width / 2 - rect.width / 2;
        break;
      case 'bottom':
        top = anchor.bottom + gap;
        left = anchor.left + anchor.width / 2 - rect.width / 2;
        break;
      case 'left':
        top = anchor.top + anchor.height / 2 - rect.height / 2;
        left = anchor.left - rect.width - gap;
        break;
      case 'right':
        top = anchor.top + anchor.height / 2 - rect.height / 2;
        left = anchor.right + gap;
        break;
    }
    const pad = 8;
    const vw = window.innerWidth;
    const vh = window.innerHeight;
    left = Math.min(Math.max(left, pad), vw - rect.width - pad);
    top = Math.min(Math.max(top, pad), vh - rect.height - pad);
    this.panel.style.top = `${top}px`;
    this.panel.style.left = `${left}px`;
    this.panel.style.visibility = '';
  }

  /** Hover */
  onMouseEnter(): void {
    if (this.brightrailTooltipTrigger() !== 'hover') return;
    this.scheduleShow();
  }

  onMouseLeave(): void {
    if (this.brightrailTooltipTrigger() !== 'hover') return;
    this.scheduleHide();
  }

  onPanelMouseEnter(): void {
    if (this.brightrailTooltipTrigger() !== 'hover') return;
    this.clearHide();
  }

  onPanelMouseLeave(): void {
    if (this.brightrailTooltipTrigger() !== 'hover') return;
    this.scheduleHide();
  }

  /** Focus */
  onFocusIn(): void {
    if (this.brightrailTooltipTrigger() !== 'focus') return;
    this.scheduleShow();
  }

  onFocusOut(): void {
    if (this.brightrailTooltipTrigger() !== 'focus') return;
    this.scheduleHide();
  }

  /** Click toggle */
  onClick(ev: MouseEvent): void {
    if (this.brightrailTooltipTrigger() !== 'click') return;
    ev.stopPropagation();
    if (this.open) {
      this.hideNow();
    } else {
      this.clearTimers();
      this.showNow();
    }
  }
}
