import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmptyStateVariationCatalogComponent } from './empty-state-variation-catalog.component';

describe('EmptyStateVariationCatalogComponent', () => {
  let fixture: ComponentFixture<EmptyStateVariationCatalogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EmptyStateVariationCatalogComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(EmptyStateVariationCatalogComponent);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(fixture.componentInstance).toBeTruthy();
  });

  it('renders all six sections with copy tiles', () => {
    const headings = Array.from(
      fixture.nativeElement.querySelectorAll('.esvc-block__h') as NodeListOf<HTMLElement>,
    ).map((el) => el.textContent?.trim());
    expect(headings).toContain('1. Core empty states');
    expect(headings).toContain('6. Advanced patterns');
    expect(headings.length).toBe(6);
  });
});
