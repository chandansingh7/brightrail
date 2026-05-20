import { Injectable, inject } from '@angular/core';
import { LiveAnnouncer } from '@angular/cdk/a11y';

export type BrightrailLiveAnnouncerPoliteness = 'off' | 'polite' | 'assertive';

/**
 * Screen-reader announcements via the CDK {@link LiveAnnouncer}.
 * Use for async status updates (save complete, errors, loading done).
 */
@Injectable({ providedIn: 'root' })
export class BrightrailLiveAnnouncerService {
  private readonly announcer = inject(LiveAnnouncer);

  announce(message: string, politeness: BrightrailLiveAnnouncerPoliteness = 'polite'): Promise<void> {
    return this.announcer.announce(message, politeness);
  }

  clear(): void {
    this.announcer.clear();
  }
}
