import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { GraduationCap } from "lucide-react";

export function EducationSection() {
  const courses = [
    "Data Structures & Algorithms",
    "Database Systems",
    "Natural Language Processing",
    "Data Visualization",
    "Generative AI",
    "OOP",
  ];

  return (
    <section className="py-16 md:py-24 px-6 md:px-8">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-display font-bold mb-12">
          Education
        </h2>

        <Card className="p-8">
          <div className="flex gap-6">
            <div className="flex-shrink-0">
              <div className="w-12 h-12 rounded-md bg-primary/10 flex items-center justify-center">
                <GraduationCap className="w-6 h-6 text-primary" />
              </div>
            </div>

            <div className="flex-1">
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-2 mb-4">
                <div>
                  <h3 className="text-2xl font-display font-semibold mb-1">
                    Bachelor's in Data Science
                  </h3>
                  <p className="text-lg text-muted-foreground font-medium">
                    FAST-NUCES
                  </p>
                </div>
                <Badge variant="secondary" className="self-start">
                  Aug 2021 - Jun 2025
                </Badge>
              </div>

              <p className="text-sm text-muted-foreground mb-4">
                Relevant Coursework:
              </p>
              <div className="flex flex-wrap gap-2">
                {courses.map((course, index) => (
                  <Badge key={index} variant="outline" className="text-sm">
                    {course}
                  </Badge>
                ))}
              </div>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
}
