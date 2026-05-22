import { Component } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BrightrailButtonComponent } from '../../src/lib/buttons/brightrail-button.component';

import { BrightrailButtonHarness } from './brightrail-button-harness';

@Component({
  standalone: true,
  imports: [BrightrailButtonComponent],
  template: `<brightrail-button variant="primary">Save</brightrail-button>`,
})
class HostComponent {}

describe('BrightrailButtonHarness', () => {
  let fixture: ComponentFixture<HostComponent>;
  let harness: BrightrailButtonHarness;

  beforeEach(async () => {
    await TestBed.configureTestingModule({ imports: [HostComponent] }).compileComponents();
    fixture = TestBed.createComponent(HostComponent);
    fixture.detectChanges();
    harness = new BrightrailButtonHarness(fixture);
  });

  it('reads label text from the native button', () => {
    expect(harness.labelText()).toBe('Save');
  });
});
