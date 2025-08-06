import { Button } from "@/components/ui/button";
import {
  Code,
  Database,
  BookOpen,
  ArrowRight,
  Download,
  Star,
  type LucideIcon,
} from "lucide-react";
import { Link } from "react-router-dom";
import { getResourcesContent } from "@/utils/contentUtils";
import { useMemo } from "react";
import { Card, CardContent } from "@/components/ui/card";
import SectionTitle from "@/components/SectionTitle";

const ResourcesTools = () => {
  const content = useMemo(() => getResourcesContent(), []);

  interface ToolPreview {
    name: string;
    category: string;
    description: string;
    downloads: string;
    stars: string;
    icon: LucideIcon;
  }

  const toolPreviews = useMemo<ToolPreview[]>(() => {
    if (!content) return [];
    const markdown = content.content;

    const extractPreview = (
      sectionTitle: string,
      icon: LucideIcon
    ): ToolPreview | null => {
      const section = markdown.split(`## ${sectionTitle}`)[1];
      if (!section) return null;
      const match = section.match(/### (.+)\n([\s\S]+?)(?=\n### |\n## |$)/);
      if (!match) return null;
      const name = match[1].trim();
      const body = match[2];
      const meta: Record<string, string> = {};
      body
        .split("\n")
        .filter((l) => l.startsWith("**"))
        .forEach((line) => {
          const m = line.match(/\*\*(.+?)\*\*: (.+)/);
          if (m) meta[m[1]] = m[2];
        });
      const descriptionMatch = body.match(/\n\n([^*][\s\S]+?)\n\n/);
      return {
        name,
        category: meta["Category"] || sectionTitle,
        description: descriptionMatch ? descriptionMatch[1].trim() : "",
        downloads: meta["Downloads"] || "",
        stars: meta["GitHub Stars"] || meta["Citations"] || "",
        icon,
      };
    };

    return [
      extractPreview("Software Tools", Code),
      extractPreview("Datasets", Database),
      extractPreview("Documentation & Protocols", BookOpen),
    ].filter((p): p is ToolPreview => Boolean(p));
  }, [content]);

  if (!content) {
    return null;
  }

  // Extract title and description from content
  const sectionTitle = "Research Resources & Tools";
  const sectionDescription =
    content.description ||
    "Open-source tools, datasets, and documentation to advance computational immunooncology research. All resources are freely available to the scientific community.";

  return (
    <section id="resources" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <SectionTitle>{sectionTitle}</SectionTitle>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            {sectionDescription}
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {toolPreviews.map((tool, index) => {
            const IconComponent = tool.icon;
            return (
              <Card
                key={index}
                className="shadow-card hover:shadow-elegant transition-shadow"
              >
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-2 bg-primary/10 rounded-lg">
                      <IconComponent className="h-6 w-6 text-primary" />
                    </div>
                    <span className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-medium text-muted-foreground">
                      {tool.category}
                    </span>
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{tool.name}</h3>
                  <p className="text-muted-foreground mb-4">{tool.description}</p>
                  <div className="flex items-center justify-between text-sm text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <Download className="h-4 w-4" />
                      <span>{tool.downloads}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Star className="h-4 w-4" />
                      <span>{tool.stars}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <div className="text-center">
          <Button
            asChild
            size="lg"
            className="px-8 group transition-transform hover:scale-105"
          >
            <Link to="/resources" className="flex items-center gap-2">
              Explore All Resources
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ResourcesTools;