import { Github, Linkedin, Mail } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t py-12 px-6 md:px-8">
      <div className="max-w-7xl mx-auto flex justify-center items-center gap-10">
        <a
          href="https://github.com/Muhammad-Hamza-Khan-03"
          target="_blank"
          rel="noopener noreferrer"
          className="text-muted-foreground hover:text-primary transition-colors"
        >
          <Github className="w-10 h-10" />
        </a>
        <a
          href="https://www.linkedin.com/in/hamza-khan03/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-muted-foreground hover:text-primary transition-colors"
        >
          <Linkedin className="w-10 h-10" />
        </a>
        <a
          href="mailto:hamzakhan102003@gmail.com"
          className="text-muted-foreground hover:text-primary transition-colors"
        >
          <Mail className="w-10 h-10" />
        </a>
      </div>
    </footer>
  );
}
