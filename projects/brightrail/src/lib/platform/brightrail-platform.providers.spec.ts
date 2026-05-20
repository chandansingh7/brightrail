import { TestBed } from '@angular/core/testing';
import { FocusMonitor, LiveAnnouncer } from '@angular/cdk/a11y';

import { provideBrightrailPlatform } from './brightrail-platform.providers';

describe('provideBrightrailPlatform', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({ providers: [provideBrightrailPlatform()] });
  });

  it('registers CDK LiveAnnouncer', () => {
    expect(TestBed.inject(LiveAnnouncer)).toBeTruthy();
  });

  it('registers CDK FocusMonitor', () => {
    expect(TestBed.inject(FocusMonitor)).toBeTruthy();
  });
});
