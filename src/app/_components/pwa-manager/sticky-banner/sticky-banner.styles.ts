import type { SxProps, Theme } from '@mui/material';

export const stickyBannerStyles = {
  root: {
    zIndex: theme => theme.zIndex.appBar,
    justifyContent: 'center',
    alignItems: 'center',
    px: 6,
    py: 2,
  },
} satisfies Record<string, SxProps<Theme>>;
