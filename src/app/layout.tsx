import './globals.css';

import { CssBaseline } from '@mui/material';
import type { Metadata, Viewport } from 'next';

import Navigation from './_components/navigation-bar/navigation-bar.component';
import PwaManager from './_components/pwa-manager/pwa-manager.component';

export const metadata: Metadata = {
  title: 'Caminhos percorridos',
  description: 'Um registro pessoal das trilhas que já percorri.',
  applicationName: 'Minhas Trilhas',
  appleWebApp: {
    capable: true,
    statusBarStyle: 'default',
    title: 'Minhas Trilhas',
  },
  icons: {
    icon: [
      { url: '/favicon.svg', type: 'image/svg+xml' },
      { url: '/icons/icon-192x192.png', sizes: '192x192' },
    ],
    shortcut: '/favicon.svg',
    apple: '/icons/apple-touch-icon.png',
  },
};

export const viewport: Viewport = {
  themeColor: '#173e29',
};

function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pt-BR">
      <body>
        <CssBaseline />
        <PwaManager />
        <Navigation />
        {children}
      </body>
    </html>
  );
}

export default RootLayout;
