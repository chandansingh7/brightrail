import { Component } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { BrightrailAlertActionsComponent } from './brightrail-alert-actions.component';
import { BrightrailAlertComponent } from './brightrail-alert.component';
import { BrightrailAlertMessageDirective, BrightrailAlertTitleDirective } from './brightrail-alert.directives';

@Component({
  standalone: true,
  imports: [
    BrightrailAlertComponent,
    BrightrailAlertTitleDirective,
    BrightrailAlertMessageDirective,
    BrightrailAlertActionsComponent,
  ],
  template: `
    <brightrail-alert [status]="status" [dismissible]="dismissible" [placement]="placement">
      <div brightrailAlertTitle>Title</div>
      <div brightrailAlertMessage>Message body</div>
    </brightrail-alert>
  `,
})
class HostComponent {
  status: 'info' | 'error' = 'info';
  dismissible = false;
  placement: 'inline' | 'bottom' = 'inline';
}

describe('BrightrailAlertComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HostComponent],
    }).compileComponents();
  });

  it('uses role alert for error status', () => {
    const fixture = TestBed.createComponent(HostComponent);
    fixture.componentInstance.status = 'error';
    fixture.detectChanges();
    const host = fixture.nativeElement.querySelector('brightrail-alert');
    expect(host.getAttribute('role')).toBe('alert');
    expect(host.hasAttribute('aria-live')).toBeFalse();
  });

  it('uses role status with polite aria-live for informational status', () => {
    const fixture = TestBed.createComponent(HostComponent);
    fixture.componentInstance.status = 'info';
    fixture.detectChanges();
    const host = fixture.nativeElement.querySelector('brightrail-alert');
    expect(host.getAttribute('role')).toBe('status');
    expect(host.getAttribute('aria-live')).toBe('polite');
  });

  it('emits dismiss when dismiss control is activated', () => {
    const fixture = TestBed.createComponent(HostComponent);
    fixture.componentInstance.dismissible = true;
    fixture.detectChanges();
    const alertDe = fixture.debugElement.query(By.directive(BrightrailAlertComponent));
    const cmp = alertDe.componentInstance as BrightrailAlertComponent;
    const spy = jasmine.createSpy('dismiss');
    cmp.dismiss.subscribe(spy);
    const btn = fixture.nativeElement.querySelector('.br-alert__dismiss') as HTMLButtonElement;
    btn.click();
    expect(spy).toHaveBeenCalled();
  });

  it('adds placement-bottom host class when placement is bottom', () => {
    const fixture = TestBed.createComponent(HostComponent);
    fixture.componentInstance.placement = 'bottom';
    fixture.detectChanges();
    const host = fixture.nativeElement.querySelector('brightrail-alert');
    expect(host.classList.contains('br-alert--placement-bottom')).toBeTrue();
  });

  it('omits placement-bottom host class when placement is inline', () => {
    const fixture = TestBed.createComponent(HostComponent);
    fixture.componentInstance.placement = 'inline';
    fixture.detectChanges();
    const host = fixture.nativeElement.querySelector('brightrail-alert');
    expect(host.classList.contains('br-alert--placement-bottom')).toBeFalse();
  });
});
