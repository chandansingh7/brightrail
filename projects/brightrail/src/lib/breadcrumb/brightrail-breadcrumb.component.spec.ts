import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BrightrailBreadcrumbComponent } from './brightrail-breadcrumb.component';

describe('BrightrailBreadcrumbComponent', () => {
  let fixture: ComponentFixture<BrightrailBreadcrumbComponent>;
  let host: BrightrailBreadcrumbComponent;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BrightrailBreadcrumbComponent],
    }).compileComponents();
    fixture = TestBed.createComponent(BrightrailBreadcrumbComponent);
    host = fixture.componentInstance;
  });

  it('shows full trail when segment count stays below collapse threshold', () => {
    fixture.componentRef.setInput('items', [
      { label: 'Home', href: '/', icon: 'home' },
      { label: 'Projects', href: '/p' },
      { label: 'Here', current: true },
    ]);
    fixture.componentRef.setInput('truncation', 'collapse-middle');
    fixture.componentRef.setInput('maxItems', 4);
    fixture.detectChanges();
    expect(host.displayItems().map((i) => i.label)).toEqual(['Home', 'Projects', 'Here']);
  });

  it('shows full trail when threshold is raised above segment count', () => {
    fixture.componentRef.setInput('items', [
      { label: 'Home', href: '/', icon: 'home' },
      { label: 'Projects', href: '/projects' },
      { label: 'Design system', href: '/ds' },
      { label: 'Component library', current: true },
    ]);
    fixture.componentRef.setInput('truncation', 'collapse-middle');
    fixture.componentRef.setInput('maxItems', 5);
    fixture.detectChanges();
    expect(host.displayItems().map((i) => i.label)).toEqual([
      'Home',
      'Projects',
      'Design system',
      'Component library',
    ]);
  });

  it('collapse-middle at threshold with four crumbs matches design playground', () => {
    fixture.componentRef.setInput('items', [
      { label: 'Home', href: '/', icon: 'home' },
      { label: 'Projects', href: '/projects' },
      { label: 'Design system', href: '/design-system' },
      { label: 'Component library', current: true },
    ]);
    fixture.componentRef.setInput('truncation', 'collapse-middle');
    fixture.componentRef.setInput('maxItems', 4);
    fixture.detectChanges();
    expect(host.displayItems().map((i) => i.label)).toEqual([
      'Home',
      '…',
      'Design system',
      'Component library',
    ]);
    expect(host.displayItems()[1].__ellipsis).toBeTrue();
  });

  it('truncation none always returns full sequence', () => {
    const items = [
      { label: 'Home', href: '/' },
      { label: 'A', href: '/a' },
      { label: 'B', href: '/b' },
      { label: 'C', href: '/c' },
      { label: 'End', current: true },
    ];
    fixture.componentRef.setInput('items', items);
    fixture.componentRef.setInput('truncation', 'none');
    fixture.componentRef.setInput('maxItems', 4);
    fixture.detectChanges();
    expect(host.displayItems().length).toBe(5);
  });

  it('renders disabled crumbs with aria-disabled and disabled class', () => {
    fixture.componentRef.setInput('items', [
      { label: 'Home', href: '/', disabled: true },
      { label: 'Products', href: '/products', disabled: true },
      { label: 'Categories', href: '/categories' },
      { label: 'Laptops', current: true },
    ]);
    fixture.componentRef.setInput('truncation', 'none');
    fixture.componentRef.setInput('maxItems', 10);
    fixture.detectChanges();

    const disabledEls = fixture.nativeElement.querySelectorAll('.br-breadcrumb__disabled');
    expect(disabledEls.length).toBe(2);
    expect(disabledEls[0].getAttribute('aria-disabled')).toBe('true');
  });

  it('applies boxed shell class when boxed is enabled', () => {
    fixture.componentRef.setInput('boxed', true);
    fixture.detectChanges();
    const nav: HTMLElement | null = fixture.nativeElement.querySelector('.br-breadcrumb');
    expect(nav).not.toBeNull();
    expect(nav?.classList.contains('br-breadcrumb--boxed')).toBeTrue();
  });
});
