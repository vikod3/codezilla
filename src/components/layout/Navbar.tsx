import { useState } from "react";
import { ChevronDown, Menu, X } from "lucide-react";
import { Link } from "react-router-dom";
import { PrimaryButton } from "@/components/ui/primary-button";
import logo from "@/assets/logo.png";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Features", href: "/features" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
];

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <>
      {/* Skip to main content link for accessibility */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-2 focus:left-2 focus:z-[100] focus:px-4 focus:py-2 focus:bg-primary focus:text-primary-foreground focus:rounded-lg focus:outline-none"
      >
        Skip to main content
      </a>
      
      <header className="fixed top-4 left-1/2 -translate-x-1/2 z-50 w-[calc(100%-2rem)] max-w-[1164px] md:top-6">
        <nav className="h-20 px-4 md:px-6 bg-gradient-to-r from-white/10 to-neutral-400/10 rounded-2xl border border-white/10 backdrop-blur-lg flex items-center">
          {/* Logo */}
          <Link to="/" className="flex-shrink-0">
            <img 
              src={logo} 
              alt="Logoipsum - Return to homepage" 
              className="h-7 md:h-8 w-auto"
            />
          </Link>

          {/* Spacer */}
          <div className="flex-1" />

          {/* Desktop Navigation + CTA */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                to={link.href}
                className="flex items-center gap-1 text-foreground text-base font-medium leading-5 hover:text-foreground/80 transition-colors"
              >
                {link.label}
              </Link>
            ))}
            
            <PrimaryButton>
              Start creating
            </PrimaryButton>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2 text-foreground"
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
          <div className="lg:hidden mt-2 p-4 bg-gradient-to-r from-white/10 to-neutral-400/10 rounded-2xl border border-white/10 backdrop-blur-lg">
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <Link
                  key={link.label}
                  to={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="flex items-center justify-between text-foreground text-base font-medium py-2 hover:text-foreground/80 transition-colors"
                >
                  {link.label}
                </Link>
              ))}
              <PrimaryButton className="w-full mt-2">
                Start creating
              </PrimaryButton>
            </div>
          </div>
        )}
      </header>
    </>
  );
};

export default Navbar;
