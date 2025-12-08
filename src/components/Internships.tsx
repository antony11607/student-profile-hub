import { Building2, Calendar, MapPin, Terminal } from "lucide-react";

const internships = [
  {
    company: "TechStart Solutions",
    role: "Web Development Intern",
    duration: "May 2024 - July 2024",
    location: "Chennai, India",
    description:
      "Worked on frontend development tasks using React and Tailwind CSS. Assisted in building responsive UI components and learned about version control with Git.",
    skills: ["React", "Tailwind CSS", "Git", "JavaScript"],
  },
  {
    company: "CodeCraft Labs",
    role: "Software Development Intern",
    duration: "Dec 2023 - Feb 2024",
    location: "Remote",
    description:
      "Contributed to a team project building a task management application. Gained experience in collaborative development and agile methodologies.",
    skills: ["HTML/CSS", "JavaScript", "Node.js", "Team Collaboration"],
  },
];

const Internships = () => {
  return (
    <section id="internships" className="py-24 bg-muted/30">
      <div className="container">
        {/* Section header with code comment style */}
        <p className="text-center text-syntax-comment font-mono text-sm mb-2 animate-fade-in">
          {"// Section: Experience"}
        </p>
        <h2 className="section-heading animate-fade-in">
          <span className="text-syntax-function">getInternships</span>
          <span className="text-muted-foreground">()</span>
        </h2>
        <p
          className="section-subheading animate-fade-in"
          style={{ animationDelay: "0.1s" }}
        >
          Hands-on experience through internships that helped me apply academic
          knowledge to real-world projects.
        </p>

        {/* 2-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-10">
          {internships.map((internship, index) => (
            <div
              key={internship.company}
              className="bg-card rounded-lg border border-border card-hover animate-fade-in overflow-hidden"
              style={{ animationDelay: `${(index + 1) * 0.15}s` }}
            >
              {/* Terminal header */}
              <div className="flex items-center gap-2 px-4 py-3 bg-muted/50 border-b border-border">
                <div className="flex gap-1.5">
                  <span className="w-3 h-3 rounded-full bg-destructive/60" />
                  <span className="w-3 h-3 rounded-full bg-syntax-function/60" />
                  <span className="w-3 h-3 rounded-full bg-secondary/60" />
                </div>
                <Terminal size={14} className="text-muted-foreground ml-2" />
                <span className="text-xs font-mono text-muted-foreground">
                  experience-{index + 1}.log
                </span>
              </div>

              <div className="p-6">
                <div className="mb-4">
                  <h3 className="text-lg font-mono font-semibold text-foreground mb-1">
                    {internship.role}
                  </h3>
                  <div className="flex items-center gap-2 text-primary font-mono text-sm">
                    <Building2 size={14} />
                    <span>{internship.company}</span>
                  </div>
                </div>

                <div className="flex flex-col gap-1 text-sm text-muted-foreground mb-4 font-mono">
                  <div className="flex items-center gap-2">
                    <Calendar size={12} />
                    <span>{internship.duration}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin size={12} />
                    <span>{internship.location}</span>
                  </div>
                </div>

                <p className="text-muted-foreground leading-relaxed mb-4 text-sm">
                  {internship.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {internship.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-2 py-1 bg-accent border border-border text-accent-foreground rounded text-xs font-mono"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Internships;
