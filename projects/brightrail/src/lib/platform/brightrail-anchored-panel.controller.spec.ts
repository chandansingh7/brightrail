import { DestroyRef } from '@angular/core';

import {
  BrightrailAnchoredPanelController,
  type BrightrailAnchoredPanelOptions,
} from './brightrail-anchored-panel.controller';

/** Explicit test fixture options — not library defaults. */
const TEST_PANEL_OPTIONS: BrightrailAnchoredPanelOptions = {
  gap: 4,
  maxHeight: 120,
  zIndex: 1100,
  viewportPadding: 8,
};

function domRect(partial: Partial<DOMRect>): DOMRect {
  return {
    x: 0,
    y: 0,
    width: 0,
    height: 0,
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    toJSON: () => ({}),
    ...partial,
  } as DOMRect;
}

describe('BrightrailAnchoredPanelController', () => {
  let documentRef: Document;
  let destroyCallbacks: Array<() => void>;
  let destroyRef: DestroyRef;
  let controller: BrightrailAnchoredPanelController;
  let host: HTMLElement;
  let anchor: HTMLElement;
  let panel: HTMLElement;

  beforeEach(() => {
    documentRef = document;
    destroyCallbacks = [];
    destroyRef = {
      onDestroy: (cb: () => void) => {
        destroyCallbacks.push(cb);
      },
    } as DestroyRef;

    host = documentRef.createElement('div');
    host.id = 'host';
    anchor = documentRef.createElement('div');
    anchor.id = 'anchor';
    panel = documentRef.createElement('div');
    panel.id = 'panel';
    panel.textContent = 'Panel';
    host.append(anchor, panel);
    documentRef.body.appendChild(host);

    controller = new BrightrailAnchoredPanelController(documentRef, destroyRef);
  });

  afterEach(() => {
    controller.detach();
    destroyCallbacks.forEach((cb) => cb());
    host.remove();
  });

  it('moves the panel to body and positions it below the anchor', () => {
    spyOn(anchor, 'getBoundingClientRect').and.returnValue(
      domRect({ left: 40, top: 60, width: 200, height: 32, bottom: 92, right: 240 }),
    );
    spyOn(panel, 'getBoundingClientRect').and.returnValue(
      domRect({ width: 200, height: 120, top: 0, left: 0, bottom: 120, right: 200 }),
    );

    controller.attach(anchor, panel, TEST_PANEL_OPTIONS);

    expect(panel.parentElement).toBe(document.body);
    expect(panel.classList.contains('br-anchored-panel')).toBeTrue();
    expect(panel.style.position).toBe('fixed');
    expect(panel.style.top).toBe(`${92 + TEST_PANEL_OPTIONS.gap}px`);
    expect(panel.style.width).toBe('200px');
    expect(panel.style.zIndex).toBe(String(TEST_PANEL_OPTIONS.zIndex));
  });

  it('restores the panel on detach', () => {
    spyOn(anchor, 'getBoundingClientRect').and.returnValue(
      domRect({ left: 0, top: 0, width: 100, height: 24, bottom: 24, right: 100 }),
    );
    spyOn(panel, 'getBoundingClientRect').and.returnValue(
      domRect({ width: 100, height: 80, top: 0, left: 0, bottom: 80, right: 100 }),
    );

    controller.attach(anchor, panel, TEST_PANEL_OPTIONS);
    controller.detach();

    expect(host.contains(panel)).toBeTrue();
    expect(panel.classList.contains('br-anchored-panel')).toBeFalse();
  });

  it('contains nodes from anchor and portaled panel', () => {
    spyOn(anchor, 'getBoundingClientRect').and.returnValue(
      domRect({ left: 0, top: 0, width: 100, height: 24, bottom: 24, right: 100 }),
    );
    spyOn(panel, 'getBoundingClientRect').and.returnValue(
      domRect({ width: 100, height: 80, top: 0, left: 0, bottom: 80, right: 100 }),
    );

    controller.attach(anchor, panel, TEST_PANEL_OPTIONS);

    expect(controller.contains(anchor)).toBeTrue();
    expect(controller.contains(panel)).toBeTrue();
    expect(controller.contains(document.createElement('span'))).toBeFalse();
  });

  it('falls back to host containment before attach', () => {
    const inner = documentRef.createElement('span');
    anchor.appendChild(inner);

    expect(controller.contains(inner, host)).toBeTrue();
    expect(controller.contains(documentRef.body, host)).toBeFalse();
  });
});
