import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Code, Palette, Zap, Users, Mic, Target } from "lucide-react";

const Skills = () => {
  const allSkills = [
    {
      icon: <Code className="w-6 h-6" />,
      title: "Programming Languages",
      color: "text-tech-blue",
      items: ["Java", "SQL", "Python"],
      type: "technical"
    },
    {
      icon: <Palette className="w-6 h-6" />,
      title: "Tools",
      color: "text-tech-purple",
      items: ["Figma", "MS Excel", "Jira", "N8N Workflow Automation"],
      type: "technical"
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Frameworks & Methodologies",
      color: "text-tech-blue",
      items: ["Agile", "Scrum", "ML"],
      type: "technical"
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Soft Skills",
      color: "text-tech-purple",
      items: ["Public Speaking", "Leadership", "Team Management"],
      type: "soft"
    }
  ];

  return (
    <section id="skills" className="py-20 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            My <span className="text-foreground">Skills</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A comprehensive toolkit of technical expertise and interpersonal abilities.
          </p>
        </div>

        {/* All Skills Grid */}
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {allSkills.map((category, index) => (
            <Card 
              key={index} 
              className="p-8 gradient-card border-border/50 hover:shadow-elegant transition-all duration-300 hover:scale-105 transform"
            >
              <div className="text-center mb-6">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 text-primary rounded-full mb-4">
                  {category.icon}
                </div>
                <h3 className={`text-xl font-bold ${category.color} mb-4`}>
                  {category.title}
                </h3>
              </div>
              
              <div className="flex flex-wrap gap-3 justify-center">
                {category.items.map((item) => (
                  <Badge 
                    key={item} 
                    variant="secondary" 
                    className="px-4 py-2 text-sm font-medium hover:bg-primary hover:text-primary-foreground transition-colors"
                  >
                    {item}
                  </Badge>
                ))}
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;