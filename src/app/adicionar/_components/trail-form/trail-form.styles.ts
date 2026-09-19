import { shadows } from '@/shared/lib/mui/theme/shadows/shadows.config';

export const trailFormStyles = {
  form: {
    p: { xs: 2.5, sm: 4 },
    borderRadius: 4,
    bgcolor: 'background.paper',
    border: '1px solid',
    borderColor: 'divider',
    boxShadow: shadows[3],
  },
} as const;
