import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BrightrailRadioGroupComponent } from './brightrail-radio-group.component';

describe('BrightrailRadioGroupComponent', () => {
  let fixture: ComponentFixture<BrightrailRadioGroupComponent>;
  let component: BrightrailRadioGroupComponent;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BrightrailRadioGroupComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(BrightrailRadioGroupComponent);
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

  it('emits selectedId on selection', () => {
    let emitted = '';
    component.selectedIdChange.subscribe((id) => (emitted = id));
    component.select('b', true);
    expect(emitted).toBe('b');
  });
});

