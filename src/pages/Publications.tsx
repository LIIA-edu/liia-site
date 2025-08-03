import PageLayout from "@/components/layout/PageLayout";
import SectionLayout from "@/components/layout/SectionLayout";
import MarkdownRenderer from "@/components/MarkdownRenderer";
import { getPublicationsContent } from "@/utils/contentUtils";

const Publications = () => {
  const publicationsContent = getPublicationsContent();

  if (!publicationsContent) {
    return (
      <PageLayout>
        <SectionLayout className="py-20">
          <div className="text-center">
            <h1 className="text-4xl font-bold mb-4">Publications</h1>
            <p className="text-muted-foreground">Publications content not found.</p>
          </div>
        </SectionLayout>
      </PageLayout>
    );
  }

  return (
    <PageLayout>
      <SectionLayout className="py-20">
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
      </SectionLayout>
    </PageLayout>
  );
};

export default Publications;