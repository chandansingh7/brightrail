import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BrightrailButtonComponent } from './brightrail-button.component';

describe('BrightrailButtonComponent', () => {
  let fixture: ComponentFixture<BrightrailButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BrightrailButtonComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(BrightrailButtonComponent);
    fixture.componentRef.setInput('variant', 'primary');
    fixture.componentRef.setInput('size', 'md');
  });

  it('should create', () => {
    fixture.detectChanges();
    expect(fixture.componentInstance).toBeTruthy();
  });

  it('should add variant and size classes', () => {
    fixture.detectChanges();
    const btn = fixture.nativeElement.querySelector('.br-button') as HTMLButtonElement | null;
    expect(btn?.classList.contains('br-button--primary')).toBe(true);
    expect(btn?.classList.contains('br-button--md')).toBe(true);
  });

  it('should disable when loading', () => {
    fixture.componentRef.setInput('loading', true);
    fixture.detectChanges();
    const btn = fixture.nativeElement.querySelector('.br-button') as HTMLButtonElement | null;
    expect(btn?.disabled).toBe(true);
    expect(btn?.getAttribute('aria-busy')).toBe('true');
  });

  it('should render spinner when loading', () => {
    fixture.componentRef.setInput('loading', true);
    fixture.detectChanges();
    expect(fixture.nativeElement.querySelector('.br-button__spinner')).toBeTruthy();
  });

  it('should apply active visual state class', () => {
    fixture.componentRef.setInput('visualState', 'active');
    fixture.detectChanges();
    const btn = fixture.nativeElement.querySelector('.br-button') as HTMLButtonElement | null;
    expect(btn?.classList.contains('br-button--state-active')).toBe(true);
    expect(btn?.getAttribute('aria-pressed')).toBe('true');
  });

  it('should render leading icon when iconLeft is plus', () => {
    fixture.componentRef.setInput('iconLeft', 'plus');
    fixture.detectChanges();
    const icons = fixture.nativeElement.querySelectorAll('.br-button__icon');
    expect(icons.length).toBeGreaterThanOrEqual(1);
  });
});
