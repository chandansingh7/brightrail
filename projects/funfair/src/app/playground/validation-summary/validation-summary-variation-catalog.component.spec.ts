import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ValidationSummaryVariationCatalogComponent } from './validation-summary-variation-catalog.component';

describe('ValidationSummaryVariationCatalogComponent', () => {
  let fixture: ComponentFixture<ValidationSummaryVariationCatalogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({ imports: [ValidationSummaryVariationCatalogComponent] }).compileComponents();
    fixture = TestBed.createComponent(ValidationSummaryVariationCatalogComponent);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(fixture.componentInstance).toBeTruthy();
  });

  it('renders six doc-mirror sections', () => {
    const headings = Array.from(
      fixture.nativeElement.querySelectorAll('.vsvc-block__h') as NodeListOf<HTMLElement>,
    ).map((el) => el.textContent?.trim());
    expect(headings?.length).toBe(6);
    expect(headings).toContain('1. String errors');
    expect(headings).toContain('6. Empty state');
  });
});
