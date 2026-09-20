'use client';

import { createTheme } from '@mui/material/styles';

import { palette } from './palette/palette.config';

export const theme = createTheme({
  cssVariables: { disableCssColorScheme: true },
  palette,
});
