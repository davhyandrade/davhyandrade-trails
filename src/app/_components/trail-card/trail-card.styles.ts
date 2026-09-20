export const trailCardStyles = {
  card: {
    overflow: 'hidden',
    borderRadius: 4,
    border: 1,
    borderColor: 'divider',
    bgcolor: 'background.paper',
    boxShadow: 1,
    transition: '180ms ease',
    '&:hover': {
      transform: 'translateY(-4px)',
      boxShadow: 5,
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
