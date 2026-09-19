'use client';

import { createTheme } from '@mui/material/styles';

import { cssVariables } from './palette/css-variables.config';
import { palette } from './palette/palette.config';

export const theme = createTheme({ cssVariables, palette });
