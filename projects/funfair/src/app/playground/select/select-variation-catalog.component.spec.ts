import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectVariationCatalogComponent } from './select-variation-catalog.component';

describe('SelectVariationCatalogComponent', () => {
  let fixture: ComponentFixture<SelectVariationCatalogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SelectVariationCatalogComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(SelectVariationCatalogComponent);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(fixture.componentInstance).toBeTruthy();
  });

  it('renders seven doc-mirror sections including futuristic shells', () => {
    const headings = Array.from(
      fixture.nativeElement.querySelectorAll('.svc-block__h') as NodeListOf<HTMLElement>,
    ).map((el) => el.textContent?.trim());
    expect(headings).toContain('1. Appearances');
    expect(headings).toContain('6. Loading & disabled');
    expect(headings).toContain('7. Futuristic select designs');
    expect(headings.length).toBe(7);
    expect(fixture.nativeElement.querySelector('.ff-future-shell--holo')).toBeTruthy();
  });

  it('renders brightrail-select previews with displayText', () => {
    const selects = fixture.nativeElement.querySelectorAll('brightrail-select');
    expect(selects.length).toBeGreaterThan(0);
  });
});
