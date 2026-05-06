import { InjectionToken, Signal } from '@angular/core';

export type BrightrailAccordionIconPosition = 'left' | 'right';
export type BrightrailAccordionSize = 'sm' | 'md' | 'lg';
export type BrightrailAccordionLayout = 'stack' | 'enterprise-grid';
export type BrightrailAccordionHeaderChevron = 'down' | 'right';

export interface BrightrailAccordionApi {
  toggleIndex(index: number): void;
  indexOfItem(item: unknown): number;
  readonly expandedIndices: Signal<Set<number>>;
  iconPosition(): BrightrailAccordionIconPosition;
  size(): BrightrailAccordionSize;
  disabled(): boolean;
  showHoverState(): boolean;
  accordionLayout(): BrightrailAccordionLayout;
  headerChevronStyle(): BrightrailAccordionHeaderChevron;
}

export const BRIGHTRAIL_ACCORDION = new InjectionToken<BrightrailAccordionApi>('BrightrailAccordionApi');
