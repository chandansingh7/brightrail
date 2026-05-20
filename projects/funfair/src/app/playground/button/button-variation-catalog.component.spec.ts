import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonVariationCatalogComponent } from './button-variation-catalog.component';

describe('ButtonVariationCatalogComponent', () => {
  let fixture: ComponentFixture<ButtonVariationCatalogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ButtonVariationCatalogComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ButtonVariationCatalogComponent);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(fixture.componentInstance).toBeTruthy();
  });

  it('renders six doc-mirror sections', () => {
    const headings = Array.from(
      fixture.nativeElement.querySelectorAll('.bvc-block__h') as NodeListOf<HTMLElement>,
    ).map((el) => el.textContent?.trim());
    expect(headings).toContain('1. Core button variants');
    expect(headings).toContain('6. States & layout');
    expect(headings.length).toBe(6);
  });
});
