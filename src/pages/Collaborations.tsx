import PageLayout from "@/components/layout/PageLayout";
import SectionLayout from "@/components/layout/SectionLayout";
import { Card, CardContent } from "@/components/ui/card";
import {
  activeCollaborations,
  pastCollaborations,
  collaborationIntro,
  partnershipImpact,
  partnershipOpportunities,
  partnershipContact,
} from "@/data/collaborations";

const Collaborations = () => {
  return (
    <PageLayout>
      {/* Hero Section */}
      <SectionLayout className="py-20 bg-gradient-to-r from-primary/10 to-accent/10">
        <div className="text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            Global <span className="text-primary">Collaborations</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            {collaborationIntro}
          </p>
        </div>
      </SectionLayout>

      {/* Active Collaborations */}
      <SectionLayout className="py-20">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-foreground">
            Active Collaborations
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {activeCollaborations.map((collab) => (
              <Card
                key={collab.name}
                className="shadow-card hover:shadow-elegant transition-all duration-300"
              >
                <CardContent className="p-6 space-y-4">
                  <div>
                    <h3 className="text-xl font-semibold text-foreground mb-1">
                      {collab.name}
                    </h3>
                    <p className="text-primary font-medium">{collab.type}</p>
                    <p className="text-sm text-muted-foreground">{collab.location}</p>
                  </div>
                  <p className="text-muted-foreground">{collab.description}</p>
                  <div className="text-sm text-muted-foreground space-y-1">
                    <p>
                      <span className="font-medium text-foreground">Focus:</span> {" "}
                      {collab.focus}
                    </p>
                    <p>
                      <span className="font-medium text-foreground">Duration:</span> {" "}
                      {collab.duration}
                    </p>
                    {collab.principalInvestigator && (
                      <p>
                        <span className="font-medium text-foreground">PI:</span> {" "}
                        {collab.principalInvestigator}
                      </p>
                    )}
                    {collab.website && (
                      <p>
                        <a
                          href={collab.website}
                          className="text-primary hover:underline"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          {collab.website}
                        </a>
                      </p>
                    )}
                  </div>
                  {collab.keyProjects && collab.keyProjects.length > 0 && (
                    <div>
                      <p className="font-medium text-foreground mt-4 mb-2">
                        Key Projects:
                      </p>
                      <ul className="list-disc list-inside text-muted-foreground space-y-1">
                        {collab.keyProjects.map((project) => (
                          <li key={project}>{project}</li>
                        ))}
                      </ul>
                    </div>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </SectionLayout>

      {/* Past Collaborations */}
      <SectionLayout className="py-20 bg-muted/30">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-foreground">
            Past Collaborations
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {pastCollaborations.map((collab) => (
              <Card
                key={collab.name}
                className="shadow-card hover:shadow-elegant transition-all duration-300"
              >
                <CardContent className="p-6 space-y-4">
                  <div>
                    <h3 className="text-xl font-semibold text-foreground mb-1">
                      {collab.name}
                    </h3>
                    <p className="text-primary font-medium">{collab.type}</p>
                    <p className="text-sm text-muted-foreground">{collab.location}</p>
                  </div>
                  <p className="text-muted-foreground">{collab.description}</p>
                  <div className="text-sm text-muted-foreground space-y-1">
                    <p>
                      <span className="font-medium text-foreground">Focus:</span> {" "}
                      {collab.focus}
                    </p>
                    <p>
                      <span className="font-medium text-foreground">Duration:</span> {" "}
                      {collab.duration}
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </SectionLayout>

      {/* Partnership Impact */}
      <SectionLayout className="py-20">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-8 text-foreground">
            Partnership Impact
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-left">
            {partnershipImpact.map((item) => (
              <div key={item} className="p-6 rounded-lg bg-gradient-subtle">
                <p className="text-foreground font-medium">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </SectionLayout>

      {/* Partnership Opportunities */}
      <SectionLayout className="py-20 bg-gradient-subtle">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6 text-foreground">
            Partnership Opportunities
          </h2>
          <ul className="text-left space-y-2 text-muted-foreground mb-8">
            {partnershipOpportunities.map((item) => (
              <li key={item} className="flex items-start">
                <span className="mr-2">•</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <p className="text-muted-foreground">
            Contact {partnershipContact.name} at{" "}
            <a
              href={`mailto:${partnershipContact.email}`}
              className="text-primary hover:underline"
            >
              {partnershipContact.email}
            </a>
          </p>
        </div>
      </SectionLayout>
    </PageLayout>
  );
};

export default Collaborations;

