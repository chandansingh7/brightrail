import {
  type BrightrailTooltipContentVariant,
  type BrightrailTooltipPlacement,
  type BrightrailTooltipTrigger,
  type BrightrailTooltipVariant,
} from './brightrail-tooltip.types';

describe('brightrail-tooltip.types', () => {
  it('defines placement, trigger, content, and shell variant unions', () => {
    const placement: BrightrailTooltipPlacement = 'top';
    const trigger: BrightrailTooltipTrigger = 'hover';
    const content: BrightrailTooltipContentVariant = 'info';
    const shell: BrightrailTooltipVariant = 'neon';

    expect(placement).toBe('top');
    expect(trigger).toBe('hover');
    expect(content).toBe('info');
    expect(shell).toBe('neon');
  });
});
