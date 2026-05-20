import { Component } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FocusMonitor } from '@angular/cdk/a11y';
import { Subject } from 'rxjs';

import { BrightrailFocusVisibleDirective } from './brightrail-focus-visible.directive';
import { provideBrightrailPlatform } from './brightrail-platform.providers';

@Component({
  standalone: true,
  imports: [BrightrailFocusVisibleDirective],
  template: `<button type="button" brightrailFocusVisible>Action</button>`,
})
class HostComponent {}

describe('BrightrailFocusVisibleDirective', () => {
  let fixture: ComponentFixture<HostComponent>;
  let button: HTMLButtonElement;
  let origin$: Subject<'mouse' | 'keyboard' | 'touch' | null>;

  beforeEach(async () => {
    origin$ = new Subject();
    await TestBed.configureTestingModule({
      imports: [HostComponent],
      providers: [
        provideBrightrailPlatform(),
        {
          provide: FocusMonitor,
          useValue: {
            monitor: () => origin$.asObservable(),
            stopMonitoring: jasmine.createSpy('stopMonitoring'),
          },
        },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(HostComponent);
    fixture.detectChanges();
    button = fixture.nativeElement.querySelector('button')!;
  });

  it('adds keyboard focus class when origin is keyboard', () => {
    origin$.next('keyboard');
    expect(button.classList.contains('br-cdk-keyboard-focused')).toBeTrue();
    expect(button.classList.contains('br-cdk-focused')).toBeTrue();
  });

  it('clears keyboard class when focus leaves', () => {
    origin$.next('keyboard');
    origin$.next(null);
    expect(button.classList.contains('br-cdk-keyboard-focused')).toBeFalse();
    expect(button.classList.contains('br-cdk-focused')).toBeFalse();
  });
});
