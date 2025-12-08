import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
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
        scrolled ? "py-3 glass shadow-sm" : "py-5 bg-transparent"
      }`}
    >
      <div className="container mx-auto flex items-center justify-between">
        <button
          onClick={() => scrollToSection("home")}
          className="group flex items-center gap-3 animate-fade-in"
        >
          <span className="w-10 h-10 rounded-xl bg-primary flex items-center justify-center text-primary-foreground text-sm font-bold transition-transform duration-300 group-hover:scale-105">
            AX
          </span>
          <span className="text-foreground font-semibold text-lg hidden sm:block">
            Antony Xavier
          </span>
        </button>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-1">
          {navLinks.map((link, index) => (
            <button
              key={link.name}
              onClick={() => scrollToSection(link.id)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 animate-fade-in ${
                activeSection === link.id ? "text-primary bg-accent" : "text-muted-foreground hover:text-foreground hover:bg-muted"
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
          className="md:hidden p-2 text-foreground rounded-xl hover:bg-muted transition-colors"
        >
          {isOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden absolute top-full left-0 right-0 glass border-t border-border overflow-hidden transition-all duration-300 ${
          isOpen ? "max-h-80 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="container py-4 flex flex-col gap-1">
          {navLinks.map((link, index) => (
            <button
              key={link.name}
              onClick={() => scrollToSection(link.id)}
              className={`px-4 py-3 rounded-xl text-left transition-all duration-300 ${
                activeSection === link.id ? "text-primary bg-accent font-medium" : "text-muted-foreground hover:text-foreground hover:bg-muted"
              }`}
              style={{ animationDelay: `${index * 0.05}s` }}
            >
              {link.name}
            </button>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
