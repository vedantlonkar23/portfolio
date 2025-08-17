import { Github, Linkedin, Mail, Heart } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-muted/50 border-t border-border">
      <div className="container mx-auto px-6 py-12">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-2xl font-bold text-black">
              Vedant Lonkar
            </h3>
            <p className="text-muted-foreground mb-4">
              Information Technology student passionate about learning and building innovative software solutions.
            </p>
            <div className="flex space-x-4">
              <a 
                href="https://github.com/vedantlonkar23" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <Github className="w-5 h-5" />
              </a>
              <a 
                href="https://www.linkedin.com/in/vedant-lonkar-4a37a91b8/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a 
                href="mailto:vedantlonkar2004@gmail.com"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {[
                { href: "#about", label: "About" },
                { href: "#education", label: "Education" },
                { href: "#skills", label: "Skills" },
                { href: "#projects", label: "Projects" },
                { href: "#contact", label: "Contact" }
              ].map((link) => (
                <li key={link.href}>
                  <button
                    onClick={() => {
                      const element = document.querySelector(link.href);
                      element?.scrollIntoView({ behavior: "smooth" });
                    }}
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Opportunities</h4>
            <p className="text-muted-foreground mb-4">
              I'm actively seeking internship and job opportunities and entry-level positions in Product management, Business analytics and Software development.
            </p>
            <button
              onClick={() => {
                const element = document.querySelector("#contact");
                element?.scrollIntoView({ behavior: "smooth" });
              }}
              className="inline-flex items-center text-primary hover:text-primary/80 transition-colors font-medium"
            >
              Contact me
              <Mail className="w-4 h-4 ml-2" />
            </button>
          </div>
        </div>

        <div className="border-t border-border pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-muted-foreground text-sm mb-4 md:mb-0">
            © {currentYear} Vedant Lonkar. Made with{" "}
            <Heart className="w-4 h-4 inline text-red-500" />{" "}
            and lots of coffee during study sessions.
          </p>
          <button
            onClick={scrollToTop}
            className="text-primary hover:text-primary/80 transition-colors text-sm font-medium"
          >
            Back to top ↑
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;