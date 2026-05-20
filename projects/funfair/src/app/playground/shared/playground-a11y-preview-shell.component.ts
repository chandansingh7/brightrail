import { NgComponentOutlet } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  Injector,
  Type,
  inject,
  signal,
} from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { PLAYGROUND_A11Y_PREVIEW_LOADERS } from './playground-a11y-preview.registry';
import { PLAYGROUND_A11Y_PREVIEW_MODE } from './playground-a11y-preview.token';

@Component({
  selector: 'app-playground-a11y-preview-shell',
  standalone: true,
  imports: [NgComponentOutlet],
  template: `
    @if (error()) {
      <p class="a11y-shell__error">{{ error() }}</p>
    } @else if (componentType()) {
      <div data-brightrail-a11y-preview-ready="true">
        <ng-container *ngComponentOutlet="componentType()!; injector: childInjector" />
      </div>
    }
  `,
  styleUrl: './playground-a11y-preview-shell.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PlaygroundA11yPreviewShellComponent {
  private readonly route = inject(ActivatedRoute);
  private readonly parentInjector = inject(Injector);

  readonly componentType = signal<Type<unknown> | null>(null);
  readonly error = signal<string | null>(null);

  readonly childInjector = Injector.create({
    parent: this.parentInjector,
    providers: [{ provide: PLAYGROUND_A11Y_PREVIEW_MODE, useValue: true }],
  });

  constructor() {
    const componentId = this.route.snapshot.paramMap.get('componentId') ?? '';
    const loader = PLAYGROUND_A11Y_PREVIEW_LOADERS[componentId];
    if (!loader) {
      this.error.set(`No a11y preview registered for “${componentId}”.`);
      return;
    }

    void loader()
      .then((type) => this.componentType.set(type))
      .catch(() => this.error.set(`Failed to load a11y preview for “${componentId}”.`));
  }
}
