# Refatorar todas as listas "que crescem" em collections do Pages CMS

Auditoria do site e plano para que **cada item adicionado/removido no Pages CMS reflita automaticamente** na página correspondente.

## Estado atual

| Seção | Origem | Status |
|---|---|---|
| Blog Posts | `src/posts/*.qmd` | ✅ collection real |
| Team Profiles (People) | `src/profiles/*.qmd` | ✅ collection real |
| Research Projects | `src/projects/*.qmd` | ✅ collection real |
| Research Lines | `src/research-lines/*.yml` | ✅ collection real |
| Collaborations | `src/collaborations/*.yml` | ✅ collection real |
| **Publications** | bloco grande em `publications.qmd`, parseado por regex | ❌ collection fake |
| **Open Source Software** | duplicado: `publications.qmd` + `resources.qmd` + array JS em `pages/Resources.tsx` | ❌ não editável |
| **Datasets** | seção `## Datasets` em `resources.qmd` + array JS hardcoded em `pages/Resources.tsx` | ❌ não editável |
| **Documentation & Protocols** | seção em `resources.qmd` + array JS em `pages/Resources.tsx` | ❌ não editável |
| **Web Applications** | seção em `resources.qmd` + array JS em `pages/Resources.tsx` | ❌ não editável |
| **Preprints** | seção em `publications.qmd` | ❌ não editável (mas pode virar tipo dentro de publications) |

## Recomendações ranqueadas (alta → baixa prioridade)

### Alta — itens "que crescem" claramente

1. **`publications` collection** (`src/publications/*.yml`, 1 arquivo por publicação). Substitui o parser regex em `PublicationsRenderer.tsx`. Inclui preprints como tipo. Filtros por ano e tipo já viram código.
2. **`software` collection** (`src/software/*.yml`, 1 por ferramenta). Fonte única para "Open Source Software" — homepage continua mostrando top 3, página Publications/Resources mostra tudo. Elimina duplicação entre `publications.qmd` e `resources.qmd`.
3. **`datasets` collection** (`src/datasets/*.yml`, 1 por dataset). Consumido por `pages/Resources.tsx`.
4. **`documentation` collection** (`src/documentation/*.yml`, 1 por documento). Consumido por `pages/Resources.tsx`.
5. **`web-apps` collection** (`src/web-apps/*.yml`, 1 por web app). Consumido por `pages/Resources.tsx`.

### Baixa — listas pequenas/estáveis, fica como rich-text

- Awards & Recognition, Editorial Activities, Metrics, Usage Statistics, Contributing, Support → continuam dentro dos singletons `publications.qmd` / `resources.qmd` como rich-text editável.

## Schema das novas collections

**`publications`** (`src/publications/*.yml`):
```yaml
title: string (required)
authors: string                 # texto livre: "Chen, S., Rodriguez, M., Patel, P."
year: number
type: select [journal-article, conference, book-chapter, review, preprint]
venue: string                   # "Nature Methods, 21(3), 234-245"
doi: string                     # opcional
url: string                     # opcional
preprintServer: select [bioRxiv, arXiv, medRxiv]   # só para preprints
order: number                   # opcional, default por ano desc
featured: boolean
```

**`software`** (`src/software/*.yml`):
```yaml
name: string (required)
description: text
category: string                # "AI Models", "Genomics", etc
language: string
license: string
github: string
documentation: string
downloads: string               # "50,000+"
githubStars: string
citations: string
lastUpdated: date
featured: boolean               # top 3 da homepage
order: number
```

**`datasets`** (`src/datasets/*.yml`):
```yaml
name: string (required)
description: text
size: string
samples: string
access: select [open, controlled]
downloads: string
citations: string
doi: string
url: string
order: number
```

**`documentation`** (`src/documentation/*.yml`):
```yaml
name: string (required)
description: text
type: select [tutorial, best-practices, protocol, workflow]
chapters: number
readTime: string
downloads: string
url: string
lastUpdated: date
order: number
```

**`web-apps`** (`src/web-apps/*.yml`):
```yaml
name: string (required)
description: text
type: string
url: string                     (required)
metric: string                  # "10,000+ registered users"
order: number
```

## Arquivos a criar

- **Conteúdo:** ~30 arquivos `.yml` (1 por publicação, 1 por software, 1 por dataset, 1 por doc, 1 por web-app — extraídos do conteúdo atual de `publications.qmd` e `resources.qmd`).
- **Utilitários:** `src/utils/publicationsUtils.ts`, `softwareUtils.ts`, `datasetsUtils.ts`, `documentationUtils.ts`, `webAppsUtils.ts`. Cada um expõe `getAll…()` ordenado, mais helpers como `getFeaturedSoftware()`.

## Arquivos a modificar

- **`PublicationsRenderer.tsx`** — remove todo o parser regex; recebe lista tipada das utils. Continua respeitando flag `limited` (homepage = top 5 publicações + top 3 software) — preserva a regra registrada em memória.
- **`pages/Publications.tsx`** — passa listas tipadas ao renderer (full).
- **`pages/Resources.tsx`** — remove os 4 arrays hardcoded e passa a ler das utils (`getAllSoftware()`, `getAllDatasets()`, etc).
- **`components/ResourcesTools.tsx`** (preview na home) — remove o parser regex e usa `getFeaturedSoftware()` / primeira de cada categoria.
- **`src/content/publications.qmd`** — enxuga: remove `# Recent Publications`, `## Software & Tools`, `## Preprints`. Mantém frontmatter (`totalPublications`, `hIndex`) + seções editoriais (Metrics, Awards, Editorial Activities).
- **`src/content/resources.qmd`** — enxuga: remove `## Software Tools`, `## Datasets`, `## Documentation & Protocols`, `## Web Applications`. Mantém intro, Usage Statistics, Contributing, Support.
- **`.pages.yml`** — adiciona 5 novas collections (`publications`, `software`, `datasets`, `documentation`, `web-apps`) com views ordenadas e filtráveis.

## Notas

- Mantém a regra de "Top 3 software na home, lista completa na subpage" via flag `featured` ou `slice(0, 3)`.
- Datas em `lastUpdated` permitem ordenar por mais recente.
- Continuamos dependendo da sincronização Lovable ↔ GitHub para que edições feitas no Pages CMS apareçam aqui — reconexão segue pendente do seu lado.
- Edição da página Publications principal (intro, metrics) continua via singleton `publications.qmd` já configurado.

## Tamanho

Será um diff grande: ~30 arquivos `.yml` novos, 5 utils novas, 4 componentes/páginas refatoradas, 2 `.qmd` enxutos, `.pages.yml` atualizado. Sem mudanças visuais — apenas troca de fonte de dados. Implemento tudo de uma vez.
