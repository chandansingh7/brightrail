import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BrightrailTreeTableComponent } from './brightrail-tree-table.component';

describe('BrightrailTreeTableComponent', () => {
  let fixture: ComponentFixture<BrightrailTreeTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BrightrailTreeTableComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(BrightrailTreeTableComponent);
    fixture.componentRef.setInput('nodes', [
      { id: 'a', label: 'Alpha', children: [{ id: 'b', label: 'Beta', meta: 'Child' }] },
    ]);
    fixture.detectChanges();
  });

  it('should create and render root row', () => {
    expect(fixture.nativeElement.textContent).toContain('Alpha');
  });
});
