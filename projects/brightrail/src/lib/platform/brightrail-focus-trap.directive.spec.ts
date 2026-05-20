import { Component, DebugElement } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CdkTrapFocus } from '@angular/cdk/a11y';
import { By } from '@angular/platform-browser';

import { BrightrailFocusTrapDirective } from './brightrail-focus-trap.directive';

@Component({
  standalone: true,
  imports: [BrightrailFocusTrapDirective],
  template: `
    <div brightrailFocusTrap tabindex="-1">
      <button type="button" id="first">First</button>
      <button type="button" id="last">Last</button>
    </div>
  `,
})
class TrapHostComponent {}

describe('BrightrailFocusTrapDirective', () => {
  let fixture: ComponentFixture<TrapHostComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TrapHostComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(TrapHostComponent);
    fixture.detectChanges();
  });

  it('composes CDK trap focus on the host', () => {
    const trapHost: DebugElement = fixture.debugElement.query(By.directive(BrightrailFocusTrapDirective));
    expect(trapHost).toBeTruthy();
    expect(trapHost.injector.get(CdkTrapFocus, null)).toBeTruthy();
  });
});
