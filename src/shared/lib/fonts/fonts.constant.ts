import { Fraunces, Inter } from 'next/font/google';

/** Serifada variável usada nos títulos (`h1`–`h6`). */
const display = Fraunces({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-display',
});

/** Sans de interface usada em todo o resto do texto. */
const text = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-text',
});

/**
 * Expõe as duas variáveis CSS das fontes; aplicar no `<html>`. Nenhum `weight`
 * é declarado porque as duas famílias são variáveis: o eixo `wght` inteiro vem
 * junto, cobrindo o `bold` dos títulos e o `extraBold` dos eyebrows.
 */
export const fontsClassName = `${display.variable} ${text.variable}`;
