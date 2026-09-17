import type { Theme } from '@mui/material/styles';
import { alpha } from '@mui/material/styles';
import type { SystemStyleObject } from '@mui/system';

export const shapeStyle = (theme: Theme) =>
  ({
    '&::after': {
      content: '""',
      position: 'absolute',
      zIndex: -1,
      pointerEvents: 'none',
      width: 260,
      height: 260,
      right: '12%',
      top: -180,
      borderRadius: '50%',
      border: 1,
      borderColor: alpha(theme.palette.secondary.main, 0.1),
      boxShadow: `0 0 0 24px ${alpha(theme.palette.secondary.main, 0.04)}, 0 0 0 48px ${alpha(theme.palette.secondary.main, 0.03)}`,
    },
  }) satisfies SystemStyleObject<Theme>;
