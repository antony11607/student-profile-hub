import { useParams, Link } from "react-router-dom";
import { ArrowLeft, Github, ExternalLink, Clock, CheckCircle, Code } from "lucide-react";
import { Button } from "@/components/ui/button";
import { projects } from "@/data/projects";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const ProjectDetail = () => {
  const { id } = useParams();
  const project = projects.find((p) => p.id === id);

  if (!project) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Project not found</h1>
          <Link to="/">
            <Button>Go Back Home</Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section className={`pt-24 pb-16 ${project.color} border-b ${project.borderColor}`}>
        <div className="container">
          <Link to="/projects" className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors mb-6 animate-fade-in">
            <ArrowLeft size={18} />
            Back to Projects
          </Link>
          
          <div className="max-w-3xl animate-fade-in" style={{ animationDelay: "0.1s" }}>
            <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground bg-background/50 px-3 py-1 rounded-full">
              {project.category}
            </span>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mt-4 mb-4">
              {project.title}
            </h1>
            <p className="text-lg text-muted-foreground mb-6">
              {project.longDescription}
            </p>
            
            <div className="flex flex-wrap gap-4">
              {project.github && (
                <Button asChild>
                  <a href={project.github} target="_blank" rel="noopener noreferrer">
                    <Github size={18} className="mr-2" />
                    View Source Code
                  </a>
                </Button>
              )}
              {project.demo && (
                <Button variant="outline" asChild>
                  <a href={project.demo} target="_blank" rel="noopener noreferrer">
                    <ExternalLink size={18} className="mr-2" />
                    Live Demo
                  </a>
                </Button>
              )}
            </div>
          </div>
        </div>
      </section>


      <section className="py-16">
        <div className="container">
          <div className="grid md:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="md:col-span-2 space-y-8">
              {/* Features */}
              <div className="bg-card rounded-2xl p-6 card-hover animate-fade-in" style={{ animationDelay: "0.2s" }}>
                <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
                  <CheckCircle className="text-primary" size={22} />
                  Key Features
                </h2>
                <ul className="space-y-3">
                  {project.features.map((feature, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                      <span className="text-muted-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Tech Stack */}
              <div className="bg-card rounded-2xl p-6 card-hover animate-fade-in" style={{ animationDelay: "0.3s" }}>
                <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
                  <Code className="text-primary" size={22} />
                  Technology Stack
                </h2>
                <div className="flex flex-wrap gap-3">
                  {project.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="px-4 py-2 bg-accent rounded-lg text-sm font-medium border border-border"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Project Info */}
              <div className="bg-card rounded-2xl p-6 card-hover animate-fade-in" style={{ animationDelay: "0.4s" }}>
                <h3 className="text-lg font-semibold mb-4">Project Info</h3>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-muted-foreground flex items-center gap-2">
                      <Clock size={16} />
                      Duration
                    </span>
                    <span className="font-medium">{project.duration}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-muted-foreground">Status</span>
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${project.status === 'Completed' ? 'bg-green-100 text-green-700' : 'bg-orange-100 text-orange-700'}`}>
                      {project.status}
                    </span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-muted-foreground">Category</span>
                    <span className="font-medium">{project.category}</span>
                  </div>
                </div>
              </div>

              {/* Tags */}
              <div className="bg-card rounded-2xl p-6 card-hover animate-fade-in" style={{ animationDelay: "0.5s" }}>
                <h3 className="text-lg font-semibold mb-4">Tags</h3>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 bg-muted rounded-full text-xs font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Other Projects */}
      <section className="py-16 bg-muted/30">
        <div className="container">
          <h2 className="text-2xl font-bold mb-8 animate-fade-in">Other Projects</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {projects
              .filter((p) => p.id !== project.id)
              .slice(0, 3)
              .map((p, index) => (
                <Link
                  key={p.id}
                  to={`/project/${p.id}`}
                  className={`rounded-2xl p-5 border-2 ${p.borderColor} ${p.color} card-hover animate-fade-in block`}
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                    {p.category}
                  </span>
                  <h3 className="text-lg font-semibold mt-2 mb-2">{p.title}</h3>
                  <p className="text-muted-foreground text-sm line-clamp-2">{p.description}</p>
                </Link>
              ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ProjectDetail;
