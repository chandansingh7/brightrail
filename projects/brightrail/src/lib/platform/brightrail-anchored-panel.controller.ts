import type { DestroyRef } from '@angular/core';

/** Layout options supplied by each field component — no library-wide defaults. */
export interface BrightrailAnchoredPanelOptions {
  gap: number;
  maxHeight: number;
  zIndex: number;
  viewportPadding: number;
}

/**
 * Moves a dropdown panel to `document.body` and positions it with `position: fixed`
 * so it is not clipped by overflow ancestors (accordions, tables, etc.).
 */
export class BrightrailAnchoredPanelController {
  private anchor: HTMLElement | null = null;
  private panel: HTMLElement | null = null;
  private placeholder: Comment | null = null;
  private options: BrightrailAnchoredPanelOptions | null = null;
  private listenersBound = false;

  private readonly boundReposition = (): void => {
    this.reposition();
  };

  constructor(
    private readonly document: Document,
    destroyRef: DestroyRef,
  ) {
    destroyRef.onDestroy(() => this.detach());
  }

  attach(anchor: HTMLElement, panel: HTMLElement, opts: BrightrailAnchoredPanelOptions): void {
    if (this.panel === panel && this.anchor === anchor) {
      this.reposition();
      return;
    }

    this.detach();
    this.anchor = anchor;
    this.panel = panel;
    this.options = opts;

    this.placeholder = this.document.createComment('br-anchored-panel');
    panel.parentNode?.insertBefore(this.placeholder, panel);
    panel.classList.add('br-anchored-panel');
    this.document.body.appendChild(panel);

    this.bindListeners();
    this.reposition();
  }

  detach(): void {
    this.unbindListeners();

    if (this.panel && this.placeholder?.parentNode) {
      this.panel.classList.remove('br-anchored-panel');
      this.clearPositionStyles(this.panel);
      this.placeholder.parentNode.insertBefore(this.panel, this.placeholder);
      this.placeholder.remove();
    } else if (this.panel) {
      this.panel.classList.remove('br-anchored-panel');
      this.clearPositionStyles(this.panel);
      this.panel.remove();
    }

    this.anchor = null;
    this.panel = null;
    this.placeholder = null;
    this.options = null;
  }

  contains(node: Node | null | undefined, fallbackHost?: HTMLElement | null): boolean {
    if (!node) {
      return false;
    }
    if (this.anchor?.contains(node) || this.panel?.contains(node)) {
      return true;
    }
    if (!this.isAttached() && fallbackHost?.contains(node)) {
      return true;
    }
    return false;
  }

  getPanel(): HTMLElement | null {
    return this.panel;
  }

  isAttached(): boolean {
    return this.panel !== null && this.panel.classList.contains('br-anchored-panel');
  }

  private reposition(): void {
    if (!this.anchor || !this.panel || !this.options || !this.panel.isConnected) {
      return;
    }

    const rect = this.anchor.getBoundingClientRect();
    const { gap, maxHeight, zIndex, viewportPadding } = this.options;

    this.panel.style.width = `${Math.max(rect.width, 0)}px`;
    this.panel.style.maxHeight = `${maxHeight}px`;

    const measured = this.panel.getBoundingClientRect();
    const panelHeight = Math.min(measured.height || maxHeight, maxHeight);
    const panelWidth = Math.max(rect.width, measured.width);

    const spaceBelow = window.innerHeight - rect.bottom - viewportPadding;
    const spaceAbove = rect.top - viewportPadding;
    const openUp = spaceBelow < panelHeight + gap && spaceAbove >= panelHeight + gap;

    let top = openUp ? rect.top - panelHeight - gap : rect.bottom + gap;
    top = Math.max(viewportPadding, Math.min(top, window.innerHeight - panelHeight - viewportPadding));

    let left = rect.left;
    left = Math.max(viewportPadding, Math.min(left, window.innerWidth - panelWidth - viewportPadding));

    this.panel.style.position = 'fixed';
    this.panel.style.left = `${left}px`;
    this.panel.style.top = `${top}px`;
    this.panel.style.right = 'auto';
    this.panel.style.zIndex = String(zIndex);
    this.panel.dataset['brAnchoredPlacement'] = openUp ? 'above' : 'below';
  }

  private bindListeners(): void {
    if (this.listenersBound) {
      return;
    }
    window.addEventListener('scroll', this.boundReposition, true);
    window.addEventListener('resize', this.boundReposition);
    this.listenersBound = true;
  }

  private unbindListeners(): void {
    if (!this.listenersBound) {
      return;
    }
    window.removeEventListener('scroll', this.boundReposition, true);
    window.removeEventListener('resize', this.boundReposition);
    this.listenersBound = false;
  }

  private clearPositionStyles(panel: HTMLElement): void {
    panel.style.position = '';
    panel.style.left = '';
    panel.style.top = '';
    panel.style.right = '';
    panel.style.width = '';
    panel.style.zIndex = '';
    panel.style.maxHeight = '';
    delete panel.dataset['brAnchoredPlacement'];
  }
}
