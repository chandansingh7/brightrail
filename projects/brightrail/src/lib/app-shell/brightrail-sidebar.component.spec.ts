import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BrightrailSidebarComponent } from './brightrail-sidebar.component';

describe('BrightrailSidebarComponent', () => {
  let fixture: ComponentFixture<BrightrailSidebarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BrightrailSidebarComponent],
    }).compileComponents();
    fixture = TestBed.createComponent(BrightrailSidebarComponent);
    fixture.detectChanges();
  });

  it('renders nav with list role container', () => {
    const nav: HTMLElement = fixture.nativeElement.querySelector('nav.br-sidebar');
    expect(nav).not.toBeNull();
    expect(nav.getAttribute('aria-label')).toBe('Sidebar');
  });
});
