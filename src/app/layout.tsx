import './globals.css';

import type { Metadata } from 'next';

import { fontsClassName } from '@/shared/lib/fonts/fonts.constant';
import MuiProvider from '@/shared/lib/mui/theme/providers/mui.provider';

import Navigation from './_components/navigation-bar/navigation-bar.component';

export const metadata: Metadata = {
  title: 'Caminhos percorridos',
  description: 'Um registro pessoal das trilhas que já percorri.',
  icons: { icon: '/favicon.svg', shortcut: '/favicon.svg' },
};

function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pt-BR" className={fontsClassName}>
      <body>
        <MuiProvider>
          <Navigation />
          {children}
        </MuiProvider>
      </body>
    </html>
  );
}

export default RootLayout;
