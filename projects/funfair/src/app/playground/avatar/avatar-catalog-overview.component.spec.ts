import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';

import { AvatarCatalogOverviewComponent } from './avatar-catalog-overview.component';

describe('AvatarCatalogOverviewComponent', () => {
  let fixture: ComponentFixture<AvatarCatalogOverviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AvatarCatalogOverviewComponent],
      providers: [provideRouter([])],
    }).compileComponents();

    fixture = TestBed.createComponent(AvatarCatalogOverviewComponent);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(fixture.componentInstance).toBeTruthy();
  });

  it('renders the variation catalog with copy tiles', () => {
    expect(fixture.nativeElement.querySelector('app-avatar-variation-catalog')).toBeTruthy();
    expect(fixture.nativeElement.querySelector('app-catalog-variation-tile')).toBeTruthy();
  });

  it('shows HTML examples footer from the reference mock', () => {
    expect(fixture.nativeElement.querySelector('#cco-html-examples')).toBeTruthy();
    expect(fixture.nativeElement.querySelector('.cco-pre')?.textContent).toContain('brightrail-avatar-group');
  });
});
