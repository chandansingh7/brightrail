import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BrightrailToastComponent } from './brightrail-toast.component';

describe('BrightrailToastComponent', () => {
  let fixture: ComponentFixture<BrightrailToastComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BrightrailToastComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(BrightrailToastComponent);
    fixture.componentRef.setInput('message', 'Hello');
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(fixture.componentInstance).toBeTruthy();
  });

  it('should apply variant class on host', () => {
    fixture.componentRef.setInput('variant', 'warning');
    fixture.detectChanges();
    expect(fixture.nativeElement.classList.contains('br-toast--warning')).toBe(true);
  });

  it('should render title and message', () => {
    fixture.componentRef.setInput('title', 'Done');
    fixture.componentRef.setInput('message', 'Profile updated');
    fixture.detectChanges();

    expect(fixture.nativeElement.querySelector('.br-toast__title')?.textContent).toBe('Done');
    expect(fixture.nativeElement.querySelector('.br-toast__message')?.textContent).toBe(
      'Profile updated',
    );
  });

  it('should emit dismiss when dismiss button is clicked', () => {
    fixture.componentRef.setInput('dismissible', true);
    fixture.detectChanges();

    const spy = jasmine.createSpy('dismiss');
    fixture.componentInstance.dismiss.subscribe(spy);
    fixture.nativeElement.querySelector('.br-toast__dismiss')?.click();
    expect(spy).toHaveBeenCalled();
  });
});
