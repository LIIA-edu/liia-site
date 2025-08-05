import PageLayout from "@/components/layout/PageLayout";
import SectionLayout from "@/components/layout/SectionLayout";
import MarkdownRenderer from "@/components/MarkdownRenderer";
import { getCollaborationsContent } from "@/utils/contentUtils";

const Collaborations = () => {
  const content = getCollaborationsContent();

  if (!content) {
    return (
      <PageLayout>
        <SectionLayout className="py-20">
          <div className="text-center">
            <h1 className="text-4xl font-bold mb-4">Collaborations</h1>
            <p className="text-muted-foreground">Content not found.</p>
          </div>
        </SectionLayout>
      </PageLayout>
    );
  }

  return (
    <PageLayout>
      {/* Hero Section */}
      <SectionLayout className="py-20 bg-gradient-to-r from-primary/10 to-accent/10">
        <div className="text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            Global <span className="text-primary">Collaborations</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            {content.description}
          </p>
        </div>
      </SectionLayout>

      {/* Content Section */}
      <SectionLayout className="py-20">
        <div className="max-w-6xl mx-auto">
          <MarkdownRenderer content={content.content} />
        </div>
      </SectionLayout>
    </PageLayout>
  );
};

export default Collaborations;