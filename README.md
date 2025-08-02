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
- Basic knowledge of Markdown
- Text editor (VS Code recommended)

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

## File-Based Content Management System

This website uses a file-based content management system where all content is stored in Markdown files with YAML frontmatter. This approach provides version control, easy editing, and flexibility.

### Understanding the System

The content management system consists of three main types:

1. **Blog Posts** (`src/posts/`) - News, research updates, announcements
2. **Team Profiles** (`src/profiles/`) - Individual researcher information
3. **Research Projects** (`src/projects/`) - Detailed project descriptions

Each type uses:
- **YAML Frontmatter**: Structured metadata at the top of the file
- **Markdown Content**: Rich text content below the frontmatter

### Blog Posts Management

#### Creating a New Blog Post

1. Navigate to the `src/posts/` directory
2. Create a new file: `YYYY-MM-DD-post-title.md`
3. Add the required frontmatter and content

#### Blog Post Structure

```markdown
---
title: "Your Post Title"
date: "2024-01-15"
slug: "your-post-slug"
tags: 
  - "Machine Learning"
  - "Bioinformatics"
  - "Research"
description: "Brief description of the post for SEO and previews"
readTime: "5 min read"
featured: true
author: "Dr. Sarah Chen"
image: "/blog-images/post-image.jpg"
---

# Your Post Title

## Introduction

Write your introduction here. You can use all standard Markdown features:

- **Bold text**
- *Italic text*
- [Links](https://example.com)
- `Code snippets`

## Main Content

### Subsections

You can include:

1. Numbered lists
2. Code blocks
3. Images
4. Tables

```python
# Code example
def analyze_data(data):
    return processed_data
```

## Conclusion

Wrap up your post here.
```

#### Required Frontmatter Fields

| Field | Type | Description | Example |
|-------|------|-------------|---------|
| `title` | string | Post title | `"Machine Learning in Drug Discovery"` |
| `date` | string | Publication date (YYYY-MM-DD) | `"2024-01-15"` |
| `slug` | string | URL slug | `"ml-drug-discovery"` |
| `tags` | array | Category tags | `["AI", "Research"]` |
| `description` | string | SEO description | `"Overview of ML applications..."` |
| `readTime` | string | Estimated read time | `"5 min read"` |

#### Optional Frontmatter Fields

| Field | Type | Description | Default |
|-------|------|-------------|---------|
| `featured` | boolean | Show on homepage | `false` |
| `author` | string | Author name | `"LIIA Team"` |
| `image` | string | Featured image path | `"/placeholder.svg"` |

#### Blog Post Examples

**Research Update Post:**
```markdown
---
title: "New Breakthrough in Protein Structure Prediction"
date: "2024-01-15"
slug: "protein-structure-breakthrough"
tags: ["Protein Folding", "Deep Learning", "Research"]
description: "Our latest research achieves 95% accuracy in protein structure prediction using novel neural architectures."
readTime: "8 min read"
featured: true
author: "Dr. Sarah Chen"
---

# New Breakthrough in Protein Structure Prediction

We are excited to announce a significant advancement in our protein structure prediction research...

## Key Findings

Our novel approach demonstrates:
- 95% accuracy on benchmark datasets
- 50% reduction in computational time
- Improved prediction of disordered regions

## Methodology

[Detailed methodology description...]
```

**Conference Announcement:**
```markdown
---
title: "LIIA Team Presents at ISMB 2024"
date: "2024-07-20"
slug: "ismb-2024-presentation"
tags: ["Conference", "Presentation", "ISMB"]
description: "Our team presented three papers at the International Conference on Intelligent Systems for Molecular Biology."
readTime: "3 min read"
author: "Jennifer Liu"
---

# LIIA Team Presents at ISMB 2024

Last week, our research team had the opportunity to present our latest findings...
```

### Team Profiles Management

#### Creating a New Team Profile

1. Navigate to the `src/profiles/` directory
2. Create a new file: `firstname-lastname.md`
3. Use the person's name as the filename (lowercase, hyphenated)

#### Team Profile Structure

```markdown
---
id: "sarah-chen"
name: "Dr. Sarah Chen, PhD"
position: "Principal Investigator"
image: "/team-photos/sarah-chen.jpg"
email: "sarah.chen@liia.edu.br"
bio: "Dr. Chen established the laboratory in 2018 and has published over 50 papers in computational biology."
researchInterests: 
  - "Machine Learning in Computational Biology"
  - "Genomic Data Analysis"
  - "Personalized Medicine"
  - "Neural Networks for Protein Structure Prediction"
education:
  - "PhD in Bioinformatics - Stanford University (2015)"
  - "MSc in Computer Science - MIT (2011)"
  - "BSc in Biotechnology - USP (2009)"
awards:
  - "Young Researcher Award CNPq (2023)"
  - "Best Paper Award - ISMB (2022)"
socialLinks:
  linkedin: "https://linkedin.com/in/sarah-chen-phd"
  google_scholar: "https://scholar.google.com/citations?user=abc123"
  orcid: "https://orcid.org/0000-0000-0000-0001"
---

Extended biography and research focus. This section can include:

## Research Focus

Detailed description of current research directions...

## Selected Publications

- Chen, S., et al. (2024). DeepFold2: Advanced Neural Architecture for Protein Structure Prediction. *Nature Methods*, 21(3), 234-245. [DOI: 10.1038/s41592-024-0123-4](https://doi.org/10.1038/s41592-024-0123-4)

- Rodriguez, M., Chen, S. (2023). Graph Neural Networks for Drug-Target Interaction Prediction. *Bioinformatics*, 39(12), 2156-2164. [DOI: 10.1093/bioinformatics/btad456](https://doi.org/10.1093/bioinformatics/btad456)

## Current Projects

Brief overview of ongoing research projects...
```

#### Profile Frontmatter Fields

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `id` | string | ✓ | Unique identifier for URL |
| `name` | string | ✓ | Full name with titles |
| `position` | string | ✓ | Job title/position |
| `image` | string | ✓ | Photo path |
| `email` | string | ✓ | Contact email |
| `bio` | string | ✓ | Brief biography |
| `researchInterests` | array | ✓ | List of research areas |
| `education` | array | ✓ | Educational background |
| `awards` | array | ✗ | Awards and honors |
| `socialLinks` | object | ✗ | Social media profiles |

#### Team Profile Best Practices

1. **Images**: Use high-quality, professional photos (300x300px minimum)
2. **Bio Length**: Keep the frontmatter bio to 2-3 sentences; use content area for details
3. **Research Interests**: Use 3-6 specific, searchable terms
4. **Publications**: Include DOI links formatted as `[DOI: xxx](https://doi.org/xxx)`
5. **Social Links**: Only include professional profiles

### Research Projects Management

#### Creating a New Research Project

1. Navigate to the `src/projects/` directory
2. Create a new file: `project-slug.md`
3. Use a descriptive, URL-friendly filename

#### Research Project Structure

```markdown
---
id: "deepfold-evolution"
title: "DeepFold Evolution: Advanced Protein Structure Prediction"
description: "Development of next-generation neural architectures for protein structure and function prediction using deep learning techniques."
status: "ongoing"
startDate: "2023-01-01"
endDate: "2025-12-31"
funding: "CNPq Universal - $85,000, FAPESP Young Researcher - $62,000"
collaborators:
  - "Stanford University - Prof. John Smith"
  - "Cambridge University - Dr. Mary Johnson"
  - "EMBL-EBI - Dr. Alex Thompson"
technologies:
  - "PyTorch"
  - "AlphaFold2"
  - "CUDA"
  - "Docker"
image: "/project-images/deepfold.jpg"
team: 
  - "sarah-chen"
  - "michael-rodriguez"
featured: true
---

# DeepFold Evolution

## Overview

The DeepFold Evolution project represents our most ambitious initiative in developing computational methods for protein structure prediction...

## Objectives

### Primary Goals
- Develop new neural architectures incorporating evolutionary information
- Improve accuracy in predicting loops and disordered regions
- Create automated pipelines for large-scale analysis

### Success Metrics
- 15-20% improvement over current state-of-the-art
- 50% reduction in computational time
- Publication in high-impact journals

## Methodology

Our approach combines several cutting-edge techniques:

1. **Evolutionary Transformers**: Models that learn patterns from multiple sequence alignments
2. **Graph Neural Networks**: To capture spatial interactions between residues
3. **Physics-Informed Networks**: Incorporating physical principles into architectures

## Timeline

### Year 1 (2023)
- Literature review and method development
- Initial prototype implementation
- Preliminary validation studies

### Year 2 (2024)
- Large-scale experiments
- Method refinement
- Manuscript preparation

### Year 3 (2025)
- Final validation
- Web server development
- Dissemination activities

## Publications

- Chen, S., et al. (2024). DeepFold2: Advanced Neural Architecture for Protein Structure Prediction. *Nature Methods*, 21(3), 234-245. [DOI: 10.1038/s41592-024-0123-4](https://doi.org/10.1038/s41592-024-0123-4)

## Impact

This project could revolutionize drug discovery, protein engineering, and understanding of diseases related to protein misfolding.
```

#### Project Frontmatter Fields

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `id` | string | ✓ | Unique identifier |
| `title` | string | ✓ | Project title |
| `description` | string | ✓ | Brief summary |
| `status` | enum | ✓ | `"ongoing"`, `"completed"`, `"planned"` |
| `startDate` | string | ✓ | Start date (YYYY-MM-DD) |
| `endDate` | string | ✗ | End date (YYYY-MM-DD) |
| `funding` | string | ✗ | Funding sources |
| `collaborators` | array | ✗ | External collaborators |
| `technologies` | array | ✗ | Technologies used |
| `team` | array | ✓ | Team member IDs |
| `featured` | boolean | ✗ | Show on homepage |

### Content Guidelines

#### Markdown Best Practices

1. **Headers**: Use descriptive, hierarchical headers
   ```markdown
   # Main Title
   ## Section Header
   ### Subsection Header
   ```

2. **Links**: Always use descriptive link text
   ```markdown
   ✓ [Read our Nature Methods paper](https://doi.org/10.1038/s41592-024-0123-4)
   ✗ [Click here](https://doi.org/10.1038/s41592-024-0123-4)
   ```

3. **Images**: Include alt text and use relative paths
   ```markdown
   ![Protein structure prediction results](/images/protein-results.png)
   ```

4. **Code**: Use syntax highlighting
   ```markdown
   ```python
   def predict_structure(sequence):
       return model.predict(sequence)
   ```
   ```

#### SEO Optimization

1. **Frontmatter**: Always include `description` field
2. **Headers**: Use keywords in section headers
3. **Alt Text**: Describe images for accessibility
4. **Internal Links**: Link between related content

### Adding Images and Assets

#### Image Organization

```
public/
├── team-photos/          # Team member photos
├── project-images/       # Project featured images
├── blog-images/          # Blog post images
└── assets/              # General assets
```

#### Image Best Practices

1. **Formats**: Use WebP or JPEG for photos, SVG for graphics
2. **Sizes**: 
   - Team photos: 400x400px
   - Project images: 800x400px
   - Blog images: 1200x600px
3. **Optimization**: Compress images before uploading
4. **Naming**: Use descriptive, lowercase filenames with hyphens

### URL Structure

The website automatically generates URLs based on file structure:

- **Blog Posts**: `/blog/post-slug`
- **Team Profiles**: `/people/person-id`
- **Research Projects**: `/research/project-id`

### Content Validation

Before publishing, ensure:

1. **Frontmatter Syntax**: Valid YAML formatting
2. **Required Fields**: All required fields present
3. **Dates**: Proper YYYY-MM-DD format
4. **Links**: All links functional
5. **Images**: All image paths valid
6. **IDs**: Unique across all content

## Deployment to GitHub Pages

### Option 1: Using Lovable's GitHub Integration (Recommended)

#### Step 1: Connect to GitHub

1. **In Lovable Editor**:
   - Click **GitHub** in the top navigation
   - Select **Connect to GitHub**
   - Authorize the Lovable GitHub App when prompted

2. **Repository Creation**:
   - Choose your GitHub account/organization
   - Click **Create Repository**
   - Lovable will create a new repository with your project code

#### Step 2: Configure GitHub Pages

1. **Navigate to Repository Settings**:
   - Go to your new repository on GitHub
   - Click **Settings** tab
   - Scroll to **Pages** section

2. **Enable GitHub Actions**:
   - Under "Source", select **GitHub Actions**
   - This allows custom deployment workflows

#### Step 3: Create Deployment Workflow

1. **Create Workflow Directory**:
   ```bash
   mkdir -p .github/workflows
   ```

2. **Create Deployment File**:
   Create `.github/workflows/deploy.yml` with the following content:

```yaml
name: Deploy to GitHub Pages

on:
  # Runs on pushes targeting the default branch
  push:
    branches: [ main ]

  # Allows you to run this workflow manually from the Actions tab
  workflow_dispatch:

# Sets permissions of the GITHUB_TOKEN to allow deployment to GitHub Pages
permissions:
  contents: read
  pages: write
  id-token: write

# Allow only one concurrent deployment, skipping runs queued between the run in-progress and latest queued.
concurrency:
  group: "pages"
  cancel-in-progress: false

jobs:
  # Build job
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

      - name: Build with Vite
        run: npm run build

      - name: Setup Pages
        uses: actions/configure-pages@v4

      - name: Upload artifact
        uses: actions/upload-pages-artifact@v3
        with:
          path: './dist'

  # Deployment job
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

#### Step 4: Configure Vite for GitHub Pages

1. **Update vite.config.ts**:

```typescript
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from "path"

export default defineConfig({
  plugins: [react()],
  // IMPORTANT: Replace 'your-repository-name' with your actual repository name
  base: '/your-repository-name/',
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
  }
})
```

**Special Cases**:
- If your repository is named `username.github.io`, use `base: '/'`
- For custom domains, use `base: '/'`

#### Step 5: Update Router Configuration

1. **Modify src/App.tsx**:

```typescript
import { BrowserRouter, Routes, Route } from "react-router-dom";
// ... other imports

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      {/* Add basename for GitHub Pages */}
      <BrowserRouter basename="/your-repository-name">
        <Routes>
          {/* Your existing routes */}
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);
```

#### Step 6: Deploy

1. **Commit and Push**:
   ```bash
   git add .
   git commit -m "Configure GitHub Pages deployment"
   git push origin main
   ```

2. **Monitor Deployment**:
   - Go to your repository's **Actions** tab
   - Watch the deployment workflow run
   - Check for any errors in the build logs

3. **Access Your Site**:
   - Your site will be available at: `https://username.github.io/repository-name/`
   - The URL will be shown in the workflow logs

### Option 2: Manual GitHub Setup

If you prefer to set up GitHub manually:

#### Step 1: Create Repository

1. **Initialize Git** (if not already done):
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   ```

2. **Create GitHub Repository**:
   - Go to GitHub and create a new repository
   - Don't initialize with README (since you already have files)

3. **Connect and Push**:
   ```bash
   git branch -M main
   git remote add origin https://github.com/username/repository-name.git
   git push -u origin main
   ```

#### Step 2: Follow Steps 2-6 from Option 1

Continue with the GitHub Pages configuration steps above.

### Custom Domain Setup

#### Using GitHub Pages Custom Domain

1. **Add CNAME File**:
   Create `public/CNAME` with your domain:
   ```
   yourdomain.com
   ```

2. **Configure DNS**:
   - Add a CNAME record pointing to `username.github.io`
   - Or add A records pointing to GitHub Pages IPs

3. **Update Vite Config**:
   ```typescript
   export default defineConfig({
     plugins: [react()],
     base: '/', // Use root for custom domain
     // ... rest of config
   })
   ```

#### Using Lovable Custom Domain

For easier domain setup, use Lovable's built-in custom domain feature:

1. **In Lovable**:
   - Go to **Project > Settings > Domains**
   - Click **Connect Domain**
   - Follow the DNS configuration instructions

2. **Benefits**:
   - Automatic SSL certificates
   - CDN acceleration
   - Simplified DNS setup

### Troubleshooting Deployment

#### Common Issues and Solutions

1. **Build Fails - Node Version**:
   ```yaml
   # In .github/workflows/deploy.yml
   - name: Setup Node.js
     uses: actions/setup-node@v4
     with:
       node-version: '18' # Ensure this matches your local version
   ```

2. **404 Errors on Refresh**:
   ```typescript
   // This is expected with client-side routing on GitHub Pages
   // Users need to navigate via the app, not direct URLs
   ```

3. **Assets Not Loading**:
   ```typescript
   // Ensure base path is correct in vite.config.ts
   base: '/your-exact-repository-name/',
   ```

4. **Mixed Content Errors**:
   ```typescript
   // Ensure all assets use relative paths
   // Use '/images/photo.jpg' not 'http://localhost:5173/images/photo.jpg'
   ```

#### Debugging Steps

1. **Check Build Logs**:
   - Go to **Actions** tab in GitHub
   - Click on failed workflow
   - Expand error sections

2. **Test Locally**:
   ```bash
   npm run build
   npm run preview
   ```

3. **Validate Configuration**:
   - Verify `base` path in `vite.config.ts`
   - Check `basename` in `App.tsx`
   - Ensure file paths are correct

### Performance Optimization

#### Build Optimization

1. **Bundle Analysis**:
   ```bash
   npm install --save-dev rollup-plugin-analyzer
   ```

2. **Image Optimization**:
   - Use WebP format when possible
   - Implement lazy loading for images
   - Compress images before uploading

3. **Code Splitting**:
   ```typescript
   // Use dynamic imports for large components
   const LargeComponent = lazy(() => import('./LargeComponent'));
   ```

## Development Workflow

### Local Development

1. **Start Development Server**:
   ```bash
   npm run dev
   ```

2. **Add New Content**:
   - Create markdown files in appropriate directories
   - Follow naming conventions
   - Test locally before committing

3. **Preview Production Build**:
   ```bash
   npm run build
   npm run preview
   ```

### Content Creation Workflow

1. **Plan Content**:
   - Define target audience
   - Outline key points
   - Gather necessary assets

2. **Create Markdown File**:
   - Use appropriate template
   - Fill in all required frontmatter
   - Write clear, engaging content

3. **Review and Test**:
   - Check spelling and grammar
   - Verify all links work
   - Test responsive design

4. **Publish**:
   - Commit changes
   - Push to repository
   - Monitor deployment

### Team Collaboration

#### Content Contributors

1. **Access Levels**:
   - **Admin**: Full repository access
   - **Contributor**: Can create pull requests
   - **Viewer**: Read-only access

2. **Workflow for Contributors**:
   ```bash
   # Fork repository
   git clone https://github.com/your-username/liia-website.git
   cd liia-website
   
   # Create feature branch
   git checkout -b add-new-blog-post
   
   # Add content
   # ... create/edit files ...
   
   # Commit and push
   git add .
   git commit -m "Add new blog post about machine learning"
   git push origin add-new-blog-post
   
   # Create pull request on GitHub
   ```

#### Review Process

1. **Content Review Checklist**:
   - [ ] Proper frontmatter formatting
   - [ ] All required fields present
   - [ ] Content follows style guidelines
   - [ ] Images optimized and accessible
   - [ ] Links functional
   - [ ] SEO metadata complete

2. **Technical Review**:
   - [ ] No build errors
   - [ ] Responsive design maintained
   - [ ] Performance not degraded
   - [ ] Accessibility standards met

## Available Scripts

### Development Commands

```bash
# Start development server with hot reload
npm run dev

# Build for production
npm run build

# Preview production build locally
npm run preview

# Run ESLint for code quality
npm run lint

# Type checking
npm run type-check
```

### Maintenance Commands

```bash
# Update dependencies
npm update

# Security audit
npm audit

# Clean node_modules and reinstall
rm -rf node_modules package-lock.json
npm install
```

## Project Structure

```
liia-website/
├── .github/
│   └── workflows/
│       └── deploy.yml          # GitHub Pages deployment
├── public/                     # Static assets
│   ├── team-photos/           # Team member photos
│   ├── project-images/        # Project images
│   ├── blog-images/           # Blog post images
│   └── assets/                # General assets
├── src/
│   ├── components/            # React components
│   │   ├── ui/               # Reusable UI components
│   │   ├── Header.tsx        # Site header
│   │   ├── Footer.tsx        # Site footer
│   │   └── ...               # Other components
│   ├── pages/                # Page components
│   │   ├── Index.tsx         # Homepage
│   │   ├── Blog.tsx          # Blog listing
│   │   ├── People.tsx        # Team page
│   │   └── ...               # Other pages
│   ├── posts/                # Blog posts (markdown)
│   │   ├── 2024-01-15-example-post.md
│   │   └── ...
│   ├── profiles/             # Team profiles (markdown)
│   │   ├── sarah-chen.md
│   │   ├── michael-rodriguez.md
│   │   └── ...
│   ├── projects/             # Research projects (markdown)
│   │   ├── deepfold-evolution.md
│   │   └── ...
│   ├── content/              # Other content (markdown)
│   │   ├── about.md
│   │   ├── publications.md
│   │   └── ...
│   ├── utils/                # Utility functions
│   │   ├── postUtils.ts      # Blog post utilities
│   │   ├── profileUtils.ts   # Profile utilities
│   │   ├── projectUtils.ts   # Project utilities
│   │   └── contentUtils.ts   # General content utilities
│   ├── hooks/                # Custom React hooks
│   ├── lib/                  # Library configurations
│   └── ...                   # Other source files
├── package.json              # Dependencies and scripts
├── vite.config.ts           # Vite configuration
├── tailwind.config.ts       # Tailwind CSS configuration
├── tsconfig.json            # TypeScript configuration
└── README.md                # This file
```

## Contributing

### Getting Started

1. **Fork the Repository**:
   - Click "Fork" on GitHub
   - Clone your fork locally

2. **Set Up Development Environment**:
   ```bash
   git clone https://github.com/your-username/liia-website.git
   cd liia-website
   npm install
   npm run dev
   ```

3. **Create Feature Branch**:
   ```bash
   git checkout -b feature/your-feature-name
   ```

### Contribution Guidelines

1. **Code Style**:
   - Follow existing TypeScript/React patterns
   - Use Tailwind CSS for styling
   - Follow component naming conventions

2. **Content Guidelines**:
   - Use clear, concise language
   - Follow markdown formatting standards
   - Include proper frontmatter metadata

3. **Commit Messages**:
   ```bash
   # Good commit messages
   git commit -m "Add new blog post about protein folding"
   git commit -m "Update team profile for Dr. Chen"
   git commit -m "Fix responsive design on mobile"
   
   # Avoid
   git commit -m "Updates"
   git commit -m "Fix stuff"
   ```

4. **Pull Request Process**:
   - Create descriptive PR title
   - Include summary of changes
   - Reference any related issues
   - Ensure all checks pass

### Reporting Issues

1. **Bug Reports**:
   - Use GitHub Issues
   - Include steps to reproduce
   - Provide browser/device information
   - Include screenshots if relevant

2. **Feature Requests**:
   - Describe the feature clearly
   - Explain the use case
   - Provide examples if possible

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Support

### Getting Help

1. **Documentation**: Check this README first
2. **GitHub Issues**: For bugs and feature requests
3. **Discussions**: For questions and community support
4. **Email**: Contact the LIIA team directly

### Resources

- [React Documentation](https://react.dev/)
- [Vite Documentation](https://vitejs.dev/)
- [Tailwind CSS Documentation](https://tailwindcss.com/)
- [Markdown Guide](https://www.markdownguide.org/)
- [GitHub Pages Documentation](https://docs.github.com/en/pages)

### Community

- **GitHub Discussions**: Ask questions and share ideas
- **Issue Tracker**: Report bugs and request features
- **Pull Requests**: Contribute code and content

---

For questions or support, please contact the LIIA team or create an issue in the GitHub repository.
