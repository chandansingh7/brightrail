import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SliderVariationCatalogComponent } from './slider-variation-catalog.component';

describe('SliderVariationCatalogComponent', () => {
  let fixture: ComponentFixture<SliderVariationCatalogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SliderVariationCatalogComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(SliderVariationCatalogComponent);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(fixture.componentInstance).toBeTruthy();
  });

  it('renders seven doc-mirror sections including futuristic shells', () => {
    const headings = Array.from(
      fixture.nativeElement.querySelectorAll('.slvc-block__h') as NodeListOf<HTMLElement>,
    ).map((el) => el.textContent?.trim());
    expect(headings).toContain('1. Core slider types');
    expect(headings).toContain('6. Form integration');
    expect(headings).toContain('7. Futuristic slider designs');
    expect(headings.length).toBe(7);
    expect(fixture.nativeElement.querySelector('.ff-future-shell--glass')).toBeTruthy();
  });
});
