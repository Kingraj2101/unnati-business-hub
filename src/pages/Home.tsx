import React, { useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FeatureSection from "@/components/FeatureSection";
import TestimonialSection from "@/components/TestimonialSection";
import ContactSection from "@/components/ContactSection";
import { Button } from "@/components/ui/button";
import { ArrowRight, ShieldCheck, Truck, Users, Zap, Cube } from "lucide-react";
import { Link } from "react-router-dom";
import WireModel from "@/components/3d/WireModel";
import Product3DCard from "@/components/3d/Product3DCard";
import Stat3DCard from "@/components/3d/Stat3DCard";

const Home = () => {
  // Add scroll animation effect
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-fade-in');
        }
      });
    }, { threshold: 0.1 });
    
    document.querySelectorAll('.scroll-animate').forEach((el) => {
      observer.observe(el);
      el.classList.remove('opacity-0');
    });
    
    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen flex flex-col overflow-x-hidden">
      <Navbar />
      <main className="flex-grow">
        {/* Hero Section with 3D Elements */}
        <section className="bg-gradient-to-r from-[#0a0c1b] via-[#141a36] to-[#0a0c1b] text-white relative overflow-hidden">
          {/* Background Pattern */}
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNCI+PHBhdGggZD0iTTM2IDM0aDR2MWgtNHYtMXptMC0yaDF2NWgtMXYtNXptNiAwaDF2NWgtMXYtNXptLTEgMWg0djFoLTR2LTF6bS0yMyA0aDR2MWgtNHYtMXptMC0yaDF2NWgtMXYtNXptNiAwaDF2NWgtMXYtNXptLTEgMWg0djFoLTR2LTF6bTE2LTloNHYxaC00di0xem0wLTJoMXY1aC0xdi01em02IDBoMXY1aC0xdi01em0tMSAxaDR2MWgtNHYtMXptLTIzIDRoNHYxaC00di0xem0tMjMgNGg0djFoLTR2LTF6bTAtMmgxdjVoLTF2LTV6bTYgMGgxdjVoLTF2LTV6bS0xIDFoNHYxaC00di0xem0tMjMgNGg0djFoLTR2LTF6bTAtMmgxdjVoLTF2LTV6bTYgMGgxdjVoLTF2LTV6bS0xIDFoNHYxaC00di0xeiI+PC9wYXRoPjwvZz48L2c+PC9zdmc+')] opacity-20" />

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-24 relative z-10">
            <div className="flex flex-col md:flex-row items-center justify-between gap-12">
              <div className="text-center md:text-left md:w-1/2 scroll-animate opacity-0">
                <div className="mb-8 mx-auto md:mx-0 max-w-[280px]">
                  <img 
                    src="/lovable-uploads/2f65710c-403d-4ccb-a52d-0b99adc116a8.png" 
                    alt="Shree Unnati Traders" 
                    className="w-full h-auto" 
                  />
                </div>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-blue-500 to-[#daa520] animate-glow">
                  Premium Electrical Products
                </h1>
                <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-xl">
                  Leading manufacturer and supplier of high-quality electrical products and wires for industrial, commercial and residential applications since 1995.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                  <Button 
                    asChild
                    size="lg"
                    className="bg-gradient-to-r from-blue-600 to-blue-800 hover:from-blue-700 hover:to-blue-900 text-white border-none shadow-lg shadow-blue-700/20 hover:shadow-blue-700/40 transition-all duration-300"
                  >
                    <Link to="/products" className="flex items-center gap-2">
                      <Cube className="h-5 w-5" />
                      Explore Products
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </Link>
                  </Button>
                  <Button 
                    asChild
                    size="lg"
                    variant="outline"
                    className="border-[#daa520] text-[#daa520] hover:bg-[#daa520]/10 backdrop-blur-sm shadow-lg shadow-[#daa520]/10 hover:shadow-[#daa520]/20 transition-all duration-300"
                  >
                    <Link to="/contact">
                      Contact Us
                    </Link>
                  </Button>
                </div>
              </div>
              
              <div className="md:w-1/2 scroll-animate opacity-0">
                <div className="relative">
                  {/* Replace static stats with 3D wire model */}
                  <WireModel />
                </div>
              </div>
            </div>
          </div>
          
          {/* Curved bottom edge */}
          <div className="absolute bottom-0 left-0 right-0 h-16">
            <svg className="absolute bottom-0 w-full h-16" preserveAspectRatio="none" viewBox="0 0 1440 54">
              <path 
                fill="white" 
                fillOpacity="1" 
                d="M0,32L60,37.3C120,43,240,53,360,48C480,43,600,21,720,16C840,11,960,21,1080,24C1200,27,1320,21,1380,18.7L1440,16L1440,54L1380,54C1320,54,1200,54,1080,54C960,54,840,54,720,54C600,54,480,54,360,54C240,54,120,54,60,54L0,54Z"
                className="fill-gray-100 dark:fill-gray-900"
              ></path>
            </svg>
          </div>
        </section>

        {/* 3D Stats Section */}
        <section className="py-16 bg-gray-100 dark:bg-gray-900 relative">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div className="scroll-animate opacity-0">
                <Stat3DCard value="30+" label="Years Experience" color="blue" />
              </div>
              <div className="scroll-animate opacity-0" style={{ animationDelay: "100ms" }}>
                <Stat3DCard value="1000+" label="Products" color="gold" />
              </div>
              <div className="scroll-animate opacity-0" style={{ animationDelay: "200ms" }}>
                <Stat3DCard value="150+" label="Distributors" color="gold" />
              </div>
              <div className="scroll-animate opacity-0" style={{ animationDelay: "300ms" }}>
                <Stat3DCard value="100%" label="Quality Assured" color="blue" />
              </div>
            </div>
          </div>
        </section>

        {/* 3D Products Section */}
        <section className="py-20 bg-gradient-to-b from-gray-100 to-white dark:from-gray-900 dark:to-gray-800 relative">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12 scroll-animate opacity-0">
              <h2 className="text-3xl font-bold mb-4">Our Featured Products</h2>
              <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                Discover our premium range of high-quality electrical products designed for reliability and performance
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="scroll-animate opacity-0" style={{ animationDelay: "100ms" }}>
                <Product3DCard 
                  title="Premium Copper Wires" 
                  image="/lovable-uploads/2f65710c-403d-4ccb-a52d-0b99adc116a8.png"
                  description="High conductivity copper wires for residential and commercial applications with superior durability."
                />
              </div>
              <div className="scroll-animate opacity-0" style={{ animationDelay: "200ms" }}>
                <Product3DCard 
                  title="Circuit Breakers" 
                  image="/lovable-uploads/2f65710c-403d-4ccb-a52d-0b99adc116a8.png"
                  description="State-of-the-art circuit protection devices with advanced safety features and reliable performance."
                />
              </div>
              <div className="scroll-animate opacity-0" style={{ animationDelay: "300ms" }}>
                <Product3DCard 
                  title="LED Lighting Solutions" 
                  image="/lovable-uploads/2f65710c-403d-4ccb-a52d-0b99adc116a8.png"
                  description="Energy-efficient LED lighting products for both indoor and outdoor applications with long lifespan."
                />
              </div>
            </div>
            
            <div className="text-center mt-12 scroll-animate opacity-0">
              <Button 
                asChild
                variant="default" 
                className="bg-gradient-to-r from-blue-600 to-blue-700 text-white hover:from-blue-700 hover:to-blue-800"
              >
                <Link to="/products" className="flex items-center">
                  View All Products
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Feature Icons with 3D Hover */}
        <section className="py-16 bg-white dark:bg-gray-800">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12 scroll-animate opacity-0">Why Choose Us</h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div className="flex flex-col items-center text-center p-6 bg-white dark:bg-gray-800 rounded-lg shadow-lg transform transition-all hover:-translate-y-2 hover:shadow-xl scroll-animate opacity-0">
                <div className="h-16 w-16 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center mb-4">
                  <ShieldCheck className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-lg font-bold mb-2">Quality Assured</h3>
                <p className="text-gray-600 dark:text-gray-300">All products tested and certified for highest quality standards</p>
              </div>
              
              <div className="flex flex-col items-center text-center p-6 bg-white dark:bg-gray-800 rounded-lg shadow-lg transform transition-all hover:-translate-y-2 hover:shadow-xl scroll-animate opacity-0" style={{ animationDelay: "100ms" }}>
                <div className="h-16 w-16 bg-amber-100 dark:bg-amber-900/30 rounded-full flex items-center justify-center mb-4">
                  <Truck className="h-8 w-8 text-[#daa520]" />
                </div>
                <h3 className="text-lg font-bold mb-2">Nationwide Delivery</h3>
                <p className="text-gray-600 dark:text-gray-300">Fast and reliable shipping across the country</p>
              </div>
              
              <div className="flex flex-col items-center text-center p-6 bg-white dark:bg-gray-800 rounded-lg shadow-lg transform transition-all hover:-translate-y-2 hover:shadow-xl scroll-animate opacity-0" style={{ animationDelay: "200ms" }}>
                <div className="h-16 w-16 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center mb-4">
                  <Zap className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-lg font-bold mb-2">Energy Efficient</h3>
                <p className="text-gray-600 dark:text-gray-300">Products designed for maximum energy efficiency</p>
              </div>
              
              <div className="flex flex-col items-center text-center p-6 bg-white dark:bg-gray-800 rounded-lg shadow-lg transform transition-all hover:-translate-y-2 hover:shadow-xl scroll-animate opacity-0" style={{ animationDelay: "300ms" }}>
                <div className="h-16 w-16 bg-amber-100 dark:bg-amber-900/30 rounded-full flex items-center justify-center mb-4">
                  <Users className="h-8 w-8 text-[#daa520]" />
                </div>
                <h3 className="text-lg font-bold mb-2">Expert Support</h3>
                <p className="text-gray-600 dark:text-gray-300">Dedicated team of experts for technical assistance</p>
              </div>
            </div>
          </div>
        </section>

        {/* Keep the existing component sections */}
        <FeatureSection />
        <TestimonialSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default Home;
