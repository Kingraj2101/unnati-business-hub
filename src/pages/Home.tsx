import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import FeatureSection from "@/components/FeatureSection";
import TestimonialSection from "@/components/TestimonialSection";
import ContactSection from "@/components/ContactSection";
import { Button } from "@/components/ui/button";
import { ArrowRight, ShieldCheck, Truck, Users, Zap } from "lucide-react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        {/* Hero Section with New Design */}
        <section className="bg-gradient-to-r from-[#0a0c1b] via-[#141a36] to-[#0a0c1b] text-white relative overflow-hidden">
          {/* Background Pattern */}
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNCI+PHBhdGggZD0iTTM2IDM0aDR2MWgtNHYtMXptMC0yaDF2NWgtMXYtNXptNiAwaDF2NWgtMXYtNXptLTEgMWg0djFoLTR2LTF6bS0yMyA0aDR2MWgtNHYtMXptMC0yaDF2NWgtMXYtNXptNiAwaDF2NWgtMXYtNXptLTEgMWg0djFoLTR2LTF6bTE2LTloNHYxaC00di0xem0wLTJoMXY1aC0xdi01em02IDBoMXY1aC0xdi01em0tMSAxaDR2MWgtNHYtMXptLTIzIDRoNHYxaC00di0xem0tMjMgNGg0djFoLTR2LTF6bTAtMmgxdjVoLTF2LTV6bTYgMGgxdjVoLTF2LTV6bS0xIDFoNHYxaC00di0xem0tMjMgNGg0djFoLTR2LTF6bTAtMmgxdjVoLTF2LTV6bTYgMGgxdjVoLTF2LTV6bS0xIDFoNHYxaC00di0xeiI+PC9wYXRoPjwvZz48L2c+PC9zdmc+')] opacity-20" />

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32 relative z-10">
            <div className="flex flex-col md:flex-row items-center justify-between gap-12">
              <div className="text-center md:text-left md:w-1/2">
                <div className="mb-8 mx-auto md:mx-0 max-w-[280px]">
                  <img 
                    src="/lovable-uploads/2f65710c-403d-4ccb-a52d-0b99adc116a8.png" 
                    alt="Shree Unnati Traders" 
                    className="w-full h-auto" 
                  />
                </div>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-blue-500 to-[#daa520]">
                  Premium Electrical Products
                </h1>
                <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-xl">
                  Leading manufacturer and supplier of high-quality electrical products and wires for industrial, commercial and residential applications since 1995.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                  <Button 
                    asChild
                    size="lg"
                    className="bg-gradient-to-r from-blue-600 to-blue-800 hover:from-blue-700 hover:to-blue-900 text-white border-none"
                  >
                    <Link to="/products">
                      Explore Products
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </Link>
                  </Button>
                  <Button 
                    asChild
                    size="lg"
                    variant="outline"
                    className="border-[#daa520] text-[#daa520] hover:bg-[#daa520]/10"
                  >
                    <Link to="/contact">
                      Contact Us
                    </Link>
                  </Button>
                </div>
              </div>
              <div className="md:w-1/2">
                <div className="relative">
                  {/* Glow effect */}
                  <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-[#daa520] rounded-lg blur-lg opacity-75"></div>
                  
                  <div className="relative bg-gradient-to-br from-gray-900/90 to-gray-800/90 backdrop-blur-sm border border-gray-700 p-8 rounded-lg shadow-2xl">
                    <div className="grid grid-cols-2 gap-6">
                      <div className="bg-blue-600/20 p-6 rounded-lg text-center transform transition-transform hover:scale-105">
                        <div className="text-[#daa520] text-4xl font-bold mb-2">30+</div>
                        <div className="text-gray-300">Years Experience</div>
                      </div>
                      <div className="bg-[#daa520]/20 p-6 rounded-lg text-center transform transition-transform hover:scale-105">
                        <div className="text-blue-400 text-4xl font-bold mb-2">1000+</div>
                        <div className="text-gray-300">Products</div>
                      </div>
                      <div className="bg-[#daa520]/20 p-6 rounded-lg text-center transform transition-transform hover:scale-105">
                        <div className="text-blue-400 text-4xl font-bold mb-2">150+</div>
                        <div className="text-gray-300">Distributors</div>
                      </div>
                      <div className="bg-blue-600/20 p-6 rounded-lg text-center transform transition-transform hover:scale-105">
                        <div className="text-[#daa520] text-4xl font-bold mb-2">100%</div>
                        <div className="text-gray-300">Quality Assured</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Added Feature Highlight Section */}
        <section className="py-16 bg-gradient-to-b from-[#0a0c1b] to-gray-100 dark:to-gray-900">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div className="flex flex-col items-center text-center p-6 bg-white dark:bg-gray-800 rounded-lg shadow-lg transform transition-all hover:-translate-y-2 hover:shadow-xl">
                <div className="h-16 w-16 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center mb-4">
                  <ShieldCheck className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-lg font-bold mb-2">Quality Assured</h3>
                <p className="text-gray-600 dark:text-gray-300">All products tested and certified for highest quality standards</p>
              </div>
              
              <div className="flex flex-col items-center text-center p-6 bg-white dark:bg-gray-800 rounded-lg shadow-lg transform transition-all hover:-translate-y-2 hover:shadow-xl">
                <div className="h-16 w-16 bg-amber-100 dark:bg-amber-900/30 rounded-full flex items-center justify-center mb-4">
                  <Truck className="h-8 w-8 text-[#daa520]" />
                </div>
                <h3 className="text-lg font-bold mb-2">Nationwide Delivery</h3>
                <p className="text-gray-600 dark:text-gray-300">Fast and reliable shipping across the country</p>
              </div>
              
              <div className="flex flex-col items-center text-center p-6 bg-white dark:bg-gray-800 rounded-lg shadow-lg transform transition-all hover:-translate-y-2 hover:shadow-xl">
                <div className="h-16 w-16 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center mb-4">
                  <Zap className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-lg font-bold mb-2">Energy Efficient</h3>
                <p className="text-gray-600 dark:text-gray-300">Products designed for maximum energy efficiency</p>
              </div>
              
              <div className="flex flex-col items-center text-center p-6 bg-white dark:bg-gray-800 rounded-lg shadow-lg transform transition-all hover:-translate-y-2 hover:shadow-xl">
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
