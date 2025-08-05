import { Button } from "@/components/ui/button";
import { Building2, Globe, Users, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import {
  activeCollaborations,
  collaborationIntro,
} from "@/data/collaborations";

const Collaborations = () => {
  const collaborationPreviews = activeCollaborations.slice(0, 3).map((collab, index) => ({
    name: collab.name,
    type: collab.type,
    focus: collab.focus,
    status: "Active",
    icon: [Building2, Users, Globe][index],
  }));

  const sectionTitle = "Global Collaborations";
  const sectionDescription = collaborationIntro;

  return (
    <section id="collaborations" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 text-foreground">
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