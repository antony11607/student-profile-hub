import { ArrowRight, Download } from "lucide-react";
import { Button } from "./ui/button";

const Hero = () => {
  return (
    <section
      id="home"
      className="min-h-screen hero-gradient flex items-center justify-center pt-16"
    >
      <div className="container py-20">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-primary-foreground/80 text-sm md:text-base uppercase tracking-widest mb-4 animate-fade-in">
            Engineering Student
          </p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground mb-6 animate-fade-in" style={{ animationDelay: '0.1s' }}>
            Building Tomorrow's
            <br />
            <span className="text-secondary">Solutions Today</span>
          </h1>
          <p className="text-primary-foreground/80 text-lg md:text-xl mb-8 max-w-xl mx-auto animate-fade-in" style={{ animationDelay: '0.2s' }}>
            A passionate engineering student specializing in innovative projects, 
            cutting-edge technology, and creative problem-solving.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in" style={{ animationDelay: '0.3s' }}>
            <Button variant="hero" size="lg">
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
