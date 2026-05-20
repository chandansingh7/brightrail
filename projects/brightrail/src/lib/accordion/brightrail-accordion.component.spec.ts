import { Component } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { BrightrailAccordionComponent } from './brightrail-accordion.component';
import { BrightrailAccordionItemComponent } from './brightrail-accordion-item.component';

@Component({
  standalone: true,
  imports: [BrightrailAccordionComponent, BrightrailAccordionItemComponent],
  template: `
    <brightrail-accordion [expandMode]="'single'" [defaultExpandedIndex]="0">
      <brightrail-accordion-item title="One"><p>a</p></brightrail-accordion-item>
      <brightrail-accordion-item title="Two"><p>b</p></brightrail-accordion-item>
    </brightrail-accordion>
  `,
})
class AccHarnessComponent {}

describe('BrightrailAccordionComponent', () => {
  let fixture: ComponentFixture<AccHarnessComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({ imports: [AccHarnessComponent] }).compileComponents();
    fixture = TestBed.createComponent(AccHarnessComponent);
    fixture.detectChanges();
  });

  it('should create', () => {
    const acc = fixture.nativeElement.querySelector('brightrail-accordion');
    expect(acc).toBeTruthy();
  });

  it('toggles expansion in single mode', () => {
    const host = fixture.debugElement.query(By.directive(BrightrailAccordionComponent))
      .componentInstance as BrightrailAccordionComponent;
    expect(host.expandedIndices().has(0)).toBe(true);
    host.toggleIndex(1);
    expect(host.expandedIndices().has(0)).toBe(false);
    expect(host.expandedIndices().has(1)).toBe(true);
  });

  it('moves focus and toggles with keyboard on triggers', () => {
    const host = fixture.debugElement.query(By.directive(BrightrailAccordionComponent))
      .componentInstance as BrightrailAccordionComponent;
    const triggers = [
      ...fixture.nativeElement.querySelectorAll('.br-acc-item__trigger'),
    ] as HTMLButtonElement[];
    expect(triggers.length).toBe(2);

    host.onTriggerKeydown(new KeyboardEvent('keydown', { key: 'ArrowDown' }), 0);
    fixture.detectChanges();
    expect(host.focusedIndex()).toBe(1);

    host.onTriggerKeydown(new KeyboardEvent('keydown', { key: 'Enter' }), 1);
    fixture.detectChanges();
    expect(host.expandedIndices().has(1)).toBe(true);
  });

  it('opens multiple panels when defaultExpandedIndices is set', async () => {
    @Component({
      standalone: true,
      imports: [BrightrailAccordionComponent, BrightrailAccordionItemComponent],
      template: `
        <brightrail-accordion expandMode="multi" [defaultExpandedIndices]="[0, 1]" [defaultExpandedIndex]="null">
          <brightrail-accordion-item title="A"><p>a</p></brightrail-accordion-item>
          <brightrail-accordion-item title="B"><p>b</p></brightrail-accordion-item>
        </brightrail-accordion>
      `,
    })
    class MultiDef {}

    TestBed.resetTestingModule();
    await TestBed.configureTestingModule({ imports: [MultiDef] }).compileComponents();
    const f = TestBed.createComponent(MultiDef);
    f.detectChanges();
    const host = f.debugElement.query(By.directive(BrightrailAccordionComponent))
      .componentInstance as BrightrailAccordionComponent;
    expect(host.expandedIndices().has(0)).toBe(true);
    expect(host.expandedIndices().has(1)).toBe(true);
  });
});

describe('BrightrailAccordionItemComponent', () => {
  it('should create standalone item in accordion context', async () => {
    @Component({
      standalone: true,
      imports: [BrightrailAccordionComponent, BrightrailAccordionItemComponent],
      template: `
        <brightrail-accordion [defaultExpandedIndex]="null">
          <brightrail-accordion-item title="A">x</brightrail-accordion-item>
        </brightrail-accordion>
      `,
    })
    class One {}
    await TestBed.configureTestingModule({ imports: [One] }).compileComponents();
    const f = TestBed.createComponent(One);
    f.detectChanges();
    expect(f.nativeElement.textContent).toContain('A');
  });

  it('should render subtitle when provided', async () => {
    @Component({
      standalone: true,
      imports: [BrightrailAccordionComponent, BrightrailAccordionItemComponent],
      template: `
        <brightrail-accordion [defaultExpandedIndex]="null">
          <brightrail-accordion-item title="FAQ" subtitle="Common questions">x</brightrail-accordion-item>
        </brightrail-accordion>
      `,
    })
    class Sub {}
    await TestBed.configureTestingModule({ imports: [Sub] }).compileComponents();
    const f = TestBed.createComponent(Sub);
    f.detectChanges();
    expect(f.nativeElement.textContent).toContain('Common questions');
  });
});
