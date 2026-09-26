/**
 * Base palette colors, organized by hue and numbered from the lightest
 * shade (lowest number) to the darkest (highest number) — following the
 * same convention as MUI's own `grey` scale. The numbers only mark
 * relative order within each hue, not a real photometric scale.
 */
export const colors = {
  green: {
    50: '#D9F2C8',
    100: '#A2BF82',
    150: '#8FAE9A',
    200: '#92B86B',
    250: '#78927E',
    300: '#617067',
    350: '#52795A',
    400: '#326657',
    450: '#2F6844',
    500: '#2B603F',
    550: '#253F32',
    600: '#173E29',
    650: '#24372D',
    700: '#153823',
    800: '#112D1E',
  },
  orange: {
    500: '#C4A568',
  },
  white: {
    0: '#FFFFFF',
    50: '#FFFDF5',
    100: '#FAF8ED',
    150: '#F3F1E6',
  },
} as const;
