import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';

import { TextareaCatalogOverviewComponent } from './textarea-catalog-overview.component';

describe('TextareaCatalogOverviewComponent', () => {
  let fixture: ComponentFixture<TextareaCatalogOverviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TextareaCatalogOverviewComponent],
      providers: [provideRouter([])],
    }).compileComponents();

    fixture = TestBed.createComponent(TextareaCatalogOverviewComponent);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(fixture.componentInstance).toBeTruthy();
  });

  it('should render textarea examples', () => {
    expect(fixture.nativeElement.querySelectorAll('brightrail-textarea').length).toBeGreaterThan(5);
  });
});
