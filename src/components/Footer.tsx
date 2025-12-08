import { Github, Linkedin, Twitter, Mail, Terminal } from "lucide-react";

const socialLinks = [
  { icon: Github, href: "https://github.com/antony11607", label: "GitHub" },
  { icon: Linkedin, href: "https://www.linkedin.com/in/antony-xavier-jm-117ba3344/", label: "LinkedIn" },
  { icon: Twitter, href: "https://twitter.com", label: "Twitter" },
  { icon: Mail, href: "mailto:antonyxavierjm@gmail.com", label: "Email" },
];

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="py-10 border-t border-border bg-card">
      <div className="container">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex flex-col items-center md:items-start gap-2">
            <button 
              onClick={scrollToTop}
              className="flex items-center gap-2 hover:text-primary transition-colors group"
            >
              <Terminal size={18} className="text-primary" />
              <span className="font-mono font-semibold text-sm">
                antony<span className="text-primary">.dev</span>
              </span>
            </button>
            <p className="text-xs text-muted-foreground font-mono">
              <span className="text-syntax-comment">// </span>
              © {new Date().getFullYear()} All rights reserved
            </p>
          </div>

          <div className="flex items-center gap-2">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.label}
                className="w-9 h-9 rounded-lg bg-muted border border-border flex items-center justify-center text-muted-foreground hover:text-foreground hover:border-primary hover:shadow-glow transition-all duration-300"
              >
                <social.icon size={16} />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
