import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BrightrailButtonIconComponent } from './brightrail-button-icon.component';

describe('BrightrailButtonIconComponent', () => {
  let fixture: ComponentFixture<BrightrailButtonIconComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BrightrailButtonIconComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(BrightrailButtonIconComponent);
  });

  it('should create', () => {
    fixture.detectChanges();
    expect(fixture.componentInstance).toBeTruthy();
  });

  it('should render svg for plus', () => {
    fixture.componentRef.setInput('name', 'plus');
    fixture.detectChanges();
    expect(fixture.nativeElement.querySelector('svg')).toBeTruthy();
  });

  it('should render svg for user', () => {
    fixture.componentRef.setInput('name', 'user');
    fixture.detectChanges();
    const paths = fixture.nativeElement.querySelectorAll('svg path, svg circle');
    expect(fixture.nativeElement.querySelector('svg')).toBeTruthy();
    expect(paths.length).toBeGreaterThan(0);
  });

  it('should render svg for loader', () => {
    fixture.componentRef.setInput('name', 'loader');
    fixture.detectChanges();
    const svg = fixture.nativeElement.querySelector('svg');
    expect(svg).toBeTruthy();
    expect(svg?.querySelector('circle[stroke-dasharray]')).toBeTruthy();
  });

  it('should render svg for gear', () => {
    fixture.componentRef.setInput('name', 'gear');
    fixture.detectChanges();
    const svg = fixture.nativeElement.querySelector('svg');
    expect(svg).toBeTruthy();
    expect(svg?.querySelectorAll('circle').length).toBeGreaterThan(0);
  });

  it('should render an error icon distinct from info (circle with a cross)', () => {
    fixture.componentRef.setInput('name', 'error');
    fixture.detectChanges();
    const svg = fixture.nativeElement.querySelector('svg');
    const cross = svg?.querySelector('path');
    expect(svg?.querySelector('circle')).toBeTruthy();
    expect(cross?.getAttribute('d')).toContain('M5.35 5.35');
  });
});
