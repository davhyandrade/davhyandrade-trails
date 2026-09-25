# Cores

## Antes de definir uma cor

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

## Palette

A `palette` do tema MUI é o contrato de cores do projeto. Sua configuração
fica em `src/shared/lib/mui/theme/palette/palette.config.ts`. O arquivo
`theme.config.ts` importa essa configuração e monta o `createTheme`.

Nenhuma cor é escrita como hex/rgba solto na palette: todo valor vem de
`src/shared/lib/mui/theme/palette/colors/colors.constant.ts`, uma escala
numerada por matiz (`green`, `orange`, `white`) — o número só indica a ordem
do mais claro pro mais escuro dentro do matiz, não uma escala fotométrica
real, então uma diferença pequena de número não garante uma diferença
pequena de cor entre matizes diferentes. `palette.config.ts` monta os campos
padrão do MUI a partir dessas entradas, usando `alpha(colors.<matiz>[N],
opacidade)` quando o campo precisa de transparência.

Priorize sempre um campo nativo do contrato `PaletteOptions` do MUI antes de
criar uma extensão.

Tons que cumprem o mesmo papel visual devem usar o mesmo campo — não crie um
campo novo só porque um componente precisa de um tom um pouco mais claro,
escuro ou transparente; calcule essa variação no ponto de uso (veja
"Variações de opacidade" abaixo). A ressalva vale ao contrário: não funda
tons que representam papéis realmente diferentes só por estarem próximos na
mesma família de verde (ex.: os stops dos gradientes decorativos do
`trail-card`).

### Consumo em componentes MUI

Em propriedades de cor do `sx`, use o caminho da palette:

```tsx
<Box
  sx={{
    bgcolor: 'background.paper',
    color: 'text.secondary',
    border: 1,
    borderColor: 'divider',
  }}
/>
```

Quando uma cor é decorativa e usada em um único lugar (por exemplo, os
gradientes do `trail-card` ou o anel branco sobre eles), não crie um campo na
palette só pra isso: importe `colors` direto de `colors.constant.ts` — é um
módulo TypeScript comum, então funciona tanto em Server quanto em Client
Components, sem precisar de `useTheme()`:

```tsx
import { colors } from '@/shared/lib/mui/theme/palette/colors/colors.constant';

const gradient = `linear-gradient(145deg,${colors.green[600]},${colors.green[450]})`;
```

### Sombras

As sombras seguem o mesmo princípio: em vez de uma extensão de palette,
`src/shared/lib/mui/theme/shadows/shadows.config.ts` clona o array padrão de
elevações do MUI (`theme.shadows`, 25 entradas) e sobrescreve só os índices
que o projeto usa (`1`, `3`, `5`) com os tons de sombra do design.

```ts
import { shadows } from '@/shared/lib/mui/theme/shadows/shadows.config';

boxShadow: shadows[1],
```

### Variações de opacidade

Quando um componente precisa da mesma cor em outra opacidade (hover, sombra
mais forte, borda mais discreta), não crie um campo novo na palette: calcule
com `alpha()` do MUI (`import { alpha } from '@mui/material/styles'`) no
ponto de uso. `alpha()` é uma função pura — não precisa de `theme` nem de
`useTheme()` — então em qualquer módulo `.ts`/`.tsx` dá pra aplicar direto
sobre um valor de `colors`:

```tsx
import { alpha } from '@mui/material/styles';
import { colors } from '@/shared/lib/mui/theme/palette/colors/colors.constant';

bgcolor: alpha(colors.white[0], 0.08),
```

Já dentro de um Client Component, se o `sx` já está como callback (recebendo
`theme`), prefira ler o tom já resolvido da palette em vez de importar
`colors` de novo:

```tsx
sx={theme => ({
  borderColor: alpha(theme.palette.secondary.contrastText, 0.24),
})}
```

[Voltar ao índice do design system](README.md).
