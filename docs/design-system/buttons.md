# Botões

Use o `Button` do MUI e configure sua aparência pelas props `variant`, `size`
e `color`. Os estilos são centralizados no tema para manter consistência
entre as telas.

Reserve `sx` para posicionamento no layout, como margens e alinhamento.
Tipografia, preenchimento, cantos e espaçamento interno devem seguir o tema,
sem ajustes individuais em cada uso.

## Variantes

- **`contained`**: ação preenchida, indicada para ações principais, como
  enviar um formulário.
- **`rounded`**: botão em formato de pílula, indicado para navegação e
  chamadas para ação.
- **`text`**: ação sem preenchimento, indicada para ações de menor destaque.
  É a variante padrão. Use [Link](links.md) para links inseridos em frases.

```tsx
<Button type="submit" variant="contained" size="large">
  Registrar trilha
</Button>

<Button href="/adicionar" variant="rounded" size="small">
  Adicionar a primeira
</Button>

<Button href="/adicionar" variant="text">
  Adicionar trilha
</Button>
```

## Grupos de botões

Em um grupo de ações, o botão primário deve ser preenchido (filled) e o
secundário deve ser transparente (ghost), deixando clara a hierarquia entre
as ações.

Os botões do grupo devem usar a mesma `variant`: todos `contained` ou todos
`rounded`. Para a ação primária, use uma cor de preenchimento; para a
secundária, use `ghostOnLight` ou `ghostOnDark`, conforme a superfície.
`filled` e `ghost` descrevem o estilo definido pela cor, não valores da prop
`variant`.

```tsx
<Stack direction="row" spacing={2}>
  <Button variant="contained" color="ghostOnLight" onClick={onCancel}>
    Voltar
  </Button>
  <Button variant="contained" color="primary" type="submit">
    Salvar
  </Button>
</Stack>
```

## Tamanhos e ícones

Use `small`, `medium` ou `large` para escolher o tamanho de botões
`contained` e `rounded`. A variante `text` mantém um tamanho único.
Não defina altura, padding ou tamanho de fonte no uso do componente.

Para ícones junto ao rótulo, use `startIcon` ou `endIcon`, seguindo a
orientação de [ícones](icons.md). O tema controla a distância entre
ícone e texto.

```tsx
<Button variant="contained" endIcon={<ArrowRight />}>
  Continuar
</Button>
```

## Cores e superfícies

Escolha a cor pela prop `color`, usando a palette do tema. Os estados de
hover, foco e desabilitado são definidos pelo design system.

Use `color="inherit"` quando o texto do botão precisar acompanhar a cor do
contexto. Nesse caso, a cor também pode ser definida por um token da palette
no `sx`:

```tsx
<Button href="/" color="inherit" sx={{ color: 'text.secondary' }}>
  Voltar para as trilhas
</Button>
```

Para botões transparentes, escolha a cor conforme a superfície:

- **`ghostOnDark`**: para fundos escuros;
- **`ghostOnLight`**: para fundos claros.

```tsx
<Button variant="rounded" color="ghostOnDark" href="/adicionar">
  Adicionar trilha
</Button>
```

Preserve o indicador de foco para navegação por teclado. Use a prop
`disabled` para indicar indisponibilidade, sem simular esse estado apenas
por cor ou opacidade.

Para botões com `href`, consulte [Links e navegação](links.md).

[Voltar ao índice do design system](README.md).
