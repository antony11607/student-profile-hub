import { ExternalLink, Github, ArrowRight, Folder } from "lucide-react";
import { Button } from "./ui/button";
import { Link } from "react-router-dom";
import { projects } from "@/data/projects";

const techLogoMap: Record<string, string> = {
  "React": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
  "TypeScript": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
  "JavaScript": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
  "HTML": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
  "HTML/CSS": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
  "CSS": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
  "Tailwind CSS": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg",
  "Tailwind": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg",
  "Node.js": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
  "MongoDB": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
  "Python": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
  "API": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
};

const Projects = () => {
  return (
    <section id="projects" className="pb-24">
      <div className="container">
        {/* Section header with code comment style */}
        <p className="text-center text-syntax-comment font-mono text-sm mb-2 animate-fade-in">
          {"// Section: Projects"}
        </p>
        <h2 className="section-heading animate-fade-in">
          <span className="text-syntax-function">getProjects</span>
          <span className="text-muted-foreground">()</span>
        </h2>
        <p className="section-subheading animate-fade-in" style={{ animationDelay: "0.1s" }}>
          A collection of projects showcasing my journey in web development and programming.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className="group bg-card rounded-lg border border-border card-hover animate-fade-in overflow-hidden"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Card Header - Editor tab style */}
              <div className="flex items-center gap-2 px-4 py-3 bg-muted/50 border-b border-border">
                <Folder size={14} className="text-primary" />
                <span className="text-xs font-mono text-muted-foreground truncate flex-1">
                  {project.title.toLowerCase().replace(/\s+/g, '-')}/
                </span>
                <span className={`text-xs font-mono px-2 py-0.5 rounded ${
                  project.status === 'Completed' 
                    ? 'bg-secondary/20 text-secondary' 
                    : 'bg-syntax-function/20 text-syntax-function'
                }`}>
                  {project.status === 'Completed' ? '✓' : '○'}
                </span>
              </div>

              {/* Card Content */}
              <div className="p-5">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-mono uppercase tracking-wider text-muted-foreground bg-muted px-2 py-1 rounded border border-border">
                    {project.category}
                  </span>
                </div>
                
                <h3 className="text-lg font-mono font-semibold mb-2 group-hover:text-primary transition-colors duration-300">
                  {project.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed line-clamp-2 mb-4">
                  {project.description}
                </p>

                {/* Tech logos */}
                <div className="flex gap-1.5 mb-4">
                  {project.tags.slice(0, 4).map((tag) => (
                    <div
                      key={tag}
                      className="w-7 h-7 p-1.5 rounded bg-muted/50 border border-border flex items-center justify-center transition-all duration-300 hover:scale-110 hover:border-primary"
                      title={tag}
                    >
                      {techLogoMap[tag] ? (
                        <img
                          src={techLogoMap[tag]}
                          alt={tag}
                          className="w-full h-full object-contain"
                        />
                      ) : (
                        <span className="text-xs font-mono text-muted-foreground">{tag.charAt(0)}</span>
                      )}
                    </div>
                  ))}
                </div>
              </div>

              {/* Card Footer */}
              <div className="px-5 py-3 border-t border-border bg-muted/30 flex items-center justify-between">
                <div className="flex gap-1">
                  {project.github && (
                    <Button variant="ghost" size="sm" className="h-8 px-2 hover:bg-muted font-mono text-xs" asChild>
                      <a href={project.github} target="_blank" rel="noopener noreferrer">
                        <Github size={14} className="mr-1" />
                        repo
                      </a>
                    </Button>
                  )}
                  {project.demo && (
                    <Button variant="ghost" size="sm" className="h-8 px-2 hover:bg-muted font-mono text-xs" asChild>
                      <a href={project.demo} target="_blank" rel="noopener noreferrer">
                        <ExternalLink size={14} className="mr-1" />
                        demo
                      </a>
                    </Button>
                  )}
                </div>
                <Link to={`/projects/${project.id}`}>
                  <Button variant="ghost" size="sm" className="h-8 group/btn hover:bg-accent hover:text-primary font-mono text-xs">
                    details
                    <ArrowRight size={12} className="ml-1 group-hover/btn:translate-x-0.5 transition-transform" />
                  </Button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
    
  );
};
  <Footer/>
export default Projects;
