# Documentação

Documentação compartilhada por desenvolvedores e agentes de IA.

| Assunto                                  | Conteúdo                                 |
| ---------------------------------------- | ---------------------------------------- |
| [Arquitetura](architecture.md)           | Stack, organização e persistência        |
| [Desenvolvimento](development.md)        | Instalação, comandos e ambiente          |
| [Componentes](components.md)             | Componentes, hooks, estilos e stories    |
| [Contribuição](contributing.md)          | Fluxo de tarefas, issues e pull requests |
| [Commits](commits.md)                    | Formato das mensagens                    |
| [Design system](design-system/README.md) | Princípios e módulos visuais             |

## Organização e manutenção

Nomes de arquivos e pastas devem ser em inglês. Use `kebab-case` para nomes
compostos e preserve nomes exigidos pelas ferramentas, como `README.md`,
`AGENTS.md` e `SKILL.md`. O conteúdo da documentação pode ser em português.
Preserve contratos públicos existentes ao reorganizar arquivos; sua alteração
deve fazer parte do escopo da tarefa.

Mantenha cada orientação em uma única fonte. Atualize o módulo correspondente
quando mudar comandos, estrutura ou convenções; registre novos assuntos neste
índice.

Instruções dirigidas exclusivamente à IA ficam em `ai/rules/`; procedimentos
específicos ficam em `ai/skills/`. A entrada é [AGENTS.md](../AGENTS.md), que
encaminha a leitura desses arquivos. A pasta `ai/skills/` não pressupõe
instalação automática de skills em uma ferramenta.
