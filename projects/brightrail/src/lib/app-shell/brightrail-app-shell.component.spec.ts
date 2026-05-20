import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BrightrailAppShellComponent } from './brightrail-app-shell.component';
import { BrightrailPageHeaderComponent } from './brightrail-page-header.component';
import { BrightrailSidebarComponent } from './brightrail-sidebar.component';
import { BrightrailTopBarComponent } from './brightrail-top-bar.component';

describe('BrightrailAppShellComponent', () => {
  let fixture: ComponentFixture<BrightrailAppShellComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        BrightrailAppShellComponent,
        BrightrailSidebarComponent,
        BrightrailTopBarComponent,
        BrightrailPageHeaderComponent,
      ],
    }).compileComponents();
    fixture = TestBed.createComponent(BrightrailAppShellComponent);
  });

  it('renders shell regions when slots are provided', () => {
    fixture.componentRef.setInput('showSidebar', true);
    fixture.componentRef.setInput('showTopBar', true);
    fixture.detectChanges();
    expect(fixture.nativeElement.querySelector('.br-app-shell')).not.toBeNull();
  });

  it('applies no-sidebar class when sidebar is hidden', () => {
    fixture.componentRef.setInput('showSidebar', false);
    fixture.detectChanges();
    const shell: HTMLElement = fixture.nativeElement.querySelector('.br-app-shell');
    expect(shell.classList.contains('br-app-shell--no-sidebar')).toBeTrue();
  });
});
