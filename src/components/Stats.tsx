const stats = [
  { value: "9.14", label: "CGPA" },
  { value: "6+", label: "Projects" },
  { value: "2", label: "Internships" },
  { value: "10+", label: "Technologies" },
];

const Stats = () => {
  return (
    <section className="py-16">
      <div className="container">
        <div className="bg-card rounded-3xl border border-border p-8 md:p-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div 
                key={stat.label} 
                className="text-center animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="text-3xl md:text-4xl font-bold gradient-text mb-2">
                  {stat.value}
                </div>
                <div className="text-sm text-muted-foreground font-medium">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Stats;
