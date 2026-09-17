import type { AlertColor } from '@mui/material';
import type { ReactNode } from 'react';

export type StickyBannerProps = {
  open: boolean;
  icon?: ReactNode;
  action?: ReactNode;
  severity?: AlertColor;
  threshold?: number;
  slotProps: {
    default: { text: string };
    compact?: { text: string };
  };
};
