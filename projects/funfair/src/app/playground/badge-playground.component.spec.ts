import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BadgePlaygroundComponent } from './badge-playground.component';
import { PlaygroundThemeService } from './playground-theme.service';

describe('BadgePlaygroundComponent', () => {
  let fixture: ComponentFixture<BadgePlaygroundComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BadgePlaygroundComponent],
      providers: [PlaygroundThemeService],
    }).compileComponents();

    fixture = TestBed.createComponent(BadgePlaygroundComponent);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(fixture.componentInstance).toBeTruthy();
  });

  it('notification recipe should switch mode and count', () => {
    const cmp = fixture.componentInstance;
    cmp.applyRecipe('notification');
    expect(cmp.mode()).toBe('notification');
    expect(cmp.effectiveLabel()).toBe('12');
  });

  it('dot recipe should enable dot rendering', () => {
    const cmp = fixture.componentInstance;
    cmp.applyRecipe('dot');
    expect(cmp.effectiveDot()).toBe(true);
  });

  it('html snippet should include dot binding when dot mode is selected', () => {
    const cmp = fixture.componentInstance;
    cmp.mode.set('dot');
    expect(cmp.activeSnippet()).toContain('[dot]="true"');
  });

  it('enterprise alert recipe should apply alert count defaults', () => {
    const cmp = fixture.componentInstance;
    cmp.applyRecipe('enterprise-alerts');
    expect(cmp.mode()).toBe('count');
    expect(cmp.color()).toBe('danger');
    expect(cmp.effectiveLabel()).toBe('3');
  });

  it('advanced compound recipe should expose context label', () => {
    const cmp = fixture.componentInstance;
    cmp.applyRecipe('advanced-compound');
    expect(cmp.context()).toContain('Order');
  });

  it('html snippet should include customizable adjacent context text', () => {
    const cmp = fixture.componentInstance;
    cmp.mode.set('status');
    cmp.context.set('Workflow');
    expect(cmp.activeSnippet()).toContain('badge-context');
    expect(cmp.activeSnippet()).toContain('Workflow');
  });
});
