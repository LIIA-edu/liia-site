## Diagnóstico

Há **dois problemas independentes**, ambos precisam ser resolvidos:

### 1. Preview do Lovable está desatualizado
O arquivo `src/posts/2026-05-29-new-post.qmd` **não existe no sandbox** — só os 3 posts antigos estão lá. A conexão Lovable↔GitHub está ativa, mas o sandbox **não puxou** o commit que o Pages CMS criou no GitHub. Os posts são carregados via `import.meta.glob('/src/posts/*.qmd', { eager: true })` em `postUtils.ts`, ou seja, só aparecem se o arquivo estiver fisicamente no projeto do Lovable.

### 2. Build do GitHub Pages está falhando
O workflow `Deploy to GitHub Pages` saiu vermelho após o commit do CMS. Mesmo se o sandbox sincronizar, o site público (`/bio-bytes-blog/`) **não atualiza** enquanto o build falhar. Causa provável: frontmatter do novo `.qmd` faltando campos obrigatórios (`title`, `date`, `slug`) ou com formato inválido, fazendo `parseMarkdownModules` quebrar o build.

## Plano

### Passo A — Forçar sync Lovable ← GitHub
No topo do chat do Lovable, abrir o menu do GitHub e clicar em **"Pull latest changes"** (ou desconectar/reconectar o GitHub). Sem isso o preview nunca vai ver o post novo, independente do que façamos no código.

### Passo B — Investigar e corrigir o build vermelho
1. Abrir o run vermelho em **github.com/<seu-usuário>/bio-bytes-blog/actions** e copiar a mensagem de erro do step "Build" para mim.
2. Inspecionar o frontmatter de `src/posts/2026-05-29-new-post.qmd`. Deve ser exatamente:
   ```yaml
   ---
   title: "Título"
   date: 2026-05-29
   slug: "new-post"
   description: "..."
   tags: [tag1, tag2]
   readTime: "5 min"
   featured: false
   ---
   ```
   Campos obrigatórios pelo `.pages.yml` são `title`, `date` e `slug`. Se algum estiver faltando ou com aspas/indentação errada, o build quebra.
3. Aplicar a correção (geralmente: adicionar `slug` ou ajustar `date` para formato `YYYY-MM-DD`) e commitar.

### Passo C — Garantir resiliência futura
Tornar `postUtils.ts` tolerante a entradas malformadas: posts sem frontmatter mínimo são **descartados com warning** em vez de derrubar o build. Assim um post novo quebrado deixa de quebrar o site inteiro.

## O que preciso de você

1. Confirme que clicou em **Pull latest changes** para sincronizar o sandbox.
2. Cole aqui o erro exato do step "Build" do workflow vermelho (ou um print).
3. Se possível, cole o conteúdo completo de `2026-05-29-new-post.qmd` (ou só o frontmatter entre `---`).

Com isso eu corrijo o arquivo problemático e implemento o Passo C de uma vez.
