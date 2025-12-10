import { ArrowRight, Download, Github, Linkedin, Mail, FileCode } from "lucide-react";
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
      {/* Background grid pattern */}
      <div className="absolute inset-0 pointer-events-none opacity-30">
        <div className="absolute inset-0" style={{
          backgroundImage: `linear-gradient(hsl(var(--border)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--border)) 1px, transparent 1px)`,
          backgroundSize: '40px 40px'
        }} />
      </div>

      {/* Subtle gradient blobs */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 left-1/4 w-80 h-80 bg-secondary/5 rounded-full blur-3xl" />
      </div>

      <div className="container relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Content - Text */}
          <div className="text-center lg:text-left order-2 lg:order-1">
            {/* Terminal-style Status */}
            <div 
              className="inline-flex items-center gap-2 bg-card border border-border rounded-lg px-4 py-2 mb-8 animate-fade-in font-mono text-sm"
            >
              <span className="text-secondary">●</span>
              <span className="text-muted-foreground">status:</span>
              <span className="text-secondary">available_for_internships</span>
            </div>

            {/* Code comment style */}
            <p 
              className="text-syntax-comment text-sm font-mono mb-2 animate-fade-in" 
              style={{ animationDelay: "0.1s" }}
            >
              {"// Hello, I'm"}
            </p>
            
            <h1 
              className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 animate-fade-in tracking-tight font-mono" 
              style={{ animationDelay: "0.15s" }}
            >
              <span className="gradient-text">Antony Xavier J M</span>
            </h1>
            
            <h2 
              className="text-xl md:text-2xl text-muted-foreground font-mono mb-6 animate-fade-in flex items-center justify-center lg:justify-start gap-2" 
              style={{ animationDelay: "0.2s" }}
            >
              <span className="text-syntax-keyword">const</span>
              <span className="text-syntax-variable">role</span>
              <span className="text-muted-foreground">=</span>
              <span className="text-syntax-string">"B.Tech CSE Student"</span>
            </h2>
            
            <p 
              className="text-muted-foreground text-lg leading-relaxed mb-8 max-w-lg mx-auto lg:mx-0 animate-fade-in" 
              style={{ animationDelay: "0.25s" }}
            >
              A passionate Computer Science student focused on building clean, user-friendly web applications with modern technologies.
            </p>

            {/* Social Links - Icon buttons with borders */}
            <div 
              className="flex justify-center lg:justify-start gap-2 mb-8 animate-fade-in" 
              style={{ animationDelay: "0.3s" }}
            >
              <a 
                href="https://github.com/antony11607" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="w-11 h-11 rounded-lg bg-card border border-border flex items-center justify-center text-muted-foreground hover:text-foreground hover:border-primary hover:shadow-glow transition-all duration-300"
              >
                <Github size={20} />
              </a>
              <a 
                href="https://www.linkedin.com/in/antony-xavier-jm-117ba3344/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="w-11 h-11 rounded-lg bg-card border border-border flex items-center justify-center text-muted-foreground hover:text-foreground hover:border-primary hover:shadow-glow transition-all duration-300"
              >
                <Linkedin size={20} />
              </a>
              <a 
                href="mailto:antonyxavierjm@gmail.com" 
                className="w-11 h-11 rounded-lg bg-card border border-border flex items-center justify-center text-muted-foreground hover:text-foreground hover:border-primary hover:shadow-glow transition-all duration-300"
              >
                <Mail size={20} />
              </a>
            </div>

            <div 
              className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start animate-fade-in" 
              style={{ animationDelay: "0.35s" }}
            >
              <Button size="lg" onClick={scrollToProjects} className="group font-mono">
                view_projects()
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={18} />
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                onClick={scrollToContact}
                className="font-mono"
              >
                <Download className="mr-2" size={18} />
                download_cv()
              </Button>
            </div>
          </div>

          {/* Right Content - Avatar in Editor Panel */}
          <div className="flex justify-center lg:justify-end order-1 lg:order-2">
            <div 
              className="relative animate-fade-in" 
              style={{ animationDelay: "0.2s" }}
            >
              {/* Editor-style container */}
              <div className="w-72 h-80 md:w-80 md:h-[360px] lg:w-[380px] lg:h-[420px] rounded-lg bg-card border border-border shadow-editor overflow-hidden">
                {/* Editor header */}
                <div className="flex items-center gap-2 px-4 py-3 bg-muted/50 border-b border-border">
                  <div className="flex gap-1.5">
                    <span className="w-3 h-3 rounded-full bg-destructive/60" />
                    <span className="w-3 h-3 rounded-full bg-syntax-function/60" />
                    <span className="w-3 h-3 rounded-full bg-secondary/60" />
                  </div>
                  <div className="flex-1 flex items-center justify-center gap-2">
                    <FileCode size={14} className="text-muted-foreground" />
                    <span className="text-xs font-mono text-muted-foreground">avatar.tsx</span>
                  </div>
                </div>
                
                {/* Avatar content area */}
                <div className="p-4 h-[calc(100%-44px)] flex flex-col">
                  {/* Code decoration */}
                  <div className="text-xs font-mono mb-3 space-y-1">
                    <div>
                      <span className="text-syntax-keyword">export</span>
                      <span className="text-muted-foreground"> </span>
                      <span className="text-syntax-keyword">const</span>
                      <span className="text-muted-foreground"> </span>
                      <span className="text-syntax-function">Developer</span>
                      <span className="text-muted-foreground"> = () =&gt; {"{"}</span>
                    </div>
                  </div>
                  
                  {/* Avatar placeholder */}
                  <div className="flex-1 rounded-lg bg-gradient-to-br from-muted to-background border border-border flex items-center justify-center">
                    <span className="text-6xl md:text-7xl lg:text-8xl font-bold font-mono text-muted-foreground/40">AX</span>
                  </div>
                  
                  {/* Closing code */}
                  <div className="text-xs font-mono mt-3">
                    <span className="text-muted-foreground">{"}"}</span>
                  </div>
                </div>
              </div>

              {/* Floating badges - Terminal style */}
              <div 
                className="absolute -right-4 top-1/4 bg-card px-4 py-2 rounded-lg border border-border shadow-editor animate-float font-mono text-sm"
              >
                <span className="text-muted-foreground">cgpa:</span>
                <span className="text-secondary ml-1 font-semibold">9.14</span>
              </div>
              <div 
                className="absolute -left-4 bottom-1/4 bg-primary text-primary-foreground px-4 py-2 rounded-lg shadow-button animate-float font-mono text-sm"
                style={{ animationDelay: "0.5s" }}
              >
                <span className="opacity-80">degree:</span>
                <span className="ml-1 font-semibold">B.Tech CSE</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
