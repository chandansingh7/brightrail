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

  it('renders seven sections including futuristic designs', () => {
    const headings = Array.from(
      fixture.nativeElement.querySelectorAll('.tfvc-block__h') as NodeListOf<HTMLElement>,
    ).map((el) => el.textContent?.trim());
    expect(headings.length).toBe(7);
    expect(headings).toContain('7. Futuristic text field designs');
  });
});
