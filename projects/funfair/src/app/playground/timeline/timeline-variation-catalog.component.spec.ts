import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TimelineVariationCatalogComponent } from './timeline-variation-catalog.component';

describe('TimelineVariationCatalogComponent', () => {
  let fixture: ComponentFixture<TimelineVariationCatalogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({ imports: [TimelineVariationCatalogComponent] }).compileComponents();
    fixture = TestBed.createComponent(TimelineVariationCatalogComponent);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(fixture.componentInstance).toBeTruthy();
  });

  it('renders seven sections including futuristic designs', () => {
    const headings = Array.from(
      fixture.nativeElement.querySelectorAll('.tlvc-block__h') as NodeListOf<HTMLElement>,
    ).map((el) => el.textContent?.trim());
    expect(headings?.length).toBe(7);
    expect(headings).toContain('7. Futuristic timeline designs');
  });
});
