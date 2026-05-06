import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { Component } from '@angular/core';

import { BrightrailSelectComponent } from './brightrail-select.component';

@Component({
  standalone: true,
  imports: [ReactiveFormsModule, BrightrailSelectComponent],
  template: `<brightrail-select [formControl]="control" />`,
})
class CvaHostComponent {
  readonly control = new FormControl<string>('alpha-centauri', { nonNullable: true });
}

describe('BrightrailSelectComponent', () => {
  let fixture: ComponentFixture<BrightrailSelectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BrightrailSelectComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(BrightrailSelectComponent);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(fixture.componentInstance).toBeTruthy();
  });

  it('should apply appearance and size classes on trigger', () => {
    fixture.componentRef.setInput('appearance', 'filled');
    fixture.componentRef.setInput('size', 'lg');
    fixture.detectChanges();
    const trig = fixture.nativeElement.querySelector('.br-select__trigger') as HTMLElement | null;
    expect(trig?.classList.contains('br-tf__wrap--filled')).toBe(true);
    expect(trig?.classList.contains('br-tf__wrap--sz-lg')).toBe(true);
  });

  it('should wire ControlValueAccessor', () => {
    const hostFixture = TestBed.createComponent(CvaHostComponent);
    hostFixture.detectChanges();
    const root = hostFixture.nativeElement.querySelector('brightrail-select');
    const label = root?.querySelector('.br-select__value');
    expect(label?.textContent?.trim()).toBe('alpha-centauri');

    hostFixture.componentInstance.control.setValue('next');
    hostFixture.detectChanges();
    expect(label?.textContent?.trim()).toBe('next');
  });

  it('should prefer displayText over the model value', () => {
    fixture.componentRef.setInput('displayText', 'Shown');
    fixture.componentInstance.writeValue('id-123');
    fixture.detectChanges();
    const el = fixture.nativeElement.querySelector('.br-select__value') as HTMLElement;
    expect(el.textContent?.trim()).toBe('Shown');
  });

  it('should not open when appearance is readonly', () => {
    fixture.componentRef.setInput('appearance', 'readonly');
    fixture.detectChanges();
    const btn = fixture.nativeElement.querySelector('.br-select__trigger') as HTMLButtonElement;
    btn.click();
    fixture.detectChanges();
    expect(fixture.nativeElement.querySelector('.br-select__panel')).toBeFalsy();
  });

  it('should show default validation hint when status is set and helperText is omitted', () => {
    fixture.componentRef.setInput('status', 'warning');
    fixture.detectChanges();
    const hint = fixture.nativeElement.querySelector('.br-tf__hint--warning');
    expect(hint?.textContent?.trim()).toBe('Please verify this information.');
  });

  it('should render loader icon while loading', () => {
    fixture.componentRef.setInput('loading', true);
    fixture.detectChanges();
    expect(fixture.nativeElement.querySelector('.br-tf__icon--loader brightrail-button-icon')).toBeTruthy();
  });

  it('should apply wrapping classes when textOverflow is wrap', () => {
    fixture.componentRef.setInput('textOverflow', 'wrap');
    fixture.detectChanges();
    const value = fixture.nativeElement.querySelector('.br-select__value') as HTMLElement | null;
    expect(value?.classList.contains('br-select__value--wrap')).toBe(true);

    const trigger = fixture.nativeElement.querySelector('.br-select__trigger') as HTMLButtonElement;
    trigger.click();
    fixture.detectChanges();
    const panel = fixture.nativeElement.querySelector('.br-select__panel') as HTMLElement | null;
    expect(panel?.classList.contains('br-select__panel--wrap')).toBe(true);
  });

  it('should hide default value span when .br-select-value-slot is projected', async () => {
    @Component({
      standalone: true,
      imports: [BrightrailSelectComponent],
      template: `<brightrail-select [displayText]="'Hidden'">
        <span class="br-select-value-slot">chips</span>
      </brightrail-select>`,
    })
    class ProjHost {}

    const hostFixture = TestBed.configureTestingModule({
      imports: [ProjHost],
    }).createComponent(ProjHost);
    hostFixture.detectChanges();
    await hostFixture.whenStable();
    hostFixture.detectChanges();

    const host = hostFixture.nativeElement as HTMLElement;
    expect(host.querySelector('.br-select__value')).toBeFalsy();
    expect(host.textContent).toContain('chips');
  });
});
