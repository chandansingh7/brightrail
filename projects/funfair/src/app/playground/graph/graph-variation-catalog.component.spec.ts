import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GraphVariationCatalogComponent } from './graph-variation-catalog.component';

describe('GraphVariationCatalogComponent', () => {
  let fixture: ComponentFixture<GraphVariationCatalogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GraphVariationCatalogComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(GraphVariationCatalogComponent);
    fixture.detectChanges();
  });

  it('renders line graph section and futuristic designs', () => {
    const headings = Array.from(fixture.nativeElement.querySelectorAll('.gvc-block__h')).map(
      (el) => (el as Element).textContent?.trim(),
    );
    expect(headings[0]).toContain('Line graph');
    expect(headings).toContain('11. Futuristic graph designs');
    expect(headings.length).toBe(11);
  });
});
