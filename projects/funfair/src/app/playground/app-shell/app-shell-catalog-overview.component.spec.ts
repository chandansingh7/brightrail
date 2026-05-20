import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';

import { AppShellCatalogOverviewComponent } from './app-shell-catalog-overview.component';

describe('AppShellCatalogOverviewComponent', () => {
  let fixture: ComponentFixture<AppShellCatalogOverviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppShellCatalogOverviewComponent],
      providers: [provideRouter([])],
    }).compileComponents();
    fixture = TestBed.createComponent(AppShellCatalogOverviewComponent);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(fixture.componentInstance).toBeTruthy();
  });

  it('embeds the variation catalog', () => {
    expect(fixture.nativeElement.querySelector('app-app-shell-variation-catalog')).toBeTruthy();
  });
});
