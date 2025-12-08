import { ExternalLink, Github, ArrowRight } from "lucide-react";
import { Button } from "./ui/button";
import { Link } from "react-router-dom";
import { projects } from "@/data/projects";
import Footer from "./Footer";

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
    <section id="projects" className="py-24">
      <div className="container">
        <h2 className="section-heading animate-fade-in">Featured Projects</h2>
        <p className="section-subheading animate-fade-in" style={{ animationDelay: "0.1s" }}>
          A collection of projects showcasing my journey in web development and programming.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className="group bg-card rounded-2xl border border-border card-hover animate-fade-in overflow-hidden"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Card Header */}
              <div className="p-6 pb-4">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-medium uppercase tracking-wider text-muted-foreground bg-muted px-3 py-1.5 rounded-full">
                    {project.category}
                  </span>
                  <span className={`text-xs font-medium px-3 py-1.5 rounded-full ${
                    project.status === 'Completed' 
                      ? 'bg-secondary/15 text-secondary' 
                      : 'bg-orange-500/15 text-orange-600'
                  }`}>
                    {project.status}
                  </span>
                </div>
                
                <h3 className="text-xl font-semibold mb-3 group-hover:text-primary transition-colors duration-300">
                  {project.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed line-clamp-2 mb-4">
                  {project.description}
                </p>

                {/* Tech logos */}
                <div className="flex gap-2 mb-4">
                  {project.tags.slice(0, 4).map((tag) => (
                    <div
                      key={tag}
                      className="w-8 h-8 p-1.5 rounded-lg bg-muted/50 flex items-center justify-center transition-all duration-300 hover:scale-110 hover:bg-accent"
                      title={tag}
                    >
                      {techLogoMap[tag] ? (
                        <img
                          src={techLogoMap[tag]}
                          alt={tag}
                          className="w-full h-full object-contain"
                        />
                      ) : (
                        <span className="text-xs font-medium text-muted-foreground">{tag.charAt(0)}</span>
                      )}
                    </div>
                  ))}
                </div>
              </div>

              {/* Card Footer */}
              <div className="px-6 py-4 border-t border-border bg-muted/20 flex items-center justify-between">
                <div className="flex gap-1">
                  {project.github && (
                    <Button variant="ghost" size="sm" className="h-9 px-3 hover:bg-muted" asChild>
                      <a href={project.github} target="_blank" rel="noopener noreferrer">
                        <Github size={16} />
                      </a>
                    </Button>
                  )}
                  {project.demo && (
                    <Button variant="ghost" size="sm" className="h-9 px-3 hover:bg-muted" asChild>
                      <a href={project.demo} target="_blank" rel="noopener noreferrer">
                        <ExternalLink size={16} />
                      </a>
                    </Button>
                  )}
                </div>
                <Link to={`/projects/${project.id}`}>
                  <Button variant="ghost" size="sm" className="h-9 group/btn hover:bg-accent hover:text-primary">
                    Details
                    <ArrowRight size={14} className="ml-1 group-hover/btn:translate-x-0.5 transition-transform" />
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
  
export default Projects;
