import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaginationVariationCatalogComponent } from './pagination-variation-catalog.component';

describe('PaginationVariationCatalogComponent', () => {
  let fixture: ComponentFixture<PaginationVariationCatalogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PaginationVariationCatalogComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(PaginationVariationCatalogComponent);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(fixture.componentInstance).toBeTruthy();
  });

  it('renders all nine sections with copy tiles', () => {
    const headings = Array.from(
      fixture.nativeElement.querySelectorAll('.pgvc-block__h') as NodeListOf<HTMLElement>,
    ).map((el) => el.textContent?.trim());
    expect(headings).toContain('1. Core types');
    expect(headings).toContain('9. Advanced');
    expect(headings.length).toBe(9);

    const labels = Array.from(
      fixture.nativeElement.querySelectorAll('.cvt__label') as NodeListOf<HTMLElement>,
    ).map((el) => el.textContent?.trim());
    expect(labels).toContain('Sticky footer strip');
    expect(labels).toContain('Empty data');
  });
});
