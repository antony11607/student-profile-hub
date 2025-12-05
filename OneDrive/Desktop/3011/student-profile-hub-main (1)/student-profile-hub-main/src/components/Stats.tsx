const stats = [
  { value: "6+", label: "Projects" },
  { value: "2", label: "Internships" },
  { value: "9.14", label: "CGPA" },
  { value: "200+", label: "GitHub Commits" },
];

const Stats = () => {
  return (
    <section className="py-16 stat-gradient">
      <div className="container">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div
              key={stat.label}
              className="text-center animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="text-4xl md:text-5xl font-bold text-secondary mb-2">
                {stat.value}
              </div>
              <div className="text-primary-foreground/80 text-sm uppercase tracking-wider">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;