# Links e navegação

## Links no meio de textos

Dentro de frases ou entre trechos de texto, use o `Link` do MUI em vez de
`Button`, mesmo com `variant="text"`. O link deve acompanhar a tipografia
do texto ao redor.

O `Link` do MUI já usa `next/link` por padrão no projeto. Passe `href`, sem
informar `component` nem envolver o componente em outro link.

```tsx
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';

<Typography>
  Para continuar, leia os <Link href="/termos">termos de uso</Link>.
</Typography>;
```

## Botões que navegam

Quando a navegação precisar da apresentação de um botão, use `Button` com
`href`. A integração com `next/link` já está configurada no tema.

```tsx
<Button href="/adicionar" variant="text">
  Voltar para as trilhas
</Button>
```

Não envolva o botão em um link nem passe `component={Link}`. Para ações como
enviar um formulário ou abrir um diálogo, use o comportamento de botão,
com `type` ou `onClick`, conforme a ação.

[Voltar ao índice do design system](README.md).
