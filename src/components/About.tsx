import { GraduationCap, Code2, Lightbulb } from "lucide-react";

const skills = [
  { name: "HTML & CSS", level: 85 },
  { name: "JavaScript", level: 75 },
  { name: "React", level: 70 },
  { name: "TypeScript", level: 60 },
  { name: "Python", level: 65 },
  { name: "Node.js", level: 55 },
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

const techLogos = [
  { name: "React", url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
  { name: "TypeScript", url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" },
  { name: "JavaScript", url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
  { name: "HTML5", url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
  { name: "CSS3", url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" },
  { name: "Tailwind", url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg" },
  { name: "Node.js", url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
  { name: "GitHub", url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" },
  { name: "Redux", url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg" },
  { name: "Python", url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
];


const About = () => {
  return (
    <section id="about" className="pb-24 bg-muted/30">
      <div className="container">
        <h2 className="section-heading animate-fade-in">About Me</h2>
        <p className="section-subheading animate-fade-in" style={{ animationDelay: "0.1s" }}>
          I'm a dedicated B.Tech CSE student passionate about building web applications
          and solving problems through clean, efficient code.
        </p>

        {/* Highlights Grid */}
        <div className="grid md:grid-cols-3 gap-6 mb-20">
          {highlights.map((item, index) => (
            <div
              key={item.title}
              className="group bg-card rounded-2xl p-8 card-hover border border-border animate-fade-in"
              style={{ animationDelay: `${(index + 1) * 0.1}s` }}
            >
              <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-5 group-hover:bg-primary/20 transition-colors duration-300">
                <item.icon className="text-primary" size={26} />
              </div>
              <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{item.description}</p>
            </div>
          ))}
        </div>

        {/* Tech Stack */}
        <div className="bg-card rounded-3xl p-8 md:p-10 border border-border card-hover animate-fade-in mb-8" style={{ animationDelay: "0.4s" }}>
          <h3 className="text-xl font-semibold mb-8 text-center">Technologies I Work With</h3>
          <div className="flex flex-wrap justify-center gap-4 md:gap-6">
            {techLogos.map((tech, index) => (
              <div
                key={tech.name}
                className="group flex flex-col items-center gap-3"
                style={{ animationDelay: `${(index + 5) * 0.03}s` }}
              >
                <div className="w-16 h-16 md:w-20 md:h-20 p-4 rounded-2xl bg-muted/50 flex items-center justify-center transition-all duration-500 group-hover:bg-accent group-hover:scale-110">
                  <img
                    src={tech.url}
                    alt={tech.name}
                    className="w-full h-full object-contain tech-logo"
                  />
                </div>
                <span className="text-xs text-muted-foreground group-hover:text-foreground transition-colors duration-300 font-medium">
                  {tech.name}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Skills Progress */}
        <div className="bg-card rounded-3xl p-8 md:p-10 border border-border card-hover animate-fade-in" style={{ animationDelay: "0.5s" }}>
          <h3 className="text-xl font-semibold mb-8">Technical Proficiency</h3>
          <div className="grid md:grid-cols-2 gap-x-12 gap-y-6">
            {skills.map((skill, index) => (
              <div key={skill.name} style={{ animationDelay: `${(index + 6) * 0.08}s` }}>
                <div className="flex justify-between mb-2">
                  <span className="text-sm font-medium">{skill.name}</span>
                  <span className="text-sm text-muted-foreground font-mono">{skill.level}%</span>
                </div>
                <div className="h-2 bg-muted rounded-full overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-primary to-primary/70 rounded-full transition-all duration-1000 ease-out"
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
