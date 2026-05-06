import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlertVariationCatalogComponent } from './alert-variation-catalog.component';

describe('AlertVariationCatalogComponent', () => {
  let fixture: ComponentFixture<AlertVariationCatalogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AlertVariationCatalogComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(AlertVariationCatalogComponent);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(fixture.componentInstance).toBeTruthy();
  });

  it('should render catalog tiles', () => {
    const alerts = fixture.nativeElement.querySelectorAll('brightrail-alert');
    expect(alerts.length).toBeGreaterThan(10);
  });
});
