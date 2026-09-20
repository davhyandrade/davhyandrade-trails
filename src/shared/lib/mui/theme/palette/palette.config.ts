import { alpha, type PaletteOptions } from '@mui/material/styles';

import { colors } from './colors/colors.constant';

export const palette: PaletteOptions = {
  mode: 'light',
  primary: {
    light: colors.green[250],
    main: colors.green[600],
    dark: colors.green[800],
    contrastText: colors.white[0],
    background: colors.green[650],
  },
  secondary: {
    light: colors.white[0],
    main: colors.green[50],
    dark: colors.green[700],
    contrastText: colors.green[700],
  },
  background: {
    default: colors.white[0],
    paper: colors.white[50],
    dark: colors.white[150],
    soft: colors.white[100],
    glowStart: alpha(colors.green[100], 0.16),
    glowEnd: alpha(colors.green[500], 0.08),
  },
  text: {
    primary: colors.green[700],
    secondary: colors.green[300],
  },
  divider: alpha(colors.green[700], 0.1),
};
