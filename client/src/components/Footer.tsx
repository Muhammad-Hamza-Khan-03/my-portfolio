import { Github, Linkedin, Mail } from "lucide-react";

export function Footer() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="border-t py-12 px-6 md:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="font-display font-bold text-xl mb-4">
              Muhammad Hamza Khan
            </h3>
            <p className="text-sm text-muted-foreground">
              ML Engineer specializing in Generative AI and Multi-Agent Systems
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <div className="flex flex-col gap-2">
              <button
                onClick={() => scrollToSection("about")}
                className="text-sm text-muted-foreground hover:text-primary transition-colors text-left"
                data-testid="footer-link-about"
              >
                About
              </button>
              <button
                onClick={() => scrollToSection("experience")}
                className="text-sm text-muted-foreground hover:text-primary transition-colors text-left"
                data-testid="footer-link-experience"
              >
                Experience
              </button>
              <button
                onClick={() => scrollToSection("projects")}
                className="text-sm text-muted-foreground hover:text-primary transition-colors text-left"
                data-testid="footer-link-projects"
              >
                Projects
              </button>
              <button
                onClick={() => scrollToSection("skills")}
                className="text-sm text-muted-foreground hover:text-primary transition-colors text-left"
                data-testid="footer-link-skills"
              >
                Skills
              </button>
            </div>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Connect</h4>
            <div className="flex gap-4">
              <a
                href="https://github.com/Muhammad-Hamza-Khan-03"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
                data-testid="footer-link-github"
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href="https://www.linkedin.com/in/hamza-khan03/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
                data-testid="footer-link-linkedin"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="mailto:hamzakhan102003@gmail.com"
                className="text-muted-foreground hover:text-primary transition-colors"
                data-testid="footer-link-email"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t pt-8 text-center">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Muhammad Hamza Khan. Built with modern
            web technologies.
          </p>
        </div>
      </div>
    </footer>
  );
}
