import ReactMarkdown from 'react-markdown';
import rehypeHighlight from 'rehype-highlight';
import 'highlight.js/styles/github-dark.css';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Mail, Phone, MapPin } from "lucide-react";

interface MarkdownRendererProps {
  content: string;
  type?: 'default' | 'about' | 'publications' | 'publications-full' | 'laboratory-vision' | 'research-group';
  className?: string;
}

const MarkdownRenderer = ({ content, type = 'default', className = "" }: MarkdownRendererProps) => {
  // Enhanced rendering for About section
  if (type === 'about') {
    return <AboutRenderer content={content} className={className} />;
  }

  // Enhanced rendering for Publications section  
  if (type === 'publications') {
    return <PublicationsRenderer content={content} className={className} limited={true} />;
  }

  // Enhanced rendering for Full Publications page
  if (type === 'publications-full') {
    return <PublicationsRenderer content={content} className={className} limited={false} />;
  }

  // Enhanced rendering for Laboratory Vision section
  if (type === 'laboratory-vision') {
    return <LaboratoryVisionRenderer content={content} className={className} />;
  }

  // Enhanced rendering for Research Group section
  if (type === 'research-group') {
    return <ResearchGroupRenderer content={content} className={className} />;
  }

  // Default markdown rendering for blog posts
  return (
    <div className={`prose prose-lg max-w-none dark:prose-invert ${className}`}>
      <ReactMarkdown
        rehypePlugins={[rehypeHighlight]}
        components={{
          h1: ({ children }) => (
            <h1 className="text-4xl font-bold mb-6 text-foreground border-b border-border pb-4">
              {children}
            </h1>
          ),
          h2: ({ children }) => (
            <h2 className="text-3xl font-semibold mt-12 mb-6 text-foreground border-b border-border pb-2">
              {children}
            </h2>
          ),
          h3: ({ children }) => (
            <h3 className="text-2xl font-semibold mt-8 mb-4 text-foreground">
              {children}
            </h3>
          ),
          p: ({ children }) => (
            <p className="mb-6 text-muted-foreground leading-relaxed">
              {children}
            </p>
          ),
          em: ({ children }) => (
            <em className="italic text-foreground">
              {children}
            </em>
          ),
          code: ({ children, className }) => {
            const isInline = !className;
            if (isInline) {
              return (
                <code className="px-2 py-1 bg-muted rounded text-sm font-mono text-foreground">
                  {children}
                </code>
              );
            }
            return (
              <code className={className}>
                {children}
              </code>
            );
          },
          pre: ({ children }) => (
            <pre className="my-6 p-4 bg-muted rounded-lg overflow-x-auto border border-border">
              {children}
            </pre>
          ),
          ul: ({ children }) => (
            <ul className="mb-6 ml-6 space-y-2 list-disc text-muted-foreground">
              {children}
            </ul>
          ),
          ol: ({ children }) => (
            <ol className="mb-6 ml-6 space-y-2 list-decimal text-muted-foreground">
              {children}
            </ol>
          ),
          blockquote: ({ children }) => (
            <blockquote className="border-l-4 border-primary pl-6 my-6 italic text-muted-foreground bg-muted/50 py-4 rounded-r">
              {children}
            </blockquote>
          ),
          a: ({ href, children, ...props }) => {
            // Check if this is a DOI link
            if (href && href.includes('doi.org')) {
              const doiText = children?.toString() || href;
              const cleanDoi = doiText.replace(/^\[DOI:\s*/, '').replace(/\]$/, '');
              return (
                <Button 
                  variant="outline" 
                  size="sm" 
                  className="h-6 px-2 py-1 text-xs ml-2"
                  onClick={() => window.open(href, '_blank')}
                >
                  DOI: {cleanDoi}
                </Button>
              );
            }
            return (
              <a 
                href={href} 
                className="text-primary hover:text-primary/80 underline transition-colors"
                target="_blank"
                rel="noopener noreferrer"
                {...props}
              >
                {children}
              </a>
            );
          },
        }}
      >
        {content}
      </ReactMarkdown>
    </div>
  );
};

// About section renderer with enhanced layout
const AboutRenderer = ({ content, className }: { content: string; className: string }) => {
  const sections = content.split('##').slice(1); // Split by ## headings
  
  return (
    <div className={className}>
      {/* Main intro section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
        <div>
          <div className="prose prose-lg dark:prose-invert">
            <ReactMarkdown
              components={{
                p: ({ children }) => (
                  <p className="mb-6 text-muted-foreground leading-relaxed">
                    {children}
                  </p>
                ),
                h1: ({ children }) => (
                  <h1 className="text-3xl font-bold mb-6 text-foreground">
                    {children}
                  </h1>
                ),
                h2: ({ children }) => (
                  <h2 className="text-2xl font-semibold mb-4 text-primary">
                    {children}
                  </h2>
                ),
                em: ({ children }) => (
                  <em className="italic text-foreground">
                    {children}
                  </em>
                ),
                a: ({ href, children, ...props }) => {
                  if (href && href.includes('doi.org')) {
                    const doiText = children?.toString() || href;
                    const cleanDoi = doiText.replace(/^\[DOI:\s*/, '').replace(/\]$/, '');
                    return (
                      <Button 
                        variant="outline" 
                        size="sm" 
                        className="h-6 px-2 py-1 text-xs ml-2"
                        onClick={() => window.open(href, '_blank')}
                      >
                        DOI: {cleanDoi}
                      </Button>
                    );
                  }
                  return (
                    <a 
                      href={href} 
                      className="text-primary hover:text-primary/80 underline transition-colors" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      {...props}
                    >
                      {children}
                    </a>
                  );
                },
              }}
            >
              {sections[0] || content.split('#')[1]?.split('##')[0] || content}
            </ReactMarkdown>
          </div>
        </div>
        
        <div className="space-y-6">
          <Card className="shadow-card">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Mail className="h-5 w-5 text-primary" />
                Contact Information
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="flex items-center gap-2 text-muted-foreground">
                <Mail className="h-4 w-4" />
                <span>s.chen@university.edu</span>
              </div>
              <div className="flex items-center gap-2 text-muted-foreground">
                <Phone className="h-4 w-4" />
                <span>+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center gap-2 text-muted-foreground">
                <MapPin className="h-4 w-4" />
                <span>Room 304, Computational Sciences Building</span>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Research areas in cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
        <Card className="shadow-card">
          <CardContent className="p-6">
            <h3 className="font-semibold text-primary mb-3">Computational Genomics</h3>
            <p className="text-sm text-muted-foreground">
              Genome-wide association studies, population genomics, and structural variant analysis
            </p>
          </CardContent>
        </Card>
        
        <Card className="shadow-card">
          <CardContent className="p-6">
            <h3 className="font-semibold text-primary mb-3">Machine Learning</h3>
            <p className="text-sm text-muted-foreground">
              Deep learning for biology, interpretable AI, and graph neural networks
            </p>
          </CardContent>
        </Card>
        
        <Card className="shadow-card">
          <CardContent className="p-6">
            <h3 className="font-semibold text-primary mb-3">Systems Biology</h3>
            <p className="text-sm text-muted-foreground">
              Network inference, pathway modeling, and multi-scale disease modeling
            </p>
          </CardContent>
        </Card>
      </div>

      {/* Call to action */}
      <div className="bg-gradient-card rounded-lg p-8 border border-border">
        <h3 className="text-2xl font-semibold mb-4 text-foreground">Join Our Team</h3>
        <p className="text-muted-foreground leading-relaxed mb-6">
          We're always looking for passionate researchers to join our interdisciplinary team. 
          Whether you're a graduate student, postdoc, or visiting researcher, we offer exciting 
          opportunities to work on cutting-edge computational biology projects.
        </p>
        <div className="flex flex-wrap gap-4">
          <Badge variant="secondary">PhD Positions Available</Badge>
          <Badge variant="secondary">Postdoc Opportunities</Badge>
          <Badge variant="secondary">Visiting Scholar Program</Badge>
        </div>
      </div>
    </div>
  );
};

// Laboratory Vision renderer
const LaboratoryVisionRenderer = ({ content, className }: { content: string; className: string }) => {
  const sections = content.split(/(?=^##)/gm).filter(section => section.trim());
  
  return (
    <div className={className}>
      <div className="space-y-12">
        {/* Main Vision Section */}
        {sections.map((section, index) => {
          const lines = section.trim().split('\n');
          const isMainHeading = lines[0].startsWith('# ');
          
          if (isMainHeading) {
            return (
              <div key={index} className="text-center space-y-6">
                <div className="prose prose-xl max-w-4xl mx-auto dark:prose-invert">
                  <ReactMarkdown 
                    components={{
                      h1: ({ children }) => (
                        <h1 className="text-3xl font-bold mb-6 text-foreground">
                          {children}
                        </h1>
                      ),
                      p: ({ children }) => (
                        <p className="text-lg text-muted-foreground leading-relaxed">
                          {children}
                        </p>
                      ),
                    }}
                  >
                    {section}
                  </ReactMarkdown>
                </div>
              </div>
            );
          }
          
          return null; // Skip non-main headings for separate card rendering
        })}
        
        {/* Render Philosophy, Values, and Goals as cards */}
        <div className="grid md:grid-cols-3 gap-6">
          {sections.slice(1).map((section, index) => (
            <Card key={index} className="p-6 h-full shadow-card">
              <div className="prose prose-sm max-w-none dark:prose-invert">
                <ReactMarkdown 
                  components={{
                    h2: ({ children }) => (
                      <h3 className="text-xl font-semibold mb-4 text-primary">
                        {children}
                      </h3>
                    ),
                    p: ({ children }) => (
                      <p className="text-muted-foreground leading-relaxed">
                        {children}
                      </p>
                    ),
                  }}
                >
                  {section}
                </ReactMarkdown>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

// Publications renderer with enhanced layout
const PublicationsRenderer = ({ content, className, limited = false }: { content: string; className: string; limited?: boolean }) => {
  // Extract publications from numbered list items
  const publicationEntries = content.match(/^\d+\.\s+.+$/gm) || [];
  const displayedPublications = limited ? publicationEntries.slice(0, 10) : publicationEntries;

  return (
    <div className="space-y-8">
      {/* Statistics */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
        <Card className="shadow-card text-center">
          <CardContent className="p-6">
            <div className="text-3xl font-bold text-primary mb-2">48</div>
            <div className="text-sm text-muted-foreground">Total Publications</div>
          </CardContent>
        </Card>
        <Card className="shadow-card text-center">
          <CardContent className="p-6">
            <div className="text-3xl font-bold text-primary mb-2">4,567</div>
            <div className="text-sm text-muted-foreground">Total Citations</div>
          </CardContent>
        </Card>
        <Card className="shadow-card text-center">
          <CardContent className="p-6">
            <div className="text-3xl font-bold text-primary mb-2">32</div>
            <div className="text-sm text-muted-foreground">h-index</div>
          </CardContent>
        </Card>
      </div>

      {/* Publications using proper markdown rendering */}
      <div className="space-y-6">
        {displayedPublications.map((pub, index) => {
          // Extract year from the publication entry
          const yearMatch = pub.match(/\((\d{4})\)/);
          const year = yearMatch ? yearMatch[1] : '2024';
          
          // Extract DOI link from the publication
          const doiMatch = pub.match(/\[DOI:\s*([^\]]+)\]\(([^)]+)\)/);
          const doiText = doiMatch ? doiMatch[1] : null;
          const doiUrl = doiMatch ? doiMatch[2] : null;
          
          // Remove DOI from the main text for display
          const cleanPub = pub.replace(/\s*\[DOI:\s*[^\]]+\]\([^)]+\)/, '');
          
          // Generate mock data for IF and citations
          const impact_factor = (Math.random() * 10 + 5).toFixed(1);
          const citations = Math.floor(Math.random() * 100 + 10);
          
          return (
            <Card key={index} className="shadow-card hover:shadow-elegant transition-shadow">
              <CardContent className="p-6">
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
                    {cleanPub.replace(/^\d+\.\s*/, '')}
                  </ReactMarkdown>
                </div>
                
                <div className="flex flex-wrap items-center gap-3 mt-4 pt-4 border-t border-border">
                  <Badge variant="outline">{year}</Badge>
                  <Badge variant="secondary">IF: {impact_factor}</Badge>
                  <span className="text-sm text-muted-foreground">{citations} citations</span>
                  {doiText && doiUrl && (
                    <Button 
                      variant="outline" 
                      size="sm" 
                      className="h-7 px-3 text-xs ml-auto"
                      onClick={() => window.open(doiUrl, '_blank')}
                    >
                      DOI: {doiText}
                    </Button>
                  )}
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>

      {limited && publicationEntries.length > 10 && (
        <div className="text-center mt-12">
          <Button asChild>
            <a href="/publications">View All Publications ({publicationEntries.length})</a>
          </Button>
        </div>
      )}

      {/* Software section */}
      <div className="mt-16">
        <h3 className="text-2xl font-semibold mb-6 text-foreground">Open Source Software</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {['DeepFold2', 'scRNA-Insight', 'CRISPR-ML'].map((tool, index) => (
            <Card key={index} className="shadow-card">
              <CardContent className="p-6">
                <h4 className="font-semibold text-primary mb-2">{tool}</h4>
                <p className="text-sm text-muted-foreground mb-3">
                  Advanced computational tool for biological analysis
                </p>
                <div className="flex justify-between text-xs text-muted-foreground">
                  <span>50,000+ downloads</span>
                  <span>150+ citations</span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

// Research Group renderer with team cards
const ResearchGroupRenderer = ({ content }: { content: string; className: string }) => {
  const teamMembers = [
    {
      name: "Dr. Sarah Chen, PhD",
      position: "Associate Professor & Lab Director",
      image: "/placeholder.svg",
      bio: "Dr. Chen established the lab in 2018 and has published over 50 papers in computational biology."
    },
    {
      name: "Dr. Michael Rodriguez, PhD", 
      position: "Postdoctoral Research Fellow",
      image: "/placeholder.svg",
      bio: "Michael joined our lab in 2022 after completing his PhD work on graph neural networks."
    },
    {
      name: "Jennifer Liu",
      position: "PhD Student (4th year)",
      image: "/placeholder.svg", 
      bio: "Jennifer is developing machine learning methods for analyzing single-cell data."
    },
    {
      name: "David Kim",
      position: "PhD Student (3rd year)",
      image: "/placeholder.svg",
      bio: "David focuses on applying graph-based machine learning to biological networks."
    }
  ];

  return (
    <div>
      {/* Team grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {teamMembers.map((member, index) => (
          <Card key={index} className="shadow-card hover:shadow-elegant transition-all duration-300">
            <CardContent className="p-6 text-center">
              <img 
                src={member.image} 
                alt={member.name}
                className="w-32 h-32 rounded-full mx-auto mb-4 object-cover border-4 border-primary/20"
              />
              <h3 className="text-xl font-semibold text-foreground mb-1">
                {member.name}
              </h3>
              <p className="text-primary font-medium mb-3">
                {member.position}
              </p>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {member.bio}
              </p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default MarkdownRenderer;
