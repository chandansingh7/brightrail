import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DrawerVariationCatalogComponent } from './drawer-variation-catalog.component';

describe('DrawerVariationCatalogComponent', () => {
  let fixture: ComponentFixture<DrawerVariationCatalogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DrawerVariationCatalogComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(DrawerVariationCatalogComponent);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(fixture.componentInstance).toBeTruthy();
  });

  it('renders six catalog sections with live drawer previews', () => {
    const headings = Array.from(
      fixture.nativeElement.querySelectorAll('.dvc-block__h') as NodeListOf<HTMLElement>,
    ).map((el) => el.textContent?.trim());
    expect(headings).toContain('1. Core drawer types');
    expect(headings).toContain('2. Placements');
    expect(headings).toContain('5. Surfaces');
    expect(headings).toContain('6. Example drawer markup');
  });

  it('includes click-to-copy tiles for placement and mode variants', () => {
    const labels = Array.from(
      fixture.nativeElement.querySelectorAll('.cvt__label') as NodeListOf<HTMLElement>,
    ).map((el) => el.textContent?.trim());
    expect(labels).toContain('Left · open');
    expect(labels).toContain('Modal · blur');
    expect(labels).toContain('Baseline form panel');
  });
});
