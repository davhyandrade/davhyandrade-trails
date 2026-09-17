'use client';

import { createTheme } from '@mui/material/styles';

import { components } from './components/components.config';
import { mixins } from './mixins/mixins.config';
import { palette } from './palette/palette.config';
import { shadows } from './shadows/shadows.config';
import { typography } from './typography/typography.config';

export const theme = createTheme({
  cssVariables: { disableCssColorScheme: true },
  components,
  palette,
  typography,
  shadows,
  spacing: 4,
  mixins,
});
