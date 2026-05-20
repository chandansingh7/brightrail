import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProgressVariationCatalogComponent } from './progress-variation-catalog.component';

describe('ProgressVariationCatalogComponent', () => {
  let fixture: ComponentFixture<ProgressVariationCatalogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProgressVariationCatalogComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ProgressVariationCatalogComponent);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(fixture.componentInstance).toBeTruthy();
  });

  it('renders nine sections including stepper and futuristic demos', () => {
    const headings = Array.from(
      fixture.nativeElement.querySelectorAll('.prvc-block__h') as NodeListOf<HTMLElement>,
    ).map((el) => el.textContent?.trim());
    expect(headings).toContain('4. Segmented / milestone');
    expect(headings).toContain('9. Futuristic progress');
    expect(headings.length).toBe(9);

    const labels = Array.from(
      fixture.nativeElement.querySelectorAll('.cvt__label') as NodeListOf<HTMLElement>,
    ).map((el) => el.textContent?.trim());
    expect(labels).toContain('Complete');
    expect(labels).toContain('Neon arc');
    expect(fixture.nativeElement.querySelector('brightrail-stepper')).toBeTruthy();
    expect(fixture.nativeElement.querySelector('.prvc-mini-table')).toBeTruthy();
  });
});
