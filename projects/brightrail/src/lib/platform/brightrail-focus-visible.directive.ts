import { Directive, ElementRef, OnDestroy, inject } from '@angular/core';
import { FocusMonitor } from '@angular/cdk/a11y';
import { Subscription } from 'rxjs';

/**
 * Applies CDK {@link FocusMonitor} keyboard-vs-pointer focus styling.
 * Adds `br-cdk-keyboard-focused` when focus originated from the keyboard.
 *
 * Most Brightrail surfaces also style `:focus-visible` natively; this directive
 * is available for hosts that need explicit CDK focus-origin classes.
 */
@Directive({
  selector: '[brightrailFocusVisible]',
  standalone: true,
})
export class BrightrailFocusVisibleDirective implements OnDestroy {
  private readonly focusMonitor = inject(FocusMonitor);
  private readonly elementRef = inject(ElementRef<HTMLElement>);
  private monitorSub: Subscription | null = null;

  constructor() {
    this.monitorSub = this.focusMonitor
      .monitor(this.elementRef, true)
      .subscribe((origin) => {
        const el = this.elementRef.nativeElement;
        el.classList.toggle('br-cdk-keyboard-focused', origin === 'keyboard');
        el.classList.toggle('br-cdk-focused', !!origin);
      });
  }

  ngOnDestroy(): void {
    this.monitorSub?.unsubscribe();
    this.focusMonitor.stopMonitoring(this.elementRef);
  }
}
