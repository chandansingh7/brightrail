import { Component } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BrightrailTableToolbarActionsComponent } from './brightrail-table-toolbar-actions.component';

@Component({
  standalone: true,
  imports: [BrightrailTableToolbarActionsComponent],
  template: `<brightrail-table-toolbar-actions (filterClick)="onFilter()" />`,
})
class ToolbarActionsHostComponent {
  filterHits = 0;

  onFilter(): void {
    this.filterHits++;
  }
}

describe('BrightrailTableToolbarActionsComponent', () => {
  let fixture: ComponentFixture<ToolbarActionsHostComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ToolbarActionsHostComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ToolbarActionsHostComponent);
    fixture.detectChanges();
  });

  it('renders four toolbar icon buttons', () => {
    const buttons = fixture.nativeElement.querySelectorAll('button.br-icon-button');
    expect(buttons.length).toBe(4);
  });

  it('emits filterClick when filter button is activated', () => {
    const host = fixture.componentInstance;
    const buttons = fixture.nativeElement.querySelectorAll(
      'button.br-icon-button',
    ) as NodeListOf<HTMLButtonElement>;
    buttons[1].click();
    expect(host.filterHits).toBe(1);
  });
});
