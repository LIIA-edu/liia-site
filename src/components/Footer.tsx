import { siteConfig } from "@/utils/siteConfig";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">{siteConfig.siteName}</h3>
            <p className="text-primary-foreground/80 mb-4">
              {siteConfig.siteFullName}
            </p>
            <p className="text-sm text-primary-foreground/60">
              {siteConfig.copyright}
            </p>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-primary-foreground/80">
              {siteConfig.quickLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="hover:text-primary-foreground transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Research Areas</h4>
            <ul className="space-y-2 text-primary-foreground/80">
              {siteConfig.footerResearchAreas.map((area) => (
                <li key={area}>{area}</li>
              ))}
            </ul>
          </div>
        </div>
        
        <div className="border-t border-primary-foreground/20 mt-8 pt-8 text-center">
          <p className="text-primary-foreground/60">
            {siteConfig.footerNote}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;