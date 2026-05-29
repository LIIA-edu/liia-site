# Refatorar página Collaborations para usar a collection

## Contexto

A collection `collaborations` (`src/collaborations/*.yml`) já existe e o componente da home (`Collaborations.tsx`) já a consome via `getActiveCollaborations()`. Porém a **página `/collaborations`** ainda usa `CollaborationsRenderer` que parseia `src/content/collaborations.qmd` com regex — por isso entradas que existem só nos YAMLs (ou foram apagadas só dos YAMLs) ficam dessincronizadas.

Além disso o `.qmd` ainda contém duplicação de Active/Past Collaborations e Partnership Impact, que conflitam com a collection.

## Mudanças

### 1. `CollaborationsRenderer.tsx` — refatorar
- Remover todo o parser regex de Active/Past Collaborations.
- Importar `getActiveCollaborations()` e `getPastCollaborations()` de `collaborationsUtils`.
- Criar um `CollaborationCard` tipado que renderiza: `name`, `location`, `type`, `focus`, `duration`, `principalInvestigator` (com link mailto opcional), `website` (link), `description`, e lista `keyProjects[]`.
- Renderizar duas grids (Active / Past) a partir da collection.
- Manter "Partnership Impact" e "Partnership Opportunities" vindo de `collaborations.qmd` (rich-text estável).

### 2. `src/content/collaborations.qmd` — enxugar
Remover as seções `## Active Collaborations` e `## Past Collaborations` (todos os 6 blocos `###`). Manter: frontmatter, intro, `## Partnership Impact` (métricas editoriais) e `## Partnership Opportunities` (+ Contact).

### 3. `Collaborations.tsx` (home preview) — pequeno ajuste
Já usa a collection; só remover a importação não usada de `getCollaborationsContent` se ficar órfã (manter se ainda lê título/descrição).

### 4. `.pages.yml`
Já tem a collection `collaborations` — sem mudanças.

## Resultado

Adicionar/remover qualquer arquivo em `src/collaborations/*.yml` (via Pages CMS ou manualmente) passa a refletir **tanto na home quanto na página `/collaborations`**, sem regex e sem duplicação no `.qmd`.

## Arquivos

- Modificar: `src/components/renderers/CollaborationsRenderer.tsx`, `src/content/collaborations.qmd`
- Talvez modificar: `src/components/Collaborations.tsx` (limpeza de imports)
- Sem novos arquivos; collection e utils já existem.
