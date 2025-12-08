import { ArrowRight, Download, Github, Linkedin, Mail } from "lucide-react";
import { Button } from "./ui/button";

const Hero = () => {
  const scrollToProjects = () => {
    document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-20 pb-16 relative overflow-hidden">
      {/* Subtle background gradient */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/4" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-secondary/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/4" />
      </div>

      <div className="container relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Content - Text */}
          <div className="text-center lg:text-left order-2 lg:order-1">
            {/* Status Badge */}
            <div 
              className="inline-flex items-center gap-2 bg-secondary/10 text-secondary rounded-full px-4 py-1.5 mb-8 animate-fade-in"
            >
              <span className="w-2 h-2 bg-secondary rounded-full animate-pulse-soft" />
              <span className="text-sm font-medium">Available for Internships</span>
            </div>

            <p 
              className="text-muted-foreground text-sm uppercase tracking-[0.2em] mb-4 animate-fade-in font-mono" 
              style={{ animationDelay: "0.1s" }}
            >
              Hello, I'm
            </p>
            
            <h1 
              className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 animate-fade-in tracking-tight" 
              style={{ animationDelay: "0.15s" }}
            >
              <span className="gradient-text">Antony Xavier J M</span>
            </h1>
            
            <h2 
              className="text-xl md:text-2xl text-muted-foreground font-medium mb-6 animate-fade-in" 
              style={{ animationDelay: "0.2s" }}
            >
              B.Tech CSE Student & Aspiring Developer
            </h2>
            
            <p 
              className="text-muted-foreground text-lg leading-relaxed mb-8 max-w-lg mx-auto lg:mx-0 animate-fade-in" 
              style={{ animationDelay: "0.25s" }}
            >
              A passionate Computer Science student focused on building clean, user-friendly web applications with modern technologies.
            </p>

            {/* Social Links */}
            <div 
              className="flex justify-center lg:justify-start gap-3 mb-8 animate-fade-in" 
              style={{ animationDelay: "0.3s" }}
            >
              <a 
                href="https://github.com/antony11607" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="w-11 h-11 rounded-xl bg-muted flex items-center justify-center text-muted-foreground hover:text-foreground hover:bg-accent transition-all duration-300"
              >
                <Github size={20} />
              </a>
              <a 
                href="https://www.linkedin.com/in/antony-xavier-jm-117ba3344/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="w-11 h-11 rounded-xl bg-muted flex items-center justify-center text-muted-foreground hover:text-foreground hover:bg-accent transition-all duration-300"
              >
                <Linkedin size={20} />
              </a>
              <a 
                href="mailto:antonyxavierjm@gmail.com" 
                className="w-11 h-11 rounded-xl bg-muted flex items-center justify-center text-muted-foreground hover:text-foreground hover:bg-accent transition-all duration-300"
              >
                <Mail size={20} />
              </a>
            </div>

            <div 
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start animate-fade-in" 
              style={{ animationDelay: "0.35s" }}
            >
              <Button size="lg" onClick={scrollToProjects} className="group">
                View Projects
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={18} />
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                onClick={scrollToContact}
              >
                <Download className="mr-2" size={18} />
                Download CV
              </Button>
            </div>
          </div>

          {/* Right Content - Avatar */}
          <div className="flex justify-center lg:justify-end order-1 lg:order-2">
            <div 
              className="relative animate-fade-in" 
              style={{ animationDelay: "0.2s" }}
            >
              {/* Avatar container */}
              <div className="w-72 h-72 md:w-80 md:h-80 lg:w-[400px] lg:h-[400px] rounded-3xl bg-gradient-to-br from-primary/20 via-secondary/10 to-accent overflow-hidden border border-border shadow-glow">
                {/* Placeholder for avatar */}
                <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-muted to-background">
                  <span className="text-7xl md:text-8xl lg:text-9xl font-bold text-muted-foreground/30">AX</span>
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
                className="absolute -right-4 top-1/4 bg-card px-4 py-2 rounded-2xl shadow-card-hover border border-border animate-float"
              >
                <span className="text-sm font-bold text-foreground">CGPA: 9.14</span>
              </div>
              <div 
                className="absolute -left-4 bottom-1/4 bg-primary text-primary-foreground px-4 py-2 rounded-2xl shadow-button animate-float"
                style={{ animationDelay: "0.5s" }}
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
