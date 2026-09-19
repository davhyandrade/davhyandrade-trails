/**
 * Cores base da palette, organizadas por matiz e numeradas do tom mais
 * claro (menor número) ao mais escuro (maior número) — mesmo espírito da
 * escala `grey` do próprio MUI. Os números marcam só a ordem relativa
 * dentro do matiz, não uma escala fotométrica.
 */
export const colors = {
  green: {
    50: '#D9F2C8', // secondary.main
    100: '#A2BF82', // base de background.glowStart
    150: '#8FAE9A', // artwork.mist.end
    200: '#92B86B', // artwork.forest.end
    250: '#78927E', // primary.light
    300: '#617067', // text.secondary
    350: '#52795A', // artwork.earth.middle
    400: '#326657', // artwork.mist.middle
    450: '#2F6844', // artwork.forest.middle
    500: '#2B603F', // base de background.glowEnd
    550: '#253F32', // artwork.earth.start
    600: '#173C31', // artwork.mist.start
    650: '#173E29', // primary.main
    700: '#143C29', // artwork.forest.start
    750: '#153823', // text.heading
    800: '#12351F', // secondary.dark, secondary.contrastText; base de divider
    850: '#112D1E', // primary.dark; base de navigation.background
  },
  orange: {
    500: '#C4A568', // artwork.earth.end
  },
  gray: {
    50: '#FFFFFF', // primary.contrastText, secondary.light, background.default
    100: '#FFFDF5', // background.paper
    150: '#FAF8ED', // background.input
    200: '#F6F4E8', // navigation.text
    250: '#F3F1E6', // background.canvas
  },
} as const;
