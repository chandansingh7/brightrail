export interface BrightrailNeuralGraphNode {
  readonly id: string;
  readonly label: string;
  readonly group?: string;
}

export interface BrightrailNeuralGraphLink {
  readonly source: string;
  readonly target: string;
}

export interface BrightrailNeuralGraphLayoutNode extends BrightrailNeuralGraphNode {
  readonly x: number;
  readonly y: number;
}
