import MarkdownRenderer from "./MarkdownRenderer";
import { getAboutContent } from "@/utils/contentUtils";

const About = () => {
  const aboutContent = getAboutContent();

  if (!aboutContent) {
    return (
      <section id="about" className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <p className="text-muted-foreground">About content not found.</p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
              About
            </h2>
          </div>
          <MarkdownRenderer 
            content={aboutContent.content} 
            type="about"
          />
        </div>
      </div>
    </section>
  );
};

export default About;