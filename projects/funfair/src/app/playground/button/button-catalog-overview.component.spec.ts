import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';

import { ButtonCatalogOverviewComponent } from './button-catalog-overview.component';

describe('ButtonCatalogOverviewComponent', () => {
  let fixture: ComponentFixture<ButtonCatalogOverviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ButtonCatalogOverviewComponent],
      providers: [provideRouter([])],
    }).compileComponents();

    fixture = TestBed.createComponent(ButtonCatalogOverviewComponent);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(fixture.componentInstance).toBeTruthy();
  });

  it('should render button examples', () => {
    expect(fixture.nativeElement.querySelectorAll('brightrail-button').length).toBeGreaterThan(10);
  });
});
