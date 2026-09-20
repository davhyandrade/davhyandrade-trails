# Padrão de commits

As mensagens seguem o formato `tipo(escopo): descrição`, sempre em uma
única linha, sem corpo.

- Para refatorações, use `refact`, não `refactor`.
- A descrição começa com um verbo em inglês na terceira pessoa do singular
  do presente, como `adds`, `updates`, `fixes` ou `standardizes`.
- O escopo é opcional; quando usado, identifica a área ou o componente
  alterado (`tipo: descrição`, sem escopo, também é válido).

## Tipos

- `feat`: adiciona funcionalidades.
- `fix`: corrige problemas.
- `refact`: refatora o código.
- `chore`: realiza manutenção, como atualização de dependências e configurações.
- `test`: adiciona ou atualiza testes.

## Exemplos

A descrição deve indicar a mudança concreta, evitando mensagens genéricas como
`updates dependencies` ou `fixes bugs`.

```text
feat(trails): adds trail registration
fix(navigation): corrects active link detection
refact(DS): standardizes icon sizes
chore(deps): upgrades MUI to v9
test(trails): adds required field validation tests
chore: updates gitignore
```
