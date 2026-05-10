import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import dositaLogo from "@/assets/dosita-logo.svg";

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();

  const handleNavClick = (targetId: string) => {
    setIsMenuOpen(false);
    
    // Navigate to home page if not already there
    if (window.location.pathname !== '/') {
      navigate('/');
      // Wait for navigation to complete before scrolling
      setTimeout(() => {
        scrollToSection(targetId);
      }, 100);
    } else {
      scrollToSection(targetId);
    }
  };

  const scrollToSection = (targetId: string) => {
    const targetSection = document.getElementById(targetId);
    if (targetSection) {
      const offset = 80;
      const elementPosition = targetSection.offsetTop - offset;
      window.scrollTo({
        top: elementPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <nav className="fixed top-0 z-[100] w-full border-b border-border bg-white/95 shadow-md backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-center h-20 relative">
          {/* Desktop Navigation - Left Side */}
          <div className="hidden lg:flex items-center space-x-8 absolute left-0 z-0">
            <a href="#home" onClick={() => handleNavClick("home")} className="text-engineering-navy hover:text-primary transition-colors font-medium">
              Home
            </a>
            <a href="/products" onClick={(e) => { e.preventDefault(); navigate('/products'); }} className="text-engineering-navy hover:text-primary transition-colors cursor-pointer font-medium">
              Our Products
            </a>
          </div>

          {/* Logo — homepage (above toast viewport layer when toasts overlap) */}
          <Link
            to="/"
            onClick={() => {
              setIsMenuOpen(false);
              setTimeout(() => {
                window.scrollTo({ top: 0, behavior: "smooth" });
              }, 100);
            }}
            className="relative z-[110] flex cursor-pointer items-center justify-center rounded-sm outline-none ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
          >
            <img src={dositaLogo} alt="Dosita" className="pointer-events-none h-12 w-auto select-none" draggable={false} />
          </Link>

          {/* Desktop Navigation - Right Side */}
          <div className="absolute right-0 z-0 hidden lg:flex lg:items-center lg:space-x-8">
            <a href="#about" onClick={() => handleNavClick("about")} className="text-engineering-navy hover:text-primary transition-colors font-medium">
              About
            </a>
            <a href="#contact" onClick={() => handleNavClick("contact")} className="text-engineering-navy hover:text-primary transition-colors font-medium">
              Contact Us
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="absolute right-0 z-[120] lg:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-engineering-navy hover:text-primary"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden py-4 space-y-4 bg-white border-t border-border">
            <a href="#home" onClick={() => handleNavClick("home")} className="block text-engineering-navy hover:text-primary transition-colors">
              Home
            </a>
            <a href="/products" onClick={(e) => { e.preventDefault(); setIsMenuOpen(false); navigate('/products'); }} className="block text-engineering-navy hover:text-primary transition-colors cursor-pointer">
              Our Products
            </a>
            <a href="#about" onClick={() => handleNavClick("about")} className="block text-engineering-navy hover:text-primary transition-colors">
              About
            </a>
            <a href="#contact" onClick={() => handleNavClick("contact")} className="block text-engineering-navy hover:text-primary transition-colors">
              Contact Us
            </a>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;