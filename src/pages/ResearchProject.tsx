import { useParams, Link } from "react-router-dom";
import { ArrowLeft, Calendar, DollarSign, Users, Beaker, BookOpen, Award } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import MarkdownRenderer from "@/components/MarkdownRenderer";
import { researchProjects } from "@/data/researchProjects";
import { teamMembers } from "@/data/teamMembers";
import NotFound from "./NotFound";

const ResearchProject = () => {
  const { id } = useParams<{ id: string }>();
  const project = researchProjects.find(p => p.id === id);

  if (!project) {
    return <NotFound />;
  }

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

  const projectTeam = teamMembers.filter(member => project.team.includes(member.id));

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-20">
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              {/* Back Button */}
              <div className="mb-8">
                <Button asChild variant="ghost" className="hover-scale">
                  <Link to="/research" className="flex items-center gap-2">
                    <ArrowLeft className="h-4 w-4" />
                    Back to Projects
                  </Link>
                </Button>
              </div>

              {/* Project Header */}
              <div className="bg-gradient-subtle rounded-2xl p-8 mb-8 shadow-elegant">
                <div className="flex flex-col lg:flex-row gap-8">
                  <div className="flex-1">
                    <div className="flex items-start gap-4 mb-4">
                      <h1 className="text-4xl md:text-5xl font-bold text-foreground flex-1">
                        {project.title}
                      </h1>
                      <Badge className={`${getStatusColor(project.status)} flex-shrink-0`}>
                        {getStatusText(project.status)}
                      </Badge>
                    </div>
                    <p className="text-xl text-muted-foreground leading-relaxed">
                      {project.description}
                    </p>
                  </div>
                </div>
              </div>

              {/* Project Details Grid */}
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">
                {/* Timeline */}
                <Card className="shadow-card hover:shadow-elegant transition-shadow animate-fade-in">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Calendar className="h-5 w-5 text-primary" />
                      Timeline
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2">
                      <div className="text-sm">
                        <span className="text-muted-foreground">Start:</span>
                        <div className="font-medium">
                          {new Date(project.startDate).toLocaleDateString('pt-BR', { 
                            year: 'numeric', 
                            month: 'long' 
                          })}
                        </div>
                      </div>
                      {project.endDate && (
                        <div className="text-sm">
                          <span className="text-muted-foreground">Expected completion:</span>
                          <div className="font-medium">
                            {new Date(project.endDate).toLocaleDateString('pt-BR', { 
                              year: 'numeric', 
                              month: 'long' 
                            })}
                          </div>
                        </div>
                      )}
                    </div>
                  </CardContent>
                </Card>

                {/* Funding */}
                <Card className="shadow-card hover:shadow-elegant transition-shadow animate-fade-in">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <DollarSign className="h-5 w-5 text-primary" />
                      Funding
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {project.funding}
                    </p>
                  </CardContent>
                </Card>

                {/* Team Size */}
                <Card className="shadow-card hover:shadow-elegant transition-shadow animate-fade-in">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Users className="h-5 w-5 text-primary" />
                      Team
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold text-primary mb-1">
                      {project.team.length}
                    </div>
                    <div className="text-sm text-muted-foreground">
                      researchers involved
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Main Content */}
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* Full Description */}
                <div className="lg:col-span-2">
                  <Card className="shadow-card hover:shadow-elegant transition-shadow animate-fade-in">
                    <CardHeader>
                      <CardTitle>Detailed Description</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="prose prose-lg max-w-none dark:prose-invert">
                        <MarkdownRenderer content={project.fullDescription} />
                      </div>
                    </CardContent>
                  </Card>
                </div>

                {/* Sidebar */}
                <div className="space-y-6">
                  {/* Team Members */}
                  <Card className="shadow-card hover:shadow-elegant transition-shadow animate-fade-in">
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <Users className="h-5 w-5 text-primary" />
                        Project Team
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-3">
                        {projectTeam.map((member) => (
                          <Link 
                            key={member.id} 
                            to={`/people/${member.id}`}
                            className="flex items-center gap-3 p-3 rounded-lg border border-border hover:bg-muted/50 transition-colors group"
                          >
                            <img 
                              src={member.image} 
                              alt={member.name}
                              className="w-10 h-10 rounded-full object-cover"
                            />
                            <div className="flex-1">
                              <div className="font-medium text-sm group-hover:text-primary transition-colors">
                                {member.name}
                              </div>
                              <div className="text-xs text-muted-foreground">
                                {member.position}
                              </div>
                            </div>
                          </Link>
                        ))}
                      </div>
                    </CardContent>
                  </Card>

                  {/* Technologies */}
                  <Card className="shadow-card hover:shadow-elegant transition-shadow animate-fade-in">
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <Beaker className="h-5 w-5 text-primary" />
                        Technologies
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.map((tech, index) => (
                          <Badge key={index} variant="secondary" className="text-xs">
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </CardContent>
                  </Card>

                  {/* Collaborators */}
                  <Card className="shadow-card hover:shadow-elegant transition-shadow animate-fade-in">
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <Award className="h-5 w-5 text-primary" />
                        Collaborators
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2">
                        {project.collaborators.map((collaborator, index) => (
                          <li key={index} className="text-sm text-muted-foreground">
                            {collaborator}
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>

                  {/* Publications */}
                  {project.publications.length > 0 && (
                    <Card className="shadow-card hover:shadow-elegant transition-shadow animate-fade-in">
                      <CardHeader>
                        <CardTitle className="flex items-center gap-2">
                          <BookOpen className="h-5 w-5 text-primary" />
                          Publications
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-3">
                          {project.publications.map((pub, index) => (
                            <div key={index} className="p-3 border border-border rounded-lg bg-muted/30">
                              <p className="text-xs text-foreground leading-relaxed">
                                {pub}
                              </p>
                            </div>
                          ))}
                        </div>
                      </CardContent>
                    </Card>
                  )}
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default ResearchProject;