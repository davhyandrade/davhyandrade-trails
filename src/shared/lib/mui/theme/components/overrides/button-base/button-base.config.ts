import Link from 'next/link';

import type { ButtonBaseConfig } from './button-base.types';

export const buttonBase: ButtonBaseConfig = {
  defaultProps: {
    LinkComponent: Link,
  },
};
