import PageLayout from "@/components/layout/PageLayout";
import SectionLayout from "@/components/layout/SectionLayout";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { getResourcesContent } from "@/utils/contentUtils";

const Resources = () => {
  const content = getResourcesContent();

  if (!content) {
    return (
      <PageLayout>
        <SectionLayout className="py-20">
          <div className="text-center">
            <h1 className="text-4xl font-bold mb-4">Resources</h1>
            <p className="text-muted-foreground">Content not found.</p>
          </div>
        </SectionLayout>
      </PageLayout>
    );
  }

  interface ResourceItem {
    name: string;
    description: string;
    metadata: string[];
    links?: { label: string; url: string }[];
  }

  const softwareTools: ResourceItem[] = [
    {
      name: "NeoantigenAI",
      description:
        "Deep learning tool for tumor neoantigen immunogenicity prediction with state-of-the-art accuracy. Features pre-trained models, custom training pipeline, clinical integration readiness, and multi-HLA support.",
      metadata: [
        "Category: AI Models",
        "Language: Python",
        "License: MIT",
        "Downloads: 50,000+",
        "GitHub Stars: 1,200",
        "Last Updated: 2024-12-10",
      ],
      links: [
        { label: "GitHub", url: "https://github.com/liia-lab/neoantigen-ai" },
        { label: "Documentation", url: "https://neoantigen-ai.readthedocs.io" },
      ],
    },
    {
      name: "ImmunoPathways",
      description:
        "Cancer immunotherapy pathway analysis and biomarker discovery tool for multi-omics data. Includes pathway visualization, statistical analysis, and biomarker identification.",
      metadata: [
        "Category: Analysis Tools",
        "Language: R/Python",
        "License: GPL-3.0",
        "Downloads: 20,000+",
        "GitHub Stars: 850",
        "Last Updated: 2024-11-25",
      ],
      links: [
        { label: "GitHub", url: "https://github.com/liia-lab/immuno-pathways" },
        { label: "Documentation", url: "https://immuno-pathways.readthedocs.io" },
      ],
    },
    {
      name: "scRNA-Immune",
      description:
        "Single-cell RNA sequencing analysis pipeline specialized for immune cell profiling in cancer, featuring cell annotation, trajectory analysis, and visualization tools.",
      metadata: [
        "Category: Genomics",
        "Language: Python/R",
        "License: Apache-2.0",
        "Downloads: 25,000+",
        "GitHub Stars: 950",
        "Last Updated: 2024-12-05",
      ],
      links: [
        { label: "GitHub", url: "https://github.com/liia-lab/scrna-immune" },
        { label: "Documentation", url: "https://scrna-immune.readthedocs.io" },
      ],
    },
    {
      name: "DrugTargetAI",
      description:
        "AI-powered drug-target interaction prediction platform for cancer immunotherapy compounds, including virtual screening and drug repurposing capabilities.",
      metadata: [
        "Category: Drug Discovery",
        "Language: Python",
        "License: MIT",
        "Downloads: 8,000+",
        "GitHub Stars: 420",
        "Last Updated: 2024-11-30",
      ],
      links: [
        { label: "GitHub", url: "https://github.com/liia-lab/drug-target-ai" },
        { label: "Documentation", url: "https://drug-target-ai.readthedocs.io" },
      ],
    },
    {
      name: "CRISPR-ImmunoScreen",
      description:
        "Machine learning framework for CRISPR guide design and screen analysis in immunooncology research.",
      metadata: [
        "Category: CRISPR Analysis",
        "Language: Python/R",
        "License: MIT",
        "Downloads: 12,000+",
        "GitHub Stars: 650",
        "Last Updated: 2024-11-20",
      ],
      links: [
        { label: "GitHub", url: "https://github.com/liia-lab/crispr-immunoscreen" },
        { label: "Documentation", url: "https://crispr-immunoscreen.readthedocs.io" },
      ],
    },
  ];

  const datasets: ResourceItem[] = [
    {
      name: "LIIA Cancer Immunogenomics Dataset",
      description:
        "Comprehensive multi-omics dataset of cancer samples with immune profiling and clinical outcomes.",
      metadata: [
        "Size: 2.5 TB",
        "Samples: 5,247",
        "Access: Controlled",
        "Downloads: 1,200+",
        "Citations: 150+",
        "DOI: 10.5281/zenodo.1234567",
      ],
      links: [
        { label: "DOI", url: "https://doi.org/10.5281/zenodo.1234567" },
      ],
    },
    {
      name: "Neoantigen Prediction Benchmark",
      description:
        "Curated dataset for benchmarking neoantigen prediction algorithms with experimental validation.",
      metadata: [
        "Size: 45 GB",
        "Samples: 2,100",
        "Access: Open",
        "Downloads: 3,500+",
        "Citations: 280+",
        "DOI: 10.5281/zenodo.2345678",
      ],
      links: [
        { label: "DOI", url: "https://doi.org/10.5281/zenodo.2345678" },
      ],
    },
    {
      name: "Immune Repertoire Atlas",
      description:
        "Large-scale T-cell and B-cell receptor sequencing data from cancer patients across multiple tumor types.",
      metadata: [
        "Size: 1.8 TB",
        "Samples: 8,900",
        "Access: Controlled",
        "Downloads: 800+",
        "Citations: 95+",
        "DOI: 10.5281/zenodo.3456789",
      ],
      links: [
        { label: "DOI", url: "https://doi.org/10.5281/zenodo.3456789" },
      ],
    },
    {
      name: "Cancer Cell Line Immunoprofiles",
      description:
        "Comprehensive immune profiling of cancer cell lines including response to immunomodulatory compounds.",
      metadata: [
        "Size: 120 GB",
        "Samples: 1,500",
        "Access: Open",
        "Downloads: 2,800+",
        "Citations: 180+",
        "DOI: 10.5281/zenodo.4567890",
      ],
      links: [
        { label: "DOI", url: "https://doi.org/10.5281/zenodo.4567890" },
      ],
    },
  ];

  const documentation: ResourceItem[] = [
    {
      name: "Computational Immunooncology Handbook",
      description:
        "Comprehensive guide to computational methods in cancer immunology research, from data preprocessing to advanced AI models.",
      metadata: [
        "Type: Tutorial",
        "Chapters: 12",
        "Read Time: 8 hours",
        "Downloads: 15,000+",
        "Last Updated: 2024-12-01",
      ],
    },
    {
      name: "AI Model Development Guide",
      description:
        "Best practices for developing and validating AI models for cancer research, including ethical guidelines and clinical validation.",
      metadata: [
        "Type: Best Practices",
        "Chapters: 8",
        "Read Time: 4 hours",
        "Downloads: 8,500+",
        "Last Updated: 2024-11-15",
      ],
    },
    {
      name: "Multi-omics Integration Protocols",
      description:
        "Step-by-step protocols for integrating genomics, transcriptomics, and proteomics data in cancer immunology research.",
      metadata: [
        "Type: Protocol",
        "Chapters: 6",
        "Read Time: 3 hours",
        "Downloads: 6,200+",
        "Last Updated: 2024-10-20",
      ],
    },
    {
      name: "Clinical Data Analysis Workflows",
      description:
        "Standardized workflows for analyzing clinical trial data and real-world evidence in cancer immunotherapy.",
      metadata: [
        "Type: Workflow",
        "Chapters: 10",
        "Read Time: 6 hours",
        "Downloads: 4,100+",
        "Last Updated: 2024-10-15",
      ],
    },
  ];

  const webApps: ResourceItem[] = [
    {
      name: "ImmunoViz",
      description:
        "Interactive platform for visualizing immune system data and cancer-immune interactions.",
      metadata: [
        "Type: Visualization Platform",
        "Users: 10,000+ registered",
      ],
      links: [{ label: "Launch", url: "https://immunoviz.liia.edu.br" }],
    },
    {
      name: "NeoPredictWeb",
      description:
        "Online neoantigen prediction service with a user-friendly interface for researchers worldwide.",
      metadata: [
        "Type: Prediction Service",
        "Predictions: 100,000+ completed",
      ],
      links: [{ label: "Launch", url: "https://neopredict.liia.edu.br" }],
    },
  ];

  return (
    <PageLayout>
      {/* Hero Section */}
      <SectionLayout className="py-20 bg-gradient-to-r from-primary/10 to-accent/10">
        <div className="text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            Research <span className="text-primary">Resources & Tools</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            {content.description}
          </p>
        </div>
      </SectionLayout>

      {/* Software Tools */}
      <SectionLayout className="py-20">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-foreground">Software Tools</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {softwareTools.map((tool) => (
              <Card key={tool.name} className="shadow-card h-full">
                <CardContent className="p-6 flex flex-col h-full">
                  <h3 className="text-xl font-semibold mb-2">{tool.name}</h3>
                  <p className="text-muted-foreground mb-4 flex-grow">
                    {tool.description}
                  </p>
                  <ul className="text-sm text-muted-foreground space-y-1 mb-4">
                    {tool.metadata.map((m, idx) => (
                      <li key={idx}>{m}</li>
                    ))}
                  </ul>
                  {tool.links && (
                    <div className="mt-auto flex flex-wrap gap-2">
                      {tool.links.map((link) => (
                        <Button
                          key={link.url}
                          variant="outline"
                          size="sm"
                          onClick={() => window.open(link.url, "_blank")}
                        >
                          {link.label}
                        </Button>
                      ))}
                    </div>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </SectionLayout>

      {/* Datasets */}
      <SectionLayout className="py-20 bg-muted/30">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-foreground">Datasets</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {datasets.map((dataset) => (
              <Card key={dataset.name} className="shadow-card h-full">
                <CardContent className="p-6 flex flex-col h-full">
                  <h3 className="text-xl font-semibold mb-2">{dataset.name}</h3>
                  <p className="text-muted-foreground mb-4 flex-grow">
                    {dataset.description}
                  </p>
                  <ul className="text-sm text-muted-foreground space-y-1 mb-4">
                    {dataset.metadata.map((m, idx) => (
                      <li key={idx}>{m}</li>
                    ))}
                  </ul>
                  {dataset.links && (
                    <div className="mt-auto flex flex-wrap gap-2">
                      {dataset.links.map((link) => (
                        <Button
                          key={link.url}
                          variant="outline"
                          size="sm"
                          onClick={() => window.open(link.url, "_blank")}
                        >
                          {link.label}
                        </Button>
                      ))}
                    </div>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </SectionLayout>

      {/* Documentation & Protocols */}
      <SectionLayout className="py-20">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-foreground">Documentation & Protocols</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {documentation.map((doc) => (
              <Card key={doc.name} className="shadow-card h-full">
                <CardContent className="p-6 flex flex-col h-full">
                  <h3 className="text-xl font-semibold mb-2">{doc.name}</h3>
                  <p className="text-muted-foreground mb-4 flex-grow">
                    {doc.description}
                  </p>
                  <ul className="text-sm text-muted-foreground space-y-1 mb-4">
                    {doc.metadata.map((m, idx) => (
                      <li key={idx}>{m}</li>
                    ))}
                  </ul>
                  {doc.links && (
                    <div className="mt-auto flex flex-wrap gap-2">
                      {doc.links.map((link) => (
                        <Button
                          key={link.url}
                          variant="outline"
                          size="sm"
                          onClick={() => window.open(link.url, "_blank")}
                        >
                          {link.label}
                        </Button>
                      ))}
                    </div>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </SectionLayout>

      {/* Web Applications */}
      <SectionLayout className="py-20 bg-muted/30">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-foreground">Web Applications</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {webApps.map((app) => (
              <Card key={app.name} className="shadow-card h-full">
                <CardContent className="p-6 flex flex-col h-full">
                  <h3 className="text-xl font-semibold mb-2">{app.name}</h3>
                  <p className="text-muted-foreground mb-4 flex-grow">
                    {app.description}
                  </p>
                  <ul className="text-sm text-muted-foreground space-y-1 mb-4">
                    {app.metadata.map((m, idx) => (
                      <li key={idx}>{m}</li>
                    ))}
                  </ul>
                  {app.links && (
                    <div className="mt-auto flex flex-wrap gap-2">
                      {app.links.map((link) => (
                        <Button
                          key={link.url}
                          variant="outline"
                          size="sm"
                          onClick={() => window.open(link.url, "_blank")}
                        >
                          {link.label}
                        </Button>
                      ))}
                    </div>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </SectionLayout>
    </PageLayout>
  );
};

export default Resources;