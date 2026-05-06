import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';

import { AvatarCatalogOverviewComponent } from './avatar-catalog-overview.component';

describe('AvatarCatalogOverviewComponent', () => {
  let fixture: ComponentFixture<AvatarCatalogOverviewComponent>;
  let component: AvatarCatalogOverviewComponent;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AvatarCatalogOverviewComponent],
      providers: [provideRouter([])],
    }).compileComponents();

    fixture = TestBed.createComponent(AvatarCatalogOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('groupStackTenSrcs should list ten avatar URLs for dense overflow demo', () => {
    expect(component.groupStackTenSrcs.length).toBe(10);
    expect(component.groupStackTenSrcs.every((u) => u.startsWith('/images/avatar/'))).toBeTrue();
  });
});
