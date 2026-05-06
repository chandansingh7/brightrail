import { Component } from '@angular/core';
import { ComponentFixture, TestBed, fakeAsync, tick } from '@angular/core/testing';

import { BrightrailTooltipDirective } from './brightrail-tooltip.directive';

@Component({
  standalone: true,
  imports: [BrightrailTooltipDirective],
  template: `
    <button
      type="button"
      class="host"
      [brightrailTooltip]="text"
      [brightrailTooltipShowDelay]="delay"
      brightrailTooltipTrigger="hover"
    >
      Trigger
    </button>
  `,
})
class TooltipHostComponent {
  text = 'Hello';
  delay = 0;
}

describe('BrightrailTooltipDirective', () => {
  let fixture: ComponentFixture<TooltipHostComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TooltipHostComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(TooltipHostComponent);
    fixture.detectChanges();
  });

  it('creates a portal with tooltip role on hover after delay', fakeAsync(() => {
    fixture.componentInstance.delay = 50;
    fixture.detectChanges();
    const btn: HTMLButtonElement = fixture.nativeElement.querySelector('.host');
    btn.dispatchEvent(new MouseEvent('mouseenter', { bubbles: true }));
    expect(document.querySelector('.br-tooltip-portal')).toBeFalsy();
    tick(50);
    fixture.detectChanges();
    const panel = document.querySelector('[role="tooltip"]') as HTMLElement | null;
    expect(panel).toBeTruthy();
    expect(panel?.textContent?.trim()).toBe('Hello');
    btn.dispatchEvent(new MouseEvent('mouseleave', { bubbles: true }));
    tick(0);
    fixture.detectChanges();
    expect(document.querySelector('[role="tooltip"]')).toBeFalsy();
  }));

  it('does not open when content is empty', fakeAsync(() => {
    fixture.componentInstance.text = '   ';
    fixture.detectChanges();
    const btn: HTMLButtonElement = fixture.nativeElement.querySelector('.host');
    btn.dispatchEvent(new MouseEvent('mouseenter', { bubbles: true }));
    tick(0);
    expect(document.querySelector('[role="tooltip"]')).toBeFalsy();
  }));
});
