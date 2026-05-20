import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';

import { SwitchCatalogOverviewComponent } from './switch-catalog-overview.component';

describe('SwitchCatalogOverviewComponent', () => {
  let fixture: ComponentFixture<SwitchCatalogOverviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SwitchCatalogOverviewComponent],
      providers: [provideRouter([])],
    }).compileComponents();

    fixture = TestBed.createComponent(SwitchCatalogOverviewComponent);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(fixture.componentInstance).toBeTruthy();
  });

  it('should render switch examples', () => {
    expect(fixture.nativeElement.querySelectorAll('brightrail-switch').length).toBeGreaterThan(5);
  });
});
