---
name: prepare-pull-request
description: Prepara ou atualiza uma pull request do Minhas Trilhas, revisando o diff, selecionando validações e redigindo a descrição conforme o template do repositório. Use quando a tarefa envolver preparar, criar ou atualizar uma PR.
---

# Preparar uma pull request

## Fontes

Leia [contribuição](../../../docs/contributing.md),
[fluxo de desenvolvimento](../../../docs/development.md) e o
[template de PR](../../../.github/PULL_REQUEST_TEMPLATE.md).
Se for criar commits, leia também [commits](../../../docs/commits.md).
Consulte os módulos técnicos indicados em
[ai/README.md](../../README.md) conforme os arquivos alterados.

## Procedimento

1. Identifique a issue e o resultado solicitado, quando disponíveis. Inspecione
   o status, os diffs staged e unstaged e os arquivos novos. Para uma PR de
   branch, confirme a branch de destino no contexto ou no repositório e revise
   também o diff desde o ancestral comum; não presuma que o destino é `main`.
2. Separe o que pertence à tarefa de alterações preexistentes. Não faça stage
   de arquivos indiscriminadamente. Se o escopo da PR continuar ambíguo,
   esclareça-o antes de incluir alterações na publicação.
3. Consulte os scripts e configurações vigentes e execute as validações
   pertinentes ao diff. Reaproveite resultados da
   sessão apenas se corresponderem ao estado atual dos arquivos. Registre
   comando, resultado e limitações. A introdução de ferramentas adicionais
   deve fazer parte do escopo solicitado.
4. Prepare um título que descreva a mudança e uma descrição seguindo as seções
   do template. Explique problema e comportamento resultante, relacione a issue
   quando conhecida e preencha como foi testado com evidências reais.
   Inclua capturas para mudanças visuais quando disponíveis; declare quando a
   conferência visual não foi realizada. Para documentação, indique que a seção
   de capturas não se aplica. Não invente links, imagens ou resultados.
5. Revise se título e descrição representam o diff final. Informe pendências
   que afetem a revisão. Publique ou atualize a PR apenas quando isso fizer
   parte do pedido ou já estiver autorizado; preparar a PR não autoriza merge.

## Resultado

Entregue título e descrição prontos para uso, com resumo das validações e
pendências. Se a publicação estiver autorizada e for concluída, entregue o link
real da PR. Se falhar, preserve o texto preparado e relate o bloqueio sem
anunciar a PR como criada.
