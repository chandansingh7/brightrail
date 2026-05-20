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

  it('renders six doc-mirror sections', () => {
    const headings = Array.from(
      fixture.nativeElement.querySelectorAll('.tavc-block__h') as NodeListOf<HTMLElement>,
    ).map((el) => el.textContent?.trim());
    expect(headings).toContain('1. Appearances');
    expect(headings).toContain('6. Form patterns');
    expect(headings.length).toBe(6);
  });
});
