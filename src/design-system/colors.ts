export const COLORS = [
  'primary',
  'secondary',
  'danger',
  'success',
  'warning',
  'info',
  'neutral',
] as const;

export type Color = (typeof COLORS)[number];
