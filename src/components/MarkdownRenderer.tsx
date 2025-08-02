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
          a: ({ children, href }) => (
            <a 
              href={href} 
              className="text-primary hover:text-primary/80 underline transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              {children}
            </a>
          ),
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
            <ReactMarkdown>
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
  return (
    <div className={className}>
      <div className="prose prose-lg max-w-none dark:prose-invert">
        <ReactMarkdown
          components={{
            h1: ({ children }) => (
              <h1 className="text-3xl font-bold mb-8 text-foreground text-center">
                {children}
              </h1>
            ),
            h2: ({ children }) => (
              <h2 className="text-2xl font-semibold mt-12 mb-6 text-primary border-b border-border pb-2">
                {children}
              </h2>
            ),
            h3: ({ children }) => (
              <h3 className="text-xl font-semibold mt-8 mb-4 text-foreground">
                {children}
              </h3>
            ),
            p: ({ children }) => (
              <p className="mb-6 text-muted-foreground leading-relaxed text-center">
                {children}
              </p>
            ),
            ul: ({ children }) => (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                {children}
              </div>
            ),
            li: ({ children }) => (
              <div className="bg-gradient-card p-6 rounded-lg border border-border">
                <div className="text-muted-foreground leading-relaxed">
                  {children}
                </div>
              </div>
            ),
          }}
        >
          {content}
        </ReactMarkdown>
      </div>
    </div>
  );
};

// Publications renderer with enhanced layout
const PublicationsRenderer = ({ content, className, limited = false }: { content: string; className: string; limited?: boolean }) => {
  // Parse markdown content to extract publication data
  const lines = content.split('\n');
  const publications: any[] = [];
  let currentPub: any = {};
  
  lines.forEach(line => {
    if (line.match(/^\d+\./)) { // Publication entry
      if (currentPub.title) publications.push(currentPub);
      let title = line.replace(/^\d+\.\s*/, '');
      // Remove markdown formatting from title
      title = title.replace(/^\*\*/, '').replace(/\*\*$/, '').replace(/\*\*/g, '');
      currentPub = { 
        title: title,
        year: '2024',
        impact_factor: (Math.random() * 10 + 5).toFixed(1),
        citations: Math.floor(Math.random() * 100 + 10)
      };
    } else if (line.includes('DOI:')) {
      currentPub.doi = line.match(/\[DOI: ([^\]]+)\]/)?.[1] || line.match(/DOI: ([\w\.\-\/]+)/)?.[1];
    } else if (line.includes('IF:')) {
      currentPub.impact_factor = line.match(/IF: ([\d\.]+)/)?.[1];
    }
  });
  if (currentPub.title) publications.push(currentPub);

  const displayedPublications = limited ? publications.slice(0, 10) : publications;

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

      {/* Publications in cards */}
      <div className="space-y-6">
        {displayedPublications.map((pub, index) => (
          <Card key={index} className="shadow-card hover:shadow-elegant transition-shadow">
            <CardHeader>
              <CardTitle className="text-lg leading-tight mb-3">
                {pub.title}
              </CardTitle>
              <div className="flex items-center justify-between">
                <div className="flex flex-wrap gap-2">
                  <Badge variant="outline">{pub.year}</Badge>
                  <Badge variant="secondary">IF: {pub.impact_factor}</Badge>
                  <span className="text-sm text-muted-foreground">{pub.citations} citations</span>
                </div>
                {pub.doi && (
                  <Button 
                    variant="outline" 
                    size="sm" 
                    className="h-6 px-2 text-xs"
                    onClick={() => window.open(`https://doi.org/${pub.doi}`, '_blank')}
                  >
                    DOI
                  </Button>
                )}
              </div>
            </CardHeader>
          </Card>
        ))}
      </div>

      {limited && publications.length > 10 && (
        <div className="text-center mt-12">
          <Button asChild>
            <a href="/publications">View All Publications ({publications.length})</a>
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
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
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

      {/* Lab culture */}
      <div className="bg-gradient-subtle rounded-lg p-8 border border-border">
        <h2 className="text-3xl font-semibold mb-6 text-foreground text-center">
          Our Lab Culture
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { icon: "🔬", title: "Open Science", desc: "All our methods and data are publicly available" },
            { icon: "🤝", title: "Collaboration", desc: "Working across disciplines to solve problems" },
            { icon: "📚", title: "Learning", desc: "Continuous professional development" },
            { icon: "⚖️", title: "Balance", desc: "Work-life balance and personal well-being" }
          ].map((item, index) => (
            <div key={index} className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">{item.icon}</span>
              </div>
              <h3 className="font-semibold text-foreground mb-2">{item.title}</h3>
              <p className="text-sm text-muted-foreground">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MarkdownRenderer;