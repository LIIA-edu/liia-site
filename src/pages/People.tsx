import { Link } from "react-router-dom";
import { ExternalLink } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import MarkdownRenderer from "@/components/MarkdownRenderer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { getResearchGroupContent } from "@/utils/contentUtils";
import { teamMembers } from "@/data/teamMembers";

const People = () => {
  const researchGroupContent = getResearchGroupContent();

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
              Nossa Equipe
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
              Conheça os pesquisadores que formam o LIIA - Laboratório de pesquisa em Imunooncologia e Inteligência Artificial.
            </p>
            
            {/* LIIA Description */}
            <div className="bg-gradient-subtle rounded-2xl p-8 mb-12 text-left">
              <h2 className="text-2xl font-bold mb-4 text-foreground">Sobre o LIIA</h2>
              <p className="text-muted-foreground leading-relaxed">
                O LIIA é um laboratório de pesquisa multidisciplinar que combina inteligência artificial, 
                biologia computacional e imunooncologia para desenvolver soluções inovadoras no combate ao câncer. 
                Nossa equipe trabalha na intersecção entre ciência da computação, biologia e medicina, 
                desenvolvendo algoritmos avançados de machine learning para análise de dados genômicos, 
                descoberta de biomarcadores e desenvolvimento de terapias personalizadas. Através de 
                colaborações nacionais e internacionais, buscamos transformar a pesquisa básica em 
                aplicações clínicas que beneficiem pacientes oncológicos.
              </p>
            </div>
          </div>

          {/* Team Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {teamMembers.map((member, index) => (
              <Card key={member.id} className="shadow-card hover:shadow-elegant transition-all duration-300 group animate-fade-in">
                <CardContent className="p-6 text-center">
                  <img 
                    src={member.image} 
                    alt={member.name}
                    className="w-32 h-32 rounded-full mx-auto mb-4 object-cover border-4 border-primary/20"
                  />
                  <h3 className="text-xl font-semibold text-foreground mb-1 group-hover:text-primary transition-colors">
                    {member.name}
                  </h3>
                  <p className="text-primary font-medium mb-3">
                    {member.position}
                  </p>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-4 line-clamp-3">
                    {member.bio}
                  </p>
                  <Button asChild className="w-full hover-scale">
                    <Link to={`/people/${member.id}`} className="flex items-center gap-2 justify-center">
                      Ver Perfil
                      <ExternalLink className="h-4 w-4" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Research Group Content */}
          {researchGroupContent && (
            <div className="bg-muted/30 rounded-2xl p-8">
              <MarkdownRenderer 
                content={researchGroupContent.content} 
                type="research-group"
              />
            </div>
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default People;