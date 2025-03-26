import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, PlusCircle, X } from "lucide-react";

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    // Close mobile menu when route changes
    setIsMobileMenuOpen(false);
  }, [location.pathname]);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Tools", path: "/tools" }
  ];

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? "bg-background/70 backdrop-blur-xl shadow-sm border-b border-border/40 py-3" 
          : "bg-transparent py-5"
      }`}
    >
      <div className="container mx-auto px-4 flex items-center justify-between">
        <Link to="/" className="flex items-center space-x-2 relative z-10">
          <span className="text-xl font-display font-semibold tracking-tight">
            Esports<span className="text-primary font-bold">Dir</span>
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-10">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`text-sm font-medium transition-colors hover:text-primary relative
                ${location.pathname === link.path 
                  ? "text-primary after:content-[''] after:absolute after:w-full after:h-0.5 after:bg-primary after:bottom-[-6px] after:left-0" 
                  : "text-foreground/80"
                }`}
            >
              {link.name}
            </Link>
          ))}
        </nav>

        <div className="hidden md:flex items-center">
          <Button className="gap-2 shadow-sm shadow-primary/20" asChild>
            <Link to="/submit">
              <PlusCircle className="h-4 w-4" />
              Submit Tool
            </Link>
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="md:hidden p-2 rounded-md hover:bg-secondary transition-colors"
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? (
            <X className="w-6 h-6 text-foreground" />
          ) : (
            <Menu className="w-6 h-6 text-foreground" />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden fixed inset-0 z-40 bg-background/95 backdrop-blur-lg animate-fade-in pt-20">
          <nav className="container mx-auto px-4 py-6 flex flex-col space-y-6">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`text-xl font-medium transition-colors py-2 border-b border-border/20 ${
                  location.pathname === link.path 
                    ? "text-primary" 
                    : "text-foreground/80"
                }`}
              >
                {link.name}
              </Link>
            ))}
            
            <div className="pt-4">
              <Button className="w-full justify-center gap-2" asChild>
                <Link to="/submit">
                  <PlusCircle className="h-4 w-4" />
                  Submit Tool
                </Link>
              </Button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
