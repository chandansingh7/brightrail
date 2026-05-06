import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableInlineEditCatalogComponent } from './table-inline-edit-catalog.component';

describe('TableInlineEditCatalogComponent', () => {
  let fixture: ComponentFixture<TableInlineEditCatalogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TableInlineEditCatalogComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(TableInlineEditCatalogComponent);
    fixture.detectChanges();
  });

  it('creates and shows the catalog title', () => {
    expect(fixture.nativeElement.textContent).toContain('Table inline edit variations');
  });
});
