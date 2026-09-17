import './globals.css';

import type { Metadata, Viewport } from 'next';

import MuiProvider from '@/shared/lib/mui/theme/providers/mui.provider';

import NavigationBar from './_components/navigation-bar/navigation-bar.component';
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
        <MuiProvider>
          <PwaManager />
          <NavigationBar />
          {children}
        </MuiProvider>
      </body>
    </html>
  );
}

export default RootLayout;
