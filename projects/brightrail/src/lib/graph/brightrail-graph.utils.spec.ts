import {
  buildAreaPath,
  buildFunnelStages,
  buildLinePath,
  buildVerticalBars,
  clamp,
  domainMinMax,
  resolveGraphLayout,
  resolveLineStyle,
  scaleLinear,
} from './brightrail-graph.utils';
import { BrightrailGraphSegment, BrightrailGraphSeries } from './brightrail-graph.types';

describe('brightrail-graph.utils', () => {
  const layout = {
    width: 400,
    height: 240,
    plotLeft: 44,
    plotTop: 16,
    plotWidth: 340,
    plotHeight: 192,
    yAxisLabelX: 12,
    xAxisLabelY: 238,
  };

  const sampleSeries: BrightrailGraphSeries[] = [
    {
      id: 'a',
      label: 'A',
      points: [
        { x: 'Jan', y: 10 },
        { x: 'Feb', y: 20 },
        { x: 'Mar', y: 15 },
      ],
    },
  ];

  it('scaleLinear maps domain to range', () => {
    const scale = scaleLinear(0, 100, 0, 200);
    expect(scale(0)).toBe(0);
    expect(scale(50)).toBe(100);
    expect(scale(100)).toBe(200);
  });

  it('clamp keeps values in bounds', () => {
    expect(clamp(5, 0, 10)).toBe(5);
    expect(clamp(-1, 0, 10)).toBe(0);
    expect(clamp(99, 0, 10)).toBe(10);
  });

  it('domainMinMax pads flat values', () => {
    expect(domainMinMax([5, 5])).toEqual({ min: 4, max: 6 });
  });

  it('resolveLineStyle maps chart kinds', () => {
    expect(resolveLineStyle('line-smooth')).toBe('smooth');
    expect(resolveLineStyle('area-step')).toBe('step');
    expect(resolveLineStyle('line')).toBe('default');
  });

  it('buildLinePath creates smooth and step paths', () => {
    const points = [
      { x: 10, y: 100, label: 'a', value: 1 },
      { x: 30, y: 80, label: 'b', value: 2 },
      { x: 50, y: 60, label: 'c', value: 3 },
    ];
    expect(buildLinePath(points, 'default')).toContain('M 10 100');
    expect(buildLinePath(points, 'step')).toContain('H 30');
    expect(buildLinePath(points, 'smooth')).toContain('C');
  });

  it('buildAreaPath closes to baseline', () => {
    const line = 'M 10 100 L 50 60';
    expect(buildAreaPath(line, 120, 10, 50)).toBe('M 10 100 L 50 60 L 50 120 L 10 120 Z');
  });

  it('buildVerticalBars returns stacked rects', () => {
    const multi: BrightrailGraphSeries[] = [
      { id: 'a', label: 'A', points: [{ x: 'Q1', y: 10 }] },
      { id: 'b', label: 'B', points: [{ x: 'Q1', y: 5 }] },
    ];
    const bars = buildVerticalBars(layout, multi, { min: 0, max: 20 }, ['#111', '#222'], 'stacked');
    expect(bars.length).toBe(2);
  });

  it('buildFunnelStages produces one stage per segment', () => {
    const segments: BrightrailGraphSegment[] = [
      { label: 'Top', value: 100 },
      { label: 'Bottom', value: 40 },
    ];
    const stages = buildFunnelStages(layout, segments, ['#4F46E5', '#06B6D4']);
    expect(stages.length).toBe(2);
    expect(stages[0].path).toContain('M');
  });

  it('resolveGraphLayout reserves left margin when a Y-axis title is shown', () => {
    const withoutLabel = resolveGraphLayout(480, 280, 'line');
    const withLabel = resolveGraphLayout(480, 280, 'line', { showYAxisLabel: true });

    expect(withLabel.plotLeft).toBeGreaterThan(withoutLabel.plotLeft);
    expect(withLabel.yAxisLabelX).toBeLessThan(withLabel.plotLeft - 20);
  });

  it('resolveGraphLayout reserves bottom margin when an X-axis title is shown', () => {
    const withoutLabel = resolveGraphLayout(480, 280, 'line');
    const withLabel = resolveGraphLayout(480, 280, 'line', { showXAxisLabel: true });

    expect(withLabel.plotHeight).toBeLessThan(withoutLabel.plotHeight);
    expect(withLabel.xAxisLabelY).toBeGreaterThan(withLabel.plotTop + withLabel.plotHeight);
  });
});
