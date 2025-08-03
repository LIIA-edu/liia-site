import { Button } from "@/components/ui/button";
import { Code, Database, BookOpen, ArrowRight, Download, Star } from "lucide-react";
import { Link } from "react-router-dom";
import { getResourcesContent } from "@/utils/contentUtils";
import { useMemo } from "react";

const ResourcesTools = () => {
  const content = useMemo(() => getResourcesContent(), []);
  
  if (!content) {
    return null;
  }

  // Extract preview information from markdown content
  const toolPreviews = [
    {
      name: "NeoantigenAI",
      category: "AI Models",
      description: "Deep learning tool for tumor neoantigen immunogenicity prediction",
      downloads: "50K+",
      stars: "1.2K",
      icon: Code
    },
    {
      name: "Cancer Genomics Dataset", 
      category: "Datasets",
      description: "Curated multi-omics cancer data with immune profiling",
      downloads: "25K+",
      stars: "850",
      icon: Database
    },
    {
      name: "Immunooncology Protocols",
      category: "Documentation", 
      description: "Comprehensive guides for computational immunology analysis",
      downloads: "15K+",
      stars: "600",
      icon: BookOpen
    }
  ];

  // Extract title and description from content
  const sectionTitle = "Research Resources & Tools";
  const sectionDescription = content.description || "Open-source tools, datasets, and documentation to advance computational immunooncology research. All resources are freely available to the scientific community.";

  return (
    <section id="resources" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 text-foreground">
            {sectionTitle.split(' ').slice(0, 1)} <span className="text-primary">{sectionTitle.split(' ').slice(1).join(' ')}</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            {sectionDescription}
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {toolPreviews.map((tool, index) => {
            const IconComponent = tool.icon;
            return (
              <div key={index} className="bg-card rounded-lg p-6 border hover:shadow-lg transition-shadow">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 bg-primary/10 rounded-lg">
                    <IconComponent className="h-6 w-6 text-primary" />
                  </div>
                  <span className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-medium text-muted-foreground">
                    {tool.category}
                  </span>
                </div>
                <h3 className="text-xl font-semibold mb-3">{tool.name}</h3>
                <p className="text-muted-foreground mb-4">{tool.description}</p>
                <div className="flex items-center justify-between text-sm text-muted-foreground">
                  <div className="flex items-center gap-1">
                    <Download className="h-4 w-4" />
                    <span>{tool.downloads}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Star className="h-4 w-4" />
                    <span>{tool.stars}</span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="text-center">
          <Link to="/resources">
            <Button size="lg" className="group">
              Explore All Resources
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ResourcesTools;