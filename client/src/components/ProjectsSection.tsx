"use client";

import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogTrigger,
} from "@/components/ui/dialog";
import { ChevronRight, ExternalLink } from "lucide-react";

// Placeholder for n8n project - replace with your actual image
const n8nProjectImage = "https://images.unsplash.com/photo-1531746790731-6c087fecd65a?w=800&h=600&fit=crop";

const projects = [
  {
    title: "InsightAI Dashboard",
    description:
      "Automated data analysis and visualization platform enabling plain English queries on CSV/SQL/MongoDB data.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop",
    achievements: [
      "Multi-agent architecture with 7 specialized agents for data cleaning, visualization, ML recommendations and report generation",
      "Fine-tuned Code Llama with optional integrations to OpenAI, Groqcloud, Gemini",
      "Automated error recovery, real-time processing, and cost tracking",
      "Built with NextJS frontend and FastAPI backend",
    ],
    tech: [
      "LangChain",
      "Code Llama",
      "OpenAI",
      "NextJS",
      "FastAPI",
      "Multi-Agent",
    ],
  },
  {
    title: "Umrah Travel Assistant",
    description:
      "AI-driven chatbot with RAG automation for personalized Umrah package recommendations and automated booking workflows.",
    image: n8nProjectImage,
    achievements: [
      "Developed RAG agent to retrieve user-specific records from PostgreSQL and recommend Umrah packages",
      "Built workflow automations in n8n to handle query processing and recommendation logic",
      "Integrated Gmail API for automated email confirmations upon package selection",
      "Deployed the entire solution on AWS for scalability and reliability",
      "Developed a CMS website on WordPress to manage package content and chatbot integration",
    ],
    tech: ["n8n", "RAG", "PostgreSQL", "AWS", "WordPress", "Gmail API"],
  },
  {
    title: "Document Summary Generator",
    description:
      "Intelligent document summarization system using fine-tuned Mistral-7B for improved comprehension and query-driven summaries.",
    image: "https://images.unsplash.com/photo-1456324504439-367cee3b3c32?w=800&h=600&fit=crop",
    achievements: [
      "Fine-tuned Mistral-7B using Unsloth on ARIX scientific papers",
      "Benchmarked summarization quality using Groq as LLM-as-a-judge",
      "Implemented LangGraph-based agent workflow with Gradio UI",
    ],
    tech: ["Mistral-7B", "LangGraph", "Groq", "Gradio", "Unsloth"],
  },
  {
    title: "Blind Navigation System",
    description:
      "Computer vision-based navigation aid using object detection to help visually impaired individuals navigate safely.",
    image: "https://images.unsplash.com/photo-1617791160505-6f00504e3519?w=800&h=600&fit=crop",
    achievements: [
      "Developed object detection using PyTorch, YOLOv8, and OpenCV",
      "Computed relative distances of detected objects",
      "Determined safe navigation paths in real-time",
    ],
    tech: ["PyTorch", "YOLOv8", "OpenCV", "Computer Vision"],
  },
  {
    title: "E-Commerce Churn Prediction",
    description:
      "End-to-end ML pipeline predicting customer churn with ensemble models achieving 97% accuracy and full interpretability.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop",
    achievements: [
      "Achieved 97% accuracy with ensemble models (XGBoost, Random Forest)",
      "Applied LIME/SHAP for model interpretability",
      "Developed complete ML pipeline using MLFlow",
    ],
    tech: ["XGBoost", "Random Forest", "LIME", "SHAP", "MLFlow"],
  },
];

export function ProjectsSection() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section id="projects" className="py-24 px-6 md:px-8 bg-gradient-to-b from-background via-muted/20 to-background">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-4 bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
            Featured Projects
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            A showcase of AI/ML solutions spanning natural language processing, computer vision, and intelligent automation
          </p>
        </div>

        {/* Projects List */}
        <div className="space-y-8 max-w-5xl mx-auto">
          {projects.map((project, index) => (
            <Dialog
              key={index}
              open={open === index}
              onOpenChange={(isOpen) => setOpen(isOpen ? index : null)}
            >
              <DialogTrigger asChild>
                <Card
                  className="group flex flex-col md:flex-row overflow-hidden bg-card/50 backdrop-blur-sm border border-border/50 transition-all duration-300 hover:shadow-2xl hover:scale-[1.01] hover:border-primary/50 cursor-pointer rounded-xl"
                >
                  {/* Image Container */}
                  <div className="relative w-full md:w-2/5 h-64 md:h-auto overflow-hidden bg-muted">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <ExternalLink className="w-6 h-6 text-primary" />
                    </div>
                  </div>

                  {/* Content Container */}
                  <div className="flex flex-col flex-1 p-6 md:p-8">
                    {/* Title */}
                    <h3 className="text-2xl md:text-3xl font-display font-semibold mb-3">
                      {project.title}
                    </h3>
                    
                    {/* Description */}
                    <p className="text-base text-muted-foreground mb-6 leading-relaxed">
                      {project.description}
                    </p>
                    
                    {/* Tech Badges */}
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((tech, i) => (
                        <Badge
                          key={i}
                          variant="secondary"
                          className="text-sm font-medium rounded-full px-3 py-1 bg-primary/10 text-primary border-primary/20"
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </Card>
              </DialogTrigger>

              {/* Modal Dialog */}
              <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto rounded-xl">
                <DialogHeader className="space-y-3">
                  <DialogTitle className="text-3xl font-display font-bold">
                    {project.title}
                  </DialogTitle>
                  <DialogDescription className="text-base text-muted-foreground leading-relaxed">
                    {project.description}
                  </DialogDescription>
                </DialogHeader>

                {/* Modal Image */}
                <div className="relative aspect-video rounded-lg overflow-hidden my-6 border border-border/50">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Technologies */}
                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-3">
                    Technologies Used
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech, i) => (
                      <Badge 
                        key={i} 
                        variant="secondary" 
                        className="text-sm px-3 py-1 rounded-full bg-primary/10 text-primary border-primary/20"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>

                {/* Key Achievements */}
                <div>
                  <h4 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-4">
                    Key Achievements
                  </h4>
                  <ul className="space-y-3">
                    {project.achievements.map((achievement, i) => (
                      <li key={i} className="flex gap-3 text-sm leading-relaxed">
                        <ChevronRight className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                        <span className="text-foreground/90">{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </DialogContent>
            </Dialog>
          ))}
        </div>
      </div>
    </section>
  );
}