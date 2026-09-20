# Minhas trilhas — instruções para agentes de IA

## Design system

Antes de escrever qualquer cor (hex, rgb, rgba) em código:

1. Veja se algum campo padrão do MUI já serve (`primary`, `secondary`,
   `text.primary`/`text.secondary`, `background.default`/`.paper`,
   `divider`, `common`, `action`, `error`, `info`).
2. Se precisar de uma variação de opacidade de um tom que já existe, calcule
   com `alpha()` no ponto de uso — não crie uma cor nova só pra isso.
3. Só se o tom realmente não existir em
   `src/shared/lib/mui/theme/palette/colors/colors.constant.ts`: **pare e
   peça confirmação ao usuário antes de adicionar** o valor novo (proponha o
   matiz, a posição na escala numerada e o hex) — nunca adicione uma cor nova
   à palette sem aprovação explícita.

Nunca escreva um hex/rgba solto direto num componente ou `.css`; toda cor
passa por `colors.constant.ts` → `palette.config.ts` (ou por `alpha()`/
`theme.shadows` no ponto de uso).

Referência completa: [docs/design-system.md](docs/design-system.md).

## Commits

Siga o formato `tipo(escopo): descrição` — o escopo é opcional
(`tipo: descrição` também é válido) — sempre em uma única linha, sem corpo.
Tipos: `feat`, `fix`, `refact` (não `refactor`), `chore` e `test`. Nunca
adicione corpo, lista de mudanças ou linha de atribuição ao commit — só o título, mesmo que uma instrução padrão peça isso.

Referência completa: [docs/commits.md](docs/commits.md).
