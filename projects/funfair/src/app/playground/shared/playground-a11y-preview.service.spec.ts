import { TestBed } from '@angular/core/testing';

import { PlaygroundA11yPreviewService } from './playground-a11y-preview.service';

describe('PlaygroundA11yPreviewService', () => {
  let service: PlaygroundA11yPreviewService;

  beforeEach(() => {
    localStorage.clear();
    TestBed.configureTestingModule({});
    service = TestBed.inject(PlaygroundA11yPreviewService);
    spyOn(window, 'open');
  });

  afterEach(() => {
    localStorage.clear();
  });

  it('stores payload in localStorage and opens the a11y preview route', () => {
    service.open('button', 'dark', { variant: 'primary' });
    expect(window.open).toHaveBeenCalled();
    const stored = JSON.parse(localStorage.getItem('brightrail.playground.a11y-preview') ?? '{}');
    expect(stored.componentId).toBe('button');
    expect(stored.theme).toBe('dark');
    expect(stored.state).toEqual({ variant: 'primary' });
  });

  it('consumes payload once for matching component id', () => {
    service.open('button', 'light', { size: 'sm' });
    const first = service.consume('button');
    const second = service.consume('button');
    expect(first?.state).toEqual({ size: 'sm' });
    expect(second).toBeNull();
  });
});
