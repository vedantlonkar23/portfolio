import { Button } from "@/components/ui/button";
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";
import heroImage from "@/assets/hero-bg.jpg";

const Hero = () => {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section 
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
      style={{
        backgroundImage: `linear-gradient(135deg, rgba(88, 28, 135, 0.8), rgba(67, 56, 202, 0.8)), url(${heroImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed'
      }}
    >
      <div className="container mx-auto px-6 py-20 relative z-10">
        <div className="text-center text-white animate-fade-in-up">
          <div className="mb-6">
          
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Hi, I'm{" "}
            <span className="text-white">
              Vedant Lonkar
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl mb-4 text-gray-200 max-w-3xl mx-auto">
            Information Technology Student
          </p>
          
          <p className="text-lg mb-12 text-gray-300 max-w-2xl mx-auto leading-relaxed">
            Passionate about Project Management, Business Analytics, Software Development and Artificaial Intelligence and eager to learn new technologies. 
            Currently pursuing my Bachelor's in Information Technology and building exciting projects along the way.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button 
              variant="hero" 
              size="lg"
              onClick={() => scrollToSection("#projects")}
              className="group"
            >
              View My Projects
              <ArrowDown className="w-4 h-4 group-hover:translate-y-1 transition-transform" />
            </Button>
            <Button 
              variant="outline-glow" 
              size="lg"
              onClick={() => scrollToSection("#contact")}
            >
              Contact Me
            </Button>
          </div>

          <div className="flex justify-center space-x-6">
            <a 
              href="https://github.com/vedantlonkar23" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-3 bg-white/10 backdrop-blur-sm rounded-full hover:bg-white/20 transition-all duration-300 hover:scale-110 transform border border-white/20"
            >
              <Github className="w-6 h-6" />
            </a>
            <a 
              href="https://www.linkedin.com/in/vedant-lonkar-4a37a91b8/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-3 bg-white/10 backdrop-blur-sm rounded-full hover:bg-white/20 transition-all duration-300 hover:scale-110 transform border border-white/20"
            >
              <Linkedin className="w-6 h-6" />
            </a>
            <a 
              href="mailto:vedantlonkar2004@gmail.com"
              className="p-3 bg-white/10 backdrop-blur-sm rounded-full hover:bg-white/20 transition-all duration-300 hover:scale-110 transform border border-white/20"
            >
              <Mail className="w-6 h-6" />
            </a>
          </div>
        </div>
      </div>

      {/* Floating elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-white/5 rounded-full animate-float"></div>
      <div className="absolute top-40 right-20 w-16 h-16 bg-purple-400/10 rounded-full animate-float" style={{ animationDelay: "2s" }}></div>
      <div className="absolute bottom-40 left-20 w-12 h-12 bg-blue-400/10 rounded-full animate-float" style={{ animationDelay: "4s" }}></div>
    </section>
  );
};

export default Hero;