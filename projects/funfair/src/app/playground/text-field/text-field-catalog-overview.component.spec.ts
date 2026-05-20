import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';

import { TextFieldCatalogOverviewComponent } from './text-field-catalog-overview.component';

describe('TextFieldCatalogOverviewComponent', () => {
  let fixture: ComponentFixture<TextFieldCatalogOverviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TextFieldCatalogOverviewComponent],
      providers: [provideRouter([])],
    }).compileComponents();

    fixture = TestBed.createComponent(TextFieldCatalogOverviewComponent);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(fixture.componentInstance).toBeTruthy();
  });

  it('should render text field examples', () => {
    expect(fixture.nativeElement.querySelectorAll('brightrail-text-field').length).toBeGreaterThan(10);
  });
});
