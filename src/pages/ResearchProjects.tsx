import { Link } from "react-router-dom";
import { Calendar, Users, ExternalLink, Beaker } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { researchProjects } from "@/data/researchProjects";

const ResearchProjects = () => {
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
      case 'ongoing': return 'Em Andamento';
      case 'completed': return 'Concluído';
      case 'planned': return 'Planejado';
      default: return status;
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-20">
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16">
                <h1 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
                  Projetos de Pesquisa
                </h1>
                <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                  Nossos projetos de pesquisa abordam questões fundamentais em biologia computacional, 
                  inteligência artificial e medicina personalizada.
                </p>
              </div>

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
                          <span>{project.team.length} pesquisadores</span>
                        </div>
                        <div className="flex items-center gap-2 text-sm text-muted-foreground">
                          <Beaker className="h-4 w-4" />
                          <span>{project.technologies.slice(0, 3).join(', ')}</span>
                          {project.technologies.length > 3 && <span>+{project.technologies.length - 3} mais</span>}
                        </div>
                      </div>

                      {/* Publications Count */}
                      {project.publications.length > 0 && (
                        <div className="bg-muted/50 rounded-lg p-3">
                          <div className="text-sm text-muted-foreground">
                            <strong className="text-foreground">{project.publications.length}</strong> publicações relacionadas
                          </div>
                        </div>
                      )}

                      {/* Actions */}
                      <div className="flex gap-2 pt-2">
                        <Button asChild className="flex-1 hover-scale">
                          <Link to={`/research/${project.id}`} className="flex items-center gap-2 justify-center">
                            Ver Detalhes
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
                  Interessado em Colaborar?
                </h2>
                <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                  Estamos sempre abertos a novas colaborações e parcerias de pesquisa. 
                  Entre em contato para discutir oportunidades de trabalho conjunto.
                </p>
                <Button asChild size="lg" className="hover-scale">
                  <Link to="/#contact">
                    Entre em Contato
                  </Link>
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

export default ResearchProjects;