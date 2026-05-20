import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BrightrailGraphComponent } from './brightrail-graph.component';
import { BrightrailGraphSeries } from './brightrail-graph.types';

const SAMPLE_SERIES: BrightrailGraphSeries[] = [
  {
    id: 'revenue',
    label: 'Revenue',
    points: [
      { x: 'Jan', y: 4200 },
      { x: 'Feb', y: 5100 },
      { x: 'Mar', y: 6240 },
    ],
  },
];

describe('BrightrailGraphComponent', () => {
  let fixture: ComponentFixture<BrightrailGraphComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BrightrailGraphComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(BrightrailGraphComponent);
    fixture.componentRef.setInput('series', SAMPLE_SERIES);
    fixture.componentRef.setInput('kind', 'line');
    fixture.detectChanges();
  });

  it('creates and renders svg from user-provided series', () => {
    const el = fixture.nativeElement as HTMLElement;
    expect(el.querySelector('svg')).toBeTruthy();
  });

  it('renders legend when enabled', () => {
    fixture.componentRef.setInput('showLegend', true);
    fixture.detectChanges();
    const el = fixture.nativeElement as HTMLElement;
    expect(el.querySelector('.br-graph__legend')).toBeTruthy();
  });

  it('renders donut slices from user-provided segments', () => {
    fixture.componentRef.setInput('kind', 'donut');
    fixture.componentRef.setInput('segments', [
      { label: 'A', value: 60 },
      { label: 'B', value: 40 },
    ]);
    fixture.detectChanges();
    expect(fixture.nativeElement.querySelectorAll('.br-graph__slice').length).toBe(2);
  });

  it('respects lineStyle override', () => {
    fixture.componentRef.setInput('lineStyle', 'step');
    fixture.detectChanges();
    const path = fixture.nativeElement.querySelector('.br-graph__line') as SVGPathElement;
    expect(path?.getAttribute('d')).toContain('H');
  });

  it('applies dark surface host class', () => {
    fixture.componentRef.setInput('surface', 'dark');
    fixture.detectChanges();
    expect(fixture.nativeElement.classList.contains('br-graph--surface-dark')).toBe(true);
  });

  it('keeps the Y-axis title left of tick labels', () => {
    fixture.componentRef.setInput('yAxisLabel', 'Revenue (USD)');
    fixture.componentRef.setInput('showYAxis', true);
    fixture.detectChanges();

    const label = fixture.nativeElement.querySelector('.br-graph__axis-label--y') as SVGTextElement;
    const tick = fixture.nativeElement.querySelector('.br-graph__tick--y') as SVGTextElement;
    expect(label).toBeTruthy();
    expect(tick).toBeTruthy();
    expect(Number(label.getAttribute('x'))).toBeLessThan(Number(tick.getAttribute('x')) - 16);
  });
});
