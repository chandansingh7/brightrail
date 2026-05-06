import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BrightrailCheckboxGroupComponent } from './brightrail-checkbox-group.component';

describe('BrightrailCheckboxGroupComponent', () => {
  let fixture: ComponentFixture<BrightrailCheckboxGroupComponent>;
  let component: BrightrailCheckboxGroupComponent;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BrightrailCheckboxGroupComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(BrightrailCheckboxGroupComponent);
    component = fixture.componentInstance;
    fixture.componentRef.setInput('options', [
      { id: 'a', label: 'Option A' },
      { id: 'b', label: 'Option B' },
    ]);
    fixture.detectChanges();
  });

  it('creates', () => {
    expect(component).toBeTruthy();
  });

  it('emits selected ids when option toggles', () => {
    let emitted: string[] = [];
    component.selectedIdsChange.subscribe((ids) => (emitted = ids));
    component.toggleOption('a', true);
    expect(emitted).toContain('a');
  });

  it('emits all enabled ids on select all', () => {
    let emitted: string[] = [];
    component.selectedIdsChange.subscribe((ids) => (emitted = ids));
    component.toggleSelectAll(true);
    expect(emitted).toEqual(['a', 'b']);
  });
});

