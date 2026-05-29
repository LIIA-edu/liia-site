## Destravar workflow do GitHub Pages

1. `.github/workflows/deploy.yml` — `node-version: '18'` → `'20'` (Vitest 4 + jsdom 29 exigem Node ≥ 20).
2. Regenerar `package-lock.json` com `npm install --package-lock-only` para incluir vitest/jsdom/@testing-library/jest-dom e ressincronizar versões transitivas (rollup, postcss, magic-string, etc.).
3. Bônus: corrigir `getAllTags` em `src/utils/postUtils.ts` para tolerar posts sem `tags` (`post.tags?.forEach(...)`), eliminando o runtime error atual.

Sem mudanças de UI. Commite o resultado e o deploy volta verde.
