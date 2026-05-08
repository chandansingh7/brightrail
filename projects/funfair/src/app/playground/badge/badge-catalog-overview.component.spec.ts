import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';

import { BadgeCatalogOverviewComponent } from './badge-catalog-overview.component';

describe('BadgeCatalogOverviewComponent', () => {
  let fixture: ComponentFixture<BadgeCatalogOverviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BadgeCatalogOverviewComponent],
      providers: [provideRouter([])],
    }).compileComponents();

    fixture = TestBed.createComponent(BadgeCatalogOverviewComponent);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(fixture.componentInstance).toBeTruthy();
  });

  it('should render badge examples', () => {
    expect(fixture.nativeElement.querySelectorAll('brightrail-badge').length).toBeGreaterThan(6);
  });
});
