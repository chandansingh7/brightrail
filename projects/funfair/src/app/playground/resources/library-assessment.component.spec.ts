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

  it('renders the library assessment page', () => {
    const el = fixture.nativeElement as HTMLElement;
    expect(el.querySelector('.ig-title')?.textContent).toContain('Brightrail library assessment');
    expect(el.querySelector('.la-callout--pro')).toBeTruthy();
    expect(el.querySelector('.la-callout--con')).toBeTruthy();
    expect(el.querySelectorAll('.la-table tbody tr').length).toBeGreaterThan(0);
  });
});
