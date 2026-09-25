import '@/app/globals.css';

import type { Decorator, Preview } from '@storybook/nextjs-vite';

import MuiProvider from '@/shared/lib/mui/theme/providers/mui.provider';

const withTheme: Decorator = Story => (
  <MuiProvider>
    <Story />
  </MuiProvider>
);

const preview: Preview = {
  decorators: [withTheme],
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};

export default preview;
