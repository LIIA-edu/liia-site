import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Code, Database, BookOpen, ArrowRight, Download, Star } from "lucide-react";
import { Link } from "react-router-dom";

const ResourcesTools = () => {
  const tools = [
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

  return (
    <section id="resources" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 text-foreground">
            Research <span className="text-primary">Resources & Tools</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Open-source tools, datasets, and documentation to advance computational 
            immunooncology research. All resources are freely available to the scientific community.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {tools.map((tool, index) => {
            const IconComponent = tool.icon;
            return (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center gap-3 mb-2">
                    <div className="p-2 bg-primary/10 rounded-lg">
                      <IconComponent className="h-6 w-6 text-primary" />
                    </div>
                    <Badge variant="outline">{tool.category}</Badge>
                  </div>
                  <CardTitle className="text-xl">{tool.name}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="mb-4">
                    {tool.description}
                  </CardDescription>
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
                </CardContent>
              </Card>
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