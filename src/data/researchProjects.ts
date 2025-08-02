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
    title: "Atlas Single-Cell do Câncer Brasileiro",
    description: "Criação de um atlas abrangente de células de câncer usando sequenciamento single-cell RNA-seq, com foco em tumores prevalentes na população brasileira.",
    fullDescription: `
# Atlas Single-Cell do Câncer Brasileiro

## Visão Geral
O Atlas Single-Cell do Câncer Brasileiro é um projeto colaborativo que visa criar o maior banco de dados de células cancerígenas da América Latina, utilizando tecnologias de sequenciamento single-cell de última geração.

## Objetivos
- Caracterizar tipos celulares em 10 tipos de câncer mais prevalentes no Brasil
- Identificar biomarcadores específicos para a população brasileira
- Desenvolver métodos computacionais para análise de heterogeneidade tumoral
- Criar plataforma web pública para acesso aos dados

## Metodologia
### Experimental
- Coleta de amostras em 15 hospitais parceiros
- Sequenciamento 10x Genomics Chromium
- Análise de ~2 milhões de células individuais

### Computacional
- Pipeline automatizado de processamento
- Algoritmos de clustering hierárquico
- Análise de trajetórias celulares
- Predição de tipos celulares raros

## Colaborações
- Hospital A.C.Camargo Cancer Center
- INCA - Instituto Nacional de Câncer
- Hospital das Clínicas - FMUSP
- MD Anderson Cancer Center (EUA)

## Impacto Esperado
Este atlas será fundamental para:
- Medicina personalizada para pacientes brasileiros
- Descoberta de novos alvos terapêuticos
- Compreensão da diversidade genética tumoral
- Desenvolvimento de biomarcadores prognósticos
    `,
    status: 'ongoing',
    startDate: '2023-06-01',
    endDate: '2026-05-31',
    funding: 'FAPESP Temático - R$ 1.200.000, CNPq INCT - R$ 800.000',
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
    title: "IA para Descoberta de Medicamentos Tropicais",
    description: "Aplicação de inteligência artificial para descoberta de novos medicamentos contra doenças tropicais negligenciadas, com foco em malária, dengue e Chagas.",
    fullDescription: `
# IA para Descoberta de Medicamentos Tropicais

## Visão Geral
Este projeto revolucionário aplica técnicas avançadas de inteligência artificial para acelerar a descoberta de medicamentos contra doenças tropicais negligenciadas, que afetam milhões de pessoas em países em desenvolvimento.

## Desafio
Doenças tropicais como malária, dengue, Chagas e leishmaniose recebem investimento limitado da indústria farmacêutica devido ao baixo retorno econômico, criando uma lacuna crítica no desenvolvimento de novos tratamentos.

## Nossa Abordagem
### Machine Learning para Drug Discovery
- **Redes Neurais Gráficas**: Para predição de propriedades moleculares
- **Modelos Generativos**: Geração de novas estruturas químicas
- **Transfer Learning**: Aproveitamento de dados de outras doenças
- **Multi-Objective Optimization**: Balanceamento de eficácia, segurança e custo

### Targets Principais
1. **Malária**: Plasmodium falciparum e P. vivax
2. **Dengue**: Proteases virais NS2B-NS3
3. **Chagas**: Cruzipaína do Trypanosoma cruzi
4. **Leishmaniose**: Enzimas do metabolismo de folato

## Metodologia Computacional
- Screening virtual de ~10 milhões de compostos
- Docking molecular de alta precisão
- Simulações de dinâmica molecular
- Predição ADMET usando deep learning
- Otimização de propriedades farmacocinéticas

## Validação Experimental
Parcerias com laboratórios de síntese química para:
- Síntese dos compostos mais promissores
- Ensaios biológicos in vitro
- Estudos de citotoxicidade
- Testes em modelos animais

## Impacto Social
- Medicamentos acessíveis para populações vulneráveis
- Redução de custos de desenvolvimento
- Fortalecimento da pesquisa nacional
- Contribuição para os ODS da ONU
    `,
    status: 'ongoing',
    startDate: '2024-01-01',
    endDate: '2027-12-31',
    funding: 'Gates Foundation - $500.000, CNPq INCT - R$ 600.000',
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
    title: "Redes de Interação Proteína-Proteína em Doenças Neurológicas",
    description: "Análise computacional de redes de interação proteína-proteína para compreender mecanismos moleculares em Alzheimer, Parkinson e outras doenças neurodegenerativas.",
    fullDescription: `
# Redes de Interação Proteína-Proteína em Doenças Neurológicas

## Contexto
Doenças neurodegenerativas como Alzheimer, Parkinson e ELA representam um dos maiores desafios da medicina moderna. A compreensão dos mecanismos moleculares dessas doenças através da análise de redes de interação proteica pode revelar novos alvos terapêuticos.

## Objetivos
- Mapear redes de interação proteica em tecido neuronal
- Identificar hubs críticos nas redes patológicas
- Desenvolver biomarcadores baseados em topologia de rede
- Predizer efeitos de perturbações terapêuticas

## Abordagem Metodológica
### Construção de Redes
- Integração de dados de proteômica, transcriptômica e interactômica
- Uso de técnicas de graph neural networks
- Validação experimental via co-imunoprecipitação
- Análise temporal da evolução das redes

### Análise Topológica
- Identificação de módulos funcionais
- Análise de centralidade e clustering
- Detecção de comunidades patológicas
- Estudo de robustez e vulnerabilidade

### Machine Learning
- Classificação de fenótipos patológicos
- Predição de progressão da doença
- Identificação de biomarcadores de rede
- Drug repurposing baseado em topologia

## Dados e Recursos
- Bancos de dados: STRING, BioGRID, IntAct
- Dados clínicos: ADNI, PPMI, ALS databases
- Expressão gênica: Allen Brain Atlas
- Proteômica: Human Protein Atlas

## Colaborações Clínicas
- Hospital das Clínicas - Neurologia
- Associação Brasil Parkinson
- Instituto do Cérebro - UFRN
- Mayo Clinic (colaboração internacional)

## Ferramentas Desenvolvidas
- **NeuroNetAnalyzer**: Software para análise de redes neurológicas
- **ProteinHubFinder**: Identificação de proteínas críticas
- **NetworkDrugTarget**: Predição de alvos terapêuticos
    `,
    status: 'ongoing',
    startDate: '2023-09-01',
    endDate: '2026-08-31',
    funding: 'FAPESP Regular - R$ 280.000, Alzheimer Association - $75.000',
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