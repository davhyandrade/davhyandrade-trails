# Desenvolvimento

## Preparação do ambiente

Consulte o [README](../README.md) para iniciar o projeto e
[package.json](../package.json) para identificar dependências e scripts
disponíveis. Confira também as configurações de ambiente e os lockfiles antes
de instalar ou atualizar dependências.

Use as versões e o gerenciador definidos pelo projeto. Preserve a consistência
entre dependências e lockfiles; alterações no ambiente ou na estratégia de
instalação devem ter um objetivo explícito na tarefa.

## Fluxo de trabalho

Identifique a funcionalidade e as responsabilidades envolvidas antes de editar.
Consulte a documentação pertinente e o código relacionado para entender os
contratos que a mudança deve preservar.

Execute os scripts existentes conforme o objetivo: desenvolvimento local,
análise estática, geração de builds ou outras verificações disponíveis. Consulte
suas definições em `package.json` em vez de presumir nomes ou disponibilidade.
As configurações das ferramentas determinam seu comportamento efetivo.

Use verificações proporcionais à mudança e registre o que foi executado, os
resultados e as limitações. Quando um recurso necessário não estiver disponível,
explicite a lacuna; a introdução de uma ferramenta deve fazer parte do escopo.

## Configuração e manutenção

Mantenha ajustes de ambiente e ferramentas em suas configurações próprias.
Evite reproduzir nesta documentação listas de opções, versões ou scripts que
já possuem uma fonte executável no repositório.

Documente decisões que afetem a forma de desenvolver ou operar o projeto.
Quando houver variáveis de ambiente, descreva finalidade e requisitos sem
incluir credenciais ou valores privados.
