import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VariationCatalogHubPreviewComponent } from './variation-catalog-hub-preview.component';

describe('VariationCatalogHubPreviewComponent', () => {
  let fixture: ComponentFixture<VariationCatalogHubPreviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VariationCatalogHubPreviewComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(VariationCatalogHubPreviewComponent);
    fixture.componentRef.setInput('playgroundRoute', 'button');
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(fixture.componentInstance).toBeTruthy();
  });

  it('renders a live button preview for the button route', () => {
    expect(fixture.nativeElement.querySelector('brightrail-button')).toBeTruthy();
    expect(fixture.nativeElement.textContent).toContain('Save');
  });

  it('renders a fallback icon for overlay-heavy routes', () => {
    fixture.componentRef.setInput('playgroundRoute', 'modal');
    fixture.detectChanges();

    expect(fixture.nativeElement.querySelector('brightrail-button-icon')).toBeTruthy();
    expect(fixture.nativeElement.querySelector('brightrail-button')).toBeFalsy();
  });
});
