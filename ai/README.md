# Instruções para IA

Esta pasta reúne as orientações dirigidas aos agentes de IA. A documentação
compartilhada com desenvolvedores fica em [docs/](../docs/README.md).

## Organização

- [rules/workflow.md](rules/workflow.md): regras de trabalho, leitura obrigatória
  antes de agir no repositório.
- [skills/prepare-pull-request/SKILL.md](skills/prepare-pull-request/SKILL.md):
  procedimento para preparar, criar ou atualizar uma pull request.

Mantenha regras de comportamento em `rules/` e procedimentos específicos em
`skills/`. Registre novos módulos neste índice com suas condições de uso.

## Encaminhamento por tarefa

Leia os documentos de todas as linhas aplicáveis antes da ação correspondente.
Uma tarefa pode exigir vários módulos. Não carregue assuntos sem relação com
ela. Ao ampliar o escopo, consulte as novas fontes antes de continuar.

| Quando                                                                    | Leitura obrigatória                                                                       |
| ------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------- |
| Criar ou mover arquivos; alterar rotas, persistência ou responsabilidades | [Arquitetura](../docs/architecture.md)                                                    |
| Instalar dependências, executar ou configurar o ambiente                  | [Desenvolvimento](../docs/development.md)                                                 |
| Criar ou alterar componentes, hooks ou stories                            | [Componentes](../docs/components.md)                                                      |
| Criar ou alterar qualquer elemento visual, inclusive existente            | [Índice do design system](../docs/design-system/README.md) e todos os módulos aplicáveis  |
| Definir ou alterar cores, fundos, bordas, sombras ou opacidades           | [Cores](../docs/design-system/colors.md), incluindo a aprovação explícita para novos tons |
| Criar ou atualizar documentação e convenções                              | [Índice da documentação](../docs/README.md) e o módulo afetado                            |
| Preparar uma issue ou contribuição                                        | [Contribuição](../docs/contributing.md) e o template correspondente                       |
| Criar um commit                                                           | [Commits](../docs/commits.md)                                                             |
| Preparar, criar ou atualizar uma pull request                             | [Skill prepare-pull-request](skills/prepare-pull-request/SKILL.md)                        |

Para mudanças visuais, leia os princípios gerais e os assuntos envolvidos,
como botões, links, ícones e cores, antes de escrever código. A leitura de um
módulo não substitui os outros aplicáveis.

A skill em `ai/skills/` é consultada por este encaminhamento. Sua localização
não pressupõe registro automático no catálogo da ferramenta utilizada.
