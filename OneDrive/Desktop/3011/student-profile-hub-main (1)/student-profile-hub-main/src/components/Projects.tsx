import { ExternalLink, Github, ArrowRight } from "lucide-react";
import { Button } from "./ui/button";
import { Link } from "react-router-dom";
import { projects } from "@/data/projects";

const Projects = () => {
  return (
    <section id="projects" className="py-20">
      <div className="container">
        <h2 className="section-heading animate-fade-in">Featured Projects</h2>
        <p className="section-subheading animate-fade-in" style={{ animationDelay: "0.1s" }}>
          A collection of my beginner-level projects showcasing my learning journey
          in web development and programming.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className={`group rounded-2xl p-6 border-2 ${project.borderColor} ${project.color} card-hover animate-fade-in overflow-hidden relative`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Overflow effect decoration */}
              <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-primary/10 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="absolute bottom-0 left-0 w-16 h-16 bg-gradient-to-tr from-secondary/10 to-transparent rounded-tr-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <div className="relative z-10">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground bg-background/50 px-2 py-1 rounded-full">
                    {project.category}
                  </span>
                  <span className={`text-xs font-medium px-2 py-1 rounded-full ${project.status === 'Completed' ? 'bg-green-100 text-green-700' : 'bg-orange-100 text-orange-700'}`}>
                    {project.status}
                  </span>
                </div>
                
                <h3 className="text-xl font-semibold mt-2 mb-3 group-hover:text-primary transition-colors duration-300">
                  {project.title}
                </h3>
                <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-5">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 bg-background/80 rounded-full text-xs font-medium border border-border/50 group-hover:border-primary/30 transition-colors duration-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex gap-2">
                    {project.github && (
                      <Button variant="ghost" size="sm" className="group-hover:bg-background/80" asChild>
                        <a href={project.github} target="_blank" rel="noopener noreferrer">
                          <Github size={16} className="mr-1" />
                          Code
                        </a>
                      </Button>
                    )}
                    {project.demo && (
                      <Button variant="ghost" size="sm" className="group-hover:bg-background/80" asChild>
                        <a href={project.demo} target="_blank" rel="noopener noreferrer">
                          <ExternalLink size={16} className="mr-1" />
                          Demo
                        </a>
                      </Button>
                    )}
                  </div>
                  <Link to={`/project/${project.id}`}>
                    <Button variant="ghost" size="sm" className="group-hover:text-primary">
                      Details
                      <ArrowRight size={14} className="ml-1 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;