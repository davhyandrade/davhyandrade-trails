'use client';

import CssBaseline from '@mui/material/CssBaseline';
import GlobalStyles from '@mui/material/GlobalStyles';
import { ThemeProvider } from '@mui/material/styles';
import { AppRouterCacheProvider } from '@mui/material-nextjs/v16-appRouter';
import type { ReactNode } from 'react';

import { theme } from '@/shared/lib/mui/theme/theme.config';

function MuiProvider({ children }: { children: ReactNode }) {
  return (
    <AppRouterCacheProvider>
      <ThemeProvider theme={theme}>
        <CssBaseline />

        <GlobalStyles
          styles={theme => ({
            ':root': {
              '--font-display': "Georgia, 'Times New Roman', serif",
            },

            body: {
              minHeight: '100dvh',
              fontFamily: 'Arial, Helvetica, sans-serif',
            },

            '::selection': {
              background: theme.palette.secondary.main,
              color: theme.palette.secondary.contrastText,
            },
          })}
        />

        {children}
      </ThemeProvider>
    </AppRouterCacheProvider>
  );
}

export default MuiProvider;
