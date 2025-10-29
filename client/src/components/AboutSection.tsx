import { Card } from "@/components/ui/card";
import { GraduationCap, Award, Users } from "lucide-react";

export function AboutSection() {
  return (
    <section id="about" className="py-16 md:py-24 px-6 md:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center gap-3 mb-6">
          <GraduationCap className="w-6 h-6 text-primary" />
          <span className="text-sm font-medium text-muted-foreground uppercase tracking-wide">
            FAST-NUCES Graduate
          </span>
        </div>

        <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">
          About Me
        </h2>

        <div className="space-y-4 text-lg leading-relaxed text-foreground mb-12">
          <p>
            ML Engineer with a Bachelor's in Data Science from FAST-NU,
            specializing in Generative AI and Machine Learning. I have hands-on
            experience in developing multi-agent systems and end-to-end
            predictive models.
          </p>
          <p>
            My work focuses on creating intelligent solutions for complex
            business intelligence challenges, leveraging cutting-edge AI
            technologies including LangChain, LangGraph, and modern LLMs from
            OpenAI, Groq, and Gemini.
          </p>
          <p>
            I'm passionate about building practical AI applications that solve
            real-world problems, from automated data analysis dashboards to
            document intelligence systems.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card className="p-6 text-center">
            <div className="text-4xl font-display font-bold text-primary mb-2">
              4+
            </div>
            <div className="text-sm text-muted-foreground font-medium">
              Major Projects
            </div>
          </Card>
          <Card className="p-6 text-center">
            <div className="text-4xl font-display font-bold text-primary mb-2">
              7
            </div>
            <div className="text-sm text-muted-foreground font-medium">
              Multi-Agent Systems Built
            </div>
          </Card>
          <Card className="p-6 text-center">
            <div className="text-4xl font-display font-bold text-primary mb-2">
              97%
            </div>
            <div className="text-sm text-muted-foreground font-medium">
              Model Accuracy Achieved
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
}
