# Refatorar Collaborations em collection com arquivos `.yml` individuais

Tornar cada parceria um arquivo separado, igual ao que foi feito com `research-lines/`, para que o Pages CMS mostre cada uma como item editável/apagável.

## Arquivos a criar

**`src/collaborations/`** — 6 arquivos `.yml`, um por parceria existente em `collaborations.qmd`:

- `stanford-cancer-institute.yml` (active, order 1)
- `mit-csail.yml` (active, order 2)
- `genentech.yml` (active, order 3)
- `university-sao-paulo.yml` (active, order 4) — esta é a que você quer poder apagar pela UI
- `embl-ebi.yml` (past, order 1)
- `memorial-sloan-kettering.yml` (past, order 2)

Schema de cada arquivo:
```yaml
name: string
location: string
type: string
focus: string
duration: string
status: active | past
order: number
principalInvestigator: string   # opcional (past collabs não têm)
website: string                  # opcional
description: text
keyProjects: string[]            # opcional
```

**`src/utils/collaborationsUtils.ts`** — carrega via `import.meta.glob('/src/collaborations/*.yml')`, expõe `getActiveCollaborations()` e `getPastCollaborations()` ordenados por `order`.

## Arquivos a modificar

- **`src/components/renderers/CollaborationsRenderer.tsx`** — remove os regex que parseiam o Markdown e passa a receber as listas tipadas como props. Mantém o regex apenas para "Partnership Impact" e "Partnership Opportunities" (que continuam no `.qmd`).
- **`src/components/Collaborations.tsx`** e **`src/pages/Collaborations.tsx`** — passam `activeCollabs` / `pastCollabs` para o renderer.
- **`src/content/collaborations.qmd`** — remove as seções `## Active Collaborations` e `## Past Collaborations` (inclui USP automaticamente). Mantém intro, Partnership Impact, Partnership Opportunities e Contact.
- **`.pages.yml`** — adiciona nova collection `collaborations` com os campos acima, view ordenada por `status` + `order`, label "Collaborations".

## Notas

- Esta mudança torna o CMS funcional para gerenciar parcerias individualmente. Mas a edição que você fez pela interface só refletirá aqui depois que a sincronização Lovable ↔ GitHub for restabelecida — não esquece de reconectar.
- A USP é incluída entre os 6 arquivos para preservar o estado atual do site; assim que o sync voltar, você poderá apagá-la pela interface do Pages CMS e o arquivo `university-sao-paulo.yml` será removido.
- Alternativamente, se preferir, posso **já não criar** o arquivo da USP — assim a parceria some imediatamente do site agora. Me avise no chat se for esse o caso; senão, sigo criando os 6.
