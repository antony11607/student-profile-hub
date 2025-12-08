import { GraduationCap, Code2, Lightbulb, FileCode } from "lucide-react";

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
    <section id="about" className="py-24 bg-muted/30">
      <div className="container">
        {/* Section header with code comment style */}
        <p className="text-center text-syntax-comment font-mono text-sm mb-2 animate-fade-in">
          {"// Section: About"}
        </p>
        <h2 className="section-heading animate-fade-in">
          <span className="text-syntax-function">about</span>
          <span className="text-muted-foreground">(</span>
          <span className="text-syntax-string">"me"</span>
          <span className="text-muted-foreground">)</span>
        </h2>
        <p className="section-subheading animate-fade-in" style={{ animationDelay: "0.1s" }}>
          I'm a dedicated B.Tech CSE student passionate about building web applications
          and solving problems through clean, efficient code.
        </p>

        {/* Highlights Grid - Card style */}
        <div className="grid md:grid-cols-3 gap-4 mb-16">
          {highlights.map((item, index) => (
            <div
              key={item.title}
              className="group bg-card rounded-lg p-6 card-hover border border-border animate-fade-in"
              style={{ animationDelay: `${(index + 1) * 0.1}s` }}
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-300">
                  <item.icon className="text-primary" size={20} />
                </div>
                <h3 className="font-mono font-semibold text-foreground">{item.title}</h3>
              </div>
              <p className="text-muted-foreground text-sm leading-relaxed">{item.description}</p>
            </div>
          ))}
        </div>

        {/* Tech Stack - Editor panel style */}
        <div className="bg-card rounded-lg border border-border shadow-editor animate-fade-in mb-8" style={{ animationDelay: "0.4s" }}>
          {/* Editor header */}
          <div className="flex items-center gap-2 px-4 py-3 bg-muted/50 border-b border-border">
            <div className="flex gap-1.5">
              <span className="w-3 h-3 rounded-full bg-destructive/60" />
              <span className="w-3 h-3 rounded-full bg-syntax-function/60" />
              <span className="w-3 h-3 rounded-full bg-secondary/60" />
            </div>
            <div className="flex-1 flex items-center gap-2">
              <FileCode size={14} className="text-muted-foreground" />
              <span className="text-xs font-mono text-muted-foreground">tech-stack.json</span>
            </div>
          </div>
          
          <div className="p-6 md:p-8">
            <div className="text-sm font-mono text-muted-foreground mb-6">
              <span className="text-syntax-keyword">const</span>
              <span className="text-muted-foreground"> </span>
              <span className="text-syntax-variable">technologies</span>
              <span className="text-muted-foreground"> = [</span>
            </div>
            
            <div className="flex flex-wrap justify-center gap-4 md:gap-6 mb-6">
              {techLogos.map((tech, index) => (
                <div
                  key={tech.name}
                  className="group flex flex-col items-center gap-2"
                  style={{ animationDelay: `${(index + 5) * 0.03}s` }}
                >
                  <div className="w-14 h-14 md:w-16 md:h-16 p-3 rounded-lg bg-muted/50 border border-border flex items-center justify-center transition-all duration-300 group-hover:bg-accent group-hover:border-primary group-hover:scale-110 group-hover:shadow-glow">
                    <img
                      src={tech.url}
                      alt={tech.name}
                      className="w-full h-full object-contain tech-logo"
                    />
                  </div>
                  <span className="text-xs text-muted-foreground group-hover:text-foreground transition-colors duration-300 font-mono">
                    "{tech.name}"
                  </span>
                </div>
              ))}
            </div>
            
            <div className="text-sm font-mono text-muted-foreground">
              <span>];</span>
            </div>
          </div>
        </div>

        {/* Skills Progress - Terminal style */}
        <div className="bg-card rounded-lg border border-border shadow-editor animate-fade-in" style={{ animationDelay: "0.5s" }}>
          {/* Terminal header */}
          <div className="flex items-center gap-2 px-4 py-3 bg-muted/50 border-b border-border">
            <div className="flex gap-1.5">
              <span className="w-3 h-3 rounded-full bg-destructive/60" />
              <span className="w-3 h-3 rounded-full bg-syntax-function/60" />
              <span className="w-3 h-3 rounded-full bg-secondary/60" />
            </div>
            <span className="text-xs font-mono text-muted-foreground">proficiency.sh</span>
          </div>
          
          <div className="p-6 md:p-8">
            <div className="text-sm font-mono text-muted-foreground mb-6">
              <span className="text-secondary">$</span>
              <span className="ml-2">show_skills --verbose</span>
            </div>
            
            <div className="grid md:grid-cols-2 gap-x-10 gap-y-5">
              {skills.map((skill, index) => (
                <div key={skill.name} style={{ animationDelay: `${(index + 6) * 0.08}s` }}>
                  <div className="flex justify-between mb-2">
                    <span className="text-sm font-mono text-foreground">{skill.name}</span>
                    <span className="text-sm text-primary font-mono">{skill.level}%</span>
                  </div>
                  <div className="h-2 bg-muted rounded-full overflow-hidden border border-border">
                    <div
                      className="h-full bg-gradient-to-r from-primary to-secondary rounded-full transition-all duration-1000 ease-out"
                      style={{ width: `${skill.level}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
