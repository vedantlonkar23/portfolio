import { Card } from "@/components/ui/card";
import { Code, Palette, Zap } from "lucide-react";

const About = () => {
  const highlights = [
    {
      icon: <Code className="w-8 h-8 text-tech-blue" />,
      title: "Problem Solving",
      description: "Love tackling coding challenges and finding efficient solutions."
    },
    {
      icon: <Palette className="w-8 h-8 text-tech-purple" />,
      title: "Creative Thinking",
      description: "Enjoy designing user-friendly interfaces and bringing creative ideas to life."
    },
    {
      icon: <Zap className="w-8 h-8 text-tech-cyan" />,
      title: "Quick Learner",
      description: "Always eager to learn new technologies and skills to improve myself have a life long learning mindset."
    }
  ];

  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            About <span className="text-foreground">Me</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            I'm a Information Technology student passionate about technology and eager to make an impact through code and my leadership skills.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <p className="text-lg leading-relaxed text-muted-foreground">
              I'm currently a student at Walchand College of Engineering Sangli studying Information Technology with a focus on 
              Product management, Business analytics, Software development and Artificial Intelligence. My journey started with curiosity about how apps work and how can I implement Artificial Intelligence to make day to day tasks more efficient, and now 
              I'm building my own projects and learning something new every day.
            </p>
            
            <p className="text-lg leading-relaxed text-muted-foreground">
              When I'm not studying or coding, I enjoy volunteering in events, taking leadership roles,and creating content for social media regarding leadership mindset and growth. I'm excited 
              about job and internship opportunities and building a career in management and technology.
            </p>

            <div className="flex flex-wrap gap-3 pt-4">
              {["Python", "Java", "SQL", "ML"].map((tech) => (
                <span
                  key={tech}
                  className="px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          <div className="space-y-6">
            {highlights.map((item, index) => (
              <Card 
                key={index} 
                className="p-6 gradient-card border-border/50 hover:shadow-elegant transition-all duration-300 hover:scale-105 transform"
              >
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 p-3 bg-background rounded-lg shadow-sm">
                    {item.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                    <p className="text-muted-foreground">{item.description}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;