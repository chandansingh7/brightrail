import type { PlaygroundThemeId } from '../playground-theme.service';

export interface PlaygroundA11yPreviewPayload {
  readonly componentId: string;
  readonly theme: PlaygroundThemeId;
  readonly state: unknown;
}
