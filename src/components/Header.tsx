import { Button } from "@/components/ui/button";

const Header = () => {
  return (
    <header className="fixed top-0 w-full bg-background/95 backdrop-blur-sm border-b border-border z-50">
      <div className="container mx-auto px-4 py-4">
        <nav className="flex items-center justify-between">
          <div className="font-bold text-xl text-primary">
            BioinfoBlogs
          </div>
          <div className="hidden md:flex items-center space-x-8">
            <a href="/" className="text-foreground hover:text-primary transition-colors">
              Home
            </a>
            <a href="#vision" className="text-foreground hover:text-primary transition-colors">
              Vision
            </a>
            <a href="/research-group" className="text-foreground hover:text-primary transition-colors">
              Research Group
            </a>
            <a href="/publications" className="text-foreground hover:text-primary transition-colors">
              Publications
            </a>
            <a href="/blog" className="text-foreground hover:text-primary transition-colors">
              Blog
            </a>
            <a href="#contact" className="text-foreground hover:text-primary transition-colors">
              Contact
            </a>
          </div>
          <Button variant="outline" className="md:hidden">
            Menu
          </Button>
        </nav>
      </div>
    </header>
  );
};

export default Header;