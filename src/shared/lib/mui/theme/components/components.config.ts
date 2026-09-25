import type { ThemeOptions } from '@mui/material/styles';

import { button } from './overrides/button/button.config';
import { buttonBase } from './overrides/button-base/button-base.config';
import { link } from './overrides/link/link.config';

export const components: ThemeOptions['components'] = {
  MuiButton: button,
  MuiButtonBase: buttonBase,
  MuiLink: link,
};
