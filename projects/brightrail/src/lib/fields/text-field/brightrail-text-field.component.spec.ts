import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { Component } from '@angular/core';

import { BrightrailTextFieldComponent } from './brightrail-text-field.component';

@Component({
  standalone: true,
  imports: [ReactiveFormsModule, BrightrailTextFieldComponent],
  template: `<brightrail-text-field [formControl]="control" />`,
})
class CvaHostComponent {
  readonly control = new FormControl<string>('hello', { nonNullable: true });
}

describe('BrightrailTextFieldComponent', () => {
  let fixture: ComponentFixture<BrightrailTextFieldComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BrightrailTextFieldComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(BrightrailTextFieldComponent);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(fixture.componentInstance).toBeTruthy();
  });

  it('should apply appearance and size classes on wrap', () => {
    fixture.componentRef.setInput('appearance', 'filled');
    fixture.componentRef.setInput('size', 'lg');
    fixture.detectChanges();
    const wrap = fixture.nativeElement.querySelector('.br-tf__wrap') as HTMLElement | null;
    expect(wrap?.classList.contains('br-tf__wrap--filled')).toBe(true);
    expect(wrap?.classList.contains('br-tf__wrap--sz-lg')).toBe(true);
  });

  it('should wrap with ControlValueAccessor', () => {
    const hostFixture = TestBed.createComponent(CvaHostComponent);
    hostFixture.detectChanges();
    const tf = hostFixture.nativeElement.querySelector('brightrail-text-field');
    const input = tf?.querySelector('input') as HTMLInputElement | undefined;
    expect(input?.value).toBe('hello');

    hostFixture.componentInstance.control.setValue('world');
    hostFixture.detectChanges();
    expect(input?.value).toBe('world');
  });

  it('should hide visible label when labelPosition is none', () => {
    fixture.componentRef.setInput('label', 'Name');
    fixture.componentRef.setInput('labelPosition', 'none');
    fixture.detectChanges();
    const labels = fixture.nativeElement.querySelectorAll('.br-tf__label');
    expect(labels.length).toBe(0);
  });

  it('should hide visible label by default when label is set', () => {
    fixture.componentRef.setInput('label', 'Name');
    fixture.detectChanges();
    const labels = fixture.nativeElement.querySelectorAll('.br-tf__label');
    expect(labels.length).toBe(0);
  });

  it('should render inset label on the wrap when labelPosition is inset', () => {
    fixture.componentRef.setInput('label', 'Username');
    fixture.componentRef.setInput('labelPosition', 'inset');
    fixture.componentRef.setInput('appearance', 'outlined');
    fixture.detectChanges();
    const wrap = fixture.nativeElement.querySelector('.br-tf__wrap') as HTMLElement;
    const inset = fixture.nativeElement.querySelector('.br-tf__label--inset');
    expect(wrap?.classList.contains('br-tf__wrap--inset-label')).toBe(true);
    expect(inset?.textContent?.replace(/\s/g, '')).toBe('Username');
  });

  it('should show required marker and set required on control when required is true', () => {
    fixture.componentRef.setInput('label', 'Username');
    fixture.componentRef.setInput('labelPosition', 'top');
    fixture.componentRef.setInput('required', true);
    fixture.detectChanges();
    const req = fixture.nativeElement.querySelector('.br-tf__req');
    const input = fixture.nativeElement.querySelector('input') as HTMLInputElement;
    expect(req?.textContent?.trim()).toBe('*');
    expect(input.required).toBe(true);
    expect(input.getAttribute('aria-required')).toBe('true');
  });

  it('should render side label before wrap when labelPosition is left', () => {
    fixture.componentRef.setInput('label', 'Name');
    fixture.componentRef.setInput('labelPosition', 'left');
    fixture.detectChanges();
    const row = fixture.nativeElement.querySelector('.br-tf__field-row--inline');
    const wrap = fixture.nativeElement.querySelector('.br-tf__wrap');
    const label = fixture.nativeElement.querySelector('.br-tf__label--side');
    expect(row).toBeTruthy();
    expect(label?.textContent?.trim()).toBe('Name');
    expect(wrap).toBeTruthy();
    expect(row?.firstElementChild?.classList.contains('br-tf__label')).toBe(true);
  });

  it('should apply pill corner class when shape is pill', () => {
    fixture.componentRef.setInput('shape', 'pill');
    fixture.detectChanges();
    const wrap = fixture.nativeElement.querySelector('.br-tf__wrap') as HTMLElement;
    expect(wrap?.classList.contains('br-tf__wrap--shape-pill')).toBe(true);
  });

  it('should render side label after wrap when labelPosition is right', () => {
    fixture.componentRef.setInput('label', 'Qty');
    fixture.componentRef.setInput('labelPosition', 'right');
    fixture.detectChanges();
    const row = fixture.nativeElement.querySelector('.br-tf__field-row--inline') as HTMLElement;
    const children = Array.from(row.children);
    const wrapIndex = children.findIndex((el) => el.classList.contains('br-tf__wrap'));
    const labelIndex = children.findIndex((el) => el.classList.contains('br-tf__label'));
    expect(wrapIndex).toBeLessThan(labelIndex);
  });

  it('should disable via FormControl', () => {
    const hostFixture = TestBed.createComponent(CvaHostComponent);
    hostFixture.detectChanges();
    hostFixture.componentInstance.control.disable();
    hostFixture.detectChanges();
    const tf = hostFixture.nativeElement.querySelector('brightrail-text-field');
    const input = tf?.querySelector('input') as HTMLInputElement | undefined;
    expect(input?.disabled).toBe(true);
  });

  it('should place suffix on the left before the input when suffixPosition is left', () => {
    fixture.componentRef.setInput('suffix', 'kg');
    fixture.componentRef.setInput('suffixPosition', 'left');
    fixture.detectChanges();
    const wrap = fixture.nativeElement.querySelector('.br-tf__wrap') as HTMLElement;
    const nodes = Array.from(wrap.children);
    const suffixEl = wrap.querySelector('.br-tf__affix--suffix-before-input');
    const input = wrap.querySelector('input');
    expect(suffixEl?.textContent?.trim()).toBe('kg');
    expect(input).toBeTruthy();
    expect(nodes.indexOf(suffixEl!)).toBeLessThan(nodes.indexOf(input!));
  });

  it('should not render suffix when suffixPosition is none', () => {
    fixture.componentRef.setInput('suffix', 'kg');
    fixture.componentRef.setInput('suffixPosition', 'none');
    fixture.detectChanges();
    expect(fixture.nativeElement.querySelector('.br-tf__affix--suffix')).toBeFalsy();
  });

  it('should show default validation hint when status is set and helperText is omitted', () => {
    fixture.componentRef.setInput('status', 'success');
    fixture.detectChanges();
    const hint = fixture.nativeElement.querySelector('.br-tf__hint--success');
    expect(hint?.textContent?.trim()).toBe('Looks good!');
  });

  it('should prefer custom helperText over default status hint', () => {
    fixture.componentRef.setInput('status', 'error');
    fixture.componentRef.setInput('helperText', 'Custom error');
    fixture.detectChanges();
    const hint = fixture.nativeElement.querySelector('.br-tf__hint--error');
    expect(hint?.textContent?.trim()).toBe('Custom error');
  });

  it('should not render hint row when status is none and helperText is omitted', () => {
    fixture.componentRef.setInput('status', 'none');
    fixture.detectChanges();
    expect(fixture.nativeElement.querySelector('.br-tf__hint')).toBeFalsy();
  });

  it('should render loader icon while loading', () => {
    fixture.componentRef.setInput('loading', true);
    fixture.detectChanges();
    expect(
      fixture.nativeElement.querySelector('.br-tf__icon--loader brightrail-button-icon'),
    ).toBeTruthy();
  });
});
