import { Component } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BrightrailTabComponent } from './brightrail-tab.component';
import { BrightrailTabContentDirective } from './brightrail-tab-content.directive';
import { BrightrailTabsComponent } from './brightrail-tabs.component';

@Component({
  standalone: true,
  imports: [
    BrightrailTabsComponent,
    BrightrailTabComponent,
    BrightrailTabContentDirective,
  ],
  template: `
    <brightrail-tabs appearance="underline" size="md">
      <brightrail-tab label="One" [active]="true">
        <ng-template brightrailTabContent><p>A</p></ng-template>
      </brightrail-tab>
      <brightrail-tab label="Two">
        <ng-template brightrailTabContent><p>B</p></ng-template>
      </brightrail-tab>
    </brightrail-tabs>
  `,
})
class TabsHarness {}

describe('BrightrailTabsComponent', () => {
  it('should create with projected tabs', async () => {
    await TestBed.configureTestingModule({
      imports: [TabsHarness],
    }).compileComponents();

    const fixture = TestBed.createComponent(TabsHarness);
    fixture.detectChanges();
    const tabs = fixture.nativeElement.querySelectorAll('[role="tab"]');
    expect(tabs.length).toBe(2);
    expect(tabs[0].getAttribute('aria-selected')).toBe('true');
    expect(tabs[1].getAttribute('aria-selected')).toBe('false');
  });

  it('should apply host modifier classes', () => {
    TestBed.configureTestingModule({ imports: [BrightrailTabsComponent] });
    const fixture = TestBed.createComponent(BrightrailTabsComponent);
    fixture.componentRef.setInput('appearance', 'pill');
    fixture.componentRef.setInput('orientation', 'vertical');
    fixture.componentRef.setInput('size', 'sm');
    fixture.detectChanges();
    const inner = (fixture.nativeElement as HTMLElement).querySelector('.br-tabs');
    expect(inner?.classList.contains('br-tabs--pill')).toBe(true);
    expect(inner?.classList.contains('br-tabs--vertical')).toBe(true);
    expect(inner?.classList.contains('br-tabs--size-sm')).toBe(true);
  });
});
