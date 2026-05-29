# Mapeamento de textos editáveis via Pages CMS

Inventário completo dos textos do site agrupados por situação atual e prioridade para inclusão no `.pages.yml`.

## Estado atual

**Já em arquivos Markdown/Quarto (prontos para CMS):**
- `src/posts/*.qmd` — 3 posts do blog (collection `posts` ✅ bem configurada)
- `src/profiles/*.qmd` — 4 perfis de equipe (collection existe, mas só expõe 3 de ~12 campos)
- `src/projects/*.qmd` — projetos de pesquisa (collection existe, mas só expõe 3 de ~12 campos)
- `src/content/*.qmd` — about, collaborations, laboratory-vision, publications, research-group, resources (collection `pages` genérica — frontmatter rico não está exposto)

**Hardcoded no código (precisam virar arquivos editáveis):**
- `Hero.tsx` — título principal e tagline da home
- `Research.tsx` — 4 linhas de pesquisa (array JS)
- `Footer.tsx` — nome do laboratório, tagline, copyright, áreas de pesquisa
- `Contact.tsx` — dados de contato (duplicam/contradizem `about.qmd`)
- `BlogSection.tsx`, `Publications.tsx`, `LaboratoryVision.tsx` — subtítulos de seção
- `People.tsx`, `ResearchProjects.tsx` — textos introdutórios de página

## Recomendações ranqueadas

### Prioridade alta — corrigir collections já existentes

**1. `profiles`** — adicionar campos: `name`, `position`, `image`, `email`, `bio`, `researchInterests[]`, `education[]`, `awards[]`, `socialLinks.{linkedin,google_scholar,orcid}`, `body` rich-text.

**2. `projects`** — adicionar: `status` (select: ongoing/completed/planned), `startDate`, `endDate`, `funding`, `technologies[]`, `collaborators[]`, `team[]`, `image`, `featured`, `body`.

**3. Substituir collection genérica `pages` por singletons (`type: file`)** — um por arquivo, com frontmatter real:
- `about.qmd` → `position`, `department`, `institution`, `email`, `phone`, `office`, `body`
- `publications.qmd` → `totalPublications`, `hIndex`, `description`, `body`
- `laboratory-vision.qmd`, `collaborations.qmd`, `resources.qmd`, `research-group.qmd` → `title`, `description`, `lastUpdated`, `body`

### Prioridade média — novos arquivos para textos hardcoded

**4. Singleton `src/content/hero.yml`** — texto mais visível da home:
```
headline, subheadline, tagline
```

**5. Singleton `src/content/site-config.yml`** — strings globais:
```
siteName, siteFullName, footerTagline, copyright, footerResearchAreas[]
```

**6. Nova collection `src/research-lines/*.yml`** — uma linha de pesquisa por arquivo:
```
title, description, technologies[], order
```

### Prioridade baixa

**7. Singletons opcionais** para textos introdutórios de páginas (`people-page.yml`, `research-projects-page.yml`) — só se houver demanda de edição frequente.

**Fora de escopo (não editorial):** labels do menu, botões, mensagens de loading, rótulos de formulário.

## O que será entregue na implementação

1. `.pages.yml` reescrito com:
   - Esquemas completos para `profiles`, `projects`, `posts`
   - Singletons (`type: file`) para cada `.qmd` em `src/content/`
   - Singletons novos para `hero.yml` e `site-config.yml`
   - Collection nova `research-lines`
2. Criação dos arquivos novos com os textos atuais extraídos do código:
   - `src/content/hero.yml`
   - `src/content/site-config.yml`
   - `src/research-lines/*.yml` (4 arquivos)
3. Refatoração dos componentes `Hero.tsx`, `Footer.tsx`, `Research.tsx` (e opcionalmente `BlogSection.tsx`, `Publications.tsx`, `LaboratoryVision.tsx`) para lerem os textos desses arquivos via utilitários em `src/utils/` (seguindo o padrão de `postUtils.ts`/`profileUtils.ts`).
4. `Contact.tsx` passa a ler de `about.qmd` em vez de strings hardcoded conflitantes.

## Notas técnicas

- Manter `format: yaml-frontmatter` para `.qmd` (Quarto) e `format: yaml` para `.yml` puros.
- Para singletons, usar `type: file` em vez de `type: collection` no Pages CMS — habilita um formulário único e estável por arquivo.
- `media` permanece em `public/` como já configurado.
- Mudar `Research.tsx` de array hardcoded para leitura de glob via Vite (`import.meta.glob`) seguindo o padrão já usado em `postUtils.ts`.
- Importante: a sincronização Lovable → GitHub precisa estar ativa antes dessa implementação ter efeito no repositório (ver verificação anterior — sync atualmente parece interrompido).

## Sugestão de escopo para a primeira iteração

Se preferir entregar em etapas, recomendo nesta ordem:
1. **Etapa 1 (essencial):** corrigir `.pages.yml` para expor todos os campos de `profiles`, `projects` e singletons de `src/content/` — zero mudanças de código, apenas YAML.
2. **Etapa 2 (alto impacto):** criar `hero.yml` + `site-config.yml` e refatorar `Hero.tsx` + `Footer.tsx`.
3. **Etapa 3:** mover linhas de pesquisa para `src/research-lines/`.

Qual escopo prefere implementar?
