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

  it('should add variant, size, and shape classes', () => {
    fixture.detectChanges();
    const btn = fixture.nativeElement.querySelector('.br-button') as HTMLButtonElement | null;
    expect(btn?.classList.contains('br-button--primary')).toBe(true);
    expect(btn?.classList.contains('br-button--md')).toBe(true);
    expect(btn?.classList.contains('br-button--shape-default')).toBe(true);
  });

  it('should add host full-width class when fullWidth is true', () => {
    fixture.componentRef.setInput('fullWidth', true);
    fixture.detectChanges();
    expect((fixture.nativeElement as HTMLElement).classList.contains('br-host--full')).toBe(
      true,
    );
  });

  it('should add boundary-dotted class when boundaryStyle is dotted', () => {
    fixture.componentRef.setInput('boundaryStyle', 'dotted');
    fixture.detectChanges();
    const btn = fixture.nativeElement.querySelector('.br-button') as HTMLButtonElement | null;
    expect(btn?.classList.contains('br-button--boundary-dotted')).toBe(true);
  });

  it('should disable when loading', () => {
    fixture.componentRef.setInput('loading', true);
    fixture.detectChanges();
    const btn = fixture.nativeElement.querySelector('.br-button') as HTMLButtonElement | null;
    expect(btn?.disabled).toBe(true);
    expect(btn?.getAttribute('aria-busy')).toBe('true');
  });

  it('should render only the spinner when loading', () => {
    fixture.componentRef.setInput('loading', true);
    fixture.detectChanges();
    expect(fixture.nativeElement.querySelector('.br-button__spinner')).toBeTruthy();
    expect(fixture.nativeElement.querySelector('.br-button__dots')).toBeNull();
  });

  it('should add dotted disabled border class when requested and disabled without loading', () => {
    fixture.componentRef.setInput('disabled', true);
    fixture.componentRef.setInput('disabledBorderStyle', 'dotted');
    fixture.detectChanges();
    const btn = fixture.nativeElement.querySelector('.br-button') as HTMLButtonElement | null;
    expect(btn?.classList.contains('br-button--disabled-border-dotted')).toBe(true);
  });

  it('should not use dotted disabled class while loading even if disabled is true', () => {
    fixture.componentRef.setInput('disabled', true);
    fixture.componentRef.setInput('loading', true);
    fixture.componentRef.setInput('disabledBorderStyle', 'dotted');
    fixture.detectChanges();
    const btn = fixture.nativeElement.querySelector('.br-button') as HTMLButtonElement | null;
    expect(btn?.classList.contains('br-button--disabled-border-dotted')).toBe(false);
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

  it('should render dropdown chevron when dropdownIndicator is true', () => {
    fixture.componentRef.setInput('dropdownIndicator', true);
    fixture.detectChanges();
    const drop = fixture.nativeElement.querySelector('.br-button__icon--dropdown');
    expect(drop).toBeTruthy();
  });

  it('should forward aria-label to the native button', () => {
    fixture.componentRef.setInput('ariaLabel', 'Add item');
    fixture.detectChanges();
    const btn = fixture.nativeElement.querySelector('.br-button') as HTMLButtonElement | null;
    expect(btn?.getAttribute('aria-label')).toBe('Add item');
  });
});
