import './globals.css';

import type { Metadata } from 'next';

import MuiProvider from '@/shared/lib/mui/theme/providers/mui.provider';

import NavigationBar from './_components/navigation-bar/navigation-bar.component';

export const metadata: Metadata = {
  title: 'Caminhos percorridos',
  description: 'Um registro pessoal das trilhas que já percorri.',
  icons: { icon: '/favicon.svg', shortcut: '/favicon.svg' },
};

function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pt-BR">
      <body>
        <MuiProvider>
          <NavigationBar />
          {children}
        </MuiProvider>
      </body>
    </html>
  );
}

export default RootLayout;
