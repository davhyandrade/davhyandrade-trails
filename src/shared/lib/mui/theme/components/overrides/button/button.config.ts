import { buttonClasses } from '@mui/material/Button';

import type { ButtonConfig } from './button.types';
import {
  containedVariant,
  filledSizeVariants,
  ghostVariants,
  roundedVariant,
  secondaryFilledVariant,
  textVariants,
} from './button.variants';

export const button: ButtonConfig = {
  defaultProps: {
    disableElevation: true,
    size: 'medium',
  },
  styleOverrides: {
    root: ({ theme }) => ({
      textTransform: 'none',
      fontWeight: 700,
      gap: theme.spacing(2),

      [`&.${buttonClasses.focusVisible}`]: {
        outlineStyle: 'solid',
        outlineWidth: 2,
        outlineOffset: 2,
        outlineColor: theme.palette.primary.main,
      },

      [`& .${buttonClasses.startIcon}, & .${buttonClasses.endIcon}`]: {
        margin: 0,
      },
    }),
  },
  variants: [
    containedVariant,
    roundedVariant,
    secondaryFilledVariant,
    ...ghostVariants,
    ...filledSizeVariants,
    ...textVariants,
  ],
};
