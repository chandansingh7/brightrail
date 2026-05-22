import { Component } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BrightrailPopoverComponent } from './brightrail-popover.component';
import { BrightrailPopoverTriggerDirective } from './brightrail-popover-trigger.directive';

@Component({
  standalone: true,
  imports: [BrightrailPopoverComponent, BrightrailPopoverTriggerDirective],
  template: `
    <button type="button" [brightrailPopoverTrigger]="popover">Open</button>
    <brightrail-popover #popover><p>Panel body</p></brightrail-popover>
  `,
})
class HostComponent {}

describe('BrightrailPopoverComponent', () => {
  let fixture: ComponentFixture<HostComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({ imports: [HostComponent] }).compileComponents();
    fixture = TestBed.createComponent(HostComponent);
    fixture.detectChanges();
  });

  it('opens on trigger click', () => {
    const btn = fixture.nativeElement.querySelector('button') as HTMLButtonElement;
    btn.click();
    fixture.detectChanges();
    const panel = fixture.nativeElement.querySelector('.br-popover') as HTMLElement;
    expect(panel.hidden).toBeFalse();
  });
});
