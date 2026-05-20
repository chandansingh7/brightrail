import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormFieldVariationCatalogComponent } from './form-field-variation-catalog.component';

describe('FormFieldVariationCatalogComponent', () => {
  let fixture: ComponentFixture<FormFieldVariationCatalogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({ imports: [FormFieldVariationCatalogComponent] }).compileComponents();
    fixture = TestBed.createComponent(FormFieldVariationCatalogComponent);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(fixture.componentInstance).toBeTruthy();
  });

  it('renders six sections', () => {
    expect(fixture.nativeElement.querySelectorAll('.ffvc-block__h').length).toBe(6);
  });
});
