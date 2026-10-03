# Minhas Trilhas

Aplicação pessoal para registrar e visualizar trilhas realizadas.

## Desenvolvimento

Use Node.js 22.12.0 ou posterior. O mínimo é declarado em `package.json`
porque o Vitest 5.0.2 exige essa versão.

```bash
npm install
npm run dev
```

O JSON em `src/app/_data/trails.json` fornece os dados iniciais. Novas trilhas são persistidas no `localStorage` do navegador.

## Testes

```bash
yarn test --run
```

Para executar em modo watch, use `yarn test`. Ambientes de CI ou contêineres
que executarem esses comandos devem configurar Node.js 22.12.0 ou posterior.
A configuração inicial ainda não inclui casos de teste.

## Documentação

- [Design system](docs/design-system/README.md)
- [Padrão de commits](docs/commits.md)
