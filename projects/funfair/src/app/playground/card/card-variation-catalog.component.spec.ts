import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardVariationCatalogComponent } from './card-variation-catalog.component';

describe('CardVariationCatalogComponent', () => {
  let fixture: ComponentFixture<CardVariationCatalogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CardVariationCatalogComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(CardVariationCatalogComponent);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(fixture.componentInstance).toBeTruthy();
  });

  it('renders six doc-mirror sections', () => {
    const headings = Array.from(
      fixture.nativeElement.querySelectorAll('.crvc-block__h') as NodeListOf<HTMLElement>,
    ).map((el) => el.textContent?.trim());
    expect(headings).toContain('1. Core appearances');
    expect(headings).toContain('6. Enterprise-style composed cards');
    expect(headings.length).toBe(6);
  });

  it('renders brightrail cards in tiles', () => {
    expect(fixture.nativeElement.querySelectorAll('brightrail-card').length).toBeGreaterThan(10);
  });
});
