import { Card, CardContent } from "@/components/ui/card";
import { memo } from 'react';
import {
  getActiveCollaborations,
  getPastCollaborations,
  type Collaboration,
} from "@/utils/collaborationsUtils";

interface CollaborationsRendererProps {
  content: string;
  className?: string;
}

const CollaborationCard = ({ collab }: { collab: Collaboration }) => (
  <Card className="shadow-card h-full">
    <CardContent className="p-6 space-y-3">
      <h4 className="font-semibold text-primary">{collab.name}</h4>
      <div className="text-sm text-muted-foreground space-y-1">
        {collab.location && (
          <div><strong className="text-foreground">Location:</strong> {collab.location}</div>
        )}
        {collab.type && (
          <div><strong className="text-foreground">Type:</strong> {collab.type}</div>
        )}
        {collab.focus && (
          <div><strong className="text-foreground">Focus:</strong> {collab.focus}</div>
        )}
        {collab.duration && (
          <div><strong className="text-foreground">Duration:</strong> {collab.duration}</div>
        )}
        {collab.principalInvestigator && (
          <div><strong className="text-foreground">PI:</strong> {collab.principalInvestigator}</div>
        )}
        {collab.website && (
          <div>
            <strong className="text-foreground">Website:</strong>{" "}
            <a href={collab.website} target="_blank" rel="noreferrer" className="text-primary hover:underline">
              {collab.website.replace(/^https?:\/\//, '')}
            </a>
          </div>
        )}
      </div>
      {collab.description && (
        <p className="text-foreground">{collab.description}</p>
      )}
      {collab.keyProjects && collab.keyProjects.length > 0 && (
        <div>
          <p className="font-medium text-foreground mb-1">Key Projects:</p>
          <ul className="list-disc ml-5 text-sm text-muted-foreground space-y-1">
            {collab.keyProjects.map((p, i) => <li key={i}>{p}</li>)}
          </ul>
        </div>
      )}
    </CardContent>
  </Card>
);

const CollaborationsRenderer = memo(({ content, className = "" }: CollaborationsRendererProps) => {
  const extractSection = (title: string) => {
    const regex = new RegExp(`## ${title}[\\s\\S]*?(?=\n## [^#]|$)`);
    const match = content.match(regex);
    return match ? match[0] : '';
  };

  const impactSection = extractSection('Partnership Impact');
  const opportunitiesSection = extractSection('Partnership Opportunities');

  const activeCollabs = getActiveCollaborations();
  const pastCollabs = getPastCollaborations();

  const impactItems = Array.from(impactSection.matchAll(/- \*\*(.+?)\*\*\s*(.+)/g)).map(m => ({
    metric: m[1],
    description: m[2].trim()
  }));

  const opportunities = opportunitiesSection.match(/- .*[^\n]*/g) || [];
  const contact = opportunitiesSection.match(/\*\*Contact\*\*: (.+)/)?.[1]?.trim() || '';

  return (
    <div className={className}>
      {impactItems.length > 0 && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {impactItems.map((item, idx) => (
            <Card key={idx} className="shadow-card text-center">
              <CardContent className="p-6">
                <div className="text-3xl font-bold text-primary mb-2">{item.metric}</div>
                <div className="text-sm text-muted-foreground">{item.description}</div>
              </CardContent>
            </Card>
          ))}
        </div>
      )}

      {activeCollabs.length > 0 && (
        <section className="mb-16">
          <h3 className="text-2xl font-semibold mb-6 text-foreground">Active Collaborations</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {activeCollabs.map((collab, idx) => (
              <CollaborationCard key={idx} collab={collab} />
            ))}
          </div>
        </section>
      )}

      {pastCollabs.length > 0 && (
        <section className="mb-16">
          <h3 className="text-2xl font-semibold mb-6 text-foreground">Past Collaborations</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {pastCollabs.map((collab, idx) => (
              <CollaborationCard key={idx} collab={collab} />
            ))}
          </div>
        </section>
      )}

      {opportunities.length > 0 && (
        <section className="mb-16">
          <h3 className="text-2xl font-semibold mb-6 text-foreground">Partnership Opportunities</h3>
          <ul className="list-disc ml-6 space-y-2 text-foreground">
            {opportunities.map((opp, idx) => {
              const match = opp.match(/- \*\*([^*]+)\*\*: (.+)/);
              return (
                <li key={idx}>
                  {match ? (
                    <><strong>{match[1]}:</strong> {match[2]}</>
                  ) : (
                    opp.replace(/^- /, '')
                  )}
                </li>
              );
            })}
          </ul>
          {contact && (
            <p className="mt-4 text-muted-foreground">{contact}</p>
          )}
        </section>
      )}
    </div>
  );
});

CollaborationsRenderer.displayName = 'CollaborationsRenderer';

export default CollaborationsRenderer;
