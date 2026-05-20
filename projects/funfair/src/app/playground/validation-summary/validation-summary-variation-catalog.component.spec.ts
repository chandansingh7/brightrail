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

  it('renders seven sections including futuristic designs', () => {
    const headings = Array.from(
      fixture.nativeElement.querySelectorAll('.vsvc-block__h') as NodeListOf<HTMLElement>,
    ).map((el) => el.textContent?.trim());
    expect(headings?.length).toBe(7);
    expect(headings).toContain('7. Futuristic validation summary designs');
  });
});
