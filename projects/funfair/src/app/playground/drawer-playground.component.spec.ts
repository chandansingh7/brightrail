import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DrawerPlaygroundComponent } from './drawer-playground.component';

describe('DrawerPlaygroundComponent', () => {
  let fixture: ComponentFixture<DrawerPlaygroundComponent>;
  let component: DrawerPlaygroundComponent;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DrawerPlaygroundComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(DrawerPlaygroundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('creates successfully', () => {
    expect(component).toBeTruthy();
  });

  it('applies navigation drawer recipe defaults', () => {
    component.applyRecipe('navigation-drawer');
    expect(component.placement()).toBe('left');
    expect(component.size()).toBe('narrow');
    expect(component.mode()).toBe('dismissible');
    expect(component.backdrop()).toBe(false);
  });

  it('generates snippet with current drawer settings', () => {
    component.placement.set('right');
    component.size.set('medium');
    component.mode.set('modal');
    component.footerPreset.set('primarySecondary');
    component.headerMode.set('title');
    component.activeTab.set('html');

    const snippet = component.activeSnippet();
    expect(snippet).toContain('<brightrail-drawer');
    expect(snippet).toContain('placement="right"');
    expect(snippet).toContain('size="medium"');
    expect(snippet).toContain('mode="modal"');
  });

  it('omits header snippet when header mode is none', () => {
    component.headerMode.set('none');
    component.activeTab.set('html');
    const snippet = component.activeSnippet();
    expect(snippet).not.toContain('brightrail-drawer-header');
  });
});
