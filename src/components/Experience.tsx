import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, MapPin, Building, ExternalLink } from "lucide-react";

const Experience = () => {
  const experiences = [
    {
      title: "Founder",
      company: "Loopspace",
      location: "Remote",
      period: "Feb 2025 - Present",
      type: "Founder",
      description: "Managing operations and planning a complete working and revenue model. Working on the marketing and GTM strategy of the product.",
      technologies: ["Business Strategy", "Operations Management", "Marketing", "GTM Strategy", "Revenue Modeling"],
      achievements: [
        "Established startup from ground up with complete business model",
        "Developed comprehensive marketing and go-to-market strategy",
        "Managing day-to-day operations and strategic planning"
      ],
      link: null
    },
    {
      title: "Core Member/Institute Representative",
      company: "Social Shuffle 2025",
      location: "India",
      period: "Jan 2025 - Apr 2025",
      type: "Leadership",
      description: "Core member and Think Tank member of India's first collaboration project to bring Innovation in Medical Sciences.",
      technologies: ["Innovation Strategy", "Medical Sciences", "Collaboration", "Leadership","Team Management", "Project Management"],
      achievements: [
        "Part of India's first medical sciences innovation collaboration",
        "Contributed to think tank discussions and strategic planning",
        "Represented institute in national-level innovation project"
      ],
      link: null
    },
    {
      title: "Lead Curator",
      company: "TEDxWCE Sangli",
      location: "Sangli, Maharashtra",
      period: "Jan 2025 - Apr 2025",
      type: "Leadership",
      description: "Curated themes, engaged industry leaders, refined talks to TEDx standards, and managed event planning, content, and audience engagement.",
      technologies: ["Event Management", "Content Curation", "Public Speaking", "Leadership", "TEDx Standards"],
      achievements: [
        "Successfully curated and executed TEDx event",
        "Managed industry leader engagement and content refinement",
        "Led event planning and audience engagement strategies"
      ],
      link: null
    },
    {
      title: "Head of Business Development",
      company: "Innovation Incubation Entrepreneurship (IIE) Club, Walchand College of Engineering",
      location: "Sangli, Maharashtra",
      period: "Dec 2024 - Apr 2025",
      type: "Leadership",
      description: "Driving innovation and entrepreneurship among students through strategic partnerships. Organizing workshops and mentoring students in business idea development.",
      technologies: ["Business Development", "Strategic Partnerships", "Workshop Organization", "Student Mentoring", "Innovation"],
      achievements: [
        "Established strategic partnerships for innovation initiatives",
        "Organized workshops to foster entrepreneurship among students",
        "Mentored students in business idea development and execution"
      ],
      link: null
    },
    {
      title: "Main Secretary",
      company: "Students' Association of Information Technology (SAIT)",
      location: "Walchand College of Engineering, Sangli",
      period: "Apr 2024 - Apr 2025",
      type: "Leadership",
      description: "Led Techfusion 2K24 with 800+ participants and secured sponsorships, strengthening the club's network and funding.",
      technologies: ["Event Leadership", "Sponsorship Management", "Team Management", "Networking", "Student Leadership"],
      achievements: [
        "Successfully led Techfusion 2K24 with 800+ participants",
        "Secured sponsorships to strengthen club's funding",
        "Built and strengthened club's network and partnerships"
      ],
      link: null
    },
    {
      title: "Assistant Program Director",
      company: "Students' Association of Information Technology (SAIT)",
      location: "Walchand College of Engineering, Sangli",
      period: "Dec 2023 - Apr 2024",
      type: "Leadership",
      description: "Coordinated CodeCraft and Club Service coding contests, resulting in a 25% rise in student participation.",
      technologies: ["Program Coordination", "Event Management", "Student Engagement", "Coding Contests", "Leadership"],
      achievements: [
        "Coordinated CodeCraft and Club Service coding contests",
        "Achieved 25% increase in student participation",
        "Successfully managed multiple technical events simultaneously"
      ],
      link: null
    }
  ];

  return (
    <section id="experience" className="py-20 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            My <span className="text-foreground">Experience</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Professional journey, internships, and hands-on projects that have shaped my development skills.
          </p>
        </div>

        <div className="max-w-6xl mx-auto space-y-8">
          {experiences.map((exp, index) => (
            <Card 
              key={index} 
              className="p-8 gradient-card border-border/50 hover:shadow-elegant transition-all duration-300 hover:scale-105 transform"
            >
              <div className="flex flex-col lg:flex-row gap-8">
                {/* Left side - Company info */}
                <div className="lg:w-1/3">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <div className="p-3 bg-primary/10 text-primary rounded-lg">
                        <Building className="w-6 h-6" />
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold">{exp.title}</h3>
                        <h4 className="text-xl text-primary font-semibold">{exp.company}</h4>
                      </div>
                    </div>
                    
                  </div>

                  <div className="space-y-3 text-muted-foreground mb-6">
                    <div className="flex items-center">
                      <Calendar className="w-4 h-4 mr-2" />
                      {exp.period}
                    </div>
                    <div className="flex items-center">
                      <MapPin className="w-4 h-4 mr-2" />
                      {exp.location}
                    </div>
                  </div>

                  {exp.link && (
                    <a 
                      href={exp.link} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-primary hover:text-primary/80 transition-colors font-medium"
                    >
                      Visit Company
                      <ExternalLink className="w-4 h-4 ml-2" />
                    </a>
                  )}
                </div>

                {/* Right side - Description and achievements */}
                <div className="lg:w-2/3 space-y-6">
                  <p className="text-lg leading-relaxed text-muted-foreground">
                    {exp.description}
                  </p>

                  <div>
                    <h5 className="font-semibold mb-3">Technologies Used:</h5>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {exp.technologies.map((tech, techIndex) => (
                        <Badge key={techIndex} variant="secondary" className="text-xs">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h5 className="font-semibold mb-3">Key Achievements:</h5>
                    <div className="space-y-2">
                      {exp.achievements.map((achievement, achievementIndex) => (
                        <div key={achievementIndex} className="flex items-start">
                          <div className="w-2 h-2 bg-tech-cyan rounded-full mt-2 mr-3 flex-shrink-0"></div>
                          <span className="text-muted-foreground text-sm">{achievement}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>

        
      </div>
    </section>
  );
};

export default Experience;