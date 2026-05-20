import { TestBed } from '@angular/core/testing';

import { BrightrailToastService } from './brightrail-toast.service';

describe('BrightrailToastService', () => {
  let service: BrightrailToastService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
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
});
