import { Mail, Phone, MapPin, Send } from "lucide-react";
import { Button } from "./ui/button";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

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
    <section id="contact" className="py-20">
      <div className="container">
        <h2 className="section-heading animate-fade-in">Get In Touch</h2>
        <p className="section-subheading animate-fade-in" style={{ animationDelay: "0.1s" }}>
          Have a question or want to work together? Feel free to reach out!
          I'm always open to discussing new opportunities and ideas.
        </p>

        <div className="grid md:grid-cols-2 gap-10 max-w-4xl mx-auto">
          <div className="space-y-6 animate-fade-in" style={{ animationDelay: "0.2s" }}>
            <h3 className="text-xl font-semibold mb-4">Contact Information</h3>
            
            <div className="flex items-start gap-4 p-4 bg-card rounded-xl card-hover">
              <div className="w-12 h-12 rounded-xl bg-accent flex items-center justify-center shrink-0">
                <Mail className="text-accent-foreground" size={22} />
              </div>
              <div>
                <h4 className="font-semibold mb-1">Email</h4>
                <a href="mailto:antonyxavier@gmail.com" className="text-muted-foreground text-sm hover:text-primary transition-colors">
                  antonyxavier@gmail.com
                </a>
              </div>
            </div>

            <div className="flex items-start gap-4 p-4 bg-card rounded-xl card-hover">
              <div className="w-12 h-12 rounded-xl bg-accent flex items-center justify-center shrink-0">
                <Phone className="text-accent-foreground" size={22} />
              </div>
              <div>
                <h4 className="font-semibold mb-1">Phone</h4>
                <a href="tel:+918838925055" className="text-muted-foreground text-sm hover:text-primary transition-colors">
                  +91 88389 25055
                </a>
              </div>
            </div>

            <div className="flex items-start gap-4 p-4 bg-card rounded-xl card-hover">
              <div className="w-12 h-12 rounded-xl bg-accent flex items-center justify-center shrink-0">
                <MapPin className="text-accent-foreground" size={22} />
              </div>
              <div>
                <h4 className="font-semibold mb-1">Location</h4>
                <p className="text-muted-foreground text-sm">Chennai, Tamil Nadu, India</p>
              </div>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-5 animate-fade-in" style={{ animationDelay: "0.3s" }}>
            <div>
              <label htmlFor="name" className="block text-sm font-medium mb-2">Your Name</label>
              <input
                type="text"
                id="name"
                placeholder="Enter your name"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                required
                className="w-full px-5 py-3 rounded-xl border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium mb-2">Your Email</label>
              <input
                type="email"
                id="email"
                placeholder="Enter your email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                required
                className="w-full px-5 py-3 rounded-xl border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium mb-2">Message</label>
              <textarea
                id="message"
                placeholder="Your message..."
                rows={4}
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                required
                className="w-full px-5 py-3 rounded-xl border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all resize-none"
              />
            </div>
            <Button type="submit" size="lg" className="w-full">
              <Send size={18} className="mr-2" />
              Send Message
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;