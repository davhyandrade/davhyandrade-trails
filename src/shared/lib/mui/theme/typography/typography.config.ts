import {
  createTheme,
  type TypographyVariantsOptions,
} from '@mui/material/styles';

import { fonts } from './fonts/fonts.constant';
import { fontSizes, fontWeights } from './scale/scale.constant';

/**
 * `createTheme` takes a plain object, so the theme being built isn't available
 * here — `breakpoints` and `pxToRem` come from a default theme instead, the
 * same way `shadows.config.ts` clones the default elevation array.
 *
 * `breakpoints.up('sm')` returns the media query string
 * `'@media (min-width:600px)'`, which `Typography` applies as a nested rule of
 * the variant. A breakpoint object (`{ xs, sm }`) is `sx` sugar and does not
 * work inside the theme.
 *
 * If `fontSize` or `htmlFontSize` are ever customized below, the same values
 * have to be passed to this `createTheme()` call, otherwise the px→rem
 * conversion silently diverges.
 */
const {
  breakpoints,
  typography: { pxToRem },
} = createTheme();

const heading = {
  fontFamily: fonts.display,
  fontWeight: fontWeights.bold,
} as const;

export const typography: TypographyVariantsOptions = {
  fontFamily: fonts.text,

  h1: {
    ...heading,
    fontSize: pxToRem(fontSizes[700]),
    lineHeight: 0.98,
    letterSpacing: '-.03em',
    [breakpoints.up('sm')]: { fontSize: pxToRem(fontSizes[800]) },
  },
  h2: {
    ...heading,
    fontSize: pxToRem(fontSizes[600]),
    lineHeight: 1.05,
    letterSpacing: '-.02em',
    [breakpoints.up('sm')]: { fontSize: pxToRem(fontSizes[650]) },
  },
  h3: {
    ...heading,
    fontSize: pxToRem(fontSizes[550]),
    lineHeight: 1.1,
    letterSpacing: '-.015em',
  },
  h4: {
    ...heading,
    fontSize: pxToRem(fontSizes[500]),
    lineHeight: 1.15,
    letterSpacing: '-.01em',
  },
  h5: { ...heading, fontSize: pxToRem(fontSizes[450]), lineHeight: 1.2 },
  h6: { ...heading, fontSize: pxToRem(fontSizes[400]), lineHeight: 1.25 },

  subtitle1: {
    fontSize: pxToRem(fontSizes[400]),
    fontWeight: fontWeights.regular,
    lineHeight: 1.55,
  },
  subtitle2: {
    fontSize: pxToRem(fontSizes[200]),
    fontWeight: fontWeights.bold,
    lineHeight: 1.5,
  },

  body1: {
    fontSize: pxToRem(fontSizes[300]),
    fontWeight: fontWeights.regular,
    lineHeight: 1.6,
  },
  body2: {
    fontSize: pxToRem(fontSizes[200]),
    fontWeight: fontWeights.regular,
    lineHeight: 1.5,
  },

  button: {
    fontSize: pxToRem(fontSizes[200]),
    fontWeight: fontWeights.bold,
    lineHeight: 1.75,
    textTransform: 'none',
  },
  caption: {
    fontSize: pxToRem(fontSizes[100]),
    fontWeight: fontWeights.regular,
    lineHeight: 1.66,
  },
  overline: {
    // `overline` isn't in MUI's default `variantMapping`, so it renders as an
    // inline `<span>` — without this the browser drops the vertical margins of
    // the eyebrows and the title collapses onto them.
    display: 'block',
    fontSize: pxToRem(fontSizes[100]),
    fontWeight: fontWeights.extraBold,
    lineHeight: 1.5,
    letterSpacing: '.16em',
    textTransform: 'uppercase',
  },
};
