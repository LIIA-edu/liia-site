const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">BioinfoBlogs</h3>
            <p className="text-primary-foreground/80 mb-4">
              Exploring computational biology through research, tutorials, and open science.
            </p>
            <p className="text-sm text-primary-foreground/60">
              © 2024 BioinfoBlogs. All rights reserved.
            </p>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-primary-foreground/80">
              <li><a href="/blog" className="hover:text-primary-foreground transition-colors">Blog</a></li>
              <li><a href="#about" className="hover:text-primary-foreground transition-colors">About</a></li>
              <li><a href="#publications" className="hover:text-primary-foreground transition-colors">Publications</a></li>
              <li><a href="#contact" className="hover:text-primary-foreground transition-colors">Contact</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Research Areas</h4>
            <ul className="space-y-2 text-primary-foreground/80">
              <li>Computational Biology</li>
              <li>Machine Learning</li>
              <li>Genomics & Single-Cell</li>
              <li>Bioinformatics Tools</li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-primary-foreground/20 mt-8 pt-8 text-center">
          <p className="text-primary-foreground/60">
            Built with modern web technologies for the scientific community
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;