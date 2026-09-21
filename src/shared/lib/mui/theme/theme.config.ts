'use client';

import { createTheme } from '@mui/material/styles';

import { palette } from './palette/palette.config';
import { shadows } from './shadows/shadows.config';

export const theme = createTheme({
  cssVariables: { disableCssColorScheme: true },
  palette,
  shadows,
  spacing: 4,
});
