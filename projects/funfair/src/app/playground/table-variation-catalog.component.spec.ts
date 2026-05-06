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
  });

  it('sectionVisible filters to a single section', () => {
    fixture.componentRef.setInput('focusSection', 3);
    expect(fixture.componentInstance.sectionVisible(3)).toBeTrue();
    expect(fixture.componentInstance.sectionVisible(4)).toBeFalse();
  });
});
