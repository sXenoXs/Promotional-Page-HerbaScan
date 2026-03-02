import { Button } from "@/components/ui/button";
import { Leaf, Menu, X } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

export const Navbar = () => {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { label: "Home", path: "/" },
    { label: "Scan Plant", path: "/scan" },
    { label: "Plant Library", path: "/library" },
    { label: "About", path: "/about" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-b border-border shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 font-bold text-xl text-primary hover:text-primary-light transition-colors">
            <div className="bg-gradient-botanical p-2 rounded-lg">
              <Leaf className="w-6 h-6 text-white" />
            </div>
            HerbaScan
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-6">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className="text-foreground hover:text-primary transition-colors font-medium"
              >
                {item.label}
              </Link>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Button
              onClick={() => navigate('/scan')}
              className="bg-gradient-botanical text-white hover:opacity-90 rounded-full shadow-botanical"
            >
              Start Scanning
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 text-foreground hover:text-primary"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden py-4 border-t border-border animate-slide-up">
            <div className="flex flex-col gap-4">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={() => setIsOpen(false)}
                  className="text-foreground hover:text-primary transition-colors font-medium px-2 py-2"
                >
                  {item.label}
                </Link>
              ))}
              <Button
                onClick={() => {
                  setIsOpen(false);
                  navigate('/scan');
                }}
                className="bg-gradient-botanical text-white hover:opacity-90 w-full rounded-full"
              >
                Start Scanning
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};
