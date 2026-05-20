import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BreadcrumbVariationCatalogComponent } from './breadcrumb-variation-catalog.component';

describe('BreadcrumbVariationCatalogComponent', () => {
  let fixture: ComponentFixture<BreadcrumbVariationCatalogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BreadcrumbVariationCatalogComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(BreadcrumbVariationCatalogComponent);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(fixture.componentInstance).toBeTruthy();
  });

  it('renders nine doc-mirror sections', () => {
    const headings = Array.from(
      fixture.nativeElement.querySelectorAll('.bvc-block__h') as NodeListOf<HTMLElement>,
    ).map((el) => el.textContent?.trim());
    expect(headings).toContain('1. Core breadcrumb types');
    expect(headings).toContain('9. Futuristic breadcrumb designs');
    expect(headings?.length).toBe(9);
  });

  it('preserves demo item data for core paths', () => {
    expect(fixture.componentInstance.coreWithCurrent.at(-1)?.current).toBe(true);
    expect(fixture.componentInstance.longPath.length).toBe(5);
  });
});
