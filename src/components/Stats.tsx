import { FileCode } from "lucide-react";

const stats = [
  { value: "9.14", label: "CGPA", key: "cgpa" },
  { value: "6+", label: "Projects", key: "projects" },
  { value: "2", label: "Internships", key: "internships" },
  { value: "10+", label: "Technologies", key: "tech" },
];

const Stats = () => {
  return (
    <section className="py-12">
      <div className="container">
        <div className="bg-card rounded-lg border border-border shadow-editor overflow-hidden">
          {/* Terminal header */}
          <div className="flex items-center gap-2 px-4 py-3 bg-muted/50 border-b border-border">
            <div className="flex gap-1.5">
              <span className="w-3 h-3 rounded-full bg-destructive/60" />
              <span className="w-3 h-3 rounded-full bg-syntax-function/60" />
              <span className="w-3 h-3 rounded-full bg-secondary/60" />
            </div>
            <FileCode size={14} className="text-muted-foreground ml-2" />
            <span className="text-xs font-mono text-muted-foreground">stats.json</span>
          </div>
          
          <div className="p-6 md:p-8">
            <div className="text-sm font-mono text-muted-foreground mb-4">
              <span className="text-syntax-keyword">export const</span>
              <span className="text-muted-foreground"> </span>
              <span className="text-syntax-variable">stats</span>
              <span className="text-muted-foreground"> = {"{"}</span>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 px-4">
              {stats.map((stat, index) => (
                <div 
                  key={stat.label} 
                  className="text-center animate-fade-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="text-xs font-mono text-muted-foreground mb-1">
                    {stat.key}:
                  </div>
                  <div className="text-2xl md:text-3xl font-bold font-mono gradient-text mb-1">
                    "{stat.value}"
                  </div>
                  <div className="text-xs text-muted-foreground font-mono">
                    <span className="text-syntax-comment">// {stat.label}</span>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="text-sm font-mono text-muted-foreground mt-4">
              <span>{"}"}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Stats;
