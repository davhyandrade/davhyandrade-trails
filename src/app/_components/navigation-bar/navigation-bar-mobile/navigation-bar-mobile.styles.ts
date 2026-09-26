import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';

export const MobileNavigationButton = styled(Button)(({ theme }) => ({
  minWidth: 142,
  minHeight: 48,
  padding: theme.spacing(0, 3),
  flexDirection: 'column',
  gap: theme.spacing(0.5),
  fontSize: theme.typography.pxToRem(12),
}));
