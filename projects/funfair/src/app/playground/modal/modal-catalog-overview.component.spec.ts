import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';

import { ModalCatalogOverviewComponent } from './modal-catalog-overview.component';

describe('ModalCatalogOverviewComponent', () => {
  let fixture: ComponentFixture<ModalCatalogOverviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ModalCatalogOverviewComponent],
      providers: [provideRouter([])],
    }).compileComponents();

    fixture = TestBed.createComponent(ModalCatalogOverviewComponent);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(fixture.componentInstance).toBeTruthy();
  });

  it('embeds the variation catalog and HTML examples', () => {
    expect(fixture.nativeElement.querySelector('app-modal-variation-catalog')).toBeTruthy();
    expect(fixture.nativeElement.querySelector('.mco-pre')).toBeTruthy();
  });
});
