import Header from "@/components/Header";
import Hero from "@/components/Hero";
import BlogSection from "@/components/BlogSection";
import LaboratoryVision from "@/components/LaboratoryVision";
import Research from "@/components/Research";
import Publications from "@/components/Publications";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <Hero />
      <BlogSection />
      <LaboratoryVision />
      <Research />
      <Publications />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
