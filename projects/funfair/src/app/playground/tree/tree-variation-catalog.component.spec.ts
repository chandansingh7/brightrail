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

  it('renders seven sections including futuristic designs', () => {
    const headings = Array.from(
      fixture.nativeElement.querySelectorAll('.trvc-block__h') as NodeListOf<HTMLElement>,
    ).map((el) => el.textContent?.trim());
    expect(headings?.length).toBe(7);
    expect(headings).toContain('7. Futuristic tree designs');
  });
});
