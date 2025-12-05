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
    <section id="internships" className="py-20 bg-muted/30">
      <div className="container">
        <h2 className="section-heading animate-fade-in">Internships</h2>
        <p className="section-subheading animate-fade-in" style={{ animationDelay: "0.1s" }}>
          My hands-on experience through internships has helped me apply classroom knowledge
          to real-world projects and develop professional skills.
        </p>

        <div className="max-w-3xl mx-auto space-y-6">
          {internships.map((internship, index) => (
            <div
              key={internship.company}
              className="bg-card rounded-2xl p-6 md:p-8 card-hover animate-fade-in relative overflow-hidden"
              style={{ animationDelay: `${(index + 1) * 0.15}s` }}
            >
              {/* Timeline dot */}
              <div className="absolute left-0 top-8 w-1 h-12 bg-primary rounded-r-full" />

              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-4">
                <div>
                  <p className="text-xl font-semibold text-primary">
                    {internship.role}
                  </p>
                  <div className="flex items-center gap-2 text-muted-foreground mt-1">
                    <Building2 size={16} />
                    <span className="font-medium">{internship.company}</span>
                  </div>
                </div>
                <div className="flex flex-col gap-1 text-sm text-muted-foreground">
                  <div className="flex items-center gap-2">
                    <Calendar size={14} />
                    <span>{internship.duration}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin size={14} />
                    <span>{internship.location}</span>
                  </div>
                </div>
              </div>

              <p className="text-muted-foreground mb-4">{internship.description}</p>

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