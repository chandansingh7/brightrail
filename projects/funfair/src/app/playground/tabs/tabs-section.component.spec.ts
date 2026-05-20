import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';

import { TabsSectionComponent } from './tabs-section.component';

describe('TabsSectionComponent', () => {
  let fixture: ComponentFixture<TabsSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TabsSectionComponent],
      providers: [provideRouter([])],
    }).compileComponents();

    fixture = TestBed.createComponent(TabsSectionComponent);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(fixture.componentInstance).toBeTruthy();
  });
});
