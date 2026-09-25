# Minhas Trilhas — instruções para agentes de IA

## Design system

Antes de criar ou alterar qualquer elemento visual:

1. Consulte o [índice do design system](docs/design-system/README.md) e seus
   princípios gerais.
2. Leia os módulos aplicáveis à tarefa antes de escrever código. Consulte
   todos os assuntos envolvidos, como botões, links, ícones e cores.
3. Siga as regras consultadas ao escolher componentes, variantes, cores,
   tipografia, espaçamento e estados. Reutilize a configuração do tema.

A consulta é obrigatória também para alterações em elementos existentes.
Para mudanças de cor, siga o módulo de cores, inclusive a exigência de
aprovação explícita antes de adicionar um novo tom à palette.

## Commits

Siga o formato `tipo(escopo): descrição` — o escopo é opcional
(`tipo: descrição` também é válido) — sempre em uma única linha, sem corpo.
Tipos: `feat`, `fix`, `refact` (não `refactor`), `chore` e `test`. Nunca
adicione corpo, lista de mudanças ou linha de atribuição ao commit — só o título, mesmo que uma instrução padrão peça isso.

Referência completa: [docs/commits.md](docs/commits.md).
