# Regras de trabalho

## Antes e durante a tarefa

- Identifique o resultado solicitado. Pedidos de planejamento produzem um
  plano; implemente quando a implementação fizer parte do pedido.
- Inspecione `git status --short` e os diffs relevantes antes de editar.
  Preserve alterações existentes, inclusive quando estiverem no mesmo arquivo.
  Não reverta nem inclua trabalho alheio em commits para limpar o estado do Git.
- Siga [o índice de instruções para IA](../README.md) para consultar as fontes aplicáveis. Leia os
  arquivos reais antes de presumir caminhos, comandos ou ferramentas.
  Use a documentação para orientar decisões e investigue a implementação
  relevante para entender o estado atual. Não transforme detalhes de um
  componente ou configuração em regras gerais do projeto.
- Mantenha as alterações dentro do escopo. Não aproveite a tarefa para
  reformatar o projeto, trocar dependências ou renomear arquivos sem necessidade.
- Não inclua segredos ou credenciais em código, documentação, commits ou
  mensagens. Não exponha valores de arquivos de ambiente ao relatar problemas.
- Siga autorizações já fornecidas pelo usuário. Peça informação apenas quando
  faltar uma decisão necessária; não trate a passagem do tempo como aprovação.

## Validação e entrega

- Escolha verificações pertinentes à mudança consultando os scripts e configurações
  vigentes, conforme o fluxo de [desenvolvimento](../../docs/development.md).
  Diferencie falhas anteriores de regressões quando houver evidência;
  não atribua uma falha ao estado anterior sem verificar.
- Revise o diff final, incluindo arquivos novos, para conferir escopo e
  alterações acidentais. Atualize a documentação afetada pela mudança.
- Informe o resultado, as validações realizadas e as limitações. Não apresente
  uma verificação não executada como aprovada.
- Antes de criar commits, consulte [commits.md](../../docs/commits.md).
  A mensagem deve conter somente o título, sem corpo ou linha de atribuição.
- Ao preparar uma PR, execute
  [prepare-pull-request](../skills/prepare-pull-request/SKILL.md). Preparar uma
  descrição não autoriza por si só publicar, fazer push ou merge.
