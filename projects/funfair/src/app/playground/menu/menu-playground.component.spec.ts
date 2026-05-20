import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuPlaygroundComponent } from './menu-playground.component';
import { PlaygroundThemeService } from '../playground-theme.service';

describe('MenuPlaygroundComponent', () => {
  let fixture: ComponentFixture<MenuPlaygroundComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MenuPlaygroundComponent],
      providers: [PlaygroundThemeService],
    }).compileComponents();

    fixture = TestBed.createComponent(MenuPlaygroundComponent);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(fixture.componentInstance).toBeTruthy();
  });

  it('view-switcher recipe selects first item', () => {
    const cmp = fixture.componentInstance;
    cmp.applyRecipe('view-switcher');
    expect(cmp.item1Selected()).toBe(true);
    expect(cmp.triggerLabel()).toBe('View');
  });

  it('html snippet includes brightrailMenuTrigger', () => {
    const cmp = fixture.componentInstance;
    expect(cmp.activeSnippet()).toContain('brightrailMenuTrigger');
    expect(cmp.activeSnippet()).toContain('brightrail-menu');
  });
});
