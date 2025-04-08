
import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        {/* About Hero */}
        <section className="bg-unnati-primary/10 py-16 md:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl font-bold text-unnati-dark mb-4">About Unnati Traders</h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Leading manufacturer and supplier of wires and electric hardware with a vision to empower businesses through integrated management solutions.
              </p>
            </div>
          </div>
        </section>

        {/* Our Story */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold text-unnati-dark mb-6">Our Story</h2>
                <p className="text-gray-600 mb-4">
                  Founded in 2010, Unnati Traders started as a small electrical goods shop with a vision to provide quality products to local businesses. Over the years, we expanded into wire manufacturing and established a strong distribution network across the region.
                </p>
                <p className="text-gray-600 mb-4">
                  Recognizing the challenges faced by businesses in the electrical industry, we developed our integrated business management solution that streamlines operations, inventory management, and financial tracking.
                </p>
                <p className="text-gray-600">
                  Today, we are proud to serve hundreds of businesses with our dual offering of quality products and innovative management solutions.
                </p>
              </div>
              <div className="rounded-lg overflow-hidden shadow-md">
                <img 
                  src="https://images.unsplash.com/photo-1581092921461-7d65ca45ec1e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" 
                  alt="Unnati Traders Factory" 
                  className="w-full h-auto"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Mission & Vision */}
        <section className="bg-gray-50 py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-unnati-dark">Our Mission & Vision</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white p-8 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold text-unnati-primary mb-4">Our Mission</h3>
                <p className="text-gray-600">
                  To provide high-quality electrical products and innovative business solutions that empower our customers to operate efficiently and grow sustainably. We strive to be the preferred partner for electrical businesses by delivering exceptional value through our products and services.
                </p>
              </div>
              <div className="bg-white p-8 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold text-unnati-primary mb-4">Our Vision</h3>
                <p className="text-gray-600">
                  To become the leading integrated provider of electrical products and business management solutions in India, known for innovation, quality, and customer satisfaction. We aim to transform how electrical businesses operate through our comprehensive approach to product supply and operational management.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-unnati-dark">Our Values</h2>
              <p className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto">
                The core principles that guide everything we do at Unnati Traders
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-sm text-center">
                <div className="w-16 h-16 bg-unnati-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-unnati-primary text-xl font-bold">1</span>
                </div>
                <h3 className="text-lg font-semibold text-unnati-dark mb-2">Quality</h3>
                <p className="text-gray-600">
                  We never compromise on the quality of our products and services, ensuring reliability and durability.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm text-center">
                <div className="w-16 h-16 bg-unnati-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-unnati-primary text-xl font-bold">2</span>
                </div>
                <h3 className="text-lg font-semibold text-unnati-dark mb-2">Integrity</h3>
                <p className="text-gray-600">
                  We conduct our business with honesty, transparency, and ethical practices at all times.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm text-center">
                <div className="w-16 h-16 bg-unnati-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-unnati-primary text-xl font-bold">3</span>
                </div>
                <h3 className="text-lg font-semibold text-unnati-dark mb-2">Innovation</h3>
                <p className="text-gray-600">
                  We constantly seek new ways to improve our products and services to meet evolving customer needs.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm text-center">
                <div className="w-16 h-16 bg-unnati-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-unnati-primary text-xl font-bold">4</span>
                </div>
                <h3 className="text-lg font-semibold text-unnati-dark mb-2">Customer Focus</h3>
                <p className="text-gray-600">
                  We place our customers at the center of everything we do, striving to exceed their expectations.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-unnati-primary text-white py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold mb-4">Ready to Transform Your Business?</h2>
            <p className="text-xl mb-8 max-w-3xl mx-auto">
              Join Unnati Traders today and experience the difference our products and management solutions can make for your business.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button 
                asChild
                className="bg-white text-unnati-primary hover:bg-white/90"
              >
                <Link to="/contact">
                  Contact Us
                </Link>
              </Button>
              <Button 
                asChild
                variant="outline"
                className="bg-transparent border-white text-white hover:bg-white/10"
              >
                <Link to="/products">
                  Explore Our Products
                </Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default About;
