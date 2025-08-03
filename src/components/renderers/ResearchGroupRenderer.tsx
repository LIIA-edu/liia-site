import ReactMarkdown from 'react-markdown';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { memo } from 'react';

interface ResearchGroupRendererProps {
  content: string;
  className?: string;
}

// Default team data for fallback
const DEFAULT_TEAM_MEMBERS = [
  {
    name: "Dr. Sarah Chen",
    position: "Principal Investigator",
    image: "/team-photos/sarah-chen.jpg",
    bio: "Leading expert in computational biology with 15+ years of experience in machine learning applications for biological data analysis."
  },
  {
    name: "Dr. Michael Rodriguez",
    position: "Senior Research Scientist",
    image: "/team-photos/michael-rodriguez.jpg",
    bio: "Specialist in bioinformatics and genomic data analysis, with focus on cancer immunology and personalized medicine approaches."
  },
  {
    name: "Dr. Jennifer Liu",
    position: "Postdoctoral Research Fellow",
    image: "/team-photos/jennifer-liu.jpg",
    bio: "Expert in machine learning and artificial intelligence applications for drug discovery and molecular design."
  }
];

const ResearchGroupRenderer = memo(({ content, className }: ResearchGroupRendererProps) => {
  // Split content into intro and team sections
  const sections = content.split(/## Team Members|## Our Team/i);
  const introContent = sections[0] || '';
  
  // Extract team member information from markdown
  let teamMembers = [...DEFAULT_TEAM_MEMBERS];
  
  if (sections.length > 1) {
    const teamSection = sections[1];
    const memberBlocks = teamSection.split(/### /).filter(block => block.trim());
    
    if (memberBlocks.length > 0) {
      teamMembers = memberBlocks.map((block, index) => {
        const lines = block.split('\n').filter(line => line.trim());
        const name = lines[0] || `Team Member ${index + 1}`;
        
        // Extract position
        const positionMatch = block.match(/\*\*Position:\*\*\s*(.+)/i) || 
                             block.match(/Position:\s*(.+)/i);
        const position = positionMatch ? positionMatch[1].trim() : 'Team Member';
        
        // Extract image
        const imageMatch = block.match(/!\[.*?\]\(([^)]+)\)/);
        const image = imageMatch ? imageMatch[1] : `/team-photos/${name.toLowerCase().replace(/[^a-z0-9]/g, '-')}.jpg`;
        
        // Extract bio (everything after image and position)
        const bioContent = block
          .replace(/!\[.*?\]\([^)]+\)/, '')
          .replace(/\*\*Position:\*\*\s*.+/i, '')
          .replace(/Position:\s*.+/i, '')
          .replace(name, '')
          .trim();
        
        const bio = bioContent || `${position} with expertise in computational biology and research.`;

        return {
          name: name.replace(/^\*+/, '').trim(),
          position,
          image,
          bio
        };
      });
    }
  }

  return (
    <div className={className}>
      {/* Intro Content */}
      <div className="mb-16">
        <ReactMarkdown
          components={{
            p: ({ children }) => (
              <div className="text-lg leading-relaxed text-foreground text-center max-w-4xl mx-auto mb-6">
                {children}
              </div>
            ),
            h2: ({ children }) => (
              <h2 className="text-3xl font-semibold mb-6 text-foreground text-center">
                {children}
              </h2>
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
          {introContent}
        </ReactMarkdown>
      </div>

      {/* Team Members Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {teamMembers.map((member, index) => (
          <Card key={index} className="shadow-card hover:shadow-elegant transition-all duration-300">
            <CardHeader className="text-center">
              <div className="w-32 h-32 mx-auto mb-4 rounded-full overflow-hidden bg-muted">
                <img 
                  src={member.image} 
                  alt={`${member.name} - ${member.position}`}
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.currentTarget.src = '/placeholder.svg';
                  }}
                />
              </div>
              <CardTitle className="text-xl text-foreground">{member.name}</CardTitle>
              <CardDescription className="text-primary font-medium">
                {member.position}
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {member.bio}
              </p>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Call to Action */}
      <div className="text-center mt-16">
        <Card className="shadow-card bg-gradient-subtle">
          <CardContent className="p-8">
            <h3 className="text-2xl font-semibold mb-4 text-foreground">Join Our Team</h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              We're always looking for passionate researchers to join our interdisciplinary team. 
              Whether you're a graduate student, postdoc, or visiting researcher, we offer exciting 
              opportunities to work on cutting-edge computational biology projects.
            </p>
            <div className="flex justify-center gap-4 text-sm text-muted-foreground">
              <span>• PhD Positions</span>
              <span>• Postdoc Fellowships</span>
              <span>• Visiting Researcher Programs</span>
              <span>• Industry Collaborations</span>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
});

ResearchGroupRenderer.displayName = 'ResearchGroupRenderer';

export default ResearchGroupRenderer;