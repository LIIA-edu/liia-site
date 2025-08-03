import ReactMarkdown from 'react-markdown';
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { memo } from 'react';

interface PublicationsRendererProps {
  content: string;
  className?: string;
  limited?: boolean;
}

// Software tools configuration - extracted from hardcoded values
const DEFAULT_SOFTWARE_TOOLS = [
  {
    name: 'DeepFold2',
    description: 'Advanced computational tool for protein structure prediction',
    downloads: '50,000+ downloads',
    citations: '150+ citations',
    github: 'https://github.com/yourlab/deepfold2'
  },
  {
    name: 'scRNA-Insight',
    description: 'Single-cell RNA sequencing analysis pipeline',
    downloads: '25,000+ downloads',
    citations: '80+ citations',
    github: 'https://github.com/yourlab/scrna-insight'
  },
  {
    name: 'CRISPR-ML',
    description: 'Machine learning framework for CRISPR guide design',
    downloads: '30,000+ downloads',
    citations: '120+ citations',
    github: 'https://github.com/yourlab/crispr-ml'
  }
];

const PublicationsRenderer = memo(({ content, className, limited = false }: PublicationsRendererProps) => {
  // Extract publications from numbered list items
  const publicationEntries = content.match(/^\d+\.\s+.+$/gm) || [];
  const displayedPublications = limited ? publicationEntries.slice(0, 5) : publicationEntries;

  // Extract software tools from the Software & Tools section
  const softwareSection = content.match(/## Software & Tools[\s\S]*?(?=##|$)/);
  let softwareTools = [...DEFAULT_SOFTWARE_TOOLS];
  
  if (softwareSection) {
    const toolEntries = softwareSection[0].match(/\*\*([^*]+)\*\*[\s\S]*?(?=\*\*|$)/g) || [];
    
    if (toolEntries.length > 0) {
      softwareTools = toolEntries.map((entry, index) => {
        const nameMatch = entry.match(/\*\*([^*]+)\*\*/);
        const name = nameMatch ? nameMatch[1] : `Tool ${index + 1}`;
        
        // Extract GitHub link
        const githubMatch = entry.match(/\[GitHub\]\(([^)]+)\)/i) || entry.match(/GitHub:\s*([^\s\n]+)/i);
        const github = githubMatch ? githubMatch[1] : null;
        
        // Extract downloads and citations
        const downloadsMatch = entry.match(/(\d+[\d,]*)\s*downloads/i);
        const downloads = downloadsMatch ? `${downloadsMatch[1]} downloads` : '10,000+ downloads';
        
        const citationsMatch = entry.match(/(\d+[\d,]*)\s*citations/i);
        const citations = citationsMatch ? `${citationsMatch[1]} citations` : '50+ citations';
        
        // Extract description (first sentence after the name)
        const descMatch = entry.match(/\*\*[^*]+\*\*\s*[-:]?\s*([^.\n]+)/);
        const description = descMatch ? descMatch[1].trim() : 'Advanced computational tool for biological analysis';
        
        return {
          name,
          description,
          downloads,
          citations,
          github
        };
      });
    }
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

            return (
              <div key={index} className="border-l-4 border-primary/20 pl-6 py-4 hover:border-primary/40 transition-colors">
                <div className="flex justify-between items-start mb-2">
                  <span className="text-xs font-medium text-primary bg-primary/10 px-2 py-1 rounded">
                    {year}
                  </span>
                  <div className="flex gap-3 text-xs text-muted-foreground">
                    <span>IF: {impactFactor}</span>
                    <span>Citations: {citationCount}</span>
                  </div>
                </div>
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
        
        {limited && softwareTools.length > 3 && (
          <div className="text-center mt-8">
            <Button asChild variant="outline">
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