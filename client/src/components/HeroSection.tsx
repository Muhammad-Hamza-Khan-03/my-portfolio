import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, MapPin } from "lucide-react";
import headshotImage from "@assets/generated_images/__Professional_headshot_portrait_7acb9d00.jpeg";

export function HeroSection() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center px-6 md:px-8 pt-16 md:pt-20"
    >
      <div className="max-w-4xl mx-auto text-center">
        <div className="flex justify-center mb-8">
          <Avatar className="w-32 h-32 md:w-40 md:h-40 border-2">
            <AvatarImage src={headshotImage} alt="Muhammad Hamza Khan" />
            <AvatarFallback className="text-4xl">HK</AvatarFallback>
          </Avatar>
        </div>

        <h1 className="text-5xl md:text-6xl lg:text-7xl font-display font-bold mb-4 leading-tight">
          Muhammad Hamza Khan
        </h1>

        <p className="text-2xl md:text-3xl lg:text-4xl font-display font-semibold mb-4">
          ML Engineer specializing in{" "}
          <span className="bg-gradient-to-r from-primary to-chart-2 bg-clip-text text-transparent">
            Generative AI
          </span>
        </p>

        <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-4 leading-relaxed">
          Building intelligent multi-agent systems and end-to-end ML solutions.
          Hands-on experience with LangChain, PyTorch, and modern LLMs.
        </p>

        <div className="flex items-center justify-center gap-4 text-sm text-muted-foreground mb-8">
          <div className="flex items-center gap-2">
            <MapPin className="w-4 h-4" />
            <span>Lahore, Pakistan</span>
          </div>
          <div className="flex items-center gap-2">
            <Mail className="w-4 h-4" />
            <span>hamzakhan102003@gmail.com</span>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
          <Button
            size="lg"
            onClick={() => scrollToSection("projects")}
            data-testid="button-view-projects"
          >
            View Projects
          </Button>
          <Button
            size="lg"
            variant="outline"
            onClick={() => scrollToSection("contact")}
            data-testid="button-contact"
          >
            Get in Touch
          </Button>
        </div>

        <div className="flex gap-4 justify-center">
          <Button variant="ghost" size="icon" asChild>
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              data-testid="hero-link-github"
            >
              <Github className="w-6 h-6" />
              <span className="sr-only">GitHub</span>
            </a>
          </Button>
          <Button variant="ghost" size="icon" asChild>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              data-testid="hero-link-linkedin"
            >
              <Linkedin className="w-6 h-6" />
              <span className="sr-only">LinkedIn</span>
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}
