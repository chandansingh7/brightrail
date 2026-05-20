import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmptyStatePlaygroundComponent } from './empty-state-playground.component';

describe('EmptyStatePlaygroundComponent', () => {
  let fixture: ComponentFixture<EmptyStatePlaygroundComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({ imports: [EmptyStatePlaygroundComponent] }).compileComponents();
    fixture = TestBed.createComponent(EmptyStatePlaygroundComponent);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(fixture.componentInstance).toBeTruthy();
  });

  it('reflects recipe in HTML snippet', () => {
    fixture.componentInstance.onRecipeNgModelChange('core-compact');
    fixture.detectChanges();
    expect(fixture.componentInstance.buildHtml()).toContain('[compact]="true"');
  });

  it('includes icon slot when enabled', () => {
    fixture.componentInstance.showIcon.set(true);
    fixture.detectChanges();
    expect(fixture.componentInstance.buildHtml()).toContain('brightrailEmptyStateIcon');
  });
});
