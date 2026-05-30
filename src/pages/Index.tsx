import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import BlogSection from "@/components/BlogSection";
import LaboratoryVision from "@/components/LaboratoryVision";
import Research from "@/components/Research";
import Publications from "@/components/Publications";
import Collaborations from "@/components/Collaborations";
import ResourcesTools from "@/components/ResourcesTools";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const id = location.hash.slice(1);
      // Defer to allow sections to mount
      requestAnimationFrame(() => {
        document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
      });
    }
  }, [location.hash]);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <Hero />
      <BlogSection />
      <LaboratoryVision />
      <Research />
      <Publications />
      <Collaborations />
      <ResourcesTools />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
