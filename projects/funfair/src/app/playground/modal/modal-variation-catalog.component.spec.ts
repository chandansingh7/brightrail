import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalVariationCatalogComponent } from './modal-variation-catalog.component';

describe('ModalVariationCatalogComponent', () => {
  let fixture: ComponentFixture<ModalVariationCatalogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ModalVariationCatalogComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ModalVariationCatalogComponent);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(fixture.componentInstance).toBeTruthy();
  });

  it('renders seven doc-mirror sections including futuristic shells', () => {
    const headings = Array.from(
      fixture.nativeElement.querySelectorAll('.mvc-block__h') as NodeListOf<HTMLElement>,
    ).map((el) => el.textContent?.trim());
    expect(headings).toContain('1. Modal sizes');
    expect(headings).toContain('6. Example modal markup');
    expect(headings).toContain('7. Futuristic modal designs');
    expect(headings.length).toBe(7);
    expect(fixture.nativeElement.querySelector('.ff-future-shell--neon')).toBeTruthy();
  });

  it('renders contained open modals in preview shells', () => {
    const modals = fixture.nativeElement.querySelectorAll('brightrail-modal');
    expect(modals.length).toBeGreaterThan(0);
  });
});
