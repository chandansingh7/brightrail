import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonPlaygroundComponent } from './button-playground.component';

describe('ButtonPlaygroundComponent', () => {
  let fixture: ComponentFixture<ButtonPlaygroundComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ButtonPlaygroundComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ButtonPlaygroundComponent);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(fixture.componentInstance).toBeTruthy();
  });

  it('should render live preview brightrail-button', () => {
    const btn = fixture.nativeElement.querySelector('brightrail-button');
    expect(btn).toBeTruthy();
  });

  it('should reflect label in generated snippet', () => {
    fixture.componentInstance.label.set('Go');
    fixture.detectChanges();
    expect(fixture.componentInstance.htmlSnippet()).toContain('>Go</brightrail-button>');
  });

  it('should map icon side and icon kind to button inputs', () => {
    fixture.componentInstance.iconKind.set('plus');
    fixture.componentInstance.iconSide.set('left');
    fixture.detectChanges();
    expect(fixture.componentInstance.htmlSnippet()).toContain('iconLeft="plus"');
    expect(fixture.componentInstance.htmlSnippet()).not.toContain('iconRight=');

    fixture.componentInstance.iconSide.set('right');
    fixture.detectChanges();
    expect(fixture.componentInstance.htmlSnippet()).toContain('iconRight="plus"');
    expect(fixture.componentInstance.htmlSnippet()).not.toContain('iconLeft=');

    fixture.componentInstance.iconSide.set('both');
    fixture.detectChanges();
    expect(fixture.componentInstance.htmlSnippet()).toContain('iconLeft="plus"');
    expect(fixture.componentInstance.htmlSnippet()).toContain('iconRight="plus"');

    fixture.componentInstance.iconKind.set('none');
    fixture.detectChanges();
    expect(fixture.componentInstance.htmlSnippet()).not.toContain('iconLeft=');
    expect(fixture.componentInstance.htmlSnippet()).not.toContain('iconRight=');
  });

  it('should map disabled state to snippet via State control', () => {
    fixture.componentInstance.buttonState.set('disabled');
    fixture.detectChanges();
    expect(fixture.componentInstance.htmlSnippet()).toContain('[disabled]="true"');
    expect(fixture.componentInstance.htmlSnippet()).not.toContain('visualState="active"');
  });

  it('should map active state to visualState in snippet', () => {
    fixture.componentInstance.buttonState.set('active');
    fixture.detectChanges();
    expect(fixture.componentInstance.htmlSnippet()).toContain('visualState="active"');
    expect(fixture.componentInstance.htmlSnippet()).not.toContain('[disabled]="true"');
  });
});
