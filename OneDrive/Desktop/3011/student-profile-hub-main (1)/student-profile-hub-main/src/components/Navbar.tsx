import { useState, useEffect } from "react";
import { Menu, X, Home, User, Briefcase, Building, Mail } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

const navLinks = [
  { name: "Home", href: "/home", icon: Home },
  { name: "About", href: "/about", icon: User },
  { name: "Projects", href: "/projects", icon: Briefcase },
  { name: "Internships", href: "/internships", icon: Building },
  { name: "Contact", href: "/contact", icon: Mail },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setIsOpen(false);
    if (href.startsWith("/#")) {
      const elementId = href.substring(2);
      if (location.pathname === "/") {
        const element = document.getElementById(elementId);
        element?.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-background/95 backdrop-blur-lg shadow-lg border-b border-border/50"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto flex items-center justify-between h-16">
        <Link
          to="/home"
          className="text-xl font-bold animate-fade-in flex items-center gap-2 bg-background px-4 py-2 rounded-full hover:bg-background/90 transition-all duration-300 shadow-sm"
        >
          <span className="w-8 h-8 rounded-full bg-background flex items-center justify-center text-primary text-sm font-bold border border-border">
            AX
          </span>
          <span className="text-foreground">Antony Xavier</span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-1 bg-muted/50 rounded-full p-1.5 backdrop-blur-sm">
          {navLinks.map((link, index) => (
            <Link
              key={link.name}
              to={link.href}
              onClick={() => handleNavClick(link.href)}
              className="flex items-center gap-2 px-4 py-2 rounded-full text-muted-foreground hover:text-primary hover:bg-background/80 transition-all duration-300 text-sm font-medium animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <link.icon size={16} />
              {link.name}
            </Link>
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
            <Link
              key={link.name}
              to={link.href}
              onClick={() => handleNavClick(link.href)}
              className="flex items-center gap-3 px-4 py-3 rounded-xl text-muted-foreground hover:text-primary hover:bg-muted transition-all duration-300 animate-slide-in-left"
              style={{ animationDelay: `${index * 0.05}s` }}
            >
              <link.icon size={18} />
              {link.name}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;