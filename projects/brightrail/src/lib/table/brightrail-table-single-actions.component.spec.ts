import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BrightrailTableSingleActionsComponent } from './brightrail-table-single-actions.component';

describe('BrightrailTableSingleActionsComponent', () => {
  let fixture: ComponentFixture<BrightrailTableSingleActionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BrightrailTableSingleActionsComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(BrightrailTableSingleActionsComponent);
    fixture.detectChanges();
  });

  it('creates', () => {
    expect(fixture.componentInstance).toBeTruthy();
  });
});
