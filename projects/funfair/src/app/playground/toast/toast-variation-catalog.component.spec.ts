import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ToastVariationCatalogComponent } from './toast-variation-catalog.component';

describe('ToastVariationCatalogComponent', () => {
  let fixture: ComponentFixture<ToastVariationCatalogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ToastVariationCatalogComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ToastVariationCatalogComponent);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(fixture.componentInstance).toBeTruthy();
  });

  it('renders all six sections with copy tiles', () => {
    const headings = Array.from(
      fixture.nativeElement.querySelectorAll('.tvc-block__h') as NodeListOf<HTMLElement>,
    ).map((el) => el.textContent?.trim());
    expect(headings).toContain('1. Core variants');
    expect(headings).toContain('6. Advanced timing');
    expect(headings.length).toBe(6);
  });
});
