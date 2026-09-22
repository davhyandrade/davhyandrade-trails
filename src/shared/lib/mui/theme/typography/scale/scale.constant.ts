/**
 * Type scale, in pixels, numbered from the smallest step (lowest number) to
 * the largest (highest number) — following the same convention as
 * `colors.constant.ts`. The numbers only mark relative order, not a modular
 * ratio: the steps come from the design, not from a formula.
 *
 * `typography.config.ts` converts every step to `rem` with `pxToRem`, so the
 * scale follows the font size configured in the browser.
 */
export const fontSizes = {
  /** Eyebrows, badges and form helper text. */
  100: 12,
  /** Labels, secondary metadata and buttons. */
  200: 14,
  /** Body copy, leads and form inputs. */
  300: 16,
  /** `h6` and `subtitle1`. */
  400: 18,
  /** `h5`. */
  450: 20,
  /** `h4` — card titles and the navigation wordmark. */
  500: 24,
  /** `h3`. */
  550: 28,
  /** `h2` below the `sm` breakpoint. */
  600: 32,
  /** `h2` from `sm` up. */
  650: 40,
  /** `h1` below the `sm` breakpoint. */
  700: 42,
  /** `h1` from `sm` up. */
  800: 56,
} as const;

/** Font weights of the design system. */
export const fontWeights = {
  regular: 400,
  bold: 700,
  extraBold: 800,
} as const;
