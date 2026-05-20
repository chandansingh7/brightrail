import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TimelinePlaygroundComponent } from './timeline-playground.component';
import { PlaygroundThemeService } from '../playground-theme.service';

describe('TimelinePlaygroundComponent', () => {
  let fixture: ComponentFixture<TimelinePlaygroundComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TimelinePlaygroundComponent],
      providers: [PlaygroundThemeService],
    }).compileComponents();

    fixture = TestBed.createComponent(TimelinePlaygroundComponent);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(fixture.componentInstance).toBeTruthy();
  });

  it('workflow recipe shows workflow timeline', () => {
    fixture.componentInstance.onRecipeNgModelChange('core-workflow');
    expect(fixture.componentInstance.showWorkflow()).toBe(true);
    expect(fixture.componentInstance.buildHtml()).toContain('brightrail-timeline');
  });

  it('error status recipe sets item status', () => {
    fixture.componentInstance.onRecipeNgModelChange('status-error');
    expect(fixture.componentInstance.itemStatus()).toBe('error');
  });
});
