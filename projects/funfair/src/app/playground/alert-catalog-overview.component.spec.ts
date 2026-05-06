import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';

import { AlertCatalogOverviewComponent } from './alert-catalog-overview.component';

describe('AlertCatalogOverviewComponent', () => {
  let fixture: ComponentFixture<AlertCatalogOverviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AlertCatalogOverviewComponent],
      providers: [provideRouter([])],
    }).compileComponents();

    fixture = TestBed.createComponent(AlertCatalogOverviewComponent);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(fixture.componentInstance).toBeTruthy();
  });

  it('should embed variation catalog', () => {
    expect(fixture.nativeElement.querySelector('app-alert-variation-catalog')).toBeTruthy();
  });

  it('should expose section navigation controls', () => {
    const btns = fixture.nativeElement.querySelectorAll('.aco-var-toolbar__btn');
    expect(btns.length).toBe(2);
  });

  it('bindMirrorAppearance updates mirror baseline', () => {
    const cmp = fixture.componentInstance;
    cmp.bindMirrorAppearance('filled');
    expect(cmp.mirrorAppearance()).toBe('filled');
  });

  it('should expose canonical snippet mentioning status', () => {
    expect(fixture.componentInstance.canonicalSnippet).toContain('status="info"');
    expect(fixture.componentInstance.canonicalSnippet).toContain('brightrail-alert-actions');
  });
});
