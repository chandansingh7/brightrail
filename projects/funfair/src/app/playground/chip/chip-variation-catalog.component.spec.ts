import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChipVariationCatalogComponent } from './chip-variation-catalog.component';

describe('ChipVariationCatalogComponent', () => {
  let fixture: ComponentFixture<ChipVariationCatalogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChipVariationCatalogComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ChipVariationCatalogComponent);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(fixture.componentInstance).toBeTruthy();
  });

  it('renders eleven doc-mirror sections including futuristic designs', () => {
    const headings = Array.from(
      fixture.nativeElement.querySelectorAll('.cvc-block__h') as NodeListOf<HTMLElement>,
    ).map((el) => el.textContent?.trim());
    expect(headings).toContain('1. Core chip types');
    expect(headings).toContain('10. Advanced patterns');
    expect(headings).toContain('11. Futuristic chip designs');
    expect(headings.length).toBe(11);
  });

  it('includes click-to-copy tiles for selectable and removable chips', () => {
    const labels = Array.from(
      fixture.nativeElement.querySelectorAll('.cvt__label') as NodeListOf<HTMLElement>,
    ).map((el) => el.textContent?.trim());
    expect(labels).toContain('Selected');
    expect(labels).toContain('Removable group');
    expect(fixture.nativeElement.querySelector('.cco-group')).toBeTruthy();
  });
});
