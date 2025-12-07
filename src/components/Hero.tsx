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
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-primary-foreground/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-secondary/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "1s" }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary-foreground/5 rounded-full blur-3xl" />
      </div>

      <div className="container py-16 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content - Text */}
          <div className="text-center lg:text-left order-2 lg:order-1">
            {/* Name Badge */}
            <div 
              className="inline-flex items-center gap-2 bg-primary-foreground/10 backdrop-blur-sm rounded-full px-4 py-2 mb-6 animate-slide-in-left"
              style={{ animationDelay: "0.1s" }}
            >
              <span className="w-2 h-2 bg-secondary rounded-full animate-pulse" />
              <span className="text-primary-foreground/90 text-sm font-medium">Available for Internships</span>
            </div>

            <p 
              className="text-primary-foreground/80 text-sm md:text-base uppercase tracking-widest mb-4 animate-slide-in-left" 
              style={{ animationDelay: "0.2s" }}
            >
              Hello, I'm
            </p>
            
            <h1 
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground mb-4 animate-slide-in-left" 
              style={{ animationDelay: "0.3s" }}
            >
              Antony Xavier J M
            </h1>
            
            <h2 
              className="text-xl md:text-2xl text-secondary font-semibold mb-6 animate-slide-in-left" 
              style={{ animationDelay: "0.4s" }}
            >
              B.Tech CSE Student | Aspiring Developer
            </h2>
            
            <p 
              className="text-primary-foreground/80 text-lg md:text-xl mb-8 max-w-xl mx-auto lg:mx-0 animate-slide-in-left" 
              style={{ animationDelay: "0.5s" }}
            >
              A passionate Computer Science student with a keen interest in web development, 
              problem-solving, and building innovative solutions.
            </p>

            {/* Contact Info */}
            <div 
              className="flex flex-wrap justify-center lg:justify-start gap-3 mb-6 animate-slide-in-left" 
              style={{ animationDelay: "0.6s" }}
            >
              <div className="flex items-center gap-2 text-primary-foreground/80 text-sm bg-primary-foreground/10 rounded-full px-4 py-2">
                <Mail size={14} />
                <span>antonyxavier@email.com</span>
              </div>
              <div className="flex items-center gap-2 text-primary-foreground/80 text-sm bg-primary-foreground/10 rounded-full px-4 py-2">
                <Phone size={14} />
                <span>+91 98765 43210</span>
              </div>
              <div className="flex items-center gap-2 text-primary-foreground/80 text-sm bg-primary-foreground/10 rounded-full px-4 py-2">
                <MapPin size={14} />
                <span>Chennai, India</span>
              </div>
            </div>

            {/* Social Links */}
            <div 
              className="flex justify-center lg:justify-start gap-3 mb-8 animate-slide-in-left" 
              style={{ animationDelay: "0.65s" }}
            >
              <a 
                href="https://github.com" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center text-primary-foreground hover:bg-primary-foreground/20 transition-all duration-300 hover:scale-110"
              >
                <Github size={20} />
              </a>
              <a 
                href="https://linkedin.com" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center text-primary-foreground hover:bg-primary-foreground/20 transition-all duration-300 hover:scale-110"
              >
                <Linkedin size={20} />
              </a>
            </div>

            <div 
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start animate-slide-in-left" 
              style={{ animationDelay: "0.7s" }}
            >
              <Button variant="hero" size="lg" onClick={scrollToProjects}>
                View Projects
                <ArrowRight className="ml-2" size={18} />
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 hover:text-primary-foreground"
              >
                <Download className="mr-2" size={18} />
                Download CV
              </Button>
            </div>
          </div>

          {/* Right Content - Avatar */}
          <div className="flex justify-center lg:justify-end order-1 lg:order-2">
            <div 
              className="relative animate-slide-in-right" 
              style={{ animationDelay: "0.3s" }}
            >
              {/* Decorative rings */}
              <div className="absolute inset-0 rounded-full border-2 border-primary-foreground/20 animate-pulse scale-110" />
              <div className="absolute inset-0 rounded-full border-2 border-secondary/30 animate-pulse scale-125" style={{ animationDelay: "0.5s" }} />
              
              {/* Avatar container */}
              <div className="w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-full bg-primary-foreground/10 backdrop-blur-sm border-4 border-primary-foreground/30 flex items-center justify-center overflow-hidden shadow-2xl">
                {/* Placeholder for avatar - replace src with actual image */}
                <div className="w-full h-full bg-gradient-to-br from-primary-foreground/20 to-secondary/20 flex items-center justify-center">
                  <span className="text-6xl md:text-7xl lg:text-8xl font-bold text-primary-foreground/50">AX</span>
                </div>
                {/* Uncomment and add your image:
                <img 
                  src="/your-avatar.jpg" 
                  alt="Antony Xavier" 
                  className="w-full h-full object-cover"
                />
                */}
              </div>

              {/* Floating badges */}
              <div 
                className="absolute -right-2 top-1/4 bg-card text-foreground px-4 py-2 rounded-full shadow-lg animate-fade-in border border-border"
                style={{ animationDelay: "0.8s" }}
              >
                <span className="text-sm font-semibold">CGPA: 9.14</span>
              </div>
              <div 
                className="absolute -left-4 bottom-1/4 bg-secondary text-secondary-foreground px-4 py-2 rounded-full shadow-lg animate-fade-in"
                style={{ animationDelay: "0.9s" }}
              >
                <span className="text-sm font-semibold">B.Tech CSE</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;