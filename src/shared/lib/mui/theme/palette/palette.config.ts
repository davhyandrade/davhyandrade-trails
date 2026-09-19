import './palette.types';

import { alpha, type PaletteOptions } from '@mui/material/styles';

import { colors } from './colors/colors.constant';

export const palette: PaletteOptions = {
  mode: 'light',
  primary: {
    light: colors.green[250],
    main: colors.green[650],
    dark: colors.green[850],
    contrastText: colors.gray[50],
  },
  secondary: {
    light: colors.gray[50],
    main: colors.green[50],
    dark: colors.green[800],
    contrastText: colors.green[800],
  },
  background: {
    default: colors.gray[50],
    paper: colors.gray[100],
    canvas: colors.gray[250],
    input: colors.gray[150],
    glowStart: alpha(colors.green[100], 0.16),
    glowEnd: alpha(colors.green[500], 0.08),
  },
  text: {
    primary: 'rgba(0,0,0,.87)', // inalterado, default do MUI
    secondary: colors.green[300],
    heading: colors.green[750],
  },
  divider: alpha(colors.green[800], 0.1),
  navigation: {
    background: alpha(colors.green[850], 0.96),
    text: colors.gray[200],
  },
  artwork: {
    forest: {
      start: colors.green[700],
      middle: colors.green[450],
      end: colors.green[200],
    },
    earth: {
      start: colors.green[550],
      middle: colors.green[350],
      end: colors.orange[500],
    },
    mist: {
      start: colors.green[600],
      middle: colors.green[400],
      end: colors.green[150],
    },
  },
};
