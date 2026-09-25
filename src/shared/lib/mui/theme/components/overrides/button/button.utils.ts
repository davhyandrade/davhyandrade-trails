import type { ButtonProps } from '@mui/material/Button';

export const isFilledVariant = (variant: ButtonProps['variant']) =>
  variant === 'contained' || variant === 'rounded';
