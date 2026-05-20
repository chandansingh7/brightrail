import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';

import { EmptyStateCatalogOverviewComponent } from './empty-state-catalog-overview.component';

describe('EmptyStateCatalogOverviewComponent', () => {
  let fixture: ComponentFixture<EmptyStateCatalogOverviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EmptyStateCatalogOverviewComponent],
      providers: [provideRouter([])],
    }).compileComponents();

    fixture = TestBed.createComponent(EmptyStateCatalogOverviewComponent);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(fixture.componentInstance).toBeTruthy();
  });

  it('embeds the variation catalog', () => {
    expect(fixture.nativeElement.querySelector('app-empty-state-variation-catalog')).toBeTruthy();
  });
});
