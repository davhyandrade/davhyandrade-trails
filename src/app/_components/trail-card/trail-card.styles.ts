export const trailCardStyles = {
  card: {
    overflow: 'hidden',
    borderRadius: 4,
    border: '1px solid',
    borderColor: 'divider',
    bgcolor: 'background.paper',
    boxShadow: '0 16px 44px var(--mui-palette-shadow-card)',
    transition: '180ms ease',
    '&:hover': {
      transform: 'translateY(-4px)',
      boxShadow: '0 22px 56px var(--mui-palette-shadow-cardHover)',
    },
  },
  art: {
    position: 'relative',
    height: 174,
    p: 2.5,
    display: 'flex',
    alignItems: 'flex-end',
    color: 'common.white',
  },
} as const;
