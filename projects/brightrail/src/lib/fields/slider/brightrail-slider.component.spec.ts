import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { Component } from '@angular/core';

import { BrightrailSliderComponent } from './brightrail-slider.component';

@Component({
  standalone: true,
  imports: [ReactiveFormsModule, BrightrailSliderComponent],
  template: `<brightrail-slider [formControl]="control" [showValue]="true" />`,
})
class CvaHostComponent {
  readonly control = new FormControl(42, { nonNullable: true });
}

describe('BrightrailSliderComponent', () => {
  let fixture: ComponentFixture<BrightrailSliderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BrightrailSliderComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(BrightrailSliderComponent);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(fixture.componentInstance).toBeTruthy();
  });

  it('shows value label when showValue is true', () => {
    fixture.componentRef.setInput('showValue', true);
    fixture.componentRef.setInput('min', 0);
    fixture.componentRef.setInput('max', 100);
    fixture.detectChanges();
    const valueEl = fixture.nativeElement.querySelector('.br-slider__value');
    expect(valueEl).toBeTruthy();
  });

  it('emits valueChange on input', () => {
    const component = fixture.componentInstance;
    let emitted = -1;
    component.valueChange.subscribe((v) => (emitted = v));
    const input = fixture.nativeElement.querySelector('.br-slider__input') as HTMLInputElement;
    input.value = '55';
    input.dispatchEvent(new Event('input'));
    expect(emitted).toBe(55);
  });

  it('clamps value within min and max', () => {
    fixture.componentRef.setInput('min', 10);
    fixture.componentRef.setInput('max', 20);
    fixture.componentInstance.writeValue(5);
    fixture.detectChanges();
    expect(fixture.componentInstance.displayValue()).toBe(10);
    fixture.componentInstance.writeValue(99);
    fixture.detectChanges();
    expect(fixture.componentInstance.displayValue()).toBe(20);
  });

  it('integrates with ControlValueAccessor', () => {
    const hostFixture = TestBed.createComponent(CvaHostComponent);
    hostFixture.detectChanges();
    const input = hostFixture.nativeElement.querySelector('.br-slider__input') as HTMLInputElement;
    expect(Number(input.value)).toBe(42);
    expect(hostFixture.nativeElement.querySelector('.br-slider__value')?.textContent?.trim()).toBe(
      '42',
    );
  });
});
