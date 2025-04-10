
import React from "react";
import { Link } from "react-router-dom";
import { Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-[#0d1a2d] text-white pt-12 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <img 
                src="/lovable-uploads/e19f7679-ab22-4e53-a653-5c908d157cf0.png" 
                alt="Shree Unnati Traders Logo" 
                className="h-10" 
              />
              <div className="flex flex-col">
                <span className="text-xl font-bold text-unnati-accent">Shree Unnati</span>
                <span className="text-xs text-unnati-silver -mt-1">WIRES & TRADERS</span>
              </div>
            </div>
            <p className="text-gray-300 mb-4">
              Leading manufacturer and supplier of wires and electric hardware in the region.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-300 hover:text-unnati-accent">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-300 hover:text-unnati-accent">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-gray-300 hover:text-unnati-accent">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-gray-300 hover:text-unnati-accent">
                <Linkedin size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-300 hover:text-unnati-accent">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-300 hover:text-unnati-accent">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/products" className="text-gray-300 hover:text-unnati-accent">
                  Products
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-300 hover:text-unnati-accent">
                  Contact
                </Link>
              </li>
              <li>
                <Link to="/franchise" className="text-gray-300 hover:text-unnati-accent">
                  Franchise & Distribution
                </Link>
              </li>
            </ul>
          </div>

          {/* Products */}
          <div>
            <h3 className="text-xl font-bold mb-4">Our Products</h3>
            <ul className="space-y-2">
              <li className="text-gray-300">Copper Wires</li>
              <li className="text-gray-300">Aluminum Wires</li>
              <li className="text-gray-300">Switchgear</li>
              <li className="text-gray-300">Circuit Breakers</li>
              <li className="text-gray-300">LED Lighting</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-bold mb-4">Contact Us</h3>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <MapPin className="text-unnati-accent mt-1 flex-shrink-0" size={18} />
                <p className="text-gray-300">123 Industrial Area, Business District, City - 123456</p>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="text-unnati-accent flex-shrink-0" size={18} />
                <p className="text-gray-300">+91 98765 43210</p>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="text-unnati-accent flex-shrink-0" size={18} />
                <p className="text-gray-300">info@unnatitraders.com</p>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-6">
          <p className="text-center text-gray-400">
            &copy; {new Date().getFullYear()} Shree Unnati Wires & Traders. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
