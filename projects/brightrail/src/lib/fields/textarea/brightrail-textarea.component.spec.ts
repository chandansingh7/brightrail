import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { Component } from '@angular/core';

import { BrightrailTextareaComponent } from './brightrail-textarea.component';

@Component({
  standalone: true,
  imports: [ReactiveFormsModule, BrightrailTextareaComponent],
  template: `<brightrail-textarea [formControl]="control" label="Notes" />`,
})
class CvaHostComponent {
  readonly control = new FormControl('draft', { nonNullable: true });
}

describe('BrightrailTextareaComponent', () => {
  let fixture: ComponentFixture<BrightrailTextareaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BrightrailTextareaComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(BrightrailTextareaComponent);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(fixture.componentInstance).toBeTruthy();
  });

  it('applies appearance and status classes', () => {
    fixture.componentRef.setInput('appearance', 'filled');
    fixture.componentRef.setInput('status', 'error');
    fixture.detectChanges();
    const wrap = fixture.nativeElement.querySelector('.br-ta__wrap') as HTMLElement;
    expect(wrap.classList.contains('br-ta__wrap--filled')).toBeTrue();
    expect(wrap.classList.contains('br-ta__wrap--status-error')).toBeTrue();
  });

  it('sets rows and resize on textarea', () => {
    fixture.componentRef.setInput('rows', 6);
    fixture.componentRef.setInput('resize', 'none');
    fixture.detectChanges();
    const textarea = fixture.nativeElement.querySelector('.br-ta__input') as HTMLTextAreaElement;
    expect(textarea.rows).toBe(6);
    expect(textarea.style.resize).toBe('none');
  });

  it('shows status hint when helperText is not set', () => {
    fixture.componentRef.setInput('status', 'warning');
    fixture.detectChanges();
    const hint = fixture.nativeElement.querySelector('.br-ta__hint--warning');
    expect(hint?.textContent).toContain('verify');
  });

  it('integrates with ControlValueAccessor', () => {
    const hostFixture = TestBed.createComponent(CvaHostComponent);
    hostFixture.detectChanges();
    const textarea = hostFixture.nativeElement.querySelector('.br-ta__input') as HTMLTextAreaElement;
    expect(textarea.value).toBe('draft');
    hostFixture.componentInstance.control.setValue('updated');
    hostFixture.detectChanges();
    expect(textarea.value).toBe('updated');
  });
});
