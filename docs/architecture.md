# Arquitetura

Minhas Trilhas é uma aplicação para registrar e visualizar trilhas. A organização
do projeto deve permitir evoluir suas funcionalidades mantendo claras as
responsabilidades e as dependências entre elas.

## Responsabilidades

- **Aplicação:** compõe as funcionalidades e define navegação, pontos de entrada
  e integrações necessárias ao funcionamento do conjunto.
- **Funcionalidades:** concentram as regras e os comportamentos de cada domínio
  do produto, mantendo próximos os elementos que evoluem juntos.
- **Código compartilhado:** oferece componentes e recursos reutilizados por
  diferentes funcionalidades, sem depender de detalhes de uma tela específica.
- **Integrações:** isolam o acesso a dados e serviços para que detalhes de
  armazenamento ou comunicação não se espalhem pela interface.

Essas responsabilidades orientam a organização; não exigem uma pasta ou camada
para cada item. Antes de criar uma estrutura, considere os limites existentes e
a complexidade que a mudança realmente precisa resolver.

## Critérios de evolução

Mantenha código específico próximo de quem o utiliza. Extraia recursos
compartilhados quando houver uma responsabilidade comum clara; semelhança de
aparência ou uma possibilidade futura de reutilização não basta por si só.

Separe apresentação, regras do domínio e acesso a dados conforme necessário para
que cada parte possa mudar sem exigir alterações desnecessárias nas demais.
Respeite os limites entre ambientes de execução e concentre dependências de
plataforma onde elas possam ser identificadas e substituídas.

Preserve contratos e comportamentos públicos ao reorganizar a implementação.
Mudanças nesses contratos precisam fazer parte do objetivo da tarefa.

## Onde consultar a implementação

A estrutura do código mostra a distribuição atual das responsabilidades.
[package.json](../package.json) e as configurações do projeto descrevem as
tecnologias e os recursos disponíveis. Consulte essas fontes ao planejar uma
mudança, sem tratar a organização atual como um modelo obrigatório para toda
funcionalidade nova.
