import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableVariationCatalogComponent } from './table-variation-catalog.component';

describe('TableVariationCatalogComponent', () => {
  let fixture: ComponentFixture<TableVariationCatalogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TableVariationCatalogComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(TableVariationCatalogComponent);
    fixture.detectChanges();
  });

  it('creates', () => {
    expect(fixture.componentInstance).toBeTruthy();
  });

  it('sectionVisible shows all sections when focus is 0', () => {
    fixture.componentRef.setInput('focusSection', 0);
    expect(fixture.componentInstance.sectionVisible(1)).toBeTrue();
    expect(fixture.componentInstance.sectionVisible(7)).toBeTrue();
    expect(fixture.componentInstance.sectionVisible(9)).toBeTrue();
  });

  it('renders futuristic table section when focus is 9', () => {
    fixture.componentRef.setInput('focusSection', 9);
    fixture.detectChanges();
    const heading = fixture.nativeElement.querySelector('.alert-catalog__h') as HTMLElement;
    expect(heading?.textContent?.trim()).toBe('9. Futuristic table designs');
    expect(fixture.nativeElement.querySelector('.ff-future-grid')).toBeTruthy();
  });

  it('sectionVisible filters to a single section', () => {
    fixture.componentRef.setInput('focusSection', 3);
    expect(fixture.componentInstance.sectionVisible(3)).toBeTrue();
    expect(fixture.componentInstance.sectionVisible(4)).toBeFalse();
  });
});
