import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TablePlaygroundComponent } from './table-playground.component';

describe('TablePlaygroundComponent', () => {
  let fixture: ComponentFixture<TablePlaygroundComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TablePlaygroundComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(TablePlaygroundComponent);
    fixture.detectChanges();
  });

  it('creates', () => {
    expect(fixture.componentInstance).toBeTruthy();
  });

  it('renders a preview table shell', () => {
    const host: HTMLElement = fixture.nativeElement;
    expect(host.querySelector('brightrail-table')).toBeTruthy();
  });

  it('previewTableColumns adds searchable fields when header search is enabled', () => {
    const cmp = fixture.componentInstance;
    cmp.playgroundColumnSearch.set(true);
    cmp.playgroundColumnFilters.set(false);
    fixture.detectChanges();

    const cols = cmp.previewTableColumns();
    expect(cols.find((c) => c.id === 'email')?.searchable).toBe(true);
    expect(cols.find((c) => c.id === 'name')?.filterPlaceholder).toBe('Search');
  });

  it('previewTableColumns adds role/status filterOptions when header filters are enabled', () => {
    const cmp = fixture.componentInstance;
    cmp.playgroundColumnSearch.set(false);
    cmp.playgroundColumnFilters.set(true);
    fixture.detectChanges();

    const cols = cmp.previewTableColumns();
    expect(cols.find((c) => c.id === 'role')?.filterOptions?.length).toBeGreaterThan(1);
    expect(cols.find((c) => c.id === 'status')?.filterOptions?.length).toBeGreaterThan(1);
  });
});
