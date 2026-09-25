# Design system

O design system define as regras visuais compartilhadas do projeto. Consulte
os princípios gerais e os módulos relevantes antes de criar ou alterar um
elemento visual.

## Princípios gerais

- Reutilize os componentes e estilos definidos no tema.
- Use as props dos componentes para expressar variante, tamanho e cor.
- Centralize decisões visuais compartilhadas no tema, evitando ajustes
  individuais que produzam diferenças entre telas.
- Preserve a hierarquia das ações, a legibilidade e os estados de interação,
  incluindo foco de teclado e desabilitado.

## Regras por assunto

| Módulo                        | Quando consultar                                                                                       |
| ----------------------------- | ------------------------------------------------------------------------------------------------------ |
| [Cores](colors.md)            | Ao definir cores, fundos, bordas, sombras ou opacidades. Inclui a regra de aprovação para novas cores. |
| [Ícones](icons.md)            | Ao incluir ou alterar ícones e seus tamanhos.                                                          |
| [Botões](buttons.md)          | Ao criar ou alterar ações, variantes, tamanhos ou grupos de botões.                                    |
| [Links e navegação](links.md) | Ao incluir links em textos ou botões que navegam entre páginas.                                        |

Uma tarefa pode exigir mais de um módulo. Por exemplo, um grupo de botões
com ícones que navegam deve seguir as regras de botões, ícones e links, além
das regras de cores caso haja mudanças de cor.

## Manutenção

Documente regras de uso e decisões de design. Evite duplicar a implementação
com nomes de funções auxiliares, detalhes internos ou valores que já são
controlados pelo tema. Ao adicionar um novo assunto, crie um módulo e
registre-o neste índice.
