import { ChangeDetectionStrategy, Component, computed, input } from '@angular/core';

import {
  BrightrailNeuralGraphLink,
  BrightrailNeuralGraphNode,
} from './brightrail-neural-graph.types';
import { layoutNeuralGraphNodes, neuralGraphEdges } from './brightrail-neural-graph.utils';

@Component({
  selector: 'brightrail-neural-graph',
  standalone: true,
  template: `
    <figure class="br-neural-graph" [attr.aria-label]="ariaLabel() || 'Neural network graph'">
      <svg
        class="br-neural-graph__svg"
        [attr.viewBox]="'0 0 ' + width() + ' ' + height()"
        role="img"
        [attr.aria-hidden]="ariaLabel() ? null : true"
      >
        <polyline class="br-neural-graph__edges" [attr.points]="edgePoints()" fill="none" />
        @for (node of layout(); track node.id) {
          <g class="br-neural-graph__node" [attr.transform]="'translate(' + node.x + ' ' + node.y + ')'">
            <circle class="br-neural-graph__node-ring" r="14" />
            <text class="br-neural-graph__node-label" text-anchor="middle" dy="4">{{ node.label }}</text>
          </g>
        }
      </svg>
      @if (caption()) {
        <figcaption class="br-neural-graph__caption">{{ caption() }}</figcaption>
      }
    </figure>
  `,
  styleUrl: './brightrail-neural-graph.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BrightrailNeuralGraphComponent {
  readonly ariaLabel = input('');
  readonly caption = input('');
  readonly width = input(320);
  readonly height = input(200);
  readonly nodes = input<readonly BrightrailNeuralGraphNode[]>([]);
  readonly links = input<readonly BrightrailNeuralGraphLink[]>([]);

  readonly layout = computed(() => layoutNeuralGraphNodes(this.nodes(), this.width(), this.height()));
  readonly edgePoints = computed(() => neuralGraphEdges(this.layout(), this.links()));
}
