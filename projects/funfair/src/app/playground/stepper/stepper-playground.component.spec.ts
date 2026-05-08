import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StepperPlaygroundComponent } from './stepper-playground.component';

describe('StepperPlaygroundComponent', () => {
  let fixture: ComponentFixture<StepperPlaygroundComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StepperPlaygroundComponent],
    }).compileComponents();
    fixture = TestBed.createComponent(StepperPlaygroundComponent);
    fixture.detectChanges();
  });

  it('creates', () => {
    expect(fixture.componentInstance).toBeTruthy();
  });
});
