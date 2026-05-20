import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BrightrailTimelineItemComponent } from './brightrail-timeline-item.component';
import { BrightrailTimelineComponent } from './brightrail-timeline.component';

describe('BrightrailTimelineComponent', () => {
  let fixture: ComponentFixture<BrightrailTimelineComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BrightrailTimelineComponent, BrightrailTimelineItemComponent],
    }).compileComponents();
    fixture = TestBed.createComponent(BrightrailTimelineComponent);
    fixture.detectChanges();
  });

  it('renders ordered list shell', () => {
    const list: HTMLElement = fixture.nativeElement.querySelector('ol.br-timeline');
    expect(list).not.toBeNull();
    expect(list.getAttribute('aria-label')).toBe('Timeline');
  });
});
