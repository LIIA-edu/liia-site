## Plano: Configurar Pages CMS via `.pages.yml`

Criar um único arquivo `.pages.yml` na raiz do repositório, configurando o [Pages CMS](https://pagescms.org) para gerenciar todo o conteúdo em Markdown/Quarto (`.qmd`) do projeto.

### Estrutura proposta

**Media:**
- `media: public/uploads` — pasta onde imagens enviadas pelo CMS serão salvas (acessíveis via `/uploads/...` no site).

**Coleções (`content`):**

1. **Posts do Blog** — `src/posts/*.qmd`
   - Campos: `title` (string), `date` (date), `tags` (list de strings), `description` (text), `readTime` (string), `featured` (boolean), `slug` (string), `body` (rich-text).

2. **Páginas de conteúdo** — `src/content/*.qmd` (about, laboratory-vision, publications, research-group, collaborations, resources)
   - Campos: `title` (string), `body` (rich-text).

3. **Perfis da equipe** — `src/profiles/*.qmd`
   - Campos básicos: `title` (string), `role` (string), `body` (rich-text). (Ajustável conforme front-matter real.)

4. **Projetos de pesquisa** — `src/projects/*.qmd`
   - Campos básicos: `title` (string), `description` (text), `body` (rich-text).

### Detalhes técnicos

- Extensão dos arquivos: `qmd` (Quarto) — usar `extension: qmd` em cada coleção para que o Pages CMS reconheça.
- Formato: `yaml-frontmatter` (front-matter YAML + corpo Markdown).
- Cada coleção usa `type: collection` com `path` apontando para a pasta correta.
- Campo `body` configurado como `type: rich-text` para edição WYSIWYG no CMS.
- `view.fields` definidos para mostrar título e data na listagem dos posts.

### Arquivos a criar
- `.pages.yml` (raiz do projeto)

Nenhum código de aplicação será alterado.