import ReactMarkdown from 'react-markdown';
import { Card, CardContent } from "@/components/ui/card";
import { memo } from 'react';

interface CollaborationsRendererProps {
  content: string;
  className?: string;
}

const CollaborationsRenderer = memo(({ content, className = "" }: CollaborationsRendererProps) => {
  const extractSection = (title: string) => {
    const regex = new RegExp(`## ${title}[\\s\\S]*?(?=##|$)`);
    const match = content.match(regex);
    return match ? match[0] : '';
  };

  const parseCollaborations = (section: string) => {
    const blocks = section.match(/###[^#][^\n]*[\s\S]*?(?=###|##|$)/g) || [];
    return blocks.map((block) => {
      const title = block.match(/###\s+([^\n]+)/)?.[1] || '';
      const body = block.replace(/###\s+[^\n]+\n?/, '');
      return { title, body };
    });
  };

  const activeSection = extractSection('Active Collaborations');
  const pastSection = extractSection('Past Collaborations');
  const impactSection = extractSection('Partnership Impact');
  const opportunitiesSection = extractSection('Partnership Opportunities');

  const activeCollabs = parseCollaborations(activeSection);
  const pastCollabs = parseCollaborations(pastSection);

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
              <Card key={idx} className="shadow-card h-full">
                <CardContent className="p-6">
                  <h4 className="font-semibold text-primary mb-4">{collab.title}</h4>
                  <div className="prose prose-lg dark:prose-invert">
                    <ReactMarkdown>{collab.body}</ReactMarkdown>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>
      )}

      {pastCollabs.length > 0 && (
        <section className="mb-16">
          <h3 className="text-2xl font-semibold mb-6 text-foreground">Past Collaborations</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {pastCollabs.map((collab, idx) => (
              <Card key={idx} className="shadow-card h-full">
                <CardContent className="p-6">
                  <h4 className="font-semibold text-primary mb-4">{collab.title}</h4>
                  <div className="prose prose-lg dark:prose-invert">
                    <ReactMarkdown>{collab.body}</ReactMarkdown>
                  </div>
                </CardContent>
              </Card>
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
