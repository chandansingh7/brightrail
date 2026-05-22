import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BrightrailQuantumStepperComponent } from './brightrail-quantum-stepper.component';

describe('BrightrailQuantumStepperComponent', () => {
  let fixture: ComponentFixture<BrightrailQuantumStepperComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({ imports: [BrightrailQuantumStepperComponent] }).compileComponents();
    fixture = TestBed.createComponent(BrightrailQuantumStepperComponent);
    fixture.componentRef.setInput('steps', [
      { label: 'Scan', description: 'Read inputs' },
      { label: 'Train' },
    ]);
    fixture.componentRef.setInput('currentStep', 1);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(fixture.componentInstance).toBeTruthy();
  });

  it('renders step labels', () => {
    const el = fixture.nativeElement as HTMLElement;
    expect(el.textContent).toContain('Scan');
    expect(el.textContent).toContain('Train');
  });
});
