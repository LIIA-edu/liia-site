import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Mail, Github, Linkedin, Twitter, MapPin, University } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
              Get In Touch
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Interested in collaboration, have questions about my research, or want to discuss computational biology? 
              I'd love to hear from you.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <Card className="shadow-card">
              <CardHeader>
                <CardTitle className="flex items-center gap-3">
                  <University className="h-6 w-6 text-primary" />
                  Academic Affiliation
                </CardTitle>
                <CardDescription>
                  Current research position and institution
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div>
                    <p className="font-medium text-foreground">Senior Research Scientist</p>
                    <p className="text-muted-foreground">Computational Biology Institute</p>
                    <p className="text-muted-foreground">University of Excellence</p>
                  </div>
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <MapPin className="h-4 w-4" />
                    <span>San Francisco, CA</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="shadow-card">
              <CardHeader>
                <CardTitle>Research Interests</CardTitle>
                <CardDescription>
                  Areas of active research and collaboration
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Single-cell genomics and multi-omics integration</li>
                  <li>• Machine learning in drug discovery</li>
                  <li>• Computational cancer biology</li>
                  <li>• Open-source bioinformatics tools</li>
                  <li>• Reproducible research practices</li>
                </ul>
              </CardContent>
            </Card>
          </div>

          <div className="text-center">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
              <Button variant="outline" className="flex items-center gap-2 h-12">
                <Mail className="h-5 w-5" />
                <span className="hidden sm:inline">Email</span>
              </Button>
              <Button variant="outline" className="flex items-center gap-2 h-12">
                <Github className="h-5 w-5" />
                <span className="hidden sm:inline">GitHub</span>
              </Button>
              <Button variant="outline" className="flex items-center gap-2 h-12">
                <Linkedin className="h-5 w-5" />
                <span className="hidden sm:inline">LinkedIn</span>
              </Button>
              <Button variant="outline" className="flex items-center gap-2 h-12">
                <Twitter className="h-5 w-5" />
                <span className="hidden sm:inline">Twitter</span>
              </Button>
            </div>
            
            <div className="bg-gradient-card p-8 rounded-lg shadow-card">
              <h3 className="text-xl font-semibold mb-4 text-foreground">Collaboration Opportunities</h3>
              <p className="text-muted-foreground mb-6">
                I'm always interested in discussing new research projects, reviewing manuscripts, 
                speaking at conferences, or consulting on bioinformatics challenges.
              </p>
              <Button size="lg" className="px-8">
                Send Message
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;