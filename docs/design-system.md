# Design system

## Ícones

Os ícones devem ser importados diretamente de `lucide-react` e normalmente usar
**18px ou 20px**, definidos pela prop `size`.
Mantenha o mesmo tamanho entre ícones de um mesmo contexto.

```tsx
import { ArrowRight, MapPin } from 'lucide-react';

<ArrowRight size={18} />
<MapPin size={20} />
```

Outros tamanhos são permitidos quando o contexto exigir, como em ilustrações
decorativas. Trate esses casos como exceções ao padrão.

## Cores

A `palette` do tema MUI é o contrato de cores do projeto. Sua configuração fica
em `src/shared/lib/mui/theme/palette/palette.config.ts`, tipada como
`PaletteOptions`. O arquivo `theme.config.ts` apenas importa e conecta essa
configuração ao `createTheme`.

Use os campos da palette em vez de escrever cores diretamente nas páginas,
componentes ou CSS. Isso inclui cores de bordas, sombras e gradientes.

| Campo | Uso |
| --- | --- |
| `primary.main` / `primary.contrastText` | Ações principais e texto sobre elas |
| `secondary.main` / `secondary.contrastText` | Destaque claro, seleção e item ativo |
| `background.default` / `background.paper` | Fundo da aplicação e superfícies de cards/formulários |
| `background.canvas` / `background.input` | Fundo do documento e dos campos |
| `background.glowStart` / `background.glowEnd` | Cores dos gradientes de fundo |
| `text.primary` / `text.secondary` | Texto padrão e descrições |
| `text.heading` / `text.title` | Títulos de página e de cards |
| `text.eyebrow` / `text.label` / `text.metadata` / `text.back` | Sobretítulos, rótulos, metadados e ação de retorno |
| `divider` | Borda padrão das superfícies |
| `common.white` / `common.black` | Branco e preto do MUI |
| `action.*` / `error.*` | Estados de interação, desabilitado e erro do MUI |
| `info.*` | Azul já utilizado no foco dos campos e no hover dos botões de texto |
| `navigation.*` | Fundo, texto, texto atenuado e hover da navegação |
| `border.*` | Bordas do link, estado vazio e decoração dos cards |
| `shadow.*` | Cores das sombras de card, hover do card e formulário |
| `artwork.*` | Cores dos gradientes das ilustrações: `forest`, `earth` e `mist` |

As extensões são declaradas em `palette.types.ts`. Os tons existentes permanecem
distintos para preservar o visual; não substitua tons próximos entre si sem
tratar isso como uma mudança visual.

### Consumo em componentes MUI

Em propriedades de cor do `sx`, use o caminho da palette:

```tsx
<Box
  sx={{
    bgcolor: 'background.paper',
    color: 'text.secondary',
    border: '1px solid',
    borderColor: 'divider',
  }}
/>
```

Em código cliente que precisa do valor, use `theme.palette` por meio de
`useTheme()` ou dos callbacks de estilo do MUI. Não importe `palette.config.ts`
nas telas: o consumidor deve respeitar o tema fornecido pelo provider.

### CSS, sombras e gradientes

O tema habilita as variáveis CSS geradas pelo MUI. Elas permitem consumir a
mesma palette no CSS global e em valores compostos, inclusive em Server
Components, sem passar callbacks de tema pela fronteira servidor/cliente.

```css
html {
  background: var(--mui-palette-background-canvas);
}

::selection {
  background: var(--mui-palette-secondary-main);
  color: var(--mui-palette-secondary-contrastText);
}
```

```tsx
<Box sx={{ boxShadow: '0 16px 44px var(--mui-palette-shadow-card)' }} />
```

Essas variáveis são geradas a partir da palette; não mantenha uma segunda lista
de cores nem fallbacks com valores literais. Geometria dos gradientes e dimensões
das sombras continuam nos estilos: apenas suas cores pertencem à palette.

Para uma nova cor, priorize um campo nativo do MUI. Quando for necessária uma
extensão, declare seu papel em `palette.types.ts`, configure o valor em
`palette.config.ts` e documente seu uso aqui. `transparent` e `inherit` podem ser
usados para ausência de preenchimento e herança de cor.
