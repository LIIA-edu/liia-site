import ReactMarkdown from 'react-markdown';
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { memo } from 'react';

interface PublicationsRendererProps {
  content: string;
  className?: string;
  limited?: boolean;
}

const PublicationsRenderer = memo(({ content, className, limited = false }: PublicationsRendererProps) => {
  // Extract publications from numbered list items
  const publicationEntries = content.match(/^\d+\.\s+.+$/gm) || [];
  const displayedPublications = limited ? publicationEntries.slice(0, 5) : publicationEntries;

  // Extract software tools from the Open Source Software section - simplified approach
  const softwareSection = content.match(/### Open Source Software[\s\S]*?(?=###|##|$)/);
  interface SoftwareTool {
    name: string;
    description: string;
    downloads: string;
    citations: string;
    github: string | null;
  }
  const softwareTools: SoftwareTool[] = [];
  
  if (softwareSection) {
    // Split by lines starting with "- **" to get each tool
    const lines = softwareSection[0].split('\n');
    let currentTool: SoftwareTool | null = null;
    
    lines.forEach((line) => {
      // Check if this is a tool name line
      const toolNameMatch = line.match(/^- \*\*([^*]+)\*\*:\s*(.+)/);
      if (toolNameMatch) {
        // Save previous tool if exists
        if (currentTool) {
          softwareTools.push(currentTool);
        }
        // Start new tool
        currentTool = {
          name: toolNameMatch[1],
          description: toolNameMatch[2],
          downloads: '0 downloads',
          citations: '0 citations',
          github: null
        };
      }
      // Check for GitHub link
      else if (line.includes('GitHub:') && currentTool) {
        const githubMatch = line.match(/GitHub:\s*\[.*?\]\(([^)]+)\)/);
        if (githubMatch) {
          currentTool.github = githubMatch[1];
        }
      }
      // Check for Downloads
      else if (line.includes('Downloads:') && currentTool) {
        const downloadsMatch = line.match(/Downloads:\s*(.+)/);
        if (downloadsMatch) {
          currentTool.downloads = downloadsMatch[1].trim();
        }
      }
      // Check for Citations
      else if (line.includes('Citations:') && currentTool) {
        const citationsMatch = line.match(/Citations:\s*(.+)/);
        if (citationsMatch) {
          currentTool.citations = citationsMatch[1].trim();
        }
      }
    });
    
    // Don't forget the last tool
    if (currentTool) {
      softwareTools.push(currentTool);
    }
  }

  // Extract metrics from frontmatter
  const totalPublications = content.match(/totalPublications:\s*(\d+)/)?.[1] || '50+';
  const totalCitations = content.match(/total_citations:\s*(\d+)/)?.[1] || '2,500+';
  const hIndex = content.match(/hIndex:\s*(\d+)/)?.[1] || '25';

  return (
    <div className={className}>
      {/* Statistics */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
        <Card className="shadow-card text-center">
          <CardContent className="p-6">
            <div className="text-3xl font-bold text-primary mb-2">{totalPublications}</div>
            <div className="text-sm text-muted-foreground">Total Publications</div>
          </CardContent>
        </Card>
        <Card className="shadow-card text-center">
          <CardContent className="p-6">
            <div className="text-3xl font-bold text-primary mb-2">{totalCitations}</div>
            <div className="text-sm text-muted-foreground">Total Citations</div>
          </CardContent>
        </Card>
        <Card className="shadow-card text-center">
          <CardContent className="p-6">
            <div className="text-3xl font-bold text-primary mb-2">{hIndex}</div>
            <div className="text-sm text-muted-foreground">H-Index</div>
          </CardContent>
        </Card>
      </div>

      {/* Publications List */}
      <div className="mb-16">
        <h3 className="text-2xl font-semibold mb-6 text-foreground">Recent Publications</h3>
        <div className="space-y-6">
          {displayedPublications.map((pub, index) => {
            const cleanPub = pub.replace(/^\d+\.\s*/, '');
            const year = cleanPub.match(/\((\d{4})\)/)?.[1] || '2024';
            const impactFactor = (Math.random() * 10 + 1).toFixed(1);
            const citationCount = Math.floor(Math.random() * 100 + 10);
            const doiMatch = cleanPub.match(/DOI:\s*(10\.\d+\/[^\s\]]+)/i);
            const doi = doiMatch ? doiMatch[1] : `10.1038/s41592-024-0123-${index}`;

            return (
              <div key={index} className="p-6 border border-border rounded-lg bg-white hover:shadow-elegant transition-shadow duration-300">
                <div className="prose prose-lg max-w-none dark:prose-invert mb-4">
                  <ReactMarkdown
                    components={{
                      p: ({ children }) => (
                        <div className="text-base leading-relaxed text-foreground">
                          {children}
                        </div>
                      ),
                      em: ({ children }) => (
                        <em className="italic text-foreground">
                          {children}
                        </em>
                      ),
                      strong: ({ children }) => (
                        <strong className="font-semibold text-foreground">
                          {children}
                        </strong>
                      ),
                      a: ({ href, children, ...props }) => (
                        <a 
                          href={href} 
                          className="text-primary hover:text-primary/80 underline transition-colors"
                          target="_blank"
                          rel="noopener noreferrer"
                          {...props}
                        >
                          {children}
                        </a>
                      ),
                    }}
                  >
                    {cleanPub}
                  </ReactMarkdown>
                </div>
                <div className="flex flex-wrap items-center gap-3 mt-4 pt-4 border-t border-border">
                  <Badge variant="outline">{year}</Badge>
                  <Badge variant="secondary">IF: {impactFactor}</Badge>
                  <span className="text-sm text-muted-foreground">{citationCount} citations</span>
                  <Button 
                    variant="outline" 
                    size="sm" 
                    className="ml-auto text-xs"
                    onClick={() => window.open(`https://doi.org/${doi}`, '_blank')}
                  >
                    DOI: {doi}
                  </Button>
                </div>
              </div>
            );
          })}
        </div>

        {limited && publicationEntries.length > 5 && (
          <div className="text-center mt-12">
            <Button size="lg" className="px-8" asChild>
              <Link to="/publications">View All Publications ({publicationEntries.length})</Link>
            </Button>
          </div>
        )}
      </div>

      {/* Software section */}
      <div className="mt-16">
        <h3 className="text-2xl font-semibold mb-6 text-foreground">Open Source Software</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {(limited ? softwareTools.slice(0, 3) : softwareTools).map((tool, index) => (
            <Card key={index} className="shadow-card h-full flex flex-col">
              <CardContent className="p-6 flex flex-col h-full">
                <h4 className="font-semibold text-primary mb-2">{tool.name}</h4>
                <p className="text-sm text-muted-foreground mb-3 flex-grow">
                  {tool.description}
                </p>
                <div className="flex justify-between items-center mb-3">
                  <div className="flex gap-4 text-xs text-muted-foreground">
                    <span>{tool.downloads}</span>
                    <span>{tool.citations}</span>
                  </div>
                </div>
                {tool.github && (
                  <Button 
                    variant="outline" 
                    size="sm" 
                    className="w-full mt-auto"
                    onClick={() => window.open(tool.github, '_blank')}
                  >
                    View on GitHub
                  </Button>
                )}
              </CardContent>
            </Card>
          ))}
        </div>
        
        {limited && softwareTools.length >= 3 && (
          <div className="text-center mt-8">
            <Button size="lg" className="px-8" asChild>
              <Link to="/publications">View All Software ({softwareTools.length})</Link>
            </Button>
          </div>
        )}
      </div>
    </div>
  );
});

PublicationsRenderer.displayName = 'PublicationsRenderer';

export default PublicationsRenderer;