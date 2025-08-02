export interface TeamMember {
  id: string;
  name: string;
  position: string;
  image: string;
  bio: string;
  email: string;
  researchInterests: string[];
  education: string[];
  publications: string[];
  awards: string[];
  socialLinks?: {
    twitter?: string;
    linkedin?: string;
    google_scholar?: string;
    orcid?: string;
  };
}

export const teamMembers: TeamMember[] = [
  {
    id: "sarah-chen",
    name: "Dr. Sarah Chen, PhD",
    position: "Principal Investigator",
    image: "/placeholder.svg",
    bio: "Dr. Chen estabeleceu o laboratório em 2018 e publicou mais de 50 artigos em biologia computacional. Sua pesquisa foca em aprendizado de máquina aplicado à análise de dados genômicos e desenvolvimento de métodos computacionais para medicina personalizada.",
    email: "sarah.chen@liia.edu.br",
    researchInterests: [
      "Machine Learning em Biologia Computacional",
      "Análise de Dados Genômicos",
      "Medicina Personalizada",
      "Redes Neurais para Predição de Estrutura Proteica",
      "Bioinformática Translacional"
    ],
    education: [
      "PhD em Bioinformática - Stanford University (2015)",
      "MSc em Ciência da Computação - MIT (2011)",
      "BSc em Biotecnologia - USP (2009)"
    ],
    publications: [
      "Chen, S., et al. (2024). DeepFold2: Advanced Neural Architecture for Protein Structure Prediction. Nature Methods, 21(3), 234-245.",
      "Chen, S., Rodriguez, M. (2023). Graph Neural Networks for Drug-Target Interaction Prediction. Bioinformatics, 39(12), 2156-2164.",
      "Chen, S. (2023). Machine Learning Approaches in Precision Medicine. Nature Reviews Drug Discovery, 22(8), 612-628."
    ],
    awards: [
      "Prêmio Jovem Pesquisador CNPq (2023)",
      "Best Paper Award - ISMB (2022)",
      "Early Career Researcher Award - ISCB (2021)"
    ],
    socialLinks: {
      linkedin: "https://linkedin.com/in/sarah-chen-phd",
      google_scholar: "https://scholar.google.com/citations?user=abc123",
      orcid: "https://orcid.org/0000-0000-0000-0001"
    }
  },
  {
    id: "michael-rodriguez",
    name: "Dr. Michael Rodriguez, PhD",
    position: "Postdoctoral Research Fellow",
    image: "/placeholder.svg",
    bio: "Michael ingressou em nosso laboratório em 2022 após completar seu PhD em redes neurais gráficas. Especializa-se em desenvolvimento de algoritmos para análise de dados single-cell e métodos de deep learning para descoberta de medicamentos.",
    email: "michael.rodriguez@liia.edu.br",
    researchInterests: [
      "Graph Neural Networks",
      "Análise de Dados Single-Cell",
      "Deep Learning para Descoberta de Medicamentos",
      "Redes Biológicas",
      "Algoritmos de Clustering"
    ],
    education: [
      "PhD em Machine Learning - University of Cambridge (2022)",
      "MSc em Matemática Aplicada - ETH Zurich (2018)",
      "BSc em Física - UNESP (2016)"
    ],
    publications: [
      "Rodriguez, M., Chen, S. (2024). Single-Cell RNA Sequencing Analysis Using Deep Graph Networks. Cell Systems, 18(4), 301-315.",
      "Rodriguez, M., et al. (2023). GraphDrug: A Novel Approach for Drug Discovery Using Graph Neural Networks. Journal of Chemical Information and Modeling, 63(8), 2445-2458."
    ],
    awards: [
      "Postdoc Excellence Award - FAPESP (2024)",
      "Outstanding PhD Thesis Award - Cambridge (2022)"
    ],
    socialLinks: {
      linkedin: "https://linkedin.com/in/michael-rodriguez-phd",
      google_scholar: "https://scholar.google.com/citations?user=def456"
    }
  },
  {
    id: "jennifer-liu",
    name: "Jennifer Liu",
    position: "PhD Student (4th year)",
    image: "/placeholder.svg",
    bio: "Jennifer está desenvolvendo métodos de machine learning para análise de dados single-cell. Seu trabalho foca em identificação de tipos celulares raros e trajetórias de diferenciação celular usando técnicas avançadas de deep learning.",
    email: "jennifer.liu@liia.edu.br",
    researchInterests: [
      "Single-Cell Genomics",
      "Identificação de Tipos Celulares",
      "Trajetórias de Diferenciação",
      "Deep Learning",
      "Análise de Expressão Gênica"
    ],
    education: [
      "PhD em Bioinformática - UNICAMP (em andamento, 2021-presente)",
      "MSc em Biotecnologia - USP (2021)",
      "BSc em Biologia Molecular - UFRJ (2019)"
    ],
    publications: [
      "Liu, J., Chen, S. (2024). CellTrack: Deep Learning for Single-Cell Trajectory Analysis. Nature Communications, 15, 1234.",
      "Liu, J., et al. (2023). Identifying Rare Cell Types Using Variational Autoencoders. Bioinformatics, 39(16), 2789-2797."
    ],
    awards: [
      "Melhor Apresentação de Poster - X-Meeting (2023)",
      "Bolsa de Doutorado CNPq (2021-2025)"
    ],
    socialLinks: {
      linkedin: "https://linkedin.com/in/jennifer-liu-phd-student"
    }
  },
  {
    id: "david-kim",
    name: "David Kim",
    position: "PhD Student (3rd year)",
    image: "/placeholder.svg",
    bio: "David foca na aplicação de machine learning baseado em grafos para redes biológicas. Seu trabalho envolve o desenvolvimento de novos algoritmos para predição de interações proteína-proteína e análise de vias metabólicas.",
    email: "david.kim@liia.edu.br",
    researchInterests: [
      "Redes Biológicas",
      "Interações Proteína-Proteína",
      "Graph Machine Learning",
      "Vias Metabólicas",
      "Network Biology"
    ],
    education: [
      "PhD em Ciência da Computação - UNICAMP (em andamento, 2022-presente)",
      "MSc em Bioinformática - UFMG (2022)",
      "BSc em Ciência da Computação - UFSC (2020)"
    ],
    publications: [
      "Kim, D., Rodriguez, M., Chen, S. (2024). ProteinNet: Graph-Based Protein Interaction Prediction. Molecular Systems Biology, 20(3), 145-162.",
      "Kim, D., Liu, J. (2023). Network Analysis of Metabolic Pathways Using Graph Neural Networks. BMC Bioinformatics, 24, 289."
    ],
    awards: [
      "Bolsa de Doutorado FAPESP (2022-2026)",
      "Prêmio Jovem Talento - SBC (2023)"
    ],
    socialLinks: {
      linkedin: "https://linkedin.com/in/david-kim-cs"
    }
  }
];