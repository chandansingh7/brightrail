import { Component } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BrightrailStepComponent } from './brightrail-step.component';
import { BrightrailStepperComponent } from './brightrail-stepper.component';

@Component({
  standalone: true,
  imports: [BrightrailStepperComponent, BrightrailStepComponent],
  template: `
    <brightrail-stepper [activeStep]="1" preset="milestone">
      <brightrail-step caption="Done" />
      <brightrail-step caption="Active" />
      <brightrail-step caption="Wait" />
    </brightrail-stepper>
  `,
})
class HostStepperComponent {}

describe('BrightrailStepperComponent', () => {
  let fixture: ComponentFixture<HostStepperComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HostStepperComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(HostStepperComponent);
    fixture.detectChanges();
  });

  it('should render milestone steps', () => {
    const nodes = fixture.nativeElement.querySelectorAll('.br-stepper__node');
    expect(nodes.length).toBe(3);
    expect(fixture.nativeElement.querySelector('.br-stepper__node--active')).toBeTruthy();
  });
});
