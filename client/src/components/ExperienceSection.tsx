import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Briefcase, ChevronRight } from "lucide-react";

export function ExperienceSection() {
  return (
    <section id="experience" className="py-16 md:py-24 px-6 md:px-8 bg-muted/30">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-display font-bold mb-12">
          Work Experience
        </h2>

        <div className="relative">
          <div className="absolute left-6 top-8 bottom-8 w-px bg-border hidden md:block" />

          <Card className="p-8 relative">
            <div className="flex flex-col md:flex-row gap-6">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 rounded-md bg-primary/10 flex items-center justify-center">
                  <Briefcase className="w-6 h-6 text-primary" />
                </div>
              </div>

              <div className="flex-1">
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-2 mb-4">
                  <div>
                    <h3 className="text-2xl font-display font-semibold mb-1">
                      AI Engineer
                    </h3>
                    <p className="text-lg text-muted-foreground font-medium">
                      Hazen.ai
                    </p>
                  </div>
                  <Badge variant="secondary" className="self-start">
                    June 2025 – August 2025
                  </Badge>
                </div>

                <ul className="space-y-3">
                  <li className="flex gap-3">
                    <ChevronRight className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-foreground">
                      Engineered a multi-agent pipeline (4 agents) from scratch
                      integrating various LLMs (OpenAI, Groqcloud, Gemini) to
                      analyze real-time traffic data from natural language
                      queries.
                    </span>
                  </li>
                  <li className="flex gap-3">
                    <ChevronRight className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-foreground">
                      Automated the conversion of user queries into executable
                      MongoDB aggregation pipelines, reducing data analysis
                      time.
                    </span>
                  </li>
                  <li className="flex gap-3">
                    <ChevronRight className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-foreground">
                      Containerized and deployed the entire workflow using
                      Docker, ensuring scalable and reproducible analytics.
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
}
