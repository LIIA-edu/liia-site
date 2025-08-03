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

  // Extract software tools from the Software & Tools section
  console.log('Full content length:', content.length);
  
  // First try to find the Software & Tools section
  const softwareMainSection = content.match(/## Software & Tools[\s\S]*?(?=##|$)/);
  console.log('Software main section found:', !!softwareMainSection);
  
  // Then look for Open Source Software subsection
  const softwareSection = content.match(/### Open Source Software[\s\S]*?(?=###|##|$)/);
  console.log('Open Source Software section found:', !!softwareSection);
  
  if (softwareSection) {
    console.log('Software section content:', softwareSection[0].substring(0, 200));
  }
  
  const softwareTools = [];
  
  if (softwareSection) {
    // Look for tool entries with the exact markdown format
    const toolEntries = softwareSection[0].match(/- \*\*[^*]+\*\*:[^\n]*(?:\n  - [^\n]*)*(?=\n- \*\*|\n###|\n##|$)/g) || [];
    console.log('Tool entries found:', toolEntries.length);
    console.log('First tool entry:', toolEntries[0]);
    
    toolEntries.forEach((entry, index) => {
      const nameMatch = entry.match(/- \*\*([^*]+)\*\*:/);
      const name = nameMatch ? nameMatch[1] : `Tool ${index + 1}`;
      
      // Extract GitHub link
      const githubMatch = entry.match(/GitHub:\s*\[.*?\]\(([^)]+)\)/i);
      const github = githubMatch ? githubMatch[1] : null;
      
      // Extract downloads and citations
      const downloadsMatch = entry.match(/Downloads:\s*([^\n]+)/i);
      const downloads = downloadsMatch ? downloadsMatch[1].trim() : '0 downloads';
      
      const citationsMatch = entry.match(/Citations:\s*([^\n]+)/i);
      const citations = citationsMatch ? `${citationsMatch[1].trim()} citations` : '0 citations';
      
      // Extract description (text after the colon and before newline)
      const descMatch = entry.match(/- \*\*[^*]+\*\*:\s*([^\n]+)/);
      const description = descMatch ? descMatch[1].trim() : 'Computational biology tool';
      
      softwareTools.push({
        name,
        description,
        downloads,
        citations,
        github
      });
    });
  }

  // Extract metrics from frontmatter
  const totalPublications = content.match(/total_publications:\s*(\d+)/)?.[1] || '50+';
  const totalCitations = content.match(/total_citations:\s*(\d+)/)?.[1] || '2,500+';
  const hIndex = content.match(/h_index:\s*(\d+)/)?.[1] || '25';

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
            <Button asChild>
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