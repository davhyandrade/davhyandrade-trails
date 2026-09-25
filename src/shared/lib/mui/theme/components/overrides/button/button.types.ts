import { type Theme, type ThemeOptions } from '@mui/material/styles';

export type GhostColor = 'ghostOnDark' | 'ghostOnLight';

export type ComponentTheme = Theme;

export type ButtonConfig = NonNullable<ThemeOptions['components']>['MuiButton'];

export type ButtonVariants = NonNullable<NonNullable<ButtonConfig>['variants']>;

export type ButtonVariant = ButtonVariants[number];

declare module '@mui/material/Button' {
  interface ButtonPropsVariantOverrides {
    rounded: true;
  }

  interface ButtonPropsColorOverrides {
    ghostOnDark: true;
    ghostOnLight: true;
  }
}
