import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FaclWelcomeComponent } from './facl-welcome.component';

describe('FaclWelcomeComponent', () => {
  let fixture: ComponentFixture<FaclWelcomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FaclWelcomeComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(FaclWelcomeComponent);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(fixture.componentInstance).toBeTruthy();
  });

  it('should render library label', () => {
    const el = fixture.nativeElement as HTMLElement;
    expect(el.textContent).toContain('Fun Angular Component Library');
  });
});
