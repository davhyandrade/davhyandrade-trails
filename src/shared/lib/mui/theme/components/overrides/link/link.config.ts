import NextLink from 'next/link';

import type { LinkConfig } from './link.types';

export const link: LinkConfig = {
  defaultProps: {
    component: NextLink,
  },
};
