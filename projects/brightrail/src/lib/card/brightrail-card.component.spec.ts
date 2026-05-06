import { Component } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { BrightrailCardComponent } from './brightrail-card.component';
import { BrightrailCardContentComponent } from './brightrail-card-content.component';
import { BrightrailCardFooterComponent } from './brightrail-card-footer.component';
import { BrightrailCardHeaderComponent } from './brightrail-card-header.component';

@Component({
  standalone: true,
  imports: [
    BrightrailCardComponent,
    BrightrailCardHeaderComponent,
    BrightrailCardContentComponent,
    BrightrailCardFooterComponent,
  ],
  template: `
    <brightrail-card [interactive]="true">
      <brightrail-card-header><h3>T</h3></brightrail-card-header>
      <brightrail-card-content><p>C</p></brightrail-card-content>
      <brightrail-card-footer>
        <button type="button" id="inner-action">Inner</button>
      </brightrail-card-footer>
    </brightrail-card>
  `,
})
class CardWithNestedButtonHarness {}

describe('BrightrailCardComponent', () => {
  let fixture: ComponentFixture<BrightrailCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        BrightrailCardComponent,
        BrightrailCardHeaderComponent,
        BrightrailCardContentComponent,
        BrightrailCardFooterComponent,
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(BrightrailCardComponent);
  });

  it('should create', () => {
    fixture.componentRef.setInput('appearance', 'basic');
    fixture.detectChanges();
    expect(fixture.componentInstance).toBeTruthy();
  });

  it('should apply appearance class on host', () => {
    fixture.componentRef.setInput('appearance', 'elevated');
    fixture.detectChanges();
    const host = fixture.nativeElement as HTMLElement;
    expect(host.classList.contains('br-card')).toBe(true);
    expect(host.classList.contains('br-card--elevated')).toBe(true);
  });

  it('should use article role when not interactive', () => {
    fixture.componentRef.setInput('interactive', false);
    fixture.detectChanges();
    const host = fixture.nativeElement as HTMLElement;
    expect(host.getAttribute('role')).toBe('article');
    expect(host.hasAttribute('tabindex')).toBe(false);
  });

  it('should use button role and tabindex when interactive', () => {
    fixture.componentRef.setInput('interactive', true);
    fixture.detectChanges();
    const host = fixture.nativeElement as HTMLElement;
    expect(host.getAttribute('role')).toBe('button');
    expect(host.getAttribute('tabindex')).toBe('0');
  });

  it('should apply size modifier class on host', () => {
    fixture.componentRef.setInput('size', 'lg');
    fixture.detectChanges();
    const host = fixture.nativeElement as HTMLElement;
    expect(host.classList.contains('br-card--size-lg')).toBe(true);
  });

  it('should apply disabled host class when state is disabled (non-interactive)', () => {
    fixture.componentRef.setInput('state', 'disabled');
    fixture.detectChanges();
    const host = fixture.nativeElement as HTMLElement;
    expect(host.classList.contains('br-host--disabled')).toBe(true);
  });

  it('should set aria-disabled when interactive and state is disabled', () => {
    fixture.componentRef.setInput('interactive', true);
    fixture.componentRef.setInput('state', 'disabled');
    fixture.detectChanges();
    const host = fixture.nativeElement as HTMLElement;
    expect(host.getAttribute('aria-disabled')).toBe('true');
    expect(host.getAttribute('tabindex')).toBe('-1');
  });

  it('should emit activated on Enter when interactive', () => {
    fixture.componentRef.setInput('interactive', true);
    fixture.detectChanges();
    const activatedSpy = jasmine.createSpy('activated');
    fixture.componentInstance.activated.subscribe(activatedSpy);
    const host = fixture.nativeElement as HTMLElement;
    host.dispatchEvent(new KeyboardEvent('keydown', { key: 'Enter' }));
    expect(activatedSpy).toHaveBeenCalled();
  });

  it('should not emit activated when state is disabled', () => {
    fixture.componentRef.setInput('interactive', true);
    fixture.componentRef.setInput('state', 'disabled');
    fixture.detectChanges();
    const activatedSpy = jasmine.createSpy('activated');
    fixture.componentInstance.activated.subscribe(activatedSpy);
    const host = fixture.nativeElement as HTMLElement;
    host.dispatchEvent(new KeyboardEvent('keydown', { key: 'Enter' }));
    expect(activatedSpy).not.toHaveBeenCalled();
  });

  it('should render dismiss control when dismissible', () => {
    fixture.componentRef.setInput('dismissible', true);
    fixture.detectChanges();
    const btn = (fixture.nativeElement as HTMLElement).querySelector('.br-card__dismiss');
    expect(btn).toBeTruthy();
    expect(btn?.getAttribute('aria-label')).toBe('Dismiss');
  });

  it('should emit dismiss when dismiss button clicked', () => {
    fixture.componentRef.setInput('dismissible', true);
    fixture.componentRef.setInput('interactive', true);
    fixture.detectChanges();
    const dismissSpy = jasmine.createSpy('dismiss');
    fixture.componentInstance.dismiss.subscribe(dismissSpy);
    const activatedSpy = jasmine.createSpy('activated');
    fixture.componentInstance.activated.subscribe(activatedSpy);
    const btn = (fixture.nativeElement as HTMLElement).querySelector('.br-card__dismiss');
    btn?.dispatchEvent(new MouseEvent('click', { bubbles: true }));
    expect(dismissSpy).toHaveBeenCalled();
    expect(activatedSpy).not.toHaveBeenCalled();
  });
});

describe('BrightrailCardComponent nested controls', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CardWithNestedButtonHarness],
    }).compileComponents();
  });

  it('should not emit activated when click originates from nested button', () => {
    const h = TestBed.createComponent(CardWithNestedButtonHarness);
    h.detectChanges();
    const cardDe = h.debugElement.query(By.directive(BrightrailCardComponent));
    expect(cardDe).toBeTruthy();
    const cmp = cardDe!.componentInstance as BrightrailCardComponent;
    const activatedSpy = jasmine.createSpy('activated');
    cmp.activated.subscribe(activatedSpy);
    const inner = h.nativeElement.querySelector('#inner-action') as HTMLElement;
    inner.dispatchEvent(new MouseEvent('click', { bubbles: true }));
    expect(activatedSpy).not.toHaveBeenCalled();
  });
});
