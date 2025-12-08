import { ArrowRight, Download, Mail, Phone, MapPin, Github, Linkedin } from "lucide-react";
import { Button } from "./ui/button";

const Hero = () => {
  const scrollToProjects = () => {
    document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="home" className="min-h-screen hero-gradient flex items-center justify-center pt-16 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-secondary/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-primary-foreground/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "1s" }} />
      </div>

      <div className="container py-20 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          {/* Name Badge */}
          <div className="inline-flex items-center gap-2 bg-primary-foreground/10 backdrop-blur-sm rounded-full px-4 py-2 mb-6 animate-fade-in">
            <span className="w-2 h-2 bg-secondary rounded-full animate-pulse" />
            <span className="text-primary-foreground/90 text-sm font-medium">Available for Internships</span>
          </div>

          <p className="text-primary-foreground/80 text-sm md:text-base uppercase tracking-widest mb-4 animate-fade-in" style={{ animationDelay: "0.1s" }}>
            Hello, I'm
          </p>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground mb-4 animate-fade-in" style={{ animationDelay: "0.2s" }}>
            Antony Xavier J M
          </h1>
          
          <h2 className="text-xl md:text-2xl text-secondary font-semibold mb-6 animate-fade-in" style={{ animationDelay: "0.3s" }}>
            B.Tech CSE Student | Aspiring Developer
          </h2>
          
          <p className="text-primary-foreground/80 text-lg md:text-xl mb-8 max-w-xl mx-auto animate-fade-in" style={{ animationDelay: "0.4s" }}>
            A passionate Computer Science student with a keen interest in web development, 
            problem-solving, and building innovative solutions.
          </p>

          {/* Contact Info */}
          <div className="flex flex-wrap justify-center gap-4 mb-8 animate-fade-in" style={{ animationDelay: "0.5s" }}>
            <div className="flex items-center gap-2 text-primary-foreground/80 text-sm bg-primary-foreground/10 rounded-full px-4 py-2">
              <Mail size={16} />
              <span>antonyxavier@gmail.com</span>
            </div>
            <div className="flex items-center gap-2 text-primary-foreground/80 text-sm bg-primary-foreground/10 rounded-full px-4 py-2">
              <Phone size={16} />
              <span>+91 88389 25055</span>
            </div>
            <div className="flex items-center gap-2 text-primary-foreground/80 text-sm bg-primary-foreground/10 rounded-full px-4 py-2">
              <MapPin size={16} />
              <span>Chennai, India</span>
            </div>
          </div>

          {/* Social Links */}
          <div className="flex justify-center gap-3 mb-8 animate-fade-in" style={{ animationDelay: "0.55s" }}>
            <a href="https://github.com/antony11607" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center text-primary-foreground hover:bg-primary-foreground/20 transition-all duration-300 hover:scale-110">
              <Github size={20} />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center text-primary-foreground hover:bg-primary-foreground/20 transition-all duration-300 hover:scale-110">
              <Linkedin size={20} />
            </a>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in" style={{ animationDelay: "0.6s" }}>
            <Button variant="hero" size="lg" onClick={scrollToProjects}>
              View Projects
              <ArrowRight className="ml-2" size={18} />
            </Button>
            <Button variant="outline" size="lg" className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 hover:text-primary-foreground">
              <Download className="mr-2" size={18} />
              Download CV
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;