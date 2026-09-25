import { buttonClasses, type ButtonProps } from '@mui/material/Button';

import {
  filledSizeStyles,
  ghostStyles,
  roundedStyles,
  secondaryFilledStyles,
} from './button.styles';
import type {
  ButtonVariant,
  ButtonVariants,
  ComponentTheme,
} from './button.types';
import { isFilledVariant } from './button.utils';

export const containedVariant: ButtonVariant = {
  props: { variant: 'contained' },
  style: { borderRadius: 10 },
};

export const roundedVariant: ButtonVariant = {
  props: { variant: 'rounded' },
  style: ({
    theme,
    ownerState,
  }: {
    theme: ComponentTheme;
    ownerState?: ButtonProps;
  }) => roundedStyles(theme, ownerState?.color ?? 'primary'),
};

export const ghostVariants: ButtonVariants = [
  {
    props: { color: 'ghostOnDark' },
    style: ({ theme }) => ghostStyles(theme, 'ghostOnDark'),
  },
  {
    props: { color: 'ghostOnLight' },
    style: ({ theme }) => ghostStyles(theme, 'ghostOnLight'),
  },
];

export const secondaryFilledVariant: ButtonVariant = {
  props: ({ color, variant }) =>
    color === 'secondary' && isFilledVariant(variant),
  style: ({ theme }) => secondaryFilledStyles(theme),
};

export const filledSizeVariants: ButtonVariants = [
  {
    props: ({ variant, size }) => isFilledVariant(variant) && size === 'small',
    style: ({ theme }) => filledSizeStyles.small(theme),
  },
  {
    props: ({ variant, size }) => isFilledVariant(variant) && size === 'medium',
    style: ({ theme }) => filledSizeStyles.medium(theme),
  },
  {
    props: ({ variant, size }) => isFilledVariant(variant) && size === 'large',
    style: ({ theme }) => filledSizeStyles.large(theme),
  },
];

export const textVariants: ButtonVariants = [
  {
    props: { variant: 'text' },
    style: ({ theme }) => ({
      minWidth: 0,
      borderRadius: 0,
      fontWeight: theme.typography.fontWeightRegular,
      paddingInline: theme.spacing(1),
      fontSize: theme.typography.pxToRem(14),
      paddingBlock: theme.spacing(2),
    }),
  },
  {
    props: { variant: 'text', color: 'primary' },
    style: ({ theme }) => ({
      fontWeight: theme.typography.fontWeightBold,
      borderBottom: 1,
      borderStyle: 'solid',
      borderBottomColor: theme.palette.primary.light,

      [`&.${buttonClasses.disabled}`]: {
        borderBottomColor: theme.palette.action.disabled,
      },
    }),
  },
];
