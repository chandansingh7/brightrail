import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ComboboxVariationCatalogComponent } from './combobox-variation-catalog.component';

describe('ComboboxVariationCatalogComponent', () => {
  let fixture: ComponentFixture<ComboboxVariationCatalogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({ imports: [ComboboxVariationCatalogComponent] }).compileComponents();
    fixture = TestBed.createComponent(ComboboxVariationCatalogComponent);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(fixture.componentInstance).toBeTruthy();
  });

  it('renders seven sections including futuristic designs', () => {
    const headings = Array.from(
      fixture.nativeElement.querySelectorAll('.cbvc-block__h') as NodeListOf<HTMLElement>,
    ).map((el) => el.textContent?.trim());
    expect(headings.length).toBe(7);
    expect(headings).toContain('7. Futuristic combobox designs');
  });
});
