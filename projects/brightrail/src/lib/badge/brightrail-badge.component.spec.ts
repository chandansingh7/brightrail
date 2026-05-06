import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BrightrailBadgeComponent } from './brightrail-badge.component';

describe('BrightrailBadgeComponent', () => {
  let fixture: ComponentFixture<BrightrailBadgeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BrightrailBadgeComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(BrightrailBadgeComponent);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(fixture.componentInstance).toBeTruthy();
  });

  it('should apply variant, color, and size classes', () => {
    fixture.componentRef.setInput('variant', 'outlined');
    fixture.componentRef.setInput('color', 'success');
    fixture.componentRef.setInput('size', 'large');
    fixture.detectChanges();
    const node = fixture.nativeElement.querySelector('.br-badge') as HTMLElement | null;
    expect(node?.classList.contains('br-badge--outlined')).toBe(true);
    expect(node?.classList.contains('br-badge--success')).toBe(true);
    expect(node?.classList.contains('br-badge--large')).toBe(true);
  });

  it('should render icon when configured', () => {
    fixture.componentRef.setInput('icon', 'check');
    fixture.detectChanges();
    expect(fixture.nativeElement.querySelector('.br-badge__icon')).toBeTruthy();
  });

  it('should render dot mode without visible text', () => {
    fixture.componentRef.setInput('dot', true);
    fixture.componentRef.setInput('label', 'Online');
    fixture.detectChanges();
    expect(fixture.nativeElement.querySelector('.br-badge--dot')).toBeTruthy();
    expect(fixture.nativeElement.querySelector('.br-badge__text')).toBeNull();
  });

  it('should support appearance alias for variant', () => {
    fixture.componentRef.setInput('appearance', 'soft');
    fixture.detectChanges();
    const node = fixture.nativeElement.querySelector('.br-badge') as HTMLElement | null;
    expect(node?.classList.contains('br-badge--soft')).toBe(true);
  });

  it('should map critical color to danger style token', () => {
    fixture.componentRef.setInput('color', 'critical');
    fixture.detectChanges();
    const node = fixture.nativeElement.querySelector('.br-badge') as HTMLElement | null;
    expect(node?.classList.contains('br-badge--danger')).toBe(true);
  });
});
