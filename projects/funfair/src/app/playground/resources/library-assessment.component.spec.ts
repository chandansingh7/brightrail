import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';

import { LibraryAssessmentComponent } from './library-assessment.component';

describe('LibraryAssessmentComponent', () => {
  let fixture: ComponentFixture<LibraryAssessmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LibraryAssessmentComponent],
      providers: [provideRouter([])],
    }).compileComponents();

    fixture = TestBed.createComponent(LibraryAssessmentComponent);
    fixture.detectChanges();
  });

  it('renders the library assessment page with brightrail components', () => {
    const el = fixture.nativeElement as HTMLElement;
    expect(el.querySelector('brightrail-breadcrumb')).toBeTruthy();
    expect(el.querySelector('brightrail-page-header')).toBeTruthy();
    expect(el.querySelector('brightrail-card')).toBeTruthy();
    expect(el.querySelector('brightrail-table')).toBeTruthy();
    expect(el.querySelector('brightrail-timeline')).toBeTruthy();
    expect(el.querySelector('brightrail-chip')).toBeTruthy();
  });

  it('renders stats badges and shipped playground links', () => {
    const el = fixture.nativeElement as HTMLElement;
    expect(el.textContent).toContain('public exports');
    expect(el.textContent).toContain('Library showcase');
    expect(el.querySelector('.res-page__stats')).toBeTruthy();
    expect(el.querySelectorAll('.la-chip-link').length).toBeGreaterThan(0);
    expect(el.textContent).toContain('Production workflows');
    expect(el.textContent).toContain('Concept & showcase');
    expect(el.textContent).toContain('Platform readiness');
    expect(el.querySelector('.la-maturity-grid')).toBeTruthy();
    expect(el.querySelectorAll('.la-pros-cons__list li').length).toBeGreaterThan(0);
  });
});
