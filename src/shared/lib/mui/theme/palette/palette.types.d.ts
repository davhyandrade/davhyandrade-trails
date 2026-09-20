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
}
