import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BrightrailBreadcrumbComponent } from './brightrail-breadcrumb.component';

describe('BrightrailBreadcrumbComponent', () => {
  let fixture: ComponentFixture<BrightrailBreadcrumbComponent>;
  let component: BrightrailBreadcrumbComponent;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BrightrailBreadcrumbComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(BrightrailBreadcrumbComponent);
    component = fixture.componentInstance;
    fixture.componentRef.setInput('items', [
      { label: 'Home', href: '/' },
      { label: 'Projects', href: '/projects' },
      { label: 'Design system', href: '/design' },
      { label: 'Component library', current: true },
    ]);
    fixture.detectChanges();
  });

  it('renders all breadcrumb items', () => {
    const nodes = fixture.nativeElement.querySelectorAll('.br-breadcrumb__item');
    expect(nodes.length).toBe(4);
  });

  it('supports collapse-middle truncation', () => {
    fixture.componentRef.setInput('items', [
      { label: 'Home', href: '/' },
      { label: 'Projects', href: '/projects' },
      { label: 'Design', href: '/design' },
      { label: 'System', href: '/system' },
      { label: 'Library', current: true },
    ]);
    fixture.componentRef.setInput('maxItems', 4);
    fixture.componentRef.setInput('truncation', 'collapse-middle');
    fixture.detectChanges();
    expect(fixture.nativeElement.textContent).toContain('…');
  });
});
