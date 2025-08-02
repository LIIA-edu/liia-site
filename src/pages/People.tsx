import { Link } from "react-router-dom";
import { ExternalLink } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import MarkdownRenderer from "@/components/MarkdownRenderer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { getResearchGroupContent } from "@/utils/contentUtils";
import { getAllProfiles } from "@/utils/profileUtils";

const People = () => {
  const researchGroupContent = getResearchGroupContent();
  const teamMembers = getAllProfiles();

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
              Our Team
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
              Meet the researchers who form LIIA - Laboratory of Research in Immunooncology and Artificial Intelligence.
            </p>
            
            {/* LIIA Description */}
            <div className="bg-gradient-subtle rounded-2xl p-8 mb-12 text-left">
              <h2 className="text-2xl font-bold mb-4 text-foreground">About LIIA</h2>
              <p className="text-muted-foreground leading-relaxed">
                LIIA is a multidisciplinary research laboratory that combines artificial intelligence, 
                computational biology, and immunooncology to develop innovative solutions in the fight against cancer. 
                Our team works at the intersection of computer science, biology, and medicine, 
                developing advanced machine learning algorithms for genomic data analysis, 
                biomarker discovery, and personalized therapy development. Through national and 
                international collaborations, we seek to transform basic research into clinical 
                applications that benefit cancer patients.
              </p>
            </div>
          </div>

          {/* Team Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {teamMembers.map((member, index) => (
              <Card key={member.id} className="shadow-card hover:shadow-elegant transition-all duration-300 group animate-fade-in">
                <CardContent className="p-6 text-center">
                  <img 
                    src={member.image} 
                    alt={member.name}
                    className="w-32 h-32 rounded-full mx-auto mb-4 object-cover border-4 border-primary/20"
                  />
                  <h3 className="text-xl font-semibold text-foreground mb-1 group-hover:text-primary transition-colors">
                    {member.name}
                  </h3>
                  <p className="text-primary font-medium mb-3">
                    {member.position}
                  </p>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-4 line-clamp-3">
                    {member.bio}
                  </p>
                  <Button asChild className="w-full hover-scale">
                    <Link to={`/people/${member.id}`} className="flex items-center gap-2 justify-center">
                      View Profile
                      <ExternalLink className="h-4 w-4" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default People;