# LIIA Laboratory Website

A modern, responsive website for the Laboratory of Research in Immunooncology and Artificial Intelligence (LIIA), built with React, TypeScript, and Tailwind CSS.

## Features

- **Team Profiles**: Detailed individual researcher profiles with publications and research interests
- **Research Projects**: Comprehensive project pages with descriptions, collaborators, and outcomes
- **Publications**: Formatted publication listings with DOI links and proper citations
- **Blog System**: File-based blog with markdown support
- **Responsive Design**: Mobile-first design with beautiful animations
- **SEO Optimized**: Proper meta tags, semantic HTML, and structured data

## Tech Stack

- **React 18** with TypeScript
- **Vite** for fast development and building
- **Tailwind CSS** for styling
- **React Router** for navigation
- **React Markdown** for content rendering
- **Gray Matter** for frontmatter parsing
- **Shadcn/ui** for UI components

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <your-repo-url>
cd liia-website
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open [http://localhost:5173](http://localhost:5173) in your browser.

## Content Management

### Team Profiles
Add new team members by creating markdown files in `src/profiles/`:

```markdown
---
id: "unique-id"
name: "Dr. Name"
position: "Position"
bio: "Brief biography"
# ... other metadata
---

Detailed content and publications here...
```

### Research Projects
Add new projects by creating markdown files in `src/projects/`:

```markdown
---
id: "project-id"
title: "Project Title"
description: "Brief description"
status: "ongoing"
# ... other metadata
---

# Detailed Project Description
Full project content here...
```

### Blog Posts
Add new blog posts by creating markdown files in `src/posts/`:

```markdown
---
title: "Post Title"
date: "2024-01-01"
slug: "post-slug"
# ... other metadata
---

Post content here...
```

## Deployment to GitHub Pages

### Option 1: Using Lovable's GitHub Integration (Recommended)

1. **Connect to GitHub via Lovable**:
   - In Lovable editor, click **GitHub → Connect to GitHub**
   - Authorize the Lovable GitHub App
   - Select your GitHub account/organization
   - Click **Create Repository** to generate a new repo

2. **Configure for GitHub Pages**:
   - Go to your repository on GitHub
   - Navigate to **Settings → Pages**
   - Under "Source", select **GitHub Actions**

3. **Add GitHub Actions Workflow**:
   Create `.github/workflows/deploy.yml`:

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: [ main ]
  pull_request:
    branches: [ main ]

permissions:
  contents: read
  pages: write
  id-token: write

concurrency:
  group: "pages"
  cancel-in-progress: false

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout
        uses: actions/checkout@v4
        
      - name: Setup Node.js
        uses: actions/setup-node@v4
        with:
          node-version: '18'
          cache: 'npm'
          
      - name: Install dependencies
        run: npm ci
        
      - name: Build
        run: npm run build
        
      - name: Setup Pages
        uses: actions/configure-pages@v4
        
      - name: Upload artifact
        uses: actions/upload-pages-artifact@v3
        with:
          path: './dist'

  deploy:
    environment:
      name: github-pages
      url: ${{ steps.deployment.outputs.page_url }}
    runs-on: ubuntu-latest
    needs: build
    steps:
      - name: Deploy to GitHub Pages
        id: deployment
        uses: actions/deploy-pages@v4
```

4. **Configure Vite for GitHub Pages**:
   Update `vite.config.ts`:

```typescript
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from "path"

export default defineConfig({
  plugins: [react()],
  base: '/your-repository-name/', // Replace with your repo name
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
})
```

5. **Update Router Configuration**:
   In `src/App.tsx`, update the BrowserRouter:

```typescript
<BrowserRouter basename="/your-repository-name">
  {/* Your routes */}
</BrowserRouter>
```

### Option 2: Manual GitHub Setup

1. **Create GitHub Repository**:
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/username/repository-name.git
   git push -u origin main
   ```

2. **Follow steps 2-5 from Option 1** to configure GitHub Pages.

### Important Notes

- **Repository Name**: If using `username.github.io` as repo name, set `base: '/'` in vite.config.ts
- **Custom Domain**: To use a custom domain, add a `CNAME` file in the `public/` directory
- **Environment Variables**: GitHub Pages only supports client-side apps, so no server-side env variables
- **Build Errors**: Check the Actions tab on GitHub for build logs if deployment fails

### Verification

1. After successful deployment, your site will be available at:
   - `https://username.github.io/repository-name/` (for regular repos)
   - `https://username.github.io/` (for username.github.io repos)

2. Check the **Actions** tab to monitor deployment status

3. Any future commits to the main branch will automatically trigger redeployment

## Alternative Deployment Options

### Using Lovable's Built-in Hosting

Simply open [Lovable](https://lovable.dev/projects/db9ee804-9bbc-4e3e-944a-de4800e810d2) and click on **Share → Publish** for instant deployment.

### Custom Domain with Lovable

To connect a custom domain to your Lovable project:
- Navigate to **Project > Settings > Domains** 
- Click **Connect Domain**
- Follow the setup instructions

Read more: [Setting up a custom domain](https://docs.lovable.dev/tips-tricks/custom-domain#step-by-step-guide)

## Development

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build locally
- `npm run lint` - Run ESLint

### Project Structure

```
src/
├── components/          # React components
├── pages/              # Page components
├── posts/              # Blog posts (markdown)
├── profiles/           # Team member profiles (markdown)
├── projects/           # Research projects (markdown)
├── content/            # Other content (markdown)
├── utils/              # Utility functions
├── hooks/              # Custom React hooks
└── lib/                # Library configurations
```

## Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature-name`
3. Make your changes
4. Commit: `git commit -m 'Add feature'`
5. Push: `git push origin feature-name`
6. Create a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Support

For questions or support, please contact the LIIA team or create an issue in the GitHub repository.