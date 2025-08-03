import Header from "@/components/Header";
import Footer from "@/components/Footer";
import MarkdownRenderer from "@/components/MarkdownRenderer";
import { getResourcesContent } from "@/utils/contentUtils";

const Resources = () => {
  const content = getResourcesContent();

  if (!content) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <main className="pt-20 flex items-center justify-center min-h-[60vh]">
          <p className="text-muted-foreground">Content not found.</p>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-r from-primary/10 to-accent/10">
          <div className="container mx-auto px-4">
            <div className="text-center">
              <h1 className="text-5xl font-bold mb-6 text-foreground">
                Research <span className="text-primary">Resources & Tools</span>
              </h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                {content.description}
              </p>
            </div>
          </div>
        </section>

        {/* Content Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <MarkdownRenderer content={content.content} />
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Resources;