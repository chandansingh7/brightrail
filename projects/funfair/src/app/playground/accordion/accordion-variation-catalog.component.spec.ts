import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccordionVariationCatalogComponent } from './accordion-variation-catalog.component';

describe('AccordionVariationCatalogComponent', () => {
  let fixture: ComponentFixture<AccordionVariationCatalogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AccordionVariationCatalogComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(AccordionVariationCatalogComponent);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(fixture.componentInstance).toBeTruthy();
  });

  it('renders seven doc-mirror sections including futuristic designs', () => {
    const headings = Array.from(
      fixture.nativeElement.querySelectorAll('.avc-block__h') as NodeListOf<HTMLElement>,
    ).map((el) => el.textContent?.trim());
    expect(headings).toContain('1. Core appearances');
    expect(headings).toContain('6. Advanced');
    expect(headings).toContain('7. Futuristic accordion designs');
    expect(headings?.length).toBe(7);
  });
});
