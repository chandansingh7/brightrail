import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BrightrailTreeComponent } from './brightrail-tree.component';

describe('BrightrailTreeComponent', () => {
  let fixture: ComponentFixture<BrightrailTreeComponent>;
  let host: BrightrailTreeComponent;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BrightrailTreeComponent],
    }).compileComponents();
    fixture = TestBed.createComponent(BrightrailTreeComponent);
    host = fixture.componentInstance;
  });

  it('expands and collapses branch nodes', () => {
    fixture.componentRef.setInput('nodes', [
      {
        id: 'root',
        label: 'Root',
        children: [{ id: 'child', label: 'Child' }],
      },
    ]);
    fixture.detectChanges();

    expect(host.isExpanded('root')).toBeFalse();
    const toggle: HTMLButtonElement = fixture.nativeElement.querySelector('.br-tree__toggle');
    toggle.click();
    fixture.detectChanges();
    expect(host.isExpanded('root')).toBeTrue();
    toggle.click();
    fixture.detectChanges();
    expect(host.isExpanded('root')).toBeFalse();
  });

  it('selects a node in single selection mode', () => {
    const selected: string[] = [];
    fixture.componentRef.setInput('nodes', [
      { id: 'one', label: 'One' },
      { id: 'two', label: 'Two' },
    ]);
    host.selectedIdChange.subscribe((id) => selected.push(id));
    fixture.detectChanges();

    const buttons: NodeListOf<HTMLButtonElement> = fixture.nativeElement.querySelectorAll('.br-tree__label-btn');
    buttons[1].click();
    fixture.detectChanges();

    expect(host.getSelectedId()).toBe('two');
    expect(selected).toEqual(['two']);
  });

  it('renders nested children when parent is expanded', () => {
    fixture.componentRef.setInput('nodes', [
      {
        id: 'parent',
        label: 'Parent',
        expanded: true,
        children: [{ id: 'leaf', label: 'Leaf' }],
      },
    ]);
    fixture.detectChanges();

    const labels = Array.from(
      fixture.nativeElement.querySelectorAll('.br-tree__label-btn') as NodeListOf<HTMLElement>,
    ).map((el) => el.textContent?.trim());
    expect(labels).toEqual(['Parent', 'Leaf']);
  });
});
