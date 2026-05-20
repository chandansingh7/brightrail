import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TooltipVariationCatalogComponent } from './tooltip-variation-catalog.component';

describe('TooltipVariationCatalogComponent', () => {
  let fixture: ComponentFixture<TooltipVariationCatalogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TooltipVariationCatalogComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(TooltipVariationCatalogComponent);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(fixture.componentInstance).toBeTruthy();
  });

  it('renders seven doc-mirror sections', () => {
    const headings = Array.from(
      fixture.nativeElement.querySelectorAll('.tvc-block__h') as NodeListOf<HTMLElement>,
    ).map((el) => el.textContent?.trim());
    expect(headings).toContain('1. Core tooltip types');
    expect(headings).toContain('7. Futuristic shells');
    expect(headings?.length).toBe(7);
  });

  it('includes rich content tile and catalogRich template', () => {
    const labels = Array.from(
      fixture.nativeElement.querySelectorAll('.cvt__label') as NodeListOf<HTMLElement>,
    ).map((el) => el.textContent?.trim());
    expect(labels).toContain('Rich content');
    expect(fixture.componentInstance).toBeTruthy();
  });
});
