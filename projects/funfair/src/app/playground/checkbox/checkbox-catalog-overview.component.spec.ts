import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';

import { CheckboxCatalogOverviewComponent } from './checkbox-catalog-overview.component';

describe('CheckboxCatalogOverviewComponent', () => {
  let fixture: ComponentFixture<CheckboxCatalogOverviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CheckboxCatalogOverviewComponent],
      providers: [provideRouter([])],
    }).compileComponents();

    fixture = TestBed.createComponent(CheckboxCatalogOverviewComponent);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(fixture.componentInstance).toBeTruthy();
  });

  it('should render checkbox examples', () => {
    expect(fixture.nativeElement.querySelectorAll('brightrail-checkbox').length).toBeGreaterThan(5);
  });
});
