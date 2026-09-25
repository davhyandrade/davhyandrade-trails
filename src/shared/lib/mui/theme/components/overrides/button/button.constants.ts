export const variants = ['contained', 'rounded', 'text'] as const;

export const sizes = ['small', 'medium', 'large'] as const;

export const surfaces = [
  { bgcolor: 'primary.background', color: 'ghostOnDark' },
  { bgcolor: 'background.default', color: 'ghostOnLight' },
] as const;
