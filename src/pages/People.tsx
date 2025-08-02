import Header from "@/components/Header";
import Footer from "@/components/Footer";
import MarkdownRenderer from "@/components/MarkdownRenderer";
import { getResearchGroupContent } from "@/utils/contentUtils";

const People = () => {
  const researchGroupContent = getResearchGroupContent();

  if (!researchGroupContent) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <main className="pt-24 pb-16">
          <div className="container mx-auto px-4">
            <div className="text-center">
              <p className="text-muted-foreground">Research group content not found.</p>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
              Our People
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
              O LIIA (Laboratório de pesquisa em Imunooncologia e Inteligência Artificial) é um centro de pesquisa interdisciplinar dedicado ao desenvolvimento de métodos computacionais avançados para compreender sistemas biológicos complexos, com foco especial em imunooncologia e aplicações de inteligência artificial na medicina.
            </p>
          </div>
          <MarkdownRenderer 
            content={researchGroupContent.content} 
            type="research-group"
          />
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default People;