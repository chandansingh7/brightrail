import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BrightrailDatePickerComponent } from './brightrail-date-picker.component';

describe('BrightrailDatePickerComponent', () => {
  async function create(): Promise<ComponentFixture<BrightrailDatePickerComponent>> {
    await TestBed.configureTestingModule({
      imports: [BrightrailDatePickerComponent],
    }).compileComponents();
    const fixture: ComponentFixture<BrightrailDatePickerComponent> = TestBed.createComponent(
      BrightrailDatePickerComponent,
    );
    fixture.detectChanges();
    return fixture;
  }

  it('creates', async () => {
    const fixture = await create();
    expect(fixture.componentInstance).toBeTruthy();
  });

  it('uses tone presets for selected and range colors', async () => {
    const fixture = await create();
    fixture.componentRef.setInput('tone', 'violet');
    fixture.detectChanges();
    const vars = (fixture.componentInstance as any).hostStyleVars();
    expect(vars['--br-dp-selected-bg']).toBe('#6d28d9');
    expect(vars['--br-dp-range-bg']).toBe('rgb(109 40 217 / 16%)');
  });

  it('respects explicit color overrides over tone presets', async () => {
    const fixture = await create();
    fixture.componentRef.setInput('tone', 'teal');
    fixture.componentRef.setInput('selectedDateColor', '#112233');
    fixture.componentRef.setInput('rangeColor', 'rgb(1 2 3 / 10%)');
    fixture.detectChanges();
    const vars = (fixture.componentInstance as any).hostStyleVars();
    expect(vars['--br-dp-selected-bg']).toBe('#112233');
    expect(vars['--br-dp-range-bg']).toBe('rgb(1 2 3 / 10%)');
  });

  it('does not update range draft when range is disabled', async () => {
    const fixture = await create();
    fixture.componentRef.setInput('type', 'range');
    fixture.componentRef.setInput('rangeEnabled', false);
    fixture.detectChanges();

    fixture.componentInstance.onDayClick(new Date(2026, 4, 20));
    expect((fixture.componentInstance as any).rangeDraft()).toEqual({ start: null, end: null });
  });

  it('applies pill shape class when appearance is pill', async () => {
    const fixture = await create();
    fixture.componentRef.setInput('appearance', 'pill');
    fixture.detectChanges();

    const trigger: HTMLButtonElement | null = fixture.nativeElement.querySelector('button.br-select__trigger');
    expect(trigger).not.toBeNull();
    expect(trigger?.classList.contains('br-tf__wrap--shape-pill')).toBeTrue();
  });
});
