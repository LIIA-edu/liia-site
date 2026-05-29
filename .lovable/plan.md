## Setup de testes + cobertura dos parsers

### Setup (não existe ainda)
- Instalar devDeps: `vitest`, `@testing-library/jest-dom`, `jsdom` (já não precisamos de RTL aqui — só testes de utilitário puros, mas instalo junto para futuros component tests).
- Criar `vitest.config.ts` (env `jsdom`, alias `@`).
- Criar `src/test/setup.ts` (matchMedia mock).
- Adicionar `"types": ["vitest/globals"]` em `tsconfig.app.json`.
- Adicionar script `"test": "vitest run"` em `package.json`.

### Testes — `src/utils/__tests__/yamlContent.test.ts`
Cobre `parseYaml` e `parseYamlModules`:
- Parse YAML válido → objeto tipado.
- YAML malformado → retorna fallback (não lança).
- Vazio → fallback.
- **Datas YAML (`2024-12-15`) viram string `"2024-12-15"`** (regressão do bug atual).
- Datas aninhadas em objetos e arrays também convertidas.
- `parseYamlModules` agrega múltiplos arquivos e anexa `path`.
- Módulo com YAML inválido é descartado (não derruba a lista).

### Testes — `src/utils/__tests__/markdownUtils.test.ts`
Cobre `parseMarkdownModules`:
- Frontmatter + body → objeto com `content` e campos do frontmatter.
- Frontmatter com `date: 2024-12-15` → vira string (regressão).
- Arquivo sem frontmatter → ainda devolve `content` com fallbacks vazios.
- Arquivo malformado (frontmatter quebrado) → descartado com warning, não lança.

### Testes — `src/utils/__tests__/postUtils.test.ts` (opcional, light)
- Verifica que posts sem `title`/`date`/`slug` são filtrados (regressão da blindagem que já fizemos).
- Como `postUtils` usa `import.meta.glob` no top-level, vou testar apenas a função de filtragem extraindo-a para um helper exportado OU pulando esse arquivo se ficar invasivo. Decido durante implementação — preferência por **não** refatorar `postUtils` agora.

### Sem mudanças no workflow do GitHub Pages
Os testes rodam localmente / sob demanda. Não vou adicionar step ao `deploy.yml` para não arriscar quebrar o deploy enquanto a configuração de Pages ainda está fresca.

### Arquivos
- Criar: `vitest.config.ts`, `src/test/setup.ts`, `src/utils/__tests__/yamlContent.test.ts`, `src/utils/__tests__/markdownUtils.test.ts`.
- Modificar: `package.json` (devDeps + script `test`), `tsconfig.app.json` (types).
