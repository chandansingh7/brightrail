import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SkeletonVariationCatalogComponent } from './skeleton-variation-catalog.component';

describe('SkeletonVariationCatalogComponent', () => {
  let fixture: ComponentFixture<SkeletonVariationCatalogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SkeletonVariationCatalogComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(SkeletonVariationCatalogComponent);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(fixture.componentInstance).toBeTruthy();
  });

  it('renders all seven sections with copy tiles', () => {
    const headings = Array.from(
      fixture.nativeElement.querySelectorAll('.skvc-block__h') as NodeListOf<HTMLElement>,
    ).map((el) => el.textContent?.trim());
    expect(headings).toContain('1. Core variants');
    expect(headings).toContain('6. Advanced layouts');
    expect(headings).toContain('7. Futuristic skeleton designs');
    expect(headings.length).toBe(7);
    expect(fixture.nativeElement.querySelector('.ff-future-grid')).toBeTruthy();
  });
});
