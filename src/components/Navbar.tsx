import { useState, useEffect } from "react";
import { Menu, X, Terminal } from "lucide-react";
import { useLocation, useNavigate } from "react-router-dom";

const navLinks = [
  { name: "Home", id: "home" },
  { name: "About", id: "about" },
  { name: "Project", id: "projects" },
  { name: "Internships", id: "internships" },
  { name: "Contact", id: "contact" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const location = useLocation();
  const navigate = useNavigate();

  // Helper to update URL without reloading
  const updateUrlWithoutReload = (sectionId: string) => {
    const newPath = sectionId === "home" ? "/" : `/${sectionId}`;
    if (location.pathname !== newPath) {
      window.history.replaceState({}, "", newPath);
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      const sectionIds = navLinks.map(l => l.id);

      // Check current section in viewport
      for (const id of sectionIds) {
        const element = document.getElementById(id);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 120 && rect.bottom >= 120) {
            setActiveSection(id);
            updateUrlWithoutReload(id); // Update URL on scroll
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [location.pathname]);

  const scrollToSection = (sectionId: string) => {
  setIsOpen(false);

  const targetUrl = sectionId === "home" ? "/" : `/${sectionId}`;

  if (location.pathname !== "/") {
    navigate("/", { replace: false });
    // Wait until the sections are rendered
    const interval = setInterval(() => {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
        clearInterval(interval);
      }
    }, 50);
  } else {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: "smooth" });
  }
};


  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "py-2 glass shadow-editor" : "py-4 bg-transparent"
      }`}
    >
      <div className="container mx-auto flex items-center justify-between">
        {/* Logo - VS Code style */}
        <button
          onClick={() => scrollToSection("home")}
          className="group flex items-center gap-3 animate-fade-in"
        >
          <div className="w-10 h-10 rounded-lg bg-card border border-border flex items-center justify-center transition-all duration-300 group-hover:border-primary group-hover:shadow-glow">
            <Terminal className="w-5 h-5 text-primary" />
          </div>
          <div className="hidden sm:flex flex-col">
            <span className="text-foreground font-mono font-semibold text-sm">
              antony<span className="text-primary">.dev</span>
            </span>
            <span className="text-muted-foreground text-xs font-mono">~/portfolio</span>
          </div>
        </button>

        {/* Desktop Menu - Tab style */}
        <div className="hidden md:flex items-center bg-card border border-border rounded-lg p-1">
          {navLinks.map((link, index) => (
            <button
              key={link.name}
              onClick={() => scrollToSection(link.id)}
              className={`px-4 py-2 rounded-md text-sm font-mono transition-all duration-200 animate-fade-in ${
                activeSection === link.id 
                  ? "text-primary-foreground bg-primary shadow-button" 
                  : "text-muted-foreground hover:text-foreground hover:bg-muted"
              }`}
              style={{ animationDelay: `${index * 0.05}s` }}
            >
              {link.name}
            </button>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden p-2 text-foreground rounded-lg border border-border bg-card hover:bg-muted transition-colors"
        >
          {isOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile Menu - Terminal style */}
      <div
        className={`md:hidden absolute top-full left-0 right-0 bg-card border-t border-border overflow-hidden transition-all duration-300 ${
          isOpen ? "max-h-80 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="container py-2">
          <div className="text-xs text-muted-foreground font-mono mb-2 px-4">
            <span className="text-secondary">$</span> navigate --to
          </div>
          {navLinks.map((link, index) => (
            <button
              key={link.name}
              onClick={() => scrollToSection(link.id)}
              className={`w-full px-4 py-3 text-left font-mono text-sm transition-all duration-200 flex items-center gap-2 ${
                activeSection === link.id 
                  ? "text-primary bg-accent border-l-2 border-primary" 
                  : "text-muted-foreground hover:text-foreground hover:bg-muted"
              }`}
              style={{ animationDelay: `${index * 0.05}s` }}
            >
              <span className="text-muted-foreground">→</span>
              {link.name.toLowerCase()}
            </button>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
