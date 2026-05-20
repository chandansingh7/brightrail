import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GraphPlaygroundComponent } from './graph-playground.component';

describe('GraphPlaygroundComponent', () => {
  let fixture: ComponentFixture<GraphPlaygroundComponent>;
  let component: GraphPlaygroundComponent;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GraphPlaygroundComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(GraphPlaygroundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('uses the shared component settings header', () => {
    expect(fixture.nativeElement.querySelector('.bp-settings-head__title')?.textContent).toContain(
      'Component settings',
    );
  });

  it('generates html snippet with brightrail-graph', () => {
    expect(component.htmlSnippet()).toContain('brightrail-graph');
    expect(component.htmlSnippet()).toContain('[series]="chartSeries"');
  });

  it('generates ts snippet with live chartSeries assignment', () => {
    component.selectTab('ts');
    fixture.detectChanges();
    const ts = component.activeSnippet();
    expect(ts).toContain('readonly chartSeries: BrightrailGraphSeries[]');
    expect(ts).toContain("id: 'revenue'");
    expect(ts).toContain('Your app owns chart data');
  });

  it('shows data binding in the properties panel', () => {
    expect(component.dataBindingLabel()).toBe('[series]="chartSeries"');
    expect(component.dataBindingDetail()).toContain('Sales overview');
  });

  it('renders live preview chart', () => {
    expect(fixture.nativeElement.querySelector('brightrail-graph')).toBeTruthy();
  });
});
