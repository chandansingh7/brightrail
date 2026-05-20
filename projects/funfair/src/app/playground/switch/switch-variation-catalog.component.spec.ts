import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SwitchVariationCatalogComponent } from './switch-variation-catalog.component';

describe('SwitchVariationCatalogComponent', () => {
  let fixture: ComponentFixture<SwitchVariationCatalogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SwitchVariationCatalogComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(SwitchVariationCatalogComponent);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(fixture.componentInstance).toBeTruthy();
  });

  it('renders six doc-mirror sections', () => {
    const headings = Array.from(
      fixture.nativeElement.querySelectorAll('.swvc-block__h') as NodeListOf<HTMLElement>,
    ).map((el) => el.textContent?.trim());
    expect(headings).toContain('1. Core switch types');
    expect(headings).toContain('6. Form integration');
    expect(headings.length).toBe(6);
  });
});
