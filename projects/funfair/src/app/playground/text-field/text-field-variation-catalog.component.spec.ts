import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TextFieldVariationCatalogComponent } from './text-field-variation-catalog.component';

describe('TextFieldVariationCatalogComponent', () => {
  let fixture: ComponentFixture<TextFieldVariationCatalogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TextFieldVariationCatalogComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(TextFieldVariationCatalogComponent);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(fixture.componentInstance).toBeTruthy();
  });

  it('renders six doc-mirror sections', () => {
    const headings = Array.from(
      fixture.nativeElement.querySelectorAll('.tfvc-block__h') as NodeListOf<HTMLElement>,
    ).map((el) => el.textContent?.trim());
    expect(headings).toContain('1. Appearances');
    expect(headings).toContain('6. Clearable, password & icons');
    expect(headings.length).toBe(6);
  });
});
