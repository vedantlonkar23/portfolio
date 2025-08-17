import { Card } from "@/components/ui/card";
import { Award, Trophy, Medal, Star } from "lucide-react";

const Achievements = () => {
  const achievements = [
    {
      icon: <Medal className="w-6 h-6 text-tech-purple" />,
      title: "MSBTE Diploma in Computer Engineering",
      description: "Scored 93.31%",
    },
    {
      icon: <Trophy className="w-6 h-6 text-tech-blue" />,
      title: "CESA AAKAR 2022",
      description: "Runner-up in Startoventure (Startup Competition)",
    },
    {
      icon: <Award className="w-6 h-6 text-tech-cyan" />,
      title: "PACE PRUDENCE 2023",
      description: "2nd Runner-up in Sthitapradyna (general aptitude, group discussion, public speaking, stage skills)",
    },
    {
      icon: <Star className="w-6 h-6 text-tech-purple" />,
      title: "MCKS Pranic Healing",
      description: "Internationally recognized organization of alternative therapy",
      bullets: [
        "Basic Pranic Healing — completed in 2023",
        "Advanced Pranic Healing — completed in 2023",
      ],
    },
  ];

  return (
    <section id="achievements" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Achievements <span className="text-foreground">/ Awards</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Recognitions and milestones that reflect my dedication and growth.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6 max-w-6xl mx-auto">
          {achievements.map((item, index) => (
            <Card
              key={index}
              className="p-6 gradient-card border-border/50 hover:shadow-elegant transition-all duration-300 hover:scale-105 transform"
            >
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 p-3 bg-background rounded-lg shadow-sm">
                  {item.icon}
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-1">{item.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{item.description}</p>
                  {Array.isArray((item as any).bullets) && (
                    <ul className="mt-2 list-disc pl-5 space-y-1 text-muted-foreground text-sm">
                      {(item as any).bullets.map((b: string) => (
                        <li key={b}>{b}</li>
                      ))}
                    </ul>
                  )}
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Achievements;


