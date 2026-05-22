import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BrightrailHolographicPanelComponent } from './brightrail-holographic-panel.component';

describe('BrightrailHolographicPanelComponent', () => {
  let fixture: ComponentFixture<BrightrailHolographicPanelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({ imports: [BrightrailHolographicPanelComponent] }).compileComponents();
    fixture = TestBed.createComponent(BrightrailHolographicPanelComponent);
    fixture.componentRef.setInput('metrics', [{ label: 'Throughput', value: '98', unit: '%', trend: 'up' }]);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(fixture.componentInstance).toBeTruthy();
  });

  it('renders metric labels and values', () => {
    const el = fixture.nativeElement as HTMLElement;
    expect(el.textContent).toContain('Throughput');
    expect(el.textContent).toContain('98');
  });

  it('applies appearance class', () => {
    fixture.componentRef.setInput('appearance', 'neon');
    fixture.detectChanges();
    expect(fixture.nativeElement.querySelector('.br-holo-panel--neon')).toBeTruthy();
  });
});
