import ReactMarkdown from 'react-markdown';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { memo } from 'react';

interface LaboratoryVisionRendererProps {
  content: string;
  className?: string;
}

const LaboratoryVisionRenderer = memo(({ content, className }: LaboratoryVisionRendererProps) => {
  // Split content into main vision and detailed sections
  const sections = content.split(/## /);
  const mainVision = sections[0] || '';
  const detailedSections = sections.slice(1);

  return (
    <div className={className}>
      {/* Main Vision Statement */}
      <div className="text-center mb-16">
        <ReactMarkdown
          components={{
            p: ({ children }) => (
              <div className="text-xl leading-relaxed text-foreground max-w-4xl mx-auto">
                {children}
              </div>
            ),
            strong: ({ children }) => (
              <strong className="font-semibold text-primary">
                {children}
              </strong>
            ),
            em: ({ children }) => (
              <em className="italic text-foreground">
                {children}
              </em>
            ),
          }}
        >
          {mainVision}
        </ReactMarkdown>
      </div>

      {/* Detailed Vision Cards */}
      {detailedSections.length > 0 && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {detailedSections.map((section, index) => {
            const lines = section.split('\n');
            const title = lines[0] || `Vision ${index + 1}`;
            const content = lines.slice(1).join('\n');

            const getCardIcon = (title: string) => {
              const lowerTitle = title.toLowerCase();
              if (lowerTitle.includes('mission') || lowerTitle.includes('purpose')) return '🎯';
              if (lowerTitle.includes('vision') || lowerTitle.includes('future')) return '🔬';
              if (lowerTitle.includes('values') || lowerTitle.includes('principles')) return '⭐';
              if (lowerTitle.includes('goals') || lowerTitle.includes('objectives')) return '🚀';
              if (lowerTitle.includes('research') || lowerTitle.includes('science')) return '🧬';
              if (lowerTitle.includes('innovation') || lowerTitle.includes('technology')) return '💡';
              return '📍';
            };

            return (
              <Card key={index} className="shadow-card hover:shadow-elegant transition-all duration-300">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-foreground">
                    <span className="text-2xl">{getCardIcon(title)}</span>
                    {title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ReactMarkdown
                    components={{
                      p: ({ children }) => (
                        <div className="text-base leading-relaxed text-muted-foreground mb-3">
                          {children}
                        </div>
                      ),
                      ul: ({ children }) => (
                        <ul className="list-disc ml-4 space-y-1">
                          {children}
                        </ul>
                      ),
                      li: ({ children }) => (
                        <li className="text-sm text-muted-foreground">
                          {children}
                        </li>
                      ),
                      strong: ({ children }) => (
                        <strong className="font-semibold text-foreground">
                          {children}
                        </strong>
                      ),
                      em: ({ children }) => (
                        <em className="italic text-foreground">
                          {children}
                        </em>
                      ),
                    }}
                  >
                    {content}
                  </ReactMarkdown>
                </CardContent>
              </Card>
            );
          })}
        </div>
      )}
    </div>
  );
});

LaboratoryVisionRenderer.displayName = 'LaboratoryVisionRenderer';

export default LaboratoryVisionRenderer;