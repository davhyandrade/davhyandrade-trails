'use client';

import { createTheme } from '@mui/material/styles';

import { cssVariables } from './palette/css-variables.config';
import { palette } from './palette/palette.config';
import { shadows } from './shadows/shadows.config';

export const theme = createTheme({ cssVariables, palette, shadows });
