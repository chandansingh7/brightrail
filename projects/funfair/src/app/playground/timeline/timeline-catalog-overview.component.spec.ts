import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';

import { TimelineCatalogOverviewComponent } from './timeline-catalog-overview.component';

describe('TimelineCatalogOverviewComponent', () => {
  let fixture: ComponentFixture<TimelineCatalogOverviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TimelineCatalogOverviewComponent],
      providers: [provideRouter([])],
    }).compileComponents();
    fixture = TestBed.createComponent(TimelineCatalogOverviewComponent);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(fixture.componentInstance).toBeTruthy();
  });

  it('embeds the variation catalog', () => {
    expect(fixture.nativeElement.querySelector('app-timeline-variation-catalog')).toBeTruthy();
  });
});
