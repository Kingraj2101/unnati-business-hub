
import React from "react";
import { Link } from "react-router-dom";
import { Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-b from-[#0a0c1b] to-[#060812] text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center mb-6">
              <img 
                src="/lovable-uploads/2f65710c-403d-4ccb-a52d-0b99adc116a8.png" 
                alt="Shree Unnati Traders Logo" 
                className="h-24 mb-2" 
              />
            </div>
            <p className="text-gray-300 mb-6">
              Leading manufacturer and supplier of wires and electric hardware in the region, committed to quality and innovation since 1995.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-unnati-primary transition-colors">
                <Facebook size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-unnati-primary transition-colors">
                <Twitter size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-unnati-primary transition-colors">
                <Instagram size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-unnati-primary transition-colors">
                <Linkedin size={18} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-6 text-unnati-secondary">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/" className="text-gray-300 hover:text-unnati-primary transition-colors flex items-center">
                  <span className="h-1 w-4 bg-unnati-secondary mr-2"></span>
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-300 hover:text-unnati-primary transition-colors flex items-center">
                  <span className="h-1 w-4 bg-unnati-secondary mr-2"></span>
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/products" className="text-gray-300 hover:text-unnati-primary transition-colors flex items-center">
                  <span className="h-1 w-4 bg-unnati-secondary mr-2"></span>
                  Products
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-300 hover:text-unnati-primary transition-colors flex items-center">
                  <span className="h-1 w-4 bg-unnati-secondary mr-2"></span>
                  Contact
                </Link>
              </li>
              <li>
                <Link to="/franchise" className="text-gray-300 hover:text-unnati-primary transition-colors flex items-center">
                  <span className="h-1 w-4 bg-unnati-secondary mr-2"></span>
                  Franchise & Distribution
                </Link>
              </li>
            </ul>
          </div>

          {/* Products */}
          <div>
            <h3 className="text-xl font-bold mb-6 text-unnati-secondary">Our Products</h3>
            <ul className="space-y-3">
              <li className="text-gray-300 flex items-center">
                <span className="h-1 w-4 bg-unnati-primary mr-2"></span>
                Copper Wires
              </li>
              <li className="text-gray-300 flex items-center">
                <span className="h-1 w-4 bg-unnati-primary mr-2"></span>
                Aluminum Wires
              </li>
              <li className="text-gray-300 flex items-center">
                <span className="h-1 w-4 bg-unnati-primary mr-2"></span>
                Switchgear
              </li>
              <li className="text-gray-300 flex items-center">
                <span className="h-1 w-4 bg-unnati-primary mr-2"></span>
                Circuit Breakers
              </li>
              <li className="text-gray-300 flex items-center">
                <span className="h-1 w-4 bg-unnati-primary mr-2"></span>
                LED Lighting
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-bold mb-6 text-unnati-secondary">Contact Us</h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <MapPin className="text-unnati-primary mt-1 flex-shrink-0" size={20} />
                <p className="text-gray-300">123 Industrial Area, Business District, City - 123456</p>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="text-unnati-primary flex-shrink-0" size={20} />
                <p className="text-gray-300">+91 98765 43210</p>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="text-unnati-primary flex-shrink-0" size={20} />
                <p className="text-gray-300">info@unnatitraders.com</p>
              </div>
              <div className="pt-4">
                <Link 
                  to="/contact" 
                  className="px-6 py-2 bg-gradient-to-r from-unnati-primary to-blue-700 hover:from-unnati-primary/90 hover:to-blue-800 text-white rounded-md inline-block"
                >
                  Get In Touch
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-800 text-center">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400">
              &copy; {new Date().getFullYear()} Shree Unnati Traders. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link to="/privacy-policy" className="text-gray-400 hover:text-unnati-primary text-sm">Privacy Policy</Link>
              <Link to="/terms" className="text-gray-400 hover:text-unnati-primary text-sm">Terms of Service</Link>
              <Link to="/sitemap" className="text-gray-400 hover:text-unnati-primary text-sm">Sitemap</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
