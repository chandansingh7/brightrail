import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BrightrailCyberBadgeComponent } from './brightrail-cyber-badge.component';

describe('BrightrailCyberBadgeComponent', () => {
  let fixture: ComponentFixture<BrightrailCyberBadgeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({ imports: [BrightrailCyberBadgeComponent] }).compileComponents();
    fixture = TestBed.createComponent(BrightrailCyberBadgeComponent);
    fixture.componentRef.setInput('label', 'Neural link');
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(fixture.componentInstance).toBeTruthy();
  });

  it('renders label and status role', () => {
    const el = fixture.nativeElement as HTMLElement;
    expect(el.textContent).toContain('Neural link');
    expect(el.querySelector('.br-cyber-badge')?.getAttribute('role')).toBe('status');
  });
});
