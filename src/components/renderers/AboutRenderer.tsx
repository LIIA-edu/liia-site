import ReactMarkdown from 'react-markdown';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Mail, Phone, MapPin } from "lucide-react";
import { memo } from 'react';

interface AboutRendererProps {
  content: string;
  className?: string;
}

const AboutRenderer = memo(({ content, className }: AboutRendererProps) => {
  // Split content into intro and contact sections
  const sections = content.split('## Contact Information');
  const introContent = sections[0] || '';
  const contactContent = sections[1] || '';

  return (
    <div className={className}>
      {/* Main content */}
      <div className="mb-12">
        <ReactMarkdown
          components={{
            p: ({ children }) => (
              <div className="text-lg leading-relaxed text-foreground mb-6">
                {children}
              </div>
            ),
            h2: ({ children }) => (
              <h2 className="text-3xl font-semibold mb-6 text-foreground">
                {children}
              </h2>
            ),
            h3: ({ children }) => (
              <h3 className="text-2xl font-medium mb-4 text-foreground">
                {children}
              </h3>
            ),
            ul: ({ children }) => (
              <ul className="list-disc ml-6 mb-6 space-y-2">
                {children}
              </ul>
            ),
            li: ({ children }) => (
              <li className="text-base text-foreground">
                {children}
              </li>
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
          {introContent}
        </ReactMarkdown>
      </div>

      {/* Contact Information Card */}
      {contactContent && (
        <Card className="shadow-card">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Mail className="h-5 w-5" />
              Contact Information
            </CardTitle>
            <CardDescription>
              Get in touch for collaborations and inquiries
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <Mail className="h-4 w-4 text-primary" />
                  <div>
                    <p className="font-medium text-foreground">Email</p>
                    <p className="text-sm text-muted-foreground">contact@liia-lab.org</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Phone className="h-4 w-4 text-primary" />
                  <div>
                    <p className="font-medium text-foreground">Phone</p>
                    <p className="text-sm text-muted-foreground">+55 (11) 1234-5678</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <MapPin className="h-4 w-4 text-primary" />
                  <div>
                    <p className="font-medium text-foreground">Location</p>
                    <p className="text-sm text-muted-foreground">São Paulo, Brazil</p>
                  </div>
                </div>
              </div>
              <div>
                <ReactMarkdown
                  components={{
                    p: ({ children }) => (
                      <div className="text-base leading-relaxed text-foreground">
                        {children}
                      </div>
                    ),
                    strong: ({ children }) => (
                      <strong className="font-semibold text-foreground">
                        {children}
                      </strong>
                    ),
                  }}
                >
                  {contactContent}
                </ReactMarkdown>
              </div>
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  );
});

AboutRenderer.displayName = 'AboutRenderer';

export default AboutRenderer;