import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const Research = () => {
  const researchLines = [
    {
      title: "Computational Genomics",
      description: "Advanced algorithms for genome analysis, variant calling, and genomic data interpretation using machine learning approaches.",
      technologies: ["Python", "R", "GATK", "BWA", "SAMtools", "Bioconductor"]
    },
    {
      title: "Immunooncology Data Analysis",
      description: "Computational methods for analyzing immune responses in cancer, biomarker discovery, and treatment response prediction.",
      technologies: ["Single-cell RNA-seq", "Flow cytometry", "Immunogenomics", "TCR/BCR analysis"]
    },
    {
      title: "Machine Learning in Biology",
      description: "Deep learning and AI applications for biological data interpretation, drug discovery, and precision medicine.",
      technologies: ["TensorFlow", "PyTorch", "Scikit-learn", "Neural Networks", "NLP"]
    },
    {
      title: "Systems Biology",
      description: "Network analysis, pathway modeling, and multi-omics integration to understand complex biological systems.",
      technologies: ["Cytoscape", "KEGG", "Reactome", "Multi-omics", "Network analysis"]
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
              Research Lines
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Our interdisciplinary research combines computational methods with biological insights to advance understanding in immunooncology and artificial intelligence applications.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {researchLines.map((research, index) => (
              <Card key={index} className="shadow-card hover:shadow-elegant transition-all duration-300">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-semibold mb-4 text-foreground">
                    {research.title}
                  </h3>
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {research.description}
                  </p>
                  <div className="space-y-2">
                    <h4 className="font-medium text-foreground">Key Technologies:</h4>
                    <div className="flex flex-wrap gap-2">
                      {research.technologies.map((tech, techIndex) => (
                        <span 
                          key={techIndex}
                          className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Button asChild size="lg" className="hover-scale">
              <Link to="/research" className="flex items-center gap-2">
                Ver Todos os Projetos
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Research;