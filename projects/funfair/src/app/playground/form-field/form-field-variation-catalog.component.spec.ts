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

  it('renders seven sections including futuristic designs', () => {
    const headings = Array.from(
      fixture.nativeElement.querySelectorAll('.ffvc-block__h') as NodeListOf<HTMLElement>,
    ).map((el) => el.textContent?.trim());
    expect(headings.length).toBe(7);
    expect(headings).toContain('7. Futuristic form field designs');
  });
});
