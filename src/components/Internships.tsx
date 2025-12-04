import { Building2, Calendar, MapPin } from "lucide-react";

const internships = [
  {
    company: "Google",
    role: "Software Engineering Intern",
    duration: "May 2024 - Aug 2024",
    location: "Bangalore, India",
    description: "Worked on improving search algorithms and contributed to the core search infrastructure team.",
    skills: ["Python", "C++", "Distributed Systems"],
  },
  {
    company: "Microsoft",
    role: "Cloud Engineering Intern",
    duration: "Jan 2024 - Apr 2024",
    location: "Hyderabad, India",
    description: "Developed cloud-native applications on Azure and implemented CI/CD pipelines.",
    skills: ["Azure", "Docker", "Kubernetes"],
  },
  {
    company: "TechStartup Inc.",
    role: "Full Stack Developer Intern",
    duration: "Jun 2023 - Dec 2023",
    location: "Remote",
    description: "Built responsive web applications and RESTful APIs for the company's main product.",
    skills: ["React", "Node.js", "PostgreSQL"],
  },
];

const Internships = () => {
  return (
    <section id="internships" className="py-20 bg-muted/30">
      <div className="container">
        <h2 className="section-heading">Internship Experience</h2>
        <p className="section-subheading">
          Professional experience gained through internships at leading tech companies,
          contributing to real-world projects and learning from industry experts.
        </p>

        <div className="space-y-6">
          {internships.map((internship, index) => (
            <div
              key={internship.company}
              className="bg-card rounded-2xl p-6 md:p-8 card-hover animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-4">
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <Building2 size={18} className="text-primary" />
                    <h3 className="text-lg font-semibold">{internship.company}</h3>
                  </div>
                  <p className="text-primary font-medium">{internship.role}</p>
                </div>
                <div className="flex flex-col sm:flex-row gap-3 text-sm text-muted-foreground">
                  <div className="flex items-center gap-1">
                    <Calendar size={14} />
                    <span>{internship.duration}</span>
                  </div>
                  <div className="flex items-center gap-1">
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
