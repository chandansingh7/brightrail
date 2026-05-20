import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppShellPlaygroundComponent } from './app-shell-playground.component';
import { PlaygroundThemeService } from '../playground-theme.service';

describe('AppShellPlaygroundComponent', () => {
  let fixture: ComponentFixture<AppShellPlaygroundComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppShellPlaygroundComponent],
      providers: [PlaygroundThemeService],
    }).compileComponents();

    fixture = TestBed.createComponent(AppShellPlaygroundComponent);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(fixture.componentInstance).toBeTruthy();
  });

  it('right sidebar recipe sets sidebar position', () => {
    fixture.componentInstance.onRecipeNgModelChange('sidebar-right');
    expect(fixture.componentInstance.sidebarPosition()).toBe('right');
    expect(fixture.componentInstance.buildHtml()).toContain('brightrail-app-shell');
  });

  it('no sidebar recipe hides sidebar', () => {
    fixture.componentInstance.onRecipeNgModelChange('no-sidebar');
    expect(fixture.componentInstance.showSidebar()).toBe(false);
  });
});
