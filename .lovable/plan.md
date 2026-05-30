## Problema

A página em `liia-site` carrega o `index.html`, mas os arquivos `/liia-site/assets/index-*.css` e `/liia-site/assets/index-*.js` retornam 404.

Causa: o GitHub Pages processa o site com Jekyll por padrão. Apesar da pasta `assets/` não começar com `_`, em muitos casos o Jekyll interfere na publicação dos arquivos gerados pelo Vite (especialmente quando há hashes ou estrutura inesperada). A solução padrão e recomendada para sites Vite/React no GitHub Pages é desativar o Jekyll com um arquivo `.nojekyll`.

Sem ele, o Pages pode ignorar/reescrever a pasta `assets`, gerando exatamente os 404 observados.

## Plano

1. Criar `public/.nojekyll` (arquivo vazio). O Vite copia tudo de `public/` para `dist/` durante o build, garantindo `dist/.nojekyll` no artefato publicado.
2. (Opcional, robustez extra) Adicionar passo no workflow `.github/workflows/deploy.yml` após o build para garantir o arquivo:
   ```
   - name: Disable Jekyll
     run: touch ./dist/.nojekyll
   ```
   Apenas um dos dois é necessário; vou fazer ambos para garantir.

## Validação

Após o merge na `main`, o workflow roda e publica. Recarregar a página com cache limpo — os arquivos `/liia-site/assets/index-*.css` e `index-*.js` devem retornar 200.

Se o problema persistir após o deploy, será necessário inspecionar o artefato gerado (verificar se `dist/assets/` está completo) — mas em 95% dos casos isso resolve.
