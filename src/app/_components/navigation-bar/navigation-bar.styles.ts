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
