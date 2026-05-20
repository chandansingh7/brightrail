import { TestBed } from '@angular/core/testing';
import { LiveAnnouncer } from '@angular/cdk/a11y';

import { BrightrailLiveAnnouncerService } from './brightrail-live-announcer.service';

describe('BrightrailLiveAnnouncerService', () => {
  let service: BrightrailLiveAnnouncerService;
  let liveAnnouncer: jasmine.SpyObj<LiveAnnouncer>;

  beforeEach(() => {
    liveAnnouncer = jasmine.createSpyObj('LiveAnnouncer', ['announce', 'clear']);
    liveAnnouncer.announce.and.returnValue(Promise.resolve());
    liveAnnouncer.clear.and.stub();

    TestBed.configureTestingModule({
      providers: [
        BrightrailLiveAnnouncerService,
        { provide: LiveAnnouncer, useValue: liveAnnouncer },
      ],
    });

    service = TestBed.inject(BrightrailLiveAnnouncerService);
  });

  it('delegates announce to CDK LiveAnnouncer', async () => {
    await service.announce('Saved', 'assertive');
    expect(liveAnnouncer.announce).toHaveBeenCalledWith('Saved', 'assertive');
  });

  it('delegates clear to CDK LiveAnnouncer', () => {
    service.clear();
    expect(liveAnnouncer.clear).toHaveBeenCalled();
  });
});
