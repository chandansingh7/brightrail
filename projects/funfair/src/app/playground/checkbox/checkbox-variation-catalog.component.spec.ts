import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckboxVariationCatalogComponent } from './checkbox-variation-catalog.component';

describe('CheckboxVariationCatalogComponent', () => {
  let fixture: ComponentFixture<CheckboxVariationCatalogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CheckboxVariationCatalogComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(CheckboxVariationCatalogComponent);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(fixture.componentInstance).toBeTruthy();
  });

  it('renders seven doc-mirror sections including futuristic designs', () => {
    const headings = Array.from(
      fixture.nativeElement.querySelectorAll('.cbvc-block__h') as NodeListOf<HTMLElement>,
    ).map((el) => el.textContent?.trim());
    expect(headings).toContain('1. Core checkbox types');
    expect(headings).toContain('6. Groups');
    expect(headings).toContain('7. Futuristic checkbox designs');
    expect(headings.length).toBe(7);
  });
});
