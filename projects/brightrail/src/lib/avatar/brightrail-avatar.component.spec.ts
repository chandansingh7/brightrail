import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BrightrailAvatarComponent, brightrailAvatarInitialsFromName } from './brightrail-avatar.component';

describe('brightrailAvatarInitialsFromName', () => {
  it('derives two-letter initials from first and last name', () => {
    expect(brightrailAvatarInitialsFromName('Sophia Carter')).toBe('SC');
  });

  it('uses first two letters for a single token', () => {
    expect(brightrailAvatarInitialsFromName('Jamie')).toBe('JA');
  });

  it('returns placeholder for blank input', () => {
    expect(brightrailAvatarInitialsFromName('')).toBe('?');
  });
});

describe('BrightrailAvatarComponent', () => {
  let fixture: ComponentFixture<BrightrailAvatarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BrightrailAvatarComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(BrightrailAvatarComponent);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(fixture.componentInstance).toBeTruthy();
  });

  it('should render image kind', () => {
    fixture.componentRef.setInput('kind', 'image');
    fixture.componentRef.setInput('imageSrc', 'https://example.com/a.jpg');
    fixture.componentRef.setInput('imageAlt', 'Alex');
    fixture.detectChanges();
    const img = fixture.nativeElement.querySelector('img.br-avatar__media') as HTMLImageElement | null;
    expect(img?.getAttribute('src')).toBe('https://example.com/a.jpg');
  });

  it('should render initials kind', () => {
    fixture.componentRef.setInput('kind', 'initials');
    fixture.componentRef.setInput('name', 'Jordan Lee');
    fixture.detectChanges();
    const el = fixture.nativeElement.querySelector('.br-avatar__initials');
    expect(el?.textContent?.trim()).toBe('JL');
  });

  it('should add status dot when status is set', () => {
    fixture.componentRef.setInput('kind', 'initials');
    fixture.componentRef.setInput('initials', 'AB');
    fixture.componentRef.setInput('status', 'online');
    fixture.detectChanges();
    expect(fixture.nativeElement.querySelector('.br-avatar__status--online')).toBeTruthy();
  });

  it('should prefer enterprise badge over status', () => {
    fixture.componentRef.setInput('kind', 'initials');
    fixture.componentRef.setInput('initials', 'AB');
    fixture.componentRef.setInput('status', 'online');
    fixture.componentRef.setInput('enterpriseRole', 'assignee');
    fixture.detectChanges();
    expect(fixture.nativeElement.querySelector('.br-avatar__enterprise')).toBeTruthy();
    expect(fixture.nativeElement.querySelector('.br-avatar__status')).toBeFalsy();
  });

  it('should show profile meta when enabled', () => {
    fixture.componentRef.setInput('kind', 'image');
    fixture.componentRef.setInput('imageSrc', 'https://example.com/a.jpg');
    fixture.componentRef.setInput('label', 'Sam');
    fixture.componentRef.setInput('subtitle', 'Engineer');
    fixture.componentRef.setInput('showProfileMeta', true);
    fixture.detectChanges();
    expect(fixture.nativeElement.querySelector('.br-avatar-meta__label')?.textContent).toContain('Sam');
    expect(fixture.nativeElement.querySelector('.br-avatar-meta__subtitle')?.textContent).toContain('Engineer');
  });

  it('should treat size large as lg layout class', () => {
    fixture.componentRef.setInput('kind', 'initials');
    fixture.componentRef.setInput('initials', 'X');
    fixture.componentRef.setInput('size', 'large');
    fixture.detectChanges();
    const root = fixture.nativeElement.querySelector('.br-avatar-root') as HTMLElement | null;
    expect(root?.classList.contains('br-avatar--size-lg')).toBe(true);
  });

  it('should accept imageSrc and imageAlt bindings', () => {
    fixture.componentRef.setInput('kind', 'image');
    fixture.componentRef.setInput('imageSrc', 'https://example.com/x.png');
    fixture.componentRef.setInput('imageAlt', 'X');
    fixture.detectChanges();
    const img = fixture.nativeElement.querySelector('img') as HTMLImageElement | null;
    expect(img?.getAttribute('src')).toBe('https://example.com/x.png');
    expect(img?.alt).toBe('X');
  });
});
