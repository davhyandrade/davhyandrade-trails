# Componentes

## Responsabilidade e composição

Um componente deve ter um propósito claro e uma interface coerente com esse
propósito. Prefira composição a opções que acumulem comportamentos sem relação
entre si. Mantenha detalhes internos encapsulados e exponha apenas o necessário
para o uso do componente.

Componentes específicos ficam próximos da funcionalidade a que pertencem.
Componentes compartilhados representam necessidades comuns e não devem depender
de detalhes de uma funcionalidade consumidora. Consulte os critérios de
[arquitetura](architecture.md) antes de mover ou generalizar código.

## Organização

Use nomes de arquivos e pastas em inglês, conforme a
[convenção do projeto](README.md#organização-e-manutenção).
Considere as convenções do contexto em que estiver trabalhando, sem transformar
um exemplo isolado em regra para todo o repositório.

Separe tipos, estilos, estado e utilitários quando isso tornar responsabilidades
mais claras. A quantidade de arquivos deve acompanhar a complexidade do
componente; não é necessário repetir uma estrutura fixa em todos os casos.

Mantenha regras do domínio e detalhes de acesso a dados fora da apresentação
quando essa separação permitir evolução independente. Recursos específicos do
ambiente de execução devem respeitar as fronteiras definidas pela aplicação.

## Consistência visual

O [design system](design-system/README.md) define os princípios e as regras
visuais compartilhadas. Consulte seus módulos aplicáveis antes de criar ou
alterar elementos visuais.

Reutilize componentes, variantes e tokens existentes. Decisões visuais comuns
pertencem ao tema; ajustes específicos devem permanecer próximos de seu uso.
Preserve semântica, acessibilidade e estados de interação ao compor a interface.

## Convenções técnicas

As configurações do projeto são a fonte para regras de tipagem, imports,
formatação e ferramentas de desenvolvimento. Consulte-as junto ao código
relevante antes de escolher uma implementação. Exemplos e demonstrações de
componentes devem comunicar seus usos e estados importantes, acompanhando a
organização adotada pelo projeto.
