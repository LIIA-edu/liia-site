import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const About = () => {
  const skills = [
    "Bioinformatics", "Computational Biology", "Python", "R", "Machine Learning",
    "Genomics", "Proteomics", "Single-Cell Analysis", "Statistical Modeling",
    "Data Visualization", "Linux/Unix", "Cloud Computing", "Docker"
  ];

  const tools = [
    { name: "Languages", items: ["Python", "R", "SQL", "Bash", "JavaScript"] },
    { name: "Frameworks", items: ["TensorFlow", "PyTorch", "Scikit-learn", "Bioconductor"] },
    { name: "Tools", items: ["Jupyter", "RStudio", "Git", "Docker", "Nextflow"] },
    { name: "Databases", items: ["NCBI", "Ensembl", "UniProt", "PDB", "TCGA"] }
  ];

  return (
    <section id="about" className="py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
              About the Research
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Bridging the gap between computational methods and biological discovery
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
            <div>
              <h3 className="text-2xl font-bold mb-6 text-foreground">Background</h3>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                As a computational biologist with a PhD in Bioinformatics, I specialize in developing 
                and applying computational methods to understand complex biological systems. My research 
                focuses on genomics, single-cell analysis, and machine learning applications in biology.
              </p>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                I'm passionate about making computational biology accessible and reproducible, 
                sharing open-source tools and methodologies that advance scientific discovery.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Through this blog, I aim to bridge the gap between theoretical computational methods 
                and practical biological applications, helping researchers navigate the evolving 
                landscape of bioinformatics.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-bold mb-6 text-foreground">Research Focus</h3>
              <div className="space-y-4">
                <div className="p-4 bg-card rounded-lg shadow-card">
                  <h4 className="font-semibold text-primary mb-2">Genomics & Single-Cell Analysis</h4>
                  <p className="text-sm text-muted-foreground">
                    Developing pipelines for large-scale genomic data analysis and cellular heterogeneity studies
                  </p>
                </div>
                <div className="p-4 bg-card rounded-lg shadow-card">
                  <h4 className="font-semibold text-primary mb-2">Machine Learning in Biology</h4>
                  <p className="text-sm text-muted-foreground">
                    Applying ML/AI methods to predict biological functions and drug-target interactions
                  </p>
                </div>
                <div className="p-4 bg-card rounded-lg shadow-card">
                  <h4 className="font-semibold text-primary mb-2">Reproducible Research</h4>
                  <p className="text-sm text-muted-foreground">
                    Creating open-source tools and workflows for reproducible computational biology
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="mb-12">
            <h3 className="text-2xl font-bold mb-8 text-center text-foreground">Skills & Expertise</h3>
            <div className="flex flex-wrap justify-center gap-3">
              {skills.map((skill, index) => (
                <Badge key={index} variant="outline" className="text-sm px-4 py-2">
                  {skill}
                </Badge>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-bold mb-8 text-center text-foreground">Tools & Technologies</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {tools.map((category, index) => (
                <Card key={index} className="shadow-card">
                  <CardContent className="p-6">
                    <h4 className="font-semibold text-primary mb-4">{category.name}</h4>
                    <ul className="space-y-2">
                      {category.items.map((item, itemIndex) => (
                        <li key={itemIndex} className="text-sm text-muted-foreground">
                          {item}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;