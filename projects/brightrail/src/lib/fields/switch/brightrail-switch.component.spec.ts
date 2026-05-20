import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { Component } from '@angular/core';

import { BrightrailSwitchComponent } from './brightrail-switch.component';

@Component({
  standalone: true,
  imports: [ReactiveFormsModule, BrightrailSwitchComponent],
  template: `<brightrail-switch [formControl]="control" label="Enable" />`,
})
class CvaHostComponent {
  readonly control = new FormControl(true, { nonNullable: true });
}

describe('BrightrailSwitchComponent', () => {
  let fixture: ComponentFixture<BrightrailSwitchComponent>;
  let component: BrightrailSwitchComponent;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BrightrailSwitchComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(BrightrailSwitchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('emits checkedChange when toggled', () => {
    let emitted = false;
    component.checkedChange.subscribe((v) => (emitted = v));
    const input = fixture.nativeElement.querySelector('.br-sw__input') as HTMLInputElement;
    input.checked = true;
    input.dispatchEvent(new Event('change'));
    expect(emitted).toBeTrue();
  });

  it('applies size and tone classes', () => {
    fixture.componentRef.setInput('size', 'lg');
    fixture.componentRef.setInput('tone', 'success');
    fixture.detectChanges();
    const label = fixture.nativeElement.querySelector('.br-sw') as HTMLElement;
    expect(label.className).toContain('br-sw--lg');
    expect(label.className).toContain('br-sw--success');
  });

  it('integrates with ControlValueAccessor', () => {
    const hostFixture = TestBed.createComponent(CvaHostComponent);
    hostFixture.detectChanges();
    const input = hostFixture.nativeElement.querySelector('.br-sw__input') as HTMLInputElement;
    expect(input.checked).toBeTrue();

    hostFixture.componentInstance.control.setValue(false);
    hostFixture.detectChanges();
    expect(input.checked).toBeFalse();
  });
});
