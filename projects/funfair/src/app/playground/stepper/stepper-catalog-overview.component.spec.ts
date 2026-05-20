import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';

import { StepperCatalogOverviewComponent } from './stepper-catalog-overview.component';

describe('StepperCatalogOverviewComponent', () => {
  let fixture: ComponentFixture<StepperCatalogOverviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StepperCatalogOverviewComponent],
      providers: [provideRouter([])],
    }).compileComponents();

    fixture = TestBed.createComponent(StepperCatalogOverviewComponent);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(fixture.componentInstance).toBeTruthy();
  });

  it('renders the variation catalog with copy tiles', () => {
    expect(fixture.nativeElement.querySelector('app-stepper-variation-catalog')).toBeTruthy();
    expect(fixture.nativeElement.querySelector('app-catalog-variation-tile')).toBeTruthy();
  });
});
