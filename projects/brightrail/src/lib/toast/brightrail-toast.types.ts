export type BrightrailToastVariant = 'info' | 'success' | 'warning' | 'danger';

export interface BrightrailToastConfig {
  variant?: BrightrailToastVariant;
  title?: string;
  message: string;
  dismissible?: boolean;
  durationMs?: number;
}

export interface BrightrailToastEntry extends Required<Pick<BrightrailToastConfig, 'message'>> {
  id: string;
  variant: BrightrailToastVariant;
  title: string;
  dismissible: boolean;
}
