# Ajustes solicitados

## 1) Renomear laboratório para LABIIT

Atualizar o nome do laboratório em todos os pontos de configuração:

- **`src/content/site-config.yml`**
  - `siteName`: `LIIA` → `LABIIT`
  - `siteFullName`: substituir pela nova descrição: "Laboratório de Bioinformática, Inteligência Artificial e Inovação Tecnológica - Explorando biologia computacional através de pesquisa, inovação e ciência aberta."
- **`src/utils/siteConfig.ts`** — atualizar o `siteConfigFallback` com os mesmos valores (mantém consistência caso o YAML falhe ao parsear).
- **`src/components/Header.tsx`** — trocar o texto fixo `LIIA` no logo por `LABIIT`.

Observação: manter o copyright como está (apenas o nome muda); se preferir, também atualizo o copyright para "© 2024 LABIIT". Confirme se quiser.

Não vou renomear pastas, rotas, slugs internos, nomes de arquivos `.qmd` (ex: conteúdo do `LaboratoryVision`, posts que mencionam "LIIA"). Se quiser que eu faça uma varredura textual em conteúdos Markdown/YAML também, me avise.

## 2) Remover espaço entre `SectionLayout` e o navbar nas subpáginas

O espaço vem do `PageLayout` que aplica `pt-20` no `<main>` para compensar o header fixo, somado ao `py-20` padrão do primeiro `SectionLayout` (hero) de cada subpágina.

Abordagem: manter o `pt-20` do `PageLayout` (necessário para o header fixo não cobrir o conteúdo) e remover o padding-top do primeiro `SectionLayout` de cada subpágina.

- **`src/components/layout/SectionLayout.tsx`** — sem alteração estrutural.
- Em cada subpágina (`Publications.tsx`, `People.tsx`, `Collaborations.tsx`, `Resources.tsx`, `Blog.tsx`, `Post.tsx`, `TeamMember.tsx`, `ResearchProjects.tsx`, `ResearchProject.tsx`), trocar o `className` do primeiro `SectionLayout` (hero) de `"py-20"` (default) para `"pb-20 pt-0"` — assim o hero "cola" no navbar e mantém o espaçamento inferior.

Resultado: o hero de cada subpágina fica imediatamente abaixo do navbar fixo, sem gap visível.
