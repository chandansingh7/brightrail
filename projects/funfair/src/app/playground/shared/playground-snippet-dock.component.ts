import { ChangeDetectionStrategy, Component, computed, input, signal } from '@angular/core';

import { copyTextToClipboard } from './copy-to-clipboard.util';

export type PlaygroundSnippetTab = 'html' | 'ts' | 'scss';

@Component({
  selector: 'app-playground-snippet-dock',
  standalone: true,
  templateUrl: './playground-snippet-dock.component.html',
  styleUrl: './playground-snippet-dock.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PlaygroundSnippetDockComponent {
  readonly headingId = input('playground-snippet-title');
  readonly htmlSnippet = input.required<string>();
  readonly tsSnippet = input('');
  readonly scssSnippet = input('');

  readonly activeTab = signal<PlaygroundSnippetTab>('html');

  readonly activeSnippet = computed(() => {
    const tab = this.activeTab();
    if (tab === 'ts') {
      return this.tsSnippet() || '// No TypeScript snippet for this configuration';
    }
    if (tab === 'scss') {
      return this.scssSnippet() || '/* Optional layout overrides */';
    }
    return this.htmlSnippet();
  });

  selectTab(tab: PlaygroundSnippetTab): void {
    this.activeTab.set(tab);
  }

  copySnippet(): void {
    void copyTextToClipboard(this.activeSnippet());
  }
}
