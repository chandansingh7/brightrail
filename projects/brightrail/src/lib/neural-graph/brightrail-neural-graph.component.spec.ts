import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BrightrailNeuralGraphComponent } from './brightrail-neural-graph.component';

describe('BrightrailNeuralGraphComponent', () => {
  let fixture: ComponentFixture<BrightrailNeuralGraphComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({ imports: [BrightrailNeuralGraphComponent] }).compileComponents();
    fixture = TestBed.createComponent(BrightrailNeuralGraphComponent);
    fixture.componentRef.setInput('nodes', [
      { id: 'in', label: 'Input' },
      { id: 'out', label: 'Output' },
    ]);
    fixture.componentRef.setInput('links', [{ source: 'in', target: 'out' }]);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(fixture.componentInstance).toBeTruthy();
  });

  it('renders node labels in the SVG', () => {
    const el = fixture.nativeElement as HTMLElement;
    expect(el.textContent).toContain('Input');
    expect(el.textContent).toContain('Output');
  });
});
