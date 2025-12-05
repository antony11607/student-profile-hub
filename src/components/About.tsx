import { GraduationCap, Code2, Lightbulb } from "lucide-react";

const skills = [
  { name: "HTML & CSS", level: 85 },
  { name: "JavaScript", level: 75 },
  { name: "React", level: 70 },
  { name: "Python", level: 65 },
];

const highlights = [
  {
    icon: GraduationCap,
    title: "Education",
    description: "B.Tech in Computer Science & Engineering with CGPA of 9.14",
  },
  {
    icon: Code2,
    title: "Projects",
    description: "6+ completed projects in web development and programming",
  },
  {
    icon: Lightbulb,
    title: "Learning",
    description: "Actively learning new technologies and frameworks",
  },
];

const About = () => {
  return (
    <section id="about" className="py-20 bg-muted/30">
      <div className="container">
        <h2 className="section-heading animate-fade-in">About Me</h2>
        <p className="section-subheading animate-fade-in" style={{ animationDelay: "0.1s" }}>
          I'm Antony Xavier, a dedicated B.Tech CSE student passionate about building web applications
          and solving problems through code. Currently focusing on frontend development and expanding my skills.
        </p>

        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {highlights.map((item, index) => (
            <div
              key={item.title}
              className="bg-card rounded-2xl p-6 card-hover animate-fade-in"
              style={{ animationDelay: `${(index + 1) * 0.1}s` }}
            >
              <div className="w-14 h-14 rounded-xl bg-accent flex items-center justify-center mb-4">
                <item.icon className="text-accent-foreground" size={28} />
              </div>
              <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
              <p className="text-muted-foreground text-sm">{item.description}</p>
            </div>
          ))}
        </div>

        <div className="bg-card rounded-2xl p-8 card-hover animate-fade-in" style={{ animationDelay: "0.4s" }}>
          <h3 className="text-xl font-semibold mb-6">Technical Skills</h3>
          <div className="space-y-5">
            {skills.map((skill, index) => (
              <div key={skill.name} className="animate-fade-in" style={{ animationDelay: `${(index + 5) * 0.1}s` }}>
                <div className="flex justify-between mb-2">
                  <span className="text-sm font-medium">{skill.name}</span>
                  <span className="text-sm text-muted-foreground">{skill.level}%</span>
                </div>
                <div className="h-2 bg-muted rounded-full overflow-hidden">
                  <div
                    className="h-full bg-primary rounded-full transition-all duration-1000 ease-out"
                    style={{ width: `${skill.level}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;