# Contribuição

## Tarefas

Descreva objetivo e referências usando o
[template de issue](../.github/ISSUE_TEMPLATE/default.md).
Antes de alterar código, entenda os arquivos envolvidos e o estado do Git.
Preserve alterações existentes e mantenha o diff concentrado no objetivo.

Consulte [arquitetura](architecture.md), [componentes](components.md) e
[design system](design-system/README.md) conforme o assunto. Nomes de arquivos
e pastas seguem a [convenção em inglês](README.md#organização-e-manutenção).
Atualize a documentação quando a mudança alterar o uso ou a estrutura do projeto.

## Commits e pull requests

Siga [commits.md](commits.md) para mensagens de commit.
Revise os arquivos que serão incluídos e confirme a branch de destino antes de
comparar o conjunto completo de alterações da PR.

Use o [template de pull request](../.github/PULL_REQUEST_TEMPLATE.md):

- Descreva o problema e o comportamento resultante.
- Inclua capturas ou gravações quando houver impacto visual; indique quando a
  seção não se aplica ou quando a evidência ainda não foi produzida.
- Informe as verificações realizadas e seus resultados, incluindo falhas e
  verificações não realizadas, conforme o fluxo de
  [desenvolvimento](development.md).
- Relacione a issue quando conhecida e registre limitações relevantes.

A descrição deve representar o diff final. Revise-a quando o escopo mudar.
Nunca inclua segredos ou credenciais nos arquivos ou nas evidências da PR.

Para agentes de IA, o procedimento está na skill
[prepare-pull-request](../ai/skills/prepare-pull-request/SKILL.md), acessada a
partir de [AGENTS.md](../AGENTS.md).
