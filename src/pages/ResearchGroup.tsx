import Header from "@/components/Header";
import Footer from "@/components/Footer";
import MarkdownRenderer from "@/components/MarkdownRenderer";
import { getResearchGroupContent } from "@/utils/contentUtils";

const ResearchGroup = () => {
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
          <MarkdownRenderer content={researchGroupContent.content} />
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default ResearchGroup;