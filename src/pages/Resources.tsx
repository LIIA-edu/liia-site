import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Code, Database, BookOpen, Download, Star, ExternalLink, GitBranch, Users, Calendar } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Resources = () => {
  const softwareTools = [
    {
      name: "NeoantigenAI",
      description: "Deep learning tool for tumor neoantigen immunogenicity prediction with state-of-the-art accuracy",
      category: "AI Models",
      downloads: "50,000+",
      stars: "1,200",
      language: "Python",
      license: "MIT",
      lastUpdated: "2024-12-10",
      github: "https://github.com/liia-lab/neoantigen-ai",
      documentation: "https://neoantigen-ai.readthedocs.io",
      features: ["Pre-trained models", "Custom training pipeline", "Clinical integration ready", "Multi-HLA support"]
    },
    {
      name: "ImmunoPathways",
      description: "Cancer immunotherapy pathway analysis and biomarker discovery tool for multi-omics data",
      category: "Analysis Tools",
      downloads: "20,000+",
      stars: "850",
      language: "R/Python",
      license: "GPL-3.0",
      lastUpdated: "2024-11-25",
      github: "https://github.com/liia-lab/immuno-pathways",
      documentation: "https://immuno-pathways.readthedocs.io",
      features: ["Multi-omics integration", "Pathway visualization", "Statistical analysis", "Biomarker identification"]
    },
    {
      name: "scRNA-Immune",
      description: "Single-cell RNA sequencing analysis pipeline specialized for immune cell profiling in cancer",
      category: "Genomics",
      downloads: "25,000+",
      stars: "950",
      language: "Python/R",
      license: "Apache-2.0",
      lastUpdated: "2024-12-05",
      github: "https://github.com/liia-lab/scrna-immune",
      documentation: "https://scrna-immune.readthedocs.io",
      features: ["Immune cell annotation", "Trajectory analysis", "Tumor-immune interactions", "Visualization tools"]
    },
    {
      name: "DrugTargetAI",
      description: "AI-powered drug-target interaction prediction platform for cancer immunotherapy compounds",
      category: "Drug Discovery",
      downloads: "8,000+",
      stars: "420",
      language: "Python",
      license: "MIT",
      lastUpdated: "2024-11-30",
      github: "https://github.com/liia-lab/drug-target-ai",
      documentation: "https://drug-target-ai.readthedocs.io",
      features: ["Molecular fingerprinting", "Interaction scoring", "Virtual screening", "Drug repurposing"]
    }
  ];

  const datasets = [
    {
      name: "LIIA Cancer Immunogenomics Dataset",
      description: "Comprehensive multi-omics dataset of 5,000+ cancer samples with immune profiling and clinical outcomes",
      size: "2.5 TB",
      samples: "5,247",
      dataTypes: ["Genomics", "Transcriptomics", "Proteomics", "Clinical"],
      access: "Controlled",
      doi: "10.5281/zenodo.1234567",
      downloads: "1,200+",
      citations: "150+"
    },
    {
      name: "Neoantigen Prediction Benchmark",
      description: "Curated dataset for benchmarking neoantigen prediction algorithms with experimental validation",
      size: "45 GB",
      samples: "2,100",
      dataTypes: ["Genomics", "HLA typing", "Experimental validation"],
      access: "Open",
      doi: "10.5281/zenodo.2345678",
      downloads: "3,500+",
      citations: "280+"
    },
    {
      name: "Immune Repertoire Atlas",
      description: "Large-scale T-cell and B-cell receptor sequencing data from cancer patients across multiple tumor types",
      size: "1.8 TB",
      samples: "8,900",
      dataTypes: ["TCR-seq", "BCR-seq", "Clinical metadata"],
      access: "Controlled",
      doi: "10.5281/zenodo.3456789",
      downloads: "800+",
      citations: "95+"
    }
  ];

  const documentation = [
    {
      title: "Computational Immunooncology Handbook",
      description: "Comprehensive guide to computational methods in cancer immunology research",
      type: "Tutorial",
      chapters: 12,
      readTime: "8 hours",
      downloads: "15,000+",
      lastUpdated: "2024-12-01"
    },
    {
      title: "AI Model Development Guide",
      description: "Best practices for developing and validating AI models for cancer research",
      type: "Best Practices",
      chapters: 8,
      readTime: "4 hours",
      downloads: "8,500+",
      lastUpdated: "2024-11-15"
    },
    {
      title: "Multi-omics Integration Protocols",
      description: "Step-by-step protocols for integrating genomics, transcriptomics, and proteomics data",
      type: "Protocol",
      chapters: 6,
      readTime: "3 hours",
      downloads: "6,200+",
      lastUpdated: "2024-10-20"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-r from-primary/10 to-accent/10">
          <div className="container mx-auto px-4">
            <div className="text-center">
              <h1 className="text-5xl font-bold mb-6 text-foreground">
                Research <span className="text-primary">Resources & Tools</span>
              </h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Open-source tools, curated datasets, and comprehensive documentation to advance 
                computational immunooncology research. All resources are freely available to accelerate 
                scientific discovery and improve cancer patient outcomes.
              </p>
            </div>
          </div>
        </section>

        {/* Resources Tabs */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <Tabs defaultValue="software" className="w-full">
              <TabsList className="grid w-full grid-cols-3 mb-8">
                <TabsTrigger value="software" className="flex items-center gap-2">
                  <Code className="h-4 w-4" />
                  Software Tools
                </TabsTrigger>
                <TabsTrigger value="datasets" className="flex items-center gap-2">
                  <Database className="h-4 w-4" />
                  Datasets
                </TabsTrigger>
                <TabsTrigger value="documentation" className="flex items-center gap-2">
                  <BookOpen className="h-4 w-4" />
                  Documentation
                </TabsTrigger>
              </TabsList>

              {/* Software Tools Tab */}
              <TabsContent value="software">
                <div className="grid gap-6">
                  {softwareTools.map((tool, index) => (
                    <Card key={index} className="hover:shadow-lg transition-shadow">
                      <CardHeader>
                        <div className="flex items-start justify-between">
                          <div>
                            <CardTitle className="text-2xl mb-2">{tool.name}</CardTitle>
                            <CardDescription className="text-base mb-3">{tool.description}</CardDescription>
                            <div className="flex gap-2">
                              <Badge variant="default">{tool.category}</Badge>
                              <Badge variant="outline">{tool.language}</Badge>
                              <Badge variant="secondary">{tool.license}</Badge>
                            </div>
                          </div>
                          <div className="text-right text-sm text-muted-foreground">
                            <div className="flex items-center gap-1 mb-1">
                              <Download className="h-4 w-4" />
                              <span>{tool.downloads}</span>
                            </div>
                            <div className="flex items-center gap-1 mb-1">
                              <Star className="h-4 w-4" />
                              <span>{tool.stars}</span>
                            </div>
                            <div className="flex items-center gap-1">
                              <Calendar className="h-4 w-4" />
                              <span>{tool.lastUpdated}</span>
                            </div>
                          </div>
                        </div>
                      </CardHeader>
                      <CardContent>
                        <div className="grid md:grid-cols-2 gap-6">
                          <div>
                            <h4 className="font-semibold mb-3 text-accent">Key Features</h4>
                            <ul className="space-y-2">
                              {tool.features.map((feature, idx) => (
                                <li key={idx} className="flex items-center gap-2 text-sm">
                                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                                  <span>{feature}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                          <div className="flex flex-col gap-3">
                            <Button variant="default" className="group">
                              <GitBranch className="h-4 w-4 mr-2" />
                              View on GitHub
                              <ExternalLink className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                            </Button>
                            <Button variant="outline" className="group">
                              <BookOpen className="h-4 w-4 mr-2" />
                              Documentation
                              <ExternalLink className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                            </Button>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>

              {/* Datasets Tab */}
              <TabsContent value="datasets">
                <div className="grid gap-6">
                  {datasets.map((dataset, index) => (
                    <Card key={index} className="hover:shadow-lg transition-shadow">
                      <CardHeader>
                        <div className="flex items-start justify-between">
                          <div>
                            <CardTitle className="text-2xl mb-2">{dataset.name}</CardTitle>
                            <CardDescription className="text-base mb-3">{dataset.description}</CardDescription>
                            <div className="flex gap-2 flex-wrap">
                              {dataset.dataTypes.map((type, idx) => (
                                <Badge key={idx} variant="outline">{type}</Badge>
                              ))}
                              <Badge variant={dataset.access === "Open" ? "default" : "secondary"}>
                                {dataset.access} Access
                              </Badge>
                            </div>
                          </div>
                          <div className="text-right text-sm text-muted-foreground">
                            <div>Size: {dataset.size}</div>
                            <div>Samples: {dataset.samples}</div>
                            <div>Downloads: {dataset.downloads}</div>
                            <div>Citations: {dataset.citations}</div>
                          </div>
                        </div>
                      </CardHeader>
                      <CardContent>
                        <div className="flex items-center justify-between">
                          <div className="text-sm">
                            <span className="font-semibold">DOI:</span>
                            <span className="ml-2 text-muted-foreground">{dataset.doi}</span>
                          </div>
                          <div className="flex gap-3">
                            <Button variant="default" size="sm">
                              <Download className="h-4 w-4 mr-2" />
                              Access Dataset
                            </Button>
                            <Button variant="outline" size="sm">
                              View Details
                            </Button>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>

              {/* Documentation Tab */}
              <TabsContent value="documentation">
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {documentation.map((doc, index) => (
                    <Card key={index} className="hover:shadow-lg transition-shadow">
                      <CardHeader>
                        <div className="flex items-center gap-3 mb-2">
                          <div className="p-2 bg-primary/10 rounded-lg">
                            <BookOpen className="h-6 w-6 text-primary" />
                          </div>
                          <Badge variant="outline">{doc.type}</Badge>
                        </div>
                        <CardTitle className="text-xl">{doc.title}</CardTitle>
                        <CardDescription>{doc.description}</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-2 text-sm text-muted-foreground mb-4">
                          <div className="flex justify-between">
                            <span>Chapters:</span>
                            <span>{doc.chapters}</span>
                          </div>
                          <div className="flex justify-between">
                            <span>Read Time:</span>
                            <span>{doc.readTime}</span>
                          </div>
                          <div className="flex justify-between">
                            <span>Downloads:</span>
                            <span>{doc.downloads}</span>
                          </div>
                          <div className="flex justify-between">
                            <span>Updated:</span>
                            <span>{doc.lastUpdated}</span>
                          </div>
                        </div>
                        <div className="flex gap-2">
                          <Button size="sm" className="flex-1">
                            <Download className="h-4 w-4 mr-2" />
                            Download
                          </Button>
                          <Button variant="outline" size="sm" className="flex-1">
                            <BookOpen className="h-4 w-4 mr-2" />
                            Read Online
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </section>

        {/* Contributing Section */}
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="text-center">
              <h2 className="text-3xl font-bold mb-6">Contributing to Our Resources</h2>
              <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
                We welcome contributions from the scientific community. Help us improve existing tools, 
                contribute new datasets, or enhance our documentation.
              </p>
              <div className="flex gap-4 justify-center">
                <Button size="lg">
                  <Users className="h-4 w-4 mr-2" />
                  Contribution Guidelines
                </Button>
                <Button variant="outline" size="lg">
                  <ExternalLink className="h-4 w-4 mr-2" />
                  GitHub Organization
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Resources;