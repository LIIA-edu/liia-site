import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="fixed top-0 w-full bg-background/95 backdrop-blur-sm border-b border-border z-50">
      <div className="container mx-auto px-4 py-4">
        <nav className="flex items-center justify-between">
          <div className="flex flex-col">
            <div className="font-bold text-xl text-primary">LIIA</div>
            <div className="text-xs text-muted-foreground">
              Laboratório de pesquisa em Imunooncologia e Inteligência Artificial
            </div>
          </div>
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-foreground hover:text-primary transition-colors">
              Home
            </Link>
            <a href={`${import.meta.env.PROD ? '/liia-site' : ''}/#vision`} className="text-foreground hover:text-primary transition-colors">
              Vision
            </a>
            <Link to="/people" className="text-foreground hover:text-primary transition-colors">
              People
            </Link>
            <Link to="/research" className="text-foreground hover:text-primary transition-colors">
              Research
            </Link>
            <Link to="/publications" className="text-foreground hover:text-primary transition-colors">
              Publications
            </Link>
            <Link to="/collaborations" className="text-foreground hover:text-primary transition-colors">
              Collaborations
            </Link>
            <Link to="/resources" className="text-foreground hover:text-primary transition-colors">
              Resources
            </Link>
            <Link to="/blog" className="text-foreground hover:text-primary transition-colors">
              Blog
            </Link>
            <a href={`${import.meta.env.PROD ? '/liia-site' : ''}/#contact`} className="text-foreground hover:text-primary transition-colors">
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
