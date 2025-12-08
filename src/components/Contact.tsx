import { Mail, Phone, MapPin, Send, ArrowUpRight, Terminal } from "lucide-react";
import { Button } from "./ui/button";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const contactInfo = [
  {
    icon: Mail,
    title: "Email",
    value: "antonyxavierjm @gmail.com",
    href: "mailto:antonyxavierjm@gmail.com",
  },
  {
    icon: Phone,
    title: "Phone",
    value: "+91 88389 25055",
    href: "tel:+918838925055",
  },
  {
    icon: MapPin,
    title: "Location",
    value: "Chennai, Tamil Nadu, India",
    href: null,
  },
];

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message sent!",
      description: "Thank you for reaching out. I'll get back to you soon.",
    });
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <section id="contact" className="py-24">
      <div className="container">
        {/* Section header with code comment style */}
        <p className="text-center text-syntax-comment font-mono text-sm mb-2 animate-fade-in">
          {"// Section: Contact"}
        </p>
        <h2 className="section-heading animate-fade-in">
          <span className="text-syntax-function">sendMessage</span>
          <span className="text-muted-foreground">()</span>
        </h2>
        <p className="section-subheading animate-fade-in" style={{ animationDelay: "0.1s" }}>
          Have a question or want to work together? I'd love to hear from you.
        </p>

        <div className="grid lg:grid-cols-5 gap-6 max-w-5xl mx-auto">
          {/* Contact Info */}
          <div className="lg:col-span-2 space-y-3 animate-fade-in" style={{ animationDelay: "0.2s" }}>
            <div className="text-sm font-mono text-muted-foreground mb-4">
              <span className="text-secondary">$</span>
              <span className="ml-2">contact --info</span>
            </div>
            
            {contactInfo.map((item) => (
              <div key={item.title} className="group p-4 bg-card rounded-lg border border-border card-hover">
                {item.href ? (
                  <a href={item.href} className="flex items-start gap-3">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center shrink-0 group-hover:bg-primary/20 transition-colors">
                      <item.icon className="text-primary" size={18} />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h4 className="font-mono text-xs text-muted-foreground mb-0.5">{item.title}</h4>
                      <p className="text-foreground text-sm group-hover:text-primary transition-colors flex items-center gap-1 font-mono truncate">
                        {item.value}
                        <ArrowUpRight size={12} className="opacity-0 group-hover:opacity-100 transition-opacity shrink-0" />
                      </p>
                    </div>
                  </a>
                ) : (
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center shrink-0">
                      <item.icon className="text-primary" size={18} />
                    </div>
                    <div>
                      <h4 className="font-mono text-xs text-muted-foreground mb-0.5">{item.title}</h4>
                      <p className="text-foreground text-sm font-mono">{item.value}</p>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Contact Form - Editor panel style */}
          <div 
            className="lg:col-span-3 bg-card rounded-lg border border-border shadow-editor animate-fade-in overflow-hidden" 
            style={{ animationDelay: "0.3s" }}
          >
            {/* Terminal header */}
            <div className="flex items-center gap-2 px-4 py-3 bg-muted/50 border-b border-border">
              <div className="flex gap-1.5">
                <span className="w-3 h-3 rounded-full bg-destructive/60" />
                <span className="w-3 h-3 rounded-full bg-syntax-function/60" />
                <span className="w-3 h-3 rounded-full bg-secondary/60" />
              </div>
              <Terminal size={14} className="text-muted-foreground ml-2" />
              <span className="text-xs font-mono text-muted-foreground">message.new</span>
            </div>

            <form onSubmit={handleSubmit} className="p-6">
              <div className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-xs font-mono text-muted-foreground mb-2">
                    <span className="text-syntax-keyword">const</span> name =
                  </label>
                  <input
                    type="text"
                    id="name"
                    placeholder="'Your name'"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    required
                    className="w-full px-4 py-3 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all text-sm font-mono"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-xs font-mono text-muted-foreground mb-2">
                    <span className="text-syntax-keyword">const</span> email =
                  </label>
                  <input
                    type="email"
                    id="email"
                    placeholder="'your@email.com'"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    required
                    className="w-full px-4 py-3 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all text-sm font-mono"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-xs font-mono text-muted-foreground mb-2">
                    <span className="text-syntax-keyword">const</span> message =
                  </label>
                  <textarea
                    id="message"
                    placeholder="`Tell me about your project...`"
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    required
                    className="w-full px-4 py-3 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all resize-none text-sm font-mono"
                  />
                </div>
                <Button type="submit" size="lg" className="w-full font-mono">
                  <Send size={16} className="mr-2" />
                  send_message()
                </Button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
