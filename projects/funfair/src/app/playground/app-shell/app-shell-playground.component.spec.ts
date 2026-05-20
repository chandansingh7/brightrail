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

  it('buildHtml uses brightrail-button for header actions', () => {
    fixture.componentInstance.onRecipeNgModelChange('core-full');
    expect(fixture.componentInstance.buildHtml()).toContain('<brightrail-button variant="primary" size="sm">New project</brightrail-button>');
    expect(fixture.componentInstance.buildHtml()).not.toContain('<button type="button">New project</button>');
  });

  it('buildHtml uses brightrail-button for page-header recipe', () => {
    fixture.componentInstance.onRecipeNgModelChange('page-header');
    expect(fixture.componentInstance.buildHtml()).toContain('<brightrail-button variant="outline" size="sm">Export</brightrail-button>');
  });

  it('buildTs imports BrightrailButtonComponent', () => {
    expect(fixture.componentInstance.buildTs()).toContain('BrightrailButtonComponent');
  });

  it('sidebar nav uses buttons instead of hash links', () => {
    const sidebar = fixture.nativeElement.querySelector('brightrail-sidebar');
    expect(sidebar?.querySelectorAll('a').length).toBe(0);
    expect(sidebar?.querySelectorAll('button').length).toBe(3);
    expect(fixture.componentInstance.buildHtml()).not.toContain('href="#"');
  });

  it('selectNav updates preview content without leaving the playground', () => {
    fixture.componentInstance.selectNav('projects');
    fixture.detectChanges();

    expect(fixture.componentInstance.activeNavId()).toBe('projects');
    expect(fixture.componentInstance.pageTitle()).toBe('Projects');
    expect(fixture.componentInstance.activeNavContent()).toContain('Project list');
    expect(fixture.nativeElement.querySelector('.app-shell-play-content')?.textContent).toContain(
      'Project list',
    );
  });

  it('keeps preview frame height stable when switching sidebar nav', () => {
    const frame = fixture.nativeElement.querySelector('.bp-preview-inner--app-shell') as HTMLElement;
    const heightBefore = frame.getBoundingClientRect().height;

    fixture.componentInstance.selectNav('projects');
    fixture.detectChanges();
    const heightProjects = frame.getBoundingClientRect().height;

    fixture.componentInstance.selectNav('settings');
    fixture.detectChanges();
    const heightSettings = frame.getBoundingClientRect().height;

    expect(heightProjects).toBeCloseTo(heightBefore, 0);
    expect(heightSettings).toBeCloseTo(heightBefore, 0);
  });
});
