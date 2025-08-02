export interface ResearchProject {
  id: string;
  title: string;
  description: string;
  fullDescription: string;
  status: 'ongoing' | 'completed' | 'planned';
  startDate: string;
  endDate?: string;
  funding: string;
  collaborators: string[];
  publications: string[];
  technologies: string[];
  image: string;
  team: string[]; // Team member IDs
}

export const researchProjects: ResearchProject[] = [
  {
    id: "deepfold-evolution",
    title: "DeepFold Evolution: Advanced Protein Structure Prediction",
    description: "Development of next-generation neural architectures for protein structure and function prediction using deep learning techniques and conformational analysis.",
    fullDescription: `
# DeepFold Evolution

## Overview
The DeepFold Evolution project represents our most ambitious initiative in developing computational methods for protein structure prediction. Using state-of-the-art deep learning architectures, including transformers and graph neural networks, our goal is to overcome current limitations in predicting complex protein conformations.

## Main Objectives
- Develop new neural architectures that incorporate evolutionary and physicochemical information
- Improve accuracy in predicting loops and disordered regions
- Implement methods for conformational change prediction
- Create automated pipelines for large-scale structural analysis

## Methodology
Our approach combines:
1. **Evolutionary Transformers**: Models that learn evolutionary patterns from multiple alignments
2. **Graph Neural Networks**: To capture spatial interactions between residues
3. **Physics-Informed Neural Networks**: Incorporating physical principles into architectures
4. **Multi-Task Learning**: Simultaneous prediction of structure, function, and dynamics

## Expected Results
- 15-20% improvement in prediction accuracy compared to state-of-the-art
- 50% reduction in computational time
- Web server availability for the scientific community
- Publication in high-impact journals (Nature Methods, Science)

## Impact
This project could revolutionize drug discovery, protein engineering, and understanding of diseases related to protein misfolding.
    `,
    status: 'ongoing',
    startDate: '2023-01-01',
    endDate: '2025-12-31',
    funding: 'CNPq Universal - $85,000, FAPESP Young Researcher - $62,000',
    collaborators: [
      'Stanford University - Prof. John Smith',
      'Cambridge University - Dr. Mary Johnson',
      'EMBL-EBI - Dr. Alex Thompson'
    ],
    publications: [
      'Chen, S., et al. (2024). DeepFold2: Advanced Neural Architecture for Protein Structure Prediction. Nature Methods, 21(3), 234-245.',
      'Rodriguez, M., Chen, S. (2024). Physics-Informed Deep Learning for Protein Folding. arXiv preprint arXiv:2401.12345.'
    ],
    technologies: [
      'PyTorch',
      'AlphaFold2',
      'ESMFold',
      'CUDA',
      'Distributed Computing',
      'Docker',
      'Kubernetes'
    ],
    image: '/placeholder.svg',
    team: ['sarah-chen', 'michael-rodriguez']
  },
  {
    id: "single-cell-atlas",
    title: "Brazilian Cancer Single-Cell Atlas",
    description: "Creating a comprehensive atlas of cancer cells using single-cell RNA-seq sequencing, focusing on tumors prevalent in the Brazilian population.",
    fullDescription: `
# Brazilian Cancer Single-Cell Atlas

## Overview
The Brazilian Cancer Single-Cell Atlas is a collaborative project that aims to create the largest cancer cell database in Latin America, using state-of-the-art single-cell sequencing technologies.

## Objectives
- Characterize cell types in 10 most prevalent cancer types in Brazil
- Identify specific biomarkers for the Brazilian population
- Develop computational methods for tumor heterogeneity analysis
- Create public web platform for data access

## Methodology
### Experimental
- Sample collection in 15 partner hospitals
- 10x Genomics Chromium sequencing
- Analysis of ~2 million individual cells

### Computational
- Automated processing pipeline
- Hierarchical clustering algorithms
- Cell trajectory analysis
- Rare cell type prediction

## Collaborations
- Hospital A.C.Camargo Cancer Center
- INCA - Instituto Nacional de Câncer
- Hospital das Clínicas - FMUSP
- MD Anderson Cancer Center (EUA)

## Expected Impact
This atlas will be fundamental for:
- Personalized medicine for Brazilian patients
- Discovery of new therapeutic targets
- Understanding tumor genetic diversity
- Development of prognostic biomarkers
    `,
    status: 'ongoing',
    startDate: '2023-06-01',
    endDate: '2026-05-31',
    funding: 'FAPESP Thematic - $300,000, CNPq INCT - $200,000',
    collaborators: [
      'A.C.Camargo Cancer Center',
      'INCA',
      'Hospital das Clínicas - FMUSP',
      'MD Anderson Cancer Center'
    ],
    publications: [
      'Liu, J., Chen, S. (2024). CellTrack: Deep Learning for Single-Cell Trajectory Analysis. Nature Communications, 15, 1234.',
      'Santos, P., Liu, J., et al. (2024). Brazilian Cancer Cell Atlas: First Data Release. Cell, 187(8), 2156-2172.'
    ],
    technologies: [
      '10x Genomics',
      'Scanpy',
      'Seurat',
      'CellRanger',
      'Nextflow',
      'PostgreSQL',
      'React.js',
      'D3.js'
    ],
    image: '/placeholder.svg',
    team: ['jennifer-liu', 'sarah-chen']
  },
  {
    id: "drug-discovery-ai",
    title: "AI for Tropical Drug Discovery",
    description: "Application of artificial intelligence for discovering new drugs against neglected tropical diseases, focusing on malaria, dengue, and Chagas disease.",
    fullDescription: `
# AI for Tropical Drug Discovery

## Overview
This revolutionary project applies advanced artificial intelligence techniques to accelerate drug discovery against neglected tropical diseases, which affect millions of people in developing countries.

## Challenge
Tropical diseases like malaria, dengue, Chagas, and leishmaniasis receive limited investment from the pharmaceutical industry due to low economic returns, creating a critical gap in new treatment development.

## Our Approach
### Machine Learning for Drug Discovery
- **Graph Neural Networks**: For molecular property prediction
- **Generative Models**: Generation of new chemical structures
- **Transfer Learning**: Leveraging data from other diseases
- **Multi-Objective Optimization**: Balancing efficacy, safety, and cost

### Main Targets
1. **Malaria**: Plasmodium falciparum and P. vivax
2. **Dengue**: Viral proteases NS2B-NS3
3. **Chagas**: Cruzipain from Trypanosoma cruzi
4. **Leishmaniasis**: Folate metabolism enzymes

## Computational Methodology
- Virtual screening of ~10 million compounds
- High-precision molecular docking
- Molecular dynamics simulations
- ADMET prediction using deep learning
- Pharmacokinetic property optimization

## Experimental Validation
Partnerships with chemical synthesis laboratories for:
- Synthesis of most promising compounds
- In vitro biological assays
- Cytotoxicity studies
- Animal model testing

## Social Impact
- Accessible medicines for vulnerable populations
- Reduced development costs
- Strengthening national research
- Contribution to UN SDGs
    `,
    status: 'ongoing',
    startDate: '2024-01-01',
    endDate: '2027-12-31',
    funding: 'Gates Foundation - $500,000, CNPq INCT - $150,000',
    collaborators: [
      'Fundação Oswaldo Cruz (Fiocruz)',
      'Institute for OneWorld Health',
      'DNDi - Drugs for Neglected Diseases initiative',
      'Universidade Federal do Rio de Janeiro'
    ],
    publications: [
      'Rodriguez, M., et al. (2024). GraphDrug: A Novel Approach for Drug Discovery Using Graph Neural Networks. Journal of Chemical Information and Modeling, 63(8), 2445-2458.',
      'Kim, D., Rodriguez, M. (2024). AI-Driven Drug Discovery for Tropical Diseases: A Computational Framework. Drug Discovery Today, 29(3), 103891.'
    ],
    technologies: [
      'RDKit',
      'DeepChem',
      'AutoDock Vina',
      'GROMACS',
      'Schrödinger Suite',
      'TensorFlow',
      'JAX',
      'ChEMBL API'
    ],
    image: '/placeholder.svg',
    team: ['michael-rodriguez', 'david-kim', 'sarah-chen']
  },
  {
    id: "protein-networks",
    title: "Protein-Protein Interaction Networks in Neurological Diseases",
    description: "Computational analysis of protein-protein interaction networks to understand molecular mechanisms in Alzheimer's, Parkinson's, and other neurodegenerative diseases.",
    fullDescription: `
# Protein-Protein Interaction Networks in Neurological Diseases

## Context
Neurodegenerative diseases like Alzheimer's, Parkinson's, and ALS represent one of modern medicine's greatest challenges. Understanding the molecular mechanisms of these diseases through protein interaction network analysis can reveal new therapeutic targets.

## Objectives
- Map protein interaction networks in neural tissue
- Identify critical hubs in pathological networks
- Develop network topology-based biomarkers
- Predict effects of therapeutic perturbations

## Methodological Approach
### Network Construction
- Integration of proteomics, transcriptomics, and interactomics data
- Use of graph neural network techniques
- Experimental validation via co-immunoprecipitation
- Temporal analysis of network evolution

### Topological Analysis
- Identification of functional modules
- Centrality and clustering analysis
- Detection of pathological communities
- Study of robustness and vulnerability

### Machine Learning
- Classification of pathological phenotypes
- Disease progression prediction
- Network biomarker identification
- Topology-based drug repurposing

## Data and Resources
- Databases: STRING, BioGRID, IntAct
- Clinical data: ADNI, PPMI, ALS databases
- Gene expression: Allen Brain Atlas
- Proteomics: Human Protein Atlas

## Clinical Collaborations
- Hospital das Clínicas - Neurology
- Brazil Parkinson Association
- Brain Institute - UFRN
- Mayo Clinic (international collaboration)

## Developed Tools
- **NeuroNetAnalyzer**: Software for neurological network analysis
- **ProteinHubFinder**: Critical protein identification
- **NetworkDrugTarget**: Therapeutic target prediction
    `,
    status: 'ongoing',
    startDate: '2023-09-01',
    endDate: '2026-08-31',
    funding: 'FAPESP Regular - $70,000, Alzheimer Association - $75,000',
    collaborators: [
      'Hospital das Clínicas - FMUSP',
      'Instituto do Cérebro - UFRN',
      'Mayo Clinic',
      'Associação Brasil Parkinson'
    ],
    publications: [
      'Kim, D., Rodriguez, M., Chen, S. (2024). ProteinNet: Graph-Based Protein Interaction Prediction. Molecular Systems Biology, 20(3), 145-162.',
      'Silva, R., Kim, D., et al. (2024). Network Analysis Reveals Novel Therapeutic Targets in Alzheimer Disease. Nature Neuroscience, 27(4), 567-580.'
    ],
    technologies: [
      'NetworkX',
      'Cytoscape',
      'R/Bioconductor',
      'igraph',
      'PyTorch Geometric',
      'Neo4j',
      'Gephi',
      'MATLAB'
    ],
    image: '/placeholder.svg',
    team: ['david-kim', 'sarah-chen']
  }
];