import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";

const Publications = () => {
  const publications = [
    {
      title: "Machine Learning Approaches for Predicting Drug-Target Interactions in Cancer Genomics",
      authors: "Smith, J., Johnson, A., & Brown, M.",
      journal: "Nature Computational Biology",
      year: "2024",
      doi: "10.1038/s41467-024-12345-6",
      type: "Research Article",
      impact: "IF: 12.3",
      abstract: "We developed a novel machine learning framework for predicting drug-target interactions using multi-omics cancer data..."
    },
    {
      title: "Single-Cell RNA Sequencing Reveals Novel Cell States in Neurodegeneration",
      authors: "Smith, J., Wilson, K., Davis, L., & Thompson, R.",
      journal: "Cell Systems",
      year: "2024",
      doi: "10.1016/j.cels.2024.03.001",
      type: "Research Article",
      impact: "IF: 9.8",
      abstract: "Our comprehensive single-cell analysis identified previously unknown neuronal subtypes associated with disease progression..."
    },
    {
      title: "CRISPR-ML: A Machine Learning Pipeline for CRISPR Screen Analysis",
      authors: "Smith, J., Anderson, P., & Lee, S.",
      journal: "Bioinformatics",
      year: "2023",
      doi: "10.1093/bioinformatics/btac789",
      type: "Software Tool",
      impact: "IF: 6.9",
      abstract: "We present CRISPR-ML, an open-source pipeline that integrates statistical and machine learning methods..."
    },
    {
      title: "Evolutionary Analysis of Protein Function Using Deep Learning",
      authors: "Smith, J., Garcia, M., & White, T.",
      journal: "Molecular Biology and Evolution",
      year: "2023",
      doi: "10.1093/molbev/msac567",
      type: "Research Article",
      impact: "IF: 8.4",
      abstract: "This study introduces a deep learning framework for predicting protein functional evolution across species..."
    },
    {
      title: "Computational Methods in Modern Genomics: A Review",
      authors: "Smith, J. & Johnson, A.",
      journal: "Annual Review of Genomics and Human Genetics",
      year: "2023",
      doi: "10.1146/annurev-genom-123456",
      type: "Review",
      impact: "IF: 11.2",
      abstract: "We provide a comprehensive review of computational methods driving modern genomics research..."
    }
  ];

  return (
    <section id="publications" className="py-20 bg-gradient-subtle">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
              Publications & Research
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Peer-reviewed publications advancing computational biology and bioinformatics methodologies
            </p>
          </div>

          <div className="space-y-8">
            {publications.map((pub, index) => (
              <Card key={index} className="shadow-card hover:shadow-elegant transition-all duration-300">
                <CardHeader>
                  <div className="flex flex-wrap items-center justify-between gap-4 mb-2">
                    <div className="flex flex-wrap gap-2">
                      <Badge variant="outline">{pub.type}</Badge>
                      <Badge variant="secondary">{pub.year}</Badge>
                      <Badge variant="outline">{pub.impact}</Badge>
                    </div>
                    <Button variant="ghost" size="sm" className="text-primary">
                      <ExternalLink className="h-4 w-4 mr-2" />
                      DOI
                    </Button>
                  </div>
                  <CardTitle className="text-xl leading-tight mb-2">
                    {pub.title}
                  </CardTitle>
                  <CardDescription className="text-base">
                    <span className="font-medium">{pub.authors}</span>
                    <br />
                    <span className="text-primary font-medium">{pub.journal}</span> ({pub.year})
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground leading-relaxed">
                    {pub.abstract}
                  </p>
                  <div className="mt-4 text-sm text-muted-foreground">
                    DOI: {pub.doi}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button variant="outline" size="lg" className="px-8">
              View Complete CV
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Publications;