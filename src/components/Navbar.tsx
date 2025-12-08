import { useState, useEffect } from "react";
import { Menu, X, Home, User, Briefcase, Building, Mail } from "lucide-react";
import { useLocation, useNavigate } from "react-router-dom";

const navLinks = [
  { name: "Home", id: "home", icon: Home },
  { name: "About", id: "about", icon: User },
  { name: "Projects", id: "projects", icon: Briefcase },
  { name: "Internships", id: "internships", icon: Building },
  { name: "Contact", id: "contact", icon: Mail },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      // Update active section based on scroll position
      if (location.pathname === "/") {
        const sections = navLinks.map(link => link.id);
        for (const sectionId of sections.reverse()) {
          const element = document.getElementById(sectionId);
          if (element) {
            const rect = element.getBoundingClientRect();
            if (rect.top <= 100) {
              setActiveSection(sectionId);
              break;
            }
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [location.pathname]);

  const scrollToSection = (sectionId: string) => {
    setIsOpen(false);
    
    if (location.pathname !== "/") {
      // Navigate to home first, then scroll after navigation
      navigate("/");
      setTimeout(() => {
        const element = document.getElementById(sectionId);
        element?.scrollIntoView({ behavior: "smooth" });
      }, 100);
    } else {
      const element = document.getElementById(sectionId);
      element?.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-background/90 backdrop-blur-md shadow-lg border-b border-border"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto flex items-center justify-between h-16">
        <button
          onClick={() => scrollToSection("home")}
          className="text-xl font-bold animate-fade-in flex items-center gap-2 bg-card px-4 py-2 rounded-full hover:bg-muted transition-all duration-300 shadow-sm border border-border"
        >
          <span className="w-8 h-8 rounded-full bg-primary flex items-center justify-center text-primary-foreground text-sm font-bold">
            AX
          </span>
          <span className="text-foreground">Antony Xavier</span>
        </button>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-1 bg-card/80 rounded-full p-1.5 backdrop-blur-sm border border-border shadow-sm">
          {navLinks.map((link, index) => (
            <button
              key={link.name}
              onClick={() => scrollToSection(link.id)}
              className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 animate-fade-in ${
                activeSection === link.id && location.pathname === "/"
                  ? "text-primary bg-accent"
                  : "text-muted-foreground hover:text-primary hover:bg-muted"
              }`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <link.icon size={16} />
              {link.name}
            </button>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden p-2 text-foreground rounded-lg hover:bg-muted transition-colors"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden absolute top-16 left-0 right-0 bg-background/95 backdrop-blur-lg border-b border-border overflow-hidden transition-all duration-300 ${
          isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="container py-4 flex flex-col gap-2">
          {navLinks.map((link, index) => (
            <button
              key={link.name}
              onClick={() => scrollToSection(link.id)}
              className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-300 animate-slide-in-left ${
                activeSection === link.id && location.pathname === "/"
                  ? "text-primary bg-accent font-medium"
                  : "text-muted-foreground hover:text-primary hover:bg-muted"
              }`}
              style={{ animationDelay: `${index * 0.05}s` }}
            >
              <link.icon size={18} />
              {link.name}
            </button>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;