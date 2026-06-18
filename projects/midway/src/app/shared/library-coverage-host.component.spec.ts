import { TestBed } from '@angular/core/testing';

import { LibraryCoverageHostComponent } from './library-coverage-host.component';

describe('LibraryCoverageHostComponent', () => {
  let observerCallback: IntersectionObserverCallback | null = null;

  beforeEach(() => {
    observerCallback = null;

    class MockIntersectionObserver implements IntersectionObserver {
      readonly root: Element | Document | null = null;
      readonly rootMargin = '';
      readonly thresholds: readonly number[] = [];

      observe = jasmine.createSpy('observe');
      disconnect = jasmine.createSpy('disconnect');
      unobserve = jasmine.createSpy('unobserve');
      takeRecords = (): IntersectionObserverEntry[] => [];

      constructor(callback: IntersectionObserverCallback) {
        observerCallback = callback;
      }
    }

    (window as typeof window & { IntersectionObserver: typeof IntersectionObserver }).IntersectionObserver =
      MockIntersectionObserver as unknown as typeof IntersectionObserver;
  });

  it('creates the host without loading the showcase immediately', () => {
    const fixture = TestBed.createComponent(LibraryCoverageHostComponent);
    fixture.detectChanges();
    expect(fixture.componentInstance).toBeTruthy();
    expect(fixture.nativeElement.querySelector('app-library-coverage-showcase')).toBeFalsy();
  });

  it('starts loading the showcase when the sentinel intersects the viewport', async () => {
    const fixture = TestBed.createComponent(LibraryCoverageHostComponent);
    const component = fixture.componentInstance as LibraryCoverageHostComponent & {
      loadShowcase: () => Promise<void>;
    };
    const loadSpy = spyOn(component, 'loadShowcase').and.resolveTo();

    fixture.detectChanges();

    expect(observerCallback).not.toBeNull();
    observerCallback!([{ isIntersecting: true } as IntersectionObserverEntry], {} as IntersectionObserver);

    await fixture.whenStable();
    expect(loadSpy).toHaveBeenCalled();
  });
});
