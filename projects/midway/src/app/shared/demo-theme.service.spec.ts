import { TestBed } from '@angular/core/testing';

import { DEMO_SITES } from './demo-sites.registry';
import { DemoThemeService } from './demo-theme.service';

describe('DemoThemeService', () => {
  let service: DemoThemeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DemoThemeService);
  });

  it('applies site theme, fx shell, and accent token', () => {
    service.applySite(DEMO_SITES.cyber);
    const html = document.documentElement;

    expect(html.dataset['theme']).toBe('dark');
    expect(html.dataset['brFx']).toBe('cyber');
    expect(html.style.getPropertyValue('--mw-accent')).toBe('#00ffaa');
  });

  it('clears theme overrides on reset', () => {
    service.applySite(DEMO_SITES.healthcare);
    service.reset();

    expect(document.documentElement.dataset['theme']).toBe('light');
    expect(document.documentElement.dataset['brFx']).toBeUndefined();
  });
});
