import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SkeletonPlaygroundComponent } from './skeleton-playground.component';

describe('SkeletonPlaygroundComponent', () => {
  let fixture: ComponentFixture<SkeletonPlaygroundComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({ imports: [SkeletonPlaygroundComponent] }).compileComponents();
    fixture = TestBed.createComponent(SkeletonPlaygroundComponent);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(fixture.componentInstance).toBeTruthy();
  });

  it('reflects recipe in HTML snippet', () => {
    fixture.componentInstance.onRecipeNgModelChange('anim-pulse');
    fixture.detectChanges();
    expect(fixture.componentInstance.buildHtml()).toContain('animation="pulse"');
  });

  it('reflects list pattern recipe', () => {
    fixture.componentInstance.onRecipeNgModelChange('pattern-list');
    fixture.detectChanges();
    expect(fixture.componentInstance.buildHtml()).toContain('skel-row');
  });
});
