import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BrightrailPaginationComponent } from './brightrail-pagination.component';

describe('BrightrailPaginationComponent', () => {
  let fixture: ComponentFixture<BrightrailPaginationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({ imports: [BrightrailPaginationComponent] }).compileComponents();
    fixture = TestBed.createComponent(BrightrailPaginationComponent);
    fixture.componentRef.setInput('length', 100);
    fixture.componentRef.setInput('pageSize', 10);
    fixture.componentRef.setInput('pageIndex', 2);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(fixture.componentInstance).toBeTruthy();
  });

  it('emits pageChange when page button clicked', () => {
    const spy = jasmine.createSpy('pageChange');
    fixture.componentInstance.pageChange.subscribe(spy);
    fixture.componentInstance.goPage(4);
    expect(spy).toHaveBeenCalledWith(4);
  });

  it('respects totalPages override', () => {
    fixture.componentRef.setInput('totalPages', 12);
    fixture.componentRef.setInput('length', 999);
    fixture.detectChanges();
    expect(fixture.componentInstance.rawPageCount()).toBe(12);
  });

  it('emits pageSizeChange', () => {
    const spy = jasmine.createSpy('pageSizeChange');
    fixture.componentInstance.pageSizeChange.subscribe(spy);
    fixture.componentInstance.onPageSizePick(25);
    expect(spy).toHaveBeenCalledWith(25);
  });

  it('emits sheetToggle from mobile-sheet affordance', () => {
    const spy = jasmine.createSpy('sheetToggle');
    fixture.componentInstance.sheetToggle.subscribe(spy);
    fixture.componentRef.setInput('variant', 'mobile-sheet');
    fixture.componentRef.setInput('showFirstLast', false);
    fixture.detectChanges();
    fixture.componentInstance.onMobileSheetToggle(new Event('click'));
    expect(spy).toHaveBeenCalled();
  });

  it('does not emit sheetToggle when disabled', () => {
    const spy = jasmine.createSpy('sheetToggle');
    fixture.componentInstance.sheetToggle.subscribe(spy);
    fixture.componentRef.setInput('variant', 'mobile-sheet');
    fixture.componentRef.setInput('length', 0);
    fixture.detectChanges();
    fixture.componentInstance.onMobileSheetToggle(new Event('click'));
    expect(spy).not.toHaveBeenCalled();
  });
});
