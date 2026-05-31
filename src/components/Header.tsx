import { Button } from "@/components/ui/button";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import { useState } from "react";

const Header = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [open, setOpen] = useState(false);

  const handleContactClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    setOpen(false);
    if (location.pathname === "/") {
      document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
    } else {
      navigate("/#contact");
    }
  };

  const navLinks = [
    { to: "/", label: "Home" },
    { to: "/people", label: "People" },
    { to: "/research", label: "Research" },
    { to: "/publications", label: "Publications" },
    { to: "/collaborations", label: "Collaborations" },
    { to: "/resources", label: "Resources" },
    { to: "/blog", label: "Blog" },
  ];

  return (
    <header className="fixed top-0 w-full bg-background/95 backdrop-blur-sm border-b border-border z-50">
      <div className="container mx-auto px-4 py-4">
        <nav className="flex items-center justify-between">
          <div className="flex flex-col">
            <div className="font-bold text-xl text-primary">LABIIT</div>
          </div>
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((l) => (
              <Link key={l.to} to={l.to} className="text-foreground hover:text-primary transition-colors">
                {l.label}
              </Link>
            ))}
            <a
              href="/#contact"
              onClick={handleContactClick}
              className="text-foreground hover:text-primary transition-colors"
            >
              Contact
            </a>
          </div>
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
              <Button
                variant="outline"
                size="icon"
                className="md:hidden transition-transform hover:scale-105"
                aria-label="Open menu"
              >
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-72">
              <div className="flex flex-col space-y-4 mt-8">
                {navLinks.map((l) => (
                  <Link
                    key={l.to}
                    to={l.to}
                    onClick={() => setOpen(false)}
                    className="text-foreground hover:text-primary transition-colors text-lg"
                  >
                    {l.label}
                  </Link>
                ))}
                <a
                  href="/#contact"
                  onClick={handleContactClick}
                  className="text-foreground hover:text-primary transition-colors text-lg"
                >
                  Contact
                </a>
              </div>
            </SheetContent>
          </Sheet>
        </nav>
      </div>
    </header>
  );
};

export default Header;
