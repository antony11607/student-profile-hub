import { Building2, Calendar, MapPin } from "lucide-react";

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
    <section id="internships" className="pb-24 bg-muted/30">
      <div className="container">
        <h2 className="section-heading animate-fade-in">Internship</h2>
        <p
          className="section-subheading animate-fade-in"
          style={{ animationDelay: "0.1s" }}
        >
          Hands-on experience through internships that helped me apply academic
          knowledge to real-world projects.
        </p>

        {/* 2-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-10">
          {internships.map((internship, index) => (
            <div
              key={internship.company}
              className="bg-card rounded-2xl p-6 border border-border card-hover animate-fade-in relative"
              style={{ animationDelay: `${(index + 1) * 0.15}s` }}
            >
              {/* Left Highlight Strip */}
              <div className="absolute left-0 top-0 h-full w-1 bg-gradient-to-b from-primary to-primary/30 rounded-r-full" />

              <div className="mb-5">
                <h3 className="text-xl font-semibold text-foreground mb-1">
                  {internship.role}
                </h3>
                <div className="flex items-center gap-2 text-primary">
                  <Building2 size={16} />
                  <span className="font-medium">{internship.company}</span>
                </div>
              </div>

              <div className="flex flex-col gap-1.5 text-sm text-muted-foreground mb-5">
                <div className="flex items-center gap-2">
                  <Calendar size={14} />
                  <span className="font-mono">{internship.duration}</span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin size={14} />
                  <span>{internship.location}</span>
                </div>
              </div>

              <p className="text-muted-foreground leading-relaxed mb-4">
                {internship.description}
              </p>

              <div className="flex flex-wrap gap-2">
                {internship.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1 bg-accent text-accent-foreground rounded-full text-xs font-medium"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Internships;
