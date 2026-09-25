import { buttonClasses, type ButtonProps } from '@mui/material/Button';
import { alpha, darken, type PaletteColor } from '@mui/material/styles';

import type { ComponentTheme, GhostColor } from './button.types';

export const roundedStyles = (
  theme: ComponentTheme,
  color: NonNullable<ButtonProps['color']>,
) => {
  const paletteColor: Partial<PaletteColor> =
    color === 'inherit' ? {} : theme.palette[color];

  return {
    borderRadius: 99,
    color: paletteColor.contrastText ?? 'inherit',
    backgroundColor: paletteColor.main,

    '@media (hover: hover)': {
      '&:hover': {
        backgroundColor: paletteColor.dark ?? paletteColor.main,
      },
    },

    [`&.${buttonClasses.disabled}`]: {
      color: theme.palette.action.disabled,
      backgroundColor: theme.palette.action.disabledBackground,
    },
  };
};

export const ghostStyles = (theme: ComponentTheme, color: GhostColor) => {
  const ink = theme.palette[color].main;

  return {
    backgroundColor: 'transparent',
    color: alpha(ink, 0.72),

    '@media (hover: hover)': {
      '&:hover': {
        color: ink,
        backgroundColor: alpha(ink, 0.08),
      },
    },

    [`&.${buttonClasses.focusVisible}`]: {
      outlineColor: ink,
    },

    [`&.${buttonClasses.disabled}`]: {
      backgroundColor: 'transparent',
      color: alpha(ink, theme.palette.action.disabledOpacity),
    },
  };
};

export const secondaryFilledStyles = (theme: ComponentTheme) => ({
  '@media (hover: hover)': {
    '&:hover': {
      backgroundColor: darken(theme.palette.secondary.main, 0.05),
      color: darken(theme.palette.secondary.contrastText, 0.2),
    },
  },
});

export const filledSizeStyles = {
  small: (theme: ComponentTheme) => ({
    padding: theme.spacing(2, 4),
    fontSize: theme.typography.pxToRem(14),
    fontWeight: theme.typography.fontWeightRegular,
  }),
  medium: (theme: ComponentTheme) => ({
    padding: theme.spacing(3.3, 4.5),
    fontSize: theme.typography.pxToRem(14),
  }),
  large: (theme: ComponentTheme) => ({
    padding: theme.spacing(3.5, 6),
    fontSize: theme.typography.pxToRem(16),
  }),
};
