import type { Button } from '@mui/material';
import { type Theme, type ThemeOptions } from '@mui/material/styles';
import type { StoryObj } from '@storybook/nextjs-vite';

export type GhostColor = 'ghostOnDark' | 'ghostOnLight';

export type ComponentTheme = Theme;

export type ButtonConfig = NonNullable<ThemeOptions['components']>['MuiButton'];

export type ButtonVariants = NonNullable<NonNullable<ButtonConfig>['variants']>;

export type ButtonVariant = ButtonVariants[number];

export type Story = StoryObj<typeof Button>;

declare module '@mui/material/Button' {
  interface ButtonPropsVariantOverrides {
    rounded: true;
  }

  interface ButtonPropsColorOverrides {
    ghostOnDark: true;
    ghostOnLight: true;
  }
}
