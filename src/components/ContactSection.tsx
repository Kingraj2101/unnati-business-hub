
import React from "react";
import { Button } from "@/components/ui/button";
import { Phone, Mail, MapPin } from "lucide-react";
import { Link } from "react-router-dom";

const ContactSection = () => {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold text-unnati-dark mb-6">
              Get in Touch
            </h2>
            <p className="text-gray-600 mb-8">
              Contact us to learn more about our products, services, or our business management system. We're here to support your business needs.
            </p>
            
            <div className="space-y-4">
              <div className="flex items-start">
                <div className="text-unnati-primary mr-4">
                  <Phone size={24} />
                </div>
                <div>
                  <h3 className="font-semibold text-lg">Phone</h3>
                  <p className="text-gray-600">+91 98765 43210</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="text-unnati-primary mr-4">
                  <Mail size={24} />
                </div>
                <div>
                  <h3 className="font-semibold text-lg">Email</h3>
                  <p className="text-gray-600">info@unnatitraders.com</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="text-unnati-primary mr-4">
                  <MapPin size={24} />
                </div>
                <div>
                  <h3 className="font-semibold text-lg">Location</h3>
                  <p className="text-gray-600">123 Industrial Area, Business District, City - 123456</p>
                </div>
              </div>
            </div>
            
            <div className="mt-8">
              <Button 
                asChild
                className="bg-unnati-primary hover:bg-unnati-primary/90"
              >
                <Link to="/contact">
                  Visit Contact Page
                </Link>
              </Button>
            </div>
          </div>
          
          <div className="bg-gray-100 rounded-lg p-8">
            <h3 className="text-2xl font-semibold mb-6 text-unnati-dark">Quick Inquiry</h3>
            <form className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-unnati-primary/50"
                  placeholder="Your Name"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-unnati-primary/50"
                  placeholder="Your Email"
                />
              </div>
              
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                  Phone
                </label>
                <input
                  type="tel"
                  id="phone"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-unnati-primary/50"
                  placeholder="Your Phone Number"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={4}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-unnati-primary/50"
                  placeholder="Your Message"
                ></textarea>
              </div>
              
              <Button 
                type="submit" 
                className="w-full bg-unnati-primary hover:bg-unnati-primary/90"
              >
                Submit Inquiry
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
