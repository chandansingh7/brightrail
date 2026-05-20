import { Component } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormControl, ReactiveFormsModule } from '@angular/forms';

import { BrightrailComboboxComponent } from './brightrail-combobox.component';
import { BrightrailComboboxOption } from './brightrail-combobox.types';

const OPTIONS: BrightrailComboboxOption[] = [
  { value: 'us', label: 'United States' },
  { value: 'ca', label: 'Canada' },
  { value: 'mx', label: 'Mexico' },
];

@Component({
  standalone: true,
  imports: [ReactiveFormsModule, BrightrailComboboxComponent],
  template: `<brightrail-combobox [formControl]="control" [options]="options" />`,
})
class CvaHostComponent {
  readonly control = new FormControl<string>('ca', { nonNullable: true });
  readonly options = OPTIONS;
}

describe('BrightrailComboboxComponent', () => {
  let fixture: ComponentFixture<BrightrailComboboxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BrightrailComboboxComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(BrightrailComboboxComponent);
    fixture.componentRef.setInput('options', OPTIONS);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(fixture.componentInstance).toBeTruthy();
  });

  it('should filter options when filterable', () => {
    fixture.componentRef.setInput('filterable', true);
    fixture.detectChanges();

    const component = fixture.componentInstance;
    component.onInputFocus();
    component.onInputInput('can');
    fixture.detectChanges();

    expect(component.filteredOptions().map((o) => o.value)).toEqual(['ca']);
  });

  it('should select an option and emit value', () => {
    const spy = jasmine.createSpy('valueChange');
    fixture.componentInstance.valueChange.subscribe(spy);

    fixture.componentInstance.selectOption(OPTIONS[0]!);
    fixture.detectChanges();

    expect(spy).toHaveBeenCalledWith('us');
  });

  it('should integrate with reactive forms', () => {
    const hostFixture = TestBed.createComponent(CvaHostComponent);
    hostFixture.detectChanges();

    const input = hostFixture.nativeElement.querySelector(
      '.br-combobox__input',
    ) as HTMLInputElement;
    expect(input.value).toBe('Canada');
  });
});
