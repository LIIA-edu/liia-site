import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Building2, Globe, Users, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const Collaborations = () => {
  const collaborations = [
    {
      name: "Stanford Cancer Institute",
      type: "Academic Partnership",
      focus: "Neoantigen Prediction Research",
      status: "Active",
      icon: Building2
    },
    {
      name: "MIT Computer Science",
      type: "Research Collaboration",
      focus: "AI Model Development",
      status: "Active",
      icon: Users
    },
    {
      name: "Genentech Inc.",
      type: "Industry Partnership",
      focus: "Drug Discovery Platform",
      status: "Active",
      icon: Globe
    }
  ];

  return (
    <section id="collaborations" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 text-foreground">
            Global <span className="text-primary">Collaborations</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Partnering with leading institutions and organizations worldwide to accelerate 
            cancer immunotherapy research and bring AI-driven solutions to patients faster.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {collaborations.map((collab, index) => {
            const IconComponent = collab.icon;
            return (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center gap-3 mb-2">
                    <div className="p-2 bg-primary/10 rounded-lg">
                      <IconComponent className="h-6 w-6 text-primary" />
                    </div>
                    <Badge variant="secondary">{collab.status}</Badge>
                  </div>
                  <CardTitle className="text-xl">{collab.name}</CardTitle>
                  <CardDescription className="text-sm font-medium text-accent">
                    {collab.type}
                  </CardDescription>
                </CardHeader>
                <CardContent>
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