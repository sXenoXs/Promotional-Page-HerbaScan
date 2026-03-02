import { Leaf, Menu, X } from "lucide-react";
import { Link } from "react-router-dom";
import { useState } from "react";
import { GooglePlayBadge } from "./GooglePlayBadge";

const navItems = [
  { label: "Home", href: "/" },
  { label: "Features", href: "/#features" },
  { label: "About", href: "/#about" },
];

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-b border-border shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link
            to="/"
            className="flex items-center gap-2 font-bold text-xl text-primary hover:text-primary-light transition-colors"
          >
            <div className="bg-gradient-botanical p-2 rounded-lg">
              <Leaf className="w-6 h-6 text-white" />
            </div>
            HerbaScan
          </Link>

          <div className="hidden md:flex items-center gap-6">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-foreground hover:text-primary transition-colors font-medium"
              >
                {item.label}
              </a>
            ))}
          </div>

          <div className="hidden md:block">
            <GooglePlayBadge height={48} />
          </div>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 text-foreground hover:text-primary"
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {isOpen && (
          <div className="md:hidden py-4 border-t border-border animate-slide-up">
            <div className="flex flex-col gap-4">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className="text-foreground hover:text-primary transition-colors font-medium px-2 py-2"
                >
                  {item.label}
                </a>
              ))}
              <div onClick={() => setIsOpen(false)}>
                <GooglePlayBadge className="mt-2" height={48} />
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};
