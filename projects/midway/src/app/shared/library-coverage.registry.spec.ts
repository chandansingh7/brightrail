import { Component } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';

import { App } from '../app';
import { DemoShellComponent } from './demo-shell.component';
import { DEMO_SITES } from './demo-sites.registry';
import { LIBRARY_UI_COVERAGE_MARKERS } from './library-coverage.registry';
import { LibraryCoverageShowcaseComponent } from './library-coverage-showcase.component';

const SHELL_ONLY_MARKERS: readonly string[] = [
  'brightrail-app-shell',
  'brightrail-sidebar',
  'brightrail-top-bar',
  'brightrail-page-header',
  'brightrail-breadcrumb',
  'brightrailPageTitle',
  'brightrailPageSubtitle',
  'brightrailPageHeaderActions',
  'brightrailTopBarStart',
  'brightrailTopBarCenter',
  'brightrailTopBarEnd',
];

describe('library UI coverage', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LibraryCoverageShowcaseComponent],
      providers: [provideRouter([])],
    }).compileComponents();
  });

  it('renders showcase component and directive markers', () => {
    const fixture = TestBed.createComponent(LibraryCoverageShowcaseComponent);
    fixture.detectChanges();
    const html = fixture.nativeElement.innerHTML;
    const missing = LIBRARY_UI_COVERAGE_MARKERS.filter(
      (marker) =>
        marker !== 'brightrail-toast-container' &&
        !SHELL_ONLY_MARKERS.includes(marker) &&
        !html.includes(marker),
    );

    expect(missing).withContext(`Missing markers: ${missing.join(', ')}`).toEqual([]);
  });

  it('renders app shell markers in demo shell', async () => {
    @Component({
      standalone: true,
      imports: [DemoShellComponent],
      template: `<app-demo-shell [site]="site" pageTitle="Title" pageSubtitle="Sub" [breadcrumbs]="[]" />`,
    })
    class ShellHostComponent {
      readonly site = DEMO_SITES.saas;
    }

    await TestBed.configureTestingModule({
      imports: [ShellHostComponent],
      providers: [provideRouter([])],
    }).compileComponents();

    const fixture = TestBed.createComponent(ShellHostComponent);
    fixture.detectChanges();
    const root = fixture.nativeElement as HTMLElement;

    expect(root.querySelector('brightrail-app-shell')).toBeTruthy();
    expect(root.querySelector('brightrail-sidebar')).toBeTruthy();
    expect(root.querySelector('brightrail-top-bar')).toBeTruthy();
    expect(root.querySelector('brightrail-page-header')).toBeTruthy();
    expect(root.querySelector('[brightrailpagetitle]')).toBeTruthy();
    expect(root.querySelector('[brightrailpagesubtitle]')).toBeTruthy();
    expect(root.querySelector('[brightrailpageheaderactions]')).toBeTruthy();
    expect(root.querySelector('[brightrailtopbarstart]')).toBeTruthy();
    expect(root.querySelector('[brightrailtopbarcenter]')).toBeTruthy();
    expect(root.querySelector('[brightrailtopbarend]')).toBeTruthy();
  });

  it('mounts toast container at app root', async () => {
    await TestBed.configureTestingModule({
      imports: [App],
      providers: [provideRouter([])],
    }).compileComponents();
    const fixture = TestBed.createComponent(App);
    fixture.detectChanges();
    expect(fixture.nativeElement.querySelector('brightrail-toast-container')).toBeTruthy();
  });
});
