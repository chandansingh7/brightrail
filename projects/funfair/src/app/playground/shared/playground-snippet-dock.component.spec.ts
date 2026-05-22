import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlaygroundSnippetDockComponent } from './playground-snippet-dock.component';

describe('PlaygroundSnippetDockComponent', () => {
  let fixture: ComponentFixture<PlaygroundSnippetDockComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({ imports: [PlaygroundSnippetDockComponent] }).compileComponents();
    fixture = TestBed.createComponent(PlaygroundSnippetDockComponent);
    fixture.componentRef.setInput('htmlSnippet', '<brightrail-cyber-badge label="Online" />');
    fixture.componentRef.setInput('tsSnippet', 'export class Example {}');
    fixture.detectChanges();
  });

  it('shows the HTML snippet by default', () => {
    expect(fixture.nativeElement.textContent).toContain('brightrail-cyber-badge');
  });

  it('switches to the TS tab', () => {
    fixture.componentInstance.selectTab('ts');
    fixture.detectChanges();
    expect(fixture.nativeElement.textContent).toContain('export class Example');
  });
});
