import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StepperVariationCatalogComponent } from './stepper-variation-catalog.component';

describe('StepperVariationCatalogComponent', () => {
  let fixture: ComponentFixture<StepperVariationCatalogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StepperVariationCatalogComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(StepperVariationCatalogComponent);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(fixture.componentInstance).toBeTruthy();
  });

  it('renders nine sections with a11y hint block instead of tiles for section 8', () => {
    const headings = Array.from(
      fixture.nativeElement.querySelectorAll('.stvc-block__h') as NodeListOf<HTMLElement>,
    ).map((el) => el.textContent?.trim());
    expect(headings).toContain('8. Accessibility tips');
    expect(headings).toContain('9. Futuristic stepper designs');
    expect(headings.length).toBe(9);

    expect(fixture.nativeElement.querySelector('.stvc-a11y')).toBeTruthy();
    expect(fixture.nativeElement.querySelector('#stvc-a11y-title')).toBeTruthy();

    const labels = Array.from(
      fixture.nativeElement.querySelectorAll('.cvt__label') as NodeListOf<HTMLElement>,
    ).map((el) => el.textContent?.trim());
    expect(labels).toContain('Wizard with validation');
    expect(labels).toContain('Minimal line');
  });
});
