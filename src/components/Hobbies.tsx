import { Card } from "@/components/ui/card";
import { Music, BookOpen, Gamepad2, Camera, Utensils, Heart, PenTool } from "lucide-react";

const Hobbies = () => {
  const hobbies = [
   
    {
      icon: <BookOpen className="w-8 h-8 text-tech-purple" />,
      title: "Reading  Books",
      description: "Always eager to learn new things through books and online resources. Currently reading Atomic Habits by James Clear."
    },
    {
      icon: <Camera className="w-8 h-8 text-tech-blue" />,
      title: "Content Creation",
      description: "I love creating content for on instagram and substack, sharing my knowledge with others."
    },
   
    {
      icon: <Heart className="w-8 h-8 text-tech-cyan" />,
      title: "Fitness",
      description: "Maintaining a healthy lifestyle through regular exercise. Helps me stay focused and energized."
    },
    {
      icon: <PenTool className="w-8 h-8 text-tech-purple" />,
      title: "Writing and philosophy",
      description: "I love writing and philosophy. I have a substack where I write about my thoughts regarding life philosophy."
    }
  ];

  return (
    <section id="hobbies" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Personal <span className="text-foreground">Interests</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Beyond Management, Coding, Leadership, here are some activities and hobbies that keep me inspired and balanced.
          </p>
        </div>

        <div className="grid grid-cols-4 gap-8 max-w-6xl mx-auto">
          {hobbies.map((hobby, index) => (
            <Card 
              key={index} 
              className="p-6 gradient-card border-border/50 hover:shadow-elegant transition-all duration-300 hover:scale-105 transform text-center"
            >
              <div className="flex flex-col items-center space-y-4">
                <div className="flex-shrink-0 p-3 bg-background rounded-lg shadow-sm">
                  {hobby.icon}
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">{hobby.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {hobby.description}
                  </p>
                </div>
              </div>
            </Card>
          ))}
        </div>

       
      </div>
    </section>
  );
};

export default Hobbies;
