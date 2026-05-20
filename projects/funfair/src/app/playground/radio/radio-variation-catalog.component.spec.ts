import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RadioVariationCatalogComponent } from './radio-variation-catalog.component';

describe('RadioVariationCatalogComponent', () => {
  let fixture: ComponentFixture<RadioVariationCatalogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RadioVariationCatalogComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(RadioVariationCatalogComponent);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(fixture.componentInstance).toBeTruthy();
  });

  it('renders six doc-mirror sections', () => {
    const headings = Array.from(
      fixture.nativeElement.querySelectorAll('.rvc-block__h') as NodeListOf<HTMLElement>,
    ).map((el) => el.textContent?.trim());
    expect(headings).toContain('1. Core radio');
    expect(headings).toContain('6. Validation / error');
    expect(headings.length).toBe(6);
  });
});
