import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DatePickerVariationCatalogComponent } from './date-picker-variation-catalog.component';

describe('DatePickerVariationCatalogComponent', () => {
  let fixture: ComponentFixture<DatePickerVariationCatalogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DatePickerVariationCatalogComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(DatePickerVariationCatalogComponent);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(fixture.componentInstance).toBeTruthy();
  });

  it('renders ten doc-mirror sections', () => {
    const headings = Array.from(
      fixture.nativeElement.querySelectorAll('.dpvc-block__h') as NodeListOf<HTMLElement>,
    ).map((el) => el.textContent?.trim());
    expect(headings.length).toBe(10);
    expect(headings).toContain('1. Core date picker types');
    expect(headings).toContain('10. Futuristic date picker designs');
  });

  it('includes open calendar and enterprise tiles', () => {
    const labels = Array.from(
      fixture.nativeElement.querySelectorAll('.cvt__label') as NodeListOf<HTMLElement>,
    ).map((el) => el.textContent?.trim());
    expect(labels).toContain('Open calendar');
    expect(labels).toContain('Booking form');
    expect(labels).toContain('Glassmorphism');
  });
});
