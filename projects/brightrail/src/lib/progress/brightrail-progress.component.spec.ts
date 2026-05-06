import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BrightrailProgressComponent } from './brightrail-progress.component';

describe('BrightrailProgressComponent', () => {
  let fixture: ComponentFixture<BrightrailProgressComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BrightrailProgressComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(BrightrailProgressComponent);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(fixture.componentInstance).toBeTruthy();
  });

  it('should apply type, size, and status color classes on host', () => {
    fixture.componentRef.setInput('type', 'circular');
    fixture.componentRef.setInput('size', 'lg');
    fixture.componentRef.setInput('statusColor', 'success');
    fixture.detectChanges();
    const host = fixture.nativeElement as HTMLElement;
    expect(host.classList.contains('br-prog--circular')).toBe(true);
    expect(host.classList.contains('br-prog--size-lg')).toBe(true);
    expect(host.classList.contains('br-prog--success')).toBe(true);
  });

  it('should treat indeterminate input as indeterminate mode', () => {
    fixture.componentRef.setInput('indeterminate', true);
    fixture.detectChanges();
    expect(fixture.componentInstance.effectiveMode()).toBe('indeterminate');
  });

  it('should treat buffer input as buffer mode', () => {
    fixture.componentRef.setInput('buffer', true);
    fixture.detectChanges();
    expect(fixture.componentInstance.effectiveMode()).toBe('buffer');
  });

  it('should clamp value for display', () => {
    fixture.componentRef.setInput('value', 150);
    fixture.detectChanges();
    expect(fixture.componentInstance.valueClamped()).toBe(100);
  });

  it('should coerce string value', () => {
    fixture.componentRef.setInput('value', '72');
    fixture.detectChanges();
    expect(fixture.componentInstance.valueClamped()).toBe(72);
  });

  it('should omit aria-valuenow when indeterminate', () => {
    fixture.componentRef.setInput('type', 'linear');
    fixture.componentRef.setInput('indeterminate', true);
    fixture.detectChanges();
    expect(fixture.componentInstance.ariaValueNow()).toBeNull();
  });

  it('should expose transparent canvas token when canvasBackground unset', () => {
    fixture.detectChanges();
    expect(fixture.componentInstance.resolvedCanvasBackground()).toBe('transparent');
  });

  it('should pass custom canvasBackground to CSS token', () => {
    fixture.componentRef.setInput('canvasBackground', 'rgba(0,0,0,.5)');
    fixture.detectChanges();
    expect(fixture.componentInstance.resolvedCanvasBackground()).toBe('rgba(0,0,0,.5)');
  });

  it('should add compact-no-plate class when compact-card plate is disabled', () => {
    fixture.componentRef.setInput('variant', 'compact-card');
    fixture.componentRef.setInput('compactCardPlate', false);
    fixture.detectChanges();
    const host = fixture.nativeElement as HTMLElement;
    expect(host.classList.contains('br-prog--compact-no-plate')).toBe(true);
  });

  it('should omit compact-no-plate class when compact-card plate is enabled', () => {
    fixture.componentRef.setInput('variant', 'compact-card');
    fixture.componentRef.setInput('compactCardPlate', true);
    fixture.detectChanges();
    const host = fixture.nativeElement as HTMLElement;
    expect(host.classList.contains('br-prog--compact-no-plate')).toBe(false);
  });
});
