import { useParams, Link } from "react-router-dom";
import { ArrowLeft, Mail, ExternalLink, Award, GraduationCap, BookOpen } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import MarkdownRenderer from "@/components/MarkdownRenderer";
import { getProfileById } from "@/utils/profileUtils";
import NotFound from "./NotFound";

const TeamMember = () => {
  const { id } = useParams<{ id: string }>();
  const member = getProfileById(id || '');

  if (!member) {
    return <NotFound />;
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-20">
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              {/* Back Button */}
              <div className="mb-8">
                <Button asChild variant="ghost" className="hover-scale">
                  <Link to="/people" className="flex items-center gap-2">
                    <ArrowLeft className="h-4 w-4" />
                    Back to Team
                  </Link>
                </Button>
              </div>

              {/* Profile Header */}
              <div className="bg-gradient-subtle rounded-2xl p-8 mb-8 shadow-elegant">
                <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
                  <img 
                    src={member.image} 
                    alt={member.name}
                    className="w-48 h-48 rounded-full object-cover border-4 border-primary/20 shadow-lg"
                  />
                  <div className="flex-1 text-center md:text-left">
                    <h1 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
                      {member.name}
                    </h1>
                    <p className="text-xl text-primary font-semibold mb-4">
                      {member.position}
                    </p>
                    <p className="text-lg text-muted-foreground leading-relaxed max-w-3xl">
                      {member.bio}
                    </p>
                    <div className="flex flex-wrap gap-4 mt-6 justify-center md:justify-start">
                      <Button asChild className="hover-scale">
                        <a href={`mailto:${member.email}`} className="flex items-center gap-2">
                          <Mail className="h-4 w-4" />
                          Contact
                        </a>
                      </Button>
                      {member.socialLinks?.linkedin && (
                        <Button asChild variant="outline" className="hover-scale">
                          <a href={member.socialLinks.linkedin} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                            <ExternalLink className="h-4 w-4" />
                            LinkedIn
                          </a>
                        </Button>
                      )}
                      {member.socialLinks?.google_scholar && (
                        <Button asChild variant="outline" className="hover-scale">
                          <a href={member.socialLinks.google_scholar} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                            <ExternalLink className="h-4 w-4" />
                            Google Scholar
                          </a>
                        </Button>
                      )}
                    </div>
                  </div>
                </div>
              </div>

              {/* Content Grid */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* Research Interests */}
                <Card className="shadow-card hover:shadow-elegant transition-shadow animate-fade-in">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <BookOpen className="h-5 w-5 text-primary" />
                      Research Interests
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2">
                      {member.researchInterests.map((interest, index) => (
                        <Badge key={index} variant="secondary" className="text-sm">
                          {interest}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                {/* Education */}
                <Card className="shadow-card hover:shadow-elegant transition-shadow animate-fade-in">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <GraduationCap className="h-5 w-5 text-primary" />
                      Education
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3">
                      {member.education.map((edu, index) => (
                        <li key={index} className="text-sm text-muted-foreground leading-relaxed">
                          {edu}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>

                {/* Publications */}
                <Card className="lg:col-span-2 shadow-card hover:shadow-elegant transition-shadow animate-fade-in">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <BookOpen className="h-5 w-5 text-primary" />
                      Selected Publications
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="prose prose-lg max-w-none dark:prose-invert">
                      <MarkdownRenderer content={member.content} />
                    </div>
                  </CardContent>
                </Card>

                {/* Awards */}
                {member.awards.length > 0 && (
                  <Card className="lg:col-span-2 shadow-card hover:shadow-elegant transition-shadow animate-fade-in">
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <Award className="h-5 w-5 text-primary" />
                        Awards and Recognition
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {member.awards.map((award, index) => (
                          <div key={index} className="flex items-center gap-3 p-3 border border-border rounded-lg bg-primary/5">
                            <Award className="h-4 w-4 text-primary flex-shrink-0" />
                            <span className="text-sm text-foreground">{award}</span>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                )}
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default TeamMember;