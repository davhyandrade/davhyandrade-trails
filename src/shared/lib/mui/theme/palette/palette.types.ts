import type {} from '@mui/material/styles';

interface NavigationPalette {
  background: string;
  text: string;
  muted: string;
  hover: string;
}

interface GradientColors {
  start: string;
  middle: string;
  end: string;
}

interface ArtworkPalette {
  forest: GradientColors;
  earth: GradientColors;
  mist: GradientColors;
}

declare module '@mui/material/styles' {
  interface TypeBackground {
    canvas: string;
    input: string;
    glowStart: string;
    glowEnd: string;
  }

  interface TypeText {
    heading: string;
  }

  interface Palette {
    navigation: NavigationPalette;
    artwork: ArtworkPalette;
  }

  interface PaletteOptions {
    navigation?: NavigationPalette;
    artwork?: ArtworkPalette;
  }
}
