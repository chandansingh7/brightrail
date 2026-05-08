import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';

import { SelectResourcesGuideComponent } from './select-resources-guide.component';

describe('SelectResourcesGuideComponent', () => {
  let fixture: ComponentFixture<SelectResourcesGuideComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SelectResourcesGuideComponent],
      providers: [provideRouter([])],
    }).compileComponents();

    fixture = TestBed.createComponent(SelectResourcesGuideComponent);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(fixture.componentInstance).toBeTruthy();
  });

  it('should document ngModelOptions and projection slots', () => {
    const el = fixture.nativeElement as HTMLElement;
    expect(el.querySelector('.ig-title')?.textContent).toContain('projection');
    expect(fixture.componentInstance.exampleNgModel).toContain('standalone');
    expect(fixture.componentInstance.exampleProjection).toContain('br-select-prefix');
    expect(fixture.componentInstance.exampleProjection).toContain('br-select-value-slot');
    expect(fixture.componentInstance.exampleProjection).toContain('br-select-panel');
  });
});
