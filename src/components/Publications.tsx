import MarkdownRenderer from "./MarkdownRenderer";
import { getPublicationsContent } from "@/utils/contentUtils";
import SectionTitle from "@/components/SectionTitle";

const Publications = () => {
  const publicationsContent = getPublicationsContent();

  if (!publicationsContent) {
    return (
      <section id="publications" className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <p className="text-muted-foreground">Publications content not found.</p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="publications" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <SectionTitle>Publications</SectionTitle>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Our research contributions to computational biology and machine learning.
            </p>
          </div>
          <MarkdownRenderer
            content={publicationsContent.content}
            type="publications"
          />
        </div>
      </div>
    </section>
  );
};

export default Publications;