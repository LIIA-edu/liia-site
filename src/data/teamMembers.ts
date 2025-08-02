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
    bio: "Dr. Chen established the laboratory in 2018 and has published over 50 papers in computational biology. Her research focuses on machine learning applied to genomic data analysis and developing computational methods for personalized medicine.",
    email: "sarah.chen@liia.edu.br",
    researchInterests: [
      "Machine Learning in Computational Biology",
      "Genomic Data Analysis",
      "Personalized Medicine",
      "Neural Networks for Protein Structure Prediction",
      "Translational Bioinformatics"
    ],
    education: [
      "PhD in Bioinformatics - Stanford University (2015)",
      "MSc in Computer Science - MIT (2011)",
      "BSc in Biotechnology - USP (2009)"
    ],
    publications: [
      "Chen, S., et al. (2024). DeepFold2: Advanced Neural Architecture for Protein Structure Prediction. Nature Methods, 21(3), 234-245.",
      "Chen, S., Rodriguez, M. (2023). Graph Neural Networks for Drug-Target Interaction Prediction. Bioinformatics, 39(12), 2156-2164.",
      "Chen, S. (2023). Machine Learning Approaches in Precision Medicine. Nature Reviews Drug Discovery, 22(8), 612-628."
    ],
    awards: [
      "Young Researcher Award CNPq (2023)",
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
    bio: "Michael joined our laboratory in 2022 after completing his PhD work on graph neural networks. He specializes in developing algorithms for single-cell data analysis and deep learning methods for drug discovery.",
    email: "michael.rodriguez@liia.edu.br",
    researchInterests: [
      "Graph Neural Networks",
      "Single-Cell Data Analysis",
      "Deep Learning for Drug Discovery",
      "Biological Networks",
      "Clustering Algorithms"
    ],
    education: [
      "PhD in Machine Learning - University of Cambridge (2022)",
      "MSc in Applied Mathematics - ETH Zurich (2018)",
      "BSc in Physics - UNESP (2016)"
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
    bio: "Jennifer is developing machine learning methods for single-cell data analysis. Her work focuses on identifying rare cell types and cellular differentiation trajectories using advanced deep learning techniques.",
    email: "jennifer.liu@liia.edu.br",
    researchInterests: [
      "Single-Cell Genomics",
      "Cell Type Identification",
      "Differentiation Trajectories",
      "Deep Learning",
      "Gene Expression Analysis"
    ],
    education: [
      "PhD in Bioinformatics - UNICAMP (ongoing, 2021-present)",
      "MSc in Biotechnology - USP (2021)",
      "BSc in Molecular Biology - UFRJ (2019)"
    ],
    publications: [
      "Liu, J., Chen, S. (2024). CellTrack: Deep Learning for Single-Cell Trajectory Analysis. Nature Communications, 15, 1234.",
      "Liu, J., et al. (2023). Identifying Rare Cell Types Using Variational Autoencoders. Bioinformatics, 39(16), 2789-2797."
    ],
    awards: [
      "Best Poster Presentation - X-Meeting (2023)",
      "PhD Scholarship CNPq (2021-2025)"
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
    bio: "David focuses on applying graph-based machine learning to biological networks. His work involves developing new algorithms for protein-protein interaction prediction and metabolic pathway analysis.",
    email: "david.kim@liia.edu.br",
    researchInterests: [
      "Biological Networks",
      "Protein-Protein Interactions",
      "Graph Machine Learning",
      "Metabolic Pathways",
      "Network Biology"
    ],
    education: [
      "PhD in Computer Science - UNICAMP (ongoing, 2022-present)",
      "MSc in Bioinformatics - UFMG (2022)",
      "BSc in Computer Science - UFSC (2020)"
    ],
    publications: [
      "Kim, D., Rodriguez, M., Chen, S. (2024). ProteinNet: Graph-Based Protein Interaction Prediction. Molecular Systems Biology, 20(3), 145-162.",
      "Kim, D., Liu, J. (2023). Network Analysis of Metabolic Pathways Using Graph Neural Networks. BMC Bioinformatics, 24, 289."
    ],
    awards: [
      "PhD Scholarship FAPESP (2022-2026)",
      "Young Talent Award - SBC (2023)"
    ],
    socialLinks: {
      linkedin: "https://linkedin.com/in/david-kim-cs"
    }
  }
];