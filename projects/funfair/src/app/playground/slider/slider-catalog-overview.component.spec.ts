import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';

import { SliderCatalogOverviewComponent } from './slider-catalog-overview.component';

describe('SliderCatalogOverviewComponent', () => {
  let fixture: ComponentFixture<SliderCatalogOverviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SliderCatalogOverviewComponent],
      providers: [provideRouter([])],
    }).compileComponents();

    fixture = TestBed.createComponent(SliderCatalogOverviewComponent);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(fixture.componentInstance).toBeTruthy();
  });

  it('should render slider examples', () => {
    expect(fixture.nativeElement.querySelectorAll('brightrail-slider').length).toBeGreaterThan(5);
  });
});
