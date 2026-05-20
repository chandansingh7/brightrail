import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FileUploadVariationCatalogComponent } from './file-upload-variation-catalog.component';

describe('FileUploadVariationCatalogComponent', () => {
  let fixture: ComponentFixture<FileUploadVariationCatalogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FileUploadVariationCatalogComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(FileUploadVariationCatalogComponent);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(fixture.componentInstance).toBeTruthy();
  });

  it('renders ten doc-mirror sections', () => {
    const headings = Array.from(
      fixture.nativeElement.querySelectorAll('.fuvc-block__h') as NodeListOf<HTMLElement>,
    ).map((el) => el.textContent?.trim());
    expect(headings.length).toBe(10);
    expect(headings).toContain('5. Single file upload');
    expect(headings).toContain('9. Enterprise patterns');
  });

  it('includes fileItems and enterprise grid tiles', () => {
    const labels = Array.from(
      fixture.nativeElement.querySelectorAll('.cvt__label') as NodeListOf<HTMLElement>,
    ).map((el) => el.textContent?.trim());
    expect(labels).toContain('Progress & status list');
    expect(labels).toContain('Document submission');
    expect(labels).toContain('Avatar upload mock');
  });
});
