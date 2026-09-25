import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';

export const NavigationButton = styled(Button)(({ theme }) => ({
  [theme.breakpoints.down('md')]: {
    minWidth: 142,
    minHeight: 48,
    padding: theme.spacing(0, 3),
    flexDirection: 'column',
    gap: theme.spacing(0.5),
    fontSize: theme.typography.pxToRem(12),
  },
}));

export const navigationStyles = {
  root: {
    position: { xs: 'fixed', md: 'sticky' },
    inset: { xs: 'auto 0 0', md: 'auto' },
    top: { md: 0 },
    zIndex: 20,
    backgroundColor: 'primary.background',
    backdropFilter: 'blur(14px)',
  },
  inner: {
    maxWidth: 1200,
    minHeight: { xs: 76, md: 82 },
    mx: 'auto',
    px: { xs: 4, md: 8 },
    display: 'flex',
    alignItems: 'center',
    justifyContent: { xs: 'space-around', md: 'space-between' },
  },
} as const;
