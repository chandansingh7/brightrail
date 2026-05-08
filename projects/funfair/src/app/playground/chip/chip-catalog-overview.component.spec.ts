import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';

import { ChipCatalogOverviewComponent } from './chip-catalog-overview.component';

describe('ChipCatalogOverviewComponent', () => {
  let fixture: ComponentFixture<ChipCatalogOverviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChipCatalogOverviewComponent],
      providers: [provideRouter([])],
    }).compileComponents();

    fixture = TestBed.createComponent(ChipCatalogOverviewComponent);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(fixture.componentInstance).toBeTruthy();
  });

  it('should render chip examples', () => {
    expect(fixture.nativeElement.querySelectorAll('brightrail-chip').length).toBeGreaterThan(10);
  });
});
