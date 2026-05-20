import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BrightrailToastService } from 'brightrail';

import { ToastPlaygroundComponent } from './toast-playground.component';

describe('ToastPlaygroundComponent', () => {
  let fixture: ComponentFixture<ToastPlaygroundComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({ imports: [ToastPlaygroundComponent] }).compileComponents();
    fixture = TestBed.createComponent(ToastPlaygroundComponent);
    fixture.detectChanges();
  });

  afterEach(() => {
    TestBed.inject(BrightrailToastService).dismissAll();
  });

  it('should create', () => {
    expect(fixture.componentInstance).toBeTruthy();
  });

  it('reflects recipe in HTML snippet', () => {
    fixture.componentInstance.onRecipeNgModelChange('core-danger');
    fixture.detectChanges();
    expect(fixture.componentInstance.buildHtml()).toContain('variant="danger"');
  });

  it('queues toast via service', () => {
    const toast = TestBed.inject(BrightrailToastService);
    fixture.componentInstance.showToastFromSettings();
    expect(toast.toasts().length).toBe(1);
  });
});
