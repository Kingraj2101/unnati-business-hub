
import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const Hero = () => {
  return (
    <div className="relative bg-gradient-to-r from-[#0d1a2d] via-[#1a2a42] to-[#0d1a2d] text-white">
      {/* Decorative pattern */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNCI+PHBhdGggZD0iTTM2IDM0aDR2MWgtNHYtMXptMC0yaDF2NWgtMXYtNXptNiAwaDF2NWgtMXYtNXptLTEgMWg0djFoLTR2LTF6bS0yMyA0aDR2MWgtNHYtMXptMC0yaDF2NWgtMXYtNXptNiAwaDF2NWgtMXYtNXptLTEgMWg0djFoLTR2LTF6bTE2LTloNHYxaC00di0xem0wLTJoMXY1aC0xdi01em02IDBoMXY1aC0xdi01em0tMSAxaDR2MWgtNHYtMXptLTIzIDRoNHYxaC00di0xem0wLTJoMXY1aC0xdi01em02IDBoMXY1aC0xdi01em0tMSAxaDR2MWgtNHYtMXptMTYtOWg0djFoLTR2LTF6bTAtMmgxdjVoLTF2LTV6bTYgMGgxdjVoLTF2LTV6bS0xIDFoNHYxaC00di0xem0tMjMgNGg0djFoLTR2LTF6bTAtMmgxdjVoLTF2LTV6bTYgMGgxdjVoLTF2LTV6bS0xIDFoNHYxaC00di0xeiI+PC9wYXRoPjwvZz48L2c+PC9zdmc+')] opacity-20" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28 relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="text-center md:text-left md:w-1/2 mb-10 md:mb-0">
            <div className="mb-6">
              <img 
                src="/lovable-uploads/ad65662c-1df0-466d-9376-ab51d0e0621f.png" 
                alt="Unnati Wires and Traders" 
                className="h-24 mx-auto md:mx-0 mb-6" 
              />
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
              Premium Electrical <span className="text-unnati-accent">Solutions</span>
            </h1>
            <p className="mt-3 text-xl md:text-2xl font-light max-w-3xl">
              Leading manufacturers and suppliers of high-quality wires and electric hardware for all your needs
            </p>
            <div className="mt-8 flex flex-col md:flex-row gap-4 justify-center md:justify-start">
              <Button 
                asChild
                size="lg"
                className="bg-unnati-secondary hover:bg-unnati-secondary/90 text-white"
              >
                <Link to="/products">
                  Explore Our Products
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button 
                asChild
                size="lg"
                variant="outline"
                className="bg-white/10 backdrop-blur-sm text-white border-white hover:bg-white/20"
              >
                <Link to="/contact">
                  Contact Us
                </Link>
              </Button>
            </div>
          </div>
          <div className="md:w-1/2 flex justify-center">
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 p-8 rounded-xl shadow-2xl">
              <div className="grid grid-cols-2 gap-6">
                <div className="bg-unnati-primary/20 p-5 rounded-lg text-center">
                  <div className="text-unnati-accent text-4xl font-bold mb-2">25+</div>
                  <div className="text-white/80">Years Experience</div>
                </div>
                <div className="bg-unnati-secondary/20 p-5 rounded-lg text-center">
                  <div className="text-unnati-accent text-4xl font-bold mb-2">500+</div>
                  <div className="text-white/80">Products</div>
                </div>
                <div className="bg-unnati-secondary/20 p-5 rounded-lg text-center">
                  <div className="text-unnati-accent text-4xl font-bold mb-2">50+</div>
                  <div className="text-white/80">Distributors</div>
                </div>
                <div className="bg-unnati-primary/20 p-5 rounded-lg text-center">
                  <div className="text-unnati-accent text-4xl font-bold mb-2">100%</div>
                  <div className="text-white/80">Quality Assured</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
