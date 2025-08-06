import MarkdownRenderer from "./MarkdownRenderer";
import { getLaboratoryVisionContent } from "@/utils/contentUtils";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const LaboratoryVision = () => {
  const visionContent = getLaboratoryVisionContent();

  if (!visionContent) {
    return (
      <section id="vision" className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <p className="text-muted-foreground">Laboratory vision content not found.</p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="vision" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-muted-foreground">
            Laboratory Vision
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Our mission and guiding principles in computational biology research.
          </p>
        </div>
          <MarkdownRenderer 
            content={visionContent.content} 
            type="laboratory-vision"
          />
          <div className="text-center mt-12">
            <Button
              size="lg"
              className="px-8 transition-transform hover:scale-105"
              asChild
            >
              <Link to="/people">Meet Our People</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LaboratoryVision;