import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import SectionTitle from "@/components/SectionTitle";
import { getResearchLines } from "@/utils/researchLinesUtils";

const Research = () => {
  const researchLines = getResearchLines();

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <SectionTitle>Research Lines</SectionTitle>
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
            <Button
              asChild
              size="lg"
              className="px-8 group transition-transform hover:scale-105"
            >
              <Link to="/research" className="flex items-center gap-2">
                View All Projects
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Research;