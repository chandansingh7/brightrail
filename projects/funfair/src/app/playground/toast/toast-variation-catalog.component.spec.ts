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

  it('renders seven sections including futuristic designs', () => {
    const headings = Array.from(
      fixture.nativeElement.querySelectorAll('.tvc-block__h') as NodeListOf<HTMLElement>,
    ).map((el) => el.textContent?.trim());
    expect(headings.length).toBe(7);
    expect(headings).toContain('7. Futuristic toast designs');
  });
});
