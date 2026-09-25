import '@mui/material/styles';

declare module '@mui/material/styles' {
  interface TypeBackground {
    dark: string;
    soft: string;
    glowStart: string;
    glowEnd: string;
  }

  interface SimplePaletteColorOptions {
    background?: string;
  }

  interface Palette {
    ghostOnDark: Pick<PaletteColor, 'main'>;
    ghostOnLight: Pick<PaletteColor, 'main'>;
  }

  interface PaletteOptions {
    ghostOnDark?: SimplePaletteColorOptions;
    ghostOnLight?: SimplePaletteColorOptions;
  }
}
