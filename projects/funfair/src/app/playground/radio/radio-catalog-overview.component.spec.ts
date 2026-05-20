import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';

import { RadioCatalogOverviewComponent } from './radio-catalog-overview.component';

describe('RadioCatalogOverviewComponent', () => {
  let fixture: ComponentFixture<RadioCatalogOverviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RadioCatalogOverviewComponent],
      providers: [provideRouter([])],
    }).compileComponents();

    fixture = TestBed.createComponent(RadioCatalogOverviewComponent);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(fixture.componentInstance).toBeTruthy();
  });

  it('should render radio examples', () => {
    const radios = fixture.nativeElement.querySelectorAll('brightrail-radio');
    const groups = fixture.nativeElement.querySelectorAll('brightrail-radio-group');
    expect(radios.length + groups.length).toBeGreaterThan(5);
  });
});
