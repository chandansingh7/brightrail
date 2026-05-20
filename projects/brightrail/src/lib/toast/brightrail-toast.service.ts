import { Injectable, Signal, computed, signal } from '@angular/core';

import { BrightrailToastConfig, BrightrailToastEntry } from './brightrail-toast.types';

let nextToastId = 0;

function createToastId(): string {
  nextToastId += 1;
  return `br-toast-${nextToastId}`;
}

@Injectable({ providedIn: 'root' })
export class BrightrailToastService {
  private readonly queue = signal<BrightrailToastEntry[]>([]);

  readonly toasts: Signal<readonly BrightrailToastEntry[]> = computed(() => this.queue());

  show(config: BrightrailToastConfig): string {
    const id = createToastId();
    const entry: BrightrailToastEntry = {
      id,
      variant: config.variant ?? 'info',
      title: config.title ?? '',
      message: config.message,
      dismissible: config.dismissible ?? true,
    };

    this.queue.update((items) => [...items, entry]);

    const duration = config.durationMs ?? 5000;
    if (duration > 0) {
      globalThis.setTimeout(() => this.dismiss(id), duration);
    }

    return id;
  }

  dismiss(id: string): void {
    this.queue.update((items) => items.filter((t) => t.id !== id));
  }

  dismissAll(): void {
    this.queue.set([]);
  }
}
