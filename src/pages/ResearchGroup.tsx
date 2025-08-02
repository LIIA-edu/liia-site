import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Users, Award, BookOpen, Target } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const ResearchGroup = () => {
  const teamMembers = [
    {
      name: "Dr. Sarah Chen",
      role: "Principal Investigator",
      description: "Leading computational genomics research with focus on cancer biology and machine learning applications.",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      expertise: ["Cancer Genomics", "Machine Learning", "Single-cell Analysis"]
    },
    {
      name: "Dr. Marcus Rodriguez",
      role: "Senior Postdoc",
      description: "Specializing in CRISPR screening analysis and functional genomics approaches to understand gene essentiality.",
      image: "https://images.unsplash.com/photo-1581092795360-fd1ca04f0952?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      expertise: ["CRISPR Screening", "Functional Genomics", "R/Bioconductor"]
    },
    {
      name: "Dr. Emily Zhang",
      role: "Research Scientist",
      description: "Developing novel algorithms for multi-omics integration and working on drug discovery pipelines.",
      image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      expertise: ["Multi-omics", "Drug Discovery", "Python/PyTorch"]
    },
    {
      name: "Alex Kim",
      role: "PhD Student",
      description: "Graduate student working on phylogenetic analysis and evolutionary genomics using large-scale datasets.",
      image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      expertise: ["Phylogenetics", "Evolution", "Comparative Genomics"]
    }
  ];

  const labPhotos = [
    {
      image: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      caption: "Lab meeting discussing latest single-cell RNA-seq results",
      description: "Weekly group meetings where we discuss ongoing projects, review recent papers, and brainstorm solutions to computational challenges."
    },
    {
      image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      caption: "Code review session for new analysis pipeline",
      description: "Collaborative code development is central to our work. Here the team reviews a new pipeline for processing genomic variants."
    },
    {
      image: "https://images.unsplash.com/photo-1518770660439-4636190af475?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      caption: "High-performance computing cluster used for large-scale analysis",
      description: "Our computational infrastructure enables analysis of terabyte-scale genomic datasets and training of deep learning models."
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-subtle">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-6xl font-bold mb-6 text-foreground">
                Computational Biology Research Group
              </h1>
              <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
                We develop innovative computational methods to understand complex biological systems, 
                with a focus on cancer genomics, CRISPR screening, and multi-omics integration.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Badge variant="secondary" className="px-4 py-2 text-sm">
                  <Target className="w-4 h-4 mr-2" />
                  Cancer Genomics
                </Badge>
                <Badge variant="secondary" className="px-4 py-2 text-sm">
                  <BookOpen className="w-4 h-4 mr-2" />
                  Machine Learning
                </Badge>
                <Badge variant="secondary" className="px-4 py-2 text-sm">
                  <Award className="w-4 h-4 mr-2" />
                  Open Science
                </Badge>
              </div>
            </div>
          </div>
        </section>

        {/* Team Members */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold mb-6 text-foreground flex items-center justify-center gap-3">
                  <Users className="h-8 w-8 text-primary" />
                  Meet Our Team
                </h2>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                  Our diverse team brings together expertise in computational biology, 
                  machine learning, and experimental genomics.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {teamMembers.map((member, index) => (
                  <Card key={index} className="shadow-card hover:shadow-card-hover transition-shadow">
                    <CardHeader>
                      <div className="flex items-start gap-4">
                        <img 
                          src={member.image} 
                          alt={member.name}
                          className="w-20 h-20 rounded-full object-cover border-2 border-primary/20"
                        />
                        <div className="flex-1">
                          <CardTitle className="text-lg mb-1">{member.name}</CardTitle>
                          <CardDescription className="text-primary font-medium mb-2">
                            {member.role}
                          </CardDescription>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground mb-4">
                        {member.description}
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {member.expertise.map((skill, skillIndex) => (
                          <Badge key={skillIndex} variant="outline" className="text-xs">
                            {skill}
                          </Badge>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Lab Photos */}
        <section className="py-20 bg-gradient-subtle">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold mb-6 text-foreground">
                  Lab Life
                </h2>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                  A glimpse into our daily research activities and collaborative environment.
                </p>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {labPhotos.map((photo, index) => (
                  <Card key={index} className="shadow-card overflow-hidden">
                    <div className="aspect-video relative overflow-hidden">
                      <img 
                        src={photo.image} 
                        alt={photo.caption}
                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    <CardContent className="p-6">
                      <h3 className="font-semibold text-lg mb-2 text-foreground">
                        {photo.caption}
                      </h3>
                      <p className="text-muted-foreground">
                        {photo.description}
                      </p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Research Philosophy */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <Card className="shadow-card bg-gradient-card">
                <CardContent className="p-8 text-center">
                  <h2 className="text-2xl font-bold mb-6 text-foreground">
                    Our Research Philosophy
                  </h2>
                  <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                    We believe in open, reproducible science that bridges computational innovation 
                    with biological insight. Our interdisciplinary approach combines rigorous 
                    statistical methods with cutting-edge machine learning to tackle the most 
                    challenging problems in cancer biology and genomics.
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
                    <div className="text-center">
                      <BookOpen className="h-8 w-8 text-primary mx-auto mb-3" />
                      <h3 className="font-semibold mb-2">Open Science</h3>
                      <p className="text-sm text-muted-foreground">All our tools and data are open source</p>
                    </div>
                    <div className="text-center">
                      <Users className="h-8 w-8 text-primary mx-auto mb-3" />
                      <h3 className="font-semibold mb-2">Collaboration</h3>
                      <p className="text-sm text-muted-foreground">Working across disciplines and institutions</p>
                    </div>
                    <div className="text-center">
                      <Target className="h-8 w-8 text-primary mx-auto mb-3" />
                      <h3 className="font-semibold mb-2">Impact</h3>
                      <p className="text-sm text-muted-foreground">Translating research into clinical applications</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default ResearchGroup;