import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TextareaVariationCatalogComponent } from './textarea-variation-catalog.component';

describe('TextareaVariationCatalogComponent', () => {
  let fixture: ComponentFixture<TextareaVariationCatalogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TextareaVariationCatalogComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(TextareaVariationCatalogComponent);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(fixture.componentInstance).toBeTruthy();
  });

  it('renders seven sections including futuristic designs', () => {
    const headings = Array.from(
      fixture.nativeElement.querySelectorAll('.tavc-block__h') as NodeListOf<HTMLElement>,
    ).map((el) => el.textContent?.trim());
    expect(headings.length).toBe(7);
    expect(headings).toContain('7. Futuristic textarea designs');
  });
});
