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
    <CardContent className="p-6">
      <h4 className="font-semibold text-primary mb-3 text-lg">{collab.name}</h4>
      <dl className="space-y-1 text-sm text-foreground mb-4">
        <div><dt className="inline font-medium">Location: </dt><dd className="inline text-muted-foreground">{collab.location}</dd></div>
        <div><dt className="inline font-medium">Type: </dt><dd className="inline text-muted-foreground">{collab.type}</dd></div>
        <div><dt className="inline font-medium">Focus: </dt><dd className="inline text-muted-foreground">{collab.focus}</dd></div>
        <div><dt className="inline font-medium">Duration: </dt><dd className="inline text-muted-foreground">{collab.duration}</dd></div>
        {collab.principalInvestigator && (
          <div><dt className="inline font-medium">PI: </dt><dd className="inline text-muted-foreground">{collab.principalInvestigator}</dd></div>
        )}
        {collab.website && (
          <div>
            <dt className="inline font-medium">Website: </dt>
            <dd className="inline">
              <a href={collab.website} target="_blank" rel="noreferrer noopener" className="text-primary hover:underline">
                {collab.website}
              </a>
            </dd>
          </div>
        )}
      </dl>
      <p className="text-muted-foreground mb-4 leading-relaxed">{collab.description}</p>
      {collab.keyProjects && collab.keyProjects.length > 0 && (
        <div>
          <h5 className="font-medium text-foreground mb-2">Key Projects:</h5>
          <ul className="list-disc ml-5 space-y-1 text-sm text-muted-foreground">
            {collab.keyProjects.map((p) => <li key={p}>{p}</li>)}
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
            {activeCollabs.map((collab) => (
              <CollaborationCard key={collab.name} collab={collab} />
            ))}
          </div>
        </section>
      )}

      {pastCollabs.length > 0 && (
        <section className="mb-16">
          <h3 className="text-2xl font-semibold mb-6 text-foreground">Past Collaborations</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {pastCollabs.map((collab) => (
              <CollaborationCard key={collab.name} collab={collab} />
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
