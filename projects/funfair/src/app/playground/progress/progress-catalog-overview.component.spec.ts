import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';

import { ProgressCatalogOverviewComponent } from './progress-catalog-overview.component';

describe('ProgressCatalogOverviewComponent', () => {
  let fixture: ComponentFixture<ProgressCatalogOverviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProgressCatalogOverviewComponent],
      providers: [provideRouter([])],
    }).compileComponents();

    fixture = TestBed.createComponent(ProgressCatalogOverviewComponent);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(fixture.componentInstance).toBeTruthy();
  });

  it('renders the variation catalog with copy tiles', () => {
    expect(fixture.nativeElement.querySelector('app-progress-variation-catalog')).toBeTruthy();
    expect(fixture.nativeElement.querySelector('app-catalog-variation-tile')).toBeTruthy();
  });
});
