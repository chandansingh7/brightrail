import {
  AfterViewInit,
  ChangeDetectionStrategy,
  Component,
  DestroyRef,
  ElementRef,
  inject,
  viewChild,
  ViewContainerRef,
} from '@angular/core';

@Component({
  selector: 'app-library-coverage-host',
  standalone: true,
  template: `
    <div class="coverage-host" aria-label="Library component coverage">
      <div #sentinel class="coverage-host__sentinel" aria-hidden="true"></div>
      <ng-container #host />
    </div>
  `,
  styles: `
    :host {
      display: block;
    }

    .coverage-host__sentinel {
      height: 1px;
      margin-top: 2rem;
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LibraryCoverageHostComponent implements AfterViewInit {
  private readonly destroyRef = inject(DestroyRef);
  private readonly host = viewChild.required('host', { read: ViewContainerRef });
  private readonly sentinel = viewChild.required('sentinel', { read: ElementRef<HTMLElement> });

  private loaded = false;
  private observer: IntersectionObserver | null = null;

  ngAfterViewInit(): void {
    this.observer = new IntersectionObserver(
      (entries) => {
        if (entries.some((entry) => entry.isIntersecting)) {
          void this.loadShowcase();
        }
      },
      { rootMargin: '240px 0px' },
    );
    this.observer.observe(this.sentinel().nativeElement);

    this.destroyRef.onDestroy(() => {
      this.observer?.disconnect();
      this.observer = null;
    });
  }

  private async loadShowcase(): Promise<void> {
    if (this.loaded) {
      return;
    }
    this.loaded = true;
    this.observer?.disconnect();
    this.observer = null;

    const { LibraryCoverageShowcaseComponent } = await import('./library-coverage-showcase.component');
    this.host().createComponent(LibraryCoverageShowcaseComponent);
  }
}
