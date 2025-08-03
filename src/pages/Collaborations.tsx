import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Building2, Globe, Users, ExternalLink, Calendar, MapPin } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Collaborations = () => {
  const activeCollaborations = [
    {
      name: "Stanford Cancer Institute",
      location: "Stanford, CA, USA",
      type: "Academic Partnership",
      focus: "Neoantigen Prediction & Immunogenomics",
      status: "Active",
      duration: "2022 - Present",
      description: "Joint research on AI-driven neoantigen prediction algorithms for personalized cancer immunotherapy.",
      pi: "Dr. Maria Rodriguez",
      website: "https://cancer.stanford.edu",
      icon: Building2,
      projects: ["NeoantigenAI Development", "Clinical Data Integration", "Immunotherapy Response Prediction"]
    },
    {
      name: "MIT Computer Science & Artificial Intelligence Laboratory",
      location: "Cambridge, MA, USA",
      type: "Research Collaboration",
      focus: "Machine Learning for Cancer Biology",
      status: "Active",
      duration: "2023 - Present",
      description: "Developing novel deep learning architectures for understanding cancer-immune system interactions.",
      pi: "Dr. James Thompson",
      website: "https://csail.mit.edu",
      icon: Users,
      projects: ["Graph Neural Networks for Immune Networks", "Transformer Models for Genomics", "Federated Learning"]
    },
    {
      name: "Genentech Inc.",
      location: "South San Francisco, CA, USA",
      type: "Industry Partnership",
      focus: "Drug Discovery & Development",
      status: "Active",
      duration: "2023 - 2026",
      description: "Collaborative development of AI-powered drug discovery platform for cancer immunotherapies.",
      pi: "Dr. Lisa Park",
      website: "https://gene.com",
      icon: Globe,
      projects: ["Drug-Target Interaction Prediction", "Biomarker Discovery", "Clinical Trial Optimization"]
    },
    {
      name: "University of São Paulo",
      location: "São Paulo, Brazil",
      type: "International Collaboration",
      focus: "Cancer Genomics in Latin American Populations",
      status: "Active",
      duration: "2021 - Present",
      description: "Studying cancer genomics diversity in underrepresented populations for equitable AI model development.",
      pi: "Dr. Carlos Mendez",
      website: "https://usp.br",
      icon: Building2,
      projects: ["Population Genomics Analysis", "Health Equity in AI", "Cross-Population Validation"]
    }
  ];

  const pastCollaborations = [
    {
      name: "European Bioinformatics Institute (EMBL-EBI)",
      location: "Cambridge, UK",
      type: "Data Consortium",
      focus: "Cancer Data Standardization",
      status: "Completed",
      duration: "2020 - 2022",
      description: "Led efforts to standardize cancer immunotherapy data across European research institutions.",
      icon: Globe
    },
    {
      name: "Memorial Sloan Kettering Cancer Center",
      location: "New York, NY, USA",
      type: "Clinical Partnership",
      focus: "Translational Research",
      status: "Completed",
      duration: "2019 - 2021",
      description: "Translated computational models into clinical decision support tools for oncologists.",
      icon: Building2
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-r from-primary/10 to-accent/10">
          <div className="container mx-auto px-4">
            <div className="text-center">
              <h1 className="text-5xl font-bold mb-6 text-foreground">
                Global <span className="text-primary">Collaborations</span>
              </h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Building bridges across institutions and continents to accelerate cancer immunotherapy research. 
                Our collaborative network spans academia, industry, and clinical institutions worldwide.
              </p>
            </div>
          </div>
        </section>

        {/* Active Collaborations */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-12 text-center">Active Collaborations</h2>
            
            <div className="grid gap-8">
              {activeCollaborations.map((collab, index) => {
                const IconComponent = collab.icon;
                return (
                  <Card key={index} className="hover:shadow-lg transition-shadow">
                    <CardHeader>
                      <div className="flex items-start justify-between">
                        <div className="flex items-center gap-4">
                          <div className="p-3 bg-primary/10 rounded-lg">
                            <IconComponent className="h-8 w-8 text-primary" />
                          </div>
                          <div>
                            <CardTitle className="text-2xl mb-2">{collab.name}</CardTitle>
                            <div className="flex items-center gap-4 text-sm text-muted-foreground">
                              <div className="flex items-center gap-1">
                                <MapPin className="h-4 w-4" />
                                <span>{collab.location}</span>
                              </div>
                              <div className="flex items-center gap-1">
                                <Calendar className="h-4 w-4" />
                                <span>{collab.duration}</span>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="flex gap-2">
                          <Badge variant="default">{collab.status}</Badge>
                          <Badge variant="outline">{collab.type}</Badge>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <div className="grid md:grid-cols-2 gap-6">
                        <div>
                          <h4 className="font-semibold mb-2 text-accent">Research Focus</h4>
                          <p className="text-muted-foreground mb-4">{collab.focus}</p>
                          
                          <h4 className="font-semibold mb-2 text-accent">Description</h4>
                          <p className="text-muted-foreground mb-4">{collab.description}</p>
                          
                          <div className="flex items-center gap-2">
                            <span className="font-semibold">Principal Investigator:</span>
                            <span className="text-muted-foreground">{collab.pi}</span>
                          </div>
                        </div>
                        
                        <div>
                          <h4 className="font-semibold mb-3 text-accent">Key Projects</h4>
                          <ul className="space-y-2 mb-6">
                            {collab.projects.map((project, idx) => (
                              <li key={idx} className="flex items-center gap-2 text-sm">
                                <div className="w-2 h-2 bg-primary rounded-full"></div>
                                <span>{project}</span>
                              </li>
                            ))}
                          </ul>
                          
                          <Button variant="outline" size="sm" className="group">
                            <ExternalLink className="h-4 w-4 mr-2" />
                            Visit Institution
                            <ExternalLink className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>

        {/* Past Collaborations */}
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-12 text-center">Past Collaborations</h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              {pastCollaborations.map((collab, index) => {
                const IconComponent = collab.icon;
                return (
                  <Card key={index}>
                    <CardHeader>
                      <div className="flex items-center gap-3">
                        <div className="p-2 bg-muted rounded-lg">
                          <IconComponent className="h-6 w-6 text-muted-foreground" />
                        </div>
                        <div>
                          <CardTitle className="text-lg">{collab.name}</CardTitle>
                          <CardDescription>{collab.location}</CardDescription>
                        </div>
                      </div>
                      <div className="flex gap-2 mt-2">
                        <Badge variant="secondary">{collab.status}</Badge>
                        <Badge variant="outline">{collab.type}</Badge>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-2">
                        <div>
                          <span className="font-semibold text-sm">Duration:</span>
                          <span className="text-muted-foreground text-sm ml-2">{collab.duration}</span>
                        </div>
                        <div>
                          <span className="font-semibold text-sm">Focus:</span>
                          <span className="text-muted-foreground text-sm ml-2">{collab.focus}</span>
                        </div>
                        <p className="text-sm text-muted-foreground mt-3">{collab.description}</p>
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>

        {/* Partnership Opportunities */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center">
              <h2 className="text-3xl font-bold mb-6">Partnership Opportunities</h2>
              <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
                Interested in collaborating with LIIA? We're always open to new partnerships 
                that advance cancer immunotherapy research and AI innovation.
              </p>
              <Button size="lg">
                Get In Touch
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Collaborations;