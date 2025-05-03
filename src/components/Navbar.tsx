
import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X, LogIn } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About Us", path: "/about" },
    { name: "Products", path: "/products" },
    { name: "Contact", path: "/contact" },
    { name: "Franchise", path: "/franchise" },
  ];

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  return (
    <nav className={`sticky top-0 z-50 transition-all duration-300 ${
      scrolled ? "bg-white/90 dark:bg-gray-900/90 backdrop-blur-md shadow-md" : "bg-transparent"
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex-shrink-0 flex items-center gap-2">
              <img 
                src="/lovable-uploads/2f65710c-403d-4ccb-a52d-0b99adc116a8.png" 
                alt="Shree Unnati Traders Logo" 
                className="h-12 w-auto" 
              />
            </Link>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex md:items-center md:space-x-4">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                  isActive(link.path)
                    ? "text-unnati-secondary font-bold"
                    : (scrolled ? "text-gray-700 dark:text-gray-200" : "text-white") + " hover:text-unnati-primary"
                }`}
              >
                {link.name}
              </Link>
            ))}
            <Button 
              asChild
              variant="outline"
              className={`ml-4 ${scrolled ? "border-unnati-primary text-unnati-primary" : "border-white text-white"} hover:bg-unnati-primary/10`}
            >
              <Link to="/contact">Contact Us</Link>
            </Button>
            
            {/* Login Button */}
            <Button 
              asChild
              className="ml-2 bg-gradient-to-r from-unnati-primary to-blue-700 hover:from-unnati-primary/90 hover:to-blue-800 text-white"
            >
              <Link to="/login" className="flex items-center gap-2">
                <LogIn size={16} />
                Login
              </Link>
            </Button>
          </div>
          
          {/* Mobile Navigation Toggle */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`inline-flex items-center justify-center p-2 rounded-md ${
                scrolled ? "text-gray-700 dark:text-gray-200" : "text-white"
              } hover:text-unnati-primary`}
              aria-expanded={isOpen}
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? (
                <X className="block h-6 w-6" aria-hidden="true" />
              ) : (
                <Menu className="block h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {isOpen && (
        <div className="md:hidden absolute w-full bg-white dark:bg-gray-900 shadow-lg z-50">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={`block px-3 py-2 rounded-md text-base font-medium ${
                  isActive(link.path)
                    ? "text-unnati-secondary font-bold"
                    : "text-gray-700 dark:text-gray-200 hover:text-unnati-primary"
                }`}
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </Link>
            ))}
            <Button 
              asChild
              variant="outline"
              className="mt-4 w-full border-unnati-primary text-unnati-primary hover:bg-unnati-primary/10"
            >
              <Link to="/contact" onClick={() => setIsOpen(false)}>Contact Us</Link>
            </Button>
            
            {/* Login Button for Mobile */}
            <Button 
              asChild
              className="mt-2 w-full bg-gradient-to-r from-unnati-primary to-blue-700 hover:from-unnati-primary/90 hover:to-blue-800 text-white"
            >
              <Link to="/login" onClick={() => setIsOpen(false)} className="flex items-center gap-2 justify-center">
                <LogIn size={16} />
                Login
              </Link>
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
