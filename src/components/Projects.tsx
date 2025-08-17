import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github, Play, Linkedin } from "lucide-react";
import project1 from "@/assets/project1.jpg";
import mbtiImage from "@/assets/mbti-predictor.png.png";
import fragranceImage from "@/assets/fragrance.png";

const Projects = () => {
  const projects = [
    {
      title: "MTBI Personality Predictor",
      description: "Built an AI-powered system that takes 60 questions to predict one of 16 MBTI personality types using machine learning. It shows results with confidence scores and a detailed analysis through a sleek web interface.",
      image: mbtiImage,
      technologies: ["Python", "Streamlit", "Git", "GitHub", "Machine Learning", "AI"],
      liveUrl: "https://mbti-personality-prediction.streamlit.app/",
      githubUrl: "https://github.com/vedantlonkar23/MBTI-personality-test",
      featured: true
    },
    {
      title: "Frag AI",
      description: "A Python and Streamlit project that helps users find perfumes based on gender and brand. And also help perfumers to create new perfume concentration and find the concentrations of existing perfumes.",
      image: fragranceImage,
      technologies: ["Python", "Streamlit", "Git", "GitHub", "AI", "Recommendation System"],
      liveUrl: "https://fragrance-generator.streamlit.app/",
      githubUrl: "https://github.com/vedantlonkar23/Frag-Ai",
      featured: true
    },
    {
      title: "N8N Workflow Automation",
      description: "Developed comprehensive workflow automation solutions using n8n to streamline business processes, integrate multiple systems, and improve operational efficiency. The project demonstrates advanced automation capabilities with complex workflow orchestration.",
      image: project1, // You can replace this with a screenshot of your n8n workflow
      technologies: ["N8N", "API Integration", "Workflow Automation"],
      videoUrl: "https://youtu.be/DHIsnyFtHJo",
      linkedinUrl: "https://www.linkedin.com/posts/vedant-lonkar-4a37a91b8_automation-ai-artificialintelligence-activity-7360650073887723520-ldxZ?utm_source=share&utm_medium=member_desktop&rcm=ACoAADKpvXsBuOhG3drUWjJP82MXKxQI31fZNIU",
      featured: true
    }
  ];

  // Function to convert YouTube URL to embed URL
  const getEmbedUrl = (url: string) => {
    if (!url) return "";
    
    // Handle YouTube URLs
    if (url.includes('youtube.com/watch')) {
      const videoId = url.split('v=')[1]?.split('&')[0];
      return videoId ? `https://www.youtube.com/embed/${videoId}` : url;
    }
    
    // Handle YouTube short URLs
    if (url.includes('youtu.be/')) {
      const videoId = url.split('youtu.be/')[1]?.split('?')[0];
      return videoId ? `https://www.youtube.com/embed/${videoId}` : url;
    }
    
    // Handle Vimeo URLs
    if (url.includes('vimeo.com/')) {
      const videoId = url.split('vimeo.com/')[1]?.split('/')[0];
      return videoId ? `https://player.vimeo.com/video/${videoId}` : url;
    }
    
    return url;
  };

  return (
    <section id="projects" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            My Projects
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A diverse portfolio showcasing AI/ML applications, networking platforms, and mobile app designs using various technologies and methodologies.
          </p>
        </div>

        <div className="grid gap-8 max-w-6xl mx-auto">
          {projects.map((project, index) => (
            <Card 
              key={index} 
              className={`overflow-hidden group hover:shadow-elegant transition-all duration-500 border-border/50 ${
                project.featured ? 'lg:grid lg:grid-cols-2 lg:gap-0' : ''
              }`}
            >
              <div className={`relative overflow-hidden ${project.featured ? 'lg:order-2' : ''}`}>
                {project.videoUrl ? (
                  <div className="w-full h-64 lg:h-full">
                    <iframe
                      src={getEmbedUrl(project.videoUrl)}
                      title={project.title}
                      className="w-full h-full object-cover"
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    ></iframe>
                  </div>
                ) : (
                  <>
                    <img 
                      src={project.image} 
                      alt={project.title}
                      className="w-full h-64 lg:h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </>
                )}
              </div>
              
              <div className={`p-8 flex flex-col justify-center ${project.featured ? 'lg:order-1' : ''}`}>
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-2xl font-bold">{project.title}</h3>
                   
                  
                </div>
                
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech, techIndex) => (
                    <Badge key={techIndex} variant="secondary" className="text-xs">
                      {tech}
                    </Badge>
                  ))}
                </div>
                
                <div className="flex gap-4 flex-wrap">
                  {project.liveUrl && project.liveUrl !== project.githubUrl && (
                    <Button variant="outline" size="sm" asChild>
                      <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="w-4 h-4 mr-2" />
                        Demo
                      </a>
                    </Button>
                  )}
                  {project.linkedinUrl && (
                    <Button variant="outline" size="sm" asChild>
                      <a href={project.linkedinUrl} target="_blank" rel="noopener noreferrer">
                        <Linkedin className="w-4 h-4 mr-2" />
                        LinkedIn Post
                      </a>
                    </Button>
                  )}
                  {project.githubUrl && (
                    <Button variant="outline" size="sm" asChild>
                      <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                        <Github className="w-4 h-4 mr-2" />
                        GitHub
                      </a>
                    </Button>
                  )}
                </div>
              </div>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          
        </div>
      </div>
    </section>
  );
};

export default Projects;