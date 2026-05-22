import {
  AfterViewInit,
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  computed,
  forwardRef,
  input,
  output,
  signal,
  viewChild,
} from '@angular/core';
import { BRIGHTRAIL_FX_SHELL_HOST } from '../futuristic/brightrail-futuristic-host';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

export type BrightrailRichTextEditorToolbarItem = 'bold' | 'italic' | 'underline' | 'bulletList';

@Component({
  selector: 'brightrail-rich-text-editor',
  standalone: true,
  hostDirectives: [BRIGHTRAIL_FX_SHELL_HOST],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => BrightrailRichTextEditorComponent),
      multi: true,
    },
  ],
  template: `
    <div class="br-rte" [class.br-rte--disabled]="effectiveDisabled()">
      @if (label()) {
        <label class="br-rte__label" [attr.for]="editorId">{{ label() }}</label>
      }
      <div class="br-rte__toolbar" role="toolbar" [attr.aria-label]="'Formatting'">
        @for (item of toolbar(); track item) {
          <button
            type="button"
            class="br-rte__tool"
            [disabled]="effectiveDisabled()"
            (click)="runCommand(item)"
          >
            {{ toolbarLabel(item) }}
          </button>
        }
      </div>
      <div
        #editor
        class="br-rte__surface"
        [attr.id]="editorId"
        [attr.contenteditable]="!effectiveDisabled()"
        [attr.aria-label]="ariaLabel() || label() || 'Rich text editor'"
        [attr.data-placeholder]="placeholder()"
        role="textbox"
        [attr.aria-multiline]="'true'"
        (input)="onEditorInput()"
        (blur)="onTouched()"
      ></div>
    </div>
  `,
  styleUrl: './brightrail-rich-text-editor.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BrightrailRichTextEditorComponent implements ControlValueAccessor, AfterViewInit {
  private static nextId = 0;
  readonly editorId = `br-rte-${BrightrailRichTextEditorComponent.nextId++}`;

  readonly editorRef = viewChild.required<ElementRef<HTMLElement>>('editor');

  readonly label = input('');
  readonly ariaLabel = input('');
  readonly placeholder = input('Write something…');
  readonly disabled = input(false);
  readonly toolbar = input<readonly BrightrailRichTextEditorToolbarItem[]>([
    'bold',
    'italic',
    'underline',
    'bulletList',
  ]);
  readonly htmlChange = output<string>();

  private readonly cvaHtml = signal('');
  private isDisabled = false;
  private onChange: (value: string) => void = () => {};
  private onTouchedCb: () => void = () => {};

  readonly effectiveDisabled = computed(() => this.isDisabled || this.disabled());

  ngAfterViewInit(): void {
    const el = this.editorRef().nativeElement;
    if (this.cvaHtml()) {
      el.innerHTML = this.cvaHtml();
    }
  }

  toolbarLabel(item: BrightrailRichTextEditorToolbarItem): string {
    switch (item) {
      case 'bold':
        return 'B';
      case 'italic':
        return 'I';
      case 'underline':
        return 'U';
      case 'bulletList':
        return '•';
      default:
        return item;
    }
  }

  writeValue(value: string): void {
    this.cvaHtml.set(value ?? '');
    const el = this.editorRef()?.nativeElement;
    if (el && el.innerHTML !== this.cvaHtml()) {
      el.innerHTML = this.cvaHtml();
    }
  }

  registerOnChange(fn: (value: string) => void): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: () => void): void {
    this.onTouchedCb = fn;
  }

  onTouched(): void {
    this.onTouchedCb();
  }

  setDisabledState(isDisabled: boolean): void {
    this.isDisabled = isDisabled;
  }

  onEditorInput(): void {
    const html = this.editorRef().nativeElement.innerHTML;
    this.cvaHtml.set(html);
    this.onChange(html);
    this.htmlChange.emit(html);
  }

  runCommand(item: BrightrailRichTextEditorToolbarItem): void {
    if (this.effectiveDisabled()) {
      return;
    }
    const el = this.editorRef().nativeElement;
    el.focus();
    const cmd =
      item === 'bulletList' ? 'insertUnorderedList' : item === 'bold' ? 'bold' : item === 'italic' ? 'italic' : 'underline';
    document.execCommand(cmd, false);
    this.onEditorInput();
  }
}
