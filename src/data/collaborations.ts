export interface Collaboration {
  name: string;
  location: string;
  type: string;
  focus: string;
  duration: string;
  principalInvestigator?: string;
  website?: string;
  description: string;
  keyProjects?: string[];
}

export const collaborationIntro =
  "Partnering with leading institutions and organizations worldwide to accelerate cancer immunotherapy research and bring AI-driven solutions to patients faster.";

export const activeCollaborations: Collaboration[] = [
  {
    name: "Stanford Cancer Institute",
    location: "Stanford, CA, USA",
    type: "Academic Partnership",
    focus: "Neoantigen Prediction & Immunogenomics",
    duration: "2022 - Present",
    principalInvestigator: "Dr. Maria Rodriguez",
    website: "https://cancer.stanford.edu",
    description:
      "Joint research on AI-driven neoantigen prediction algorithms for personalized cancer immunotherapy. Our collaboration focuses on developing novel deep learning architectures that can accurately predict which neoantigens will elicit strong immune responses.",
    keyProjects: [
      "NeoantigenAI Development",
      "Clinical Data Integration",
      "Immunotherapy Response Prediction",
    ],
  },
  {
    name: "MIT Computer Science & Artificial Intelligence Laboratory",
    location: "Cambridge, MA, USA",
    type: "Research Collaboration",
    focus: "Machine Learning for Cancer Biology",
    duration: "2023 - Present",
    principalInvestigator: "Dr. James Thompson",
    website: "https://csail.mit.edu",
    description:
      "Developing novel deep learning architectures for understanding cancer-immune system interactions. This partnership combines MIT's expertise in artificial intelligence with our specialized knowledge in cancer immunology.",
    keyProjects: [
      "Graph Neural Networks for Immune Networks",
      "Transformer Models for Genomics",
      "Federated Learning for Medical Data",
    ],
  },
  {
    name: "Genentech Inc.",
    location: "South San Francisco, CA, USA",
    type: "Industry Partnership",
    focus: "Drug Discovery & Development",
    duration: "2023 - 2026",
    principalInvestigator: "Dr. Lisa Park",
    website: "https://gene.com",
    description:
      "Collaborative development of AI-powered drug discovery platform for cancer immunotherapies. This partnership aims to translate our computational models into clinical applications that can improve patient outcomes.",
    keyProjects: [
      "Drug-Target Interaction Prediction",
      "Biomarker Discovery Platform",
      "Clinical Trial Optimization",
    ],
  },
  {
    name: "University of São Paulo",
    location: "São Paulo, Brazil",
    type: "International Collaboration",
    focus: "Cancer Genomics in Latin American Populations",
    duration: "2021 - Present",
    principalInvestigator: "Dr. Carlos Mendez",
    website: "https://usp.br",
    description:
      "Studying cancer genomics diversity in underrepresented populations for equitable AI model development. This collaboration ensures our AI models work effectively across diverse genetic backgrounds.",
    keyProjects: [
      "Population Genomics Analysis",
      "Health Equity in AI",
      "Cross-Population Validation",
    ],
  },
];

export const pastCollaborations: Collaboration[] = [
  {
    name: "European Bioinformatics Institute (EMBL-EBI)",
    location: "Cambridge, UK",
    type: "Data Consortium",
    focus: "Cancer Data Standardization",
    duration: "2020 - 2022",
    description:
      "Led efforts to standardize cancer immunotherapy data across European research institutions, establishing protocols that are now used worldwide.",
  },
  {
    name: "Memorial Sloan Kettering Cancer Center",
    location: "New York, NY, USA",
    type: "Clinical Partnership",
    focus: "Translational Research",
    duration: "2019 - 2021",
    description:
      "Translated computational models into clinical decision support tools for oncologists, demonstrating the real-world impact of our research.",
  },
];

export const partnershipImpact = [
  "45+ joint publications in top-tier journals",
  "$15M+ in collaborative grants secured",
  "8 clinical trials incorporating our AI models",
  "500+ researchers trained in computational immunooncology",
];

export const partnershipOpportunities = [
  "Clinical Translation: Partnerships with cancer centers for clinical validation",
  "Industry Collaboration: Joint development of therapeutic applications",
  "International Research: Cross-cultural and cross-population studies",
  "Technology Transfer: Commercialization of research outcomes",
];

export const partnershipContact = {
  name: "Dr. Sarah Chen",
  email: "sarah.chen@liia.edu.br",
};

