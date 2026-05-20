import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TreeVariationCatalogComponent } from './tree-variation-catalog.component';

describe('TreeVariationCatalogComponent', () => {
  let fixture: ComponentFixture<TreeVariationCatalogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({ imports: [TreeVariationCatalogComponent] }).compileComponents();
    fixture = TestBed.createComponent(TreeVariationCatalogComponent);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(fixture.componentInstance).toBeTruthy();
  });

  it('renders six doc-mirror sections', () => {
    const headings = Array.from(
      fixture.nativeElement.querySelectorAll('.trvc-block__h') as NodeListOf<HTMLElement>,
    ).map((el) => el.textContent?.trim());
    expect(headings).toContain('1. Core hierarchy');
    expect(headings).toContain('6. Advanced patterns');
    expect(headings?.length).toBe(6);
  });
});
