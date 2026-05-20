import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';

import { TabsCatalogOverviewComponent } from './tabs-catalog-overview.component';

describe('TabsCatalogOverviewComponent', () => {
  let fixture: ComponentFixture<TabsCatalogOverviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TabsCatalogOverviewComponent],
      providers: [provideRouter([])],
    }).compileComponents();

    fixture = TestBed.createComponent(TabsCatalogOverviewComponent);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(fixture.componentInstance).toBeTruthy();
  });

  it('should render tabs examples', () => {
    expect(fixture.nativeElement.querySelectorAll('brightrail-tabs').length).toBeGreaterThan(5);
  });
});
