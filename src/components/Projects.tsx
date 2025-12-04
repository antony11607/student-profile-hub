import { ExternalLink, Github } from "lucide-react";
import { Button } from "./ui/button";

const projects = [
  {
    title: "Smart Home Automation",
    category: "IoT",
    description: "An IoT-based home automation system using Arduino and ESP32 with mobile app control.",
    tags: ["Arduino", "ESP32", "React Native"],
    color: "bg-secondary/20",
    borderColor: "border-secondary",
  },
  {
    title: "AI Chatbot Assistant",
    category: "Machine Learning",
    description: "NLP-powered chatbot for customer service automation with 95% accuracy.",
    tags: ["Python", "TensorFlow", "Flask"],
    color: "bg-pink-100",
    borderColor: "border-pink-300",
  },
  {
    title: "E-Commerce Platform",
    category: "Web Development",
    description: "Full-stack e-commerce solution with payment integration and admin dashboard.",
    tags: ["React", "Node.js", "MongoDB"],
    color: "bg-green-100",
    borderColor: "border-green-300",
  },
  {
    title: "Drone Navigation System",
    category: "Robotics",
    description: "Autonomous drone navigation using computer vision and GPS integration.",
    tags: ["Python", "OpenCV", "ROS"],
    color: "bg-blue-100",
    borderColor: "border-blue-300",
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-20">
      <div className="container">
        <h2 className="section-heading">Featured Projects</h2>
        <p className="section-subheading">
          A collection of my engineering projects showcasing innovation, 
          technical skills, and problem-solving abilities across various domains.
        </p>

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <div
              key={project.title}
              className={`rounded-2xl p-6 border-2 ${project.borderColor} ${project.color} card-hover animate-fade-in`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                {project.category}
              </span>
              <h3 className="text-xl font-semibold mt-2 mb-3">{project.title}</h3>
              <p className="text-muted-foreground text-sm mb-4">{project.description}</p>
              
              <div className="flex flex-wrap gap-2 mb-5">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 bg-background/80 rounded-full text-xs font-medium"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <div className="flex gap-3">
                <Button variant="ghost" size="sm">
                  <Github size={16} className="mr-1" />
                  Code
                </Button>
                <Button variant="ghost" size="sm">
                  <ExternalLink size={16} className="mr-1" />
                  Demo
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
