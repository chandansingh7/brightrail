import { TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';

import { SaasSiteComponent } from './saas-site.component';

describe('SaasSiteComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SaasSiteComponent],
      providers: [provideRouter([])],
    }).compileComponents();
  });

  it('renders without duplicate directive errors', () => {
    const fixture = TestBed.createComponent(SaasSiteComponent);
    expect(() => fixture.detectChanges()).not.toThrow();
    expect(fixture.nativeElement.querySelector('app-library-coverage-host')).toBeTruthy();
  });
});
