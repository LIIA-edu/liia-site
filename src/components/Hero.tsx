import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-bioinformatics.jpg";

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center bg-gradient-hero relative overflow-hidden">
      <div 
        className="absolute inset-0 bg-cover bg-center opacity-30"
        style={{ backgroundImage: `url(${heroImage})` }}
      />
      <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-accent/20" />
      
      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="max-w-4xl">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 text-white leading-tight">
            Advancing
            <span className="block text-accent"> Immunooncology with AI</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-white/90 max-w-2xl">
            Pioneering computational methods that harness artificial intelligence to understand cancer biology, 
            develop personalized treatments, and accelerate drug discovery.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;