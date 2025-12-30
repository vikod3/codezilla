import { useState } from "react";
import { Menu, X } from "lucide-react";

const navLinks = [
  { label: "PROJECTS", href: "#projects" },
  { label: "BLOG", href: "#blog" },
  { label: "ABOUT", href: "#about" },
  { label: "RESUME", href: "#resume" },
];

const BlankNavbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="w-full px-6 py-4 md:px-12 lg:px-20 relative z-30">
      <nav className="flex items-center justify-between">
        {/* Logo */}
        <div className="text-foreground text-xl md:text-2xl font-bold font-['Inter_Display'] leading-7">
          LOGOIPSUM
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8 lg:gap-14">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-foreground text-sm lg:text-base font-normal font-['Inter_Display'] leading-5 hover:text-foreground/70 transition-colors"
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Desktop CTA */}
        <div className="hidden md:flex items-center">
          <a
            href="#register"
            className="text-foreground text-base lg:text-lg font-semibold font-['Inter_Display'] uppercase leading-8 hover:text-foreground/70 transition-colors"
          >
            [ register now ]
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="md:hidden p-2 text-foreground"
          aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
          aria-expanded={isMobileMenuOpen}
        >
          {isMobileMenuOpen ? (
            <X className="w-6 h-6" />
          ) : (
            <Menu className="w-6 h-6" />
          )}
        </button>
      </nav>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden mt-6 flex flex-col gap-6 pb-4">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-foreground text-base font-normal font-['Inter_Display'] leading-5 hover:text-foreground/70 transition-colors"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#register"
            onClick={() => setIsMobileMenuOpen(false)}
            className="text-foreground text-lg font-semibold font-['Inter_Display'] uppercase leading-8 hover:text-foreground/70 transition-colors"
          >
            [ register now ]
          </a>
        </div>
      )}
    </header>
  );
};

export default BlankNavbar;
