import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const skillCategories = [
  {
    title: "Languages",
    skills: ["Python", "JavaScript", "TypeScript", "C++", "HTML", "CSS"],
  },
  {
    title: "AI/ML Frameworks",
    skills: [
      "TensorFlow",
      "PyTorch",
      "Keras",
      "LangChain",
      "LlamaIndex",
      "LangGraph",
      "LlamaCpp",
    ],
  },
  {
    title: "Tools & Infrastructure",
    skills: [
      "Docker",
      "FastAPI",
      "Flask",
      "Apache Airflow",
      "MLFlow",
      "Git",
      "PySpark",
    ],
  },
  {
    title: "Databases & Storage",
    skills: ["ChromaDB", "MongoDB", "PostgreSQL", "ETL"],
  },
  {
    title: "LLM Providers",
    skills: ["OpenAI", "Groq", "Gemini", "Code Llama", "Mistral"],
  },
];

export function SkillsSection() {
  return (
    <section id="skills" className="py-16 md:py-24 px-6 md:px-8 bg-muted/30">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-display font-bold mb-12">
          Technical Skills
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => (
            <Card key={index} className="p-6" data-testid={`card-skill-${index}`}>
              <h3 className="text-lg font-display font-semibold mb-4">
                {category.title}
              </h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <Badge
                    key={skillIndex}
                    variant="secondary"
                    className="text-sm"
                  >
                    {skill}
                  </Badge>
                ))}
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
