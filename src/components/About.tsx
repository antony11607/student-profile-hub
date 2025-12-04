import { GraduationCap, Code2, Lightbulb } from "lucide-react";

const skills = [
  { name: "React & TypeScript", level: 90 },
  { name: "Python & Machine Learning", level: 85 },
  { name: "CAD & 3D Modeling", level: 80 },
  { name: "Circuit Design", level: 75 },
];

const highlights = [
  {
    icon: GraduationCap,
    title: "Education",
    description: "B.Tech in Computer Science with a CGPA of 8.5",
  },
  {
    icon: Code2,
    title: "Projects",
    description: "15+ completed projects across multiple domains",
  },
  {
    icon: Lightbulb,
    title: "Innovation",
    description: "3 patent applications in progress",
  },
];

const About = () => {
  return (
    <section id="about" className="py-20 bg-muted/30">
      <div className="container">
        <h2 className="section-heading">About Me</h2>
        <p className="section-subheading">
          A dedicated engineering student with a passion for technology and innovation,
          constantly learning and building solutions that make a difference.
        </p>

        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {highlights.map((item, index) => (
            <div
              key={item.title}
              className="bg-card rounded-2xl p-6 card-hover animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-14 h-14 rounded-xl bg-accent flex items-center justify-center mb-4">
                <item.icon className="text-accent-foreground" size={28} />
              </div>
              <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
              <p className="text-muted-foreground text-sm">{item.description}</p>
            </div>
          ))}
        </div>

        <div className="bg-card rounded-2xl p-8 card-hover">
          <h3 className="text-xl font-semibold mb-6">Technical Skills</h3>
          <div className="space-y-5">
            {skills.map((skill) => (
              <div key={skill.name}>
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
