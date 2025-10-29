import { Github, Linkedin, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "./ThemeToggle";
import { useState } from "react";

export function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setMobileMenuOpen(false);
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b bg-background/80 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          <button
            onClick={() => scrollToSection("hero")}
            className="text-xl font-display font-bold hover-elevate active-elevate-2 px-3 py-2 rounded-md transition-all"
            data-testid="button-logo"
          >
            HK
          </button>

          <div className="hidden md:flex items-center gap-2">
            <Button
              variant="ghost"
              onClick={() => scrollToSection("about")}
              data-testid="link-about"
            >
              About
            </Button>
            <Button
              variant="ghost"
              onClick={() => scrollToSection("experience")}
              data-testid="link-experience"
            >
              Experience
            </Button>
            <Button
              variant="ghost"
              onClick={() => scrollToSection("projects")}
              data-testid="link-projects"
            >
              Projects
            </Button>
            <Button
              variant="ghost"
              onClick={() => scrollToSection("skills")}
              data-testid="link-skills"
            >
              Skills
            </Button>
            <Button
              variant="ghost"
              onClick={() => scrollToSection("contact")}
              data-testid="link-contact"
            >
              Contact
            </Button>
          </div>

          <div className="flex items-center gap-2">
            <ThemeToggle />
            <Button
              variant="ghost"
              size="icon"
              asChild
              className="hidden md:flex"
            >
              <a
                href="https://github.com/Muhammad-Hamza-Khan-03"
                target="_blank"
                rel="noopener noreferrer"
                data-testid="link-github"
              >
                <Github className="h-5 w-5" />
                <span className="sr-only">GitHub</span>
              </a>
            </Button>
            <Button
              variant="ghost"
              size="icon"
              asChild
              className="hidden md:flex"
            >
              <a
                href="https://www.linkedin.com/in/hamza-khan03/"
                target="_blank"
                rel="noopener noreferrer"
                data-testid="link-linkedin"
              >
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </a>
            </Button>

            <Button
              variant="ghost"
              size="icon"
              className="md:hidden"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              data-testid="button-mobile-menu"
            >
              {mobileMenuOpen ? (
                <X className="h-5 w-5" />
              ) : (
                <Menu className="h-5 w-5" />
              )}
            </Button>
          </div>
        </div>

        {mobileMenuOpen && (
          <div className="md:hidden py-4 border-t">
            <div className="flex flex-col gap-2">
              <Button
                variant="ghost"
                onClick={() => scrollToSection("about")}
                className="justify-start"
                data-testid="mobile-link-about"
              >
                About
              </Button>
              <Button
                variant="ghost"
                onClick={() => scrollToSection("experience")}
                className="justify-start"
                data-testid="mobile-link-experience"
              >
                Experience
              </Button>
              <Button
                variant="ghost"
                onClick={() => scrollToSection("projects")}
                className="justify-start"
                data-testid="mobile-link-projects"
              >
                Projects
              </Button>
              <Button
                variant="ghost"
                onClick={() => scrollToSection("skills")}
                className="justify-start"
                data-testid="mobile-link-skills"
              >
                Skills
              </Button>
              <Button
                variant="ghost"
                onClick={() => scrollToSection("contact")}
                className="justify-start"
                data-testid="mobile-link-contact"
              >
                Contact
              </Button>
              <div className="flex gap-2 pt-2">
                <Button variant="ghost" size="icon" asChild>
                  <a
                    href="https://github.com/Muhammad-Hamza-Khan-03"
                    target="_blank"
                    rel="noopener noreferrer"
                    data-testid="mobile-link-github"
                  >
                    <Github className="h-5 w-5" />
                  </a>
                </Button>
                <Button variant="ghost" size="icon" asChild>
                  <a
                    href="https://www.linkedin.com/in/hamza-khan03/"
                    target="_blank"
                    rel="noopener noreferrer"
                    data-testid="mobile-link-linkedin"
                  >
                    <Linkedin className="h-5 w-5" />
                  </a>
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
