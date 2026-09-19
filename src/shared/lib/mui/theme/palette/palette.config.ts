import './palette.types';

import type { PaletteOptions } from '@mui/material/styles';

export const palette: PaletteOptions = {
  mode: 'light',
  primary: {
    light: '#78927E',
    main: '#173E29',
    dark: '#112D1E',
    contrastText: '#FFFFFF',
  },
  secondary: {
    light: '#FFFFFF',
    main: '#D9F2C8',
    dark: '#12351F',
    contrastText: '#12351F',
  },
  background: {
    default: '#FFFFFF',
    paper: '#FFFDF5',
    canvas: '#F3F1E6',
    input: '#FAF8ED',
    glowStart: 'rgba(162,191,130,.16)',
    glowEnd: 'rgba(43,96,63,.08)',
  },
  text: {
    primary: 'rgba(0,0,0,.87)',
    secondary: '#617067',
    heading: '#153823',
  },
  divider: 'rgba(18,53,31,.1)',
  navigation: {
    background: 'rgba(17,45,30,.96)',
    text: '#F6F4E8',
    muted: 'rgba(246,244,232,.72)',
    hover: 'rgba(255,255,255,.08)',
  },
  artwork: {
    forest: { start: '#143C29', middle: '#2F6844', end: '#92B86B' },
    earth: { start: '#253F32', middle: '#52795A', end: '#C4A568' },
    mist: { start: '#173C31', middle: '#326657', end: '#8FAE9A' },
  },
};
