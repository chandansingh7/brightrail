import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';

import { SkeletonCatalogOverviewComponent } from './skeleton-catalog-overview.component';

describe('SkeletonCatalogOverviewComponent', () => {
  let fixture: ComponentFixture<SkeletonCatalogOverviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SkeletonCatalogOverviewComponent],
      providers: [provideRouter([])],
    }).compileComponents();

    fixture = TestBed.createComponent(SkeletonCatalogOverviewComponent);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(fixture.componentInstance).toBeTruthy();
  });

  it('embeds the variation catalog', () => {
    expect(fixture.nativeElement.querySelector('app-skeleton-variation-catalog')).toBeTruthy();
  });
});
