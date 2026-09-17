# Trilhas

Aplicação pessoal para registrar e visualizar trilhas realizadas.

## Desenvolvimento

```bash
npm install
npm run dev
```

O JSON em `src/app/_data/trails.json` fornece os dados iniciais. Novas trilhas são persistidas no `localStorage` do navegador.

## PWA

Em produção, a aplicação registra o service worker em `/sw.js` e pode ser
instalada em navegadores compatíveis. Para validar localmente, gere e sirva a
versão de produção:

```bash
npm run build
npm start
```

Abra `http://localhost:3000`, confirme o manifesto no painel Application do
navegador e teste instalação, modo offline e o fluxo de atualização. O service
worker não armazena requisições autenticadas, APIs ou respostas marcadas como
privadas.

Ao alterar o service worker ou preparar uma versão que precise renovar todo o
shell offline, incremente `CACHE_VERSION` em `public/sw.js`. A instalação da nova
versão aguarda a confirmação do usuário, remove os caches anteriores na ativação
e então recarrega a aplicação. Assets atualizados durante o uso também são
limitados no cache para não permanecerem indefinidamente.

## Documentação

- [Design system](docs/design-system.md)
- [Padrão de commits](docs/commits.md)
