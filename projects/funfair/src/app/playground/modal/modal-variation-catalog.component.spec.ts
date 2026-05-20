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

  it('renders six doc-mirror sections', () => {
    const headings = Array.from(
      fixture.nativeElement.querySelectorAll('.mvc-block__h') as NodeListOf<HTMLElement>,
    ).map((el) => el.textContent?.trim());
    expect(headings).toContain('1. Modal sizes');
    expect(headings).toContain('6. Example modal markup');
    expect(headings.length).toBe(6);
  });

  it('renders contained open modals in preview shells', () => {
    const modals = fixture.nativeElement.querySelectorAll('brightrail-modal');
    expect(modals.length).toBeGreaterThan(0);
  });
});
