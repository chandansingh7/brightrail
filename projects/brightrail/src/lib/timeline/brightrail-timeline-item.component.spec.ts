import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BrightrailTimelineItemComponent } from './brightrail-timeline-item.component';

describe('BrightrailTimelineItemComponent', () => {
  let fixture: ComponentFixture<BrightrailTimelineItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BrightrailTimelineItemComponent],
    }).compileComponents();
    fixture = TestBed.createComponent(BrightrailTimelineItemComponent);
  });

  it('applies status modifier class on the item', () => {
    fixture.componentRef.setInput('status', 'completed');
    fixture.componentRef.setInput('title', 'Shipped');
    fixture.detectChanges();
    const item: HTMLElement = fixture.nativeElement.querySelector('.br-timeline__item');
    expect(item.classList.contains('br-timeline__item--completed')).toBeTrue();
    expect(fixture.nativeElement.textContent).toContain('Shipped');
  });
});
