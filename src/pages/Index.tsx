import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Education from "@/components/Education";
import Achievements from "@/components/Achievements";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import PowerBI from "@/components/PowerBI";
import Contact from "@/components/Contact";
import Hobbies from "@/components/Hobbies";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <About />
        <Experience />
        <Education />
        <Achievements />
        <Skills />
        <Projects />
        <PowerBI />
        <Contact />
        <Hobbies />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
