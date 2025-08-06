import { Button } from "@/components/ui/button";
import { Building2, Globe, Users, ArrowRight, type LucideIcon } from "lucide-react";
import { Link } from "react-router-dom";
import { getCollaborationsContent } from "@/utils/contentUtils";
import { useMemo } from "react";
import { Card, CardContent } from "@/components/ui/card";

const Collaborations = () => {
  const content = useMemo(() => getCollaborationsContent(), []);

  interface CollaborationPreview {
    name: string;
    type: string;
    focus: string;
    status: string;
    icon: LucideIcon;
  }

  const collaborationPreviews = useMemo<CollaborationPreview[]>(() => {
    if (!content) return [];
    const markdown = content.content;
    const section = markdown.split("## Active Collaborations")[1];
    if (!section) return [];

    const matches = [...section.matchAll(/### (.+)\n([\s\S]+?)(?=\n### |\n## |$)/g)];

    return matches.slice(0, 3).map((match) => {
      const name = match[1].trim();
      const body = match[2];
      const type = (body.match(/\*\*Type\*\*: (.+)/) || [])[1] || "";
      const focus = (body.match(/\*\*Focus\*\*: (.+)/) || [])[1] || "";

      let icon: LucideIcon = Building2;
      if (/Industry|International/i.test(type)) {
        icon = Globe;
      } else if (/Research/i.test(type)) {
        icon = Users;
      }

      return {
        name,
        type,
        focus,
        status: "Active",
        icon,
      };
    });
  }, [content]);

  if (!content) {
    return null;
  }

  // Extract title and description from content
  const sectionTitle = "Global Collaborations";
  const sectionDescription =
    content.description ||
    "Partnering with leading institutions and organizations worldwide to accelerate cancer immunotherapy research and bring AI-driven solutions to patients faster.";

  return (
    <section id="collaborations" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            {sectionTitle.split(' ').map((word, index) =>
              index === 1 ? <span key={index} className="text-primary">{word}</span> : word + ' '
            )}
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            {sectionDescription}
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {collaborationPreviews.map((collab, index) => {
            const IconComponent = collab.icon;
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
                    <span className="inline-flex items-center rounded-full bg-primary/10 px-2.5 py-0.5 text-xs font-medium text-primary">
                      {collab.status}
                    </span>
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{collab.name}</h3>
                  <p className="text-sm font-medium text-accent mb-3">{collab.type}</p>
                  <p className="text-muted-foreground">{collab.focus}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <div className="text-center">
          <Link to="/collaborations">
            <Button size="lg" className="group">
              View All Collaborations
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Collaborations;