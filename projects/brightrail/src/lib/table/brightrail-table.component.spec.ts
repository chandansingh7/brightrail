import { Component } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import {
  BrightrailTableColumn,
  BrightrailTableBulkActionsPlacement,
  BrightrailTablePageEvent,
  BrightrailTableRow,
  BrightrailTableSortEvent,
} from './brightrail-table.types';
import { BrightrailTableBulkActionsComponent } from './brightrail-table-bulk-actions.component';
import { BrightrailTableSingleActionsComponent } from './brightrail-table-single-actions.component';
import { BrightrailTableComponent } from './brightrail-table.component';

@Component({
  standalone: true,
  imports: [BrightrailTableComponent],
  template: `
    <brightrail-table
      [data]="rows"
      [columns]="columns"
      [sorting]="sorting"
      [pagination]="pagination"
      [rowSelection]="rowSelection"
      (sortChange)="onSort($event)"
      (pageChange)="onPage($event)"
      (selectionChange)="onSelection($event)"
    />
  `,
})
class BrightrailTableHarnessComponent {
  rows: BrightrailTableRow[] = [
    { id: '1', name: 'Ada', score: 10 },
    { id: '2', name: 'Lin', score: 5 },
    { id: '3', name: 'Ray', score: 20 },
  ];

  columns: BrightrailTableColumn[] = [
    { id: 'name', header: 'Name', field: 'name', sortable: true },
    { id: 'score', header: 'Score', field: 'score', sortable: true },
  ];

  sorting = true;
  pagination: { pageSize: number; pageIndex?: number } | null = null;
  rowSelection: 'none' | 'single' | 'multiple' = 'none';

  lastSort: BrightrailTableSortEvent | null = null;
  lastPage: BrightrailTablePageEvent | null = null;
  lastSelection: string[] | null = null;

  onSort(ev: BrightrailTableSortEvent): void {
    this.lastSort = ev;
  }

  onPage(ev: BrightrailTablePageEvent): void {
    this.lastPage = ev;
  }

  onSelection(ev: string[]): void {
    this.lastSelection = ev;
  }
}

describe('BrightrailTableComponent', () => {
  let fixture: ComponentFixture<BrightrailTableHarnessComponent>;
  let harness: BrightrailTableHarnessComponent;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BrightrailTableHarnessComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(BrightrailTableHarnessComponent);
    harness = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('renders column headers', () => {
    const hostEl: HTMLElement = fixture.nativeElement;
    expect(hostEl.textContent).toContain('Name');
    expect(hostEl.textContent).toContain('Score');
  });

  it('emits sortChange when a sortable header is activated', () => {
    const buttons = fixture.nativeElement.querySelectorAll(
      'brightrail-table button.br-table__sort-btn',
    ) as NodeListOf<HTMLButtonElement>;
    expect(buttons.length).toBeGreaterThan(0);

    buttons[0].click();
    fixture.detectChanges();

    expect(harness.lastSort).toEqual({ columnId: 'name', direction: 'asc' });
  });

  it('paginates rows when pagination config is provided', () => {
    harness.pagination = { pageSize: 2 };
    fixture.detectChanges();

    expect(fixture.nativeElement.textContent).toContain('Ada');
    expect(fixture.nativeElement.textContent).toContain('Lin');
    expect(fixture.nativeElement.textContent).not.toContain('Ray');

    const next: HTMLButtonElement | null =
      fixture.nativeElement.querySelector('button[aria-label="Next page"]');
    expect(next).toBeTruthy();
    next!.click();
    fixture.detectChanges();

    expect(fixture.nativeElement.textContent).toContain('Ray');
    expect(harness.lastPage?.pageIndex).toBe(1);
    expect(harness.lastPage?.pageSize).toBe(2);
  });

  it('emits selectionChange for multiple selection toggles', () => {
    harness.rowSelection = 'multiple';
    fixture.detectChanges();

    const rowChecks = fixture.nativeElement.querySelectorAll(
      'tbody input.br-table__checkbox[type="checkbox"]',
    ) as NodeListOf<HTMLInputElement>;
    expect(rowChecks.length).toBe(3);

    rowChecks[0].click();
    fixture.detectChanges();

    expect(harness.lastSelection).toEqual(['1']);
  });

  it('selects row when clicking a data cell in multiple mode', () => {
    harness.rowSelection = 'multiple';
    fixture.detectChanges();

    const cell = fixture.nativeElement.querySelector(
      'tbody tr.br-table__tr:not(.br-table__tr--detail) td:not(.br-table__td--select):not(.br-table__td--expand)',
    ) as HTMLElement | null;
    expect(cell).toBeTruthy();
    cell!.click();
    fixture.detectChanges();

    expect(harness.lastSelection).toEqual(['1']);
  });

  it('deselects row when clicking the same row again in multiple mode', () => {
    harness.rowSelection = 'multiple';
    fixture.detectChanges();

    const cell = fixture.nativeElement.querySelector(
      'tbody tr.br-table__tr:not(.br-table__tr--detail) td:not(.br-table__td--select):not(.br-table__td--expand)',
    ) as HTMLElement | null;
    cell!.click();
    fixture.detectChanges();
    cell!.click();
    fixture.detectChanges();

    expect(harness.lastSelection).toEqual([]);
  });

  it('selects row when clicking a data cell in single mode', () => {
    harness.rowSelection = 'single';
    fixture.detectChanges();

    const cell = fixture.nativeElement.querySelector(
      'tbody tr.br-table__tr:not(.br-table__tr--detail) td:not(.br-table__td--select):not(.br-table__td--expand)',
    ) as HTMLElement | null;
    cell!.click();
    fixture.detectChanges();

    expect(harness.lastSelection).toEqual(['1']);
  });
});

@Component({
  standalone: true,
  imports: [BrightrailTableComponent],
  template: `
    <brightrail-table
      [data]="rows"
      [columns]="columns"
      [columnSearch]="true"
      [filterState]="filterState"
      (filterStateChange)="onFilter($event)"
    />
  `,
})
class BrightrailTableFilterHarnessComponent {
  rows: BrightrailTableRow[] = [
    { id: '1', name: 'Ada', team: 'A' },
    { id: '2', name: 'Lin', team: 'B' },
  ];

  columns: BrightrailTableColumn[] = [
    { id: 'name', header: 'Name', field: 'name', searchable: true },
    { id: 'team', header: 'Team', field: 'team' },
  ];

  filterState: Record<string, string> = { name: 'Lin' };

  onFilter(next: Record<string, string>): void {
    this.filterState = next;
  }
}

describe('BrightrailTableComponent column filters', () => {
  let fixture: ComponentFixture<BrightrailTableFilterHarnessComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BrightrailTableFilterHarnessComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(BrightrailTableFilterHarnessComponent);
    fixture.detectChanges();
  });

  it('shows only rows matching columnSearch filterState', () => {
    const text = fixture.nativeElement.textContent ?? '';
    expect(text).toContain('Lin');
    expect(text).not.toContain('Ada');
  });
});

describe('BrightrailTableComponent avatar column', () => {
  @Component({
    standalone: true,
    imports: [BrightrailTableComponent],
    template: ` <brightrail-table [data]="rows" [columns]="columns" /> `,
  })
  class AvatarHarnessComponent {
    rows: BrightrailTableRow[] = [{ id: '1', name: 'Ada Lovelace', email: 'ada@example.com' }];
    columns: BrightrailTableColumn[] = [
      {
        id: 'name',
        header: 'Name',
        field: 'name',
        format: 'avatar',
        avatarIconOnly: true,
        avatarSubtitleField: 'email',
      },
    ];
  }

  let fixture: ComponentFixture<AvatarHarnessComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AvatarHarnessComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(AvatarHarnessComponent);
    fixture.detectChanges();
  });

  it('uses avatar icon-only layout without visible name labels', () => {
    expect(fixture.nativeElement.querySelector('.br-table__avatar-cell--icon-only')).toBeTruthy();
    expect(fixture.nativeElement.querySelector('.br-table__avatar-name')).toBeFalsy();
    expect(fixture.nativeElement.textContent).toContain('AL');
  });
});

describe('BrightrailTableComponent filter funnel active state', () => {
  @Component({
    standalone: true,
    imports: [BrightrailTableComponent],
    template: `
      <brightrail-table
        [data]="rows"
        [columns]="columns"
        [columnSearch]="true"
        [columnFilters]="true"
        [(filterState)]="filterState"
      />
    `,
  })
  class FunnelHarnessComponent {
    rows: BrightrailTableRow[] = [
      { id: '1', name: 'Ada', role: 'Admin' },
      { id: '2', name: 'Lin', role: 'Viewer' },
    ];

    columns: BrightrailTableColumn[] = [
      { id: 'name', header: 'Name', field: 'name', searchable: true },
      {
        id: 'role',
        header: 'Role',
        field: 'role',
        filterOptions: [
          { value: '', label: 'All roles' },
          { value: 'Admin', label: 'Admin' },
        ],
      },
    ];

    filterState: Record<string, string> = {};
  }

  let fixture: ComponentFixture<FunnelHarnessComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FunnelHarnessComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(FunnelHarnessComponent);
    fixture.detectChanges();
  });

  function funnelButtons(): HTMLButtonElement[] {
    return Array.from(
      fixture.nativeElement.querySelectorAll('button.br-table__filter-global'),
    ) as HTMLButtonElement[];
  }

  it('does not mark funnel filled when filterState is empty (default selects)', () => {
    expect(funnelButtons().every((b) => !b.classList.contains('is-active'))).toBe(true);
  });

  it('marks funnel filled when search text is entered', () => {
    fixture.componentInstance.filterState = { name: 'Ada' };
    fixture.detectChanges();
    expect(funnelButtons().some((b) => b.classList.contains('is-active'))).toBe(true);
  });

  it('does not mark funnel filled when select is the cleared “All” value', () => {
    fixture.componentInstance.filterState = { role: '' };
    fixture.detectChanges();
    expect(funnelButtons().every((b) => !b.classList.contains('is-active'))).toBe(true);
  });

  it('marks funnel filled when select chooses a concrete option', () => {
    fixture.componentInstance.filterState = { role: 'Admin' };
    fixture.detectChanges();
    expect(funnelButtons().some((b) => b.classList.contains('is-active'))).toBe(true);
  });

  it('ignores stray filterState keys that do not map to filter columns', () => {
    fixture.componentInstance.filterState = { ghost: 'x' };
    fixture.detectChanges();
    expect(funnelButtons().every((b) => !b.classList.contains('is-active'))).toBe(true);
  });
});

describe('BrightrailTableComponent bulk selection bar', () => {
  @Component({
    standalone: true,
    imports: [BrightrailTableComponent, BrightrailTableBulkActionsComponent],
    template: `
      <brightrail-table
        [data]="rows"
        [columns]="columns"
        [rowSelection]="'multiple'"
        [bulkActionsPlacement]="placement"
      >
        <brightrail-table-bulk-actions>
          <button type="button">Archive</button>
        </brightrail-table-bulk-actions>
      </brightrail-table>
    `,
  })
  class BulkBarHarnessComponent {
    rows: BrightrailTableRow[] = [
      { id: '1', name: 'Ada' },
      { id: '2', name: 'Lin' },
    ];
    columns: BrightrailTableColumn[] = [{ id: 'name', header: 'Name', field: 'name' }];
    placement: BrightrailTableBulkActionsPlacement = 'end';
  }

  let fixture: ComponentFixture<BulkBarHarnessComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BulkBarHarnessComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(BulkBarHarnessComponent);
    fixture.detectChanges();
  });

  it('shows leading select-all checkbox next to count when rows are selected', () => {
    expect(fixture.nativeElement.querySelector('.br-table__bulk')).toBeFalsy();

    const cell = fixture.nativeElement.querySelector(
      'tbody tr.br-table__tr td:not(.br-table__td--select)',
    ) as HTMLElement | null;
    expect(cell).toBeTruthy();
    cell!.click();
    fixture.detectChanges();

    const bulk = fixture.nativeElement.querySelector('.br-table__bulk');
    expect(bulk).toBeTruthy();
    const bulkCb = bulk!.querySelector('.br-table__bulk-checkbox') as HTMLInputElement | null;
    expect(bulkCb).toBeTruthy();
    expect(bulk!.textContent).toContain('selected');
  });

  it('adds inline placement class when bulkActionsPlacement is inline', () => {
    fixture.componentInstance.placement = 'inline';
    fixture.detectChanges();

    const cell = fixture.nativeElement.querySelector(
      'tbody tr.br-table__tr td:not(.br-table__td--select)',
    ) as HTMLElement | null;
    cell!.click();
    fixture.detectChanges();

    const bulk = fixture.nativeElement.querySelector('.br-table__bulk');
    expect(bulk?.classList.contains('br-table__bulk--placement-inline')).toBe(true);
  });
});

describe('BrightrailTableComponent single-select actions bar', () => {
  @Component({
    standalone: true,
    imports: [BrightrailTableComponent, BrightrailTableSingleActionsComponent],
    template: `
      <brightrail-table
        [data]="rows"
        [columns]="columns"
        [rowSelection]="'single'"
        [selectedIds]="sel"
        (selectionChange)="onSel($event)"
      >
        <brightrail-table-single-actions>
          <button type="button">Edit</button>
        </brightrail-table-single-actions>
      </brightrail-table>
    `,
  })
  class SingleActionsHarnessComponent {
    rows: BrightrailTableRow[] = [{ id: '1', name: 'Ada' }];
    columns: BrightrailTableColumn[] = [{ id: 'name', header: 'Name', field: 'name' }];
    sel: string[] = ['1'];

    onSel(ids: string[]): void {
      this.sel = ids;
    }
  }

  let fixture: ComponentFixture<SingleActionsHarnessComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SingleActionsHarnessComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(SingleActionsHarnessComponent);
    fixture.detectChanges();
  });

  it('shows single-select actions row when one row is selected', () => {
    const bar = fixture.nativeElement.querySelector('.br-table__single');
    expect(bar).toBeTruthy();
    expect(bar!.textContent).toContain('Edit');
  });
});

describe('BrightrailTableComponent library DX improvements', () => {
  @Component({
    standalone: true,
    imports: [BrightrailTableComponent],
    template: `
      <brightrail-table
        [(selectedIds)]="selected"
        [data]="rows"
        [columns]="columns"
        [rowSelection]="'multiple'"
      />
    `,
  })
  class TwoWaySelectionHarnessComponent {
    rows: BrightrailTableRow[] = [
      { id: '1', name: 'Ada' },
      { id: '2', name: 'Lin' },
    ];
    columns: BrightrailTableColumn[] = [{ id: 'name', header: 'Name', field: 'name' }];
    selected: string[] = [];
  }

  it('two-way binds selectedIds without manual selectionChange handler', () => {
    TestBed.configureTestingModule({ imports: [TwoWaySelectionHarnessComponent] });
    const fixture = TestBed.createComponent(TwoWaySelectionHarnessComponent);
    fixture.detectChanges();

    const cell = fixture.nativeElement.querySelector('tbody tr.br-table__tr td:not(.br-table__td--select)');
    cell.click();
    fixture.detectChanges();

    expect(fixture.componentInstance.selected).toEqual(['1']);
  });

  @Component({
    standalone: true,
    imports: [BrightrailTableComponent],
    template: `
      <ng-template #actions let-row>
        <button type="button" class="cancel-btn">Cancel {{ row.id }}</button>
      </ng-template>
      <brightrail-table
        [data]="rows"
        [columns]="columns"
        [cellTemplates]="{ actions: actions }"
      />
    `,
  })
  class ActionsColumnHarnessComponent {
    rows: BrightrailTableRow[] = [{ id: 'b-1', name: 'Booking' }];
    columns: BrightrailTableColumn[] = [
      { id: 'name', header: 'Guest', field: 'name' },
      { id: 'actions', header: '', columnRole: 'actions', cellTemplateKey: 'actions' },
    ];
  }

  it('renders inline actions column template without rowSelection', () => {
    TestBed.configureTestingModule({ imports: [ActionsColumnHarnessComponent] });
    const fixture = TestBed.createComponent(ActionsColumnHarnessComponent);
    fixture.detectChanges();

    expect(fixture.nativeElement.querySelector('.cancel-btn')?.textContent?.trim()).toBe('Cancel b-1');
    expect(fixture.nativeElement.querySelector('.br-table__single')).toBeFalsy();
  });

  @Component({
    standalone: true,
    imports: [BrightrailTableComponent],
    template: `
      <brightrail-table
        [data]="rows"
        [columns]="columns"
        [filterState]="filters"
        (filterStateChange)="filters = $event"
      />
    `,
  })
  class ColumnSearchHarnessComponent {
    rows: BrightrailTableRow[] = [
      { id: '1', name: 'Ada', status: 'active' },
      { id: '2', name: 'Lin', status: 'paused' },
    ];
    columns: BrightrailTableColumn[] = [
      { id: 'name', header: 'Name', field: 'name', searchable: true },
    ];
    filters: Record<string, string> = { name: 'Ada' };
  }

  it('shows column search when only column.searchable is set', () => {
    TestBed.configureTestingModule({ imports: [ColumnSearchHarnessComponent] });
    const fixture = TestBed.createComponent(ColumnSearchHarnessComponent);
    fixture.detectChanges();

    expect(fixture.nativeElement.querySelector('.br-table__control--search')).toBeTruthy();
    expect(fixture.nativeElement.querySelectorAll('tbody tr.br-table__tr').length).toBe(1);
  });

  @Component({
    standalone: true,
    imports: [BrightrailTableComponent],
    template: `
      <brightrail-table
        [serverMode]="true"
        [totalRowCount]="100"
        [data]="rows"
        [columns]="columns"
        [pagination]="{ pageSize: 10, pageIndex: 2 }"
      />
    `,
  })
  class ServerModeHarnessComponent {
    rows: BrightrailTableRow[] = [{ id: '1', name: 'Server row' }];
    columns: BrightrailTableColumn[] = [{ id: 'name', header: 'Name', field: 'name' }];
  }

  it('uses totalRowCount in serverMode for pagination summary', () => {
    TestBed.configureTestingModule({ imports: [ServerModeHarnessComponent] });
    const fixture = TestBed.createComponent(ServerModeHarnessComponent);
    fixture.detectChanges();

    expect(fixture.nativeElement.textContent).toContain('Showing 21 to 30 of 100 results');
  });
});
