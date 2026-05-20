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

  it('renders six sections', () => {
    expect(fixture.nativeElement.querySelectorAll('.cbvc-block__h').length).toBe(6);
  });
});
