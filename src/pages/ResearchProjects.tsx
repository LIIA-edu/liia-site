import { Link } from "react-router-dom";
import { Calendar, Users, ExternalLink, Beaker } from "lucide-react";
import PageLayout from "@/components/layout/PageLayout";
import SectionLayout from "@/components/layout/SectionLayout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { getAllProjects } from "@/utils/projectUtils";

const ResearchProjects = () => {
  const researchProjects = getAllProjects();
  
  const getStatusColor = (status: string) => {
    switch (status) {
      case 'ongoing': return 'bg-green-500/20 text-green-700 border-green-500/30';
      case 'completed': return 'bg-blue-500/20 text-blue-700 border-blue-500/30';
      case 'planned': return 'bg-yellow-500/20 text-yellow-700 border-yellow-500/30';
      default: return 'bg-gray-500/20 text-gray-700 border-gray-500/30';
    }
  };

  const getStatusText = (status: string) => {
    switch (status) {
      case 'ongoing': return 'Ongoing';
      case 'completed': return 'Completed';
      case 'planned': return 'Planned';
      default: return status;
    }
  };

  return (
    <PageLayout>
      <SectionLayout className="py-20 bg-gradient-to-r from-primary/10 to-accent/10">
        <div className="text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            Research Projects
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Our research projects address fundamental questions in computational biology,
            artificial intelligence, and personalized medicine.
          </p>
        </div>
      </SectionLayout>

      <SectionLayout className="py-20">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {researchProjects.map((project, index) => (
              <Card key={project.id} className="shadow-card hover:shadow-elegant transition-all duration-300 group animate-fade-in">
                <CardHeader>
                  <div className="flex items-start justify-between gap-4">
                    <CardTitle className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors">
                      {project.title}
                    </CardTitle>
                    <Badge className={`${getStatusColor(project.status)} flex-shrink-0`}>
                      {getStatusText(project.status)}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground leading-relaxed">
                    {project.description}
                  </p>

                  {/* Project Info */}
                  <div className="space-y-2">
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Calendar className="h-4 w-4" />
                      <span>
                        {new Date(project.startDate).getFullYear()}
                        {project.endDate && ` - ${new Date(project.endDate).getFullYear()}`}
                      </span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Users className="h-4 w-4" />
                      <span>{project.team.length} researchers</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Beaker className="h-4 w-4" />
                      <span>{project.technologies.slice(0, 3).join(', ')}</span>
                      {project.technologies.length > 3 && <span>+{project.technologies.length - 3} more</span>}
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="flex gap-2 pt-2">
                    <Button asChild className="flex-1 hover-scale">
                      <Link to={`/research/${project.id}`} className="flex items-center gap-2 justify-center">
                        View Details
                        <ExternalLink className="h-4 w-4" />
                      </Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* CTA Section */}
          <div className="text-center mt-16 p-8 bg-gradient-subtle rounded-2xl">
            <h2 className="text-2xl font-bold mb-4 text-foreground">
              Interested in Collaborating?
            </h2>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              We are always open to new collaborations and research partnerships.
              Contact us to discuss joint work opportunities.
            </p>
            <Button asChild size="lg" className="hover-scale">
              <Link to="/#contact">
                Contact Us
              </Link>
            </Button>
          </div>
        </div>
      </SectionLayout>
    </PageLayout>
  );
};

export default ResearchProjects;