import { TestBed } from '@angular/core/testing';
import { LiveAnnouncer } from '@angular/cdk/a11y';

import { provideBrightrailPlatform } from '../platform/brightrail-platform.providers';
import { BrightrailToastService } from './brightrail-toast.service';

describe('BrightrailToastService', () => {
  let service: BrightrailToastService;
  let liveAnnouncer: jasmine.SpyObj<LiveAnnouncer>;

  beforeEach(() => {
    liveAnnouncer = jasmine.createSpyObj('LiveAnnouncer', ['announce', 'clear']);
    liveAnnouncer.announce.and.resolveTo();

    TestBed.configureTestingModule({
      providers: [provideBrightrailPlatform(), { provide: LiveAnnouncer, useValue: liveAnnouncer }],
    });
    service = TestBed.inject(BrightrailToastService);
    service.dismissAll();
  });

  it('should start with an empty queue', () => {
    expect(service.toasts()).toEqual([]);
  });

  it('should enqueue a toast and return its id', () => {
    const id = service.show({ message: 'Saved', variant: 'success' });
    expect(id).toMatch(/^br-toast-\d+$/);
    expect(service.toasts().length).toBe(1);
    expect(service.toasts()[0]?.message).toBe('Saved');
    expect(service.toasts()[0]?.variant).toBe('success');
  });

  it('should dismiss a toast by id', () => {
    const id = service.show({ message: 'One' });
    service.dismiss(id);
    expect(service.toasts()).toEqual([]);
  });

  it('should dismiss all toasts', () => {
    service.show({ message: 'One' });
    service.show({ message: 'Two' });
    service.dismissAll();
    expect(service.toasts()).toEqual([]);
  });

  it('announces toast content via CDK LiveAnnouncer', () => {
    service.show({ title: 'Saved', message: 'Your changes were saved', variant: 'success' });
    expect(liveAnnouncer.announce).toHaveBeenCalledWith('Saved. Your changes were saved', 'polite');
  });

  it('uses assertive politeness for danger toasts', () => {
    service.show({ message: 'Failed to save', variant: 'danger' });
    expect(liveAnnouncer.announce).toHaveBeenCalledWith('Failed to save', 'assertive');
  });
});
