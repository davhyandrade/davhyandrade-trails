import './globals.css';

import { CssBaseline } from '@mui/material';
import type { Metadata } from 'next';

import Navigation from './_components/navigation-bar/navigation-bar.component';

export const metadata: Metadata = {
  title: 'Trilhas — caminhos percorridos',
  description: 'Um registro pessoal das trilhas que já percorri.',
  icons: { icon: '/favicon.svg', shortcut: '/favicon.svg' },
};

function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pt-BR">
      <body>
        <CssBaseline />
        <Navigation />
        {children}
      </body>
    </html>
  );
}

export default RootLayout;
