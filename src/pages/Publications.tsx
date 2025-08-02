import Header from "@/components/Header";
import Footer from "@/components/Footer";
import MarkdownRenderer from "@/components/MarkdownRenderer";
import { getPublicationsContent } from "@/utils/contentUtils";

const Publications = () => {
  const publicationsContent = getPublicationsContent();

  if (!publicationsContent) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <main className="pt-20">
          <div className="container mx-auto px-4 py-20">
            <div className="text-center">
              <h1 className="text-4xl font-bold mb-4">Publications</h1>
              <p className="text-muted-foreground">Publications content not found.</p>
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
      <main className="pt-20">
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16">
                <h1 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
                  All Publications
                </h1>
                <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                  Complete list of our research contributions to computational biology and machine learning.
                </p>
              </div>
              <MarkdownRenderer 
                content={publicationsContent.content} 
                type="publications-full"
              />
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Publications;