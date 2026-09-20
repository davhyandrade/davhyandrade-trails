export const trailCardStyles = {
  card: {
    overflow: 'hidden',
    borderRadius: 4,
    border: 1,
    borderColor: 'divider',
    bgcolor: 'background.paper',
    boxShadow: '0 16px 44px rgba(29,55,38,.08)',
    transition: '180ms ease',
    '&:hover': {
      transform: 'translateY(-4px)',
      boxShadow: '0 22px 56px rgba(29,55,38,.14)',
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
