
import React from "react";
import { Link } from "react-router-dom";
import { Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-unnati-dark text-white pt-12 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-xl font-bold mb-4">Unnati Traders</h3>
            <p className="text-gray-300 mb-4">
              Leading manufacturer and supplier of wires and electric hardware in the region.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-300 hover:text-unnati-secondary">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-300 hover:text-unnati-secondary">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-gray-300 hover:text-unnati-secondary">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-gray-300 hover:text-unnati-secondary">
                <Linkedin size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-300 hover:text-unnati-secondary">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-300 hover:text-unnati-secondary">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/products" className="text-gray-300 hover:text-unnati-secondary">
                  Products & Services
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-300 hover:text-unnati-secondary">
                  Contact
                </Link>
              </li>
              <li>
                <Link to="/franchise" className="text-gray-300 hover:text-unnati-secondary">
                  Franchise & Distribution
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-xl font-bold mb-4">Our Services</h3>
            <ul className="space-y-2">
              <li className="text-gray-300">Wire Manufacturing</li>
              <li className="text-gray-300">Electric Hardware Supply</li>
              <li className="text-gray-300">Distribution Network</li>
              <li className="text-gray-300">Buy Now, Pay Later</li>
              <li className="text-gray-300">Franchise Opportunities</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-bold mb-4">Contact Us</h3>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <MapPin className="text-unnati-secondary mt-1 flex-shrink-0" size={18} />
                <p className="text-gray-300">123 Industrial Area, Business District, City - 123456</p>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="text-unnati-secondary flex-shrink-0" size={18} />
                <p className="text-gray-300">+91 98765 43210</p>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="text-unnati-secondary flex-shrink-0" size={18} />
                <p className="text-gray-300">info@unnatitraders.com</p>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-6">
          <p className="text-center text-gray-400">
            &copy; {new Date().getFullYear()} Unnati Traders. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
