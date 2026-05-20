import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Component } from '@angular/core';

import { BrightrailFormFieldComponent } from './brightrail-form-field.component';
import { BrightrailTextFieldComponent } from '../text-field/brightrail-text-field.component';

@Component({
  standalone: true,
  imports: [BrightrailFormFieldComponent, BrightrailTextFieldComponent],
  template: `
    <brightrail-form-field
      label="Email"
      hint="We never share your email."
      error="Email is required"
      [required]="true"
      [invalid]="invalid"
    >
      <brightrail-text-field labelPosition="none" />
    </brightrail-form-field>
  `,
})
class HostComponent {
  invalid = false;
}

describe('BrightrailFormFieldComponent', () => {
  let fixture: ComponentFixture<BrightrailFormFieldComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BrightrailFormFieldComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(BrightrailFormFieldComponent);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(fixture.componentInstance).toBeTruthy();
  });

  it('should render label with required asterisk', () => {
    fixture.componentRef.setInput('label', 'Name');
    fixture.componentRef.setInput('required', true);
    fixture.detectChanges();

    const label = fixture.nativeElement.querySelector('.br-form-field__label');
    expect(label?.textContent?.replace(/\s/g, '')).toBe('Name*');
  });

  it('should show hint when not invalid', () => {
    fixture.componentRef.setInput('hint', 'Optional helper');
    fixture.componentRef.setInput('invalid', false);
    fixture.detectChanges();

    expect(fixture.nativeElement.querySelector('.br-form-field__hint')?.textContent).toBe(
      'Optional helper',
    );
    expect(fixture.nativeElement.querySelector('.br-form-field__error')).toBeNull();
  });

  it('should show error when invalid', () => {
    fixture.componentRef.setInput('error', 'Required field');
    fixture.componentRef.setInput('invalid', true);
    fixture.detectChanges();

    expect(fixture.nativeElement.querySelector('.br-form-field__error')?.textContent).toBe(
      'Required field',
    );
    expect(fixture.nativeElement.querySelector('.br-form-field__hint')).toBeNull();
  });

  it('should project control content', () => {
    const hostFixture = TestBed.createComponent(HostComponent);
    hostFixture.detectChanges();
    expect(hostFixture.nativeElement.querySelector('brightrail-text-field')).toBeTruthy();
  });
});
