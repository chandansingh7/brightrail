import { Component } from '@angular/core';
import { TestBed } from '@angular/core/testing';

import { BrightrailButtonComponent } from '../buttons/brightrail-button.component';
import { BrightrailMenuComponent } from '../menu/brightrail-menu.component';
import { BrightrailMenuItemComponent } from '../menu/brightrail-menu-item.component';
import { BrightrailMenuTriggerDirective } from '../menu/brightrail-menu-trigger.directive';
import { BrightrailPopoverComponent } from '../popover/brightrail-popover.component';
import { BrightrailPopoverTriggerDirective } from '../popover/brightrail-popover-trigger.directive';
import { BrightrailTooltipDirective } from '../tooltip/brightrail-tooltip.directive';

describe('BrightrailFxShell composition with overlay triggers', () => {
  it('renders brightrail-button with brightrailTooltip without duplicate fx shell', async () => {
    @Component({
      standalone: true,
      imports: [BrightrailButtonComponent, BrightrailTooltipDirective],
      template: `<brightrail-button brightrailTooltip="Help">Action</brightrail-button>`,
    })
    class HostComponent {}

    await TestBed.configureTestingModule({ imports: [HostComponent] }).compileComponents();
    const fixture = TestBed.createComponent(HostComponent);
    expect(() => fixture.detectChanges()).not.toThrow();
  });

  it('renders brightrail-button with brightrailMenuTrigger without duplicate fx shell', async () => {
    @Component({
      standalone: true,
      imports: [
        BrightrailButtonComponent,
        BrightrailMenuComponent,
        BrightrailMenuItemComponent,
        BrightrailMenuTriggerDirective,
      ],
      template: `
        <brightrail-button [brightrailMenuTrigger]="menu">Actions</brightrail-button>
        <brightrail-menu #menu>
          <brightrail-menu-item label="Edit" />
        </brightrail-menu>
      `,
    })
    class HostComponent {}

    await TestBed.configureTestingModule({ imports: [HostComponent] }).compileComponents();
    const fixture = TestBed.createComponent(HostComponent);
    expect(() => fixture.detectChanges()).not.toThrow();
  });

  it('renders brightrail-button with brightrailPopoverTrigger without duplicate fx shell', async () => {
    @Component({
      standalone: true,
      imports: [
        BrightrailButtonComponent,
        BrightrailPopoverComponent,
        BrightrailPopoverTriggerDirective,
      ],
      template: `
        <brightrail-button [brightrailPopoverTrigger]="popover">Open</brightrail-button>
        <brightrail-popover #popover><p>Details</p></brightrail-popover>
      `,
    })
    class HostComponent {}

    await TestBed.configureTestingModule({ imports: [HostComponent] }).compileComponents();
    const fixture = TestBed.createComponent(HostComponent);
    expect(() => fixture.detectChanges()).not.toThrow();
  });
});
