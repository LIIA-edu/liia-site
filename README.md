# LIIA Laboratory Website

A modern, responsive website for the Laboratory of Research in Immunooncology and Artificial Intelligence (LIIA), built with React, TypeScript, and Tailwind CSS.

## ✨ Features

- **🔬 Research Focus**: Showcase laboratory research, publications, and projects
- **👥 Team Profiles**: Individual researcher profiles with publications and expertise
- **📚 Publications**: Comprehensive publication management with DOI integration
- **🧪 Research Projects**: Detailed project descriptions with collaboration details
- **📝 Blog System**: File-based content management with Markdown support
- **📱 Mobile-First**: Fully responsive design with smooth animations
- **⚡ Fast Performance**: Built with Vite for optimal loading speeds
- **🎨 Modern Design**: Beautiful UI with dark/light mode support
- **♿ Accessible**: WCAG compliant with semantic HTML
- **🚀 SEO Optimized**: Meta tags, structured data, and semantic markup

## 🛠️ Tech Stack

- **React 18** with TypeScript for robust development
- **Vite** for lightning-fast development and building
- **Tailwind CSS** for consistent, responsive styling
- **React Router** for client-side navigation
- **React Markdown** with syntax highlighting for content rendering
- **Gray Matter** for frontmatter parsing
- **Shadcn/ui** for consistent, accessible UI components

## 🚀 Quick Start

### Prerequisites

- **Node.js** 18 or higher
- **npm** or **yarn** package manager
- Basic knowledge of **Markdown** for content editing
- **Git** for version control

### Installation

1. **Clone the repository**:
   ```bash
   git clone https://github.com/your-username/liia-site.git
   cd liia-site
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Start development server**:
   ```bash
   npm run dev
   ```

4. **Open your browser**:
   Navigate to [http://localhost:5173](http://localhost:5173)

That's it! Your development environment is ready. 🎉

## 📝 Content Management

This website uses a **file-based content management system** where all content is stored in Markdown files with YAML frontmatter. This approach provides:

- ✅ **Version Control**: Track all changes with Git
- ✅ **Easy Editing**: Write content in simple Markdown
- ✅ **Flexibility**: Full control over content structure
- ✅ **Performance**: Static content loads instantly

### 📄 Content Types

| Type | Location | Purpose | URL Structure |
|------|----------|---------|---------------|
| **Blog Posts** | `src/posts/` | Research updates, news | `/blog/post-slug` |
| **Team Profiles** | `src/profiles/` | Individual researcher pages | `/people/person-id` |
| **Research Projects** | `src/projects/` | Project descriptions | `/research/project-id` |
| **Static Content** | `src/content/` | About, publications, etc. | Various |

---

## 📰 Blog Posts

### Creating a New Blog Post

1. Navigate to `src/posts/`
2. Create a file: `YYYY-MM-DD-descriptive-title.md`
3. Add frontmatter and content

### Blog Post Template

```markdown
---
title: "Your Compelling Post Title"
date: "2024-03-15"
slug: "descriptive-url-slug"
tags: 
  - "Machine Learning"
  - "Bioinformatics"
  - "Research"
description: "Brief, engaging description for SEO and social sharing (max 160 characters)"
readTime: "8 min read"
featured: true
author: "Dr. Sarah Chen"
image: "/blog-images/featured-image.jpg"
---

# Your Post Title

## Introduction

Start with a compelling hook that draws readers in...

## Main Content

### Use Clear Subheadings

Break your content into digestible sections:

- **Bold points** for emphasis
- *Italics* for subtle emphasis
- `Code snippets` for technical terms
- [Descriptive links](https://example.com) for references

### Code Examples

```python
# Include syntax-highlighted code
def analyze_protein_structure(sequence):
    """Analyze protein structure using ML models."""
    result = model.predict(sequence)
    return result
```

### Images and Figures

![Descriptive alt text for accessibility](/blog-images/results-chart.png)

*Figure 1: Results showing 95% accuracy improvement*

## Conclusion

Summarize key findings and implications...

### Key Takeaways

1. **Main finding**: Brief explanation
2. **Secondary finding**: Brief explanation
3. **Future directions**: What's next

### References

- Paper, A. et al. (2024). "Title". *Journal*, 12(3), 45-67. [DOI: 10.1000/example](https://doi.org/10.1000/example)
```

### ⚙️ Frontmatter Fields

| Field | Required | Description | Example |
|-------|----------|-------------|---------|
| `title` | ✅ | Post title (50-60 chars) | `"AI Revolutionizes Drug Discovery"` |
| `date` | ✅ | Publication date | `"2024-03-15"` |
| `slug` | ✅ | URL-friendly identifier | `"ai-drug-discovery"` |
| `tags` | ✅ | Categories (3-5 tags) | `["AI", "Drug Discovery", "Research"]` |
| `description` | ✅ | SEO description (150-160 chars) | `"How AI is transforming..."` |
| `readTime` | ✅ | Estimated reading time | `"8 min read"` |
| `featured` | ❌ | Show on homepage | `true` or `false` |
| `author` | ❌ | Author name | `"Dr. Sarah Chen"` |
| `image` | ❌ | Featured image | `"/blog-images/post.jpg"` |

---

## 👥 Team Profiles

### Creating a New Team Profile

1. Navigate to `src/profiles/`
2. Create a file: `firstname-lastname.md`
3. Use consistent naming (lowercase, hyphenated)

### Team Profile Template

```markdown
---
id: "sarah-chen"
name: "Dr. Sarah Chen, PhD"
position: "Principal Investigator & Laboratory Director"
image: "/team-photos/sarah-chen.jpg"
email: "sarah.chen@university.edu"
bio: "Leading researcher in computational biology with 15+ years experience developing AI solutions for drug discovery and personalized medicine."
researchInterests: 
  - "Machine Learning in Computational Biology"
  - "Protein Structure Prediction"
  - "Drug-Target Interaction Modeling"
  - "Genomic Data Analysis"
  - "Personalized Medicine"
education:
  - "PhD in Bioinformatics - Stanford University (2015)"
  - "MSc in Computer Science - MIT (2011)"
  - "BSc in Biotechnology - University of São Paulo (2009)"
awards:
  - "Young Researcher Award - CNPq (2023)"
  - "Best Paper Award - ISMB (2022)"
  - "Excellence in Teaching Award (2021)"
socialLinks:
  linkedin: "https://linkedin.com/in/sarah-chen-phd"
  google_scholar: "https://scholar.google.com/citations?user=abc123"
  orcid: "https://orcid.org/0000-0000-0000-0001"
  twitter: "https://twitter.com/sarahchen_ai"
---

## Research Philosophy

Dr. Chen believes in the transformative potential of artificial intelligence to solve complex biological problems. Her work focuses on developing interpretable machine learning models that can provide insights into biological mechanisms while maintaining clinical relevance.

## Current Research Directions

### Protein Structure Prediction
Leading the development of next-generation neural architectures that incorporate evolutionary information and physical constraints to achieve unprecedented accuracy in protein structure prediction.

### Drug Discovery Pipeline
Creating end-to-end AI systems for drug discovery, from target identification through lead optimization, with particular focus on rare diseases and personalized therapeutics.

### Multi-omics Integration
Developing novel approaches to integrate genomic, proteomic, and clinical data for precision medicine applications.

## Selected Publications

### Recent Work (2023-2024)

- **Chen, S.**, Rodriguez, M., Liu, J. (2024). "DeepFold2: Evolutionary-informed neural networks for protein structure prediction." *Nature Methods*, 21(3), 234-245. [DOI: 10.1038/s41592-024-0123-4](https://doi.org/10.1038/s41592-024-0123-4)

- Liu, J., **Chen, S.** (2024). "Graph attention networks for drug-target interaction prediction." *Bioinformatics*, 40(8), 1234-1242. [DOI: 10.1093/bioinformatics/btad456](https://doi.org/10.1093/bioinformatics/btad456)

### Breakthrough Publications

- **Chen, S.**, et al. (2022). "Transformer-based models for protein sequence analysis." *Nature Biotechnology*, 40(12), 1789-1798. [DOI: 10.1038/s41587-022-01234-5](https://doi.org/10.1038/s41587-022-01234-5) **[Cited 450+ times]**

## Leadership & Service

### Editorial Activities
- Associate Editor, *Bioinformatics* (2023-present)
- Editorial Board Member, *Journal of Computational Biology* (2022-present)

### Professional Service
- Program Committee Member, ISMB 2024
- Reviewer for Nature Methods, Science, Cell
- Grant Review Panel, NIH Special Emphasis Panel (2023)

## Mentorship

Dr. Chen has mentored 12 PhD students, 8 postdoctoral researchers, and numerous undergraduate students. Her mentees have gone on to positions at leading universities and biotech companies worldwide.

### Current Lab Members
- 4 PhD students
- 2 Postdoctoral researchers
- 3 Undergraduate researchers

## Contact & Collaboration

Interested in collaboration or joining the lab? Dr. Chen welcomes inquiries about:
- Research collaborations
- Graduate student positions
- Postdoctoral opportunities
- Industry partnerships

**Office**: Room 301, Computational Biology Building  
**Phone**: +55 (11) 1234-5678  
**Office Hours**: Tuesdays & Thursdays, 2-4 PM (by appointment)
```

---

## 🔬 Research Projects

### Creating a New Research Project

1. Navigate to `src/projects/`
2. Create a file: `descriptive-project-name.md`
3. Use URL-friendly naming

### Research Project Template

```markdown
---
id: "ai-drug-discovery-platform"
title: "AI-Powered Drug Discovery Platform"
description: "Development of an integrated artificial intelligence platform for accelerated drug discovery, from target identification to clinical candidate selection."
status: "ongoing"
startDate: "2023-01-01"
endDate: "2025-12-31"
funding: 
  - "NIH R01 Grant - $450,000"
  - "NSF CAREER Award - $350,000"
  - "Industry Partnership - $200,000"
collaborators:
  - "Stanford University - Prof. John Smith (Structural Biology)"
  - "MIT - Dr. Maria Garcia (Machine Learning)"
  - "Genentech - Dr. Alex Wilson (Drug Development)"
technologies:
  - "PyTorch"
  - "TensorFlow"
  - "AlphaFold2"
  - "CUDA"
  - "Docker"
  - "Kubernetes"
image: "/project-images/ai-drug-discovery.jpg"
team: 
  - "sarah-chen"
  - "michael-rodriguez"
  - "jennifer-liu"
featured: true
publications:
  - "10.1038/s41592-024-0123-4"
  - "10.1093/bioinformatics/btad456"
---

# AI-Powered Drug Discovery Platform

## 🎯 Project Overview

The AI-Powered Drug Discovery Platform represents a paradigm shift in pharmaceutical research, leveraging cutting-edge artificial intelligence to accelerate the traditionally lengthy and expensive drug development process. Our platform integrates multiple AI technologies to create a comprehensive pipeline from target identification to clinical candidate selection.

### 🚀 Vision Statement

To democratize drug discovery by creating an AI platform that reduces development time from 10-15 years to 3-5 years while maintaining safety and efficacy standards.

## 📊 Key Achievements

| Metric | Achievement | Impact |
|--------|-------------|---------|
| **Time Reduction** | 60% faster target identification | 2-3 years saved per project |
| **Success Rate** | 40% improvement in hit-to-lead conversion | Higher quality candidates |
| **Cost Savings** | $50M+ in computational screening | Reduced wet lab experiments |
| **Publications** | 12 peer-reviewed papers | Knowledge advancement |

## 🎯 Research Objectives

### Primary Goals

1. **Target Identification**
   - Develop AI models to identify novel therapeutic targets
   - Predict target druggability and safety profiles
   - Integrate multi-omics data for target validation

2. **Drug Design**
   - Create generative models for novel molecule design
   - Optimize ADMET properties computationally
   - Predict drug-target interactions with high accuracy

3. **Clinical Prediction**
   - Forecast clinical trial outcomes
   - Identify patient stratification strategies
   - Predict adverse drug reactions

### Success Metrics

- **Technical**: 90% accuracy in target prediction, 70% hit rate in virtual screening
- **Clinical**: 3 compounds entering clinical trials, 2 successful Phase I completions
- **Academic**: 20+ publications in high-impact journals

## 🧬 Scientific Approach

### Phase 1: Data Integration & Model Development (2023)

#### Multi-Omics Data Integration
- **Genomics**: Whole-genome sequencing, GWAS data
- **Transcriptomics**: RNA-seq, single-cell RNA-seq
- **Proteomics**: Mass spectrometry, protein interactions
- **Metabolomics**: Small molecule profiles

#### AI Model Architecture
```python
# Simplified model architecture
class DrugDiscoveryPlatform:
    def __init__(self):
        self.target_predictor = TransformerTargetModel()
        self.molecule_generator = VAEMoleculeGenerator()
        self.interaction_predictor = GraphNeuralNetwork()
        
    def predict_targets(self, disease_profile):
        return self.target_predictor.forward(disease_profile)
        
    def generate_molecules(self, target_profile):
        return self.molecule_generator.sample(target_profile)
```

### Phase 2: Platform Integration & Validation (2024)

#### Integrated Pipeline Development
1. **Target Discovery Module**
   - Disease pathway analysis
   - Target prioritization algorithms
   - Druggability assessment

2. **Molecule Design Module**
   - Structure-based drug design
   - Ligand-based optimization
   - ADMET prediction

3. **Clinical Prediction Module**
   - Biomarker identification
   - Patient stratification
   - Efficacy prediction

#### Validation Strategy
- **Retrospective Studies**: Validate on historical drug development data
- **Prospective Studies**: Partner with pharmaceutical companies
- **Wet Lab Validation**: Synthesize and test top predictions

### Phase 3: Clinical Translation & Deployment (2025)

#### Platform Deployment
- Cloud-based infrastructure for scalability
- User-friendly interface for non-technical users
- API integration with existing pharmaceutical workflows

#### Clinical Partnerships
- Collaboration with biotech companies
- Integration with clinical trial networks
- Regulatory compliance and validation

## 🤝 Collaborative Network

### Academic Partnerships

#### Stanford University
- **Focus**: Structural biology and drug design
- **Contribution**: Protein structure expertise and computational resources
- **Key Personnel**: Prof. John Smith (20+ years drug discovery experience)

#### MIT Computer Science
- **Focus**: Machine learning methodology
- **Contribution**: Novel AI architectures and optimization
- **Key Personnel**: Dr. Maria Garcia (Expert in graph neural networks)

### Industry Collaborations

#### Genentech
- **Role**: Clinical validation and regulatory guidance
- **Resources**: Access to proprietary compound libraries
- **Timeline**: 3-year partnership agreement

#### Novartis AI Lab
- **Focus**: Platform integration and deployment
- **Contribution**: Real-world testing environment
- **Impact**: Direct pathway to clinical application

## 💰 Funding & Resources

### Current Funding Status: $1,000,000 (Total)

| Source | Amount | Period | Purpose |
|--------|---------|---------|---------|
| **NIH R01** | $450,000 | 2023-2026 | Core research activities |
| **NSF CAREER** | $350,000 | 2023-2028 | Educational integration |
| **Industry Partnership** | $200,000 | 2024-2025 | Clinical validation |

### Resource Allocation
- **Personnel** (60%): Graduate students, postdocs, staff scientists
- **Computational** (25%): Cloud computing, software licenses
- **Equipment** (10%): Hardware upgrades, specialized software
- **Travel/Dissemination** (5%): Conferences, collaborations

## 🗓️ Detailed Timeline

### Year 1 (2023) - Foundation ✅
- [x] Data collection and preprocessing
- [x] Initial model development
- [x] Partnership establishment
- [x] Team assembly

### Year 2 (2024) - Integration 🏗️
- [x] Platform architecture design
- [ ] Model validation and optimization
- [ ] Pilot studies with industry partners
- [ ] First clinical predictions

### Year 3 (2025) - Translation 🚀
- [ ] Full platform deployment
- [ ] Clinical trial initiation
- [ ] Regulatory submissions
- [ ] Technology transfer

## 📈 Impact & Outcomes

### Scientific Impact

#### Publications (12 total)
- **Nature Methods** (1): AI methodology for drug discovery
- **Science** (1): Platform validation and results
- **Cell** (2): Specific disease applications
- **Bioinformatics** (4): Computational methods
- **Journal of Medicinal Chemistry** (4): Drug design applications

#### Software & Tools
- **DrugAI Platform**: Open-source components available on GitHub
- **ChemGen**: Molecular generation toolkit
- **TargetPredict**: Target identification software

### Clinical Impact

#### Drug Candidates
1. **LIIA-001**: Alzheimer's disease therapeutic (entering Phase I)
2. **LIIA-002**: Cancer immunotherapy enhancer (preclinical)
3. **LIIA-003**: Rare disease treatment (target validation)

#### Patient Benefit
- Potential treatments for previously undruggable targets
- Personalized medicine approaches
- Reduced development costs leading to more affordable drugs

### Economic Impact

#### Cost Savings
- **$50M+** saved in computational screening vs. traditional methods
- **60% reduction** in time-to-candidate identification
- **40% improvement** in clinical success rates

#### Market Potential
- Platform licensing to pharmaceutical companies
- Spin-off company formation potential
- Job creation in biotechnology sector

## 🔬 Technical Details

### Machine Learning Architecture

#### Target Prediction Model
```python
class TargetPredictionModel(nn.Module):
    def __init__(self, input_dim=2048, hidden_dim=512):
        super().__init__()
        self.encoder = TransformerEncoder(input_dim, hidden_dim)
        self.classifier = nn.Linear(hidden_dim, num_targets)
        
    def forward(self, disease_features):
        encoded = self.encoder(disease_features)
        predictions = self.classifier(encoded)
        return torch.sigmoid(predictions)
```

#### Molecule Generation Model
- **Architecture**: Variational Autoencoder with Graph Neural Networks
- **Training Data**: 10M+ molecular structures from ChEMBL
- **Performance**: 85% valid molecules, 70% novel structures

### Data Management

#### Database Infrastructure
- **Primary Storage**: 100TB+ multi-omics data
- **Processing**: Distributed computing with Apache Spark
- **Security**: HIPAA-compliant data handling

#### Quality Control
- Automated data validation pipelines
- Version control for all datasets
- Comprehensive metadata tracking

## 🌟 Innovation Highlights

### Novel Contributions

1. **Multi-Modal AI Integration**
   - First platform to seamlessly integrate genomics, proteomics, and clinical data
   - Novel attention mechanisms for cross-modal learning

2. **Interpretable AI for Drug Discovery**
   - Developed explainable AI methods for regulatory compliance
   - Created visualization tools for biological insight

3. **Automated Hypothesis Generation**
   - AI system that proposes novel drug-target hypotheses
   - Continuously learning from experimental feedback

### Technical Innovations

#### Graph-based Molecular Representation
```python
# Novel molecular graph representation
class MolecularGraph:
    def __init__(self, molecule):
        self.nodes = self.extract_atoms(molecule)
        self.edges = self.extract_bonds(molecule)
        self.features = self.compute_features()
    
    def compute_pharmacophore_features(self):
        # Novel 3D pharmacophore encoding
        return pharmacophore_encoder(self.structure_3d)
```

#### Adaptive Learning Framework
- Models that improve with each prediction
- Uncertainty quantification for risk assessment
- Active learning for optimal experimental design

## 🏆 Recognition & Awards

### Project Recognition
- **Best Paper Award**, ISMB 2024 - "AI Platform for Drug Discovery"
- **Innovation Award**, BioIT World 2024
- **Featured Article**, Nature Biotechnology (2024)

### Media Coverage
- Featured in Science Magazine "Breakthroughs of 2024"
- MIT Technology Review "10 Breakthrough Technologies"
- TED Talk: "AI is Revolutionizing Drug Discovery" (1M+ views)

## 🔮 Future Directions

### Next-Generation Platform (2026-2030)

#### Advanced AI Integration
- **Quantum Machine Learning**: Explore quantum algorithms for molecular simulation
- **Federated Learning**: Enable multi-institutional collaboration while preserving data privacy
- **Reinforcement Learning**: Optimize experimental design and clinical trial strategies

#### Expanded Applications
- **Precision Medicine**: Patient-specific drug predictions
- **Combination Therapy**: AI-designed drug combinations
- **Rare Diseases**: Focus on neglected conditions

### Commercialization Strategy

#### Technology Transfer
1. **Spin-off Company**: LIIA Therapeutics (planned 2025)
2. **Licensing Agreements**: Platform licensing to Big Pharma
3. **Open Source Components**: Core algorithms available to academic community

#### Market Entry
- Initial focus on oncology and neurological diseases
- Partnership with clinical research organizations
- Regulatory pathway development

## 📞 Get Involved

### Collaboration Opportunities

#### For Researchers
- **Postdoctoral Positions**: 2 positions available in 2024
- **Graduate Student Projects**: Multiple thesis opportunities
- **Visiting Scholar Program**: 6-month collaborations welcome

#### For Industry
- **Beta Testing**: Early access to platform capabilities
- **Joint Research**: Collaborative development projects
- **Consulting**: Expert advice on AI in drug discovery

#### For Investors
- **Technology Licensing**: Commercial applications available
- **Spin-off Investment**: Equity opportunities in 2025
- **Research Sponsorship**: Directed research programs

### Contact Information

**Project Lead**: Dr. Sarah Chen  
**Email**: sarah.chen@university.edu  
**Phone**: +1 (555) 123-4567  
**Office**: Computational Biology Building, Room 301

**Business Development**: Jennifer Liu  
**Email**: business@liia-lab.org  
**LinkedIn**: [/in/jennifer-liu-biotech](https://linkedin.com/in/jennifer-liu-biotech)

---

*This project represents the future of drug discovery - where artificial intelligence accelerates healing for millions of patients worldwide.*
```

---

## 🎨 Content Best Practices

### ✍️ Writing Guidelines

#### Tone & Style
- **Professional yet accessible**: Avoid jargon, explain technical terms
- **Engaging narratives**: Tell stories, not just facts
- **Action-oriented**: Use active voice and strong verbs
- **Inclusive language**: Welcome diverse audiences

#### Structure
- **Scannable content**: Use headers, bullet points, and short paragraphs
- **Logical flow**: Introduction → Main content → Conclusion
- **Clear hierarchy**: H1 → H2 → H3 for organization

#### SEO Optimization
- **Keywords**: Include relevant terms naturally
- **Meta descriptions**: 150-160 characters, compelling
- **Alt text**: Describe images for accessibility
- **Internal linking**: Connect related content

### 🖼️ Image Guidelines

#### Technical Specifications
- **Team Photos**: 400x400px, WebP or JPEG
- **Project Images**: 1200x600px for featured images
- **Blog Images**: 800x400px minimum
- **File Size**: Under 500KB per image

#### Organization Structure
```
public/
├── team-photos/          # Professional headshots
│   ├── sarah-chen.jpg
│   └── michael-rodriguez.jpg
├── project-images/       # Project banners and diagrams
│   ├── ai-drug-discovery.jpg
│   └── protein-folding.jpg
├── blog-images/          # Article illustrations
│   ├── 2024-03-15-breakthrough.jpg
│   └── conference-photos/
└── assets/              # Icons, logos, graphics
    ├── logo.svg
    └── icons/
```

#### Best Practices
- **Compression**: Use tools like TinyPNG before uploading
- **Alt Text**: Descriptive, keyword-rich descriptions
- **Captions**: Add context and attribution when needed
- **Copyright**: Only use licensed or original images

---

## 🚀 Deployment Guide

### 🔧 GitHub Pages Setup

#### Option 1: Using Lovable's GitHub Integration (Recommended)

1. **Connect to GitHub**:
   - Click **GitHub** → **Connect to GitHub** in Lovable
   - Authorize the Lovable GitHub App
   - Select your GitHub account/organization
   - Click **Create Repository**

2. **Repository is Automatically Created**:
   - Lovable creates a repository with your project code
   - All changes sync automatically between Lovable and GitHub
   - GitHub Actions workflow is pre-configured

3. **Configure GitHub Pages**:
   - Go to your repository → **Settings** → **Pages**
   - Source: **GitHub Actions**
   - Your site will be available at: `https://username.github.io/repository-name/`

#### Option 2: Manual GitHub Setup

1. **Create Repository**:
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/username/repository-name.git
   git push -u origin main
   ```

2. **Configure GitHub Pages**:
   - Repository → **Settings** → **Pages**
   - Source: **GitHub Actions**

The GitHub Actions workflow (`.github/workflows/deploy.yml`) is automatically included and will:
- Build the project on every push to main
- Deploy to GitHub Pages
- Handle all necessary configurations

### 🌐 Custom Domain Setup

#### Using GitHub Pages Custom Domain

1. **Add CNAME File**:
   Create `public/CNAME`:
   ```
   yourdomain.com
   ```

2. **Configure DNS**:
   Add a CNAME record pointing `yourdomain.com` to `username.github.io`

3. **Update Vite Config**:
   ```typescript
   // vite.config.ts
   export default defineConfig({
     base: '/', // Use root for custom domain
     // ... other config
   })
   ```

#### Using Lovable Custom Domain (Easier)

1. **In Lovable**: Project → Settings → Domains
2. **Follow Setup Instructions**: Automatic SSL and CDN
3. **Benefits**: Simplified setup, better performance

### 🔧 Environment Configuration

#### For GitHub Pages Deployment

If your repository is NOT named `username.github.io`, update these files:

1. **vite.config.ts**:
   ```typescript
   export default defineConfig({
     base: '/your-repository-name/', // Replace with your repo name
     // ... other config
   })
   ```

2. **src/App.tsx**:
   ```typescript
   <BrowserRouter basename="/your-repository-name">
     {/* Your routes */}
   </BrowserRouter>
   ```

#### For Custom Domain

1. **vite.config.ts**:
   ```typescript
   export default defineConfig({
     base: '/', // Root path for custom domain
     // ... other config
   })
   ```

2. **src/App.tsx**:
   ```typescript
   <BrowserRouter basename="/">
     {/* Your routes */}
   </BrowserRouter>
   ```

---

## 🛠️ Development

### Available Scripts

```bash
# Development
npm run dev          # Start dev server with hot reload
npm run build        # Build for production
npm run preview      # Preview production build locally

# Code Quality
npm run lint         # Run ESLint
npm run type-check   # TypeScript type checking

# Maintenance
npm update           # Update dependencies
npm audit            # Security audit
```

### Project Structure

```
liia-site/
├── .github/workflows/     # GitHub Actions
├── public/               # Static assets
│   ├── team-photos/
│   ├── project-images/
│   └── blog-images/
├── src/
│   ├── components/       # React components
│   │   ├── ui/          # Reusable UI components (Shadcn)
│   │   ├── Header.tsx
│   │   ├── Footer.tsx
│   │   └── ...
│   ├── pages/           # Page components
│   │   ├── Index.tsx    # Homepage
│   │   ├── Blog.tsx     # Blog listing
│   │   └── ...
│   ├── posts/           # Blog posts (Markdown)
│   ├── profiles/        # Team profiles (Markdown)
│   ├── projects/        # Research projects (Markdown)
│   ├── content/         # Static content (Markdown)
│   ├── utils/           # Utility functions
│   └── hooks/           # Custom React hooks
├── package.json
├── vite.config.ts       # Vite configuration
├── tailwind.config.ts   # Tailwind CSS config
└── README.md           # This file
```

---

## 🤝 Contributing

### Quick Start for Contributors

1. **Fork & Clone**:
   ```bash
   git clone https://github.com/your-username/liia-site.git
   cd liia-site
   npm install
   ```

2. **Create Feature Branch**:
   ```bash
   git checkout -b feature/amazing-new-feature
   ```

3. **Make Changes & Test**:
   ```bash
   npm run dev  # Test locally
   npm run build && npm run preview  # Test production build
   ```

4. **Submit Pull Request**:
   - Clear description of changes
   - Reference any related issues
   - Ensure all checks pass

### Contribution Guidelines

#### Code Standards
- **TypeScript**: Strict type checking enabled
- **React**: Functional components with hooks
- **Tailwind**: Utility-first CSS approach
- **Accessibility**: WCAG AA compliance

#### Content Standards
- **Markdown**: Consistent formatting
- **Images**: Optimized and accessible
- **SEO**: Meta descriptions and alt text
- **Grammar**: Proofread all content

#### Commit Messages
```bash
# Good examples
git commit -m "Add protein folding research project"
git commit -m "Update Dr. Chen's profile with recent publications"
git commit -m "Fix mobile navigation accessibility"

# Avoid
git commit -m "Updates"
git commit -m "Fix stuff"
```

---

## 📞 Support & Resources

### Getting Help

| Type | Best Method | Response Time |
|------|-------------|---------------|
| **Bugs** | GitHub Issues | 1-2 business days |
| **Features** | GitHub Discussions | 3-5 business days |
| **Content** | Email team | 1 business day |
| **Urgent** | Direct contact | Same day |

### Useful Resources

- 📚 [React Documentation](https://react.dev/)
- ⚡ [Vite Documentation](https://vitejs.dev/)
- 🎨 [Tailwind CSS Documentation](https://tailwindcss.com/)
- 📝 [Markdown Guide](https://www.markdownguide.org/)
- 🚀 [GitHub Pages Documentation](https://docs.github.com/en/pages)
- 🎯 [Lovable Documentation](https://docs.lovable.dev/)

### Community

- **💬 GitHub Discussions**: Ask questions and share ideas
- **🐛 Issue Tracker**: Report bugs and request features  
- **🔄 Pull Requests**: Contribute code and content
- **📧 Email**: contact@liia-lab.org for direct communication

---

## 📄 License

This project is licensed under the **MIT License** - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- **Lovable Platform** for the development environment
- **Shadcn/ui** for the component library
- **Tailwind CSS** for the styling framework
- **React** and **Vite** communities for excellent tools

---

**Made with ❤️ by the LIIA Laboratory Team**

*For questions or support, please contact us at contact@liia-lab.org or create an issue in the GitHub repository.*
